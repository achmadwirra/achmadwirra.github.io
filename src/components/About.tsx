"use client";

import { Check } from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

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
    <section id="about" className="hairline-t py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="02" title="About" heading="Behind the code" />

        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          {/* Photo */}
          <Reveal>
            <div className="relative mx-auto max-w-[300px] lg:mx-0">
              <div className="absolute -inset-4 rounded-2xl bg-[#818cf8]/[0.06] blur-2xl" />
              <div className="card relative overflow-hidden p-2.5">
                <img
                  src="https://avatars.githubusercontent.com/u/33767655?v=4"
                  alt="Achmad Wira"
                  className="aspect-square w-full rounded-[10px] object-cover"
                />
              </div>
              <div className="font-code mt-3 text-center text-[10px] tracking-[0.22em] text-[#626874] uppercase lg:text-left">
                Achmad Wira — est. 2018 in tech
              </div>
            </div>
          </Reveal>

          {/* Story + highlights */}
          <div>
            <Reveal delay={0.08}>
              <p className="text-[17px] leading-relaxed text-[#c6cad2]">
                Full Stack Developer with{" "}
                <span className="font-medium text-[#f4f5f7]">7+ years</span> of
                experience building modern web applications and{" "}
                <span className="font-medium text-[#f4f5f7]">6+ years</span> in
                the Web3/blockchain ecosystem. I specialize in TypeScript,
                React/Next.js, Python, and cloud technologies.
              </p>
              <p className="mt-5 leading-relaxed text-[#9ba1ac]">
                I&apos;m passionate about creating elegant solutions to complex
                problems. From building scalable SaaS platforms to developing
                AI-powered tools and Web3 applications, I bring a comprehensive
                skill set and a commitment to quality in every project.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <Reveal key={item} delay={0.12 + Math.min(index * 0.05, 0.25)}>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#818cf8]/30 bg-[#818cf8]/10">
                      <Check size={11} className="text-[#a5b0ff]" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-[#c6cad2]">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
