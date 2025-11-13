import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-black">
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} imjustKhznh. All rights reserved.
      </footer>
    </main>
  );
}
