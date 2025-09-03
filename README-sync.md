# GitHub Sync Scripts

This project includes two Node scripts to synchronize files from a GitHub repository zipball.

## 1) General-purpose sync

Sync any paths and optionally preserve some:

- Dry run:
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch main --dry-run

- Sync data and locales, preserving scripts and this README:
  node scripts/sync-from-github.mjs --repo iciso/iqra --branch main --onlyPaths data,public/locales --preserve "scripts,README-sync.md" --backup true

Options:
- --repo=owner/repo (default iciso/iqra)
- --branch=name (default main)
- --onlyPaths=comma,separated,paths (optional)
- --preserve=comma,separated,paths (optional)
- --backup=true|false (default false)
- --dry-run=true|false (default false)

Backups go to .sync-backup/YYYY-MM-DDTHH-mm-ssZ/

## 2) Sync only data/

To pull in all upstream question sets (e.g., 21 categories with 30 easy/30 advanced):

- Dry run:
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --dry-run

- Execute with backup:
  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true

## 3) Verify data

Heuristic question count:
  node scripts/verify-data.mjs

This counts "question:" occurrences and prints totals. It’s a quick sanity check, not a strict validator.
