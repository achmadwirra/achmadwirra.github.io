"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

type Category = "all" | "web" | "ai" | "web3" | "fullstack";

interface Project {
  title: string;
  description: string;
  category: Category[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Wir Forms",
    description:
      "A modern form builder with drag-and-drop interface, conditional logic, and real-time collaboration.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    liveUrl: "https://wir-forms.vercel.app",
    githubUrl: "https://github.com/achmadwira",
  },
  {
    title: "Wir Store",
    description:
      "Full-featured e-commerce platform with cart, checkout, payment integration, and admin dashboard.",
    category: ["web", "fullstack"],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://wir-store.vercel.app",
    githubUrl: "https://github.com/achmadwira",
  },
  {
    title: "Wir AI",
    description:
      "AI-powered multi-tool platform with chat, image generation, code assistance, and document analysis.",
    category: ["ai", "fullstack"],
    tags: ["Next.js", "OpenRouter", "Python", "LLM"],
    liveUrl: "https://wir-ai.vercel.app",
    githubUrl: "https://github.com/achmadwira",
  },
  {
    title: "Wir Chat",
    description:
      "Real-time messaging application with rooms, file sharing, and end-to-end encryption.",
    category: ["web", "fullstack"],
    tags: ["React", "Firebase", "WebSocket", "TypeScript"],
    liveUrl: "https://wir-chat.vercel.app",
    githubUrl: "https://github.com/achmadwira",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Analytics dashboard with real-time data visualization, user management, and subscription billing.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "Tailwind", "Chart.js", "Prisma"],
    liveUrl: "https://saas-dashboard-cyan.vercel.app",
    githubUrl: "https://github.com/achmadwira",
  },
  {
    title: "Blog Platform",
    description:
      "Modern blogging platform with markdown editor, SEO optimization, and social sharing.",
    category: ["web", "fullstack"],
    tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
    liveUrl: "https://blog-platform-mu-neon.vercel.app",
    githubUrl: "https://github.com/achmadwira",
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "AI", value: "ai" },
  { label: "Web3", value: "web3" },
  { label: "Full Stack", value: "fullstack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">
            My Latest Projects
          </h2>
          <p className="text-[#94a3b8]">Some of my recent work</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-[#06b6d4] text-[#0a0f1a]"
                  : "bg-[#1a1f2e] text-[#94a3b8] border border-[#1e293b] hover:border-[#06b6d4] hover:text-[#06b6d4]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="dark-card overflow-hidden group"
              >
                {/* Preview */}
                <div className="h-48 bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent" />
                  <span className="text-[#06b6d4]/30 text-2xl font-bold">
                    {project.title}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#f8fafc] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#06b6d4] hover:text-[#22d3ee] transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
                    >
                      <GithubIcon /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/achmadwira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#1e293b] hover:border-[#06b6d4] text-[#94a3b8] hover:text-[#06b6d4] px-6 py-3 rounded-full text-sm font-medium transition-colors"
          >
            See More Projects <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
