# personal_website

## Technology Stack

| Tech       | Version |
| ---------- | ------- |
| Vite       | --      |
| React      | --      |
| Typescript | --      |
| Tailwind   | --      |

- Vite tailwind plugin "@tailwindcss/vite" requires the override in package.json to work with vite 7.0.0

## 🛠️ Adding a New Project

To add a new project page to the site, follow these steps carefully:

### 1. 📁 Folder Setup

Inside the `src/projects/` directory:

- Create a new folder named **exactly** what you want the project’s slug (URL path) to be.
  - 📌 Example: `src/projects/myCoolApp`

---

### 2. 🧠 Metadata File

In the new folder, create a file called `metadata.ts` with the following structure:

```ts
import type { ProjectMetadata } from "../../types/projects";
import previewImage from "../../assets/your_preview_image.jpg";

const metadata: ProjectMetadata = {
  slug: "myCoolApp", // Must exactly match the folder name
  title: "My Cool App",
  description: "A short description of what this project does.",
  date: "2025-06-25", // YYYY-MM-DD format
  tags: ["tag1", "tag2"],
  image: previewImage,
  pdfUrl: "/pdfs/my-cool-app.pdf", // Optional: only if a PDF is available
};

export default metadata;
```
