import { useNavigate } from "react-router";
import { TechnologyForm } from "./components/TechnologyForm";
import type { TechnologyFormValues } from "./schemas/technology-form.schema";
import { createTechnology } from "@/lib/api/admin-technologies";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminTechnologyCreatePage() {
    const navigate = useNavigate();

    async function handleSubmit(values: TechnologyFormValues) {
        const technology = await createTechnology(values);
        navigate(`/admin/technologies/${technology.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="New technology">
                <TechnologyForm
                    submitLabel="Create technology"
                    onSubmit={handleSubmit}
                />
            </AdminLayout>
        </AdminGuard>
    );
}
