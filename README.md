# AI Setup Engine

Tool that automatically creates a **React + TypeScript project with architecture, components, documentation, and AI context tools.**

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
