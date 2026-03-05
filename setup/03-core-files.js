const fs = require("fs")
const path = require("path")
const {writeIfMissing, ensureDir} = require("./lib/context")
const {log} = require("./lib/logger")

const project = process.argv[2]

process.chdir(project)

/*
Replace favicon
*/

if(fs.existsSync("public/vite.svg")){
 fs.unlinkSync("public/vite.svg")
}

let html=fs.readFileSync("index.html","utf8")

html=html.replace("/vite.svg","/logo.svg")

html=html.replace(
"<title>portfolio</title>",
`<title>${project}</title>
<meta name="description" content="${project} website"/>
<meta name="robots" content="index,follow"/>
<link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
`
)

fs.writeFileSync("index.html",html)

/*
Ensure folders
*/

ensureDir("src/pages")
ensureDir("src/router")
ensureDir("src/components")
ensureDir("src/styles")
ensureDir("public")

/*
Remove default vite css
*/

if(fs.existsSync("src/index.css")){
 fs.unlinkSync("src/index.css")
}

if(fs.existsSync("src/App.css")){
 fs.unlinkSync("src/App.css")
}

/*
Remove css import
*/

const mainFile="src/main.tsx"

if(fs.existsSync(mainFile)){

 let content=fs.readFileSync(mainFile,"utf8")

 content=content.replace(`import './index.css'`,"")
 content=content.replace(`import "./index.css"`,"")

 fs.writeFileSync(mainFile,content)
}

/*
Landing Page
*/

writeIfMissing("src/pages/Home.tsx",`
import Hero from "../components/Hero/Hero"
import Features from "../components/Features/Features"
import Testimonials from "../components/Testimonials/Testimonials"
import CTA from "../components/CTA/CTA"

export default function Home(){

 return(

  <main>

   <Hero/>

   <Features/>

   <Testimonials/>

   <CTA/>

  </main>

 )

}
`)

/*
About
*/

writeIfMissing("src/pages/About.tsx",`
import About from "../components/About/About"

export default function AboutPage(){

 return(

  <main>

   <About/>

  </main>

 )

}
`)

/*
Pricing
*/

writeIfMissing("src/pages/Pricing.tsx",`
import Pricing from "../components/Pricing/Pricing"

export default function PricingPage(){

 return(

  <main>

   <Pricing/>

  </main>

 )

}
`)

/*
Projects
*/

writeIfMissing("src/pages/Projects.tsx",`
import Projects from "../components/Projects/Projects"

export default function ProjectsPage(){

 return(

  <main>

   <Projects/>

  </main>

 )

}
`)

/*
Blog
*/

writeIfMissing("src/pages/Blog.tsx",`
import Blog from "../components/Blog/Blog"

export default function BlogPage(){

 return(

  <main>

   <Blog/>

  </main>

 )

}
`)

/*
Contact
*/

writeIfMissing("src/pages/Contact.tsx",`
import Contact from "../components/Contact/Contact"

export default function ContactPage(){

 return(

  <main>

   <Contact/>

  </main>

 )

}
`)

/*
404 Page
*/

writeIfMissing("src/pages/NotFound.tsx",`
export default function NotFound(){

 return(

  <section>

   <h1>404</h1>

   <p>Page not found</p>

  </section>

 )

}
`)

/*
Router
*/

writeIfMissing("src/router/AppRouter.tsx",`
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"

import Home from "../pages/Home"
import About from "../pages/About"
import Pricing from "../pages/Pricing"
import Projects from "../pages/Projects"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import NotFound from "../pages/NotFound"

export default function AppRouter(){

 return(

  <BrowserRouter>

   <Navbar/>

   <Routes>

    <Route path="/" element={<Home/>}/>

    <Route path="/about" element={<About/>}/>

    <Route path="/pricing" element={<Pricing/>}/>

    <Route path="/projects" element={<Projects/>}/>

    <Route path="/blog" element={<Blog/>}/>

    <Route path="/contact" element={<Contact/>}/>

    <Route path="*" element={<NotFound/>}/>

   </Routes>

   <Footer/>

  </BrowserRouter>

 )

}
`)

/*
App
*/

fs.writeFileSync("src/App.tsx",`

import "./styles/global.css"
import "./styles/layout.css"
import "./styles/utils.css"
import "./styles/animations.css"

import AppRouter from "./router/AppRouter"

function App(){

 return <AppRouter/>

}

export default App

`.trim())

/*
SEO files
*/

fs.writeFileSync("public/robots.txt",`

User-agent: *
Allow: /

Sitemap: /sitemap.xml

`.trim())

fs.writeFileSync("public/sitemap.xml",`

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

<url>
<loc>/</loc>
</url>

<url>
<loc>/about</loc>
</url>

<url>
<loc>/pricing</loc>
</url>

<url>
<loc>/projects</loc>
</url>

<url>
<loc>/blog</loc>
</url>

<url>
<loc>/contact</loc>
</url>

</urlset>

`.trim())

log("CORE","Full SaaS architecture created")