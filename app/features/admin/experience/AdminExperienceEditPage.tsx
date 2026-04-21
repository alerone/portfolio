import { Navigate, useNavigate, useParams } from "react-router";
import { ExperienceForm } from "./components/ExperienceForm";
import type { ExperienceFormValues } from "./schemas/experience-form.schema";
import { useAdminExperience } from "@/hooks/useAdminExperience";
import { updateExperience } from "@/lib/api/admin-experience";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminExperienceEditPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { experience, isLoading, error } = useAdminExperience(slug);

    if (!slug) {
        return <Navigate to="/admin/experience" replace />;
    }

    async function handleSubmit(values: ExperienceFormValues) {
        const item = await updateExperience(slug, values);
        navigate(`/admin/experience/${item.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="Edit experience">
                {isLoading && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading experience...
                    </section>
                )}

                {error && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading experience: {error}
                    </section>
                )}

                {!isLoading && !error && !experience && (
                    <Navigate to="/admin/experience" replace />
                )}

                {!isLoading && !error && experience && (
                    <ExperienceForm
                        initialExperience={experience}
                        submitLabel="Save changes"
                        onSubmit={handleSubmit}
                    />
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
