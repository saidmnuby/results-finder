INSERT OR IGNORE INTO examinations (code, name, status) VALUES
('CSEE', 'Certificate of Secondary Education Examination', 'active'),
('ACSEE', 'Advanced Certificate of Secondary Education Examination', 'active'),
('PSLE', 'Primary School Leaving Examination', 'active');

INSERT OR IGNORE INTO examination_years (examination_id, year, status)
SELECT id, '2025', 'active' FROM examinations WHERE code = 'CSEE'
UNION ALL SELECT id, '2024', 'active' FROM examinations WHERE code = 'CSEE'
UNION ALL SELECT id, '2023', 'active' FROM examinations WHERE code = 'CSEE'
UNION ALL SELECT id, '2025', 'active' FROM examinations WHERE code = 'ACSEE'
UNION ALL SELECT id, '2024', 'active' FROM examinations WHERE code = 'ACSEE'
UNION ALL SELECT id, '2025', 'active' FROM examinations WHERE code = 'PSLE';

INSERT OR IGNORE INTO regions (name, code) VALUES
('Dar es Salaam', 'DAR'),
('Morogoro', 'MOR');

INSERT OR IGNORE INTO districts (region_id, name, code)
SELECT id, 'Kinondoni', 'KIN' FROM regions WHERE code = 'DAR'
UNION ALL SELECT id, 'Temeke', 'TEM' FROM regions WHERE code = 'DAR'
UNION ALL SELECT id, 'Morogoro Municipal', 'MOR-M' FROM regions WHERE code = 'MOR';

INSERT OR IGNORE INTO schools (district_id, name, centre_code, status)
SELECT id, 'Jangwani Secondary School', 'JWS-01', 'active' FROM districts WHERE code = 'KIN'
UNION ALL SELECT id, 'Mbezi Beach Secondary School', 'MBS-02', 'active' FROM districts WHERE code = 'KIN'
UNION ALL SELECT id, 'Azimio Secondary School', 'AZI-01', 'active' FROM districts WHERE code = 'TEM'
UNION ALL SELECT id, 'Nelson Mandela Secondary School', 'NMS-02', 'active' FROM districts WHERE code = 'TEM'
UNION ALL SELECT id, 'Kihonda Secondary School', 'KIH-01', 'active' FROM districts WHERE code = 'MOR-M'
UNION ALL SELECT id, 'Mafiga Secondary School', 'MAF-01', 'active' FROM districts WHERE code = 'MOR-M';

INSERT OR IGNORE INTO source_configs (examination_id, year_id, source_type, source_identifier, parser_version, status, last_verified_at)
SELECT examinations.id, examination_years.id, 'public_html', 'necta_csee_2025', 'v1.0.0', 'active', '2026-08-28T00:00:00Z'
FROM examinations JOIN examination_years ON examination_years.examination_id = examinations.id
WHERE examinations.code = 'CSEE' AND examination_years.year = '2025'

UNION ALL SELECT examinations.id, examination_years.id, 'public_html', 'necta_csee_2024', 'v1.0.0', 'active', '2026-08-28T00:00:00Z'
FROM examinations JOIN examination_years ON examination_years.examination_id = examinations.id
WHERE examinations.code = 'CSEE' AND examination_years.year = '2024'

UNION ALL SELECT examinations.id, examination_years.id, 'public_html', 'necta_psle_2025', 'v1.0.0', 'active', '2026-08-28T00:00:00Z'
FROM examinations JOIN examination_years ON examination_years.examination_id = examinations.id
WHERE examinations.code = 'PSLE' AND examination_years.year = '2025';
