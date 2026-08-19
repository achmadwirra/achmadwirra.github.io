"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

type Category = "all" | "web" | "ai" | "web3" | "fullstack";
type PreviewKind = "forms" | "ai" | "chat" | "dashboard" | "blog" | "qris" | "license";

interface Project {
  title: string;
  domain: string;
  description: string;
  category: Category[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  preview: PreviewKind;
}

const projects: Project[] = [
  {
    title: "FekzCloud AI Store",
    domain: "ai.fekzcloud.com",
    description:
      "AI API token storefront with QRIS checkout, automatic license-key delivery, and admin model management — live production store.",
    category: ["ai", "fullstack"],
    tags: ["Next.js", "Prisma", "QRIS", "Auth"],
    liveUrl: "https://ai.fekzcloud.com",
    githubUrl: "https://github.com/achmadwirra",
    preview: "qris",
  },
  {
    title: "WIR Store",
    domain: "store.fekzcloud.com",
    description:
      "Digital product storefront with multi-provider payment verification (QRIS, Midtrans, Saweria), AES-256 protected downloads, and Ed25519-signed license guard.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "Prisma", "QRIS", "Midtrans"],
    liveUrl: "https://store.fekzcloud.com",
    githubUrl: "https://github.com/achmadwirra",
    preview: "license",
  },
  {
    title: "Wir Forms",
    domain: "wir-forms.vercel.app",
    description:
      "A modern form builder with drag-and-drop interface, conditional logic, and real-time collaboration.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    liveUrl: "https://wir-forms.vercel.app",
    githubUrl: "https://github.com/achmadwirra",
    preview: "forms",
  },
  {
    title: "Wir AI",
    domain: "wir-ai.vercel.app",
    description:
      "AI-powered multi-tool platform with chat, image generation, code assistance, and document analysis.",
    category: ["ai", "fullstack"],
    tags: ["Next.js", "OpenRouter", "Python", "LLM"],
    liveUrl: "https://wir-ai.vercel.app",
    githubUrl: "https://github.com/achmadwirra",
    preview: "ai",
  },
  {
    title: "Wir Chat",
    domain: "wir-chat.vercel.app",
    description:
      "Real-time messaging application with rooms, file sharing, and end-to-end encryption.",
    category: ["web", "fullstack"],
    tags: ["React", "Firebase", "WebSocket", "TypeScript"],
    liveUrl: "https://wir-chat.vercel.app",
    githubUrl: "https://github.com/achmadwirra",
    preview: "chat",
  },
  {
    title: "SaaS Dashboard",
    domain: "saas-dashboard-cyan.vercel.app",
    description:
      "Analytics dashboard with real-time data visualization, user management, and subscription billing.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "Tailwind", "Chart.js", "Prisma"],
    liveUrl: "https://saas-dashboard-cyan.vercel.app",
    githubUrl: "https://github.com/achmadwirra",
    preview: "dashboard",
  },
  {
    title: "Blog Platform",
    domain: "blog-platform-mu-neon.vercel.app",
    description:
      "Modern blogging platform with markdown editor, SEO optimization, and social sharing.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
    liveUrl: "https://blog-platform-mu-neon.vercel.app",
    githubUrl: "https://github.com/achmadwirra",
    preview: "blog",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "AI", value: "ai" },
  { label: "Web3", value: "web3" },
  { label: "Full Stack", value: "fullstack" },
];

/* Abstract mini-UI compositions drawn in pure CSS. */
function PreviewArt({ kind }: { kind: PreviewKind }) {
  const line = "rounded-full bg-white/[0.09]";
  const block = "rounded-md bg-white/[0.05] border border-white/[0.06]";

  switch (kind) {
    case "qris":
      return (
        <div className="flex h-full items-center justify-center gap-6 px-8">
          {/* QR code */}
          <div className="grid shrink-0 grid-cols-3 gap-[3px] rounded-lg border border-white/[0.08] bg-white/[0.04] p-2.5">
            {[
              1, 0, 1, 0, 1, 1, 1, 0, 1,
              0, 1, 0, 0, 0, 0, 0, 1, 0,
              1, 0, 1, 1, 0, 1, 1, 0, 1,
              0, 0, 1, 0, 1, 0, 1, 0, 0,
              1, 1, 0, 1, 1, 1, 0, 1, 1,
              0, 1, 1, 0, 0, 1, 0, 0, 1,
              1, 0, 1, 1, 1, 0, 1, 1, 0,
              0, 0, 0, 1, 0, 1, 0, 0, 1,
              1, 1, 1, 0, 1, 1, 0, 1, 1,
            ].map((v, i) => (
              <span
                key={i}
                className={`h-[7px] w-[7px] rounded-[1px] ${
                  v ? "bg-[#5eead4]/80" : "bg-white/[0.06]"
                }`}
              />
            ))}
          </div>
          {/* Checkout summary */}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div className={`${line} h-1.5 w-14`} />
            <div className="h-8 rounded-md bg-[#818cf8]/25" />
            <div className="flex items-center justify-between">
              <div className={`${line} h-1.5 w-12`} />
              <div className="h-5 w-14 rounded-md bg-[#5eead4]/60" />
            </div>
            <div className={`${block} px-2.5 py-1.5`}>
              <div className={`${line} h-1 w-3/4`} />
              <div className={`${line} mt-1 h-1 w-1/2 opacity-60`} />
            </div>
          </div>
        </div>
      );
    case "license":
      return (
        <div className="flex h-full flex-col justify-center gap-2.5 px-8">
          <div className={`${line} h-1.5 w-16`} />
          <div className={`${block} flex items-center justify-between gap-3 p-3`}>
            <div className="min-w-0">
              <div className={`${line} h-1.5 w-24`} />
              <div className={`${line} mt-1.5 h-1 w-16 opacity-60`} />
            </div>
            <div className="h-6 w-16 shrink-0 rounded-md bg-[#5eead4]/50" />
          </div>
          <div className={`${block} flex items-center gap-3 p-3`}>
            <span className="h-6 w-6 shrink-0 rounded-full bg-[#818cf8]/40" />
            <div className="min-w-0 flex-1">
              <div className={`${line} h-1.5 w-3/4`} />
              <div className={`${line} mt-1.5 h-1 w-1/2 opacity-60`} />
            </div>
            <span className={`${line} h-1.5 w-8`} />
          </div>
          <div className="mt-1 flex items-center justify-between rounded-md border border-[#5eead4]/20 bg-[#5eead4]/[0.06] px-3 py-2">
            <div className={`${line} h-1.5 w-20`} />
            <span className="h-4 w-4 rounded-full bg-[#5eead4]/70" />
          </div>
        </div>
      );
    case "forms":
      return (
        <div className="flex h-full flex-col justify-center gap-2.5 px-8">
          <div className={`${line} h-1.5 w-16`} />
          <div className={`${block} h-7 w-full`} />
          <div className={`${line} mt-1.5 h-1.5 w-24`} />
          <div className={`${block} h-7 w-full`} />
          <div className="mt-2 h-7 w-24 rounded-md bg-[#818cf8]/70" />
        </div>
      );
    case "ai":
      return (
        <div className="flex h-full flex-col justify-center gap-2.5 px-8">
          <div className="max-w-[70%] self-start rounded-lg rounded-bl-sm border border-white/[0.06] bg-white/[0.05] p-2.5">
            <div className={`${line} mb-1.5 h-1 w-28`} />
            <div className={`${line} h-1 w-20`} />
          </div>
          <div className="max-w-[70%] self-end rounded-lg rounded-br-sm bg-[#818cf8]/25 p-2.5">
            <div className="mb-1.5 h-1 w-24 rounded-full bg-[#a5b0ff]/50" />
            <div className="h-1 w-16 rounded-full bg-[#a5b0ff]/50" />
          </div>
          <div className="flex max-w-[70%] items-center gap-1.5 self-start rounded-lg rounded-bl-sm border border-white/[0.06] bg-white/[0.05] px-3 py-2.5">
            <span className="h-1 w-1 animate-pulse rounded-full bg-[#5eead4]" />
            <span className="h-1 w-1 animate-pulse rounded-full bg-[#5eead4] [animation-delay:150ms]" />
            <span className="h-1 w-1 animate-pulse rounded-full bg-[#5eead4] [animation-delay:300ms]" />
          </div>
        </div>
      );
    case "chat":
      return (
        <div className="flex h-full flex-col justify-center gap-3 px-8">
          {[
            ["bg-[#818cf8]/60", "w-32", "w-20"],
            ["bg-[#5eead4]/50", "w-24", "w-28"],
            ["bg-white/[0.15]", "w-28", "w-16"],
          ].map(([dot, w1, w2], i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={`h-6 w-6 shrink-0 rounded-full ${dot}`} />
              <div className="flex-1">
                <div className={`${line} mb-1.5 h-1 ${w1}`} />
                <div className={`${line} h-1 ${w2} opacity-60`} />
              </div>
              <span className={`${line} h-1 w-6`} />
            </div>
          ))}
        </div>
      );
    case "dashboard":
      return (
        <div className="flex h-full flex-col justify-center gap-3 px-8">
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`${block} p-2`}>
                <div className={`${line} mb-1.5 h-1 w-8`} />
                <div className="h-1.5 w-12 rounded-full bg-white/[0.16]" />
              </div>
            ))}
          </div>
          <div className={`${block} flex h-20 items-end justify-around gap-1.5 p-2.5`}>
            {[35, 55, 40, 70, 50, 85, 60, 95].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`w-2.5 rounded-sm ${
                  i === 7 ? "bg-[#5eead4]/70" : "bg-[#818cf8]/45"
                }`}
              />
            ))}
          </div>
        </div>
      );
    case "blog":
      return (
        <div className="flex h-full flex-col justify-center gap-2.5 px-8">
          <div className="h-1 w-14 rounded-full bg-[#5eead4]/60" />
          <div className="h-2.5 w-4/5 rounded-full bg-white/[0.16]" />
          <div className="h-2.5 w-3/5 rounded-full bg-white/[0.16]" />
          <div className="mt-2 space-y-1.5">
            <div className={`${line} h-1 w-full`} />
            <div className={`${line} h-1 w-11/12`} />
            <div className={`${line} h-1 w-4/5`} />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-5 w-5 rounded-full bg-[#818cf8]/50" />
            <div className={`${line} h-1 w-16`} />
          </div>
        </div>
      );
  }
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="hairline-t py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="06"
          title="Work"
          heading="Selected projects"
          description="A snapshot of recent builds — SaaS platforms, AI tools, and everything in between."
        />

        {/* Filters */}
        <Reveal>
          <div className="mb-10 inline-flex flex-wrap gap-1 rounded-full border border-white/[0.08] bg-white/[0.02] p-1">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-all ${
                  activeFilter === filter.value
                    ? "bg-[#f4f5f7] text-[#0a0b0d]"
                    : "text-[#9ba1ac] hover:text-[#f4f5f7]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length === 0 ? (
              <div className="card col-span-full p-10 text-center text-sm text-[#626874]">
                More projects in this category coming soon.
              </div>
            ) : (
              filtered.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="card card-hover group flex flex-col overflow-hidden"
                >
                  {/* Preview window */}
                  <div className="border-b border-white/[0.06] bg-[#0b0c0f] transition-colors group-hover:bg-[#0c0e12]">
                    <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-2.5">
                      <span className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/[0.12]" />
                        <span className="h-2 w-2 rounded-full bg-white/[0.12]" />
                        <span className="h-2 w-2 rounded-full bg-white/[0.12]" />
                      </span>
                      <span className="font-code mx-auto truncate rounded border border-white/[0.05] bg-white/[0.02] px-3 py-0.5 text-[9px] tracking-wider text-[#626874]">
                        {project.domain}
                      </span>
                    </div>
                    <div className="dot-grid h-44 opacity-95">
                      <PreviewArt kind={project.preview} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-[17px] font-semibold text-[#f4f5f7]">
                        {project.title}
                      </h3>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.title}`}
                        className="mt-0.5 text-[#626874] transition-colors hover:text-[#a5b0ff]"
                      >
                        <ArrowUpRight size={17} />
                      </a>
                    </div>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[#9ba1ac]">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-4 border-t border-white/[0.05] pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#a5b0ff] transition-colors hover:text-[#c7d2fe]"
                      >
                        <ExternalLink size={13} /> Live demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#9ba1ac] transition-colors hover:text-[#f4f5f7]"
                      >
                        <GithubIcon /> Source
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* See more */}
        <Reveal className="mt-12 text-center">
          <a
            href="https://github.com/achmadwirra"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            See more on GitHub
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
