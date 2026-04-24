"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 opacity-60">
            Have a project in mind? Let&apos;s build something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass p-8 space-y-6"
        >
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
            />
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 opacity-40"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            {submitted ? (
              "Message Sent! ✓"
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
