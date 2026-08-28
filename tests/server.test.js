import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));

 test('Node project foundation is configured', async () => {
  const packageJsonPath = pathToFileURL(resolve(projectRoot, 'package.json')).href;
  const packageConfig = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf8'));

  assert.equal(packageConfig.type, 'module');
  assert.equal(packageConfig.scripts.start, 'node server.js');
  assert.equal(packageConfig.scripts.test, 'node --test tests/*.test.js');
  assert.equal(packageJsonPath.startsWith('file://'), true);
});
