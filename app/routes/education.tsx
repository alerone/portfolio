import type { Route } from "./+types/education";
import { EducationPage } from "@/features/education/EducationPage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Education - Portfolio" },
        {
            name: "description",
            content: "Academic background, completed studies and current postgraduate education.",
        },
    ];
}

export default function Education() {
    return <EducationPage />;
}
