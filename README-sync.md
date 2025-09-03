# GitHub Sync (zipball)

Use these scripts to import files from the upstream repository into this fork.

## 1) Sync only the data/ folder (recommended)

- Dry run
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --dry-run true

- Apply with backups
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true

- Verify import
  node scripts/verify-data.mjs

## 2) General sync with preserve and onlyPaths

- Dry run
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --onlyPaths "data/**,public/locales/**" --preserve "scripts/**,README-sync.md" --dry-run true

- Apply
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --onlyPaths "data/**,public/locales/**" --preserve "scripts/**,README-sync.md" --backup true

Notes:
- These scripts use Node 18+ (built-in fetch) and `jszip`.
- Use a preserve list to avoid overwriting local modifications (e.g., scripts or docs).
- If Vercel builds fail due to stale cache, try redeploying without the existing build cache from the dashboard. [^1]
- Do not store secrets in files. Configure environment variables in Vercel Project Settings. [^4]
