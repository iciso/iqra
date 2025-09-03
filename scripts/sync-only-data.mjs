/**
 * Focused sync for the data/ folder from GitHub.
 *
 * Usage:
 *  node scripts/sync-only-data.mjs --repo iciso/iqra --branch feature/tamil-translation --backup true
 *  node scripts/sync-only-data.mjs --repo iciso/iqra --branch main --dry-run true
 */

import { fileURLToPath } from "node:url"
import path from "node:path"
import { spawn } from "node:child_process"

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

async function run() {
  const args = parseArgs()
  const repo = args.repo || "iciso/iqra"
  const branch = args.branch || "main"
  const backup = args.backup ?? "true"
  const dryRun = args.dryRun ?? "false"
  const preserve = args.preserve || "scripts,.backup-sync"

  const script = path.join(__dirname, "sync-from-github.mjs")
  const cliArgs = [
    script,
    `--repo=${repo}`,
    `--branch=${branch}`,
    `--onlyPaths=data`,
    `--preserve=${preserve}`,
    `--backup=${backup}`,
    `--dry-run=${dryRun}`,
  ]

  console.log("Running:", ["node", ...cliArgs].join(" "))
  await new Promise((resolve, reject) => {
    const child = spawn("node", cliArgs, { stdio: "inherit" })
    child.on("exit", (code) => {
      if (code === 0) resolve()
      else reject(new Error(`sync-from-github exited with code ${code}`))
    })
  })
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
