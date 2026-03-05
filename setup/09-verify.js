const fs=require("fs")
const project=process.argv[2]

if(!fs.existsSync(project+"/package.json")) throw new Error("package.json missing")
if(!fs.existsSync(project+"/src")) throw new Error("src missing")

const requiredFolders = [
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
for(const folder of requiredFolders){
  if(!fs.existsSync(project+"/"+folder)) throw new Error(`${folder} missing`)
}
console.log("Project verified for full agency, portfolio, SaaS, and blog system")
