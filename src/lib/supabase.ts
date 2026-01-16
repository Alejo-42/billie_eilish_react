import { createClient } from "@supabase/supabase-js";

const supaBaseUrl = import.meta.env.VITE_SUPABASE_URL
const supaBaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supaBase = createClient(supaBaseUrl, supaBaseKey)