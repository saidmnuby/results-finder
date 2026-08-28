import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, rmSync, existsSync } from 'node:fs';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve, join } from 'node:path';
import { MetadataDatabase } from '../app/Data/MetadataDatabase.js';

const projectRoot = resolve(import.meta.dirname, '..');

 test('Node project foundation is configured', async () => {
  const packageConfig = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf8'));

  assert.equal(packageConfig.type, 'module');
  assert.equal(packageConfig.scripts.start, 'node server.js');
  assert.equal(packageConfig.scripts.test, 'node --test tests/*.test.js');
});

test('MetadataDatabase creates the storage directory before opening SQLite', async () => {
  const tempRoot = mkdtempSync(join(tmpdir(), 'results-finder-db-'));
  const missingDir = join(tempRoot, 'nested', 'storage');
  const databasePath = join(missingDir, 'results-finder.sqlite');
  const migrationPath = resolve(projectRoot, 'database', 'migrations', '001_create_metadata_tables.sql');
  const seedPath = resolve(projectRoot, 'database', 'seeders', '001_seed_metadata.sql');

  const database = new MetadataDatabase(databasePath, migrationPath, seedPath);
  await database.initialize();

  assert.equal(existsSync(missingDir), true, 'storage directory should be created automatically');
  assert.equal(existsSync(databasePath), true, 'database file should be created automatically');

  database.close();
  rmSync(tempRoot, { recursive: true, force: true });
});
