import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/schemas';
import { logLead } from '@/lib/leads';

export async function POST(req: Request) {
  const parsed = newsletterSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  // TODO: CRM / email platform integration (double opt-in).
  await logLead('newsletter', { email: parsed.data.email, locale: parsed.data.locale });
  return NextResponse.json({ ok: true });
}
