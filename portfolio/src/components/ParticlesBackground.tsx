"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: { 
          onHover: { enable: true, mode: "repulse" },
        },
        modes: { repulse: { distance: 100, duration: 0.3 } },
      },
      particles: {
        color: { value: ["#22d3ee", "#a78bfa", "#f472b6"] },
        links: { color: "#64748b", distance: 140, enable: true, opacity: 0.2, width: 1 },
        collisions: { enable: false },
        move: {
          directions: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 0.6,
          straight: false,
        },
        number: { density: { enable: true }, value: 100},
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!ready) return null;
  return (
    <div className="absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}


