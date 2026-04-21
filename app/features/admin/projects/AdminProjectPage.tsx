import { Link } from "react-router";
import type { Project } from "@/content/content-types";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";
import { AdminCollectionLayout } from "../AdminCollectionLayout";
import { AdminResponsiveList } from "../AdminResponseList";
import { AdminProjectsTable } from "./components/AdminProjectTable";
import { useProjects } from "@/features/projects/hooks/useProjects";

export function AdminProjectsPage() {
    const { projects, isLoading, error } = useProjects();

    return (
        <AdminGuard>
            <AdminLayout title="Projects">
                <AdminCollectionLayout
                    title="Projects list"
                    action={
                        <Link
                            to="/admin/projects/new"
                            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                        >
                            New project
                        </Link>
                    }
                >
                    {isLoading && (
                        <p className="text-sm text-white/65">Loading projects...</p>
                    )}

                    {error && (
                        <p className="text-sm text-rose-300">Error loading projects: {error}</p>
                    )}

                    {!isLoading && !error && (
                        <AdminResponsiveList
                            items={projects}
                            getKey={(project) => project.slug}
                            renderMobileCard={(project) => <ProjectMobileCard project={project} />}
                            renderDesktopTable={() => <AdminProjectsTable projects={projects} />}
                        />
                    )}
                </AdminCollectionLayout>
            </AdminLayout>
        </AdminGuard>
    );
}

function ProjectMobileCard({ project }: { project: Project }) {
    return (
        <article className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">{project.name}</h3>
                        <p className="mt-1 text-xs text-white/50">{project.slug}</p>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/70">
                        {project.status}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                        Featured: {project.featured ? "Yes" : "No"}
                    </span>
                </div>

                <div className="flex gap-2">
                    <Link
                        to={`/admin/projects/${project.slug}/edit`}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 text-xs text-white/75"
                    >
                        Edit
                    </Link>

                    <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex min-h-10 flex-1 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 text-xs text-white/75"
                    >
                        View
                    </Link>
                </div>
            </div>
        </article>
    );
}
