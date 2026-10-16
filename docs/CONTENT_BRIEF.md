# Content brief (for anyone writing /data)

## Voice
Understated, warm, quietly funny, very honest. Canadians don't oversell, and neither do we.
Short sentences. Plain words. Specific details over adjectives.

Write like:
- "Vancouver to Halifax is further than London to Cairo. Plan accordingly."
- "Polar bear season is about six weeks long. We'll tell you which six."
- "Two countries for the price of one: summer Canada and winter Canada."
- "Yes, you can see the northern lights. No, not from Toronto."

Never use: breathtaking, once in a lifetime, hidden gem, bucket list, nestled, majestic
(nor French equivalents: à couper le souffle, unique dans une vie, joyau caché, trésor caché, niché, majestueux).
No exclamation marks. Canadian/British spelling in English (colour, centre, travellers, kilometres).
Tagline: "Canada, made for you."

## French
Every `L` string has `fr`. French is a careful draft in natural, European-friendly French
(travellers from France, Belgium, Switzerland), same understated tone. Use Québec place names correctly
(Québec, Montréal, Tadoussac, Charlevoix, Îles-de-la-Madeleine). Every record carries
`frReview: 'needs-human-review'`. Never mark anything approved.

## Facts
Be accurate. Where a fact changes year to year (seasons, entry rules, prices), say so plainly.
Wild Calendar events are always `verifyYearly: true`. Entry requirement answers say
"verify against Government of Canada sources".
Places, partners, stays, people, testimonials and press are PLACEHOLDERS — invented names, set `placeholder: true`,
and never use the name of a real lodge, hotel, operator, person, or publication.
Indigenous content: respectful, specific, no stereotypes, no invented nation-specific claims;
placeholder partners only.

## Images
No photos yet. Each `Img` gets `subject` (short, concrete: "Grizzly on a salmon river, late September"),
`tone` (forest | lake | granite | birch | night | snow | autumn), and `alt` ({en, fr}). Leave `src` out.

## ID registry (use exactly these ids so files link together)

Provinces (`ProvinceId`): british-columbia, alberta, yukon, northwest-territories, manitoba, ontario, quebec,
atlantic-canada, nunavut

Regions (id = slug):
- british-columbia: vancouver, whistler, tofino-vancouver-island, great-bear-rainforest, okanagan, haida-gwaii
- alberta: banff-lake-louise, jasper, icefields-parkway, calgary
- yukon: whitehorse, dawson-city, kluane
- northwest-territories: yellowknife, nahanni
- manitoba: churchill, winnipeg
- ontario: toronto, niagara, muskoka, algonquin
- quebec: montreal, quebec-city, charlevoix, tadoussac
- atlantic-canada: cabot-trail, prince-edward-island, newfoundland, bay-of-fundy
- nunavut: iqaluit, pond-inlet

Places (distance tool, `Place.id`): vancouver, victoria, tofino, whistler, kelowna, bella-coola, haida-gwaii,
prince-rupert, banff, lake-louise, jasper, calgary, edmonton, whitehorse, dawson-city, haines-junction,
yellowknife, fort-simpson, churchill, winnipeg, toronto, niagara-falls, huntsville, algonquin, ottawa,
montreal, quebec-city, baie-saint-paul, tadoussac, halifax, baddeck, charlottetown, st-johns, gros-morne,
fundy, iqaluit, pond-inlet

Journeys: rockies-to-the-pacific, bears-whales-rainforest, polar-bear-season, yukon-under-the-aurora,
quebec-slowly, the-atlantic-edge, coast-to-coast, family-summer-west

Experience groups: classics, wild, quietly-luxurious
Experiences:
- classics: the-rockies, coast-to-coast-by-rail, vancouver-and-the-islands, quebec-old-cities
- wild: bears, whales, polar-bears, northern-lights, canoe-country, heli-hiking, fishing-lodges
- quietly-luxurious: remote-lodges, floatplanes-and-helicopters, private-guides, heli-skiing, winter-cabins

Wild events: grizzlies-salmon, polar-bears-churchill, belugas-churchill, aurora-yukon, aurora-yellowknife,
icebergs-newfoundland, fall-colours, golden-larches, whales-tadoussac, humpbacks-newfoundland,
puffins-newfoundland, orcas-vancouver-island, wildflowers-rockies, midnight-sun-yukon, powder-season-rockies

Specialists: spec-west, spec-north, spec-east, spec-rail-luxury

Stays (placeholder names): stay-rainforest-lodge (great-bear-rainforest), stay-tofino-inn (tofino-vancouver-island),
stay-lake-chalet (banff-lake-louise), stay-jasper-cabins (jasper), stay-vancouver-hotel (vancouver),
stay-churchill-tundra-lodge (churchill), stay-aurora-cabins (whitehorse), stay-yellowknife-lodge (yellowknife),
stay-quebec-auberge (quebec-city), stay-charlevoix-manor (charlevoix), stay-montreal-hotel (montreal),
stay-newfoundland-inn (newfoundland), stay-cabot-cottages (cabot-trail), stay-pei-farmhouse (prince-edward-island),
stay-muskoka-lodge (muskoka), stay-okanagan-winery (okanagan), stay-whistler-chalet (whistler),
stay-haida-gwaii-lodge (haida-gwaii)

Testimonials: t1 … t6. FAQ ids: free, kebab-case.
