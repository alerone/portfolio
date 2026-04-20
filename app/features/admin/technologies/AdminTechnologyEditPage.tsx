import { Navigate, useNavigate, useParams } from "react-router";
import { TechnologyForm } from "./components/TechnologyForm";
import type { TechnologyFormValues } from "./schemas/technology-form.schema";
import { useAdminTechnology } from "@/hooks/useAdminTechnology";
import { updateTechnology } from "@/lib/api/admin-technologies";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminTechnologyEditPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { technology, isLoading, error } = useAdminTechnology(slug);

    if (!slug) {
        return <Navigate to="/admin/technologies" replace />;
    }

    async function handleSubmit(values: TechnologyFormValues) {
        const updated = await updateTechnology(slug, values);
        navigate(`/admin/technologies/${updated.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="Edit technology">
                {isLoading && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading technology...
                    </section>
                )}

                {error && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading technology: {error}
                    </section>
                )}

                {!isLoading && !error && !technology && (
                    <Navigate to="/admin/technologies" replace />
                )}

                {!isLoading && !error && technology && (
                    <TechnologyForm
                        initialTechnology={technology}
                        submitLabel="Save changes"
                        onSubmit={handleSubmit}
                    />
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
