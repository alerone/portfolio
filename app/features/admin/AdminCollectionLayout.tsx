import type { ReactNode } from "react";

type AdminCollectionLayoutProps = {
    eyebrow?: string;
    title: string;
    action?: ReactNode;
    children: ReactNode;
};

export function AdminCollectionLayout({
    eyebrow = "Content",
    title,
    action,
    children,
}: AdminCollectionLayoutProps) {
    return (
        <section className="surface rounded-[24px] p-4 md:rounded-[28px] md:p-5 xl:p-6">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="eyebrow mb-2">{eyebrow}</p>
                    <h2 className="text-xl font-semibold tracking-tight text-white">
                        {title}
                    </h2>
                </div>

                {action && <div className="sm:shrink-0">{action}</div>}
            </div>

            {children}
        </section>
    );
}
