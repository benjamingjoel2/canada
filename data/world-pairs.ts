import type { WorldPair } from './types';

/**
 * Familiar city pairs for the "Canada is bigger than you think" comparison.
 * Coordinates are [lat, lng] for city centres. Distances are calculated, never stored.
 * Rough great-circle distances are noted for orientation only.
 */
export const worldPairs: WorldPair[] = [
  // ── Europe ─────────────────────────────────────────────────────────────────
  { id: 'paris-rouen', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Rouen', fr: 'Rouen' }, aCoords: [48.8566, 2.3522], bCoords: [49.4432, 1.0999], audience: 'europe', frReview: 'needs-human-review' }, // ~110 km
  { id: 'brussels-amsterdam', a: { en: 'Brussels', fr: 'Bruxelles' }, b: { en: 'Amsterdam', fr: 'Amsterdam' }, aCoords: [50.8503, 4.3517], bCoords: [52.3676, 4.9041], audience: 'europe', frReview: 'needs-human-review' }, // ~175 km
  { id: 'geneva-zurich', a: { en: 'Geneva', fr: 'Genève' }, b: { en: 'Zurich', fr: 'Zurich' }, aCoords: [46.2044, 6.1432], bCoords: [47.3769, 8.5417], audience: 'europe', frReview: 'needs-human-review' }, // ~225 km
  { id: 'paris-brussels', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Brussels', fr: 'Bruxelles' }, aCoords: [48.8566, 2.3522], bCoords: [50.8503, 4.3517], audience: 'europe', frReview: 'needs-human-review' }, // ~265 km
  { id: 'paris-london', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'London', fr: 'Londres' }, aCoords: [48.8566, 2.3522], bCoords: [51.5074, -0.1278], audience: 'europe', frReview: 'needs-human-review' }, // ~345 km
  { id: 'london-edinburgh', a: { en: 'London', fr: 'Londres' }, b: { en: 'Edinburgh', fr: 'Édimbourg' }, aCoords: [51.5074, -0.1278], bCoords: [55.9533, -3.1883], audience: 'europe', frReview: 'needs-human-review' }, // ~535 km
  { id: 'brussels-geneva', a: { en: 'Brussels', fr: 'Bruxelles' }, b: { en: 'Geneva', fr: 'Genève' }, aCoords: [50.8503, 4.3517], bCoords: [46.2044, 6.1432], audience: 'europe', frReview: 'needs-human-review' }, // ~535 km
  { id: 'paris-marseille', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Marseille', fr: 'Marseille' }, aCoords: [48.8566, 2.3522], bCoords: [43.2965, 5.3698], audience: 'europe', frReview: 'needs-human-review' }, // ~660 km
  { id: 'paris-rome', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Rome', fr: 'Rome' }, aCoords: [48.8566, 2.3522], bCoords: [41.9028, 12.4964], audience: 'europe', frReview: 'needs-human-review' }, // ~1,105 km
  { id: 'geneva-lisbon', a: { en: 'Geneva', fr: 'Genève' }, b: { en: 'Lisbon', fr: 'Lisbonne' }, aCoords: [46.2044, 6.1432], bCoords: [38.7223, -9.1393], audience: 'europe', frReview: 'needs-human-review' }, // ~1,500 km
  { id: 'london-istanbul', a: { en: 'London', fr: 'Londres' }, b: { en: 'Istanbul', fr: 'Istanbul' }, aCoords: [51.5074, -0.1278], bCoords: [41.0082, 28.9784], audience: 'europe', frReview: 'needs-human-review' }, // ~2,500 km
  { id: 'paris-moscow', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Moscow', fr: 'Moscou' }, aCoords: [48.8566, 2.3522], bCoords: [55.7558, 37.6173], audience: 'europe', frReview: 'needs-human-review' }, // ~2,490 km
  { id: 'madrid-stockholm', a: { en: 'Madrid', fr: 'Madrid' }, b: { en: 'Stockholm', fr: 'Stockholm' }, aCoords: [40.4168, -3.7038], bCoords: [59.3293, 18.0686], audience: 'europe', frReview: 'needs-human-review' }, // ~2,590 km
  { id: 'lisbon-helsinki', a: { en: 'Lisbon', fr: 'Lisbonne' }, b: { en: 'Helsinki', fr: 'Helsinki' }, aCoords: [38.7223, -9.1393], bCoords: [60.1699, 24.9384], audience: 'europe', frReview: 'needs-human-review' }, // ~3,360 km
  { id: 'london-cairo', a: { en: 'London', fr: 'Londres' }, b: { en: 'Cairo', fr: 'Le Caire' }, aCoords: [51.5074, -0.1278], bCoords: [30.0444, 31.2357], audience: 'europe', frReview: 'needs-human-review' }, // ~3,510 km
  { id: 'lisbon-moscow', a: { en: 'Lisbon', fr: 'Lisbonne' }, b: { en: 'Moscow', fr: 'Moscou' }, aCoords: [38.7223, -9.1393], bCoords: [55.7558, 37.6173], audience: 'europe', frReview: 'needs-human-review' }, // ~3,900 km
  { id: 'paris-dakar', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Dakar', fr: 'Dakar' }, aCoords: [48.8566, 2.3522], bCoords: [14.7167, -17.4677], audience: 'europe', frReview: 'needs-human-review' }, // ~4,200 km

  // ── Americas ───────────────────────────────────────────────────────────────
  { id: 'new-york-boston', a: { en: 'New York', fr: 'New York' }, b: { en: 'Boston', fr: 'Boston' }, aCoords: [40.7128, -74.006], bCoords: [42.3601, -71.0589], audience: 'americas', frReview: 'needs-human-review' }, // ~305 km
  { id: 'new-york-miami', a: { en: 'New York', fr: 'New York' }, b: { en: 'Miami', fr: 'Miami' }, aCoords: [40.7128, -74.006], bCoords: [25.7617, -80.1918], audience: 'americas', frReview: 'needs-human-review' }, // ~1,760 km
  { id: 'los-angeles-chicago', a: { en: 'Los Angeles', fr: 'Los Angeles' }, b: { en: 'Chicago', fr: 'Chicago' }, aCoords: [34.0522, -118.2437], bCoords: [41.8781, -87.6298], audience: 'americas', frReview: 'needs-human-review' }, // ~2,800 km
  { id: 'mexico-city-new-york', a: { en: 'Mexico City', fr: 'Mexico' }, b: { en: 'New York', fr: 'New York' }, aCoords: [19.4326, -99.1332], bCoords: [40.7128, -74.006], audience: 'americas', frReview: 'needs-human-review' }, // ~3,360 km
  { id: 'new-york-los-angeles', a: { en: 'New York', fr: 'New York' }, b: { en: 'Los Angeles', fr: 'Los Angeles' }, aCoords: [40.7128, -74.006], bCoords: [34.0522, -118.2437], audience: 'americas', frReview: 'needs-human-review' }, // ~3,940 km

  // ── Oceania ────────────────────────────────────────────────────────────────
  { id: 'sydney-melbourne', a: { en: 'Sydney', fr: 'Sydney' }, b: { en: 'Melbourne', fr: 'Melbourne' }, aCoords: [-33.8688, 151.2093], bCoords: [-37.8136, 144.9631], audience: 'oceania', frReview: 'needs-human-review' }, // ~715 km
  { id: 'auckland-sydney', a: { en: 'Auckland', fr: 'Auckland' }, b: { en: 'Sydney', fr: 'Sydney' }, aCoords: [-36.8485, 174.7633], bCoords: [-33.8688, 151.2093], audience: 'oceania', frReview: 'needs-human-review' }, // ~2,160 km
  { id: 'sydney-perth', a: { en: 'Sydney', fr: 'Sydney' }, b: { en: 'Perth', fr: 'Perth' }, aCoords: [-33.8688, 151.2093], bCoords: [-31.9523, 115.8613], audience: 'oceania', frReview: 'needs-human-review' }, // ~3,290 km
  { id: 'perth-auckland', a: { en: 'Perth', fr: 'Perth' }, b: { en: 'Auckland', fr: 'Auckland' }, aCoords: [-31.9523, 115.8613], bCoords: [-36.8485, 174.7633], audience: 'oceania', frReview: 'needs-human-review' }, // ~5,370 km
  { id: 'sydney-singapore', a: { en: 'Sydney', fr: 'Sydney' }, b: { en: 'Singapore', fr: 'Singapour' }, aCoords: [-33.8688, 151.2093], bCoords: [1.3521, 103.8198], audience: 'oceania', frReview: 'needs-human-review' }, // ~6,300 km

  // ── Global ─────────────────────────────────────────────────────────────────
  { id: 'london-dubai', a: { en: 'London', fr: 'Londres' }, b: { en: 'Dubai', fr: 'Dubaï' }, aCoords: [51.5074, -0.1278], bCoords: [25.2048, 55.2708], audience: 'global', frReview: 'needs-human-review' }, // ~5,470 km
  { id: 'london-new-york', a: { en: 'London', fr: 'Londres' }, b: { en: 'New York', fr: 'New York' }, aCoords: [51.5074, -0.1278], bCoords: [40.7128, -74.006], audience: 'global', frReview: 'needs-human-review' }, // ~5,570 km
  { id: 'paris-new-york', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'New York', fr: 'New York' }, aCoords: [48.8566, 2.3522], bCoords: [40.7128, -74.006], audience: 'global', frReview: 'needs-human-review' }, // ~5,840 km
  { id: 'paris-nairobi', a: { en: 'Paris', fr: 'Paris' }, b: { en: 'Nairobi', fr: 'Nairobi' }, aCoords: [48.8566, 2.3522], bCoords: [-1.2921, 36.8219], audience: 'global', frReview: 'needs-human-review' }, // ~6,480 km
  { id: 'london-delhi', a: { en: 'London', fr: 'Londres' }, b: { en: 'Delhi', fr: 'Delhi' }, aCoords: [51.5074, -0.1278], bCoords: [28.6139, 77.209], audience: 'global', frReview: 'needs-human-review' }, // ~6,710 km
];
