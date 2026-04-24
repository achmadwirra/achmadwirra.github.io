"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Server, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "TypeScript-first, maintainable & scalable" },
  { icon: Palette, title: "UI/UX Design", desc: "Creating beautiful user experiences" },
  { icon: Server, title: "Full Stack", desc: "Frontend to backend, end-to-end" },
  { icon: Zap, title: "Web3 & AI", desc: "Exploring blockchain & AI integrations" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Passionate about building{" "}
            <span className="gradient-text">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg opacity-70 leading-relaxed mb-6">
              I&apos;m <strong>Achmad Wira</strong>, a full stack developer from Indonesia
              with a passion for building web applications using modern technologies.
              I specialize in TypeScript, React/Next.js, and Node.js ecosystems.
            </p>
            <p className="text-lg opacity-70 leading-relaxed mb-6">
              I love turning complex problems into simple, beautiful, and intuitive
              solutions. From e-commerce platforms to AI chatbots, I enjoy exploring
              new technologies and pushing the boundaries of what&apos;s possible on the web.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass p-5 text-center hover:glow transition-all duration-300 cursor-default"
              >
                <item.icon
                  size={28}
                  className="mx-auto mb-3 text-[var(--accent)]"
                />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-xs opacity-60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
