"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "TypeScript", level: 92 },
  { name: "React / Next.js", level: 90 },
  { name: "Python", level: 82 },
  { name: "Node.js", level: 88 },
  { name: "Tailwind CSS", level: 88 },
  { name: "PostgreSQL", level: 78 },
  { name: "Firebase", level: 75 },
  { name: "Web3 / Blockchain", level: 82 },
  { name: "AI / LLM Integration", level: 78 },
  { name: "AWS / Cloud", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">My Skills</h2>
          <p className="text-[#94a3b8]">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#f8fafc] text-sm font-medium">
                  {skill.name}
                </span>
                <span className="text-[#06b6d4] text-sm font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2.5 bg-[#1a1f2e] rounded-full overflow-hidden border border-[#1e293b]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  className="h-full rounded-full cyan-gradient"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
