import { Link } from "react-router";
import { useEducation } from "@/hooks/useEducation";
import { getLogo } from "@/resources/logos";
import { Icon } from "@/components/Icon";
import type { EducationItem } from "@/content/content-types";
import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "../AdminLayout";
import { AdminCollectionLayout } from "../AdminCollectionLayout";
import { AdminResponsiveList } from "../AdminResponseList";

export function AdminEducationPage() {
    const { education, isLoading, error } = useEducation();

    return (
        <AdminGuard>
            <AdminLayout title="Education">
                <AdminCollectionLayout
                    title="Education list"
                    action={
                        <Link
                            to="/admin/education/new"
                            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                        >
                            New education
                        </Link>
                    }
                >
                    {isLoading && <p className="text-sm text-white/65">Loading education...</p>}
                    {error && <p className="text-sm text-rose-300">Error loading education: {error}</p>}

                    {!isLoading && !error && (
                        <AdminResponsiveList
                            items={education}
                            getKey={(item) => item.slug}
                            renderMobileCard={(item) => <EducationMobileCard item={item} />}
                            renderDesktopTable={() => (
                                <div className="overflow-hidden rounded-2xl border border-white/10">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-white/[0.04] text-white/65">
                                            <tr>
                                                <th className="px-4 py-3 font-medium">Title</th>
                                                <th className="px-4 py-3 font-medium">Institution</th>
                                                <th className="px-4 py-3 font-medium">Status</th>
                                                <th className="px-4 py-3 font-medium">Icon</th>
                                                <th className="px-4 py-3 font-medium">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {education.map((item) => {
                                                const logo = item.institutionIcon ? getLogo(item.institutionIcon) : undefined;

                                                return (
                                                    <tr
                                                        key={item.slug}
                                                        className="border-t border-white/10 text-white/80"
                                                    >
                                                        <td className="px-4 py-3">{item.title}</td>
                                                        <td className="px-4 py-3">{item.institution}</td>
                                                        <td className="px-4 py-3">{item.status}</td>
                                                        <td className="px-4 py-3">
                                                            {logo ? <Icon icon={logo} height={60} width={60} /> : "—"}
                                                        </td>
                                                        <td className="px-4 py-3">
                                                            <Link
                                                                to={`/admin/education/${item.slug}/edit`}
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
                        />
                    )}
                </AdminCollectionLayout>
            </AdminLayout>
        </AdminGuard>
    );
}

function EducationMobileCard({ item }: { item: EducationItem }) {
    const logo = item.institutionIcon ? getLogo(item.institutionIcon) : undefined;

    return (
        <article className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-xs text-white/50">{item.institution}</p>
                    </div>

                    {logo ? <Icon icon={logo} height={60} width={60} /> : null}
                </div>

                <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1">
                        {item.status}
                    </span>
                </div>

                <Link
                    to={`/admin/education/${item.slug}/edit`}
                    className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 text-xs text-white/75"
                >
                    Edit
                </Link>
            </div>
        </article>
    );
}
