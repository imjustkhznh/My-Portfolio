'use client';
import { Code2, Database, Layout, ServerCog, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { techStacks } from "@/data/content";
import { SpinningIcon } from "@/components/SpinningIcon";
import {
	SiReact,
	SiNextdotjs,
	SiVuedotjs,
	SiTypescript,
	SiNodedotjs,
	SiExpress,
	SiPython,
	SiDjango,
	SiGraphql,
	SiPostgresql,
	SiMongodb,
	SiMysql,
	SiRedis,
	SiDocker,
	SiAmazonwebservices,
	SiGooglecloud,
	SiNginx,
	SiGit,
	SiPostman,
	SiFigma,
	SiHtml5,
	SiCss3,
} from 'react-icons/si';

function TechIcon({ name }: { name: string }) {
	const iconProps = { size: 18, className: "flex-shrink-0" };

	switch (name) {
		case "HTML":
			return <SiHtml5 {...iconProps} className="text-[#E34F26]" />;
		case "CSS":
			return <SiCss3 {...iconProps} className="text-[#1572B6]" />;
		case "React":
			return <SiReact {...iconProps} className="text-[#61DAFB]" />;
		case "Next.js":
			return <SiNextdotjs {...iconProps} />;
		case "Vue":
			return <SiVuedotjs {...iconProps} className="text-[#42b883]" />;
		case "TypeScript":
			return <SiTypescript {...iconProps} className="text-[#3178C6]" />;
		case "Node.js":
			return <SiNodedotjs {...iconProps} className="text-[#339933]" />;
		case "Express":
			return <SiExpress {...iconProps} />;
		case "Python":
			return <SiPython {...iconProps} className="text-[#3776AB]" />;
		case "REST/GraphQL":
			return <SiGraphql {...iconProps} className="text-[#E10098]" />;
		case "PostgreSQL":
			return <SiPostgresql {...iconProps} className="text-[#4169E1]" />;
		case "MySQL":
			return <SiMysql {...iconProps} className="text-[#4479A1]" />;
		case "MongoDB":
			return <SiMongodb {...iconProps} className="text-[#47A248]" />;
		case "Redis":
			return <SiRedis {...iconProps} className="text-[#DC382D]" />;
		case "Docker":
			return <SiDocker {...iconProps} className="text-[#2496ED]" />;
		case "AWS/GCP":
			return (
				<div className="flex items-center gap-0.5">
					<SiAmazonwebservices size={16} className="text-[#FF9900]" />
					<SiGooglecloud size={16} className="text-[#4285F4]" />
				</div>
			);
		case "CI/CD":
			return (
				<svg width={18} height={18} viewBox="0 0 256 256" fill="none" aria-hidden>
					<path d="M48 88h160M48 168h160" stroke="#10b981" strokeWidth="14" strokeLinecap="round" />
				</svg>
			);
		case "Nginx":
			return <SiNginx {...iconProps} className="text-[#009639]" />;
		case "Git":
			return <SiGit {...iconProps} className="text-[#F05032]" />;
		case "Postman":
			return <SiPostman {...iconProps} className="text-[#FF6C37]" />;
		case "Figma":
			return <SiFigma {...iconProps} className="text-[#F24E1E]" />;
		default:
			return (
				<svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
					<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.2} fill="none" />
				</svg>
			);
	}
}

function Group({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
			className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-sm backdrop-blur text-zinc-100"
		>
			<div className="mb-3 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
				<span className="text-zinc-500">{icon}</span>
				<h3 className="font-semibold">{title}</h3>
			</div>
			<div className="flex flex-wrap gap-2">
				{items.map((item) => (
					<span
						key={item}
						title={item}
						className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm text-zinc-700 transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 flex items-center gap-2 group"
					>
						<span className="flex items-center justify-center text-zinc-700 dark:text-zinc-200 transition-transform duration-300 group-hover:rotate-12">
							<TechIcon name={item} />
						</span>
						<span className="font-medium">{item}</span>
					</span>
				))}
			</div>
		</motion.div>
	);
}

export function TechStack() {
	return (
		<section id="tech" className="mx-auto max-w-6xl px-6 py-16">
			<motion.h2
				initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
				whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mb-8 text-2xl font-bold text-white flex items-center"
			>
				<SpinningIcon />
				Tech Stack
			</motion.h2>
			
			<div className="space-y-5">
				{/* 3 trên - grid 3 cột */}
				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					<Group title="Frontend" items={techStacks.frontend} icon={<Layout size={18} />} />
					<Group title="Backend" items={techStacks.backends} icon={<ServerCog size={18} />} />
					<Group title="Database" items={techStacks.databases} icon={<Database size={18} />} />
				</div>

				{/* 2 dưới - grid 2 cột, offset để lệch sang giữa */}
				<div className="grid gap-5 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
					<Group title="Tools" items={techStacks.tools} icon={<Wrench size={18} />} />
					<Group title="Want to Learn" items={techStacks.devops} icon={<Code2 size={18} />} />
				</div>
			</div>
		</section>
	);
}


