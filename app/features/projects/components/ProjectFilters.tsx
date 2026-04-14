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
        <section className="w-full xl:max-w-lg 2xl:max-w-xl px-2 mb-6">
            <div className="bg-primary-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1 flex-1">
                        <label htmlFor="status-filter" className="text-sm font-semibold text-white">
                            Status
                        </label>
                        <select
                            id="status-filter"
                            value={status}
                            onChange={(e) => onStatusChange(e.target.value)}
                            className="rounded-lg px-3 py-2 bg-primary-700 text-white border border-primary-600"
                        >
                            <option value="">All statuses</option>
                            {statuses.map((currentStatus) => (
                                <option key={currentStatus} value={currentStatus}>
                                    {statusLabel[currentStatus]}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1 flex-1">
                        <label htmlFor="technology-filter" className="text-sm font-semibold text-white">
                            Technology
                        </label>
                        <select
                            id="technology-filter"
                            value={technology}
                            onChange={(e) => onTechnologyChange(e.target.value)}
                            className="rounded-lg px-3 py-2 bg-primary-700 text-white border border-primary-600"
                        >
                            <option value="">All technologies</option>
                            {technologies.map((tech) => (
                                <option key={tech.slug} value={tech.slug}>
                                    {tech.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <label className="inline-flex items-center gap-2 text-white">
                        <input
                            type="checkbox"
                            checked={featuredOnly}
                            onChange={(e) => onFeaturedOnlyChange(e.target.checked)}
                            className="rounded"
                        />
                        Featured only
                    </label>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-white opacity-80">
                            {resultCount} result{resultCount === 1 ? "" : "s"}
                        </span>

                        <button
                            type="button"
                            onClick={onClear}
                            className="px-3 py-2 rounded-lg bg-primary-600 hover:bg-primary-500 transition-colors text-white text-sm font-medium"
                        >
                            Clear filters
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
