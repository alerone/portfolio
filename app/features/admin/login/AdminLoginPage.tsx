import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Page } from "@/components/Page";
import { signInWithPassword } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export function AdminLoginPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const redirectTo =
        (location.state as { from?: string } | null)?.from ?? "/admin";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            setIsSubmitting(true);
            setError(null);

            await signInWithPassword(email, password);
            navigate(redirectTo, { replace: true });
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login failed");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Page
            eyebrow="Private area"
            headerTitle="Admin login"
            description="Sign in to manage portfolio content."
            className="flex justify-center pb-10"
        >
            <section className="surface w-full max-w-md rounded-[28px] p-6 xl:p-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/75">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-white/75">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none"
                            required
                        />
                    </div>

                    {error && (
                        <div className="rounded-2xl border border-rose-400/20 bg-rose-300/[0.08] px-4 py-3 text-sm text-rose-200">
                            {error}
                        </div>
                    )}

                    <Button type="submit" size="lg" className="mt-2">
                        {isSubmitting ? "Signing in..." : "Sign in"}
                    </Button>
                </form>
            </section>
        </Page>
    );
}
