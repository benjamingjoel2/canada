import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/schemas';
import { getJourney } from '@/lib/content';
import { logLead } from '@/lib/leads';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.issues.map((i) => i.path.join('.')) }, { status: 400 });
  }
  const enquiry = { ...parsed.data };
  delete enquiry.company; // honeypot field, always empty for real people
  const journey = enquiry.journeyId ? getJourney(enquiry.journeyId) : undefined;
  // TODO: CRM integration — create a contact + deal, route to enquiry.specialistId, send confirmation email.
  await logLead('enquiry', { ...enquiry, journeyName: journey?.title.en.replace(/\*/g, '') });
  return NextResponse.json({ ok: true });
}
