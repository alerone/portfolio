import type {
    ProjectRole,
    ProjectStatus,
    Technology,
} from "@/content/content-types";

type ProjectFiltersProps = {
    status: string;
    language: string;
    technology: string;
    role: string;
    featuredOnly: boolean;
    statuses: ProjectStatus[];
    languages: Technology[];
    technologies: Technology[];
    roles: ProjectRole[];
    resultCount: number;
    hasActiveFilters: boolean;
    onStatusChange: (value: string) => void;
    onLanguageChange: (value: string) => void;
    onTechnologyChange: (value: string) => void;
    onRoleChange: (value: string) => void;
    onFeaturedOnlyChange: (value: boolean) => void;
    onClear: () => void;
};

const statusLabel: Record<ProjectStatus, string> = {
    completed: "Finished",
    in_progress: "Work in progress",
    planned: "Planned",
};

const roleLabel: Record<ProjectRole, string> = {
    personal: "Personal",
    academic: "Academic",
    tfg: "TFG",
    tfm: "TFM",
    course: "Course",
    internship: "Internship",
    team: "Team",
};

export function ProjectFilters({
    status,
    language,
    technology,
    role,
    featuredOnly,
    statuses,
    languages,
    technologies,
    roles,
    resultCount,
    hasActiveFilters,
    onStatusChange,
    onLanguageChange,
    onTechnologyChange,
    onRoleChange,
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

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <FilterSelect
                        id="status-filter"
                        label="Status"
                        value={status}
                        onChange={onStatusChange}
                    >
                        <option value="">All statuses</option>
                        {statuses.map((currentStatus) => (
                            <option key={currentStatus} value={currentStatus}>
                                {statusLabel[currentStatus]}
                            </option>
                        ))}
                    </FilterSelect>

                    <FilterSelect
                        id="language-filter"
                        label="Language"
                        value={language}
                        onChange={onLanguageChange}
                    >
                        <option value="">All languages</option>
                        {languages.map((tech) => (
                            <option key={tech.slug} value={tech.slug}>
                                {tech.name}
                            </option>
                        ))}
                    </FilterSelect>

                    <FilterSelect
                        id="technology-filter"
                        label="Technology"
                        value={technology}
                        onChange={onTechnologyChange}
                    >
                        <option value="">All technologies</option>
                        {technologies.map((tech) => (
                            <option key={tech.slug} value={tech.slug}>
                                {tech.name}
                            </option>
                        ))}
                    </FilterSelect>

                    <FilterSelect
                        id="role-filter"
                        label="Role"
                        value={role}
                        onChange={onRoleChange}
                    >
                        <option value="">All roles</option>
                        {roles.map((currentRole) => (
                            <option key={currentRole} value={currentRole}>
                                {roleLabel[currentRole]}
                            </option>
                        ))}
                    </FilterSelect>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <label className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm text-white/80">
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
                        disabled={!hasActiveFilters}
                        className={[
                            "inline-flex h-10 items-center rounded-full border border-white/10 px-4 text-sm font-medium transition",
                            hasActiveFilters
                                ? "bg-white/[0.04] text-white/80 hover:bg-white/[0.08]"
                                : "cursor-not-allowed bg-white/[0.02] text-white/30",
                        ].join(" ")}
                    >
                        Clear
                    </button>
                </div>
            </div>
        </section>
    );
}

function FilterSelect({
    id,
    label,
    value,
    onChange,
    children,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-sm font-medium text-white/75">
                {label}
            </label>

            <select
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
            >
                {children}
            </select>
        </div>
    );
}
