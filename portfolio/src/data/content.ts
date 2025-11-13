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
    	id: "crud-todo-api",
    	name: "Todo API with Notifications",
    	tagline: "RESTful task API with real-time alerts",
    	image: "/projects/todo.png",
    	tech: ["Node.js", "Express", "MongoDB", "WebSocket"],
    	metrics: [
        	{ label: "API endpoints", value: "12+" },
        	{ label: "Response time", value: "< 100ms" },
    	],
    	links: {
        	github: "https://github.com/imjustkhznh/Crud_api/tree/feature/todo-notification",
    	},
    	description:
        	"Full CRUD REST API for task management with real-time notification system. Features include user authentication, task prioritization, deadline reminders, and WebSocket-based push notifications for task updates.",
	},
	{
    id: "weather-app",
    name: "Weather Dashboard",
    tagline: "Real-time weather data with React",
    image: "/projects/weather.png",
    tech: ["React", "Vite", "JavaScript", "OpenWeather API"],
    metrics: [
        { label: "Forecast days", value: "5-day" },
        { label: "Update rate", value: "Real-time" },
    ],
    links: {
        github: "https://github.com/imjustkhznh/Weather-app",
    },
    description:
        "React-based weather dashboard built with Vite for fast development. Features include city search, 5-day forecast, hourly predictions, geolocation support, dynamic weather icons, and responsive design with component-driven architecture.",
},
	{
    	id: "python-game",
    	name: "Python Arcade Game",
    	tagline: "Interactive game with sound effects",
    	image: "/projects/game.png",
    	tech: ["Python", "Pygame"],
    	metrics: [
        	{ label: "Sound effects", value: "5+ audio" },
        	{ label: "Language", value: "Python" },
    	],
    	links: {
        	github: "https://github.com/imjustkhznh/Game",
    	},
    	description:
        	"Interactive arcade-style game built with Python and Pygame. Features include dynamic gameplay, sound effects (gunshot, laser, explosion), background music, and game over system for an engaging player experience."
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
	email: "khanhshrimp171204@gmail.com",
	github: "https://github.com/imjustkhznh",
	linkedin: "https://www.linkedin.com/in/imjustkhznh",
};


