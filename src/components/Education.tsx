"use client";

import { GraduationCap } from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

const education = [
  {
    period: "2019 — 2023",
    degree: "S1 Teknik Informatika",
    institution:
      "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari Banjarmasin",
    description:
      "Graduated with a strong foundation in software engineering, algorithms, and computer science fundamentals.",
  },
];

export default function Education() {
  return (
    <section className="hairline-t py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="04" title="Education" heading="Academic background" />

        <div className="mx-auto max-w-3xl">
          {education.map((item) => (
            <Reveal key={item.period}>
              <div className="card card-hover p-7 md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-white/[0.09] bg-white/[0.03] text-[#a5b0ff]">
                    <GraduationCap size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="font-code text-[11px] tracking-[0.18em] text-[#818cf8] uppercase">
                      {item.period}
                    </span>
                    <h3 className="font-display mt-2 text-xl font-semibold text-[#f4f5f7]">
                      {item.degree}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-[#626874]">
                      {item.institution}
                    </p>
                    <p className="mt-3.5 text-sm leading-relaxed text-[#9ba1ac]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
