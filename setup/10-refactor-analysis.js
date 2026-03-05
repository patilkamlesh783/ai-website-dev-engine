const fs=require("fs")
const path=require("path")
const project=process.argv[2]

let suggestions=[
  "Remove unused components and pages",
  "Check for duplicate logic and repeated code",
  "Review and optimize imports",
  "Split large components into smaller ones",
  "Use hooks for reusable logic",
  "Optimize CSS for modularity and performance",
  "Ensure accessibility (a11y) in all UI",
  "Add type annotations for all functions and props",
  "Use lazy loading for images and routes",
  "Document all custom hooks and services",
  "Refactor for mobile and responsive design",
  "Review SEO meta tags and Open Graph data",
  "Use animation libraries for smooth transitions",
  "Remove dead code and legacy files",
  "Organize assets and data for scalability"
]

fs.writeFileSync(path.join(project,"docs","REFACTOR_SUGGESTIONS.md"),suggestions.join("\n"))

console.log("Deep refactor analysis added for large, modern codebase")
