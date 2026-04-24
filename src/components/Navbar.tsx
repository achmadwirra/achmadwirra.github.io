"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "light" : "dark"
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text">
          &lt;Dev /&gt;
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:glow transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 mx-4 p-4 rounded-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-all"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="mt-2 p-2 rounded-full glass hover:glow transition-all"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
