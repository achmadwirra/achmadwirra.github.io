"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";

const GithubIcon = ({ size = 17 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 17 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: GithubIcon, href: "https://github.com/achmadwirra", label: "GitHub" },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/achmad-wira/",
    label: "LinkedIn",
  },
  { icon: XIcon, href: "https://x.com/achwir_", label: "X (Twitter)" },
];

const meta = [
  { k: "LOCATION", v: "Kalimantan Selatan, ID" },
  { k: "EXPERIENCE", v: "7+ years" },
  { k: "FOCUS", v: "Web · AI · Web3" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const enter = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.65,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98] as const,
          },
        };

  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="glow-top pointer-events-none absolute inset-0" />
      <div className="dot-grid fade-mask-b pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70" />

      <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-20 sm:px-8 md:pt-44 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left — statement */}
          <div>
            <motion.div {...enter(0)}>
              <span className="font-code inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-3.5 py-1.5 text-[11px] tracking-[0.14em] text-[#9ba1ac] uppercase">
                <span className="status-dot" />
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              {...enter(0.08)}
              className="font-display mt-7 text-[2.6rem] leading-[1.06] font-semibold tracking-tight text-[#f4f5f7] sm:text-6xl md:text-[4.2rem]"
            >
              Achmad Wira builds for the modern web —{" "}
              <span className="text-gradient">apps, AI&nbsp;&amp;&nbsp;Web3</span>.
            </motion.h1>

            <motion.p
              {...enter(0.16)}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#9ba1ac] sm:text-lg"
            >
              Full Stack Developer turning complex ideas into elegant, performant
              digital experiences — from scalable web platforms to AI-powered
              tools and on-chain systems.
            </motion.p>

            <motion.div {...enter(0.24)} className="mt-9 flex flex-wrap items-center gap-3.5">
              <a href="#contact" className="btn-primary">
                Let&apos;s talk
                <ArrowRight size={16} />
              </a>
              <a href="/cv.pdf" download className="btn-ghost">
                Download CV
                <Download size={15} />
              </a>
            </motion.div>

            <motion.div {...enter(0.32)} className="mt-9 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="icon-btn"
                >
                  <s.icon />
                </a>
              ))}
              <span className="font-code ml-2 text-[11px] tracking-[0.18em] text-[#626874] uppercase">
                @achmadwirra
              </span>
            </motion.div>
          </div>

          {/* Right — profile card */}
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 30, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: {
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.21, 0.47, 0.32, 0.98] as const,
                  },
                })}
            className="mx-auto w-full max-w-[340px] lg:ml-auto"
          >
            <div className="card overflow-hidden">
              {/* Card header */}
              <div className="font-code flex items-center justify-between border-b border-white/[0.07] px-5 py-3 text-[10px] tracking-[0.2em] text-[#626874] uppercase">
                <span>achmadwirra.github.io</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
                  open to work
                </span>
              </div>

              {/* Photo */}
              <div className="p-5 pb-0">
                <div className="relative overflow-hidden rounded-xl border border-white/[0.08]">
                  <img
                    src="https://avatars.githubusercontent.com/u/33767655?v=4"
                    alt="Achmad Wira"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090b]/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-0 p-5">
                {meta.map((m) => (
                  <div
                    key={m.k}
                    className="flex items-center justify-between border-b border-white/[0.05] py-2.5 last:border-b-0"
                  >
                    <span className="font-code text-[10px] tracking-[0.2em] text-[#626874]">
                      {m.k}
                    </span>
                    <span className="text-[13px] font-medium text-[#f4f5f7]">
                      {m.v}
                    </span>
                  </div>
                ))}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-[#626874]">
                  <MapPin size={11} />
                  <span>UTC+8 — Indonesia</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
