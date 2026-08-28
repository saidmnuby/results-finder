import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';

export class MetadataDatabase {
  constructor(databasePath, migrationPath, seedPath) {
    this.databasePath = databasePath;
    this.migrationPath = migrationPath;
    this.seedPath = seedPath;
    this.database = new DatabaseSync(databasePath);
  }

  async initialize() {
    this.database.exec('PRAGMA foreign_keys = ON;');
    this.database.exec(await readFile(this.migrationPath, 'utf8'));
    this.database.exec(await readFile(this.seedPath, 'utf8'));
  }

  getRegions() {
    return this.database.prepare(
      'SELECT id, name, code FROM regions ORDER BY name'
    ).all();
  }

  getDistricts(regionName) {
    return this.database.prepare(
      `SELECT districts.id, districts.name, districts.code
       FROM districts
       JOIN regions ON regions.id = districts.region_id
       WHERE regions.name = ?
       ORDER BY districts.name`
    ).all(regionName);
  }

  getSchools(regionName, districtName) {
    return this.database.prepare(
      `SELECT schools.id, schools.name, schools.centre_code AS centreCode
       FROM schools
       JOIN districts ON districts.id = schools.district_id
       JOIN regions ON regions.id = districts.region_id
       WHERE regions.name = ? AND districts.name = ? AND schools.status = 'active'
       ORDER BY schools.name`
    ).all(regionName, districtName);
  }

  getSourceStatus() {
    return this.database.prepare(
      `SELECT examinations.code || ' ' || examination_years.year AS name,
              source_configs.status,
              source_configs.last_verified_at AS lastVerifiedAt
       FROM source_configs
       JOIN examinations ON examinations.id = source_configs.examination_id
       JOIN examination_years ON examination_years.id = source_configs.year_id
       ORDER BY examinations.code, examination_years.year DESC`
    ).all();
  }

  getMetadataCounts() {
    const tables = ['examinations', 'examination_years', 'regions', 'districts', 'schools', 'source_configs'];
    return Object.fromEntries(tables.map((table) => [
      table,
      this.database.prepare(`SELECT COUNT(*) AS count FROM ${table}`).get().count
    ]));
  }

  close() {
    this.database.close();
  }
}
