"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "React / Next.js", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "C# / .NET", level: 78 },
      { name: "Python", level: 75 },
      { name: "REST API", level: 88 },
      { name: "PostgreSQL / MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Solidity / Web3", level: 65 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 72 },
      { name: "CI/CD", level: 68 },
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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold mb-6 text-[var(--accent)]">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span className="opacity-50">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1,
                          delay: ci * 0.15 + si * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
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
