const fs=require("fs")
const path=require("path")

const project=process.argv[2]

process.chdir(project)

const projectName=project.charAt(0).toUpperCase()+project.slice(1)

function write(file,content){

 const dir=path.dirname(file)

 if(!fs.existsSync(dir)){
  fs.mkdirSync(dir,{recursive:true})
 }

 if(!fs.existsSync(file)){
  fs.writeFileSync(file,content.trim())
 }

}

/* =========================
NAVBAR
========================= */

write("src/components/Navbar/Navbar.tsx",`

import {Link} from "react-router-dom"
import "../../styles/navbar.css"

export default function Navbar(){

 return(

  <header className="navbar">

   <div className="logo">

    <Link to="/">
     ${projectName}
    </Link>

   </div>

   <nav>

    <Link to="/">Home</Link>

    <Link to="/pricing">Pricing</Link>

    <Link to="/projects">Projects</Link>

    <Link to="/blog">Blog</Link>

    <Link to="/about">About</Link>

    <Link to="/contact">Contact</Link>

   </nav>

  </header>

 )

}

`)

/* =========================
HERO
========================= */

write("src/components/Hero/Hero.tsx",`

import "../../styles/hero.css"

export default function Hero(){

 return(

  <section className="hero">

   <div className="container">

    <h1>

     Build Portfolio, Agency & Blog Websites Instantly

    </h1>

    <p>

     ${projectName} helps developers, freelancers and agencies launch complete websites with architecture, SEO and UI automatically.

    </p>

    <button>

     Get Started

    </button>

   </div>

  </section>

 )

}

`)

/* =========================
FEATURES
========================= */

write("src/components/Features/Features.tsx",`

import "../../styles/features.css"

export default function Features(){

 return(

  <section className="features">

   <div className="container">

    <h2 className="center">

     Powerful Features

    </h2>

    <div className="grid grid-3">

     <div className="card">

      <h3>AI Architecture</h3>

      <p>

       Automatically generates production-ready architecture with pages, components and SEO.

      </p>

     </div>

     <div className="card">

      <h3>Modern UI</h3>

      <p>

       Responsive layouts, animations and modern design patterns built in.

      </p>

     </div>

     <div className="card">

      <h3>Developer Ready</h3>

      <p>

       Clean folder structure with scalable components and routing.

      </p>

     </div>

    </div>

   </div>

  </section>

 )

}

`)

/* =========================
ABOUT
========================= */

write("src/components/About/About.tsx",`

import "../../styles/about.css"

export default function About(){

 return(

  <section className="about">

   <div className="container">

    <h2>

     About ${projectName}

    </h2>

    <p>

     ${projectName} is designed to generate modern portfolio websites, SaaS landing pages, agency websites and developer blogs instantly.

    </p>

    <p>

     Instead of spending hours creating project architecture and UI, this engine builds the foundation automatically.

    </p>

   </div>

  </section>

 )

}

`)

/* =========================
PROJECTS
========================= */

write("src/components/Projects/Projects.tsx",`

import "../../styles/projects.css"

export default function Projects(){

 return(

  <section className="projects">

   <div className="container">

    <h2>

     Projects & Case Studies

    </h2>

    <p>

     Examples of websites generated with ${projectName}.

    </p>

    <div className="grid grid-3">

     <div className="card">

      <h3>Developer Portfolio</h3>

      <p>

       Personal brand website with blog and projects.

      </p>

     </div>

     <div className="card">

      <h3>Agency Website</h3>

      <p>

       Digital agency landing with services and pricing.

      </p>

     </div>

     <div className="card">

      <h3>SaaS Landing</h3>

      <p>

       Product marketing page with testimonials and pricing.

      </p>

     </div>

    </div>

   </div>

  </section>

 )

}

`)

/* =========================
CONTACT
========================= */

write("src/components/Contact/Contact.tsx",`

import "../../styles/contact.css"

export default function Contact(){

 return(

  <section className="contact">

   <div className="container">

    <h2>

     Contact Us

    </h2>

    <p>

     Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.

    </p>

    <p>

     Email: contact@${project}.com

    </p>

    <p>

     Phone: +91 90000 00000

    </p>

   </div>

  </section>

 )

}

`)

/* =========================
CTA
========================= */

write("src/components/CTA/CTA.tsx",`

import "../../styles/cta.css"

export default function CTA(){

 return(

  <section className="cta">

   <div className="container">

    <h2>

     Start Building Your Website Today

    </h2>

    <p>

     Generate portfolio sites, agency websites and blogs automatically.

    </p>

    <button>

     Launch Project

    </button>

   </div>

  </section>

 )

}

`)

/* =========================
FOOTER
========================= */

write("src/components/Footer/Footer.tsx",`

import {Link} from "react-router-dom"
import "../../styles/footer.css"

export default function Footer(){

 return(

  <footer className="footer">

   <div className="container">

    <p>

     © 2026 ${projectName}. All rights reserved.

    </p>

    <p>

     <Link to="/about">About</Link> | 
     <Link to="/blog">Blog</Link> | 
     <Link to="/contact">Contact</Link>

    </p>

   </div>

  </footer>

 )

}

`)

/* =========================
SERVICES
========================= */
write("src/components/Services/Services.tsx",`
import "../../styles/services.css"
export default function Services(){
 return(
  <section className="services">
   <div className="container">
    <h2>Our Services</h2>
    <div className="grid grid-3">
     <div className="card">
      <h3>Web Development</h3>
      <p>Modern React, TypeScript, and scalable architecture for any business.</p>
     </div>
     <div className="card">
      <h3>UI/UX Design</h3>
      <p>Beautiful, interactive, and responsive design systems for web and mobile.</p>
     </div>
     <div className="card">
      <h3>SEO & Analytics</h3>
      <p>Advanced SEO, analytics, and conversion optimization for growth.</p>
     </div>
    </div>
  </div>
  </section>
 )
}
`)
/* =========================
TEAM
========================= */
write("src/components/Team/Team.tsx",`
import "../../styles/team.css"
export default function Team(){
 return(
  <section className="team">
   <div className="container">
    <h2>Meet Our Team</h2>
    <div className="grid grid-4">
     <div className="card">
      <img src="/assets/team1.jpg" alt="Team Member" className="avatar"/>
      <h3>Alex Johnson</h3>
      <p>Lead Developer</p>
     </div>
     <div className="card">
      <img src="/assets/team2.jpg" alt="Team Member" className="avatar"/>
      <h3>Sarah Lee</h3>
      <p>UI/UX Designer</p>
     </div>
     <div className="card">
      <img src="/assets/team3.jpg" alt="Team Member" className="avatar"/>
      <h3>John Smith</h3>
      <p>SEO Specialist</p>
     </div>
     <div className="card">
      <img src="/assets/team4.jpg" alt="Team Member" className="avatar"/>
      <h3>Priya Patel</h3>
      <p>Project Manager</p>
     </div>
    </div>
   </div>
  </section>
 )
}
`)
/* =========================
CAREERS
========================= */
write("src/components/Careers/Careers.tsx",`
import "../../styles/careers.css"
export default function Careers(){
 return(
  <section className="careers">
   <div className="container">
    <h2>Careers</h2>
    <p>Join our creative team! We are always looking for talented developers, designers, and marketers.</p>
    <div className="grid grid-2">
     <div className="card">
      <h3>Frontend Developer</h3>
      <p>React, TypeScript, UI/UX, Animations</p>
      <button>Apply Now</button>
     </div>
     <div className="card">
      <h3>UI/UX Designer</h3>
      <p>Figma, Web Design, Prototyping</p>
      <button>Apply Now</button>
     </div>
    </div>
   </div>
  </section>
 )
}
`)
/* =========================
PORTFOLIO
========================= */
write("src/components/Portfolio/Portfolio.tsx",`
import "../../styles/portfolio.css"
export default function Portfolio(){
 return(
  <section className="portfolio">
   <div className="container">
    <h2>Portfolio</h2>
    <div className="grid grid-3">
     <div className="image-card">
      <img src="/assets/portfolio1.jpg" alt="Project 1"/>
      <h3>Creative Galaxy</h3>
      <p>Agency website with modern UI and SEO.</p>
     </div>
     <div className="image-card">
      <img src="/assets/portfolio2.jpg" alt="Project 2"/>
      <h3>Dev Portfolio</h3>
      <p>Personal portfolio with blog and projects.</p>
     </div>
     <div className="image-card">
      <img src="/assets/portfolio3.jpg" alt="Project 3"/>
      <h3>SaaS Landing</h3>
      <p>Product marketing page with testimonials and pricing.</p>
     </div>
    </div>
   </div>
  </section>
 )
}
`)
console.log("All advanced components created successfully")