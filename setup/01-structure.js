const fs = require("fs")
const path = require("path")
const config = require("./config")
const {ensureDir} = require("./lib/context")
const {log} = require("./lib/logger")

const project = process.argv[2]

process.chdir(project)

config.structure.forEach(dir=>{
 ensureDir(dir)
})

ensureDir("docs")

const letter = project.charAt(0).toUpperCase()

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="45" fill="#6366f1"/>
<text x="50%" y="55%" text-anchor="middle" font-size="50" fill="white" font-family="Arial" dy=".3em">${letter}</text>
</svg>
`

fs.writeFileSync("public/logo.svg",svg)

log("STRUCTURE","Architecture generated")