import { useNavigate } from "react-router";
import { EducationForm } from "./components/EducationForm";
import type { EducationFormValues } from "./schemas/education-form.schema";
import { createEducation } from "@/lib/api/admin-education";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminEducationCreatePage() {
    const navigate = useNavigate();

    async function handleSubmit(values: EducationFormValues) {
        const item = await createEducation(values);
        navigate(`/admin/education/${item.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="New education">
                <EducationForm
                    submitLabel="Create education"
                    onSubmit={handleSubmit}
                />
            </AdminLayout>
        </AdminGuard>
    );
}
