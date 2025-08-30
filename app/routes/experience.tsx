import type { Route } from "./+types/projects";
import { ExperiencePage } from "~/features/experience/ExperiencePage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Experience - Portfolio" },
        { name: "experience", content: "All the jobs I've done so far!" },
    ];
}

export default function Experiences() {
    return <ExperiencePage />
}

