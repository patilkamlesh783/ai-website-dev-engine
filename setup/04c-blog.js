const fs=require("fs")
const path=require("path")

const project=process.argv[2]
process.chdir(project)

function write(file,content){

 const dir=path.dirname(file)

 if(!fs.existsSync(dir)){
  fs.mkdirSync(dir,{recursive:true})
 }

 if(!fs.existsSync(file)){
  fs.writeFileSync(file,content.trim())
 }

}

write("src/components/Blog/Blog.tsx",`
import "../../styles/blog.css"

export default function Blog(){
 return(
  <section className="blog">
   <h2>Latest Articles</h2>

   <div className="blog-grid">

    <div className="post">
     <h3>Building AI Dev Tools</h3>
     <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="post">
     <h3>Modern React Architecture</h3>
     <p>Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="post">
     <h3>SaaS Landing Design</h3>
     <p>Lorem ipsum dolor sit amet.</p>
    </div>

   </div>
  </section>
 )
}
`)

console.log("Blog created")