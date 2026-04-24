"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: string;
  github: string;
  live: string;
  gradient: string;
}

const featuredProjects: Project[] = [
  {
    title: "Wir Chat",
    desc: "Real-time chat application with Google auth, chat rooms, typing indicators, image sharing, message pinning, and online status — powered by Firebase.",
    tags: ["TypeScript", "Next.js", "Firebase", "Tailwind"],
    category: "TypeScript",
    github: "https://github.com/achmadwirra/wir-chat",
    live: "https://wir-chat.vercel.app",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "SaaS Dashboard Analytics",
    desc: "Full-stack analytics dashboard with revenue charts, user management, traffic analytics, reports, role-based auth, and real-time data visualization.",
    tags: ["TypeScript", "Next.js", "Prisma", "Recharts"],
    category: "TypeScript",
    github: "https://github.com/achmadwirra/saas-dashboard",
    live: "https://saas-dashboard-cyan.vercel.app",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Blog Platform",
    desc: "Full-stack blog platform with CRUD posts, Markdown editor with live preview, comments, categories, tags, search, auth, reading progress, TOC, and dark mode.",
    tags: ["TypeScript", "Next.js", "Prisma", "NextAuth"],
    category: "TypeScript",
    github: "https://github.com/achmadwirra/blog-platform",
    live: "https://blog-platform-mu-neon.vercel.app",
    gradient: "from-blue-500 to-cyan-500",
  },
];

interface OtherProject {
  title: string;
  github: string;
  tags: string[];
}

const otherProjects: OtherProject[] = [
  {
    title: "Fullstack E-Commerce",
    github: "https://github.com/achmadwirra/fullstack-ecommerce",
    tags: ["TypeScript", "Next.js", "Stripe", "Prisma"],
  },
  {
    title: "AI Chatbot Assistant",
    github: "https://github.com/achmadwirra/ai-chatbot-assistant",
    tags: ["TypeScript", "AI", "Next.js", "OpenAI"],
  },
  {
    title: "TaskFlow",
    github: "https://github.com/achmadwirra/taskflow",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Auth Secure",
    github: "https://github.com/achmadwirra/auth-secure",
    tags: ["TypeScript", "Node.js", "JWT", "OAuth"],
  },
  {
    title: "Mini Trello",
    github: "https://github.com/achmadwirra/mini-trello",
    tags: ["JavaScript", "C#", ".NET", "React"],
  },
  {
    title: "Sustainability Tracker UMKM",
    github: "https://github.com/achmadwirra/sustainability-tracker-umkm",
    tags: ["TypeScript", "Next.js", "Dashboard"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visibleOther = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="glass group hover:glow transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-60 mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 text-xs opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center gap-1 text-xs opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Other <span className="gradient-text">Projects</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence>
              {visibleOther.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass p-4 flex items-center justify-between gap-3 group hover:glow transition-all duration-300"
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold group-hover:text-[var(--accent)] transition-colors truncate">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <GithubIcon size={16} />
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {otherProjects.length > 3 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm px-4 py-2 rounded-full glass opacity-60 hover:opacity-100 hover:glow transition-all duration-300 cursor-pointer"
              >
                {showAll ? "Show Less" : `Show All (${otherProjects.length})`}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
