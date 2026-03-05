
const fs=require("fs")
const path=require("path")
const project=process.argv[2]

let suggestions=["Consider removing unused components","Check duplicate logic","Review imports"]

fs.writeFileSync(path.join(project,"docs","REFACTOR_SUGGESTIONS.md"),suggestions.join("\n"))

console.log("Refactor analysis added")
