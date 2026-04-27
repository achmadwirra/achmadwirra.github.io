"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "achmadwirra@gmail.com",
    href: "mailto:achmadwirra@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 897 878 6000",
    href: "tel:+628978786000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kalimantan Selatan, Indonesia",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/628978786000",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="contact" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f8fafc] mb-3">
            Contact Me
          </h2>
          <p className="text-[#94a3b8]">
            Let&apos;s work together on your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="dark-card p-5 flex items-center gap-4 block"
              >
                <div className="w-12 h-12 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-[#06b6d4]" size={22} />
                </div>
                <div>
                  <p className="text-[#94a3b8] text-xs uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-[#f8fafc] font-medium">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="dark-card p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#06b6d4]/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-[#06b6d4]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#f8fafc] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#94a3b8]">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setError("");
                  try {
                    const form = e.target as HTMLFormElement;
                    const res = await fetch("https://formspree.io/f/mgordpgr", {
                      method: "POST",
                      body: new FormData(form),
                      headers: { Accept: "application/json" },
                    });
                    if (res.ok) {
                      setSubmitted(true);
                      form.reset();
                    } else {
                      setError("Failed to send. Please try again.");
                    }
                  } catch {
                    setError("Network error. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="dark-card p-6 space-y-4"
              >
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded-lg px-4 py-3 text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded-lg px-4 py-3 text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded-lg px-4 py-3 text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors text-sm"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full bg-[#0a0f1a] border border-[#1e293b] rounded-lg px-4 py-3 text-[#f8fafc] placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#06b6d4] hover:bg-[#22d3ee] disabled:opacity-50 disabled:cursor-not-allowed text-[#0a0f1a] py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
