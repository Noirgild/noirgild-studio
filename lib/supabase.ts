import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const STORAGE_BUCKET = "deliverables";

/** Reads a secret and removes spaces, line breaks and invisible characters pasted by mistake. */
export function clean(value: string | undefined) {
  return (value || "").replace(/[\s\u200B-\u200D\uFEFF]/g, "");
}
export function env(name: string) {
  return clean(process.env[name]);
}


export function hasSupabase() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

/** Server-only client with full access. Never import this in a client component. */
export function supabaseAdmin() {
  return createClient(clean(process.env.NEXT_PUBLIC_SUPABASE_URL), env("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Client tied to the visitor's session (cookies). */
export function supabaseServer() {
  const store = cookies();
  return createServerClient(clean(process.env.NEXT_PUBLIC_SUPABASE_URL), clean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY), {
    cookies: {
      getAll() {
        return store.getAll();
      },
      setAll(list) {
        try {
          list.forEach(({ name, value, options }) => store.set(name, value, options));
        } catch {
          // called from a Server Component: safe to ignore
        }
      },
    },
  });
}

export async function getUser() {
  if (!hasSupabase()) return null;
  const { data } = await supabaseServer().auth.getUser();
  return data.user;
}

export function isAdminEmail(email?: string | null) {
  if (!email) return false;
  const list = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => clean(e).replace(/^["']|["']$/g, "").toLowerCase())
    .filter(Boolean);
  return list.includes(email.toLowerCase());
}
