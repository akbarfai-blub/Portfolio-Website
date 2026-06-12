export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
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
    image: "/images/projects/churn-dashboard.png",
  },
  {
    title: "Personal Finance Dashboard",
    description:
      "A minimalist and secure personal finance tracking dashboard to monitor daily expenses and income, with data visualization and user authentication.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    github: "https://github.com/akbarfai-blub/personal-finance-tracker",
    demo: "https://abbr-personal-finance-tracker.vercel.app/",
    image: "/images/projects/finance-dashboard.png",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with a clean minimalist design, dark mode support, and smooth animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/akbarfai-blub/portfolio",
    demo: "https://abbr-portfolio-website.vercel.app/",
    image: "/images/projects/portfolio-website.jpeg",
  },
  {
    title: "D'jto Store",
    description: "D'jto is an MSME brand based in Nganjuk, East Java, that sells fresh repackaged shallots and fried shallots sourced directly from local farmers. This website serves as D'jto's first digital channel to reach consumers beyond conventional distribution networks, such as middlemen and traditional markets.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Next/Image + Cloudinary free"],
    github: "https://github.com/akbarfai-blub/Toko-Online-Bawang-Merah-Bawang-Goreng-Nganjuk.git",
    demo: "https://djto.store/",
    image: "/images/projects/djto-store.jpeg",
  }
]
