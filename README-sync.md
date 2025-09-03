# GitHub Sync Scripts

Use these scripts to sync files from a GitHub repository zipball into this project.

## Scripts

1) General sync
- Command:
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --onlyPaths data,public/locales --preserve scripts,.backup-sync --backup true
- Flags:
  - --repo owner/name
  - --branch branchName (default: main)
  - --onlyPaths comma-separated included path prefixes
  - --preserve comma-separated path prefixes to skip overwriting
  - --backup true|false (default: true) store backups in .backup-sync/<timestamp>
  - --dry-run true|false (default: false)

2) Data-only sync (recommended for bringing categories/questions)
- Dry run:
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --dry-run true
- Apply with backups:
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true

3) Verify imported data
- Command:
  node scripts/verify-data.mjs
- Output: lists data files with approximate counts of "easy" vs "advanced" questions.

## Notes

- These scripts download https://codeload.github.com/<repo>/zip/refs/heads/<branch> and extract into your project root.
- Use --preserve to avoid overwriting your local scripts or other sensitive files.
- Consider redeploying without the existing Build cache if you suspect stale artifacts in Vercel. See the Vercel docs for managing build cache and redeploying without cache. [^1]
