"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  BarChart3,
  Shield,
  Database,
  Rocket,
  Smartphone,
  Sparkles,
  Link,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "End-to-end development of modern web apps with React/Next.js, from MVP to production",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    desc: "Integrate AI/LLM capabilities into your apps — chatbots, content generation, image analysis",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Link,
    title: "Web3 & Blockchain",
    desc: "Smart contracts, DeFi tools, validator nodes, trading bots, and on-chain automation",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    desc: "Data visualization, admin panels, and business intelligence tools with real-time charts",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "Authentication & Security",
    desc: "Secure auth systems with OAuth, JWT, Firebase Auth, and role-based access control",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Database & API Design",
    desc: "Schema design, REST APIs, real-time databases with PostgreSQL, Firebase, and Prisma",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Rocket,
    title: "Deployment & DevOps",
    desc: "CI/CD pipelines, Vercel/AWS deployment, Docker, and performance optimization",
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Mobile-first, cross-browser compatible interfaces with smooth animations",
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What I Can <span className="gradient-text">Do For You</span>
          </h2>
          <p className="mt-4 opacity-60 max-w-xl mx-auto">
            From concept to deployment, I deliver complete solutions tailored to
            your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 group hover:glow transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
