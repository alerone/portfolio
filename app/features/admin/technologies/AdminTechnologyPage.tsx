import { Link } from "react-router";
import { useTechnologies } from "@/hooks/useTechnologies";
import { getLogo } from "@/resources/logos";
import { Icon } from "@/components/Icon";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";

export function AdminTechnologiesPage() {
    const { technologies, isLoading, error } = useTechnologies();

    return (
        <AdminGuard>
            <AdminLayout title="Technologies">
                <section className="surface rounded-[28px] p-5 xl:p-6">
                    <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                            <p className="eyebrow mb-2">Content</p>
                            <h2 className="text-xl font-semibold tracking-tight text-white">
                                Technologies list
                            </h2>
                        </div>

                        <Link
                            to="/admin/technologies/new"
                            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                        >
                            New technology
                        </Link>
                    </div>

                    {isLoading && <p className="text-sm text-white/65">Loading technologies...</p>}
                    {error && <p className="text-sm text-rose-300">Error loading technologies: {error}</p>}

                    {!isLoading && !error && (
                        <div className="overflow-hidden rounded-2xl border border-white/10">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white/[0.04] text-white/65">
                                    <tr>
                                        <th className="px-4 py-3 font-medium">Name</th>
                                        <th className="px-4 py-3 font-medium">Slug</th>
                                        <th className="px-4 py-3 font-medium">Level</th>
                                        <th className="px-4 py-3 font-medium">Visible</th>
                                        <th className="px-4 py-3 font-medium">Icon</th>
                                        <th className="px-4 py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {technologies.map((technology) => {
                                        const logo = technology.icon ? getLogo(technology.icon) : undefined;

                                        return (
                                            <tr
                                                key={technology.slug}
                                                className="border-t border-white/10 text-white/80"
                                            >
                                                <td className="px-4 py-3">{technology.name}</td>
                                                <td className="px-4 py-3">{technology.slug}</td>
                                                <td className="px-4 py-3">{technology.level}</td>
                                                <td className="px-4 py-3">{technology.visible ? "Yes" : "No"}</td>
                                                <td className="px-4 py-3">
                                                    {logo ? (
                                                        <Icon icon={logo} height={18} width={18} />
                                                    ) : (
                                                        <span className="text-white/40">—</span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-3">
                                                    <Link
                                                        to={`/admin/technologies/${technology.slug}/edit`}
                                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 transition hover:bg-white/[0.08] hover:text-white"
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </section>
            </AdminLayout>
        </AdminGuard>
    );
}
