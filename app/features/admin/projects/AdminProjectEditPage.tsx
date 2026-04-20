import { useNavigate, useParams } from "react-router";
import { Navigate } from "react-router";
import { AdminProjectForm } from "./components/AdminProjectForm";
import type { ProjectFormValues } from "./schemas/project-form.schema";
import { useAdminProject } from "@/hooks/useAdminProject";
import { updateProject } from "@/lib/api/admin-projects";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminProjectEditPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { project, isLoading, error } = useAdminProject(slug);

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
                {isLoading && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading project...
                    </section>
                )}

                {error && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading project: {error}
                    </section>
                )}

                {!isLoading && !error && !project && <Navigate to="/admin/projects" replace />}

                {!isLoading && !error && project && (
                    <AdminProjectForm
                        initialProject={project}
                        submitLabel="Save changes"
                        onSubmit={handleSubmit}
                    />
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
