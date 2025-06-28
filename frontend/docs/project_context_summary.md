# Project Context Summary

This file documents the full development context of the portfolio website to ensure continuity across sessions and with different assistants.

---

## 🌐 Project Repository

**GitHub Repo:** [https://github.com/Samuelp0110/personal_website](https://github.com/Samuelp0110/personal_website)

## 🧱 Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** TailwindCSS
- **Build Tool:** Vite
- **Routing:** `react-router` (v6+, using `createBrowserRouter`)
- **PDF Viewer:** Uses native `<iframe>` components for embedded reports
- **Deployment:** Docker + Render (via custom Nginx config)
- **Folder Structure:** Monorepo with `frontend/` and `backend/` (currently only frontend used)

## 🚀 Live Site

- **Primary Domain:** [https://spreston.studio](https://spreston.studio)

---

## 📁 File Structure (key folders only)

```
personal_website/
├── frontend/
│   ├── public/
│   │   └── pdfs/                # Location of project report PDFs (e.g., fleco.pdf)
│   ├── src/
│   │   ├── projects/
│   │   │   └── [slug]/              # Each project in its own folder with:
│   │   │       ├── metadata.ts      # Metadata config for the project
│   │   │       └── index.tsx        # Optional React page for full project
│   │   ├── routes/
│   │   │   ├── ProjectPageLoader.tsx
│   │   │   ├── PDFViewerPage.tsx
│   │   │   └── [other routes...]
│   │   ├── data/
│   │   │   └── projectsMetadata.ts  # Collects and exports all project metadata
│   │   ├── components/
│   │   │   ├── projectBlocks/       # Prebuilt reusable layout blocks
│   │   │   └── [core components...]
|   |   └── types
|   |       └── projects.tsx         # Type definition for a projects metadata
│   ├── Dockerfile
│   └── nginx.conf
```

## 📦 Key Components

- `GlassProjectCard.tsx` – Used on the `/projects` listing page
- `ProjectHeroBlock.tsx`, `TextImageSplit.tsx`, etc. – Section templates for full project pages
- `PDFButton.tsx` – Opens a specific project's PDF report via `/pdf/[slug]` route
- `HeroHeader.tsx` – Reusable top banner with custom title text

---

## 📄 Project Routing

- ``– Project listing using`projectsMetadata.ts`
- ``– Dynamically loads a project's page if`index.tsx` exists
- ``– Opens an`iframe`to view a project’s PDF from`/public/pdfs/[slug].pdf`

### Dynamic Import Logic

- Handled via `ProjectPageLoader.tsx`
- Uses `import.meta.glob()` to find `index.tsx` pages at runtime

---

## 🧪 To Add a New Project:

1. Create a new folder in `frontend/projects/[your-slug]/`
2. Add `metadata.ts` file with:

```ts
const metadata: ProjectMetadata = {
  slug: "your-slug",
  title: "Project Title",
  description: "Short description.",
  date: "YYYY-MM-DD",
  tags: ["tag1", "tag2"],
  image: yourImageImport,
  pdfUrl: "/pdfs/your-slug.pdf",
};
export default metadata;
```

3. Optional: Add a full `index.tsx` file with a full React project page
4. Place any report PDF in `frontend/public/pdfs/your-slug.pdf`
5. Import the new `metadata.ts` into `projectsMetadata.ts`

---

## 📚 Last Known Good Dev Environment

- **Node:** v20 or v22
- **NPM:** v10+
- **Docker Desktop:** Running with BuildKit enabled

---

Keep this file up to date as the architecture evolves.
