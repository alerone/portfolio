import type { ReactNode } from "react";

type PageProps = {
    headerTitle: string;
    children: ReactNode;
    className?: string;
    eyebrow?: string;
    description?: string;
};

export function Page({
    headerTitle,
    children,
    className,
    eyebrow,
    description,
}: PageProps) {
    return (
        <section className="flex flex-col items-center gap-8 pt-6 xl:pt-10">
            <header className="w-full max-w-3xl text-center">
                {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}

                <h1 className="text-3xl font-bold tracking-tight text-white xl:text-5xl">
                    {headerTitle}
                </h1>

                {description && (
                    <p className="mt-4 text-sm xl:text-base text-white/68 max-w-2xl mx-auto">
                        {description}
                    </p>
                )}
            </header>

            <div className={`w-full ${className ?? ""}`}>
                {children}
            </div>
        </section>
    );
}
