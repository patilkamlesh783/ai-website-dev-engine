const fs=require("fs")
const path=require("path")
const {execSync}=require("child_process")
const readline=require("readline")
const config=require("./config")

const rl=readline.createInterface({
 input:process.stdin,
 output:process.stdout
})

rl.question(`Enter project name (default: ${config.defaultProjectName}): `,(name)=>{

 const project=name && name.trim()?name.trim():config.defaultProjectName

 if(!fs.existsSync(project)){

  console.log("Creating project:",project)

  execSync(`npm create vite@latest ${project} -- --template react-ts`,{stdio:"inherit"})

  execSync(`cd ${project} && npm install`,{stdio:"inherit"})

 }else{

  console.log("Project exists. Skipping creation.")

 }

 const scripts=fs.readdirSync(__dirname)
 .filter(f=>/^\d+.*\.js$/.test(f))
 .sort()

 scripts.forEach(s=>{
  try{
   console.log("Running",s)
   execSync(`node ${path.join(__dirname,s)} ${project}`,{stdio:"inherit"})
  }catch(err){
   console.error("Error running:",s)
  }
 })

 console.log("Setup complete")
 console.log(`cd ${project}`)
 console.log("npm run dev")

 rl.close()

})