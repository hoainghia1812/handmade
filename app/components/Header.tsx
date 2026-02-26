"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#shop" },
    { label: "Our Story", href: "#story" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-brand-brown/10 dark:border-white/10 ${
          scrolled
            ? "bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md shadow-sm"
            : "bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24">

            {/* LEFT — desktop nav / mobile hamburger */}
            <div className="flex items-center">
              {/* Desktop nav links */}
              <div className="hidden md:flex space-x-8 lg:space-x-10 text-sm tracking-widest uppercase font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    className="hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden hover:text-primary transition-colors p-1"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <span className="material-symbols-outlined">
                  {menuOpen ? "close" : "menu"}
                </span>
              </button>
            </div>

            {/* CENTER — brand logo */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
              <div className="text-2xl sm:text-3xl font-display font-bold tracking-tighter leading-none">
                MUSH &amp; CO.
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase opacity-80 mt-1">
                Handmade Luxury
              </div>
            </div>

            {/* RIGHT — icons */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              <button className="hover:text-primary transition-colors relative p-1" aria-label="Cart">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="absolute top-0 right-0 bg-primary text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } bg-background-light/98 dark:bg-background-dark/98 border-t border-brand-brown/10 dark:border-white/10`}
        >
          <div className="px-6 py-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-sm tracking-widest uppercase font-medium py-3 border-b border-brand-brown/10 dark:border-white/10 hover:text-primary transition-colors last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Backdrop overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}
