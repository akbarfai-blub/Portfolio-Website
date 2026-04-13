export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Customer Churn Analysis & Prediction Dashboard",
    description:
      "An interactive dashboard built with Streamlit to analyze customer segmentation and predict churn risk based on the Olist e-commerce dataset.",
    tags: ["Streamlit", "Pandas", "NumPy", "Scikit-learn"],
    github:
      "https://github.com/akbarfai-blub/customer-churn-dashboard-streamlit",
    demo: "https://customer-churn-dashboard-app-p3ecfvqtsr5dxwpebs2laf.streamlit.app/",
  },
  {
    title: "Personal Finance Dashboard",
    description:
      "A minimalist and secure personal finance tracking dashboard to monitor daily expenses and income, with data visualization and user authentication.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    github: "https://github.com/akbarfai-blub/personal-finance-tracker",
    demo: "https://abbr-personal-finance-tracker.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with a clean minimalist design, dark mode support, and smooth animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/akbarfai-blub/portfolio",
  },
];
