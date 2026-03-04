"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/config";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const rafRef = useRef<number | null>(null);
  const locale = useLocale() as Locale;
  const t = useTranslations("common");

  const basePath = `/${locale}`;

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Đóng mobile menu khi chuyển trang
  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const scrollProgress = Math.min(scrollY / 120, 1);
  const bgOpacity = scrollProgress * 0.95;
  const blurAmount = scrollProgress * 16;
  const shadowOpacity = scrollProgress * 0.08;
  const borderOpacity = scrollProgress * 0.1;

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: t("header.home"), href: `${basePath}` },
    { label: t("header.shop"), href: `${basePath}/shop` },
    { label: t("header.story"), href: `${basePath}/story` },
  ];

  const nextLocale: Locale = locale === "en" ? "vi" : "en";
  const nextLocaleLabel = nextLocale === "en" ? "English" : "Tiếng Việt";

  const localizedPathname = pathname || "/";
  const nextLocalePath = localizedPathname.replace(
    /^\/(en|vi)(?=\/|$)/,
    `/${nextLocale}`
  );

  const isActive = (href: string) => {
    // Trang home: chỉ active khi path khớp đúng /{locale}
    if (href === basePath) return pathname === basePath;
    // Các trang khác: active nếu path bắt đầu bằng href
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed w-full z-50"
        style={{
          boxShadow: `0 1px 32px 0 rgba(0,0,0,${shadowOpacity})`,
          borderBottom: `1px solid rgba(84,61,45,${borderOpacity})`,
        }}
      >
        {/* Cinematic background layer — fades in on scroll */}
        <div
          className="absolute inset-0 -z-10 bg-background-light dark:bg-background-dark"
          style={{
            opacity: bgOpacity,
            backdropFilter: `blur(${blurAmount}px) saturate(${1 + scrollProgress * 0.4})`,
            WebkitBackdropFilter: `blur(${blurAmount}px) saturate(${1 + scrollProgress * 0.4})`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24">

            {/* LEFT — desktop nav / mobile hamburger */}
            <div className="flex items-center">
              {/* Desktop nav links */}
              <div className="hidden md:flex space-x-8 lg:space-x-10 text-sm tracking-widest uppercase font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`hover:text-primary transition-colors ${
                      isActive(link.href) ? "text-primary" : ""
                    }`}
                    prefetch
                  >
                    {link.label}
                  </Link>
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
            <Link
              href={basePath}
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold tracking-tighter leading-none">
                MUSH &amp; CO.
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase opacity-80 mt-1">
                Handmade Luxury
              </div>
            </Link>

            {/* RIGHT — icons (language chip chỉ desktop) */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Language toggle — desktop only */}
              <Link
                href={nextLocalePath}
                className="hidden md:inline-flex items-center px-3 py-1.5 border border-brand-brown/40 dark:border-white/40 rounded-full text-xs tracking-wide uppercase hover:bg-brand-brown hover:text-background-light transition-colors"
              >
                {nextLocaleLabel}
              </Link>

              <button
                className="hover:text-primary transition-colors relative p-1"
                aria-label={t("header.cart")}
              >
                <span className="material-symbols-outlined">shopping_bag</span>
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
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-sm tracking-widest uppercase font-medium py-3 border-b border-brand-brown/10 dark:border-white/10 hover:text-primary transition-colors last:border-0 ${
                  isActive(link.href) ? "text-primary" : ""
                }`}
                prefetch
              >
                {link.label}
              </Link>
            ))}

            {/* Language toggle — dưới các nav trong mobile menu */}
            <button
              type="button"
              onClick={() => (window.location.href = nextLocalePath)}
              className="mt-2 text-sm tracking-widest uppercase font-medium py-3 border-b border-brand-brown/10 dark:border-white/10 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>{nextLocaleLabel}</span>
              <span className="material-symbols-outlined text-base">translate</span>
            </button>
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
