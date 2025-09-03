#!/usr/bin/env node
/**
 * Sync files from a GitHub repo zipball into the current working directory.
 *
 * Usage examples:
 *  node scripts/sync-from-github.mjs --repo iciso/iqra --branch main
 *  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --onlyPaths "data/,public/locales/" --preserve "scripts/,node_modules/,pnpm-lock.yaml"
 *  node scripts/sync-from-github.mjs --repo iciso/iqra --backup true --dry-run
 *
 * Notes:
 * - preserve is a comma-separated list of path prefixes to skip writing (relative to project root).
 * - onlyPaths is a comma-separated list of path prefixes to include (all other paths will be skipped).
 * - backup=true: any file to be overwritten is copied to .backup/<timestamp>/ before writing.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import JSZip from 'jszip'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function parseBoolean(val, defaultValue = false) {
  if (val === undefined) return defaultValue
  if (typeof val === 'boolean') return val
  const v = String(val).toLowerCase().trim()
  return v === 'true' || v === '1' || v === 'yes'
}

function parseCSV(val) {
  if (!val) return []
  return String(val)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

async function downloadZip(repo, branch) {
  const zipUrl = `https://codeload.github.com/${repo}/zip/refs/heads/${branch}`
  console.log(`Downloading zipball: ${zipUrl}`)
  const res = await fetch(zipUrl)
  if (!res.ok) {
    throw new Error(`Failed to download zipball: ${res.status} ${res.statusText}`)
  }
  const arrayBuffer = await res.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

function shouldPreserve(relPath, preservePrefixes) {
  return preservePrefixes.some((prefix) => relPath.startsWith(prefix))
}

function isIncluded(relPath, onlyPrefixes) {
  if (onlyPrefixes.length === 0) return true
  return onlyPrefixes.some((prefix) => relPath.startsWith(prefix))
}

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true })
}

async function backupFile(relPath, backupRoot) {
  const sourcePath = path.join(process.cwd(), relPath)
  const destPath = path.join(backupRoot, relPath)
  await ensureDir(path.dirname(destPath))
  await fs.promises.copyFile(sourcePath, destPath)
}

async function writeFileSafely(relPath, content, { backup, backupRoot }) {
  const destPath = path.join(process.cwd(), relPath)
  await ensureDir(path.dirname(destPath))
  if (backup && fs.existsSync(destPath)) {
    await backupFile(relPath, backupRoot)
  }
  await fs.promises.writeFile(destPath, content)
}

export async function syncFromGithub({
  repo,
  branch = 'main',
  preserve = [],
  onlyPaths = [],
  backup = false,
  dryRun = false,
}) {
  const buf = await downloadZip(repo, branch)
  const zip = await JSZip.loadAsync(buf)

  // Determine the root folder inside the zip (e.g. "iqra-main/")
  const rootFolder = Object.keys(zip.files).find((name) => name.endsWith('/'))?.split('/')[0] + '/'
  if (!rootFolder) {
    throw new Error('Could not determine root folder in zipball.')
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const backupRoot = path.join(process.cwd(), '.backup', `${repo.replace('/', '_')}@${branch}-${timestamp}`)

  const entries = []
  zip.forEach((name, entry) => {
    entries.push({ name, entry })
  })

  // Collect files to write
  const filesToWrite = []

  for (const { name, entry } of entries) {
    if (entry.dir) continue
    if (!name.startsWith(rootFolder)) continue

    const relPath = name.slice(rootFolder.length)

    // Skip some obvious directories
    const skipPrefixes = ['.git/', 'node_modules/']
    if (skipPrefixes.some((p) => relPath.startsWith(p))) continue

    if (!isIncluded(relPath, onlyPaths)) continue
    if (shouldPreserve(relPath, preserve)) continue

    filesToWrite.push(relPath)
  }

  console.log(`Found ${filesToWrite.length} file(s) to write.`)

  for (const relPath of filesToWrite) {
    const file = zip.file(rootFolder + relPath)
    if (!file) continue
    const content = await file.async('nodebuffer')

    if (dryRun) {
      console.log(`[dry-run] Would write: ${relPath}`)
      continue
    }

    await writeFileSafely(relPath, content, { backup, backupRoot })
    console.log(`Wrote: ${relPath}`)
  }

  if (!dryRun && backup) {
    console.log(`Backups stored in: ${backupRoot}`)
  }

  console.log('Sync complete.')
}

async function main() {
  const {
    values: {
      repo,
      branch = 'main',
      preserve,
      onlyPaths,
      backup,
      dryRun,
    },
  } = parseArgs({
    options: {
      repo: { type: 'string', short: 'r' },
      branch: { type: 'string', short: 'b' },
      preserve: { type: 'string', short: 'p' },
      onlyPaths: { type: 'string', short: 'o' },
      backup: { type: 'string' },
      dryRun: { type: 'string' },
    },
  })

  if (!repo) {
    console.error('Error: --repo is required. Example: --repo iciso/iqra')
    process.exit(1)
  }

  const preserveList = parseCSV(preserve)
  const onlyList = parseCSV(onlyPaths)
  const backupFlag = parseBoolean(backup, false)
  const dryRunFlag = parseBoolean(dryRun, false)

  await syncFromGithub({
    repo,
    branch,
    preserve: preserveList,
    onlyPaths: onlyList,
    backup: backupFlag,
    dryRun: dryRunFlag,
  })
}

if (import.meta.url === `file://${__filename}`) {
  main().catch((err) => {
    console.error(err)
    process.exit(1)
  })
}
