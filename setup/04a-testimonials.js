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

write("src/components/Testimonials/Testimonials.tsx",`
import "../../styles/testimonials.css"

export default function Testimonials(){
 return(
  <section className="testimonials">
   <h2>What People Say</h2>

   <div className="testimonials-grid">

    <div className="testimonial">
     <p>"Amazing platform to build products."</p>
     <span>- Alex</span>
    </div>

    <div className="testimonial">
     <p>"Saved weeks of development time."</p>
     <span>- Sarah</span>
    </div>

    <div className="testimonial">
     <p>"Clean architecture and AI ready."</p>
     <span>- John</span>
    </div>

   </div>
  </section>
 )
}
`)

console.log("Testimonials created")