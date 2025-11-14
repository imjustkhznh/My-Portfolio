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
				className="mb-8 text-2xl font-bold text-white flex items-center"
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
					className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 text-white space-y-6"
				>
						<div className="relative h-56 w-full overflow-hidden">
							<Image
 								src={p.image}
 								alt={p.name}
 								fill
 								className="object-cover rounded-xl transition duration-500 group-hover:scale-[1.03]"
 							/>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-white">
								{p.name}
							</h3>
							<p className="mt-1 text-sm text-white">{p.tagline}</p>
							<div className="mt-3 flex flex-wrap gap-2">
								{p.tech.map((t) => (
									<span
										key={t}
										className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-white"
									>
										{t}
									</span>
								))}
							</div>
							{p.metrics && (
 								<ul className="mt-4 flex flex-wrap gap-4 text-sm text-white">
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
	 									className="rounded-lg bg-white text-zinc-900 px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-zinc-200 hover:shadow-lg"
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


