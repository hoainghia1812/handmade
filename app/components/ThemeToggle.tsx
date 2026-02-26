"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const toggle = () => {
    const dark = !isDark;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  };

  return (
    <button
      className="hover:text-primary transition-colors p-1"
      aria-label={isDark ? "Chế độ tối" : "Chế độ sáng"}
      onClick={toggle}
    >
      <span className="material-symbols-outlined">
        {isDark ? "dark_mode" : "light_mode"}
      </span>
    </button>
  );
}
