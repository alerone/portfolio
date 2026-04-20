import { useNavigate } from "react-router";
import { AdminProjectForm } from "./components/AdminProjectForm";
import type { ProjectFormValues } from "./schemas/project-form.schema";
import { createProject } from "@/lib/api/admin-projects";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminProjectCreatePage() {
    const navigate = useNavigate();

    async function handleSubmit(values: ProjectFormValues) {
        const project = await createProject(values);
        navigate(`/admin/projects/${project.slug}/edit`, { replace: true });
    }

    return (
        <AdminGuard>
            <AdminLayout title="New project">
                <AdminProjectForm
                    submitLabel="Create project"
                    onSubmit={handleSubmit}
                />
            </AdminLayout>
        </AdminGuard>
    );
}
