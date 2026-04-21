import type { ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export function AdminLayout({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    const navigate = useNavigate();

    async function handleSignOut() {
        await signOut();
        navigate("/admin/login", { replace: true });
    }

    return (
        <section className="flex flex-col gap-5 pt-4 pb-8 md:pt-6 xl:pt-10">
            <div className="surface rounded-[24px] p-4 md:rounded-[28px] md:p-5 xl:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0">
                        <p className="eyebrow mb-2">Private dashboard</p>
                        <h1 className="text-2xl font-bold tracking-tight text-white xl:text-4xl">
                            {title}
                        </h1>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:justify-end">
                        <Link
                            to="/"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.08]"
                        >
                            Back to site
                        </Link>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleSignOut}
                            className="min-h-11"
                        >
                            Sign out
                        </Button>
                    </div>
                </div>

                <div className="mt-5 -mx-1 overflow-x-auto scrollbar-hide">
                    <div className="flex min-w-max gap-2 px-1">
                        <AdminNavLink to="/admin" label="Overview" end />
                        <AdminNavLink to="/admin/projects" label="Projects" />
                        <AdminNavLink to="/admin/technologies" label="Technologies" />
                        <AdminNavLink to="/admin/experience" label="Experience" />
                    </div>
                </div>
            </div>

            {children}
        </section>
    );
}

function AdminNavLink({
    to,
    label,
    end,
}: {
    to: string;
    label: string;
    end?: boolean;
}) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                [
                    "inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-medium whitespace-nowrap transition",
                    isActive
                        ? "bg-white text-neutral-950"
                        : "border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/[0.08] hover:text-white",
                ].join(" ")
            }
        >
            {label}
        </NavLink>
    );
}
