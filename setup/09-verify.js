
const fs=require("fs")
const project=process.argv[2]

if(!fs.existsSync(project+"/package.json")) throw new Error("package.json missing")
if(!fs.existsSync(project+"/src")) throw new Error("src missing")

console.log("Project verified")
