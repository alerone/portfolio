import { useNavigate } from "react-router";
import { AdminProjectForm } from "./components/AdminProjectForm";
import type { ProjectFormValues } from "./schemas/project-form.schema";
import { createProject } from "@/lib/api/admin-projects";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";
import { useTechnologies } from "@/hooks/useTechnologies";

export function AdminProjectCreatePage() {
    const navigate = useNavigate();
    const { technologies, isLoading, error } = useTechnologies();

    async function handleSubmit(values: ProjectFormValues) {
        const project = await createProject(values);
        navigate(`/admin/projects/${project.slug}/edit`, { replace: true });
    }
    return (
        <AdminGuard>
            <AdminLayout title="New project">
                {isLoading && (
                    <section className="surface rounded-[28px] p-5 text-white/70">
                        Loading technologies...
                    </section>
                )}

                {error && (
                    <section className="surface rounded-[28px] p-5 text-rose-300">
                        Error loading technologies: {error}
                    </section>
                )}

                {!isLoading && !error && (
                    <AdminProjectForm
                        technologiesCatalog={technologies}
                        submitLabel="Create project"
                        onSubmit={handleSubmit}
                    />
                )}
            </AdminLayout>
        </AdminGuard>
    );
}
