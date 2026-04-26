"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "2018 - Present",
    title: "Freelance Full Stack Developer",
    description:
      "Building custom web applications, SaaS platforms, and e-commerce solutions for clients worldwide. Specializing in React/Next.js, Node.js, and cloud deployments.",
  },
  {
    period: "2019 - Present",
    title: "Web3 & Blockchain Developer",
    description:
      "Operating validators, developing trading bots, building DeFi tools, and contributing to blockchain ecosystems. Deep expertise in on-chain interactions and crypto infrastructure.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">
            My Experience
          </h2>
          <p className="text-[#94a3b8]">Professional journey</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1e293b]" />

            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 pb-8"
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-[#06b6d4] border-4 border-[#0d1117]" />

                <div className="dark-card p-6 border-l-2 border-l-[#06b6d4]">
                  <span className="text-[#06b6d4] text-sm font-semibold">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-semibold text-[#f8fafc] mt-1 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="text-[#94a3b8]" size={14} />
                    <span className="text-[#94a3b8] text-sm">
                      Self-employed
                    </span>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
