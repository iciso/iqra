#!/usr/bin/env node

import { readdirSync, readFileSync, statSync } from 'fs'
import { join, extname } from 'path'
import { dirname, fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDir = join(__dirname, '..', 'data')

function verifyData() {
  console.log('Verifying data folder contents...\n')

  try {
    const files = readdirSync(dataDir)
    const tsFiles = files.filter(f => extname(f) === '.ts' && !f.includes('quiz-data-manager'))
    
    console.log(`Found ${tsFiles.length} category files:`)
    
    let totalEasy = 0
    let totalAdvanced = 0
    
    tsFiles.forEach(file => {
      const filePath = join(dataDir, file)
      const content = readFileSync(filePath, 'utf-8')
      
      // Simple regex to count questions (this is approximate)
      const easyMatches = content.match(/difficulty:\s*['"]easy['"]/g) || []
      const advancedMatches = content.match(/difficulty:\s*['"]advanced['"]/g) || []
      
      console.log(`  ${file}: ~${easyMatches.length} easy, ~${advancedMatches.length} advanced`)
      
      totalEasy += easyMatches.length
      totalAdvanced += advancedMatches.length
    })
    
    console.log(`\nTotal: ~${totalEasy} easy questions, ~${totalAdvanced} advanced questions`)
    console.log(`Grand total: ~${totalEasy + totalAdvanced} questions`)
    
  } catch (error) {
    console.error('Error verifying data:', error.message)
    process.exit(1)
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  verifyData()
}

export { verifyData }
