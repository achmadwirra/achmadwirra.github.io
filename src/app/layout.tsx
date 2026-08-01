import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://achmadwirra.github.io"),
  title: "Achmad Wira — Full Stack Developer",
  icons: {
    icon: "/favicon.svg",
  },
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
    title: "Achmad Wira — Full Stack Developer",
    description:
      "Full Stack Developer specializing in TypeScript, React/Next.js, Python, Web3, and AI integration.",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Wira — Full Stack Developer",
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
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
