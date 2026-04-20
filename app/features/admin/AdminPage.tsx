import { AdminGuard } from "@/components/AdminGuard";
import { AdminLayout } from "./AdminLayout";

export function AdminPage() {
    return (
        <AdminGuard>
            <AdminLayout title="Admin">
                <section className="grid gap-4 md:grid-cols-2">
                    <article className="surface rounded-[24px] p-5">
                        <h2 className="text-lg font-semibold text-white">Projects</h2>
                        <p className="mt-2 text-sm text-white/70">
                            Manage portfolio projects, featured status, links, screenshots and stack.
                        </p>
                    </article>

                    <article className="surface rounded-[24px] p-5">
                        <h2 className="text-lg font-semibold text-white">Next steps</h2>
                        <p className="mt-2 text-sm text-white/70">
                            We’ll add create/edit forms next, then technologies, experience and education.
                        </p>
                    </article>
                </section>
            </AdminLayout>
        </AdminGuard>
    );
}
