import type { Technology } from "~/types/technology";

export const techList: Record<string, Technology> = {
    "react": {
        id: "70415de0-ce75-4ff7-9734-3e91d24e12d2",
        name: "React",
        href: "https://react.dev",
        description: "Frontend framework for building user interfaces. It's main idea is to split UI into reusable components, which update efficiently when data changes thanks to the Virtual DOM",
        icon: "react",
        level: 3,
        keywords: ["react-router", "three-fiber", "custom hooks", "react-query"]
    },
    "github": {
        id: "33d8cbfa-64f3-48bf-afc8-b7d3edf8c746",
        name: "Github",
        href: "https://github.com",
        description: "Online platform built around Git, a version control system. It lets developers store code in repositories, track changes to their code over time, collaborate with others by sharing, reviewing, and merging code",
        icon: "github",
        level: 2,
        keywords: ["issues", "pull requests", "github actions", "github pages"]
    },
    "go": {
        id: "2fc9d282-5d8b-4b3b-9659-6fcea1ff75b6",
        name: "Golang",
        href: "https://go.dev/",
        description: "Open-source programming language created at Google. It's designed to be fast and efficient (compiled language), simple and readable (clean syntax), great for concurrency (actual parallelism with gorutines and channels).",
        icon: "go",
        level: 3,
        keywords: ["cross-platform", "APIs", "gorutines", "web servers"]
    },
    "python": {
        id: "968892a5-8bf2-49ff-a721-73fc585aed34",
        name: "Python",
        href: "https://www.python.org/",
        description: "A high-level, general-purpose programming language known for its simplicity and readability. It has dynamic types, it emphazises developer productivity over raw performance.",
        icon: "python",
        level: 2,
        keywords: ["dynamically typed", "garbage-collected", "interpreted"]
    },
    "nats": {
        id: "0be55013-e3c0-4c36-88de-a9ee5fef0acb",
        name: "Nats",
        href: "https://react.dev",
        description: "NATS is a lightweight, high-performance messaging system designed for distributed systems and microservices. It supports publish/subscribe, request/reply, and work queues, making it ideal for low-latency, scalable applications.",
        icon: "nats",
        level: 3,
        keywords: ["jetstream", "pub/sub", "distributed", "message system"]
    },
    "apisix": {
        id: "bac710cb-e396-40de-a62d-7171db1c9b38",
        name: "Apache Apisix",
        href: "https://apisix.apache.org/",
        description: "Cloud-native API Gateway and microservices traffic manager. It sits between client and server and handles: routing, load balancing, security, plugins and observability.",
        icon: "apisix",
        level: 1,
        keywords: ["middleware", "API gateway"]
    },
    "git": {
        id: "5ca08b06-45c2-4bb4-b913-21e1903c683e",
        name: "Git",
        href: "https://git-scm.com/",
        description: "Distributed version control system. It's used to track changes in code (or any files) and to collaborate with others.",
        icon: "git",
        level: 4,
        keywords: ["commit", "merge", "rebase", "cherry pick", "reflog"]
    },
    "hilt": {
        id: "a3dde556-93ff-4dd5-acfc-0c27c640dab1",
        name: "Hilt",
        description: "Dependency injection library for kotlin android applications that reduces boilerplate of doing manual dependency injection in your project",
        href: "https://dagger.dev/hilt/",
        level: 4,
        keywords: ["Dependency injection", "Kotlin", "Android"]
    },
    "kotlin": {
        id: "b44c2320-f621-46a8-ba39-c00b477ec106",
        name: "Kotlin",
        description: "Modern, concise and type-safe programming language that runs on the JVM, is fully interoperable with Java, and it's designed for safety, productivity, and multiplatform development (Android, backend, web, native).",
        href: "https://kotlinlang.org/",
        level: 3,
        icon: "kotlin",
        keywords: ["interoperable with Java", "corroutines", "Android"]
    },
    "openDataValencia": {
        id: "c54d13f9-c569-44fc-b832-54cf6009a42b",
        name: "Valencia Open Data",
        href: "https://valencia.opendatasoft.com/pages/home/",
        description: "An api for fetching public Valencia data",
        level: 3,
        dontShow: true,
        keywords: []
    },
    "android": {
        id: "7bed22e3-70db-4fd3-8981-d362ffbd7755",
        name: "Android",
        href: "https://www.android.com/",
        description: "Operating System for mobiles",
        icon: "android",
        level: 3,
        dontShow: true,
        keywords: []
    },
    "oauth": {
        id: "b981a817-c302-4076-a48d-c1dfb2eb56df",
        name: "OAuth 2.0",
        href: "https://oauth.net/2/",
        description: "OAuth is an open standard for secure authorization. It allows users to grant applications limited access to their resources (like profile data or files) on another service without sharing their password.",
        icon: "oauth",
        level: 3,
        keywords: ["secure authentication", "google authentication"]
    },
    "docker": {
        id: "059377e5-329e-443e-ba8c-5825c8f3b017",
        name: "Docker",
        href: "https://www.docker.com/",
        description: "Docker is a platform for containerization that allows developers to package applications together with all their dependencies into lightweight, portable containers. These containers run consistently across different environments, eliminating the “it works on my machine” problem.",
        icon: "docker",
        level: 4,
        keywords: ["microservices", "deployment", "containers", "ITWoM problem"]
    },
    "flask": {
        id: "be46daef-f17b-47a5-872e-803c49a8597e",
        name: "Flask",
        href: "https://flask.palletsprojects.com/en/stable/",
        description: " Flask is a lightweight Web Server Gateway Interface (WSGI) web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.",
        icon: "flask",
        level: 1,
        keywords: ["backend", "REST", "API", "python"]
    },
    "firebase": {
        id: "310752e4-08b2-4bc0-877a-be121528a1f6",
        name: "Firebase",
        href: "https://firebase.google.com/",
        description: `Firebase is a cloud-based platform for building mobile and web applications. It provides tools and services such as real-time databases, authentication, cloud storage, hosting, analytics, and push notifications.
                    It allows developers to rapidly build, deploy, and scale apps without managing backend infrastructure, making it ideal for prototypes and production-ready applications alike.`,
        icon: "firebase",
        level: 2,
        keywords: ["database", "real-time", "authentication"]
    },
    "threejs": {
        id: "5da295f3-d2a2-4a73-b612-83b44d6d372b",
        name: "ThreeJS",
        href: "https://threejs.org/docs/",
        description: `Three.js is a JavaScript 3D library that makes it easy to create and display 3D graphics in the browser using WebGL, without needing to write low-level graphics code.`,
        icon: "threejs",
        level: 3,
        keywords: ["3D graphics", "shaders", "Materials", "Objects", "3D Camera"]
    },
    "tailwind": {
        id: "02f65efc-5755-479d-8e5f-b36788eca402",
        name: "Tailwind",
        href: "https://tailwindcss.com/",
        description: `Tailwind CSS is a utility-first CSS framework that lets you style web applications by applying small, reusable classes directly in HTML instead of writing custom CSS rules.
                It emphasizes rapid development, consistency, and responsive design, allowing developers to build modern, visually appealing interfaces without leaving the markup.`,
        icon: "tailwind",
        level: 3,
        keywords: ["css", "style", "colors", "classes"]
    },
    "pokeApi": {
        id: "8bd4b617-be46-4b37-999f-37da674bf7b2",
        name: "Poke API",
        href: "https://pokeapi.co/",
        description: "An API for fetching Pokémon data",
        level: 3,
        dontShow: true,
        keywords: []
    },
    "faiss": {
        id: "9e21d5bb-3dc8-4f28-a3b2-45130de15ec7",
        name: "FAISS",
        href: "https://faiss.ai/",
        description: "Facebook AI Similarity Search — a vector database library designed for similarity search and clustering of dense vectors.",
        level: 1,
        keywords: ["vector indexing", "nearest neighbor search"]
    },
    "sentence-transformers": {
        id: "8b50b0c0-b835-4e14-990d-f4c6e6859e5a",
        name: "Sentence-Transformers",
        href: "https://python.langchain.com/docs/integrations/text_embedding/sentence_transformers/",
        description: "A Python framework for creating semantic embeddings from text using Transformer models like BERT or Re-ranking with CrossEncoders",
        level: 2,
        keywords: ["embeddings", "Semantic similarity", "NLP models"]
    },
    "langchain": {
        id: "2bca4de7-37fc-42d0-afa8-5813599eec4c",
        name: "LangChain",
        icon: "langchain",
        href: "https://www.langchain.com/",
        description: "A framework that helps build LLM-powered applications, connecting language models with data sources, tools, and memory.",
        level: 1,
        keywords: ["prompt chaining", "semantic chunking"]
    },
    "openaiapi": {
        id: "cdfa83a1-b178-48c3-8a60-8bb32f3fa4af",
        name: "OpenAI API",
        icon: "openai",
        href: "https://openai.com/api/",
        description: "The OpenAI API that provides access to GPT models for text generation, conversation, and reasoning.",
        level: 1,
        keywords: ["llm", "api", "text generation"]
    },
}

export type TechKey = keyof typeof techList

export function getTechnology(techKey: TechKey) {
    return techList[techKey]
}
