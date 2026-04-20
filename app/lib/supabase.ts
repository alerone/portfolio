import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "@/config";

if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error("Missing supabase environment variables")
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
