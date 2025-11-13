"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent text-zinc-200 transition hover:bg-zinc-800/30 backdrop-blur-sm ${className || ''}`}
      style={{ backgroundColor: '#fff0f000' }}
    >
      {mounted && isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}


