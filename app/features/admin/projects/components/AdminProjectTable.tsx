import { Link } from "react-router";
import type { Project } from "@/content/content-types";

export function AdminProjectsTable({ projects }: { projects: Project[] }) {
    return (
        <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.04] text-white/65">
                    <tr>
                        <th className="px-4 py-3 font-medium">Name</th>
                        <th className="px-4 py-3 font-medium">Status</th>
                        <th className="px-4 py-3 font-medium">Featured</th>
                        <th className="px-4 py-3 font-medium">Slug</th>
                        <th className="px-4 py-3 font-medium">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {projects.map((project) => (
                        <tr
                            key={project.slug}
                            className="border-t border-white/10 text-white/80"
                        >
                            <td className="px-4 py-3">{project.name}</td>
                            <td className="px-4 py-3">{project.status}</td>
                            <td className="px-4 py-3">{project.featured ? "Yes" : "No"}</td>
                            <td className="px-4 py-3">{project.slug}</td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <Link
                                        to={`/admin/projects/${project.slug}/edit`}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                                    >
                                        View
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
