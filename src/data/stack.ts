export type StackLevel = "primary" | "enthusiast";

export type StackItem = {
  name: string;
  icon: string;
  level: StackLevel;
};

export const frontendStack: StackItem[] = [
  { name: "React.js", icon: "SiReact", level: "primary" },
  { name: "Next.js", icon: "SiNextdotjs", level: "primary" },
  { name: "TypeScript", icon: "SiTypescript", level: "primary" },
  { name: "JavaScript", icon: "SiJavascript", level: "primary" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", level: "primary" },
  { name: "Git", icon: "SiGit", level: "primary" },
  { name: "Figma", icon: "SiFigma", level: "enthusiast" },
];

export const dataStack: StackItem[] = [
  { name: "Python", icon: "SiPython", level: "primary" },
  { name: "Pandas", icon: "SiPandas", level: "enthusiast" },
  { name: "Scikit-learn", icon: "SiScikitlearn", level: "enthusiast" },
  { name: "SQL", icon: "SiPostgresql", level: "enthusiast" },
  { name: "Google Colab", icon: "SiGooglecolab", level: "enthusiast" },
];
