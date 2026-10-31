'use client';

// Renders the itinerary PDF in the browser. Loaded on demand by the itinerary modal, so
// @react-pdf/renderer is neither in the first page load nor in the server bundle (which keeps
// the Cloudflare Worker under the 3 MiB Free-plan limit).
import { pdf } from '@react-pdf/renderer';
import type { Locale } from '@/data/types';
import { getJourney } from '@/lib/content';
import { ItineraryDocument } from './ItineraryDocument';

export async function renderItinerary(journeyId: string, locale: Locale, preparedFor: string): Promise<Blob> {
  const journey = getJourney(journeyId);
  if (!journey) throw new Error(`Unknown journey ${journeyId}`);
  return pdf(<ItineraryDocument journey={journey} locale={locale} preparedFor={preparedFor} />).toBlob();
}
