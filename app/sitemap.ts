import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { routing } from '@/i18n/routing';
import { experiences, experienceGroups, journeys, provinces, regionsOf, stays } from '@/lib/content';
import { storySlugs } from '@/lib/stories';

/** Every page in every locale, each with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/journeys',
    '/destinations',
    '/experiences',
    '/stays',
    '/wild-calendar',
    '/find-your-specialist',
    '/indigenous-canada',
    '/about',
    '/about/team',
    '/about/testimonials',
    '/stories',
    '/faq',
    '/contact',
    ...journeys.map((j) => `/journeys/${j.slug}`),
    ...provinces.flatMap((p) => [`/destinations/${p.slug}`, ...regionsOf(p.id).map((r) => `/destinations/${p.slug}/${r.slug}`)]),
    ...experienceGroups.map((g) => `/experiences/${g.slug}`),
    ...experiences.map((e) => `/experiences/${e.group}/${e.slug}`),
    ...stays.map((s) => `/stays/${s.slug}`),
    ...storySlugs.map((s) => `/stories/${s}`),
  ];
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(routing.locales.map((l) => [l, `${site.url}/${l}${path}`])) },
    })),
  );
}
