/** Brand settings. Everything marked PLACEHOLDER must be replaced before launch. */
export const site = {
  name: 'Canada Travel Co.',
  tagline: { en: 'Canada, made for you.', fr: 'Le Canada, fait pour vous.' },
  /** Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is live. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://canadatravel.example',
  contact: {
    phone: '+1 (604) 555-0142', // PLACEHOLDER
    phoneHref: 'tel:+16045550142',
    email: 'hello@canadatravel.example', // PLACEHOLDER
    whatsapp: '+1 604 555 0142', // PLACEHOLDER
    hours: { en: 'Mon–Fri, 8am–5pm Pacific', fr: 'Lun–ven, 8 h – 17 h (heure du Pacifique)' },
  },
  address: {
    // PLACEHOLDER
    lines: ['Canada Travel Co. Ltd.', '000 Placeholder Street, Suite 100', 'Vancouver, BC V6B 0A0', 'Canada'],
  },
  /** PLACEHOLDER — provincial travel seller registration. Use the one(s) that apply. */
  registration: [
    { en: 'Consumer Protection BC travel agent licence #00000 (placeholder)', fr: 'Licence d’agent de voyages Consumer Protection BC no 00000 (exemple)' },
    { en: 'TICO registration #00000000 (placeholder)', fr: 'Inscription TICO no 00000000 (exemple)' },
    { en: 'Office de la protection du consommateur (OPC) permit #000000 (placeholder)', fr: 'Permis de l’Office de la protection du consommateur (OPC) no 000000 (exemple)' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/' },
    { name: 'YouTube', href: 'https://youtube.com/' },
    { name: 'LinkedIn', href: 'https://linkedin.com/' },
    { name: 'Facebook', href: 'https://facebook.com/' },
  ],
} as const;
