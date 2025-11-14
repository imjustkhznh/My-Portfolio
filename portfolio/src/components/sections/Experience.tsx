'use client';
import { motion } from "framer-motion";
import { education } from "@/data/content";
import { SpinningIcon } from "@/components/SpinningIcon";

export function Experience() {
	return (
		<section id="education" className="mx-auto max-w-6xl px-6 py-16">
			<motion.h2
				initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mb-8 text-2xl font-bold text-white flex items-center"
			>
				<SpinningIcon />
				Education
			</motion.h2>
			<ol className="relative border-l border-zinc-200 dark:border-zinc-800">
				{education.map((item, idx) => (
				<motion.li
					key={idx}
					initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
					whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: idx * 0.1 }}
						className="mb-10 ml-6"
					>
						<span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs dark:border-zinc-800 dark:bg-zinc-900">
							{idx + 1}
						</span>
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
							{item.degree} • {item.school}
						</h3>
						<p className="text-sm text-zinc-500">{item.period}</p>
						<ul className="mt-2 list-disc pl-5 text-zinc-700 dark:text-zinc-300">
							{item.highlights.map((h) => (
								<li key={h}>{h}</li>
							))}
						</ul>
					</motion.li>
				))}
			</ol>
		</section>
	);
}


