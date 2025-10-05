import type { Project } from "./types";

export const projectList: Record<string, Project> = {
    valenMove: {
        id: "f72895b4-d224-479c-ab76-d2728c156eaf",
        name: "ValenMove",
        githubHref: "https://github.com/alerone/EMTSearch/tree/master",
        summary: "For my thesis, I designed and developed a mobile application to enhance the public transport experience in Valencia.",
        description: "This project is a android application made to make Valencia's public transport experience better by joining metrovalencia, valenbisi and EMT (bus) in one single app. The application uses open data from the Valencia city hall.",
        image: "images/valenMove.jpg",
        technologies: ["kotlin", "openDataValencia", "hilt", "android"],
        status: "Finished"
    },
    pokedexGo: {
        id: "5394c2d3-a1e7-4a3c-a11f-0feae9a766a2",
        name: "Pokédex with Golang",
        githubHref: "https://github.com/alerone/pokedex-go",
        summary: "A simple and interactive Terminal-based Pokedex written in Go.",
        description: "A simple and interactive terminal-based Pokedex written in Go. This application communicates with the PokeAPI to fetch Pokémon data, locations, and other relevant information. It provides a command-line interface to explore the Pokémon world and build your own Pokedex!",
        image: "images/pokedex-go.jpg",
        technologies: ["pokeApi", "go"],
        status: "Finished"
    },
    faasGo: {
        id: "08d45bc3-15cf-493b-8e89-76b027ad0a13",
        name: "FaaS with Golang",
        githubHref: "https://github.com/alerone/FaaS-with-golang",
        summary: "FaaS platform made with Golang. It's purpose is to execute functions serverless as Docker containers in a scalable way.",
        description: `This project is a serverless Functions-as-a-Service (FaaS) platform built in Go, leveraging Docker and NATS for scalable function execution.
                It features a modular architecture with an API server for user and function management, 
                a worker layer to execute containerized functions, and Apache Apisix as a reverse proxy for routing and authentication.
                Users can register, manage, and execute custom Docker-based functions, with JWT-based security and configurable worker scalability, enabling a lightweight, distributed, and extensible serverless environment.`,
        image: "images/faas-go.jpg",
        technologies: ["go", "apisix", "nats", "docker"],
        status: "Finished"
    },
    httpFromTcp: {
        id: "d4c925dc-177b-436d-ad0d-d89b359b11e1",
        name: "HTTP from TCP",
        githubHref: "https://github.com/alerone/httpfromtcp",
        summary: "This is a project from a course in Boot.dev for learning about HTTP. It's a small implementation of the HyperText Transfer Protocol/1.1.",
        description: "This is an implementation of HTTP/1.1. The features in the project are: Parsing HTTP responses, Generation of HTTP responses, Basic HTTP server creation, support for 3 status codes (200, 400, 500), basic connections (not keep-alive), transfer chunked encoding, and many more",
        image: "images/httpfromtcp.jpg",
        technologies: ["go"],
        status: "Finished"
    },
    rocketsweeper: {
        id: "9d64abab-1a5c-4531-89a3-95f41648769a",
        name: "RocketSweeper",
        githubHref: "https://github.com/alerone/alerone.github.io",
        image: "images/rocketsweeper.jpg",
        webHref: "https://alerone.github.io/rocketsweeper",
        summary: "This is a Master's project Game based on Minesweeper but in Space with 3D graphics.",
        description: "This is a project made to learn about ThreeJS and 3D objects. The main part of the project is a minesweeper game set in the space.",
        technologies: ["threejs"],
        status: "Finished"
    },
    oauthrse: {
        id: "2e4291b8-483d-433a-b2eb-459d5e4391ec",
        name: "OAuth RSE",
        githubHref: "https://github.com/alerone/OAuthRSE",
        summary: "This project is an implementation of a task application with OAuth 2.0 as the authentication method.",
        description: "This project is an implementation of a task application with OAuth 2.0 as the authentication method. The application utilices docker to launch the database with the task application. In this project you can authenticate yourself via Google authentication. The authenticated user can use some features of Google like Google Drive.",
        technologies: ["python", "oauth", "flask"],
        status: "Finished"
    },
    limpieza: {
        id: "a0173d61-bbb5-4186-a52d-4118c0dc791f",
        name: "Limpieza del piso",
        githubHref: "https://github.com/alerone/limpieza",
        webHref: "https://limpiezapiso-cb761.web.app/",
        summary: "This project is a web application to manage the cleaning tasks of me and my roommates.",
        description: "This project is an implementation of a task application with OAuth 2.0 as the authentication method. The application utilices docker to launch the database with the task application. In this project you can authenticate yourself via Google authentication. The authenticated user can use some features of Google like Google Drive.",
        technologies: ["react", "firebase", "oauth", "github", "tailwind"],
        status: "Future work"
    },
    goInterpreter: {
        id: "c3022a46-c2dd-48be-8aeb-e28c2b314dbd",
        name: "Making an Interpreter in Go",
        githubHref: "https://github.com/alerone/interpreter",
        summary: "This is a interpreter made in Go of an invented language based on the book 'Writing an Interpreter in Go' by Thorsten Bell",
        description: `Programming languages are made from Compilers and interpreters, the interpreter takes source code and evaluates it producing some visible, intermediate result that can be later executed. The compilers produce an output in another language that the underlying system can understand.The intepreter is a mix of a lexer, a parser and a evaluator.
            Lexer The lexer takes the source code and tokenizes it, so the language knows if the current token is a '=', a identifier, a digit,... it only "marks" the text for later being parsed.
            Parser This parser is a tree-walking parser. The parser creates a Abstract Syntax Tree (AST). It's called abstract because some details visible in the source code are omitted in the AST (semicolons, spaces, newlines,...). This parser is a top down operator precedence parser, sometimes called "Pratt parser", after its inventor Vaughan Pratt. This parser makes learning about making an interpreter something fun! 🥳🎉
            Evaluator What makes a programming language come to life from source code is a good Evaluator. When the interpreter walks by the parsing tree it evaluates every node thanks to the evaluator so an integer returns an Object.Integer, an expression, a statement is evaluated and so on. The evaluator makes the source code execute and return objects from the object system of the programming language.`,
        technologies: ["go"],
        status: "Finished"
    },
    ragcourse: {
        id: "cb46cf44-4479-442d-9345-8c5fe3b01b88",
        name: "RAG Course – Building Retrieval-Augmented Generation Systems",
        githubHref: "https://github.com/alerone/rag-course",
        image: "images/rag-course.jpg",
        summary: "This repository contains the complete code and lessons from a hands-on RAG (Retrieval-Augmented Generation) course, developed step by step with the assistance of ChatGPT.",
        description: ``,
        technologies: ["python", "faiss", "sentence-transformers", "langchain", "openaiapi"],
        status: "Finished"
    }
}
