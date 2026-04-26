"use client";

import { useState } from "react";
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

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

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
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
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

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === current ? "bg-[#06b6d4]" : "bg-[#1e293b]"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
