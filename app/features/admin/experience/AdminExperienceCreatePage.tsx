import { useNavigate } from "react-router";
import { ExperienceForm } from "./components/ExperienceForm";
import type { ExperienceFormValues } from "./schemas/experience-form.schema";
import { createExperience } from "@/lib/api/admin-experience";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminExperienceCreatePage() {
    const navigate = useNavigate();

    async function handleSubmit(values: ExperienceFormValues) {
        const item = await createExperience(values);
        navigate(`/admin/experience/${item.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="New experience">
                <ExperienceForm
                    submitLabel="Create experience"
                    onSubmit={handleSubmit}
                />
            </AdminLayout>
        </AdminGuard>
    );
}
