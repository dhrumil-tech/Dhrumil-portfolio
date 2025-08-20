import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../data/resumeData";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {profile.name}
        </a>
        <div className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-brand-600">About</a>
          <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-brand-600">Education</a>
          <a href="#internship" className="text-slate-600 dark:text-slate-300 hover:text-brand-600">Internship</a>
          <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-brand-600">Skills</a>
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-brand-600">Projects</a>
          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-brand-600">Contact</a>
        </div>
        <button onClick={toggle} aria-label="Toggle theme" className="btn-outline">
          {dark ? <Sun size={18}/> : <Moon size={18}/>}
          <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
        </button>
      </nav>
    </header>
  );
}
