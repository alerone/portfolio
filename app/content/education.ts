import { type EducationItem } from "./content-types"
export const education: EducationItem[] = [
    {
        slug: "carrera-upv",
        title: "Grado en Ingeniería Informática",
        institution: "Polytechnic University of Valencia",
        institutionUrl: "https://www.upv.es/entidades/etsinf/en/home-4/",
        institutionIcon: "upv",
        dateStart: "2020-09-30",
        dateEnd: "2024-09-30",
        grade: "8.9 / 10",
        description: `
In my first years at UPV, I focused on the basics of engineering, including mathematics, logic, and programming. I learned how hardware and operating systems work, as well as the fundamentals of data structures and networks. This part of the degree gave me a general understanding of how computer systems are built and managed from a technical perspective.\n

I later decided to specialize in Software Engineering. In this track, I learned how to handle the full development process of large applications, from initial design and requirements to testing and maintenance. The focus is on using systematic methods to ensure software is reliable and efficient, preparing me to work on professional development projects.
`,
        honors: ["Programación", "Lenguajes, Tecnologías y Paradigmas de la Programación", "Teoría de Autómatas y Lenguajes Formales", "Arquitectura e Ingeniería de Computadores", "Desarrollo de Software Dirigido por Modelos", "Métodos Formales Industriales", "Análisis y Especificación de Requisitos", "Desarrollo de Aplicaciones para Dispositivos Móviles", "Mantenimiento y Evolución del Software", "Análisis, Validación y Depuración del Software"],
        highlights: ["Final Degree Project: ValenMove", "Strong focus on Software Engineering and practical development"],
        status: "completed",
    },
    {
        slug: "master-upv",
        title: "Máster Universitario en Ingeniería Informática",
        institution: "Polytechnic University of Valencia",
        institutionUrl: "https://www.upv.es/estudios/master/muiinf/",
        institutionIcon: "upv",
        dateStart: "2024-10-01",
        description: `
In the MUIINF master's at UPV, I have moved toward more advanced technical areas like **distributed systems** and **high-performance computing**. I am learning how to design architectures that can handle massive amounts of data and how to optimize processes to run efficiently on clusters or specialized hardware. This level of study focuses on scalability and the management of complex infrastructures that go beyond standard software development.

I am also focusing on **cybersecurity** and **embedded systems** to understand how to protect these environments and integrate software with specific hardware. This involves learning about security protocols, risk management, and the development of real-time systems for industrial or specialized applications. The goal is to gain the expertise needed to manage and secure modern, interconnected computing platforms.
`,
        honors: ["Sistemas Empotrados y Ubicuos", "Redes y Seguridad"],
        status: "in_progress",
    },
]
