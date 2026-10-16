import type { Locale } from '@/data/types';
import { journeys, specialists } from './content';
import { tr } from './l10n';
import type { MatchSpecialist } from '@/components/features/match/SpecialistMatch';

export function matchSpecialists(locale: Locale): MatchSpecialist[] {
  return specialists.map((s) => ({
    id: s.id,
    name: s.name,
    areas: s.areas,
    interests: s.interests,
    seasons: s.seasons,
    languages: s.languages,
    role: tr(s.role, locale),
    focus: tr(s.focus, locale),
    quote: tr(s.quote, locale),
    photo: s.photo,
    journeys: journeys
      .filter((j) => j.specialistId === s.id)
      .map((j) => ({ slug: j.slug, title: tr(j.title, locale), seasons: j.seasons })),
  }));
}
