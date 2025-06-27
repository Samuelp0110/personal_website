# 📘 Developer Guide: Portfolio Component System

This document provides a complete reference for all reusable content blocks used in individual project pages on the site.

Location: `frontend/components/blocks/`

---

## 🧱 1. `ProjectLayout`

**Purpose:** Page wrapper to structure project layout with consistent font, spacing, and optional project metadata header.

**Props:**

```ts
interface ProjectLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  metadata?: ProjectMetadata;
}
```

- `metadata` includes: `title`, `date`, `tags`
- `showHeader` toggles the sticky header
- Content is vertically stacked and centered

---

## 🖼️ 2. `ImageTextBlock`

**Purpose:** Side-by-side image and text layout, useful for explaining visuals.

**Props:**

```ts
interface ImageTextBlockProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  reverse?: boolean;
}
```

- Images are responsive and maintain aspect ratio
- `reverse` swaps image and text sides
- Defaults to `/NoImage.svg` if no image provided

---

## 🖼️ 3. `ImageGalleryRow`

**Purpose:** Row of 2–4 images with optional captions, responsive with optional staggered layout.

**Props:**

```ts
interface ImageGalleryRowProps {
  images: { src: string; alt?: string; caption?: string }[];
  columns?: number;
  gap?: string;
  rounded?: boolean;
}
```

- Max width per image is capped (`max-w-[250px]`)
- Images stack and stagger at smaller breakpoints
- Fallback to `/NoImage.svg` supported

---

## 🧾 4. `QuoteBlock`

**Purpose:** Emphasizes a quote/testimonial with elegant typography and alignment control.

**Props:**

```ts
interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  align?: "left" | "center" | "right";
  maxWidth?: "prose" | "md" | "lg" | "xl" | "full";
}
```

---

## 📝 5. `ParagraphBlock`

**Purpose:** For rich text content with flexible alignment and layout control.

**Props:**

```ts
interface ParagraphBlockProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  maxWidth?: "prose" | "md" | "lg" | "xl" | "full";
}
```

---

## 🧭 6. `SectionHeader`

**Purpose:** Breaks sections with a visual title, subtitle, and optional divider.

**Props:**

```ts
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align: "left" | "center" | "right";
  hasDivider: boolean;
}
```

---

## 🌄 7. `TextOverImage`

**Purpose:** Full-width banner with image background and overlay text.

**Props:**

```ts
interface TextOverImageProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  darkenBackground?: boolean;
  textPosition?: "left" | "center" | "right";
}
```

---

## 🧰 8. `SideBySideBento`

**Purpose:** Two-column layout with a fixed 2x2 image grid and paired text.

**Props:**

```ts
interface SideBySideBentoProps {
  images: { src: string; alt?: string }[];
  title?: string;
  text?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}
```

---

## 🎥 9. `VideoEmbed`

**Purpose:** Responsive embedded video for YouTube or Vimeo links.

**Props:**

```ts
interface VideoEmbedProps {
  url?: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  aspectRatio?: string;
}
```

- Automatically detects platform and formats embed URL
- Falls back to `/NoImage.svg` if URL is missing

---

## ⚠️ 10. `CalloutBox`

**Purpose:** Utility box to highlight tips, warnings, or key info with styling per variant.

**Props:**

```ts
interface CalloutBoxProps {
  type: "info" | "success" | "warning" | "error";
  text: string;
  title?: string;
}
```

- Includes emoji icons, colored border and background
- Width is constrained to `max-w-prose`, centered

---

> 🧹 Blocks not included:
>
> - `BentoGrid` (replaced by ImageGalleryRow)
> - `BeforeAfterSlider` (shelved for future version)
> - `PDFEmbed` (already implemented separately)

---

✅ Ready for use in any `/projects/[slug]` page inside `<ProjectLayout />`.

To preview blocks interactively, see the `/demo` route (coming soon).

