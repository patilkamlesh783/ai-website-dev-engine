const {execSync} = require("child_process")
const config = require("./config")
const {log} = require("./lib/logger")

const project = process.argv[2]

process.chdir(project)

execSync(`npm install ${config.dependencies.join(" ")}`,{stdio:"inherit"})

log("DEPENDENCIES","Dependencies installed")