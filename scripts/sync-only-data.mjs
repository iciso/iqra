#!/usr/bin/env node
/**
 * Sync ONLY the data/ folder from an upstream GitHub repo.
 *
 * Usage:
 *   node scripts/sync-only-data.mjs --repo iciso/iqra --branch main --backup true
 *   node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true
 */
import { execFile } from "node:child_process"
import { fileURLToPath } from "node:url"
import { dirname, resolve } from "node:path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const args = parseArgs(process.argv.slice(2))
const repo = args.repo || "iciso/iqra"
const branch = args.branch || "main"
const backup = toBool(args.backup, true)
const dryRun = toBool(args.dryRun, false)

// Build command to reuse the general-purpose script with filters
const cmd = "node"
const script = resolve(__dirname, "sync-from-github.mjs")
const onlyPaths = "data"
const preserve = [
  "scripts", // keep our scripts
  "README-sync.md",
  ".sync-backup",
].join(",")

const finalArgs = [
  script,
  `--repo=${repo}`,
  `--branch=${branch}`,
  `--onlyPaths=${onlyPaths}`,
  `--preserve=${preserve}`,
  `--backup=${backup}`,
  `--dry-run=${dryRun}`,
]

console.log(`[sync-only-data] running: ${cmd} ${finalArgs.join(" ")}`)
execFile(cmd, finalArgs, { stdio: "inherit" }, (err) => {
  if (err) {
    console.error(`[sync-only-data] failed:`, err.message)
    process.exit(1)
  }
})

function parseArgs(argv) {
  const out = {}
  for (const part of argv) {
    const m = part.match(/^--([^=]+)(?:=(.*))?$/)
    if (m) {
      out[m[1]] = m[2] ?? true
    }
  }
  return out
}
function toBool(v, def = false) {
  if (v === undefined) return def
  if (v === true) return true
  const s = String(v).toLowerCase()
  return s === "1" || s === "true" || s === "yes"
}
