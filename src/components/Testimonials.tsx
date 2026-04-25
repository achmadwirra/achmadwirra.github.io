"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Startup Founder",
    text: "Wira built our entire SaaS dashboard from scratch. Clean code, fast delivery, and the UI exceeded our expectations. Highly recommended!",
    avatar: "RP",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    text: "Working with Wira was a great experience. He understood our requirements quickly and delivered a production-ready blog platform in record time.",
    avatar: "SC",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Ahmad Fauzi",
    role: "Crypto Project Lead",
    text: "Wira's Web3 expertise is impressive. He set up our validator nodes and built custom trading bots that have been running flawlessly for months.",
    avatar: "AF",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass p-6 relative"
            >
              <Quote
                size={32}
                className="text-[var(--accent)] opacity-20 absolute top-4 right-4"
              />
              <p className="text-sm opacity-70 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-bold`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs opacity-50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
