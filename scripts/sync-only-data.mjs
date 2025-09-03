import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import JSZip from "jszip"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function parseArgs() {
  const args = process.argv.slice(2)
  const opts = {
    repo: "iciso/iqra",
    branch: "main",
    dryRun: false,
    backup: true
  }
  for (let i = 0; i < args.length; i++) {
    const a = args[i]
    if (a === "--repo") opts.repo = args[++i]
    else if (a === "--branch") opts.branch = args[++i]
    else if (a === "--dry-run") opts.dryRun = true
    else if (a === "--backup") opts.backup = args[++i] !== "false"
  }
  return opts
}

async function downloadZip({ repo, branch }) {
  const url = `https://codeload.github.com/${repo}/zip/refs/heads/${branch}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to download zip (${res.status})`)
  const buf = Buffer.from(await res.arrayBuffer())
  return buf
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function backupDir(srcDir) {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-")
  const backupPath = path.join(__dirname, "..", "backups", `data-backup-${stamp}`)
  ensureDir(backupPath)
  copyDir(srcDir, backupPath)
  return backupPath
}

function copyDir(src, dest) {
  ensureDir(dest)
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(s, d)
    } else if (entry.isFile()) {
      ensureDir(path.dirname(d))
      fs.copyFileSync(s, d)
    }
  }
}

async function extractData(zipBuf, { dryRun }) {
  const zip = await JSZip.loadAsync(zipBuf)
  const rootFolder = Object.keys(zip.files).find((k) => k.endsWith("/"))?.split("/")[0]
  const prefix = rootFolder ? `${rootFolder}/` : ""
  const dataPrefix = `${prefix}data/`

  const written = []
  for (const [name, entry] of Object.entries(zip.files)) {
    if (!name.startsWith(dataPrefix)) continue
    if (entry.dir) continue
    const rel = name.substring(prefix.length) // e.g., "data/fiqh.ts"
    const dest = path.join(__dirname, "..", rel)
    if (dryRun) {
      console.log(`[dry-run] would write ${rel}`)
    } else {
      const content = await entry.async("nodebuffer")
      ensureDir(path.dirname(dest))
      fs.writeFileSync(dest, content)
      written.push(rel)
    }
  }
  return written
}

async function main() {
  const opts = parseArgs()
  console.log(`Sync only data/ from ${opts.repo}@${opts.branch} (dryRun=${opts.dryRun})`)
  const localDataDir = path.join(__dirname, "..", "data")
  if (!opts.dryRun && opts.backup && fs.existsSync(localDataDir)) {
    const backupPath = backupDir(localDataDir)
    console.log(`Backed up existing data/ to ${backupPath}`)
  }
  const buf = await downloadZip(opts)
  const written = await extractData(buf, { dryRun: opts.dryRun })
  console.log(opts.dryRun ? "Dry run complete." : `Wrote ${written.length} files into data/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
