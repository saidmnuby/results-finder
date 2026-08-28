# MVP API

All API responses are JSON. Public search and metadata requests are controlled by the server.

## Search

`POST /search/index`

```json
{
  "examination": "CSEE",
  "year": "2025",
  "indexNumber": "S1673/3472"
}
```

The current successful response is generated from the CSEE development fixture and is explicitly marked as demo data.

`POST /search/school`

Accepts examination, year, region, district, and school. The current MVP returns a school-navigation snapshot; it does not harvest candidate results.

## Location metadata

- `GET /locations/regions`
- `GET /locations/districts?region=Dar%20es%20Salaam`
- `GET /locations/schools?region=Dar%20es%20Salaam&district=Kinondoni`

These routes query the SQLite metadata database using parameterized statements.

## Administration

`GET /admin/monitoring`

Requires:

```text
Authorization: Bearer <ADMIN_TOKEN>
```

It returns source status and aggregate metadata counts. It does not return candidate results.
