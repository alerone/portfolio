import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";
import { signOut } from "@/lib/auth";
import { useNavigate } from "react-router";
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
        <section className="flex flex-col gap-6 pt-6 xl:pt-10 pb-10">
            <div className="surface rounded-[28px] p-5 xl:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="eyebrow mb-2">Private dashboard</p>
                        <h1 className="text-2xl font-bold tracking-tight text-white xl:text-4xl">
                            {title}
                        </h1>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link
                            to="/"
                            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/[0.08]"
                        >
                            Back to site
                        </Link>

                        <Button type="button" variant="secondary" onClick={handleSignOut}>
                            Sign out
                        </Button>
                    </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                    <AdminNavLink to="/admin" label="Overview" end />
                    <AdminNavLink to="/admin/projects" label="Projects" />
                    <AdminNavLink to="/admin/technologies" label="Technologies" />
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
                    "rounded-full px-4 py-2 text-sm font-medium transition",
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
