"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2018 - Present",
    description:
      "Building modern web applications for clients using Next.js, TypeScript, and cloud technologies. Projects include SaaS analytics dashboards, blog platforms, e-commerce sites, and business websites. Experienced in full project lifecycle from requirements to deployment on Vercel and cloud platforms.",
    gradient: "from-purple-500 to-cyan-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Career Path
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 -translate-x-1.5 mt-8 z-10 shadow-lg shadow-purple-500/50" />

              {/* Spacer for mobile */}
              <div className="w-12 shrink-0 md:hidden" />

              {/* Card */}
              <div
                className={`flex-1 ${
                  i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                } md:w-1/2`}
              >
                <div className="glass p-6 hover:glow transition-all duration-300">
                  <div
                    className={`h-1 w-16 rounded-full bg-gradient-to-r ${exp.gradient} mb-4`}
                  />
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-[var(--accent)]" />
                    <span className="text-xs uppercase tracking-wider opacity-50">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm text-[var(--accent)] mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Spacer for desktop alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
