"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const stats = [
  { value: 7, suffix: "+", label: "Years experience" },
  { value: 12, suffix: "+", label: "Projects completed" },
  { value: 35, suffix: "+", label: "Technologies used" },
  { value: 5000, suffix: "+", label: "Cups of coffee" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Failsafe: always show the final number even if the observer never fires.
    const failsafe = setTimeout(() => {
      if (!hasAnimated.current) {
        hasAnimated.current = true;
        setCount(target);
      }
    }, 3000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1600;
          const steps = 50;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="hairline-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={Math.min(index * 0.06, 0.24)}
              className={`border-white/[0.06] py-10 md:py-12 ${
                index % 2 === 1 ? "border-l" : ""
              } ${index > 1 ? "border-t lg:border-t-0" : ""} ${
                index > 0 ? "lg:border-l" : ""
              }`}
            >
              <div className="px-6 text-center lg:px-8">
                <div className="font-display text-4xl font-semibold tracking-tight text-[#f4f5f7] md:text-[2.75rem]">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="font-code mt-2.5 text-[10px] tracking-[0.2em] text-[#626874] uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
