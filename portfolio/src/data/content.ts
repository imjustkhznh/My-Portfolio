export type Project = {
	id: string;
	name: string;
	tagline: string;
	image: string;
	tech: string[];
	metrics?: { label: string; value: string }[];
	links: { demo?: string; github?: string; caseStudy?: string };
	description?: string;
};

export const techStacks = {
	frontend: ["HTML", "CSS", "React", "Next.js", "Vue"],
	backends: ["Node.js", "Express", "Python"],
	databases: ["MySQL", "PostgreSQL", "MongoDB"],
	devops: ["Docker"],
	tools: ["Git", "Postman", "Figma"],
};

export const projects: Project[] = [
	{
    	id: "webshop-watch",
    	name: "Watch E-Commerce Platform",
    	tagline: "Modern online store for luxury watches",
    	image: "/projects/webshop-watch2.png",
    	tech: ["HTML", "CSS", "Node.js", "MySQL"],
    	metrics: [
        	{ label: "Product catalog", value: "50+ items" },
        	{ label: "Admin panel", value: "Full CRUD" },
    	],
    	links: {
        	demo: "https://webshop-watch.onrender.com/",
        	github: "https://github.com/imjustkhznh/webshop-watch",
    	},
    	description:
        	"E-commerce platform for luxury watches built with vanilla HTML/CSS frontend and Node.js backend. Features product catalog, shopping cart, MySQL database, and admin panel for inventory management."
	},
	{
    	id: "furniture-da",
    	name: "Furniture E-Commerce Platform",
    	tagline: "Full-stack furniture store with admin dashboard",
    	image: "/projects/furniture.png",
    	tech: ["Laravel", "PHP", "MySQL", "Docker"],
    	metrics: [
        	{ label: "Product catalog", value: "500+ items" },
        	{ label: "Features", value: "15+ pages" },
    	],
    	links: {
        	demo: "https://furniture-da.onrender.com",
        	github: "https://github.com/imjustkhznh/Furniture_DA",
    	},
    	description:
        	"Full-stack e-commerce platform for furniture sales built with Laravel and PHP. Features comprehensive product catalog, advanced search and filtering, shopping cart system, secure checkout, order management, product comparison, and an admin dashboard for inventory and sales management. Deployed with Docker and optimized for MySQL database.",
	},

];

export const education = [
	{
		school: "Vietnam Women's Academy",
		degree: "Bachelor of Information Technology",
		period: "2021 — 2025",
		highlights: [
			"Final-year student specializing in Web Development",
			"Relevant coursework: Database Management, Web Programming, Software Engineering",
			"Built multiple full-stack projects using React, Node.js, and modern frameworks",
		],
	},
];

export const about = {
	headline:
		"I'm a final-year IT student passionate about crafting clean, responsive, and user-focused websites.",
	body:
		"I love transforming ideas into interactive digital experiences that are both functional and visually engaging.\n\nMy approach centers on writing maintainable code, optimizing performance, and designing interfaces that feel intuitive to use.\n\nI'm constantly learning new technologies and refining my workflow to deliver better results with every project.\n\nOutside of coding, I enjoy exploring design trends, optimizing my dev setup, and studying how great products are built from the ground up.",
	hobbies: ["Web Development", "UI/UX Design", "Learning New Tech"],
	availability: "Open to internships and freelance projects",
};

export const social = {
	email: "giakhanhpham.dev@gmail.com",
	github: "https://github.com/imjustkhznh",
	linkedin: "https://www.linkedin.com/in/imjustkhznh",
};


