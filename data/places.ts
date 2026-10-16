import type { Place } from './types';

/**
 * Places used by the distance tool and journey routes.
 * Coordinates are town centres (or the usual gateway for parks), to 4 decimals.
 * roadAccess is false only where you can't drive in from the rest of Canada.
 */
export const places: Place[] = [
  // British Columbia
  { id: 'vancouver', name: { en: 'Vancouver', fr: 'Vancouver' }, provinceId: 'british-columbia', lat: 49.2827, lng: -123.1207, roadAccess: true },
  { id: 'victoria', name: { en: 'Victoria', fr: 'Victoria' }, provinceId: 'british-columbia', lat: 48.4284, lng: -123.3656, roadAccess: true },
  { id: 'tofino', name: { en: 'Tofino', fr: 'Tofino' }, provinceId: 'british-columbia', lat: 49.153, lng: -125.9066, roadAccess: true },
  { id: 'whistler', name: { en: 'Whistler', fr: 'Whistler' }, provinceId: 'british-columbia', lat: 50.1163, lng: -122.9574, roadAccess: true },
  { id: 'kelowna', name: { en: 'Kelowna', fr: 'Kelowna' }, provinceId: 'british-columbia', lat: 49.888, lng: -119.496, roadAccess: true },
  { id: 'bella-coola', name: { en: 'Bella Coola', fr: 'Bella Coola' }, provinceId: 'british-columbia', lat: 52.3725, lng: -126.7539, roadAccess: true },
  // Daajing Giids (formerly Queen Charlotte), on Graham Island. Ferry or plane only.
  { id: 'haida-gwaii', name: { en: 'Haida Gwaii', fr: 'Haida Gwaii' }, provinceId: 'british-columbia', lat: 53.254, lng: -132.079, roadAccess: false },
  { id: 'prince-rupert', name: { en: 'Prince Rupert', fr: 'Prince Rupert' }, provinceId: 'british-columbia', lat: 54.315, lng: -130.3208, roadAccess: true },

  // Alberta
  { id: 'banff', name: { en: 'Banff', fr: 'Banff' }, provinceId: 'alberta', lat: 51.1784, lng: -115.5708, roadAccess: true },
  { id: 'lake-louise', name: { en: 'Lake Louise', fr: 'Lake Louise' }, provinceId: 'alberta', lat: 51.4254, lng: -116.1773, roadAccess: true },
  { id: 'jasper', name: { en: 'Jasper', fr: 'Jasper' }, provinceId: 'alberta', lat: 52.8737, lng: -118.0814, roadAccess: true },
  { id: 'calgary', name: { en: 'Calgary', fr: 'Calgary' }, provinceId: 'alberta', lat: 51.0447, lng: -114.0719, roadAccess: true },
  { id: 'edmonton', name: { en: 'Edmonton', fr: 'Edmonton' }, provinceId: 'alberta', lat: 53.5461, lng: -113.4938, roadAccess: true },

  // Yukon
  { id: 'whitehorse', name: { en: 'Whitehorse', fr: 'Whitehorse' }, provinceId: 'yukon', lat: 60.7212, lng: -135.0568, roadAccess: true },
  { id: 'dawson-city', name: { en: 'Dawson City', fr: 'Dawson City' }, provinceId: 'yukon', lat: 64.0601, lng: -139.432, roadAccess: true },
  { id: 'haines-junction', name: { en: 'Haines Junction', fr: 'Haines Junction' }, provinceId: 'yukon', lat: 60.7522, lng: -137.5108, roadAccess: true },

  // Northwest Territories
  { id: 'yellowknife', name: { en: 'Yellowknife', fr: 'Yellowknife' }, provinceId: 'northwest-territories', lat: 62.454, lng: -114.3718, roadAccess: true },
  // Road access depends on the Liard River ferry (summer) and ice crossing (winter); cut off during freeze-up and break-up.
  { id: 'fort-simpson', name: { en: 'Fort Simpson', fr: 'Fort Simpson' }, provinceId: 'northwest-territories', lat: 61.8628, lng: -121.3533, roadAccess: true },

  // Manitoba
  { id: 'churchill', name: { en: 'Churchill', fr: 'Churchill' }, provinceId: 'manitoba', lat: 58.7684, lng: -94.165, roadAccess: false },
  { id: 'winnipeg', name: { en: 'Winnipeg', fr: 'Winnipeg' }, provinceId: 'manitoba', lat: 49.8951, lng: -97.1384, roadAccess: true },

  // Ontario
  { id: 'toronto', name: { en: 'Toronto', fr: 'Toronto' }, provinceId: 'ontario', lat: 43.6532, lng: -79.3832, roadAccess: true },
  { id: 'niagara-falls', name: { en: 'Niagara Falls', fr: 'Chutes du Niagara' }, provinceId: 'ontario', lat: 43.0896, lng: -79.0849, roadAccess: true },
  { id: 'huntsville', name: { en: 'Huntsville', fr: 'Huntsville' }, provinceId: 'ontario', lat: 45.3269, lng: -79.2167, roadAccess: true },
  // Highway 60 corridor, near Lake of Two Rivers
  { id: 'algonquin', name: { en: 'Algonquin Park', fr: 'Parc Algonquin' }, provinceId: 'ontario', lat: 45.5776, lng: -78.4907, roadAccess: true },
  { id: 'ottawa', name: { en: 'Ottawa', fr: 'Ottawa' }, provinceId: 'ontario', lat: 45.4215, lng: -75.6972, roadAccess: true },

  // Quebec
  { id: 'montreal', name: { en: 'Montréal', fr: 'Montréal' }, provinceId: 'quebec', lat: 45.5019, lng: -73.5674, roadAccess: true },
  { id: 'quebec-city', name: { en: 'Québec City', fr: 'Québec' }, provinceId: 'quebec', lat: 46.8139, lng: -71.208, roadAccess: true },
  { id: 'baie-saint-paul', name: { en: 'Baie-Saint-Paul', fr: 'Baie-Saint-Paul' }, provinceId: 'quebec', lat: 47.441, lng: -70.4983, roadAccess: true },
  { id: 'tadoussac', name: { en: 'Tadoussac', fr: 'Tadoussac' }, provinceId: 'quebec', lat: 48.146, lng: -69.717, roadAccess: true },

  // Atlantic Canada
  { id: 'halifax', name: { en: 'Halifax', fr: 'Halifax' }, provinceId: 'atlantic-canada', lat: 44.6488, lng: -63.5752, roadAccess: true },
  { id: 'baddeck', name: { en: 'Baddeck', fr: 'Baddeck' }, provinceId: 'atlantic-canada', lat: 46.1005, lng: -60.7536, roadAccess: true },
  { id: 'charlottetown', name: { en: 'Charlottetown', fr: 'Charlottetown' }, provinceId: 'atlantic-canada', lat: 46.2382, lng: -63.1311, roadAccess: true },
  // Newfoundland is an island, but the Trans-Canada continues by ferry, so it counts as road-connected here.
  { id: 'st-johns', name: { en: "St. John's", fr: "St. John's" }, provinceId: 'atlantic-canada', lat: 47.5615, lng: -52.7126, roadAccess: true },
  // Rocky Harbour, inside the park
  { id: 'gros-morne', name: { en: 'Gros Morne', fr: 'Gros Morne' }, provinceId: 'atlantic-canada', lat: 49.6583, lng: -57.9133, roadAccess: true },
  // Alma, New Brunswick, at the park gate
  { id: 'fundy', name: { en: 'Fundy National Park', fr: 'Parc national Fundy' }, provinceId: 'atlantic-canada', lat: 45.596, lng: -64.952, roadAccess: true },

  // Nunavut
  { id: 'iqaluit', name: { en: 'Iqaluit', fr: 'Iqaluit' }, provinceId: 'nunavut', lat: 63.7467, lng: -68.517, roadAccess: false },
  { id: 'pond-inlet', name: { en: 'Pond Inlet', fr: 'Pond Inlet' }, provinceId: 'nunavut', lat: 72.6997, lng: -77.9585, roadAccess: false },
];
