INSERT OR IGNORE INTO examinations (code, name, status) VALUES
('CSEE', 'Certificate of Secondary Education Examination', 'active'),
('ACSEE', 'Advanced Certificate of Secondary Education Examination', 'active'),
('PSLE', 'Primary School Leaving Examination', 'active');

INSERT OR IGNORE INTO examination_years (examination_id, year, status) VALUES
(1, '2025', 'active'),
(1, '2024', 'active'),
(1, '2023', 'active'),
(2, '2025', 'active'),
(2, '2024', 'active'),
(3, '2025', 'active');

INSERT OR IGNORE INTO regions (name, code) VALUES
('Dar es Salaam', 'DAR'),
('Morogoro', 'MOR');

INSERT OR IGNORE INTO districts (region_id, name, code) VALUES
(1, 'Kinondoni', 'KIN'),
(1, 'Temeke', 'TEM'),
(2, 'Morogoro Municipal', 'MOR-M');

INSERT OR IGNORE INTO schools (district_id, name, centre_code, status) VALUES
(1, 'Jangwani Secondary School', 'JWS-01', 'active'),
(1, 'Mbezi Beach Secondary School', 'MBS-02', 'active'),
(2, 'Azimio Secondary School', 'AZI-01', 'active'),
(2, 'Nelson Mandela Secondary School', 'NMS-02', 'active'),
(3, 'Kihonda Secondary School', 'KIH-01', 'active'),
(3, 'Mafiga Secondary School', 'MAF-01', 'active');

INSERT OR IGNORE INTO source_configs (examination_id, year_id, source_type, source_identifier, parser_version, status, last_verified_at) VALUES
(1, 1, 'public_html', 'necta_csee_2025', 'v1.0.0', 'active', '2026-08-28T00:00:00Z'),
(1, 2, 'public_html', 'necta_csee_2024', 'v1.0.0', 'active', '2026-08-28T00:00:00Z'),
(3, 6, 'public_html', 'necta_psle_2025', 'v1.0.0', 'active', '2026-08-28T00:00:00Z');
