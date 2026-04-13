export type TimelineItem = {
  year: string;
  label: string;
  tags: string[];
};

export const timeline: TimelineItem[] = [
  {
    year: "2019",
    label: "Started learning programming & Python",
    tags: ["Python", "Git"],
  },
  {
    year: "2021",
    label: "Explored data science, active on Kaggle",
    tags: ["Pandas", "NumPy", "Scikit-learn", "Kaggle"],
  },
  {
    year: "2022",
    label: "Web development — HTML, CSS, JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2023",
    label: "Deep dive into React.js, first personal project",
    tags: ["React.js", "Vite", "Tailwind CSS"],
  },
  {
    year: "2024",
    label: "Next.js & Tailwind CSS — from design to deploy",
    tags: ["Next.js", "TypeScript", "Vercel", "Figma"],
  },
  {
    year: "2025",
    label: "Building portfolio & open for collaboration",
    tags: ["Next.js", "Framer Motion", "Supabase"],
  },
];
