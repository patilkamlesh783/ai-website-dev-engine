const fs = require("fs")

const project = process.argv[2]

process.chdir(project)

/*
Ensure scripts folder exists
*/

if (!fs.existsSync("scripts")) {
 fs.mkdirSync("scripts")
}

/*
Create repo context generator
*/

const script = [
  'const fs=require("fs")',
  'const path=require("path")',
  'const ROOT=process.cwd()',
  'const OUTPUT="PROJECT_CONTEXT.txt"',
  'const IGNORE=[',
  '  "node_modules",".git","dist","build",".vite","PROJECT_CONTEXT.txt"',
  ']',
  'function ignore(p){',
  '  return IGNORE.some(i=>p.includes(i))',
  '}',
  'function rel(p){',
  '  return path.relative(ROOT,p)',
  '}',
  'function tree(dir,depth=0){',
  '  let out=""',
  '  const items=fs.readdirSync(dir)',
  '  for(const item of items){',
  '    const full=path.join(dir,item)',
  '    if(ignore(full)) continue',
  '    const stat=fs.statSync(full)',
  '    out+=`${" ".repeat(depth*2)}- ${item}\n`',
  '    if(stat.isDirectory()){',
  '      out+=tree(full,depth+1)',
  '    }',
  '  }',
  '  return out',
  '}',
  'function scan(dir){',
  '  let out=""',
  '  const items=fs.readdirSync(dir)',
  '  for(const item of items){',
  '    const full=path.join(dir,item)',
  '    if(ignore(full)) continue',
  '    const stat=fs.statSync(full)',
  '    if(stat.isDirectory()){',
  '      out+=scan(full)',
  '    }',
  '    else if(/\.(ts|tsx|js|css|html|md|json)$/.test(full)){',
  '      const code=fs.readFileSync(full,"utf8")',
  '      out+=`\nFILE: ${rel(full)}\n`',
  '      out+="-----------------------\n"',
  '      out+=code+"\n"',
  '    }',
  '    else if(/\.(svg|jpg|png)$/.test(full)){',
  '      out+=`\nFILE: ${rel(full)}\n`',
  '      out+="-----------------------\n"',
  '      out+="[binary file]\n"',
  '    }',
  '  }',
  '  return out',
  '}',
  'let output=""',
  'output+="AI DEVELOPMENT CONTEXT\n\n"',
  'output+="PROJECT TREE\n"',
  'output+="====================\n"',
  'output+=tree(ROOT)',
  'output+="\nSOURCE CODE\n"',
  'output+="====================\n"',
  'output+=scan(ROOT)',
  'fs.writeFileSync(OUTPUT,output)',
  'console.log("PROJECT_CONTEXT.txt generated for full agency, portfolio, SaaS, and blog system")'
].join('\n');

fs.writeFileSync("scripts/repo-context.cjs", script)

/*
Read existing package.json
*/

const pkgPath = "package.json"

const pkg = JSON.parse(fs.readFileSync(pkgPath))

/*
Ensure scripts object exists
*/

pkg.scripts = pkg.scripts || {}

/*
Add context command only if missing
*/

if(!pkg.scripts.context){
 pkg.scripts.context = "node scripts/repo-context.cjs"
}

/*
Write updated package.json back
*/

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))

console.log("Context command installed")