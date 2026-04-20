import { useNavigate, useParams } from "react-router";
import { Navigate } from "react-router";
import { AdminProjectForm } from "./components/AdminProjectForm";
import type { ProjectFormValues } from "./schemas/project-form.schema";
import { useAdminProject } from "@/hooks/useAdminProject";
import { updateProject } from "@/lib/api/admin-projects";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";
import { useTechnologies } from "@/hooks/useTechnologies";

export function AdminProjectEditPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { project, isLoading, error } = useAdminProject(slug);
    const {
        technologies,
        isLoading: technologiesLoading,
        error: technologiesError,
    } = useTechnologies();

    if (!slug) {
        return <Navigate to="/admin/projects" replace />;
    }

    async function handleSubmit(values: ProjectFormValues) {
        const updated = await updateProject(slug!!, values);
        navigate(`/admin/projects/${updated.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="Edit project">
                {(isLoading || technologiesLoading) && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading project...
                    </section>
                )}

                {(error || technologiesError) && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading data: {error ?? technologiesError}
                    </section>
                )}

                {!isLoading && !technologiesLoading && !error && !technologiesError && !project && (
                    <Navigate to="/admin/projects" replace />
                )}

                {!isLoading && !technologiesLoading && !error && !technologiesError && project && (
                    <AdminProjectForm
                        initialProject={project}
                        technologiesCatalog={technologies}
                        submitLabel="Save changes"
                        onSubmit={handleSubmit}
                    />
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
