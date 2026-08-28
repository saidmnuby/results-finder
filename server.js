import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script, createContext } from 'node:vm';
import { MetadataDatabase } from './app/Data/MetadataDatabase.js';
import { authorizeAdmin } from './app/Security/AdminAuth.js';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
const publicRoot = join(projectRoot, 'public');
const port = Number(process.env.PORT || 3000);
let AdminController = null;
const database = new MetadataDatabase(
  join(projectRoot, 'storage', 'results-finder.sqlite'),
  join(projectRoot, 'database', 'migrations', '001_create_metadata_tables.sql'),
  join(projectRoot, 'database', 'seeders', '001_seed_metadata.sql')
);
const applicationFiles = [
  'app/Security/InputValidator.js',
  'app/Services/SearchService.js',
  'app/Services/SchoolService.js',
  'app/Services/ResultService.js',
  'app/Controllers/AdminController.js',
  'app/Retrieval/RequestController.js',
  'app/Retrieval/SourceResolver.js',
  'app/Retrieval/ResultValidator.js',
  'app/Retrieval/RateLimiter.js',
  'app/Retrieval/Parser/CSEEParser.js',
  'app/Retrieval/Adapter/CSEEFixtureAdapter.js',
  'app/Retrieval/RetrievalManager.js',
  'app/Routes/router.js'
];

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

function resolvePublicPath(requestUrl) {
  const requestedPath = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const isApplicationScript = requestedPath.startsWith('/app/') && requestedPath.endsWith('.js');
  const root = isApplicationScript ? projectRoot : publicRoot;
  const relativePath = requestedPath === '/' ? 'index.html' : requestedPath.replace(/^\/+/, '');
  const filePath = normalize(join(root, relativePath));

  if (!filePath.startsWith(root)) {
    return null;
  }

  return filePath;
}

async function createApplicationContext() {
  const context = {
    console,
    URL,
    Date,
    JSON,
    Array,
    Object,
    Map,
    String,
    Number,
    Boolean,
    Error,
    setTimeout,
    clearTimeout,
    MetadataDatabase: database
  };
  context.window = context;
  createContext(context);

  for (const relativePath of applicationFiles) {
    const source = await readFile(join(projectRoot, relativePath), 'utf8');
    new Script(source, { filename: relativePath }).runInContext(context);
  }

  return context;
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff'
  });
  response.end(JSON.stringify(body));
}

function sendUnauthorized(response) {
  sendJson(response, 401, { ok: false, status: 'unauthorized', message: 'Administrator authentication is required.' });
}

async function readJsonBody(request) {
  let body = '';

  for await (const chunk of request) {
    body += chunk;
    if (body.length > 10000) {
      throw new Error('Request body is too large.');
    }
  }

  return body ? JSON.parse(body) : {};
}

async function handleApiRequest(request, response, context) {
  const requestUrl = new URL(request.url || '/', 'http://localhost');
  const path = requestUrl.pathname;
  const isGet = request.method === 'GET';
  const isPost = request.method === 'POST';
  const supportedGetRoutes = ['/locations/regions', '/locations/districts', '/locations/schools'];
  const supportedPostRoutes = ['/search/index', '/search/school'];

  if (path === '/admin/monitoring') {
    if (request.method !== 'GET') {
      sendJson(response, 405, { ok: false, status: 'method_not_allowed', message: 'Method not allowed.' });
      return true;
    }

    if (!authorizeAdmin(request)) {
      sendUnauthorized(response);
      return true;
    }

    sendJson(response, 200, AdminController.getMonitoring(database));
    return true;
  }

  if ((isGet && !supportedGetRoutes.includes(path)) || (isPost && !supportedPostRoutes.includes(path))) {
    return false;
  }

  if (!isGet && !isPost) {
    sendJson(response, 405, { ok: false, status: 'method_not_allowed', message: 'Method not allowed.' });
    return true;
  }

  try {
    const payload = isPost ? await readJsonBody(request) : Object.fromEntries(requestUrl.searchParams.entries());
    const result = await context.ResultsFinderRouter.resolve(request.method, path, payload);
    sendJson(response, result?.ok === false ? 400 : 200, result);
  } catch (error) {
    sendJson(response, 400, { ok: false, status: 'request_error', message: error.message || 'Request could not be processed.' });
  }

  return true;
}

await database.initialize();
const applicationContext = await createApplicationContext();
AdminController = applicationContext.AdminController;

const server = createServer(async (request, response) => {
  if (request.url?.startsWith('/search/') || request.url?.startsWith('/locations/') || request.url?.startsWith('/admin/')) {
    const handled = await handleApiRequest(request, response, applicationContext);
    if (handled) {
      return;
    }
  }

  if (request.method !== 'GET') {
    sendJson(response, 405, { ok: false, status: 'method_not_allowed', message: 'Method not allowed.' });
    return;
  }

  const filePath = resolvePublicPath(request.url || '/');

  if (!filePath) {
    response.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Bad request.');
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      'content-type': contentTypes[extname(filePath)] || 'application/octet-stream',
      'x-content-type-options': 'nosniff'
    });
    response.end(content);
  } catch (error) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found.');
  }
});

server.listen(port, () => {
  console.log(`Smart Results Finder listening on http://localhost:${port}`);
});
