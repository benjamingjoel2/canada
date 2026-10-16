import { provinces } from '@/data/provinces';
import { regions } from '@/data/regions';
import { journeys } from '@/data/journeys';
import { experiences, experienceGroups } from '@/data/experiences';
import { stays } from '@/data/stays';
import { wildEvents } from '@/data/wild-events';
import { specialists } from '@/data/specialists';
import type { ExperienceGroup, ProvinceId, Season } from '@/data/types';

export const getProvince = (slug: string) => provinces.find((p) => p.slug === slug || p.id === slug);
export const getRegion = (id: string) => regions.find((r) => r.id === id || r.slug === id);
export const regionsOf = (provinceId: ProvinceId) =>
  (getProvince(provinceId)?.regionIds ?? []).map(getRegion).filter((r) => r !== undefined);
export const getJourney = (id: string) => journeys.find((j) => j.id === id || j.slug === id);
export const getExperience = (id: string) => experiences.find((e) => e.id === id || e.slug === id);
export const getExperienceGroup = (id: ExperienceGroup | string) => experienceGroups.find((g) => g.id === id || g.slug === id);
export const experiencesIn = (group: ExperienceGroup) => experiences.filter((e) => e.group === group);
export const getStay = (id: string) => stays.find((s) => s.id === id || s.slug === id);
export const getSpecialist = (id: string) => specialists.find((s) => s.id === id);
export const getEvent = (id: string) => wildEvents.find((e) => e.id === id);

export const journeysInProvince = (provinceId: ProvinceId) => journeys.filter((j) => j.provinceIds.includes(provinceId));
export const journeysInRegion = (regionId: string) => journeys.filter((j) => j.regionIds.includes(regionId));
export const staysInProvince = (provinceId: ProvinceId) => stays.filter((s) => s.provinceId === provinceId);
export const staysInRegion = (regionId: string) => stays.filter((s) => s.regionId === regionId);
export const eventsInProvince = (provinceId: ProvinceId) => wildEvents.filter((e) => e.provinceIds.includes(provinceId));
export const eventsInRegion = (regionId: string) => wildEvents.filter((e) => e.regionIds.includes(regionId));
export const journeysForEvent = (eventId: string) => {
  const ev = getEvent(eventId);
  const ids = new Set([...(ev?.journeyIds ?? []), ...journeys.filter((j) => j.eventIds.includes(eventId)).map((j) => j.id)]);
  return journeys.filter((j) => ids.has(j.id));
};
export const journeysForExperience = (experienceId: string) => {
  const ex = getExperience(experienceId);
  const ids = new Set([...(ex?.journeyIds ?? []), ...journeys.filter((j) => j.experienceIds.includes(experienceId)).map((j) => j.id)]);
  return journeys.filter((j) => ids.has(j.id));
};

/** Journeys for a season first, the rest after. */
export const journeysBySeason = (season: Season) => [
  ...journeys.filter((j) => j.seasons.includes(season)),
  ...journeys.filter((j) => !j.seasons.includes(season)),
];

export { provinces, regions, journeys, experiences, experienceGroups, stays, wildEvents, specialists };
