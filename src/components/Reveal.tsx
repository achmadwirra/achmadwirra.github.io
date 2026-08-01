"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Scroll-reveal wrapper that can never leave content invisible:
 * - Animates in when scrolled into view (once).
 * - A failsafe timer forces visibility after 2.5s no matter what,
 *   so content is always readable (screenshots, odd browsers, no scroll).
 * - Respects prefers-reduced-motion (renders a plain div).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setForceVisible(true), 2500);
    return () => clearTimeout(t);
  }, []);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={forceVisible ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Left-aligned section header used across all sections. */
export function SectionHeader({
  index,
  title,
  heading,
  description,
}: {
  index: string;
  title: string;
  heading: string;
  description?: string;
}) {
  return (
    <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <span className="eyebrow">
          <span className="idx">{index}</span>
          {title}
        </span>
        <h2 className="font-display mt-4 text-3xl font-semibold text-[#f4f5f7] sm:text-4xl">
          {heading}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1} className="md:max-w-sm">
          <p className="text-sm leading-relaxed text-[#9ba1ac]">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
