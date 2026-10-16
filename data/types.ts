/**
 * Content types for Canada Travel Co.
 *
 * Every translatable string is an `L` ({ en, fr }). English is the source.
 * French is a machine-assisted draft until a native speaker approves it:
 * every record that carries French text has `frReview`, which stays
 * "needs-human-review" until someone signs it off. Run `npm run i18n:report`
 * to list everything still waiting.
 *
 * Italic emphasis in headings and titles is written inline as *word*.
 */

export type Locale = 'en' | 'fr';
export type ReviewStatus = 'needs-human-review' | 'approved';
export type L = { en: string; fr: string };
export type Reviewed = { frReview: ReviewStatus };
export type Season = 'summer' | 'winter';

/** Image slot. With no `src`, a styled placeholder renders from `subject` and `tone`. */
export type Img = {
  src?: string;
  alt: L;
  credit?: string;
  /** Short subject for the placeholder art, e.g. "Moraine Lake at dawn" */
  subject?: string;
  tone?: 'forest' | 'lake' | 'granite' | 'birch' | 'night' | 'snow' | 'autumn';
};

export type SeasonalImg = Record<Season, Img>;

// ── Geography ────────────────────────────────────────────────────────────────

export type ProvinceId =
  | 'british-columbia'
  | 'alberta'
  | 'yukon'
  | 'northwest-territories'
  | 'manitoba'
  | 'ontario'
  | 'quebec'
  | 'atlantic-canada'
  | 'nunavut';

/** Broad areas used by the Specialist match and calendar filters. */
export type Area = 'west' | 'north' | 'east';

export type Place = Reviewed & {
  id: string;
  name: L;
  provinceId: ProvinceId;
  lat: number;
  lng: number;
  /** false where you can't drive in from the rest of Canada (Churchill, Haida Gwaii, Iqaluit…) */
  roadAccess: boolean;
};

/** Editable travel time estimates. Distances are always calculated from coordinates. */
export type TravelTime = {
  from: string; // place id
  to: string; // place id
  flightMins?: number;
  /** Total realistic door-to-door flight time, including connections */
  flightNote?: L;
  driveMins?: number;
  driveNote?: L;
};

/** A world pair used for the playful comparison. Distance is calculated. */
export type WorldPair = Reviewed & {
  id: string;
  a: L;
  b: L;
  aCoords: [number, number];
  bCoords: [number, number];
  /** Prefer for this audience (e.g. European pairs for /fr) */
  audience?: 'europe' | 'americas' | 'oceania' | 'global';
};

export type Province = Reviewed & {
  id: ProvinceId;
  slug: string;
  name: L;
  area: Area;
  tagline: L;
  intro: L;
  pitch: { bestAt: L; notFor: L };
  hero: SeasonalImg;
  highlights: Record<Season, L[]>;
  /** Pair pre-selected in the distance tool on this province's page */
  distancePreset: [string, string];
  regionIds: string[];
  faqIds?: string[];
};

export type Region = Reviewed & {
  id: string;
  slug: string;
  provinceId: ProvinceId;
  name: L;
  summary: L;
  body: L;
  /** 1–12 */
  bestMonths: number[];
  images: SeasonalImg;
  highlights: Record<Season, L[]>;
  placeId?: string;
};

// ── Journeys & experiences ───────────────────────────────────────────────────

export type JourneyDay = { days: string; title: L; body: L; placeId?: string };

export type Journey = Reviewed & {
  id: string;
  slug: string;
  title: L;
  days: number;
  seasons: Season[];
  isNew?: boolean;
  /** CAD per person, guide price */
  fromPerPersonCAD: number;
  summary: L;
  intro: L;
  /** Honest note: how much travel, what it isn't */
  honestNote?: L;
  route: string[]; // place ids, in order
  itinerary: JourneyDay[];
  includes: L[];
  experienceIds: string[];
  stayIds: string[];
  eventIds: string[];
  regionIds: string[];
  provinceIds: ProvinceId[];
  specialistId: string;
  images: SeasonalImg;
};

export type ExperienceGroup = 'classics' | 'wild' | 'quietly-luxurious';

export type ExperienceGroupInfo = Reviewed & {
  id: ExperienceGroup;
  slug: string;
  title: L;
  intro: L;
  image: Img;
};

export type Experience = Reviewed & {
  id: string;
  slug: string;
  group: ExperienceGroup;
  title: L;
  summary: L;
  body: L;
  seasons: Season[];
  image: Img;
  journeyIds: string[];
  regionIds: string[];
};

// ── Wild Calendar ────────────────────────────────────────────────────────────

export type WildEventType = 'wildlife' | 'light' | 'landscape';

export type WildEvent = Reviewed & {
  id: string;
  title: L;
  type: WildEventType;
  provinceIds: ProvinceId[];
  regionIds: string[];
  /** Months it can happen, 1–12 */
  months: number[];
  /** Months it's at its best, 1–12 */
  peak?: number[];
  summary: L;
  /** Every event is seasonal and moves a little each year. */
  verifyYearly: true;
  journeyIds: string[];
};

// ── People & trust ───────────────────────────────────────────────────────────

export type Interest = 'wildlife' | 'landscapes' | 'food-cities' | 'comfort' | 'adventure';

export type Specialist = Reviewed & {
  id: string;
  name: string;
  role: L;
  focus: L;
  areas: (Area | 'all')[];
  /** 0–3, how strongly this person fits each interest */
  interests: Record<Interest, number>;
  seasons: Season[];
  quote: L;
  bio: L;
  photo: Img;
  languages: string[];
  placeholder: true;
};

export type Stay = Reviewed & {
  id: string;
  slug: string;
  name: string;
  regionId: string;
  provinceId: ProvinceId;
  style: L;
  summary: L;
  body: L;
  seasons: Season[];
  images: Img[];
  placeholder: true;
};

export type Testimonial = Reviewed & {
  id: string;
  quote: L;
  who: L;
  /** ISO 3166-1 alpha-2, for the flag */
  country: string;
  journeyId?: string;
  placeholder: true;
};

export type FaqCategory = 'how-we-work' | 'planning' | 'practical';

export type Faq = Reviewed & {
  id: string;
  category: FaqCategory;
  q: L;
  a: L;
  /** Facts that must be checked against an official source before launch */
  verify?: string;
  onHome?: boolean;
};

export type PressItem = { id: string; name: string; quote: L; placeholder: true };

export type Story = {
  slug: string;
  title: L;
  excerpt: L;
  date: string;
  readMins: number;
  image: Img;
  tags: string[];
  frReview: ReviewStatus;
};
