# GitHub Sync Scripts

This project includes scripts to sync content from the upstream GitHub repository.

## Available Scripts

### 1. General Sync (`sync-from-github.mjs`)

Syncs all or specific files from a GitHub repository:

\`\`\`bash
# Sync everything (with default preserves)
node scripts/sync-from-github.mjs

# Sync from specific repo/branch
node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation

# Sync only specific paths
node scripts/sync-from-github.mjs --onlyPaths "data/,public/locales/"

# Dry run to see what would be synced
node scripts/sync-from-github.mjs --dry-run true

# Create backup before syncing
node scripts/sync-from-github.mjs --backup true
\`\`\`

### 2. Data-Only Sync (`sync-only-data.mjs`)

Syncs only the `data/` folder to import all categories and questions:

\`\`\`bash
# Sync data with backup
node scripts/sync-only-data.mjs --backup true

# Dry run
node scripts/sync-only-data.mjs --dry-run true
\`\`\`

### 3. Verification (`verify-data.mjs`)

Checks the data folder and counts questions:

\`\`\`bash
node scripts/verify-data.mjs
\`\`\`

## Default Behavior

- **Preserved paths**: `scripts/`, `README-sync.md`, `app/i18n-demo/`
- **Source**: `iciso/iqra` main branch
- **Backup**: Optional, creates timestamped backup folder

## Examples

\`\`\`bash
# Import all upstream data files
node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true

# Verify the import worked
node scripts/verify-data.mjs

# Sync everything except preserved files
node scripts/sync-from-github.mjs --repo iciso/iqra --branch main
