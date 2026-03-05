const fs=require("fs")
const path=require("path")
const project=process.argv[2]

const docs=path.join(project,"docs")
if(!fs.existsSync(docs)) fs.mkdirSync(docs)

fs.writeFileSync(path.join(docs,"AI_INSTRUCTIONS.md"),`
Rules for AI:

1 Modify only necessary files
2 Preserve architecture
3 Do not rewrite whole project
4 Keep components modular
`.trim())

fs.writeFileSync(path.join(docs,"DEPENDENCIES.txt"),`
React
Vite
TypeScript
React Router
Axios
`.trim())

fs.writeFileSync(path.join(docs,"ARCHITECTURE.md"),`
Architecture Principles

Component-based architecture
Each UI section is built as an independent component.

Pages Layer
src/pages contains page-level compositions.

Components Layer
src/components holds reusable UI components.

Hooks
Reusable logic is stored in src/hooks.

Services
API logic and external communication lives in src/services.

Utils
Utility helper functions live in src/utils.

Types
Shared TypeScript interfaces live in src/types.

Styles
Global and component styles live in src/styles.
`.trim())

console.log("Docs generated")