#!/usr/bin/env node
/**
 * Sync files from a GitHub repo zipball into the current project.
 *
 * Usage:
 *   node scripts/sync-from-github.mjs --repo iciso/iqra --branch main [--dry-run true] [--backup true]
 *     [--preserve "scripts/**,README-sync.md"] [--onlyPaths "data/**,public/locales/**"]
 *
 * Notes:
 * - Requires Node 18+ (built-in fetch).
 * - Will create backups if --backup true (adds .bak timestamp files).
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import JSZip from 'jszip'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function parseArgs() {
  const args = process.argv.slice(2)
  const opts = {}
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]
    const val = args[i + 1]
    if (!key?.startsWith('--')) continue
    const k = key.slice(2)
    opts[k] = val ?? true
  }
  // Defaults
  opts.repo ??= 'iciso/iqra'
  opts.branch ??= 'main'
  opts.dryRun = String(opts.dry_run ?? opts.dryRun ?? 'false') === 'true'
  opts.backup = String(opts.backup ?? 'false') === 'true'
  opts.preserve = (opts.preserve ? String(opts.preserve) : '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  opts.onlyPaths = (opts.onlyPaths ? String(opts.onlyPaths) : '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  return opts
}

function micromatchOne(target, patterns) {
  // tiny glob check: supports prefix folders and ** wildcard, simple * within segments
  const esc = (s) => s.replace(/[.+^${}()|[\]\\]/g, '\\$&')
  const toRegex = (pat) => {
    // convert patterns like "data/**" or "scripts/*.mjs"
    let rx = esc(pat)
      .replace(/\\\*\\\*/g, '.*')
      .replace(/\\\*/g, '[^/]*')
    if (!rx.startsWith('^')) rx = '^' + rx
    if (!rx.endsWith('$')) rx = rx + '$'
    return new RegExp(rx)
  }
  return patterns.some((p) => toRegex(p).test(target))
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function writeFileSafe(filePath, data, backup, dryRun) {
  if (dryRun) {
    console.log(`[dry-run] write ${filePath}`)
    return
  }
  // backup
  try {
    const existing = await fs.readFile(filePath)
    if (backup && existing) {
      const ts = new Date().toISOString().replace(/[:-]/g, '').replace(/\..+/, '')
      await fs.writeFile(filePath + '.' + ts + '.bak', existing)
    }
  } catch {}
  await ensureDir(path.dirname(filePath))
  await fs.writeFile(filePath, data)
}

async function downloadZip(repo, branch) {
  const url = `https://codeload.github.com/${repo}/zip/refs/heads/${branch}`
  console.log(`Downloading ${url} ...`)
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to download zip: ${res.status} ${res.statusText}`)
  }
  const buf = await res.arrayBuffer()
  return Buffer.from(buf)
}

function stripRootFolder(entryName, rootPrefix) {
  if (entryName.startsWith(rootPrefix)) {
    return entryName.slice(rootPrefix.length)
  }
  return entryName
}

async function main() {
  const opts = parseArgs()
  const { repo, branch, preserve, onlyPaths, backup, dryRun } = opts
  console.log('Sync options:', { repo, branch, preserve, onlyPaths, backup, dryRun })

  const zipBuf = await downloadZip(repo, branch)
  const zip = await JSZip.loadAsync(zipBuf)

  // The zip root folder looks like "<repo>-<branch>/..."
  const rootPrefix = Object.keys(zip.files)[0]?.split('/')[0] + '/'
  let written = 0

  for (const [entryName, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue
    const rel = stripRootFolder(entryName, rootPrefix)

    // skip top-level readme or empty name
    if (!rel || rel === '/') continue

    // honor onlyPaths if provided
    if (onlyPaths.length) {
      const matchOnly = micromatchOne(rel, onlyPaths)
      if (!matchOnly) continue
    }

    // skip preserved paths
    if (preserve.length && micromatchOne(rel, preserve)) {
      console.log(`Preserve: ${rel}`)
      continue
    }

    const content = await entry.async('nodebuffer')
    await writeFileSafe(rel, content, backup, dryRun)
    written++
  }

  console.log(`${dryRun ? '[dry-run] ' : ''}Sync complete. Files processed: ${written}`)
}

main().catch((err) => {
  console.error('Sync failed:', err)
  process.exit(1)
})
