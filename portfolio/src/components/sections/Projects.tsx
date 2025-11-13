'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/content";
import { SpinningIcon } from "@/components/SpinningIcon";

export function Projects() {
	return (
		<section id="projects" className="mx-auto max-w-6xl px-6 py-16">
			<motion.h2
				initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center"
			>
				<SpinningIcon />
				Featured Projects
			</motion.h2>
			<div className="grid gap-6 md:grid-cols-2">
				{projects.map((p, idx) => (
				<motion.article
					key={p.id}
					initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
					whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: idx * 0.1 }}
					whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
						className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white/60 shadow-sm transition-shadow hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50"
					>
						<div className="relative h-56 w-full overflow-hidden">
							<Image
								src={p.image}
								alt={p.name}
								fill
								className="object-cover transition duration-500 group-hover:scale-[1.03]"
							/>
						</div>
						<div className="p-5">
							<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
								{p.name}
							</h3>
							<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.tagline}</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{p.tech.map((t) => (
									<span
										key={t}
										className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
									>
										{t}
									</span>
								))}
							</div>
							{p.metrics && (
								<ul className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-700 dark:text-zinc-300">
									{p.metrics.map((m) => (
										<li key={m.label} className="flex items-center gap-2">
											<span className="font-medium">{m.value}</span>
											<span className="text-zinc-400">|</span>
											<span>{m.label}</span>
										</li>
									))}
								</ul>
							)}
							<div className="mt-5 flex flex-wrap gap-3">
								{p.links.demo && (
									<Link
										className="rounded-lg bg-zinc-900 px-4 py-2 text-sm text-white dark:bg-zinc-100 dark:text-zinc-900"
										href={p.links.demo}
										target="_blank"
									>
										Live Demo
									</Link>
								)}
								{p.links.github && (
									<Link
										className="rounded-lg border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-700"
										href={p.links.github}
										target="_blank"
									>
										GitHub
									</Link>
								)}
								{p.links.caseStudy && (
									<Link className="text-sm underline" href={p.links.caseStudy}>
										Case Study
									</Link>
								)}
							</div>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}


