"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Startup Founder",
    rating: 5,
    text: "Wira built our entire SaaS dashboard from scratch. His attention to detail and ability to translate complex requirements into clean, functional code is remarkable. The project was delivered on time and exceeded our expectations.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    rating: 5,
    text: "Working with Wira was a great experience. He brought creative solutions to our technical challenges and was always responsive to feedback. His full-stack expertise made the development process smooth and efficient.",
  },
  {
    name: "Ahmad Fauzi",
    role: "Crypto Project Lead",
    rating: 5,
    text: "Wira's Web3 expertise is impressive. He developed our DeFi dashboard and trading bot with deep understanding of blockchain mechanics. His code is clean, well-documented, and production-ready.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="py-20 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">
            My Clients Says
          </h2>
          <p className="text-[#94a3b8]">What people think about my work</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-14 z-10 w-10 h-10 rounded-full border border-[#1e293b] bg-[#1a1f2e]/80 backdrop-blur-sm flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-14 z-10 w-10 h-10 rounded-full border border-[#1e293b] bg-[#1a1f2e]/80 backdrop-blur-sm flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="dark-card p-8 text-center"
                >
                  <Quote className="text-[#06b6d4]/30 mx-auto mb-4" size={40} />

                  <p className="text-[#94a3b8] text-lg leading-relaxed mb-6 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="text-[#06b6d4] fill-[#06b6d4]"
                          size={18}
                        />
                      )
                    )}
                  </div>

                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#22d3ee] flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#0a0f1a] font-bold text-lg">
                      {testimonials[current].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  <h4 className="text-[#f8fafc] font-semibold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-[#06b6d4] text-sm">
                    {testimonials[current].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-6 h-2.5 bg-[#06b6d4]"
                      : "w-2.5 h-2.5 bg-[#1e293b] hover:bg-[#06b6d4]/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
