# GitHub Sync Utilities

This project includes scripts to import files from a GitHub repository zipball into your current workspace.

## General Sync

Sync any part of a repo:

- Dry run (preview changes):
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --dry-run true

- Sync with backup, preserving local scripts and lockfiles:
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true --preserve "scripts/,pnpm-lock.yaml,package-lock.json,yarn.lock"

- Sync only specific paths (comma-separated):
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --onlyPaths "data/,public/locales/" --backup true

Notes:
- preserve and onlyPaths are path-prefix filters relative to project root.
- Backups are written to .backup/<repo>@<branch>-<timestamp>/.

## Data-Only Sync (Recommended)

To import all upstream categories and questions (21 categories, 30 easy and 30 advanced each):

- Dry run:
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --dry-run true

- Apply with backup:
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true

## Verify Data

Run a heuristic verification of question counts:
  node scripts/verify-data.mjs

This lists each data file and approximates easy/advanced markers.

## Build Tips

If a build keeps failing due to stale cache, redeploy without the build cache from the Vercel dashboard or CLI. See Vercel docs on managing build cache. [^1]
