/** ISO 3166-1 alpha-2 codes; names come from Intl.DisplayNames in the visitor's language. */
export const countryCodes = 'AD AE AF AG AL AM AO AR AT AU AZ BA BB BD BE BG BH BM BN BO BR BS BT BW BY BZ CA CH CL CN CO CR CU CY CZ DE DK DM DO DZ EC EE EG ES ET FI FJ FR GB GE GH GR GT HK HN HR HU ID IE IL IN IQ IR IS IT JM JO JP KE KH KR KW KZ LB LI LK LT LU LV MA MC MD ME MK MN MO MT MU MV MX MY NA NG NI NL NO NP NZ OM PA PE PH PK PL PR PT PY QA RO RS RU SA SC SE SG SI SK SN SV TH TN TR TT TW TZ UA UG US UY UZ VE VN ZA ZM ZW'.split(' ');

/** Markets we see most, listed first. */
export const priorityCountries = ['CA', 'US', 'GB', 'FR', 'BE', 'CH', 'DE', 'NL', 'AU'];

export function countryOptions(locale: string) {
  const names = new Intl.DisplayNames([locale], { type: 'region' });
  const collator = new Intl.Collator(locale);
  const rest = countryCodes.filter((c) => !priorityCountries.includes(c)).map((code) => ({ code, name: names.of(code) ?? code }));
  rest.sort((a, b) => collator.compare(a.name, b.name));
  return { priority: priorityCountries.map((code) => ({ code, name: names.of(code) ?? code })), rest };
}
