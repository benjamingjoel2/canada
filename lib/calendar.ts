import type { Area, Locale } from '@/data/types';
import { getProvince, getRegion, journeysForEvent, wildEvents } from './content';
import { tr } from './l10n';
import type { CalendarEvent } from '@/components/features/calendar/WildCalendar';

export function calendarEvents(locale: Locale): CalendarEvent[] {
  return wildEvents.map((e) => ({
    id: e.id,
    title: tr(e.title, locale),
    summary: tr(e.summary, locale),
    type: e.type,
    months: e.months,
    peak: e.peak ?? [],
    areas: [...new Set(e.provinceIds.map((p) => getProvince(p)?.area).filter((a): a is Area => !!a))],
    provinceIds: e.provinceIds,
    places: e.regionIds
      .map((r) => getRegion(r))
      .filter((r) => r !== undefined)
      .map((r) => tr(r.name, locale))
      .join(' · ') || e.provinceIds.map((p) => (getProvince(p) ? tr(getProvince(p)!.name, locale) : p)).join(' · '),
    journeys: journeysForEvent(e.id).map((j) => ({ slug: j.slug, title: tr(j.title, locale) })),
  }));
}
