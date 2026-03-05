# AI Website Setup Engine

## What does this project do?

This engine automatically generates a complete, modern website project for:
- Agencies
- Portfolios
- SaaS products
- Blogs

**Features:**
- Creates a React + TypeScript project with Vite
- Installs all UI, animation, SEO, and utility dependencies
- Generates multi-page architecture (Home, About, Services, Team, Careers, Portfolio, Pricing, Projects, Blog, Contact, NotFound)
- Builds beautiful, interactive, and responsive UI components (Navbar, Hero, Features, Testimonials, Pricing, Blog, About, Projects, Contact, CTA, Footer, Services, Team, Careers, Portfolio)
- Sets up a complete CSS design system (global, layout, utility, animations, glassmorphism, gradients, etc.)
- Adds SEO essentials (robots.txt, sitemap.xml, meta tags)
- Creates documentation and AI context files for the project
- Analyzes project for empty/large files and provides refactor suggestions
- Adds a context command to generate a full project tree and source code summary
- Verifies all required folders and files
- Exports the setup engine source code for reference

**How to use:**
1. Run `node setup/run.js` and enter your project name.
2. The engine builds everything automatically.
3. Navigate to your new project folder and run `npm run dev` to start the site.
4. Use `npm run context` to generate a full project context file.

**Result:**
You get a ready-to-use, scalable, beautiful website system for agencies, portfolios, SaaS, and blogs—no manual setup required.

---

# Requirements

Check installed tools

```bash
node -v
npm -v
```

Node.js 18+ recommended.

---

# 1. Clone Repository

```bash
git clone <repo-url>
cd ai-setup-engine
```

Downloads the setup engine.

---

# 2. Run Setup Engine (ROOT)

```bash
node setup/run.js
```

Starts the setup engine.

---

# 3. Enter Project Name

Example prompt:

```
Enter project name (default: portfolio)
```

Press Enter or type a custom name.

---

# 4. Engine Automatically Creates Project

The engine will automatically run:

```
npm create vite@latest
npm install
```

And generate project architecture.

---

# 5. Move Into Generated Project

```bash
cd portfolio
```

---

# 6. Start Development Server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 7. Generate AI Context (Inside Project)

```bash
npm run context
```

Creates:

```
PROJECT_CONTEXT.txt
```

Used by AI tools to understand the repository.
