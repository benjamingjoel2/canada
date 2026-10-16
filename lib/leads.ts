export type LeadKind = 'enquiry' | 'itinerary-download' | 'newsletter';

/**
 * Logs a lead. This is the single place to connect a CRM.
 * TODO: CRM integration — send `payload` to the CRM (e.g. HubSpot/Salesforce) and an email notification.
 */
export async function logLead(kind: LeadKind, payload: Record<string, unknown>) {
  const entry = { kind, receivedAt: new Date().toISOString(), ...payload };
  console.log(`[lead:${kind}]`, JSON.stringify(entry));
  return entry;
}
