#!/usr/bin/env node
/**
 * Focused sync to import only the data/ folder from a GitHub repo.
 *
 * Usage:
 *  node scripts/sync-only-data.mjs --repo iciso/iqra --branch main [--dry-run true] [--backup true]
 *
 * This will bring in all categories/questions from upstream "data/**".
 */

import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const args = process.argv.slice(2)
const toKV = (arr) =>
  arr.reduce((acc, cur, i) => {
    if (cur.startsWith('--')) acc[cur.slice(2)] = arr[i + 1] ?? true
    return acc
  }, {})

const opts = toKV(args)
const repo = opts.repo || 'iciso/iqra'
const branch = opts.branch || 'main'
const dryRun = String(opts['dry-run'] ?? opts.dry_run ?? 'false') === 'true'
const backup = String(opts.backup ?? 'true') === 'true'

// Build args for sync-from-github.mjs
const cmdArgs = [
  path.join(__dirname, 'sync-from-github.mjs'),
  '--repo',
  repo,
  '--branch',
  branch,
  '--onlyPaths',
  'data/**',
  '--preserve',
  // Preserve the scripts and this demo/readme by default
  'scripts/**,README-sync.md',
  '--backup',
  String(backup),
  '--dry-run',
  String(dryRun),
]

const child = spawn('node', cmdArgs, { stdio: 'inherit' })
child.on('close', (code) => {
  process.exit(code ?? 0)
})
