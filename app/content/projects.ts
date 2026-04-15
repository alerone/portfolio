import type { Project } from "@/content/content-types";

const descriptions: Record<string, string> = {
    "course-ai": `
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
    "valen-move":
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

    "pokedex-go":
        `
**Terminal Pokedex** is an interactive Command Line Interface (CLI) built in Go that allows users to explore the Pokémon world directly from their terminal. By communicating with the **PokeAPI**, the application provides a real-time experience of discovering, catching, and inspecting Pokémon, all while maintaining high performance through a custom-built concurrent caching system.

🌟 Key Features

*   **Interactive REPL:** A fluid "Read-Eval-Print Loop" environment that processes commands instantly, offering a native terminal experience for Pokémon fans.
*   **Dynamic World Exploration:** Navigate through different "Location Areas" using paginated maps. Users can explore specific regions to see which Pokémon inhabit them.
*   **Probability-Based Catch Mechanics:** Implements a custom algorithm that calculates the difficulty of catching a Pokémon based on its **Base Experience**. Harder Pokémon are statistically more likely to escape.
*   **High-Performance Concurrent Cache:** Includes an internal "pokecache" package that stores API responses in memory. It uses a background **goroutine** (reap loop) to automatically clear old entries, reducing network latency and API load.
*   **Deep Evolution Mapping:** The "inspect" command doesn't just show stats; it recursively maps out the Pokémon's **Evolution Chain**, including specific requirements like levels, stones, or happiness.
*   **In-Memory Pokedex:** Tracks all successfully captured Pokémon during the session, allowing users to build and review their personal collection.

🛠️ Tech Stack & Tools

*   **Language:** **Go (Golang)**, utilizing its strong standard library for networking and concurrency.
*   **API Integration:** RESTful communication with **PokeAPI** using the "net / http" package.
*   **Concurrency:** Built-in **Goroutines**, **Tickers**, and **RWMutex** to handle the asynchronous cache cleanup safely.
*   **Data Handling:** Advanced JSON unmarshaling into custom Go structs and "bytes.Buffer" for complex terminal string formatting.
*   **Testing:** Comprehensive unit tests for input cleaning and cache reliability to ensure a bug-free CLI experience.

💡 The Vision

The goal of **Terminal Pokedex** was to create a lightweight yet powerful tool for the command line. By focusing on efficient data retrieval through a custom caching layer and providing detailed, formatted output for complex data like evolution trees, the project demonstrates how to build professional-grade CLI tools that handle real-world API data with speed and precision.
`,
    "faas-go": `
**FaaS-with-golang** is a robust and scalable Function as a Service (FaaS) platform designed to manage and execute serverless functions through containerization. Built with high-concurrency and performance in mind, this project provides a complete infrastructure where users can deploy code as Docker images and execute them on-demand across a distributed network of workers.

🌟 Key Features

*   **Distributed Task Queuing:** Leverages **NATS JetStream** to implement a resilient work-queue pattern. This ensures that function execution requests are reliably delivered to available workers, even under high traffic loads.
*   **Docker-Native Runtime:** Unlike traditional FaaS that limit you to specific languages, this platform is completely language-agnostic. Any code packaged as a Docker image (e.g., Python, Node.js, Go) can be registered and executed instantly.
*   **Production-Grade Gateway:** Integrated with **Apache APISIX** as a reverse proxy. This provides professional-tier features right at the edge, including **JWT Authentication**, sophisticated **Rate Limiting** (to prevent service abuse), and secure request routing.
*   **Elastic Horizontal Scaling:** The architecture is designed for growth. By utilizing Docker Compose replicas, the worker tier can be scaled horizontally in seconds to increase throughput and handle intensive computational tasks.
*   **High-Performance Persistence:** Uses **NATS Key-Value (KV) stores** for distributed state management. This allows for ultra-fast retrieval of user data and function metadata without the overhead of traditional relational databases.
*   **Real-Time Execution Insights:** Every function execution provides detailed feedback, including the standard output (result), potential errors, and precise **execution time** metrics.

🛠️ Tech Stack & Tools

*   **Language:** Go (Golang 1.23+) for both the API Server and the Worker nodes, ensuring low-latency execution and efficient memory management.
*   **Messaging Backbone:** **NATS & JetStream** for event-driven communication and persistent messaging.
*   **API Framework:** **Gin-Gonic** for building a fast and modular RESTful API.
*   **Edge Proxy:** **Apache APISIX** (Standalone mode) for traffic management and security plugins.
*   **Container Orchestration:** **Docker SDK for Go** to programmatically pull images and manage the lifecycle of function containers.
*   **Security:** JWT (JSON Web Tokens) for stateless authentication and Bcrypt for secure password hashing.
*   **DevOps:** Docker Compose for seamless multi-service orchestration and environment replication.

💡 The Vision

The goal of **FaaS-with-golang** is to simplify the deployment of distributed serverless architectures. By decoupling the API management from the execution workers through a message broker, the platform offers a "private cloud" experience. It empowers developers to build their own serverless infrastructure that is transparent, easy to monitor, and capable of running any specialized environment packaged within a container.
`,

    "http-from-tcp": `
**Go-HTTP/1.1 Core** is a low-level, from-scratch implementation of the HyperText Transfer Protocol (HTTP/1.1) built directly on top of raw TCP sockets. Developed as an educational deep-dive into web fundamentals, this project eschews high-level libraries like "net/ http" to manually handle the complexities of request parsing, state management, and response generation.

🌟 Key Features

*   **Raw TCP Foundation:** Built entirely using Go’s "net.Conn" and "net.Listen" primitives, providing a clear view of how binary data streams are transformed into structured protocol messages.
*   **Comprehensive Request Parsing:** A custom-built parser that handles HTTP methods, URI routing, and header extraction directly from the TCP buffer.
*   **Advanced Transfer Mechanisms:** Support for **Transfer-Encoding: chunked**, allowing the server to stream large data sets (like video files) without knowing the total content length in advance, including support for trailing headers.
*   **Functional Handler Pattern:** Implements a developer-friendly "Handler" architecture (similar to Go’s standard library) using a custom "ResponseWriter" to manage status lines, headers, and body content.
*   **Integrated Reverse Proxy:** Features a built-in reverse proxy implementation specifically for "httpbin.org", demonstrating the protocol’s capability to forward and relay requests across the web.
*   **Status Code Logic:** Native support for essential status codes (200 OK, 400 Bad Request, 500 Internal Server Error) with modular error handling.

🛠️ Tech Stack & Tools

*   **Language:** Go (Golang 1.18+)
*   **Networking:** Raw TCP ("net" package)
*   **Testing:** Internal unit testing for headers and request/response logic to ensure protocol compliance.
*   **Architecture:** Modular design separating the **Server Engine**, **Header Management**, **Request Parsing**, and **Response Writing**.
*   **Streaming:** Byte-level manipulation for chunked data delivery and video streaming ("vim.mp4" example).

💡 The Vision

The goal of **Go-HTTP/1.1 Core** is to demystify the "magic" behind the modern web. By stripping away the abstractions of modern frameworks, the project serves as a masterclass in understanding the byte-level structure of the internet. It provides a blueprint for developers to learn how data truly travels across the wire, fostering a deeper appreciation for the protocols that power our digital world.
`,
    "rocketsweeper": `
RocketSweeper is an immersive 3D reimagining of the classic Minesweeper game, built using modern web technologies. Instead of a flat 2D grid, players interact with a stylized board placed on a lunar surface, surrounded by space station elements and a cinematic atmosphere. This project elevates the traditional logic puzzle by adding physics-based animations, particle effects, and a fully interactive 3D environment.

🌟 Key Features

*   **3D Spatial Gameplay:** Navigate a physical board using OrbitControls. Players can zoom, rotate, and pan around the game table to get the best angle for their next move.
*   **Dynamic Difficulty & Scaling:** Offers Easy, Medium, and Hard modes. The game logic dynamically adjusts the number of "Rocket-Mines" and board parameters based on the chosen challenge level.
*   **Rich Visual Feedback:** 
    *   **Explosions:** Custom particle systems (BufferGeometry) create vibrant fiery effects when a rocket is triggered.
    *   **Animated Rewards:** Successfully clearing tiles spawns spinning 3D coins that jump with satisfying TWEEN-based animations.
    *   **Immersive Menus:** Integrated HTML/CSS overlays for game settings and difficulty selection, synced with the 3D scene.
*   **Customization Engine:** A built-in GUI (lil-gui) allows players to personalize their experience in real-time, including board colors, material roughness/metalness, and switching between different flag themes (e.g., Mario, Bowser, Peach).
*   **Adaptive Environment:** Includes high-quality HDR backgrounds, a detailed lunar terrain, and localized lighting (SpotLights/DirectionalLights) to create a "casino in space" aesthetic.

🛠️ Tech Stack & Tools

*   **Engine:** Three.js (WebGL-based 3D library).
*   **Language:** Pure JavaScript (ES6+) with Modular Architecture.
*   **Animations:** TWEEN.js for smooth transitions of coins, flags, and camera movements.
*   **Assets & Loading:** GLTFLoader for 3D models (.glb), RGBELoader for environment lighting (HDR), and TextureLoader for realistic surface maps.
*   **UI/UX:** HTML5/TailwindCSS for the menu system and lil-gui for real-time property tweaking.
*   **Effects:** Custom Particle Systems for explosions and VideoTextures for victory/defeat screens.

💡 The Vision

The goal of RocketSweeper was to explore the boundaries of how classic logic games can be transformed through 3D web graphics. By moving the experience from a static grid to a reactive 3D world, the project aims to make the "Minesweeper" loop more rewarding and visually stimulating, proving that even the simplest game mechanics can feel brand new with the right technical and artistic execution.
`,
    "oauth-rse": `
**OAuth RSE** is a practical project developed as part of my Master’s degree to gain hands-on experience with the **OAuth 2.0** authorization framework. The application serves as a functional task manager that uses third-party authentication to manage user identities and interact with external cloud services securely.

🌟 Key Features

*   **OAuth 2.0 Flow Implementation:** Focused on the "Authorization Code" flow, allowing users to authenticate via Google without sharing credentials with the application.
*   **Google Services Integration:** Leverages authorized access to interact with the **Google Drive API**, exploring how to manage external resources once a user is authenticated.
*   **Secure Session Management:** Handles the lifecycle of access tokens and user sessions within a web environment.
*   **Task Management System:** A basic backend to store and organize user tasks, tied to the authenticated identity.
*   **Containerized Setup:** Uses **Docker** to package the application and its database, ensuring a consistent environment for development and testing.

🛠️ Tech Stack & Tools

*   **Language:** **Python**
*   **Web Framework:** **Flask** (used for its lightweight handling of routes and redirects).
*   **Security:** **OAuth 2.0** protocol and **Google Auth** libraries.
*   **Infrastructure:** **Docker** & **Docker Compose** for local deployment and database management.
*   **Database:** Structured storage for managing user-specific task data.

💡 The Vision

The primary goal of **OAuth RSE** was to move from theoretical knowledge to the practical application of authorization standards. By building this project during my Master's, I focused on understanding how tokens are exchanged, how scopes define permissions, and how to securely integrate a web application with global identity providers like Google.
`,
    "limpieza": `
**CleanApp** is a sophisticated, gamified task management web application designed to streamline and incentivize household chores for shared living spaces. Built with a modern tech stack and a mobile-first philosophy, the app transforms mundane cleaning routines into a competitive and organized experience, ensuring fairness through deterministic task rotation and real-time tracking.

🌟 Key Features

*   **Algorithmic Task Rotation:** Automatically assigns weekly chores (Kitchen, Living Room, Hallway) using a mathematical rotation logic that ensures every roommate shares the workload equally over time.
*   **Comprehensive Gamification Engine:** 
    *   **Mandatory Tasks:** Earning +20 points for on-time completions.
    *   **Optional "Extra Missions":** A dedicated marketplace for daily and weekly bonus tasks (e.g., "Deep Clean," "Dry Dishes") with global limits to boost scores.
    *   **Dual-Mode Ranking:** Competitive leaderboards that track both total weeks completed and cumulative "Gamification Points."
*   **Smart Historical Recovery:** A "Debt" system that tracks uncompleted weeks. Users can clear their history by performing tasks late for reduced points, ensuring the house eventually gets cleaned.
*   **Real-Time Activity Feed:** A live log of house activity, providing transparency on who completed which task and when, fostering accountability among residents.
*   **High-End Visual Identity:** A dark-themed "Glassmorphism" interface featuring animated SVG backgrounds, responsive layouts, and specialized UI components built with Radix and Tailwind CSS 4.0.
*   **Seamless Authentication:** Integrated Google OAuth with specialized handling for iOS/Safari to ensure a smooth login experience across all devices.

🛠️ Tech Stack & Tools

*   **Frontend:** React 19 with TypeScript and Vite for ultra-fast development and type safety.
*   **Backend as a Service (BaaS):** Firebase (Realtime Database & Authentication) for live data synchronization and secure user management.
*   **Styling & UI:** 
    *   **Tailwind CSS 4.0:** Utilizing the latest CSS-variable-based theming.
    *   **Shadcn UI:** High-quality accessible components (Sheets, Dialogs, Avatars, Badges).
    *   **Lucide React:** A consistent and modern iconography set.
*   **State Management:** Custom React Hooks ("useDashboardData", "useRanking", "useGamification") and Context API for efficient data orchestration.
*   **Deployment:** Automated hosting through Firebase Hosting with SPA routing support.

💡 The Vision

The goal of **CleanApp** is to eliminate the friction and "blank page" problem of house management. By turning chores into a transparent, rewarding, and even fun activity, the app helps maintain both a clean home and healthy relationships between roommates. It moves away from static "chore charts" towards a dynamic, interactive ecosystem where contribution is visible and valued.
`,
    "go-interpreter": `
**GoInterpreter** is a hand-crafted, high-performance tree-walking interpreter built from scratch using Go. Inspired by Thorsten Bell's seminal work, this project implements a complete programming language lifecycle—from raw source code to a fully functioning execution environment. It features a custom-built lexical analyzer, a sophisticated Pratt parser, and an internal object system, providing a deep dive into how high-level logic is transformed into machine-executable actions.

🌟 Key Features

*   **Lexical Analysis (Lexer):** A custom engine that performs tokenization, converting raw strings of source code into a stream of meaningful tokens. It handles identifiers, keywords, operators, and literals with precision.
*   **Top-Down Operator Precedence (Pratt Parser):** Unlike basic recursive descent parsers, this project implements a **Pratt Parser**. This allows for elegant handling of operator precedence and associativity, turning tokens into a structured **Abstract Syntax Tree (AST)** that discards syntactic noise while preserving logical intent.
*   **Recursive Tree-Walking Evaluator:** The heart of the interpreter. It traverses the AST and evaluates nodes in real-time using an internal **Object System**, allowing for dynamic typing, arithmetic expressions, and complex statement execution.
*   **Interactive REPL:** Features a "Read-Eval-Print Loop" (REPL) environment, enabling users to interact with the language in real-time, providing immediate feedback for every line of code written.
*   **First-Class Functions & Scoping:** (Si lo implementaste) Supports closures, higher-order functions, and environment-based lexical scoping to manage variable state across different execution contexts.

🛠️ Tech Stack & Tools

*   **Language:** Go (Golang) for its efficiency, strong typing, and excellent support for modular architecture.
*   **Data Structures:** Custom AST nodes and a specialized Object System to represent internal data types (Integers, Booleans, Functions).
*   **Design Pattern:** Tree-walking interpretation with a focus on modularity between the Lexer, Parser, and Evaluator.
*   **Testing:** Comprehensive suite of unit tests for each token and parsing rule to ensure protocol-level correctness.

💡 The Vision

The goal of **GoInterpreter** was to pull back the curtain on language design. By avoiding parser generators (like Yacc or Antlr) and building every component manually, the project demonstrates a fundamental understanding of computer science principles. It serves as a robust foundation for anyone looking to understand how human-readable code becomes a living, breathing program, proving that the tools we use every day are built on elegant, logical structures.
`,
    "rag-course": `
RAG Course is a comprehensive, hands-on masterclass in building Retrieval-Augmented Generation systems from the ground up. This project bridges the gap between static Large Language Models (LLMs) and dynamic, data-driven AI. By implementing a full pipeline—from document ingestion to context-aware generation—this course provides a definitive blueprint for creating AI applications that are grounded in factual, private, or specialized data, effectively eliminating the "knowledge cutoff" of traditional models.
`
}

export const projects: Project[] = [
    {
        slug: "course-ai",
        name: "CourseAI",
        liveUrl: "https://course-ai-pearl.vercel.app",
        summary: "CourseAI is an innovative web platform designed to revolutionize educational content creation by leveraging generative artificial intelligence",
        description: descriptions["course-ai"],
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
        description: descriptions["valen-move"],
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
        description: descriptions["pokedex-go"],
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
        description: descriptions["faas-go"],
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
        description: descriptions["http-from-tcp"],
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
        description: descriptions["rocketsweeper"],
        technologies: ["threejs", "javascript"],
        featured: true,
        status: "completed",
    },
    {
        slug: "oauth-rse",
        name: "OAuth RSE",
        githubUrl: "https://github.com/alerone/OAuthRSE",
        summary:
            "This project is an implementation of a task application with OAuth 2.0 as the authentication method.",
        description: descriptions["oauth-rse"],
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
        description: descriptions["limpieza"],
        technologies: ["typescript", "react", "firebase", "oauth", "github", "tailwind", "typescript"],
        status: "planned",
    },
    {
        slug: "go-interpreter",
        name: "Making an Interpreter in Go",
        githubUrl: "https://github.com/alerone/interpreter",
        summary:
            "This is a interpreter made in Go of an invented language based on the book 'Writing an Interpreter in Go' by Thorsten Bell",
        description: descriptions["go-interpreter"],
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
        description: descriptions["rag-course"],
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
