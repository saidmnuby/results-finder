# Smart Results Finder

Smart Results Finder is a controlled examination-result discovery MVP. It provides index-number search, Region -> District -> School navigation, metadata storage, and a protected operational monitoring endpoint.

## Status

The application is currently a development MVP. Its CSEE result path uses a local fixture adapter for safe testing; it does not claim to retrieve live NECTA results.

## Quick start

Use Node.js 20 or newer from the repository root:

```powershell
$env:ADMIN_TOKEN = "replace-with-a-long-random-development-token"
node server.js
```

Open `http://localhost:3000` for the public application or `http://localhost:3000/admin.html` for protected monitoring.

Run the test suite from a second terminal:

```powershell
npm.cmd test
```

## Architecture

Presentation -> Application -> Retrieval Manager -> Source Adapter -> Parser -> Result Validator

The database stores examination metadata, geographic hierarchy, source configuration, and limited operational information. Candidate results are not permanently stored.

## Documentation

- [Setup guide](docs/SETUP.md)
- [MVP API](docs/API.md)
- [Project tracker](PROJECT_TRACKER.md)

## Security boundary

The project does not accept arbitrary scraper URLs, bypass access controls, bypass CAPTCHA, perform bulk harvesting, or expose administrator credentials in browser code.
