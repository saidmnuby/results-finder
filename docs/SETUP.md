# Smart Results Finder Setup

## Runtime

The project uses Node.js 20 or newer and the built-in SQLite driver. No npm package installation is required for the current MVP.

Verify the runtime:

```powershell
node --version
npm.cmd --version
```

Run commands from the repository root, where `package.json` and `server.js` are visible.

## Start the server

Set an administrator token in the current terminal session:

```powershell
$env:ADMIN_TOKEN = "replace-with-a-long-random-development-token"
node server.js
```

Open the public application at `http://localhost:3000`.

The server creates `storage/results-finder.sqlite` automatically from the migration and seed files. The database stores metadata only, not candidate result records.

## Test

From a second terminal opened in the same repository root:

```powershell
npm.cmd test
```

The test command covers the parser, validation, retrieval fixture, server foundation, and admin-token comparison.

## Admin monitoring

Open `http://localhost:3000/admin.html` and enter the same value used for `ADMIN_TOKEN`.

The monitoring endpoint is:

```text
GET /admin/monitoring
Authorization: Bearer <admin-token>
```

The endpoint is protected on the server. Do not place the administrator token in source files or commit it to version control.

## Current MVP boundary

The CSEE result adapter is a local fixture adapter for development and testing. It is not a live NECTA integration. A live adapter must only be added after source accessibility, permission, and legal requirements are verified.

The project does not implement arbitrary URL scraping, CAPTCHA bypass, bulk harvesting, or permanent candidate-result storage.
