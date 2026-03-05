const {execSync} = require("child_process")
const config = require("./config")
const {log} = require("./lib/logger")

const project = process.argv[2]

process.chdir(project)

const extraDependencies = [
  "framer-motion",
  "react-helmet",
  "styled-components",
  "classnames",
  "react-icons",
  "@emotion/react",
  "@emotion/styled",
  "date-fns",
  "uuid"
]

const allDeps = config.dependencies.concat(extraDependencies)

execSync(`npm install ${allDeps.join(" ")}`, {stdio: "inherit"})

log("DEPENDENCIES", "All dependencies installed (UI, animation, SEO, icons, utils)")