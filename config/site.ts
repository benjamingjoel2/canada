/** Brand settings. */
export const site = {
  name: 'Canada Travel Co.',
  tagline: { en: 'Canada, made for you.', fr: 'Le Canada, fait pour vous.', de: "Kanada, für Sie gemacht.", es: "Canadá, hecho para usted." },
  /** Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is live. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://canadatravelco.tourground.com',
  /** One address for the brand. No phone, WhatsApp, social links or licence numbers (owner's decision). */
  contact: {
    email: 'canadatravelco@tourground.com',
    hours: { en: 'Mon–Fri, 8am–5pm Pacific', fr: 'Lun–ven, 8 h – 17 h (heure du Pacifique)', de: "Mo–Fr, 8–17 Uhr pazifische Zeit", es: "Lun–vie, 8:00–17:00, hora del Pacífico" },
  },
  /** Business address: Workhaus coworking, Financial District, Toronto (workhaus.ca/toronto). */
  address: {
    lines: ['Canada Travel Co.', '181 University Avenue', 'Toronto, ON', 'Canada'],
    street: '181 University Avenue',
    locality: 'Toronto',
    region: 'ON',
    country: 'CA',
  },
} as const;

/** French strings in this file (tagline, hours) are drafts. */
export const siteFrReview = { id: 'config-site', frReview: 'needs-human-review' as const };
