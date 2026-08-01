"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Check } from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "achmadwirra@gmail.com",
    href: "mailto:achmadwirra@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 897 878 6000",
    href: "https://wa.me/628978786000",
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
    href: undefined,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <section id="contact" className="hairline-t relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(ellipse_55%_60%_at_50%_110%,rgba(129,140,248,0.1),transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="07"
          title="Contact"
          heading="Let's build something great"
          description="Have a project in mind, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact channels */}
          <div>
            {contactInfo.map((item, index) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-white/[0.08] bg-white/[0.03] text-[#9ba1ac] transition-colors group-hover:border-[#818cf8]/50 group-hover:text-[#a5b0ff]">
                    <item.icon size={17} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="font-code block text-[10px] tracking-[0.2em] text-[#626874] uppercase">
                      {item.label}
                    </span>
                    <span className="mt-0.5 block text-[15px] font-medium text-[#f4f5f7]">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              return (
                <Reveal key={item.label} delay={Math.min(index * 0.06, 0.24)}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 border-b border-white/[0.06] py-5 transition-colors first:pt-0"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 border-b border-white/[0.06] py-5 first:pt-0">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="font-code mt-8 flex items-center gap-2.5 text-[11px] tracking-[0.16em] text-[#626874] uppercase">
                <span className="status-dot" />
                Currently available for freelance work
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.12}>
            {submitted ? (
              <div className="card flex h-full min-h-[380px] flex-col items-center justify-center p-10 text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10">
                  <Check className="text-[#4ade80]" size={26} />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#f4f5f7]">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#9ba1ac]">
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
                className="card space-y-4 p-6 md:p-7"
              >
                {error && (
                  <div className="rounded-lg border border-red-500/25 bg-red-500/[0.07] px-4 py-2.5 text-sm text-red-400">
                    {error}
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="field"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="field"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="field"
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your project…"
                  rows={5}
                  required
                  className="field resize-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
