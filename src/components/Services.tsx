"use client";

import {
  Monitor,
  Server,
  Brain,
  Link,
  Database,
  Cloud,
} from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

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
    <section id="services" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          title="Services"
          heading="What I do"
          description="End-to-end product development — from interface to infrastructure, with AI and Web3 in the toolbox."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={Math.min(index * 0.06, 0.3)}>
              <div className="card card-hover group h-full p-6">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/[0.09] bg-white/[0.03] text-[#9ba1ac] transition-colors group-hover:border-[#818cf8]/50 group-hover:text-[#a5b0ff]">
                  <service.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display mb-2.5 text-[17px] font-semibold text-[#f4f5f7]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#9ba1ac]">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
