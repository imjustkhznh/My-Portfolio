"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { useEffect, useRef } from "react";

export function Hero() {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const fullText = "Web Developer";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (typedTextRef.current && currentIndex <= fullText.length) {
        typedTextRef.current.textContent = fullText.slice(0, currentIndex);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Remove cursor after typing is done
        setTimeout(() => {
          const cursor = document.getElementById('typing-cursor');
          if (cursor) cursor.style.display = 'none';
        }, 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <ParticlesBackground />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <ThemeToggle />
      </motion.div>
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32">
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-400"
          >
            <span ref={typedTextRef}></span>
            <span id="typing-cursor" className="animate-pulse">|</span>
          </motion.span>
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
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-cyan-400 to-white opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
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
              className="text-4xl font-bold leading-tight sm:text-5xl bg-gradient-to-r from-blue-500 via-cyan-400 to-white bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundSize: '200% 200%',
              }}
           >
              Hi, I'm Khznh! 
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 mx-auto md:mx-0 max-w-xl text-lg text-zinc-100 dark:text-zinc-400"
            >
              Final-year IT student passionate about building modern web applications with exceptional user experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg bg-white text-sm font-medium text-zinc-900 shadow-sm transition-all hover:bg-zinc-200 hover:shadow-lg"
                  style={{ width: '140.56px', height: '48px' }}
                >
                  View Projects
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-[#939597] text-sm font-medium text-zinc-200 transition-all hover:bg-zinc-800/30 hover:border-zinc-700 hover:shadow-md dark:border-[#939597] dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:border-zinc-600"
                  style={{ width: '140.56px', height: '48px' }}
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


