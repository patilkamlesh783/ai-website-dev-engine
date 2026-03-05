const fs = require("fs")
const path = require("path")

const project = process.argv[2]

process.chdir(project)

function detectTech(){

 const pkg = JSON.parse(fs.readFileSync("package.json"))

 const deps = Object.keys(pkg.dependencies || {})

 let tech=[]

 if(deps.includes("react")) tech.push("React")
 if(deps.includes("axios")) tech.push("Axios")
 if(deps.includes("react-router-dom")) tech.push("React Router")

 return tech.join(", ")

}

function tree(dir,depth=0){

 let out=""

 const files=fs.readdirSync(dir)

 for(const f of files){

  if(f==="node_modules") continue

  const full=path.join(dir,f)

  const stat=fs.statSync(full)

  out+=`${" ".repeat(depth*2)}- ${f}\n`

  if(stat.isDirectory()){
   out+=tree(full,depth+1)
  }

 }

 return out

}

const treeOutput=tree(process.cwd())

const tech=detectTech()

fs.writeFileSync("docs/PROJECT_CONTEXT.md",`
AI DEVELOPMENT CONTEXT

TECH STACK
====================
${tech}

PROJECT TREE
====================
${treeOutput}
`.trim())

console.log("AI context created")