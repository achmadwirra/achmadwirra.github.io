"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "7+ years building modern web applications",
  "6+ years in the Web3/blockchain ecosystem",
  "Expert in TypeScript, React/Next.js, Python",
  "Cloud infrastructure & DevOps experience",
  "AI/LLM integration specialist",
  "Open source contributor",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">
            More About Me
          </h2>
          <p className="text-[#94a3b8]">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-[#06b6d4]/15 blur-2xl scale-110" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl border-2 border-[#06b6d4]/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <img
                  src="https://avatars.githubusercontent.com/u/33767655?v=4"
                  alt="Achmad Wira"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              Full Stack Developer with 7+ years of experience building modern
              web applications and 6+ years in the Web3/blockchain ecosystem. I
              specialize in TypeScript, React/Next.js, Python, and cloud
              technologies.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              I&apos;m passionate about creating elegant solutions to complex
              problems. From building scalable SaaS platforms to developing
              AI-powered tools and Web3 applications, I bring a comprehensive
              skill set and a commitment to quality in every project.
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-[#06b6d4] shrink-0" size={18} />
                  <span className="text-[#f8fafc] text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
