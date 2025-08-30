import { TechnologiesPage } from "~/features/technologies/TechnologiesPage";
import type { Route } from "./+types/technologies";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Technologies - Portfolio" },
        { name: "technologies", content: "All the technologies I know!" },
    ];
}

export default function Technologies() {
    return <TechnologiesPage />
}
