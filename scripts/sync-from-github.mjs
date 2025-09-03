/**
 * General-purpose GitHub zipball sync script.
 * - Downloads a repository zipball and overwrites local files.
 * - Supports:
 *    --repo owner/name
 *    --branch branchName (default: main)
 *    --onlyPaths comma-separated prefixes to include (e.g. "data,public/locales")
 *    --preserve comma-separated prefixes to skip overwriting (e.g. "scripts,README.md")
 *    --backup true|false create .backup-sync/<timestamp> backups before overwrite (default: true)
 *    --dry-run true|false (default: false)
 *
 * Examples:
 *  node scripts/sync-from-github.mjs --repo iciso/iqra --branch feature/tamil-translation --onlyPaths data,public/locales --preserve scripts --backup true
 */

import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import JSZip from "jszip"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function parseArgs() {
  const args = process.argv.slice(2)
  const out = {}
  for (const arg of args) {
    const [k, v = "true"] = arg.replace(/^--/, "").split("=")
    out[k] = v
  }
  return out
}

function parseList(val) {
  if (!val) return []
  return val
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function backupFile(srcPath, backupRoot) {
  const rel = path.relative(process.cwd(), srcPath)
  const dest = path.join(backupRoot, rel)
  await ensureDir(path.dirname(dest))
  try {
    const content = await fs.readFile(srcPath)
    await fs.writeFile(dest, content)
  } catch {
    // ignore (file might not exist yet)
  }
}

function shouldInclude(relPath, onlyPaths) {
  if (!onlyPaths.length) return true
  return onlyPaths.some((p) => relPath.startsWith(p))
}

function shouldPreserve(relPath, preservePrefixes) {
  if (!preservePrefixes.length) return false
  return preservePrefixes.some((p) => relPath.startsWith(p))
}

async function downloadZip(repo, branch) {
  const url = `https://codeload.github.com/${repo}/zip/refs/heads/${branch}`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to download zip: ${url} ${res.status} ${res.statusText}`)
  }
  const arrayBuffer = await res.arrayBuffer()
  return Buffer.from(arrayBuffer)
}

async function main() {
  const {
    repo,
    branch = "main",
    onlyPaths: onlyPathsArg,
    preserve: preserveArg,
    backup: backupArg = "true",
    dryRun: dryRunArg = "false",
  } = parseArgs()

  if (!repo) {
    console.error('Missing required argument: --repo (e.g. "--repo iciso/iqra")')
    process.exit(1)
  }

  const onlyPaths = parseList(onlyPathsArg)
  const preservePrefixes = parseList(preserveArg)
  const doBackup = backupArg === "true"
  const dryRun = dryRunArg === "true"

  console.log(`Syncing from ${repo}@${branch}`)
  if (onlyPaths.length) console.log("Only paths:", onlyPaths.join(", "))
  if (preservePrefixes.length) console.log("Preserve prefixes:", preservePrefixes.join(", "))
  console.log("Backup:", doBackup, "Dry-run:", dryRun)

  const buf = await downloadZip(repo, branch)

  const zip = await JSZip.loadAsync(buf)
  // The zip root usually contains a single directory named "<name>-<branch>/"
  const rootDirName = Object.keys(zip.files).find((k) => zip.files[k].dir && !k.includes("/../"))
  const rootPrefix = rootDirName ? rootDirName : ""

  const backupRoot = path.join(process.cwd(), ".backup-sync", String(Date.now()))
  if (doBackup && !dryRun) {
    await ensureDir(backupRoot)
  }

  let changedCount = 0
  let skippedCount = 0

  for (const [zipPath, entry] of Object.entries(zip.files)) {
    if (entry.dir) continue
    if (!zipPath.startsWith(rootPrefix)) continue

    const relPath = zipPath.slice(rootPrefix.length)
    if (!relPath) continue

    // Filter by onlyPaths and preserve
    if (!shouldInclude(relPath, onlyPaths)) {
      skippedCount++
      continue
    }
    if (shouldPreserve(relPath, preservePrefixes)) {
      console.log(`Preserved: ${relPath}`)
      skippedCount++
      continue
    }

    const destPath = path.join(process.cwd(), relPath)
    if (dryRun) {
      console.log(`[dry-run] Write: ${relPath}`)
      changedCount++
      continue
    }

    // Backup existing file
    if (doBackup) {
      await backupFile(destPath, backupRoot)
    }

    await ensureDir(path.dirname(destPath))
    const content = await entry.async("nodebuffer")
    await fs.writeFile(destPath, content)
    console.log(`Wrote: ${relPath}`)
    changedCount++
  }

  console.log(`Done. Changed: ${changedCount}, Skipped: ${skippedCount}`)
  if (doBackup && !dryRun) {
    console.log(`Backups saved under: ${backupRoot}`)
  }
}

main().catch((err) => {
  console.error("Sync failed:", err)
  process.exit(1)
})
