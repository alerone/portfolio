import type { Project } from "@/content/content-types";

export const projects: Project[] = [
    {
        slug: "course-ai",
        name: "CourseAI",
        liveUrl: "https://course-ai-pearl.vercel.app",
        summary: "CourseAI is an innovative web platform designed to revolutionize educational content creation by leveraging generative artificial intelligence",
        description: `
CourseAI is an innovative web platform designed to revolutionize educational content creation by leveraging generative artificial intelligence. The application allows users to transform a simple idea into a fully structured learning experience, automatically organizing content into hierarchical modules and detailed lessons in a matter of seconds.

🌟 Key Features

*   **AI-Driven Course Generation:** Users can generate comprehensive educational paths by simply providing a topic. Powered by Google's Gemini AI, the app drafts logical structures from scratch.
*   **Hierarchical Organization:** Courses are intuitively structured into **Modules**, which act as chapters, and **Lessons**, which contain the specific learning material, ensuring a smooth pedagogical flow.
*   **Real-Time Content Creation:** The platform doesn't just create titles; it generates the actual substance of each lesson, providing immediate value to students and educators alike.
*   **Library Management:** A dedicated space to browse, manage, and revisit all previously generated courses, making it a personal knowledge hub.

🛠️ Tech Stack & Tools

*   **Backend:** Developed in **Golang** using the **Gin-gonic** framework for a high-performance, concurrent, and robust API.
*   **Artificial Intelligence:** Integration with **Google Gemini API** to handle natural language processing and structured content generation.
*   **Frontend:** A modern, responsive interface built with **React**, offering a seamless user experience across different devices.
*   **Database:** **PostgreSQL** hosted on **Supabase**, ensuring reliable data persistence and secure user content storage.
*   **Deployment & Infrastructure:** 
    *   **Render:** High-availability hosting for the Golang backend.
    *   **Vercel:** Optimized deployment for the React frontend to ensure fast loading times.
    *   **Supabase:** Managed cloud database and infrastructure.

💡 The Vision

The goal of CourseAI is to democratize access to structured knowledge. By reducing the "blank page" friction, we empower experts to share their knowledge faster and help students explore new subjects through organized, AI-curated curricula. CourseAI represents the next step in personalized education, where technology acts as a bridge between curiosity and deep learning.
`,
        technologies: ["go", "typescript", "react", "gemini-api", "render", "vercel", "supabase", "postgresql"],
        status: "in_progress",
        featured: true
    },
    {
        slug: "valen-move",
        name: "ValenMove",
        githubUrl: "https://github.com/alerone/EMTSearch/tree/master",
        summary:
            "For my thesis, I designed and developed a mobile application to enhance the public transport experience in Valencia.",
        description:
            `
# Final Degree Project
**Score**: 9.0

ValenMove is a high-performance Android application designed to unify and simplify public transportation in the city of Valencia, Spain. Developed as my Final Degree Project (TFG), this app solves the "fragmented data" problem by integrating three major transport systems—EMT (Buses), Metrovalencia (Subway/Tram), and Valenbisi (Bike)—into a single, sleek interface.

##  🌟 Key Features

- Unified Hub: No more switching between three different apps. Everything you need to move around the city is in one place.
- Real-Time Data: Leveraging the Valencia City Council's Open Data portal and advanced web scraping (JSoup) to provide live arrival times and bike availability.
- Location-Aware Search: Find the nearest stops instantly using GPS proximity or search by name.
- Favorites & Personalization: Save your frequent stops and customize your experience with multi-language support (English, Spanish, and Valencian).
- Interactive Mapping: Full integration with Google Maps API and Street View to help users visualize their destination before they even get there.

## 🛠️ Tech Stack & Tools
*Language*: Kotlin (100%)

**Architecture**: Clean Architecture with MVVM (Model-View-ViewModel) and SOLID principles.

**Networking**: Retrofit & Moshi for seamless API communication.

**Local Persistence**: Room Database for saving favorites and offline settings.

**UI/UX**: Material Design 3, Figma for prototyping, and responsive layouts (supporting both portrait and landscape).

**Libraries**: Paging v3 (for smooth data loading), Hilt (Dependency Injection), and Coroutines (Asynchronous programming).

💡 The Vision

The goal of ValenMove was to promote sustainable urban mobility. By making public transport data more accessible and user-friendly, we can help citizens choose greener ways to travel, reducing the city's carbon footprint while improving daily commutes.
`,
        image: "images/valenMove.jpg",
        technologies: ["kotlin", "open-data-valencia", "hilt", "android"],
        featured: true,
        status: "completed",
    },
    {
        slug: "pokedex-go",
        name: "Pokédex with Golang",
        githubUrl: "https://github.com/alerone/pokedex-go",
        summary: "A simple and interactive Terminal-based Pokedex written in Go.",
        description:
            "A simple and interactive terminal-based Pokedex written in Go. This application communicates with the PokeAPI to fetch Pokémon data, locations, and other relevant information. It provides a command-line interface to explore the Pokémon world and build your own Pokedex!",
        image: "images/pokedex-go.jpg",
        technologies: ["poke-api", "go"],
        status: "completed",
    },
    {
        slug: "faas-go",
        name: "FaaS with Golang",
        githubUrl: "https://github.com/alerone/FaaS-with-golang",
        summary:
            "FaaS platform made with Golang. It's purpose is to execute functions serverless as Docker containers in a scalable way.",
        description: `This project is a serverless Functions-as-a-Service (FaaS) platform built in Go, leveraging Docker and NATS for scalable function execution.
                It features a modular architecture with an API server for user and function management, 
                a worker layer to execute containerized functions, and Apache Apisix as a reverse proxy for routing and authentication.
                Users can register, manage, and execute custom Docker-based functions, with JWT-based security and configurable worker scalability, enabling a lightweight, distributed, and extensible serverless environment.`,
        image: "images/faas-go.jpg",
        technologies: ["go", "apisix", "nats", "docker"],
        status: "completed",
    },
    {
        slug: "http-from-tcp",
        name: "HTTP from TCP",
        githubUrl: "https://github.com/alerone/httpfromtcp",
        summary:
            "This is a project from a course in Boot.dev for learning about HTTP. It's a small implementation of the HyperText Transfer Protocol/1.1.",
        description:
            "This is an implementation of HTTP/1.1. The features in the project are: Parsing HTTP responses, Generation of HTTP responses, Basic HTTP server creation, support for 3 status codes (200, 400, 500), basic connections (not keep-alive), transfer chunked encoding, and many more",
        image: "images/httpfromtcp.jpg",
        technologies: ["go"],
        status: "completed",
    },
    {
        slug: "rocketsweeper",
        name: "RocketSweeper",
        githubUrl: "https://github.com/alerone/alerone.github.io",
        image: "images/rocketsweeper.jpg",
        liveUrl: "https://alerone.github.io/rocketsweeper",
        summary:
            "This is a Master's project Game based on Minesweeper but in Space with 3D graphics.",
        description:
            `
RocketSweeper is an immersive 3D reimagining of the classic Minesweeper game, built using modern web technologies. Instead of a flat 2D grid, players interact with a stylized board placed on a lunar surface, surrounded by space station elements and a cinematic atmosphere. This project elevates the traditional logic puzzle by adding physics-based animations, particle effects, and a fully interactive 3D environment.

🌟 Key Features

3D Spatial Gameplay: Navigate a physical board using OrbitControls. Players can zoom, rotate, and pan around the game table to get the best angle for their next move.

Dynamic Difficulty & Scaling: Offers Easy, Medium, and Hard modes. The game logic dynamically adjusts the number of "Rocket-Mines" and board parameters based on the chosen challenge level.

Rich Visual Feedback:

- Explosions: Custom particle systems (BufferGeometry) create vibrant fiery effects when a rocket is triggered.

- Animated Rewards: Successfully clearing tiles spawns spinning 3D coins that jump with satisfying TWEEN-based animations.

- Immersive Menus: Integrated HTML/CSS overlays for game settings and difficulty selection, synced with the 3D scene.

Customization Engine: A built-in GUI (lil-gui) allows players to personalize their experience in real-time, including board colors, material roughness/metalness, and switching between different flag themes (e.g., Mario, Bowser, Peach).

Adaptive Environment: Includes high-quality HDR backgrounds, a detailed lunar terrain, and localized lighting (SpotLights/DirectionalLights) to create a "casino in space" aesthetic.

Creative Mode: A specialized toggle to visualize rocket locations, designed for debugging or relaxed play.

🛠️ Tech Stack & Tools

- Engine: Three.js (WebGL-based 3D library).

- Language: Pure JavaScript (ES6+) with Modular Architecture.

- Animations: TWEEN.js for smooth transitions of coins, flags, and camera movements.

- Assets & Loading: GLTFLoader for 3D models (.glb), RGBELoader for environment lighting (HDR), and TextureLoader for realistic surface maps.

- UI/UX: HTML5/TailwindCSS for the menu system and lil-gui for real-time property tweaking.

- Effects: Custom Particle Systems for explosions and VideoTextures for victory/defeat screens.

💡 The Vision

The goal of RocketSweeper was to explore the boundaries of how classic logic games can be transformed through 3D web graphics. By moving the experience from a static grid to a reactive 3D world, the project aims to make the "Minesweeper" loop more rewarding and visually stimulating, proving that even the simplest game mechanics can feel brand new with the right technical and artistic execution.
`,
        technologies: ["threejs"],
        featured: true,
        status: "completed",
    },
    {
        slug: "oauth-rse",
        name: "OAuth RSE",
        githubUrl: "https://github.com/alerone/OAuthRSE",
        summary:
            "This project is an implementation of a task application with OAuth 2.0 as the authentication method.",
        description:
            "This project is an implementation of a task application with OAuth 2.0 as the authentication method. The application utilices docker to launch the database with the task application. In this project you can authenticate yourself via Google authentication. The authenticated user can use some features of Google like Google Drive.",
        technologies: ["python", "oauth", "flask"],
        status: "completed",
    },
    {
        slug: "limpieza",
        name: "Limpieza del piso",
        githubUrl: "https://github.com/alerone/limpieza",
        liveUrl: "https://limpiezapiso-cb761.web.app/",
        summary:
            "This project is a web application to manage the cleaning tasks of me and my roommates.",
        description:
            "This project is an implementation of a task application with OAuth 2.0 as the authentication method. The application utilices docker to launch the database with the task application. In this project you can authenticate yourself via Google authentication. The authenticated user can use some features of Google like Google Drive.",
        technologies: ["react", "firebase", "oauth", "github", "tailwind"],
        status: "planned",
    },
    {
        slug: "go-interpreter",
        name: "Making an Interpreter in Go",
        githubUrl: "https://github.com/alerone/interpreter",
        summary:
            "This is a interpreter made in Go of an invented language based on the book 'Writing an Interpreter in Go' by Thorsten Bell",
        description: `Programming languages are made from Compilers and interpreters, the interpreter takes source code and evaluates it producing some visible, intermediate result that can be later executed. The compilers produce an output in another language that the underlying system can understand.The intepreter is a mix of a lexer, a parser and a evaluator.
            Lexer The lexer takes the source code and tokenizes it, so the language knows if the current token is a '=', a identifier, a digit,... it only "marks" the text for later being parsed.
            Parser This parser is a tree-walking parser. The parser creates a Abstract Syntax Tree (AST). It's called abstract because some details visible in the source code are omitted in the AST (semicolons, spaces, newlines,...). This parser is a top down operator precedence parser, sometimes called "Pratt parser", after its inventor Vaughan Pratt. This parser makes learning about making an interpreter something fun! 🥳🎉
            Evaluator What makes a programming language come to life from source code is a good Evaluator. When the interpreter walks by the parsing tree it evaluates every node thanks to the evaluator so an integer returns an Object.Integer, an expression, a statement is evaluated and so on. The evaluator makes the source code execute and return objects from the object system of the programming language.`,
        technologies: ["go"],
        status: "completed",
    },
    {
        slug: "rag-course",
        name: "RAG Course – Building Retrieval-Augmented Generation Systems",
        githubUrl: "https://github.com/alerone/rag-course",
        image: "images/rag-course.jpg",
        summary:
            "This repository contains the complete code and lessons from a hands-on RAG (Retrieval-Augmented Generation) course, developed step by step with the assistance of ChatGPT.",
        description: ``,
        technologies: ["python", "faiss", "sentence-transformers", "langchain", "openaiapi"],
        status: "completed",
    },
];

export function getFeaturedProjects() {
    return projects.filter((project) => project.featured);
}

export function getProjectStatuses() {
    return [... new Set(projects.map((project) => project.status))]
}

export function getProjectTechnologySlugs() {
    return [... new Set(projects.flatMap((project) => project.technologies))]
}

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(project: Project, limit: number = 3) {
    return projects
        .filter((candidate) => candidate.slug !== project.slug)
        .map((candidate) => {
            const sharedTechnologies = candidate.technologies.filter((tech) => project.technologies.includes(tech)).length
            return {
                project: candidate,
                score: sharedTechnologies + (candidate.featured ? 0.25 : 0)
            }
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((item) => item.project)
}
