# Portfolio Website — PRD

**Akbar Fai** · Frontend Developer & Data Science Enthusiast  
Version: 3.1 · Status: In Progress

---

## 1. What's this about?

This is my personal portfolio website. The main goal is simple — I want people to land on this page and immediately get who I am, what I do, and how to reach me.

Right now my GitHub profile still says "coming soon" on the portfolio link, so this is finally fixing that.

Who's going to read this? Honestly, anyone — recruiters, potential collaborators, or just someone who stumbled on my GitHub. So the vibe should be clean, approachable, and not try-hard.

**What I want to get out of this:**

- Show my skills and projects in a way that feels honest and professional
- Give people an easy way to reach out for collaboration or work
- Make the site itself proof that I can build good frontend — because it literally is one of my projects

---

## 2. Design System

The overall direction is **light, clean, and minimal** — heavy on whitespace, easy on the eyes. Dark mode is supported too with a deep navy-black palette (not just grey).

### Light Mode

| Token            | Hex       | Used for                        |
| ---------------- | --------- | -------------------------------- |
| `bg-base`        | `#F3F4F6` | Main page background            |
| `bg-surface`     | `#FFFFFF` | Cards, white sections           |
| `bg-header`      | `#F8F9FA` | Navbar background                |
| `btn-primary`    | `#1F2937` | Dark CTA buttons, badges         |
| `text-primary`   | `#111827` | Main headings                    |
| `text-secondary` | `#6B7280` | Body text, subtitles             |
| `text-muted`     | `#9CA3AF` | Small labels, placeholders       |
| `border`         | `#E5E7EB` | Dividers, card borders           |
| `accent`         | `#374151` | Hover states, active underlines  |

### Dark Mode

| Token            | Hex       | Used for               |
| ---------------- | --------- | ----------------------- |
| `bg-base`        | `#0F1117` | Main page background   |
| `bg-surface`     | `#1A1D27` | Cards, sections         |
| `bg-header`      | `#13161F` | Navbar background       |
| `btn-primary`    | `#E5E7EB` | CTA button (inverted)   |
| `text-primary`   | `#F9FAFB` | Main headings            |
| `text-secondary` | `#9CA3AF` | Body text                |
| `text-muted`     | `#6B7280` | Small labels              |
| `border`         | `#2D3748` | Dividers, card borders  |
| `accent`         | `#CBD5E0` | Hover states             |

> Note: Since this project ended up using **Tailwind v4**, colors are defined via `@theme` directive in `globals.css` — not in `tailwind.config.ts` like v3.

### Typography

> **Update (v3.1):** Moved from a single-font setup (Inter everywhere) to a **font pairing**. Inter alone felt too neutral for large hero/display text — it's great for body and UI, but lacked personality at 56–80px. Geist Sans now handles display/heading roles, Inter stays for body copy. This keeps readability strong while giving the hero more visual character.

| Role              | Font           | Weight  | Size    |
| ----------------- | -------------- | ------- | ------- |
| Hero / Display    | **Geist Sans** | 700–900 | 56–80px |
| Section Headings  | **Geist Sans** | 600–700 | 24–40px |
| Body              | Inter          | 400     | 16px    |
| Labels / Captions | Inter (or Geist Mono for tech-stack badges/tags) | 500 | 12–14px |

**Font loading setup:**

- `Inter` — loaded via `next/font/google`, used for body text
- `Geist Sans` / `Geist Mono` — loaded via the standalone `geist` npm package (`geist/font/sans`, `geist/font/mono`), not `next/font/google`, since Geist only ships as a built-in Google Font starting Next.js 15+ and this project is on Next.js 14
- Both are wired up as CSS variables in `src/app/layout.tsx` and mapped in the Tailwind v4 `@theme` block in `globals.css` (`--font-heading`, `--font-body`, `--font-mono`)

> **Important:** The OG Image route (`src/app/og/route.tsx`) intentionally still uses local **Inter `.ttf`** files (`Inter-Regular.ttf`, `Inter-Bold.ttf` in `public/fonts/`) with the Node.js runtime. This was **not** migrated to Geist and should stay as-is — `next/og` previously broke with `.woff` fonts, and the local `.ttf` + Node.js runtime combo is the known-working fix. Don't "sync" this with the new Geist setup without testing separately first.

### Design principles I'm sticking to

- **Minimal** — if an element doesn't need to be there, it's not there
- **Type-first** — visual hierarchy comes from typography, not color
- **Subtle motion** — scroll animations yes, flashy stuff no
- **Mobile-first** — works from 375px and up

---

## 3. Page Structure

Single page layout. Everything lives on `/`.

```
/ (Home)
├── Navbar
├── Hero
├── About
├── Stack
├── Projects
├── Learning Journey
├── Contact
└── Footer
```

---

## 4. Tech Stack

### Core

| Layer     | Package            | Why                                 |
| --------- | ------------------ | ------------------------------------ |
| Framework | `next` `^14`       | App Router, good for SSG + SSR mix  |
| Language  | `typescript`       | Strict mode, less bugs               |
| Styling   | `tailwindcss` `^4` | Utility-first, fast to build         |

### UI & Icons

| Need             | Package                                                | Why                          |
| ---------------- | ------------------------------------------------------ | ----------------------------- |
| General icons    | `lucide-react`                                         | Lightweight, tree-shakeable   |
| Brand/tech icons | `react-icons` (use `fa` prefix, not `si` — had issues) | GitHub, LinkedIn logos etc    |
| Body font        | `next/font/google` → Inter                             | Zero layout shift             |
| Display font     | `geist` package → Geist Sans / Geist Mono              | Stronger hero/heading character, pairs with Inter for body; installed standalone since project is on Next.js 14 (Geist isn't bundled as default until Next.js 15+) |

> Heads up: `react-icons/si` had some export issues on this project. Use `react-icons/fa` for social icons like GitHub and LinkedIn — `FaGithub`, `FaLinkedin`.

### Animation

| Package         | Version | Used for                       |
| --------------- | ------- | -------------------------------- |
| `framer-motion` | `^11`   | Scroll fade-ins, hover effects  |

Basic fade-in component I reuse everywhere:

```tsx
// components/ui/FadeIn.tsx
"use client";
import { motion } from "framer-motion";

export function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
```

### Dark Mode

| Package       | Notes                                   |
| ------------- | ----------------------------------------- |
| `next-themes` | No flicker, works well with App Router  |

```tsx
// app/layout.tsx
<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
  {children}
</ThemeProvider>
```

### Contact Form

| Package               | Why                              |
| ---------------------- | --------------------------------- |
| `react-hook-form`     | Clean form handling               |
| `zod`                 | Input validation                  |
| `@hookform/resolvers` | Connects zod to react-hook-form  |

For now using `mailto:` is fine. Can upgrade to Resend or Formspree later if needed.

### Utilities

| Package          | Used for                                  |
| ----------------- | -------------------------------------------- |
| `clsx`           | Conditional classNames                     |
| `tailwind-merge` | Merge Tailwind classes without conflicts   |

Always use the `cn()` helper — saves a lot of headache:

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### SEO & Meta

Using Next.js built-in `metadata` export:

```ts
export const metadata = {
  title: "Akbar Fai — Frontend Developer",
  description:
    "Frontend developer focused on React & Next.js. Data science enthusiast.",
  openGraph: {
    title: "Akbar Fai",
    description: "Frontend developer focused on React & Next.js.",
    url: "https://akbarfai.dev",
    siteName: "Akbar Fai",
    type: "website",
  },
};
```

**OG Image generation** — implemented at `src/app/og/route.tsx` using `next/og`, running on the **Node.js runtime** (not edge). Uses local `Inter-Regular.ttf` and `Inter-Bold.ttf` from `public/fonts/`, deliberately kept text-only (no photo) to avoid cropping complexity. This font choice is independent from the Geist migration above — see Typography section note.

### Dev Tools

| Tool                             | Notes                        |
| --------------------------------- | ------------------------------ |
| `eslint` + `eslint-config-next` | Comes with Next.js setup     |
| `prettier`                       | Consistent formatting        |
| `prettier-plugin-tailwindcss`   | Auto-sorts Tailwind classes  |

---

## 5. Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # ThemeProvider, fonts (Inter + Geist), metadata
│   ├── page.tsx            # All sections live here
│   ├── og/
│   │   └── route.tsx       # OG image generation (local Inter .ttf, Node.js runtime)
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stack.tsx
│   │   ├── Projects.tsx
│   │   ├── LearningJourney.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── FadeIn.tsx
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── ThemeToggle.tsx
│
├── data/
│   ├── projects.ts          # Project list
│   ├── stack.ts             # Skills/tech stack
│   └── timeline.ts          # Learning journey timeline
│
└── lib/
    └── utils.ts             # cn() helper

public/
└── fonts/
    ├── Inter-Regular.ttf     # Used by OG image route only
    └── Inter-Bold.ttf        # Used by OG image route only
```

Keeping content in `data/` makes it easy to update without touching components — just edit the array and done.

---

## 6. Sections

### Navbar

Sticky top, background `bg-header`. Logo left, nav links right (About · Stack · Projects · Contact), "Let's Talk" CTA button, and a light/dark toggle. Nav links have a subtle slide-in underline on hover — small detail but makes it feel more polished.

### Hero

Big text, left-aligned, set in **Geist Sans** (700–900 weight). Small "Frontend Developer" tag up top, large heading, short subtext, two CTA buttons. Photo on the right with a subtle rotating dashed ring decoration.

### About

Short and personal — just 2–3 paragraphs. Right side shows live GitHub stats pulled from the GitHub API: repos, contributions, followers. Contributions use GitHub GraphQL API (needs a token in `.env.local`). CV download button linked to Google Drive.

### Stack

Two-column grid — Frontend on the left, Data Science on the right. Each item is an icon + label. Clean, no borders, no noise.

### Projects

Card grid (2–3 columns). Each card has a full-width 16:9 thumbnail (with gradient/initial fallback), title, short description, tech stack badges, and links to GitHub + live demo if available. No category badges — kept minimal. `github` field in the Project interface is optional to support design-only projects. Quality over quantity.

**Current projects:**

- D'jto Store — real client UMKM e-commerce project
- Batin — Mental Health App (UI/UX case study, design-only)
- This portfolio website (Next.js + Tailwind + Framer Motion)

### Learning Journey

Vertical timeline with year, milestone, and skill badges per row. No formal job experience yet — and that's fine. This section shows consistency and growth over time, which matters more. Duplicate year entries use an index-based React key (`${item.year}-${index}`) to avoid key collisions.

```
2019  Started learning programming & Python          [Python] [Git]
2021  Explored data science, active on Kaggle        [Pandas] [NumPy] [Scikit-learn]
2022  Web development — HTML, CSS, JavaScript        [HTML] [CSS] [JavaScript]
2023  Deep dive into React.js, first project         [React.js] [Vite] [Tailwind CSS]
2024  Next.js & Tailwind, from design to deploy      [Next.js] [TypeScript] [Vercel]
2025  Building portfolio & open for collaboration    [Next.js] [Framer Motion] [Supabase]
```

### Contact

Simple and direct. One heading, one subtext, three buttons — email, LinkedIn, GitHub. Behance icon included in socials. No overthinking.

### Footer

One line: `Akbar Fai · Built with Next.js & Tailwind CSS · 2025`

---

## 7. Setup

```bash
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir
cd portfolio

npm install framer-motion next-themes
npm install lucide-react react-icons
npm install react-hook-form zod @hookform/resolvers
npm install clsx tailwind-merge
npm install geist
npm install -D prettier prettier-plugin-tailwindcss
```

For GitHub contributions, add to `.env.local`:

```
GITHUB_TOKEN=your_token_here
```

Generate at: GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained → read-only public data.

---

## 8. Deployment

Deploying to Vercel — connect the GitHub repo and it auto-deploys on every push. Add `GITHUB_TOKEN` as an environment variable in the Vercel dashboard before deploying.

Custom domain can be set up later via Vercel dashboard if needed.

---

## 9. Build Order

| Phase   | What gets built                                 | Key packages                                              |
| ------- | ------------------------------------------------- | ----------------------------------------------------------- |
| Phase 1 | Navbar, Hero, Footer — get something on screen  | `next`, `tailwind`, `next-themes`, `lucide-react`         |
| Phase 2 | About, Stack, Projects — core content            | `react-icons`, `framer-motion`, `clsx`, `tailwind-merge`  |
| Phase 3 | Learning Journey, Contact form                   | `react-hook-form`, `zod`                                    |
| Phase 4 | SEO, OG image, performance, dark mode polish     | `next/og`, `next/metadata`                                   |
| Phase 5 | Typography refinement — Geist/Inter font pairing | `geist`                                                       |

---

## 10. Notes & things I learned building this

- **No formal experience yet — that's okay.** The Learning Journey section is more honest and actually more interesting than an empty work history. It shows I've been consistently building things since 2019.
- **The portfolio is the proof.** If the site itself looks and performs well, that already says a lot.
- **Tailwind v4 is different.** Colors go in `globals.css` via `@theme`, not `tailwind.config.ts`. Took a bit to figure out but makes sense once you get it.
- **Icon libraries can be tricky.** `react-icons/si` had broken exports — switched to `react-icons/fa` for social icons. Always check before assuming an icon exists.
- **Keep data in `/data`.** Updating project info or timeline is just editing a TypeScript array — no need to touch component files.
- **`.woff` fonts are incompatible with `next/og`.** Local `.ttf` files with `runtime: 'nodejs'` is the reliable fix. Text-only OG images are simpler than photo-based ones — no cropping issues.
- **Design-only projects need optional fields.** Made `github` optional in the Project interface so case-study-only work (like the Batin app) doesn't force a fake repo link.
- **Font pairing over a single font.** Inter alone felt too neutral for large hero/display text. Switched to Geist Sans for headings/display, kept Inter for body — gave the hero more character without hurting body readability. Kept the OG image route on Inter `.ttf` deliberately; that setup is fragile and already solved, no need to touch it during the font migration.

---

_This PRD gets updated as the build progresses._