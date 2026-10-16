import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // hreflang is emitted in page metadata (lib/seo.ts), not as Link headers.
  alternateLinks: false,
});
