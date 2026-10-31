import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr', 'de', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Owner rule: no automatic redirects by browser language; / goes to English.
  localeDetection: false,
  // hreflang is emitted in page metadata (lib/seo.ts), not as Link headers.
  alternateLinks: false,
});
