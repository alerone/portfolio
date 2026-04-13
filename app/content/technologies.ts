import type { Technology } from "@/content/content-types";

export const technologies: Technology[] = [
    {
        slug: "react",
        name: "React",
        url: "https://react.dev",
        description: "Frontend framework for building user interfaces. It's main idea is to split UI into reusable components, which update efficiently when data changes thanks to the Virtual DOM",
        icon: "react",
        level: 3,
        keywords: ["react-router", "three-fiber", "custom hooks", "react-query"],
        visible: true,
    },
    {
        slug: "github",
        name: "Github",
        url: "https://github.com",
        description: "Online platform built around Git, a version control system. It lets developers store code in repositories, track changes to their code over time, collaborate with others by sharing, reviewing, and merging code",
        icon: "github",
        level: 2,
        visible: true,
        keywords: ["issues", "pull requests", "github actions", "github pages"]
    },
    {
        slug: "go",
        name: "Golang",
        url: "https://go.dev/",
        description: "Open-source programming language created at Google. It's designed to be fast and efficient (compiled language), simple and readable (clean syntax), great for concurrency (actual parallelism with gorutines and channels).",
        icon: "go",
        level: 3,
        visible: true,
        keywords: ["cross-platform", "APIs", "gorutines", "web servers"]
    },
    {
        slug: "python",
        name: "Python",
        url: "https://www.python.org/",
        description: "A high-level, general-purpose programming language known for its simplicity and readability. It has dynamic types, it emphazises developer productivity over raw performance.",
        icon: "python",
        level: 2,
        visible: true,
        keywords: ["dynamically typed", "garbage-collected", "interpreted"]
    },
    {
        slug: "nats",
        name: "Nats",
        url: "https://react.dev",
        description: "NATS is a lightweight, high-performance messaging system designed for distributed systems and microservices. It supports publish/subscribe, request/reply, and work queues, making it ideal for low-latency, scalable applications.",
        icon: "nats",
        level: 3,
        visible: true,
        keywords: ["jetstream", "pub/sub", "distributed", "message system"]
    },
    {
        slug: "apisix",
        name: "Apache Apisix",
        url: "https://apisix.apache.org/",
        description: "Cloud-native API Gateway and microservices traffic manager. It sits between client and server and handles: routing, load balancing, security, plugins and observability.",
        icon: "apisix",
        level: 1,
        visible: true,
        keywords: ["middleware", "API gateway"]
    },
    {
        slug: "git",
        name: "Git",
        url: "https://git-scm.com/",
        description: "Distributed version control system. It's used to track changes in code (or any files) and to collaborate with others.",
        icon: "git",
        level: 4,
        visible: true,
        keywords: ["commit", "merge", "rebase", "cherry pick", "reflog"]
    },
    {
        slug: "hilt",
        name: "Hilt",
        description: "Dependency injection library for kotlin android applications that reduces boilerplate of doing manual dependency injection in your project",
        url: "https://dagger.dev/hilt/",
        level: 4,
        visible: true,
        keywords: ["Dependency injection", "Kotlin", "Android"]
    },
    {
        slug: "kotlin",
        name: "Kotlin",
        description: "Modern, concise and type-safe programming language that runs on the JVM, is fully interoperable with Java, and it's designed for safety, productivity, and multiplatform development (Android, backend, web, native).",
        url: "https://kotlinlang.org/",
        level: 3,
        icon: "kotlin",
        visible: true,
        keywords: ["interoperable with Java", "corroutines", "Android"]
    },
    {
        slug: "open-data-valencia",
        name: "Valencia Open Data",
        url: "https://valencia.opendatasoft.com/pages/home/",
        description: "An api for fetching public Valencia data",
        level: 3,
        visible: false
    },
    {
        slug: "android",
        name: "Android",
        url: "https://www.android.com/",
        description: "Operating System for mobiles",
        icon: "android",
        level: 3,
        visible: false
    },
    {
        slug: "oauth",
        name: "OAuth 2.0",
        url: "https://oauth.net/2/",
        description: "OAuth is an open standard for secure authorization. It allows users to grant applications limited access to their resources (like profile data or files) on another service without sharing their password.",
        icon: "oauth",
        visible: true,
        level: 3,
        keywords: ["secure authentication", "google authentication"]
    },
    {
        slug: "docker",
        name: "Docker",
        url: "https://www.docker.com/",
        description: "Docker is a platform for containerization that allows developers to package applications together with all their dependencies into lightweight, portable containers. These containers run consistently across different environments, eliminating the “it works on my machine” problem.",
        icon: "docker",
        visible: true,
        level: 4,
        keywords: ["microservices", "deployment", "containers", "ITWoM problem"]
    },
    {
        slug: "flask",
        name: "Flask",
        url: "https://flask.palletsprojects.com/en/stable/",
        description: " Flask is a lightweight Web Server Gateway Interface (WSGI) web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.",
        icon: "flask",
        visible: true,
        level: 1,
        keywords: ["backend", "REST", "API", "python"]
    },
    {
        slug: "firebase",
        name: "Firebase",
        url: "https://firebase.google.com/",
        description: `Firebase is a cloud-based platform for building mobile and web applications. It provides tools and services such as real-time databases, authentication, cloud storage, hosting, analytics, and push notifications.
                    It allows developers to rapidly build, deploy, and scale apps without managing backend infrastructure, making it ideal for prototypes and production-ready applications alike.`,
        icon: "firebase",
        level: 2,
        visible: true,
        keywords: ["database", "real-time", "authentication"]
    },
    {
        slug: "threejs",
        name: "ThreeJS",
        url: "https://threejs.org/docs/",
        description: `Three.js is a JavaScript 3D library that makes it easy to create and display 3D graphics in the browser using WebGL, without needing to write low-level graphics code.`,
        icon: "threejs",
        level: 3,
        visible: true,
        keywords: ["3D graphics", "shaders", "Materials", "Objects", "3D Camera"]
    },
    {
        slug: "tailwind",
        name: "Tailwind",
        url: "https://tailwindcss.com/",
        description: `Tailwind CSS is a utility-first CSS framework that lets you style web applications by applying small, reusable classes directly in HTML instead of writing custom CSS rules.
                It emphasizes rapid development, consistency, and responsive design, allowing developers to build modern, visually appealing interfaces without leaving the markup.`,
        icon: "tailwind",
        level: 3,
        visible: true,
        keywords: ["css", "style", "colors", "classes"]
    },
    {
        slug: "poke-api",
        name: "Poke API",
        url: "https://pokeapi.co/",
        description: "An API for fetching Pokémon data",
        level: 3,
        visible: false
    },
    {
        slug: "faiss",
        name: "FAISS",
        url: "https://faiss.ai/",
        description: "Facebook AI Similarity Search — a vector database library designed for similarity search and clustering of dense vectors.",
        level: 1,
        visible: true,
        keywords: ["vector indexing", "nearest neighbor search"]
    },
    {
        slug: "sentence-transformers",
        name: "Sentence-Transformers",
        url: "https://python.langchain.com/docs/integrations/text_embedding/sentence_transformers/",
        description: "A Python framework for creating semantic embeddings from text using Transformer models like BERT or Re-ranking with CrossEncoders",
        level: 2,
        visible: true,
        keywords: ["embeddings", "Semantic similarity", "NLP models"]
    },
    {
        slug: "lang-chain",
        name: "LangChain",
        icon: "langchain",
        url: "https://www.langchain.com/",
        description: "A framework that helps build LLM-powered applications, connecting language models with data sources, tools, and memory.",
        level: 0,
        visible: true,
        keywords: ["prompt chaining", "semantic chunking"]
    },
    {
        slug: "open-ai-api",
        name: "OpenAI API",
        icon: "openai",
        url: "https://openai.com/api/",
        description: "The OpenAI API that provides access to GPT models for text generation, conversation, and reasoning.",
        level: 1,
        visible: true,
        keywords: ["llm", "api", "text generation"]
    }
]

export function getTechnologyBySlug(slug: string) {
    return technologies.find((technology) => technology.slug === slug)
}

export function getVisibleTechnologies() {
    return technologies.filter((technology) => technology.visible !== false)
}

