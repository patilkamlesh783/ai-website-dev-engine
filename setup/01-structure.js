const fs = require("fs")
const path = require("path")
const config = require("./config")
const {ensureDir} = require("./lib/context")
const {log} = require("./lib/logger")

const project = process.argv[2]

process.chdir(project)

try {
  config.structure.forEach(dir => {
    ensureDir(dir)
  })
} catch (err) {
  log("STRUCTURE", `Error creating structure: ${err.message}`)
}

try {
  ensureDir("docs")
} catch (err) {
  log("STRUCTURE", `Error creating docs folder: ${err.message}`)
}

// Ensure all folders required by verification
const verifyFolders = [
  "src/pages",
  "src/components",
  "src/styles",
  "src/router",
  "src/portfolio",
  "src/services",
  "src/team",
  "src/careers",
  "src/assets",
  "src/data",
  "src/graphics",
  "src/animations"
]
verifyFolders.forEach(folder => {
  try {
    ensureDir(folder)
  } catch (err) {
    log("STRUCTURE", `Error creating folder ${folder}: ${err.message}`)
  }
})

const letter = project.charAt(0).toUpperCase()

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="45" fill="#6366f1"/>
<text x="50%" y="55%" text-anchor="middle" font-size="50" fill="white" font-family="Arial" dy=".3em">${letter}</text>
</svg>
`

try {
  ensureDir("public")
  fs.writeFileSync("public/logo.svg", svg)
} catch (err) {
  log("STRUCTURE", `Error writing logo.svg: ${err.message}`)
}

log("STRUCTURE","Architecture generated")