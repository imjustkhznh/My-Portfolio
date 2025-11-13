'use client';
import { motion } from "framer-motion";
import { about, social } from "@/data/content";
import { SpinningIcon } from "@/components/SpinningIcon";

export function About() {
	return (
		<section id="about" className="mx-auto max-w-6xl px-6 py-20">
			<motion.h2
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="mb-12 text-2xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center"
			>
				<SpinningIcon />
				About Me
			</motion.h2>
			
			<div className="grid gap-8 md:grid-cols-2">
				{/* Left Column - Main Description */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="space-y-4"
				>
					<p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
						{about.headline}
					</p>
					<p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
						{about.body}
					</p>
				</motion.div>

				{/* Right Column - Info List */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="space-y-6"
				>
					<div>
						<p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-2">Location</p>
						<p className="text-base text-zinc-900 dark:text-zinc-100">{about.location}</p>
					</div>

					<div>
						<p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-2">Availability</p>
						<p className="text-base text-zinc-900 dark:text-zinc-100">{about.availability}</p>
					</div>

					<div>
						<p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-2">Interests</p>
						<p className="text-base text-zinc-900 dark:text-zinc-100">{about.hobbies.join(" • ")}</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}


