# PRD — Portfolio Website

**Akbar Fai** · Frontend Developer & Data Science Enthusiast  
Version: 2.0 · Status: Draft

---

## 1. Overview

Personal portfolio website untuk menampilkan identitas profesional sebagai **Frontend Developer** yang fokus di React.js & Next.js, sekaligus data science enthusiast. Website ini berfungsi sebagai digital presence dan pengganti "coming soon" di GitHub profile.

**Goals:**

- Menampilkan skill dan project secara clean dan profesional
- Menjadi titik kontak untuk kolaborasi atau hiring
- Mencerminkan kemampuan frontend development secara langsung lewat kualitas websitenya sendiri

---

## 2. Design System

### 2.1 Light Mode (Primary)

| Token            | Hex       | Penggunaan                   |
| ---------------- | --------- | ---------------------------- |
| `bg-base`        | `#F3F4F6` | Background utama halaman     |
| `bg-surface`     | `#FFFFFF` | Card, section putih          |
| `bg-header`      | `#F8F9FA` | Navbar background            |
| `btn-primary`    | `#1F2937` | CTA button, badge gelap      |
| `text-primary`   | `#111827` | Heading utama                |
| `text-secondary` | `#6B7280` | Body text, subtitle          |
| `text-muted`     | `#9CA3AF` | Label kecil, placeholder     |
| `border`         | `#E5E7EB` | Divider, card border         |
| `accent`         | `#374151` | Hover state, underline aktif |

### 2.2 Dark Mode (Optional / Toggle)

| Token            | Hex       | Penggunaan            |
| ---------------- | --------- | --------------------- |
| `bg-base`        | `#0F1117` | Background utama      |
| `bg-surface`     | `#1A1D27` | Card, section         |
| `bg-header`      | `#13161F` | Navbar background     |
| `btn-primary`    | `#E5E7EB` | CTA button (inverted) |
| `text-primary`   | `#F9FAFB` | Heading utama         |
| `text-secondary` | `#9CA3AF` | Body text             |
| `text-muted`     | `#6B7280` | Label kecil           |
| `border`         | `#2D3748` | Divider, card border  |
| `accent`         | `#CBD5E0` | Hover state           |

### 2.3 Tailwind Custom Config

Extend `tailwind.config.ts` dengan token di atas:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#F3F4F6",
          dark: "#0F1117",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1A1D27",
        },
        header: {
          light: "#F8F9FA",
          dark: "#13161F",
        },
        primary: {
          light: "#1F2937",
          dark: "#E5E7EB",
        },
        "text-primary": {
          light: "#111827",
          dark: "#F9FAFB",
        },
        "text-secondary": {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
        border: {
          light: "#E5E7EB",
          dark: "#2D3748",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

### 2.4 Typography

| Role            | Font  | Weight  | Size    |
| --------------- | ----- | ------- | ------- |
| Display / Hero  | Inter | 700–900 | 56–80px |
| Heading         | Inter | 600–700 | 24–40px |
| Body            | Inter | 400     | 16px    |
| Label / Caption | Inter | 500     | 12–14px |

### 2.5 Prinsip Desain

- **Minimalist** — whitespace-heavy, tidak ada elemen dekoratif yang tidak perlu
- **Type-driven** — hierarki visual dari tipografi, bukan dari warna
- **Subtle motion** — fade-in on scroll, no flashy animation
- **Mobile-first** — responsive dari 375px ke atas

---

## 3. Struktur Halaman (Single Page)

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

### 4.1 Core

| Layer     | Package             | Keterangan              |
| --------- | ------------------- | ----------------------- |
| Framework | `next` `^14`        | App Router, SSG         |
| Language  | `typescript`        | Strict mode             |
| Styling   | `tailwindcss` `^3`  | Utility-first CSS       |
| CSS Reset | `@tailwindcss/base` | Termasuk dalam Tailwind |

### 4.2 UI & Icons

| Kebutuhan       | Package                     | Alasan                                             |
| --------------- | --------------------------- | -------------------------------------------------- |
| Icon umum       | `lucide-react`              | Ringan, konsisten, tree-shakeable                  |
| Icon tech/brand | `react-icons` (subset `si`) | SimpleIcons untuk logo React, Next.js, Python, dll |
| Font            | `next/font/google` → Inter  | Zero layout shift, otomatis optimal                |

Contoh pemakaian icon brand di Stack section:

```tsx
import { SiReact, SiNextdotjs, SiTailwindcss, SiPython } from "react-icons/si";
import { Github, Mail, Linkedin } from "lucide-react";
```

### 4.3 Animation

| Package         | Versi | Penggunaan                                     |
| --------------- | ----- | ---------------------------------------------- |
| `framer-motion` | `^11` | Fade-in on scroll, hover card, page transition |

Contoh fade-in on scroll yang dipakai berulang:

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

### 4.4 Dark Mode

| Package       | Keterangan                                             |
| ------------- | ------------------------------------------------------ |
| `next-themes` | Dark/light toggle tanpa flicker, kompatibel App Router |

Setup di `layout.tsx`:

```tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### 4.5 Form & Contact

| Package               | Keterangan                           |
| --------------------- | ------------------------------------ |
| `react-hook-form`     | Form handling ringan, validasi mudah |
| `zod`                 | Schema validasi input form           |
| `@hookform/resolvers` | Bridging zod dengan react-hook-form  |

Alternatif tanpa backend: gunakan `mailto:` link atau integrasi **Resend** / **Formspree** untuk kirim email dari form.

### 4.6 Utilities

| Package                   | Penggunaan                          |
| ------------------------- | ----------------------------------- |
| `clsx`                    | Conditional className               |
| `tailwind-merge`          | Merge Tailwind class tanpa konflik  |
| `@tailwindcss/typography` | Styling konten teks (jika ada blog) |

Fungsi `cn()` helper yang umum dipakai:

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4.7 SEO & Meta

| Package / Fitur | Keterangan                                        |
| --------------- | ------------------------------------------------- |
| `next/metadata` | Built-in Next.js, definisi title, description, OG |
| `next/og`       | Generate OG image dinamis                         |

Contoh metadata di `app/layout.tsx`:

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

### 4.8 Dev Tools

| Tool                            | Keterangan                 |
| ------------------------------- | -------------------------- |
| `eslint` + `eslint-config-next` | Linting bawaan Next.js     |
| `prettier`                      | Code formatting            |
| `prettier-plugin-tailwindcss`   | Auto-sort Tailwind classes |

---

## 5. Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Root layout, ThemeProvider, font, metadata
│   ├── page.tsx            # Home page — semua section
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
│       ├── FadeIn.tsx       # Reusable animation wrapper
│       ├── Button.tsx
│       ├── Badge.tsx        # Tech stack tag
│       └── ThemeToggle.tsx
│
├── data/
│   ├── projects.ts          # Array data project
│   ├── stack.ts             # Array data skill/stack
│   └── timeline.ts          # Array data learning journey
│
└── lib/
    └── utils.ts             # cn() helper
```

---

## 6. Section Breakdown

### 6.1 Navbar

- Logo / nama: `Akbar Fai`
- Menu: About · Stack · Projects · Contact
- CTA: `Let's Talk` (button dark)
- Sticky, background `bg-header`, border-bottom saat scroll
- `ThemeToggle` button untuk dark/light

### 6.2 Hero

```
[Tag kecil]  Frontend Developer

Akbar Fai
Building clean web
experiences with React & Next.js

Data science enthusiast. I care about clean code,
good UX, and things that actually work.

[CTA]  View Projects   ↓  Get in touch
```

Layout: teks besar kiri, kanan foto atau geometris minimal.

### 6.3 About

Singkat, personal. 2–3 paragraf pendek. Foto opsional di samping.

### 6.4 Stack

Grid 2 kolom (Frontend & Data Science). Setiap item: ikon `react-icons/si` + label.

Data di `data/stack.ts`:

```ts
export const frontendStack = [
  { name: "React.js", icon: "SiReact" },
  { name: "Next.js", icon: "SiNextdotjs" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Figma", icon: "SiFigma" },
];

export const dataStack = [
  { name: "Python", icon: "SiPython" },
  { name: "Pandas", icon: "SiPandas" },
  { name: "Scikit-learn", icon: "SiScikitlearn" },
  { name: "Kaggle", icon: "SiKaggle" },
];
```

### 6.5 Projects

Grid 2–3 kolom card. Data di `data/projects.ts`. Setiap project:

```ts
type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  thumbnail?: string;
};
```

### 6.6 Learning Journey

Vertical timeline. Data di `data/timeline.ts`:

```ts
export const timeline = [
  { year: "2019", label: "Mulai belajar programming & Python" },
  { year: "2021", label: "Eksplorasi data science, aktif di Kaggle" },
  { year: "2022", label: "Web development — HTML, CSS, JavaScript" },
  { year: "2023", label: "Deep dive React.js, project personal pertama" },
  { year: "2024", label: "Next.js, Tailwind CSS, desain ke deploy" },
  { year: "2025", label: "Fokus portfolio & open for collaboration" },
];
```

### 6.7 Contact

CTA sederhana. Email via `mailto:` atau form dengan `react-hook-form` + `zod`.

### 6.8 Footer

```
Akbar Fai · Built with Next.js & Tailwind CSS · 2025
```

---

## 7. Setup & Installation

```bash
# Buat project
npx create-next-app@latest portfolio --typescript --tailwind --app --src-dir

cd portfolio

# Core dependencies
npm install framer-motion next-themes

# Icons
npm install lucide-react react-icons

# Form
npm install react-hook-form zod @hookform/resolvers

# Utilities
npm install clsx tailwind-merge

# Dev tools
npm install -D prettier prettier-plugin-tailwindcss
```

`.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## 8. Deployment

| Platform                 | Config                                                       |
| ------------------------ | ------------------------------------------------------------ |
| **Vercel** (recommended) | Connect GitHub repo, auto-deploy on push                     |
| Custom domain            | Set di Vercel dashboard, DNS CNAME ke `cname.vercel-dns.com` |
| Environment              | Tidak ada env khusus kecuali pakai form backend (Resend dsb) |

---

## 9. Prioritas Pengerjaan

| Fase        | Scope                                              | Packages Dibutuhkan                               |
| ----------- | -------------------------------------------------- | ------------------------------------------------- |
| **Phase 1** | Setup project, Navbar, Hero, Footer                | `next`, `tailwind`, `next-themes`, `lucide-react` |
| **Phase 2** | About, Stack, Projects                             | `react-icons`, `framer-motion`, `clsx`, `twMerge` |
| **Phase 3** | Learning Journey, Contact form                     | `react-hook-form`, `zod`                          |
| **Phase 4** | SEO, OG image, dark mode polish, performance audit | `next/og`, `next/metadata`                        |

---

## 10. Catatan Khusus

- **Soal Experience:** Section "Learning Journey" jauh lebih jujur dan justru menunjukkan konsistensi — sesuatu yang recruiter dan kolaborator appreciate.
- **Portfolio = Bukti Diri:** Website ini sendiri adalah project terbaik. Pastikan performanya bagus, responsive, dan code-nya clean.
- **Data-driven sections:** Pisahkan konten ke folder `data/` agar mudah diupdate tanpa menyentuh komponen.
- **`cn()` helper:** Selalu pakai untuk conditional className agar tidak ada konflik Tailwind class.

---

_PRD ini bisa di-update seiring development berjalan._
