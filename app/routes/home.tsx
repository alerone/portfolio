import type { Route } from "./+types/home";
import { Welcome } from "../features/welcome/welcome";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Portfolio Álvaro López" },
        { name: "description", content: "Welcome to my programming portfolio, a computer science developer." },
    ];
}

export default function Home() {
    return <Welcome />;
}
