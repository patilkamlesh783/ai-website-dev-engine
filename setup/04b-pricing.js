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

write("src/components/Pricing/Pricing.tsx",`
import "../../styles/pricing.css"

export default function Pricing(){
 return(
  <section className="pricing">
   <h2>Pricing</h2>

   <div className="pricing-grid">

    <div className="plan">
     <h3>Starter</h3>
     <p>$9/mo</p>
     <button>Choose</button>
    </div>

    <div className="plan popular">
     <h3>Pro</h3>
     <p>$29/mo</p>
     <button>Choose</button>
    </div>

    <div className="plan">
     <h3>Enterprise</h3>
     <p>$99/mo</p>
     <button>Choose</button>
    </div>

   </div>
  </section>
 )
}
`)

console.log("Pricing created")