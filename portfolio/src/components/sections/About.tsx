'use client';
import { motion } from "framer-motion";
import { about, social } from "@/data/content";
import { SpinningIcon } from "@/components/SpinningIcon";

export function About() {
	return (
		<section id="about" className="mx-auto max-w-6xl px-6 py-20">
			<motion.h2
				initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mb-12 text-2xl font-bold text-white flex items-center"
			>
				<SpinningIcon />
				About Me
			</motion.h2>
			
			<div className="grid gap-8 md:grid-cols-2">
			{/* Left Column - Main Description */}
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 text-white space-y-4"
				>
					<p className="text-lg leading-relaxed text-white">
						{about.headline}
					</p>
					<p className="text-base leading-relaxed text-white whitespace-pre-line">
						{about.body}
					</p>
				</motion.div>

			{/* Right Column - Info List */}
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 text-white space-y-6"
				>
					<div>
						<p className="text-sm font-medium text-white mb-2">Availability</p>
						<p className="text-base text-white">{about.availability}</p>
					</div>

					<div>
						<p className="text-sm font-medium text-white mb-2">Interests</p>
						<p className="text-base text-white">{about.hobbies.join(" • ")}</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}


