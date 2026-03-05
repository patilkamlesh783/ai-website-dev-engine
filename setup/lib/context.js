const fs=require("fs")

function ensureDir(dir){
 if(!fs.existsSync(dir)){
  fs.mkdirSync(dir,{recursive:true})
 }
}

function writeIfMissing(file,content){
 if(!fs.existsSync(file)){
  fs.writeFileSync(file,content.trim())
 }
}

module.exports={
 ensureDir,
 writeIfMissing
}