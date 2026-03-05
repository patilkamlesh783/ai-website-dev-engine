const fs = require("fs")
const path = require("path")

const project = process.argv[2]

let empty=[]
let largeFiles=[]

function scan(dir){

 const files=fs.readdirSync(dir)

 for(const f of files){

  if(f==="node_modules") continue

  const full=path.join(dir,f)
  const stat=fs.statSync(full)

  if(stat.isDirectory()){
   scan(full)
  }

  else{

   if(stat.size===0){
    empty.push(full)
   }

   if(stat.size > 15000){
    largeFiles.push(full)
   }

  }

 }

}

scan(project)

let report="EMPTY FILES\n"
report+=empty.join("\n")

report+="\n\nLARGE FILES\n"
report+=largeFiles.join("\n")

fs.writeFileSync(path.join(project,"docs","PROJECT_REPORT.md"),report)

console.log("Project analyzed")