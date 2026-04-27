"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Clock, FolderOpen, Coffee, Cpu } from "lucide-react";

const stats = [
  { icon: Clock, value: 7, suffix: "+", label: "Years Experience" },
  { icon: FolderOpen, value: 12, suffix: "+", label: "Projects Complete" },
  { icon: Coffee, value: 5000, suffix: "+", label: "Cups of Coffee" },
  { icon: Cpu, value: 35, suffix: "+", label: "Technologies" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
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
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dark-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#06b6d4]/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-[#06b6d4]" size={22} />
              </div>
              <div className="text-3xl font-bold text-[#f8fafc] mb-1">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#94a3b8] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
