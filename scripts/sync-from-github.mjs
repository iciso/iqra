#!/usr/bin/env node
/**
 * General-purpose GitHub sync script.
 * - Downloads a zipball for the specified repo/branch.
 * - Extracts files into the current project, overwriting by default.
 * - Supports:
 *   --repo iciso/iqra
 *   --branch main
 *   --onlyPaths data,public/locales
 *   --preserve "scripts,scripts/*.mjs,README-sync.md"
 *   --backup true
 *   --dry-run
 *
 * Usage:
 *   node scripts/sync-from-github.mjs --repo iciso/iqra --branch main --onlyPaths data --preserve "scripts,README-sync.md"
 */
import JSZip from "jszip"
import { mkdir, writeFile, readFile, stat, cp } from "node:fs/promises"
import { existsSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const args = parseArgs(process.argv.slice(2))
const repo = args.repo || "iciso/iqra"
const branch = args.branch || "main"
const onlyPaths = toArrayOption(args.onlyPaths)
const preserve = toArrayOption(args.preserve)
const backup = toBool(args.backup, false)
const dryRun = toBool(args.dryRun, false)

const ZIP_URL = `https://codeload.github.com/${repo}/zip/refs/heads/${branch}`

const timestamp = new Date().toISOString().replace(/[:.]/g, "-")
const backupRoot = path.resolve(`.sync-backup/${timestamp}`)

console.log(`[sync] repo=${repo} branch=${branch}`)
console.log(`[sync] onlyPaths=${onlyPaths.length ? onlyPaths.join(",") : "(all)"}`)
console.log(`[sync] preserve=${preserve.length ? preserve.join(",") : "(none)"} backup=${backup} dryRun=${dryRun}`)
console.log(`[sync] fetching ${ZIP_URL} ...`)
const res = await fetch(ZIP_URL)
if (!res.ok) {
  console.error(`[sync] failed to fetch zip: ${res.status} ${res.statusText}`)
  process.exit(1)
}
const buf = Buffer.from(await res.arrayBuffer())
const zip = await JSZip.loadAsync(buf)

const topFolder = findTopFolder(zip)
let changed = 0
await Promise.all(
  Object.keys(zip.files).map(async (entryName) => {
    const file = zip.files[entryName]
    if (file.dir) return

    // Trim the top-level dir (repo-branch-sha/)
    const relative = entryName.startsWith(topFolder) ? entryName.slice(topFolder.length) : entryName
    if (!relative) return

    if (onlyPaths.length && !onlyPaths.some((p) => relative.startsWith(normalizePath(p)))) {
      return
    }
    if (preserve.length && preserve.some((p) => matchPreserve(relative, p))) {
      console.log(`[sync] preserve: ${relative}`)
      return
    }

    const outPath = path.resolve(relative)
    const outDir = path.dirname(outPath)

    const content = await file.async("nodebuffer")

    if (dryRun) {
      console.log(`[sync] DRY: write ${relative} (${content.length} bytes)`)
      return
    }

    if (backup && existsSync(outPath)) {
      const backupPath = path.join(backupRoot, relative)
      await mkdir(path.dirname(backupPath), { recursive: true })
      await cp(outPath, backupPath, { force: true })
      console.log(`[sync] backup: ${relative} -> ${path.relative(process.cwd(), backupPath)}`)
    }

    await mkdir(outDir, { recursive: true })
    await writeFile(outPath, content)
    console.log(`[sync] wrote: ${relative}`)
    changed++
  })
)

console.log(`[sync] done. files changed: ${changed}`)

function parseArgs(argv) {
  const out = {}
  for (const part of argv) {
    const m = part.match(/^--([^=]+)(?:=(.*))?$/)
    if (m) {
      const k = m[1]
      const v = m[2] ?? true
      out[k] = v
    }
  }
  return out
}
function toArrayOption(val) {
  if (!val || val === true) return []
  return String(val)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
}
function toBool(v, def = false) {
  if (v === undefined) return def
  if (v === true) return true
  const s = String(v).toLowerCase()
  return s === "1" || s === "true" || s === "yes"
}
function findTopFolder(zip) {
  // first entry will include repo folder
  const first = Object.keys(zip.files)[0] || ""
  const idx = first.indexOf("/")
  return idx >= 0 ? first.slice(0, idx + 1) : ""
}
function normalizePath(p) {
  return p.replace(/^\.?\//, "")
}
function matchPreserve(rel, pattern) {
  const p = normalizePath(pattern)
  if (p.endsWith("/*")) {
    return rel.startsWith(p.slice(0, -1))
  }
  if (p.endsWith("/")) {
    return rel.startsWith(p)
  }
  return rel === p || rel.startsWith(p + "/")
}
