import { NextResponse } from "next/server";
import { getUser, isAdminEmail } from "@/lib/supabase";

export const dynamic = "force-dynamic";

/** Temporary check: shows what the site reads in ADMIN_EMAILS (an email address, not a secret). */
export async function GET() {
  const raw = process.env.ADMIN_EMAILS;
  const user = await getUser().catch(() => null);
  return NextResponse.json({
    admin_emails_set: raw !== undefined,
    admin_emails_value: raw === undefined ? null : JSON.stringify(raw),
    admin_emails_length: raw?.length ?? 0,
    logged_in_as: user?.email ?? null,
    is_admin: isAdminEmail(user?.email),
    vercel_env: process.env.VERCEL_ENV ?? null,
  });
}
