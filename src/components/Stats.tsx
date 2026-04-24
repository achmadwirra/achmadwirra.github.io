"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FolderGit2, Calendar, Code2, Trophy } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: FolderGit2, value: 8, suffix: "+", label: "Projects Completed" },
  { icon: Calendar, value: 3, suffix: "+", label: "Years Experience" },
  { icon: Code2, value: 10, suffix: "+", label: "Technologies" },
  { icon: Trophy, value: 100, suffix: "%", label: "Client Satisfaction" },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 text-center"
            >
              <stat.icon
                size={24}
                className="mx-auto mb-3 text-[var(--accent)]"
              />
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-xs opacity-50 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
