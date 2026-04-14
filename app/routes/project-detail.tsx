import { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import { getProjectBySlug } from "@/content/projects";
import { ProjectDetailPage } from "@/features/projects/ProjectDetailsPage";

export default function ProjectDetailRoute() {
    const { slug } = useParams();

    const project = useMemo(() => {
        if (!slug) return undefined;
        return getProjectBySlug(slug);
    }, [slug]);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return <ProjectDetailPage project={project} />;
}
