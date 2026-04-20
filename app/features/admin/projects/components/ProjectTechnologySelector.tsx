import type { Technology } from "@/content/content-types";

type ProjectTechnologySelectorProps = {
    title: string;
    description?: string;
    technologies: Technology[];
    selectedSlugs: string[] | undefined;
    onToggle: (slug: string) => void;
};

export function ProjectTechnologySelector({
    title,
    description,
    technologies,
    selectedSlugs,
    onToggle,
}: ProjectTechnologySelectorProps) {
    return (
        <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                {description && (
                    <p className="mt-1 text-xs text-white/55">{description}</p>
                )}
            </div>

            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
                {technologies.map((technology) => {
                    const checked = selectedSlugs!.includes(technology.slug);

                    return (
                        <label
                            key={technology.slug}
                            className={[
                                "flex items-center gap-3 rounded-2xl border px-3 py-3 text-sm transition",
                                checked
                                    ? "border-white/30 bg-white/[0.08] text-white"
                                    : "border-white/10 bg-white/[0.02] text-white/72 hover:bg-white/[0.05]",
                            ].join(" ")}
                        >
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => onToggle(technology.slug)}
                            />
                            <span>{technology.name}</span>
                        </label>
                    );
                })}
            </div>
        </section>
    );
}
