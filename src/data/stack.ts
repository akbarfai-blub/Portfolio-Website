export type StackLevel = "primary" | "enthusiast";

export type StackItem = {
  name: string;
  icon: string;
  level: StackLevel;
};

export const frontendStack: StackItem[] = [
  { name: "Next.js", icon: "SiNextdotjs", level: "primary" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", level: "primary" },
  { name: "React.js", icon: "SiReact", level: "enthusiast" },
  { name: "TypeScript", icon: "SiTypescript", level: "enthusiast" },
  { name: "JavaScript", icon: "SiJavascript", level: "enthusiast" },
  { name: "Git", icon: "SiGit", level: "enthusiast" },
  { name: "Figma", icon: "SiFigma", level: "enthusiast" },
];

export const dataStack: StackItem[] = [
  { name: "Python", icon: "SiPython", level: "primary" },
  { name: "Pandas", icon: "SiPandas", level: "primary" },
  { name: "Scikit-learn", icon: "SiScikitlearn", level: "primary" },
  { name: "SQL", icon: "SiPostgresql", level: "primary" },
  { name: "Google Colab", icon: "SiGooglecolab", level: "enthusiast" },
];
