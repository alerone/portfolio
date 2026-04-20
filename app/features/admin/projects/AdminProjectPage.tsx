import { AdminGuard } from "@/components/AdminGuard";
import { Link } from "react-router";
import { AdminLayout } from "../AdminLayout";
import { AdminProjectsTable } from "./components/AdminProjectTable";
import { useProjects } from "@/features/projects/hooks/useProjects";

export function AdminProjectsPage() {
    const { projects, isLoading, error } = useProjects();

    return (
        <AdminGuard>
            <AdminLayout title="Projects">
                <section className="surface rounded-[28px] p-5 xl:p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                            <p className="eyebrow mb-2">Content</p>
                            <h2 className="text-xl font-semibold tracking-tight text-white">
                                Projects list
                            </h2>
                        </div>

                        <Link
                            to="/admin/projects/new"
                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                        >
                            New project
                        </Link>
                    </div>

                    {isLoading && (
                        <p className="text-sm text-white/65">Loading projects...</p>
                    )}

                    {error && (
                        <p className="text-sm text-rose-300">Error loading projects: {error}</p>
                    )}

                    {!isLoading && !error && <AdminProjectsTable projects={projects} />}
                </section>
            </AdminLayout>
        </AdminGuard>
    );
}
