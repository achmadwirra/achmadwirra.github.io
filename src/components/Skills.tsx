"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Beginner";

interface Skill {
  name: string;
  level: number;
  label: SkillLevel;
}

const levelColors: Record<SkillLevel, string> = {
  Expert: "from-purple-500 to-cyan-500",
  Advanced: "from-blue-500 to-cyan-500",
  Intermediate: "from-cyan-500 to-teal-500",
  Beginner: "from-teal-500 to-green-500",
};

const levelBadgeColors: Record<SkillLevel, string> = {
  Expert: "bg-purple-500/20 text-purple-400",
  Advanced: "bg-blue-500/20 text-blue-400",
  Intermediate: "bg-cyan-500/20 text-cyan-400",
  Beginner: "bg-teal-500/20 text-teal-400",
};

const skillCategories: { title: string; emoji: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React", level: 90, label: "Expert" },
      { name: "Next.js", level: 90, label: "Expert" },
      { name: "TypeScript", level: 92, label: "Expert" },
      { name: "JavaScript", level: 90, label: "Expert" },
      { name: "Tailwind CSS", level: 88, label: "Advanced" },
      { name: "Framer Motion", level: 80, label: "Advanced" },
      { name: "HTML5", level: 95, label: "Expert" },
      { name: "CSS3", level: 92, label: "Expert" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", level: 85, label: "Advanced" },
      { name: "Express", level: 82, label: "Advanced" },
      { name: "REST API", level: 88, label: "Advanced" },
      { name: "Prisma", level: 80, label: "Advanced" },
      { name: "PostgreSQL", level: 78, label: "Advanced" },
      { name: "MongoDB", level: 78, label: "Advanced" },
      { name: "SQLite", level: 75, label: "Intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 90, label: "Expert" },
      { name: "GitHub", level: 88, label: "Advanced" },
      { name: "Vercel", level: 85, label: "Advanced" },
      { name: "Docker", level: 70, label: "Intermediate" },
      { name: "CI/CD", level: 68, label: "Intermediate" },
      { name: "Linux", level: 72, label: "Intermediate" },
    ],
  },
  {
    title: "Web3 & Blockchain",
    emoji: "⛓️",
    skills: [
      { name: "Cosmos SDK / Validator Nodes", level: 82, label: "Advanced" },
      { name: "EVM Chains (Ethereum, Base, BSC)", level: 80, label: "Advanced" },
      { name: "DeFi Protocols", level: 78, label: "Advanced" },
      { name: "Trading & Automation Bots", level: 85, label: "Advanced" },
      { name: "Smart Contracts (Solidity)", level: 65, label: "Intermediate" },
      { name: "Node Infrastructure", level: 80, label: "Advanced" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold mb-6 text-[var(--accent)] flex items-center gap-2">
                <span>{category.emoji}</span> {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          levelBadgeColors[skill.label]
                        }`}
                      >
                        {skill.label}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: ci * 0.15 + si * 0.08,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          levelColors[skill.label]
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
