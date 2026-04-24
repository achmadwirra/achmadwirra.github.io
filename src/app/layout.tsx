import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Achmad Wira | Full Stack Developer",
  description:
    "Full Stack Developer from Indonesia specializing in TypeScript, React/Next.js, and modern web technologies.",
  keywords: [
    "Achmad Wira",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Web Developer",
    "Indonesia",
  ],
  authors: [{ name: "Achmad Wira" }],
  openGraph: {
    title: "Achmad Wira | Full Stack Developer",
    description:
      "Full Stack Developer from Indonesia specializing in TypeScript, React/Next.js, and modern web technologies.",
    url: "https://achmadwirra.github.io",
    siteName: "Achmad Wira Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Wira | Full Stack Developer",
    description:
      "Full Stack Developer from Indonesia specializing in TypeScript, React/Next.js, and modern web technologies.",
    creator: "@achwir_",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
