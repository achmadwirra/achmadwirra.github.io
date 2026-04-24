"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xpwzgkjr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await res.json();
        setErrorMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
              name="name"
              placeholder="Your Name"
              required
              disabled={status === "loading"}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={status === "loading"}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-4 opacity-40"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              disabled={status === "loading"}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--accent)] focus:outline-none transition-colors resize-none disabled:opacity-50"
            />
          </div>

          {/* Status messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-green-400 text-sm p-3 rounded-xl bg-green-500/10 border border-green-500/20"
            >
              <CheckCircle size={16} />
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 text-sm p-3 rounded-xl bg-red-500/10 border border-red-500/20"
            >
              <AlertCircle size={16} />
              {errorMsg}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle size={16} /> Message Sent!
              </>
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
