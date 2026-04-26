import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Achmad Wira | Full Stack Developer",
  description:
    "Full Stack Developer specializing in TypeScript, React/Next.js, Python, Web3, and AI integration. 7+ years of experience building modern web applications.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web3",
    "Blockchain",
    "AI",
    "Achmad Wira",
  ],
  openGraph: {
    title: "Achmad Wira | Full Stack Developer",
    description:
      "Full Stack Developer specializing in TypeScript, React/Next.js, Python, Web3, and AI integration.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Wira | Full Stack Developer",
    description:
      "Full Stack Developer specializing in TypeScript, React/Next.js, Python, Web3, and AI integration.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
