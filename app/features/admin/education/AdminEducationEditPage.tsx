import { Navigate, useNavigate, useParams } from "react-router";
import { EducationForm } from "./components/EducationForm";
import type { EducationFormValues } from "./schemas/education-form.schema";
import { useAdminEducation } from "@/hooks/useAdminEducation";
import { updateEducation } from "@/lib/api/admin-education";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminEducationEditPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { education, isLoading, error } = useAdminEducation(slug);

    if (!slug) {
        return <Navigate to="/admin/education" replace />;
    }

    async function handleSubmit(values: EducationFormValues) {
        const item = await updateEducation(slug!, values);
        navigate(`/admin/education/${item.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="Edit education">
                {isLoading && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading education...
                    </section>
                )}

                {error && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading education: {error}
                    </section>
                )}

                {!isLoading && !error && !education && (
                    <Navigate to="/admin/education" replace />
                )}

                {!isLoading && !error && education && (
                    <EducationForm
                        initialEducation={education}
                        submitLabel="Save changes"
                        onSubmit={handleSubmit}
                    />
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
