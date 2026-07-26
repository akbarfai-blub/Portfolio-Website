import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akbar Fai | Data Analyst & Web Developer",
  description: "Data analyst who builds his own tools — Python, React, and everything in between. Based in Tulungagung, Indonesia.",
  openGraph: {
    title: "Akbar Fai",
    description: "Data analyst who builds his own tools — Python, React, and everything in between.",
    url: "https://akbarfai.dev",
    siteName: "Akbar Fai",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Akbar Fai | Data Analyst & Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Fai | Data Analyst & Web Developer",
    description: "Data analyst who builds his own tools — Python, React, and everything in between.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
