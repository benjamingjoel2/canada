import { provinces, regions, experienceGroups, experiences, journeys } from '@/lib/content';
import type { Img, Locale } from '@/data/types';
import { tr } from './l10n';

/** Compact, serialisable navigation model for the client header (keeps long content out of the bundle). */
export type NavModel = {
  provinces: { slug: string; name: string; tagline: string; image: Img; regions: { slug: string; name: string }[] }[];
  experienceGroups: { slug: string; title: string; items: { slug: string; title: string }[] }[];
  featuredJourneys: { slug: string; title: string; days: number; image: Img; seasons: string[] }[];
};

export function buildNav(locale: Locale): NavModel {
  return {
    provinces: provinces.map((p) => ({
      slug: p.slug,
      name: tr(p.name, locale),
      tagline: tr(p.tagline, locale),
      image: p.hero.summer,
      regions: p.regionIds
        .map((id) => regions.find((r) => r.id === id))
        .filter((r) => r !== undefined)
        .map((r) => ({ slug: r.slug, name: tr(r.name, locale) })),
    })),
    experienceGroups: experienceGroups.map((g) => ({
      slug: g.slug,
      title: tr(g.title, locale),
      items: experiences
        .filter((e) => e.group === g.id)
        .map((e) => ({ slug: e.slug, title: tr(e.title, locale) })),
    })),
    featuredJourneys: journeys.slice(0, 8).map((j) => ({
      slug: j.slug,
      title: tr(j.title, locale),
      days: j.days,
      image: j.images.summer,
      seasons: j.seasons,
    })),
  };
}
