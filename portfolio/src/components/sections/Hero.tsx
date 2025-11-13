"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <ParticlesBackground />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32">
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            Web Developer
          </motion.span>
          {/* Theme toggle removed per request */}
        </div>
        <div className="mt-10 flex flex-col items-center text-center md:grid md:items-center md:gap-10 md:grid-cols-[1.4fr_.8fr] md:text-left">
          {/* Avatar - Shows first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-0 md:order-2 md:justify-self-end"
          >
            <div className="group relative h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-300/30 via-fuchsia-300/30 to-violet-300/30 p-[2px] backdrop-blur flex-shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/40 to-violet-500/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="h-full w-full rounded-2xl bg-white/70 p-2 dark:bg-zinc-900/70">
                <Image
                  src="/avt.jpg"
                  alt="Avatar"
                  className="h-full w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  width={160}
                  height={160}
                />
              </div>
            </div>
          </motion.div>

          {/* Text content - Shows second on mobile, first on desktop */}
          <div className="md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl"
           >
              Hi, I'm Khznh! 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 mx-auto md:mx-0 max-w-xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              A passionate web developer specializing in building scalable and performant web applications.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <Link
                href="#projects"
                className="rounded-lg bg-zinc-900 px-5 py-3 text-white shadow-sm transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border border-zinc-300 px-5 py-3 text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


