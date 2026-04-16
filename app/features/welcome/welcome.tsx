import { ThreeDMe } from "@/components/3DMe";
import { useGetRandomBoolean } from "@/hooks/useGetRandomBoolean";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { Link } from "react-router";

export function Welcome() {
    const random = useGetRandomBoolean();
    const isDesktop = useIsDesktop();

    return (
        <section className="flex flex-col items-center pt-6 xl:pt-10">
            <div className="w-full max-w-4xl">
                <div className="surface rounded-[28px] px-6 py-7 xl:px-8 xl:py-8">
                    <div className="flex items-center gap-6 xl:grid-cols-[minmax(0,1fr)_190px]">
                        <div className="min-w-0">
                            <p className="eyebrow mb-3">Computer Science · Portfolio</p>

                            <h1 className="max-w-2xl text-2xl font-bold tracking-tight text-white xl:text-4xl">
                                Álvaro López Álvarez
                            </h1>

                            <p className="mt-3 text-sm text-white/72 xl:text-base">
                                Computer Science graduate currently pursuing a Master’s in Computer Engineering.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm xl:text-base text-white/70">
                                I enjoy building software that feels clean, useful and technically honest.
                                Most of my work comes from learning by building: backend services, experimental
                                tools, mobile apps and product-oriented side projects.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">
                                <Link
                                    to="/projects"
                                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition hover:opacity-90"
                                >
                                    View projects
                                </Link>
                                <Link
                                    to="/technologies"
                                    className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/85 transition hover:bg-white/[0.08]"
                                >
                                    Explore stack
                                </Link>
                            </div>
                        </div>

                        {isDesktop && (
                            <div className="flex items-center justify-center">
                                {random ? (
                                    <ThreeDMe action="lookAt" lookAt="right" />
                                ) : (
                                    <ThreeDMe jump />
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                    <InfoCard
                        label="Focus"
                        value="Backend, systems and product-minded development"
                    />
                    <InfoCard
                        label="Currently learning"
                        value="Distributed systems, AI workflows and cleaner UI design"
                    />
                    <InfoCard
                        label="Based in"
                        value="Valencia, Spain"
                    />
                </div>
            </div>
        </section>
    );
}

function InfoCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="surface rounded-2xl p-4 text-center">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">{label}</p>
            <p className="mt-2 text-sm text-white/82">{value}</p>
        </div>
    );
}
