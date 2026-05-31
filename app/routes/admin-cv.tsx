import type { Route } from "./+types/admin-cv";
import { AdminResumePage } from "@/features/admin/resume/AdminResumePage";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "CV - Admin" },
        {
            name: "description",
            content: "Admin preview for the generated CV.",
        },
    ];
}

export default function AdminCvRoute() {
    return <AdminResumePage />;
}
