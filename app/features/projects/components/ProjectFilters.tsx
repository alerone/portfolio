import type { ProjectStatus, Technology } from "@/content/content-types";

type ProjectFiltersProps = {
    status: string;
    technology: string;
    featuredOnly: boolean;
    statuses: ProjectStatus[];
    technologies: Technology[];
    resultCount: number;
    onStatusChange: (value: string) => void;
    onTechnologyChange: (value: string) => void;
    onFeaturedOnlyChange: (value: boolean) => void;
    onClear: () => void;
};

const statusLabel: Record<ProjectStatus, string> = {
    completed: "Finished",
    in_progress: "Work in progress",
    planned: "Planned",
};

export function ProjectFilters({
    status,
    technology,
    featuredOnly,
    statuses,
    technologies,
    resultCount,
    onStatusChange,
    onTechnologyChange,
    onFeaturedOnlyChange,
    onClear,
}: ProjectFiltersProps) {
    return (
        <section className="surface rounded-[28px] p-5 xl:p-6">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <p className="eyebrow">Browse</p>
                    <p className="text-sm text-white/60">
                        {resultCount} result{resultCount === 1 ? "" : "s"}
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_auto_auto] xl:items-end">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="status-filter" className="text-sm font-medium text-white/75">
                            Status
                        </label>
                        <select
                            id="status-filter"
                            value={status}
                            onChange={(e) => onStatusChange(e.target.value)}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="">All statuses</option>
                            {statuses.map((currentStatus) => (
                                <option key={currentStatus} value={currentStatus}>
                                    {statusLabel[currentStatus]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="technology-filter" className="text-sm font-medium text-white/75">
                            Technology
                        </label>
                        <select
                            id="technology-filter"
                            value={technology}
                            onChange={(e) => onTechnologyChange(e.target.value)}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                        >
                            <option value="">All technologies</option>
                            {technologies.map((tech) => (
                                <option key={tech.slug} value={tech.slug}>
                                    {tech.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <label className="inline-flex h-[50px] items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white/80">
                        <input
                            type="checkbox"
                            checked={featuredOnly}
                            onChange={(e) => onFeaturedOnlyChange(e.target.checked)}
                            className="rounded"
                        />
                        Featured only
                    </label>

                    <button
                        type="button"
                        onClick={onClear}
                        className="h-[50px] rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.08]"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </section>
    );
}
