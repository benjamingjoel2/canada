import { NextResponse } from 'next/server';
import { itinerarySchema } from '@/lib/schemas';
import { getJourney } from '@/lib/content';
import { logLead } from '@/lib/leads';
import { plain } from '@/lib/l10n';

export async function POST(req: Request) {
  const parsed = itinerarySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  const { journeyId, name, email, country, locale } = parsed.data;
  const journey = getJourney(journeyId);
  if (!journey) return NextResponse.json({ ok: false }, { status: 404 });

  // TODO: CRM integration — record the download against the contact.
  await logLead('itinerary-download', {
    journeyId,
    journeyName: plain(journey.title.en),
    name,
    email,
    country,
    locale,
  });

  // The PDF itself is rendered in the browser (lib/pdf/render-client.tsx); this route validates
  // the request, records the lead and names the file.
  return NextResponse.json(
    { ok: true, fileName: `canada-travel-co-${journey.slug}-${locale}.pdf` },
    { headers: { 'cache-control': 'no-store' } },
  );
}
