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
          {/* Left - Photo/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] border border-[#1e293b] flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl font-bold text-[#06b6d4]/20">
                  AW
                </span>
                <p className="text-[#94a3b8] text-sm mt-2">Achmad Wira</p>
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
