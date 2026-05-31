import type { ReactNode } from "react";

type ResumeSectionProps = {
    title: string;
    children: ReactNode;
};

export function ResumeSection({ title, children }: ResumeSectionProps) {
    return (
        <section className="break-inside-avoid">
            <h3 className="mb-1 border-b border-[#345f82] pb-0.5 text-[14px] font-extrabold uppercase leading-none tracking-[0.04em] text-[#17466b]">
                {title}
            </h3>

            {children}
        </section>
    );
}
