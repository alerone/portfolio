import { supabase } from "@/lib/supabase";
import type { User, Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function useAuthSession() {
    const [session, setSession] = useState<Session | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let mounted = true
        async function load() {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (!mounted) return;

            setSession(session);
            setUser(session?.user ?? null);
            setIsLoading(false);
        }

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setIsLoading(false);
        });


        load()

        return () => {
            mounted = false
            subscription.unsubscribe();
        }
    }, [])

    return {
        session,
        user,
        isLoading,
        isAuthenticated: Boolean(session?.user)
    }
}
