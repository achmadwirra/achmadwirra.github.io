"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Brain,
  Link,
  Database,
  Cloud,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Building responsive, performant user interfaces with React, Next.js, and Tailwind CSS. Pixel-perfect designs with smooth animations.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Scalable server-side solutions with Node.js, Python, and RESTful/GraphQL APIs. Clean architecture and robust error handling.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Integrating LLMs, OpenRouter, and prompt engineering into applications. Building intelligent tools and AI-powered workflows.",
  },
  {
    icon: Link,
    title: "Web3 & Blockchain",
    description:
      "Validator operations, trading bots, DeFi protocols, and smart contract interactions. Deep experience in the crypto ecosystem.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Efficient database architecture with PostgreSQL, Firebase, and Prisma. Optimized queries and data modeling for scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deployment and infrastructure on AWS, Vercel, and Docker. Linux server management and CI/CD pipelines.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">
            My Services
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dark-card p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center mb-4 group-hover:bg-[#06b6d4]/20 transition-colors">
                <service.icon className="text-[#06b6d4]" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-[#f8fafc] mb-3">
                {service.title}
              </h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[#06b6d4] text-sm font-medium hover:gap-2 transition-all"
              >
                Read More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
