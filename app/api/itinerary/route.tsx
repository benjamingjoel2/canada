import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { itinerarySchema } from '@/lib/schemas';
import { getJourney } from '@/lib/content';
import { logLead } from '@/lib/leads';
import { plain } from '@/lib/l10n';
import { ItineraryDocument } from '@/lib/pdf/ItineraryDocument';

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

  const pdf = await renderToBuffer(<ItineraryDocument journey={journey} locale={locale} preparedFor={name} />);
  return new Response(new Uint8Array(pdf), {
    headers: {
      'content-type': 'application/pdf',
      'content-disposition': `attachment; filename="canada-travel-co-${journey.slug}-${locale}.pdf"`,
      'cache-control': 'no-store',
    },
  });
}
