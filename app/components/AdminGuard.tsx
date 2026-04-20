import { useAuthSession } from "@/hooks/useAuthSession";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

export function AdminGuard({ children }: { children: ReactNode }) {
    const { isLoading, isAuthenticated } = useAuthSession()
    const location = useLocation()

    if (isLoading) {
        return (
            <main className="container mx-auto w-full max-w-3xl px-4 py-10 text-white/70">
                Checking session...
            </main>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to="/admin/login"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

    return <>{children}</>;
}
