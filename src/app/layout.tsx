import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achmad Wira | Full Stack Developer — React, Next.js, TypeScript",
  description:
    "Achmad Wira is a Full Stack Developer from Indonesia specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Achmad Wira",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer",
    "Indonesia",
    "Freelance Developer",
    "Frontend Developer",
    "Backend Developer",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "SaaS",
    "Portfolio",
  ],
  authors: [{ name: "Achmad Wira" }],
  creator: "Achmad Wira",
  openGraph: {
    title: "Achmad Wira | Full Stack Developer — React, Next.js, TypeScript",
    description:
      "Full Stack Developer from Indonesia building modern web applications with React, Next.js, TypeScript, and Node.js. 3+ years experience. Available for hire.",
    url: "https://achmadwirra.github.io",
    siteName: "Achmad Wira Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Wira | Full Stack Developer",
    description:
      "Full Stack Developer from Indonesia building modern web apps with React, Next.js & TypeScript. Available for hire.",
    creator: "@achwir_",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Achmad Wira",
  url: "https://achmadwirra.github.io",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer from Indonesia specializing in React, Next.js, TypeScript, and Node.js.",
  sameAs: [
    "https://github.com/achmadwirra",
    "https://www.linkedin.com/in/achmad-wira/",
    "https://x.com/achwir_",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Prisma",
    "REST API",
    "Docker",
  ],
  nationality: {
    "@type": "Country",
    name: "Indonesia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
