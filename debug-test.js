import { Script, createContext } from 'node:vm';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));
let output = [];

const logConsole = {
  log: (...args) => output.push(`[LOG] ${args.join(' ')}`),
  error: (...args) => output.push(`[ERROR] ${args.join(' ')}`),
  warn: (...args) => output.push(`[WARN] ${args.join(' ')}`)
};

async function debug() {
  output.push(`Starting debug at ${new Date().toISOString()}`);
  
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

  const context = {
    console: logConsole,
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
    MetadataDatabase: null
  };
  context.window = context;
  createContext(context);

  for (const relativePath of applicationFiles) {
    output.push(`Loading ${relativePath}...`);
    try {
      const source = await readFile(join(projectRoot, relativePath), 'utf8');
      new Script(source, { filename: relativePath }).runInContext(context);
      output.push(`  ✓ Loaded`);
    } catch (error) {
      output.push(`  ✗ Error loading: ${error.message}`);
      await writeFile(join(projectRoot, 'debug-output.txt'), output.join('\n'));
      return;
    }
  }

  // Test the router
  output.push('\nTesting router resolve...');
  try {
    const result = await context.ResultsFinderRouter.resolve('POST', '/search/index', {
      examination: 'CSEE',
      year: '2025',
      indexNumber: 'S1673/3472'
    });
    output.push('Result: ' + JSON.stringify(result, null, 2));
  } catch (error) {
    output.push('Error resolving route: ' + error.message);
  }

  await writeFile(join(projectRoot, 'debug-output.txt'), output.join('\n'));
  console.log('Debug output written to debug-output.txt');
}

debug().catch(console.error);
