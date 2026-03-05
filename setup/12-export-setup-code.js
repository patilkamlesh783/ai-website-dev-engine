const fs = require("fs")
const path = require("path")

const ROOT = process.cwd()
const SETUP_DIR = path.join(ROOT, "setup")
const DOCS_DIR = path.join(ROOT, "docs")
const OUTPUT = path.join(DOCS_DIR, "SETUP_ENGINE_CODE.txt")

if(!fs.existsSync(DOCS_DIR)){
 fs.mkdirSync(DOCS_DIR)
}

function scan(dir){

 let out=""

 const files=fs.readdirSync(dir)

 files.forEach(file=>{

  const full=path.join(dir,file)

  const stat=fs.statSync(full)

  if(stat.isDirectory()){
   out+=scan(full)
  }

  else if(file.endsWith(".js") || file.endsWith(".ts") || file.endsWith(".tsx") || file.endsWith(".css") || file.endsWith(".md") || file.endsWith(".json")){
   const code=fs.readFileSync(full,"utf8")
   out+=`\nFILE: ${path.relative(ROOT,full)}\n`
   out+="========================================\n"
   out+=code+"\n"
  }

 })

 return out

}

let content=""

content+="AI SETUP ENGINE SOURCE CODE\n\n"

content+=scan(SETUP_DIR)

fs.writeFileSync(OUTPUT,content)

console.log("Setup engine code exported for full agency, portfolio, SaaS, and blog system")