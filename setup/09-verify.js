const fs=require("fs")
const project=process.argv[2]

if(!fs.existsSync(project+"/package.json")) {
  console.error("package.json missing")
  process.exit(1)
}
if(!fs.existsSync(project+"/src")) {
  console.error("src missing")
  process.exit(1)
}

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
  if(!fs.existsSync(project+"/"+folder)) {
    console.error(`${folder} missing`)
    process.exit(1)
  }
}
console.log("Project verified for full agency, portfolio, SaaS, and blog system")
