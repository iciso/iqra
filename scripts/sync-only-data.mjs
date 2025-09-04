#!/usr/bin/env node

import { syncFromGitHub } from './sync-from-github.mjs'

async function syncOnlyData(options = {}) {
  const {
    repo = 'iciso/iqra',
    branch = 'main',
    backup = false,
    dryRun = false
  } = options

  console.log('Syncing only data/ folder...')

  await syncFromGitHub({
    repo,
    branch,
    onlyPaths: ['data/'],
    preserve: ['scripts/', 'README-sync.md', 'app/i18n-demo/'],
    backup,
    dryRun
  })
}

// CLI handling
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2)
  const options = {}
  
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]?.replace('--', '')
    const value = args[i + 1]
    
    if (key === 'dry-run') {
      options.dryRun = value === 'true'
      i-- // No value for this flag
    } else if (key === 'backup') {
      options.backup = value === 'true'
    } else if (key && value) {
      options[key] = value
    }
  }
  
  syncOnlyData(options)
}

export { syncOnlyData }
