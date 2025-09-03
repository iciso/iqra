#!/usr/bin/env node
/**
 * Sync ONLY the `data/` folder from a GitHub repo into the current project.
 *
 * Usage:
 *  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation
 *  node scripts/sync-only-data.mjs --repo iciso/iqra --branch main --backup true --dry-run
 */

import { parseArgs } from 'node:util'
import { syncFromGithub } from './sync-from-github.mjs'

function parseBoolean(val, defaultValue = false) {
  if (val === undefined) return defaultValue
  if (typeof val === 'boolean') return val
  const v = String(val).toLowerCase().trim()
  return v === 'true' || v === '1' || v === 'yes'
}

async function main() {
  const {
    values: {
      repo,
      branch = 'main',
      backup,
      dryRun,
      preserve,
    },
  } = parseArgs({
    options: {
      repo: { type: 'string', short: 'r' },
      branch: { type: 'string', short: 'b' },
      backup: { type: 'string' },
      dryRun: { type: 'string' },
      preserve: { type: 'string', short: 'p' }, // optional, comma-separated
    },
  })

  if (!repo) {
    console.error('Error: --repo is required. Example: --repo iciso/iqra')
    process.exit(1)
  }

  const backupFlag = parseBoolean(backup, false)
  const dryRunFlag = parseBoolean(dryRun, false)
  const preserveList = (preserve ? String(preserve) : '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

  await syncFromGithub({
    repo,
    branch,
    preserve: preserveList,
    onlyPaths: ['data/'],
    backup: backupFlag,
    dryRun: dryRunFlag,
  })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
