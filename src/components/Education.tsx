"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass p-8 hover:glow transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/20">
                <GraduationCap size={28} className="text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Bachelor of Information Technology
                </h3>
                <p className="text-sm text-[var(--accent)] mb-1">University</p>
                <p className="text-xs uppercase tracking-wider opacity-50 mb-3">
                  2020 — 2024
                </p>
                <p className="text-sm opacity-60 leading-relaxed">
                  Focused on software engineering, web development, and database
                  systems.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
