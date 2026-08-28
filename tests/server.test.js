import test from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));

 test('Node project foundation is configured', async () => {
  const packageConfig = await import(`${projectRoot}/package.json`, { with: { type: 'json' } });

  assert.equal(packageConfig.default.type, 'module');
  assert.equal(packageConfig.default.scripts.start, 'node server.js');
  assert.equal(packageConfig.default.scripts.test, 'node --test tests/*.test.js');
});
