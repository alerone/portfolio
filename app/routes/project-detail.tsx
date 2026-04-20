import { Navigate, useParams } from "react-router";
import { ProjectDetailPage } from "@/features/projects/ProjectDetailsPage";
import { useProjectDetail } from "@/features/projects/hooks/useProjectDetail";

export default function ProjectDetailRoute() {
    const { slug } = useParams();
    const { project, relatedProjects, isLoading, error } = useProjectDetail(slug)

    if (isLoading) {
        return (
            <main className="container mx-auto w-full max-w-3xl px-4 py-10 text-white/70">
                Loading project...
            </main>
        );
    }
    if (error) {
        return (
            <main className="container mx-auto w-full max-w-3xl px-4 py-10 text-rose-300">
                Error loading project: {error}
            </main>
        );
    }

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return <ProjectDetailPage project={project} relatedProjects={relatedProjects} />;
}
