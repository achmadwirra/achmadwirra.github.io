"use client";

import { Briefcase } from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

const experiences = [
  {
    period: "2018 — Present",
    title: "Freelance Full Stack Developer",
    org: "Self-employed",
    description:
      "Building custom web applications, SaaS platforms, and e-commerce solutions for clients worldwide. Specializing in React/Next.js, Node.js, and cloud deployments.",
    tags: ["React / Next.js", "Node.js", "Cloud"],
  },
  {
    period: "2019 — Present",
    title: "Web3 & Blockchain Developer",
    org: "Self-employed",
    description:
      "Operating validators, developing trading bots, building DeFi tools, and contributing to blockchain ecosystems. Deep expertise in on-chain interactions and crypto infrastructure.",
    tags: ["Validators", "Trading bots", "DeFi"],
  },
];

export default function Experience() {
  return (
    <section className="hairline-t py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          title="Experience"
          heading="Professional journey"
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative border-l border-white/[0.08] pl-10 md:pl-14">
            {experiences.map((item, index) => (
              <Reveal key={item.title} delay={Math.min(index * 0.1, 0.2)}>
                <div className="relative pb-12 last:pb-0">
                  {/* Node */}
                  <span className="absolute top-1.5 -left-10 flex h-[15px] w-[15px] -translate-x-1/2 items-center justify-center md:-left-14">
                    <span className="absolute h-full w-full rounded-full bg-[#818cf8]/20" />
                    <span className="h-[7px] w-[7px] rounded-full bg-[#818cf8]" />
                  </span>

                  <span className="font-code text-[11px] tracking-[0.18em] text-[#818cf8] uppercase">
                    {item.period}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-semibold text-[#f4f5f7]">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-[13px] text-[#626874]">
                    <Briefcase size={13} />
                    {item.org}
                  </div>
                  <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-[#9ba1ac]">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
