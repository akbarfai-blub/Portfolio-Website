import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Akbar Fai | Frontend Developer",
  description: "Frontend developer focused on React & Next.js. based in Tulungagung, Indonesia",
  openGraph: {
    title: "Akbar Fai",
    description: "Frontend developer focused on React & Next.js.",
    url: "https://akbarfai.dev",
    siteName: "Akbar Fai",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Akbar Fai | Frontend Developer & Data Science Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Fai | Frontend Developer",
    description: "Frontend developer focused on React & Next.js. Data science enthusiast.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
