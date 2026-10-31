import type { Place } from './types';

/**
 * Places used by the distance tool and journey routes.
 * Coordinates are town centres (or the usual gateway for parks), to 4 decimals.
 * roadAccess is false only where you can't drive in from the rest of Canada.
 */
export const places: Place[] = [
  // British Columbia
  { id: 'vancouver', name: { en: 'Vancouver', fr: 'Vancouver', de: "Vancouver", es: "Vancouver" }, provinceId: 'british-columbia', lat: 49.2827, lng: -123.1207, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'victoria', name: { en: 'Victoria', fr: 'Victoria', de: "Victoria", es: "Victoria" }, provinceId: 'british-columbia', lat: 48.4284, lng: -123.3656, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'tofino', name: { en: 'Tofino', fr: 'Tofino', de: "Tofino", es: "Tofino" }, provinceId: 'british-columbia', lat: 49.153, lng: -125.9066, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'whistler', name: { en: 'Whistler', fr: 'Whistler', de: "Whistler", es: "Whistler" }, provinceId: 'british-columbia', lat: 50.1163, lng: -122.9574, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'kelowna', name: { en: 'Kelowna', fr: 'Kelowna', de: "Kelowna", es: "Kelowna" }, provinceId: 'british-columbia', lat: 49.888, lng: -119.496, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'bella-coola', name: { en: 'Bella Coola', fr: 'Bella Coola', de: "Bella Coola", es: "Bella Coola" }, provinceId: 'british-columbia', lat: 52.3725, lng: -126.7539, roadAccess: true, frReview: 'needs-human-review' },
  // Daajing Giids (formerly Queen Charlotte), on Graham Island. Ferry or plane only.
  { id: 'haida-gwaii', name: { en: 'Haida Gwaii', fr: 'Haida Gwaii', de: "Haida Gwaii", es: "Haida Gwaii" }, provinceId: 'british-columbia', lat: 53.254, lng: -132.079, roadAccess: false, frReview: 'needs-human-review' },
  { id: 'prince-rupert', name: { en: 'Prince Rupert', fr: 'Prince Rupert', de: "Prince Rupert", es: "Prince Rupert" }, provinceId: 'british-columbia', lat: 54.315, lng: -130.3208, roadAccess: true, frReview: 'needs-human-review' },

  // Alberta
  { id: 'banff', name: { en: 'Banff', fr: 'Banff', de: "Banff", es: "Banff" }, provinceId: 'alberta', lat: 51.1784, lng: -115.5708, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'lake-louise', name: { en: 'Lake Louise', fr: 'Lake Louise', de: "Lake Louise", es: "Lake Louise" }, provinceId: 'alberta', lat: 51.4254, lng: -116.1773, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'jasper', name: { en: 'Jasper', fr: 'Jasper', de: "Jasper", es: "Jasper" }, provinceId: 'alberta', lat: 52.8737, lng: -118.0814, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'calgary', name: { en: 'Calgary', fr: 'Calgary', de: "Calgary", es: "Calgary" }, provinceId: 'alberta', lat: 51.0447, lng: -114.0719, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'edmonton', name: { en: 'Edmonton', fr: 'Edmonton', de: "Edmonton", es: "Edmonton" }, provinceId: 'alberta', lat: 53.5461, lng: -113.4938, roadAccess: true, frReview: 'needs-human-review' },

  // Yukon
  { id: 'whitehorse', name: { en: 'Whitehorse', fr: 'Whitehorse', de: "Whitehorse", es: "Whitehorse" }, provinceId: 'yukon', lat: 60.7212, lng: -135.0568, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'dawson-city', name: { en: 'Dawson City', fr: 'Dawson City', de: "Dawson City", es: "Dawson City" }, provinceId: 'yukon', lat: 64.0601, lng: -139.432, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'haines-junction', name: { en: 'Haines Junction', fr: 'Haines Junction', de: "Haines Junction", es: "Haines Junction" }, provinceId: 'yukon', lat: 60.7522, lng: -137.5108, roadAccess: true, frReview: 'needs-human-review' },

  // Northwest Territories
  { id: 'yellowknife', name: { en: 'Yellowknife', fr: 'Yellowknife', de: "Yellowknife", es: "Yellowknife" }, provinceId: 'northwest-territories', lat: 62.454, lng: -114.3718, roadAccess: true, frReview: 'needs-human-review' },
  // Road access depends on the Liard River ferry (summer) and ice crossing (winter); cut off during freeze-up and break-up.
  { id: 'fort-simpson', name: { en: 'Fort Simpson', fr: 'Fort Simpson', de: "Fort Simpson", es: "Fort Simpson" }, provinceId: 'northwest-territories', lat: 61.8628, lng: -121.3533, roadAccess: true, frReview: 'needs-human-review' },

  // Manitoba
  { id: 'churchill', name: { en: 'Churchill', fr: 'Churchill', de: "Churchill", es: "Churchill" }, provinceId: 'manitoba', lat: 58.7684, lng: -94.165, roadAccess: false, frReview: 'needs-human-review' },
  { id: 'winnipeg', name: { en: 'Winnipeg', fr: 'Winnipeg', de: "Winnipeg", es: "Winnipeg" }, provinceId: 'manitoba', lat: 49.8951, lng: -97.1384, roadAccess: true, frReview: 'needs-human-review' },

  // Ontario
  { id: 'toronto', name: { en: 'Toronto', fr: 'Toronto', de: "Toronto", es: "Toronto" }, provinceId: 'ontario', lat: 43.6532, lng: -79.3832, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'niagara-falls', name: { en: 'Niagara Falls', fr: 'Chutes du Niagara', de: "Niagarafälle", es: "Niagara Falls" }, provinceId: 'ontario', lat: 43.0896, lng: -79.0849, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'huntsville', name: { en: 'Huntsville', fr: 'Huntsville', de: "Huntsville", es: "Huntsville" }, provinceId: 'ontario', lat: 45.3269, lng: -79.2167, roadAccess: true, frReview: 'needs-human-review' },
  // Highway 60 corridor, near Lake of Two Rivers
  { id: 'algonquin', name: { en: 'Algonquin Park', fr: 'Parc Algonquin', de: "Algonquin Park", es: "Parque Algonquin" }, provinceId: 'ontario', lat: 45.5776, lng: -78.4907, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'ottawa', name: { en: 'Ottawa', fr: 'Ottawa', de: "Ottawa", es: "Ottawa" }, provinceId: 'ontario', lat: 45.4215, lng: -75.6972, roadAccess: true, frReview: 'needs-human-review' },

  // Quebec
  { id: 'montreal', name: { en: 'Montréal', fr: 'Montréal', de: "Montréal", es: "Montreal" }, provinceId: 'quebec', lat: 45.5019, lng: -73.5674, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'quebec-city', name: { en: 'Québec City', fr: 'Québec', de: "Québec City", es: "Quebec" }, provinceId: 'quebec', lat: 46.8139, lng: -71.208, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'baie-saint-paul', name: { en: 'Baie-Saint-Paul', fr: 'Baie-Saint-Paul', de: "Baie-Saint-Paul", es: "Baie-Saint-Paul" }, provinceId: 'quebec', lat: 47.441, lng: -70.4983, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'tadoussac', name: { en: 'Tadoussac', fr: 'Tadoussac', de: "Tadoussac", es: "Tadoussac" }, provinceId: 'quebec', lat: 48.146, lng: -69.717, roadAccess: true, frReview: 'needs-human-review' },

  // Atlantic Canada
  { id: 'halifax', name: { en: 'Halifax', fr: 'Halifax', de: "Halifax", es: "Halifax" }, provinceId: 'atlantic-canada', lat: 44.6488, lng: -63.5752, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'baddeck', name: { en: 'Baddeck', fr: 'Baddeck', de: "Baddeck", es: "Baddeck" }, provinceId: 'atlantic-canada', lat: 46.1005, lng: -60.7536, roadAccess: true, frReview: 'needs-human-review' },
  { id: 'charlottetown', name: { en: 'Charlottetown', fr: 'Charlottetown', de: "Charlottetown", es: "Charlottetown" }, provinceId: 'atlantic-canada', lat: 46.2382, lng: -63.1311, roadAccess: true, frReview: 'needs-human-review' },
  // Newfoundland is an island, but the Trans-Canada continues by ferry, so it counts as road-connected here.
  { id: 'st-johns', name: { en: "St. John's", fr: "St. John's", de: "St. John's", es: "St. John's" }, provinceId: 'atlantic-canada', lat: 47.5615, lng: -52.7126, roadAccess: true, frReview: 'needs-human-review' },
  // Rocky Harbour, inside the park
  { id: 'gros-morne', name: { en: 'Gros Morne', fr: 'Gros Morne', de: "Gros Morne", es: "Gros Morne" }, provinceId: 'atlantic-canada', lat: 49.6583, lng: -57.9133, roadAccess: true, frReview: 'needs-human-review' },
  // Alma, New Brunswick, at the park gate
  { id: 'fundy', name: { en: 'Fundy National Park', fr: 'Parc national Fundy', de: "Fundy National Park", es: "Parque Nacional Fundy" }, provinceId: 'atlantic-canada', lat: 45.596, lng: -64.952, roadAccess: true, frReview: 'needs-human-review' },

  // Nunavut
  { id: 'iqaluit', name: { en: 'Iqaluit', fr: 'Iqaluit', de: "Iqaluit", es: "Iqaluit" }, provinceId: 'nunavut', lat: 63.7467, lng: -68.517, roadAccess: false, frReview: 'needs-human-review' },
  { id: 'pond-inlet', name: { en: 'Pond Inlet', fr: 'Pond Inlet', de: "Pond Inlet", es: "Pond Inlet" }, provinceId: 'nunavut', lat: 72.6997, lng: -77.9585, roadAccess: false, frReview: 'needs-human-review' },
];
