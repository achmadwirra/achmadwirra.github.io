"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.07] bg-[#08090b]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3">
            <div className="font-code flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.14] bg-white/[0.03] text-sm font-medium text-[#f4f5f7] transition-colors group-hover:border-[#818cf8]/60">
              aw
              <span className="text-[#818cf8]">.</span>
            </div>
            <span className="hidden text-[15px] font-semibold tracking-tight text-[#f4f5f7] sm:block">
              Achmad Wira
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-[#9ba1ac] transition-colors hover:bg-white/[0.04] hover:text-[#f4f5f7]"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-[#f4f5f7] px-4.5 py-2 text-sm font-semibold text-[#0a0b0d] transition-all hover:bg-white hover:shadow-[0_6px_20px_-8px_rgba(129,140,248,0.5)]"
            >
              Hire me
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#f4f5f7] md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/[0.07] bg-[#0a0b0e]/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const id = link.href.split("#")[1] || "";
                    setIsOpen(false);
                    // Wait for the collapse animation to finish so the
                    // target's position is stable before scrolling.
                    setTimeout(() => {
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 350);
                  }}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#9ba1ac] transition-colors hover:bg-white/[0.04] hover:text-[#f4f5f7]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 350);
                }}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-[#f4f5f7] px-4 py-2.5 text-sm font-semibold text-[#0a0b0d]"
              >
                Hire me
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
