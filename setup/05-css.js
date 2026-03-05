const fs=require("fs")
const project=process.argv[2]

process.chdir(project)

function write(file,content){
 if(!fs.existsSync(file)){
  fs.writeFileSync(file,content.trim())
 }
}

/* =========================
GLOBAL DESIGN SYSTEM
========================= */

write("src/styles/global.css",`

:root{

 --bg1:#0f172a;
 --bg2:#1e293b;

 --text:#f1f5f9;
 --muted:#94a3b8;

 --primary:#6366f1;
 --secondary:#22c55e;
 --accent:#f59e0b;

 --card:#1e293b;
 --border:#334155;

 --radius:10px;

 --shadow-sm:0 4px 10px rgba(0,0,0,.25);
 --shadow-md:0 10px 30px rgba(0,0,0,.35);
 --shadow-lg:0 25px 60px rgba(0,0,0,.45);

}

*{
 margin:0;
 padding:0;
 box-sizing:border-box;
}

html{
 scroll-behavior:smooth;
}

body{

 font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu;

 background:
 radial-gradient(circle at top,#1e293b,#020617);

 color:var(--text);

 line-height:1.6;

 min-height:100vh;

}

/* typography */

h1{
 font-size:52px;
 margin-bottom:20px;
}

h2{
 font-size:36px;
 margin-bottom:20px;
}

h3{
 font-size:24px;
 margin-bottom:10px;
}

p{
 color:var(--muted);
}

/* button */

button{

 padding:12px 26px;

 border:none;

 border-radius:var(--radius);

 background:
 linear-gradient(135deg,var(--primary),var(--secondary));

 color:white;

 font-weight:600;

 cursor:pointer;

 transition:all .25s ease;

}

button:hover{

 transform:translateY(-2px);

 box-shadow:var(--shadow-md);

}

`)

/* =========================
LAYOUT SYSTEM
========================= */

write("src/styles/layout.css",`

.container{

 max-width:1200px;

 margin:auto;

 padding:0 20px;

}

section{

 width:100%;

 padding:120px 20px;

 animation:fadeUp .7s ease both;

}

.grid{

 display:grid;

 gap:30px;

}

.grid-2{
 grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
}

.grid-3{
 grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
}

.grid-4{
 grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
}

.center{
 text-align:center;
}

.flex{
 display:flex;
 align-items:center;
}

.flex-between{
 display:flex;
 justify-content:space-between;
 align-items:center;
}

`)

/* =========================
UTILITY CLASSES
========================= */

write("src/styles/utils.css",`

.mt-1{margin-top:10px}
.mt-2{margin-top:20px}
.mt-3{margin-top:30px}

.mb-1{margin-bottom:10px}
.mb-2{margin-bottom:20px}
.mb-3{margin-bottom:30px}

.p-1{padding:10px}
.p-2{padding:20px}
.p-3{padding:30px}

.text-center{text-align:center}

.card{

 background:var(--card);

 border:1px solid var(--border);

 border-radius:var(--radius);

 padding:30px;

 transition:.25s;

}

.card:hover{

 transform:translateY(-5px);

 box-shadow:var(--shadow-md);

}

`)

/* =========================
ANIMATIONS
========================= */

write("src/styles/animations.css",`

@keyframes fadeUp{

 from{
  opacity:0;
  transform:translateY(30px);
 }

 to{
  opacity:1;
  transform:translateY(0);
 }

}

@keyframes fadeIn{

 from{
  opacity:0;
 }

 to{
  opacity:1;
 }

}

@keyframes float{

 0%{transform:translateY(0)}
 50%{transform:translateY(-8px)}
 100%{transform:translateY(0)}

}

.float{
 animation:float 4s ease-in-out infinite;
}

`)

/* =========================
NAVBAR
========================= */

write("src/styles/navbar.css",`

.navbar{

 width:100%;

 display:flex;

 justify-content:space-between;

 align-items:center;

 padding:20px 40px;

 background:rgba(15,23,42,.7);

 backdrop-filter:blur(12px);

 border-bottom:1px solid var(--border);

 position:sticky;

 top:0;

 z-index:100;

}

.logo{

 display:flex;

 align-items:center;

 gap:10px;

 font-size:20px;

 font-weight:700;

 color:var(--primary);

}

.navbar nav{

 display:flex;

 gap:28px;

}

.navbar a{

 text-decoration:none;

 color:var(--text);

 font-weight:500;

 position:relative;

}

.navbar a::after{

 content:"";

 position:absolute;

 left:0;

 bottom:-6px;

 width:0;

 height:2px;

 background:var(--secondary);

 transition:.25s;

}

.navbar a:hover::after{
 width:100%;
}

`)

/* =========================
HERO
========================= */

write("src/styles/hero.css",`

.hero{

 max-width:900px;

 margin:auto;

 text-align:center;

 padding:160px 20px;

}

.hero h1{

 font-size:56px;

 background:
 linear-gradient(135deg,#6366f1,#22c55e);

 -webkit-background-clip:text;
 -webkit-text-fill-color:transparent;

}

.hero p{

 font-size:20px;

 margin-bottom:30px;

}

.hero button{
 font-size:16px;
}

`)

/* =========================
FEATURES
========================= */

write("src/styles/features.css",`

.features{

 max-width:1100px;

 margin:auto;

 display:grid;

 grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

 gap:30px;

}

.features .card h3{
 margin-bottom:10px;
}

`)

/* =========================
TESTIMONIALS
========================= */

write("src/styles/testimonials.css",`

.testimonials{

 max-width:1100px;

 margin:auto;

}

.testimonials-grid{

 display:grid;

 grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

 gap:30px;

 margin-top:40px;

}

.testimonial{

 background:var(--card);

 border:1px solid var(--border);

 border-radius:var(--radius);

 padding:25px;

}

.testimonial span{

 display:block;

 margin-top:12px;

 color:var(--secondary);

}

`)

/* =========================
PRICING
========================= */

write("src/styles/pricing.css",`

.pricing{

 max-width:1100px;

 margin:auto;

}

.pricing-grid{

 display:grid;

 grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

 gap:30px;

 margin-top:40px;

}

.plan{

 background:var(--card);

 border:1px solid var(--border);

 border-radius:var(--radius);

 padding:35px;

 text-align:center;

 transition:.3s;

}

.plan:hover{

 transform:scale(1.04);

 box-shadow:var(--shadow-md);

}

.plan.popular{

 border:2px solid var(--primary);

}

`)

/* =========================
BLOG
========================= */

write("src/styles/blog.css",`

.blog{

 max-width:1100px;

 margin:auto;

}

.blog-grid{

 display:grid;

 grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

 gap:30px;

 margin-top:40px;

}

.post{

 background:var(--card);

 border:1px solid var(--border);

 border-radius:var(--radius);

 padding:25px;

 transition:.25s;

}

.post:hover{

 transform:translateY(-5px);

}

`)

/* =========================
ABOUT
========================= */

write("src/styles/about.css",`

.about{

 max-width:800px;

 margin:auto;

 text-align:center;

}

`)

/* =========================
PROJECTS
========================= */

write("src/styles/projects.css",`

.projects{

 max-width:1100px;

 margin:auto;

 text-align:center;

}

.projects p{
 margin-top:10px;
}

`)

/* =========================
CONTACT
========================= */

write("src/styles/contact.css",`

.contact{

 max-width:700px;

 margin:auto;

 text-align:center;

 background:var(--card);

 border:1px solid var(--border);

 border-radius:var(--radius);

 padding:40px;

}

.contact p{
 margin-top:10px;
}

`)

/* =========================
CTA
========================= */

write("src/styles/cta.css",`

.cta{

 text-align:center;

 background:
 linear-gradient(135deg,#6366f1,#22c55e);

 padding:80px 40px;

 border-radius:var(--radius);

 max-width:900px;

 margin:80px auto;

 box-shadow:var(--shadow-lg);

}

.cta h2{
 margin-bottom:20px;
}

`)

/* =========================
FOOTER
========================= */

write("src/styles/footer.css",`

.footer{

 padding:40px;

 text-align:center;

 border-top:1px solid var(--border);

 margin-top:80px;

 color:var(--muted);

}

`)

/* =========================
MOBILE NAVIGATION SYSTEM
========================= */

write("src/styles/mobile-navbar.css",`

.mobile-toggle{

 display:none;

 cursor:pointer;

 font-size:22px;

}

@media(max-width:768px){

 .navbar{

  flex-direction:column;

  align-items:flex-start;

 }

 .navbar nav{

  width:100%;

  flex-direction:column;

  gap:15px;

  margin-top:15px;

 }

 .mobile-toggle{

  display:block;

 }

}

`)

/* =========================
GLASS UI COMPONENTS
========================= */

write("src/styles/glass.css",`

.glass{

 background:rgba(255,255,255,.05);

 backdrop-filter:blur(10px);

 border:1px solid var(--border);

 border-radius:var(--radius);

 box-shadow:var(--shadow-sm);

}

.glass:hover{

 box-shadow:var(--shadow-md);

}

`)

/* =========================
GRADIENT BACKGROUNDS
========================= */

write("src/styles/gradients.css",`

.gradient-primary{

 background:
 linear-gradient(135deg,#6366f1,#22c55e);

}

.gradient-secondary{

 background:
 linear-gradient(135deg,#22c55e,#0ea5e9);

}

.gradient-accent{

 background:
 linear-gradient(135deg,#f59e0b,#ef4444);

}

`)

/* =========================
HOVER INTERACTIONS
========================= */

write("src/styles/interactions.css",`

.hover-lift{

 transition:.25s;

}

.hover-lift:hover{

 transform:translateY(-6px);

 box-shadow:var(--shadow-md);

}

.hover-scale{

 transition:.25s;

}

.hover-scale:hover{

 transform:scale(1.05);

}

`)

/* =========================
ADVANCED ANIMATIONS
========================= */

write("src/styles/advanced-animations.css",`

@keyframes slideUp{

 from{

  opacity:0;

  transform:translateY(40px);

 }

 to{

  opacity:1;

  transform:translateY(0);

 }

}

@keyframes slideLeft{

 from{

  opacity:0;

  transform:translateX(-40px);

 }

 to{

  opacity:1;

  transform:translateX(0);

 }

}

@keyframes slideRight{

 from{

  opacity:0;

  transform:translateX(40px);

 }

 to{

  opacity:1;

  transform:translateX(0);

 }

}

.slide-up{
 animation:slideUp .7s ease both;
}

.slide-left{
 animation:slideLeft .7s ease both;
}

.slide-right{
 animation:slideRight .7s ease both;
}

`)

/* =========================
IMAGE STYLING
========================= */

write("src/styles/media.css",`

img{

 max-width:100%;

 border-radius:var(--radius);

}

.image-card{

 overflow:hidden;

 border-radius:var(--radius);

}

.image-card img{

 transition:.3s;

}

.image-card:hover img{

 transform:scale(1.1);

}

`)

/* =========================
BLOG TYPOGRAPHY
========================= */

write("src/styles/blog-content.css",`

.blog-content{

 max-width:800px;

 margin:auto;

}

.blog-content h1{

 font-size:40px;

 margin-bottom:20px;

}

.blog-content p{

 margin-bottom:18px;

 line-height:1.7;

}

.blog-content img{

 margin:30px 0;

}

`)

/* =========================
SERVICES
========================= */
write("src/styles/services.css",`
.services {
  max-width:1100px;
  margin:auto;
  text-align:center;
}
.services .card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:30px;
  box-shadow:var(--shadow-sm);
  transition:.25s;
}
.services .card:hover {
  box-shadow:var(--shadow-md);
  transform:scale(1.04);
}
`)
/* =========================
TEAM
========================= */
write("src/styles/team.css",`
.team {
  max-width:1100px;
  margin:auto;
  text-align:center;
}
.team .card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:30px;
  box-shadow:var(--shadow-sm);
  transition:.25s;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.team .avatar {
  width:80px;
  height:80px;
  border-radius:50%;
  margin-bottom:12px;
  object-fit:cover;
  box-shadow:var(--shadow-sm);
}
.team .card:hover {
  box-shadow:var(--shadow-md);
  transform:translateY(-5px);
}
`)
/* =========================
CAREERS
========================= */
write("src/styles/careers.css",`
.careers {
  max-width:900px;
  margin:auto;
  text-align:center;
}
.careers .card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  padding:30px;
  box-shadow:var(--shadow-sm);
  transition:.25s;
}
.careers .card:hover {
  box-shadow:var(--shadow-md);
  transform:scale(1.04);
}
.careers button {
  margin-top:16px;
  background:var(--primary);
  color:white;
  border:none;
  border-radius:var(--radius);
  padding:10px 24px;
  font-weight:600;
  cursor:pointer;
  transition:.2s;
}
.careers button:hover {
  background:var(--secondary);
  transform:translateY(-2px);
}
`)
/* =========================
PORTFOLIO
========================= */
write("src/styles/portfolio.css",`
.portfolio {
  max-width:1100px;
  margin:auto;
  text-align:center;
}
.portfolio .image-card {
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  overflow:hidden;
  box-shadow:var(--shadow-sm);
  margin-bottom:20px;
  transition:.3s;
}
.portfolio .image-card img {
  width:100%;
  height:180px;
  object-fit:cover;
  border-radius:var(--radius);
  transition:.3s;
}
.portfolio .image-card:hover img {
  transform:scale(1.08);
}
.portfolio .image-card h3 {
  margin:12px 0 6px 0;
  color:var(--primary);
}
.portfolio .image-card p {
  color:var(--muted);
}
`)

console.log("Full advanced CSS design system generated")