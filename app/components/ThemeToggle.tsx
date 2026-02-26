"use client";

export default function ThemeToggle() {
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button className="hover:text-primary transition-colors" onClick={toggleDark}>
      <span className="material-symbols-outlined dark:hidden">dark_mode</span>
      <span className="material-symbols-outlined hidden dark:block">light_mode</span>
    </button>
  );
}
