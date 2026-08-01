"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal, { SectionHeader } from "./Reveal";

const skills = [
  { name: "TypeScript", level: 92 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Python", level: 82 },
  { name: "Web3 / Blockchain", level: 82 },
  { name: "PostgreSQL", level: 78 },
  { name: "AI / LLM Integration", level: 78 },
  { name: "Firebase", level: 75 },
  { name: "AWS / Cloud", level: 75 },
];

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="mb-2.5 flex items-baseline justify-between">
        <span className="text-sm font-medium text-[#f4f5f7]">{name}</span>
        <span className="font-code text-xs text-[#818cf8]">{level}%</span>
      </div>
      <div className="h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
        {reduceMotion ? (
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#818cf8] to-[#5eead4]"
            style={{ width: `${level}%` }}
          />
        ) : (
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 1, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-full rounded-full bg-gradient-to-r from-[#818cf8] to-[#5eead4]"
          />
        )}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="hairline-t py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          title="Skills"
          heading="Technologies I work with"
          description="A decade of shipping across the stack — the tools I reach for daily, measured honestly."
        />

        <div className="mx-auto grid max-w-4xl gap-x-14 gap-y-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={Math.min(index * 0.04, 0.2)} y={14}>
              <SkillBar
                name={skill.name}
                level={skill.level}
                delay={0.15 + Math.min(index * 0.04, 0.2)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
