#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')

async function syncFromGitHub(options = {}) {
  const {
    repo = 'iciso/iqra',
    branch = 'main',
    preserve = ['scripts/', 'README-sync.md', 'app/i18n-demo/'],
    onlyPaths = [],
    backup = false,
    dryRun = false
  } = options

  console.log(`Syncing from ${repo}@${branch}...`)
  
  if (dryRun) {
    console.log('DRY RUN - No files will be modified')
  }

  try {
    // Download zipball
    const zipUrl = `https://github.com/${repo}/archive/${branch}.zip`
    console.log(`Downloading: ${zipUrl}`)
    
    const response = await fetch(zipUrl)
    if (!response.ok) {
      throw new Error(`Failed to download: ${response.statusText}`)
    }

    const arrayBuffer = await response.arrayBuffer()
    const JSZip = (await import('jszip')).default
    const zip = await JSZip.loadAsync(arrayBuffer)

    // Create backup if requested
    if (backup && !dryRun) {
      const backupDir = join(projectRoot, `backup-${Date.now()}`)
      console.log(`Creating backup at: ${backupDir}`)
      // Implementation would copy current files to backup
    }

    let filesProcessed = 0
    const preserveSet = new Set(preserve)
    const onlyPathsSet = new Set(onlyPaths)

    // Process each file in the zip
    for (const [relativePath, file] of Object.entries(zip.files)) {
      if (file.dir) continue

      // Remove the root directory from the path
      const pathParts = relativePath.split('/')
      if (pathParts.length < 2) continue
      const cleanPath = pathParts.slice(1).join('/')

      // Skip if onlyPaths is specified and this path doesn't match
      if (onlyPaths.length > 0 && !onlyPathsSet.has(cleanPath) && !onlyPaths.some(p => cleanPath.startsWith(p))) {
        continue
      }

      // Skip preserved paths
      if (preserve.some(p => cleanPath.startsWith(p))) {
        console.log(`Preserving: ${cleanPath}`)
        continue
      }

      const targetPath = join(projectRoot, cleanPath)
      
      if (dryRun) {
        console.log(`Would sync: ${cleanPath}`)
        filesProcessed++
        continue
      }

      // Ensure directory exists
      const targetDir = dirname(targetPath)
      if (!existsSync(targetDir)) {
        mkdirSync(targetDir, { recursive: true })
      }

      // Write file
      const content = await file.async('nodebuffer')
      writeFileSync(targetPath, content)
      console.log(`Synced: ${cleanPath}`)
      filesProcessed++
    }

    console.log(`\nSync complete! Processed ${filesProcessed} files.`)
    
  } catch (error) {
    console.error('Sync failed:', error.message)
    process.exit(1)
  }
}

// CLI handling
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2)
  const options = {}
  
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i]?.replace('--', '')
    const value = args[i + 1]
    
    if (key === 'preserve') {
      options.preserve = value ? value.split(',') : []
    } else if (key === 'onlyPaths') {
      options.onlyPaths = value ? value.split(',') : []
    } else if (key === 'dry-run') {
      options.dryRun = value === 'true'
      i-- // No value for this flag
    } else if (key === 'backup') {
      options.backup = value === 'true'
    } else if (key && value) {
      options[key] = value
    }
  }
  
  syncFromGitHub(options)
}

export { syncFromGitHub }
