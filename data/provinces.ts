import type { Province } from './types';

/**
 * The nine areas we plan trips in. "Atlantic Canada" covers four provinces
 * (Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland and Labrador),
 * because that's how most people travel them.
 */
export const provinces: Province[] = [
  {
    id: 'british-columbia',
    slug: 'british-columbia',
    name: { en: 'British Columbia', fr: 'Colombie-Britannique' },
    area: 'west',
    tagline: {
      en: 'Rainforest, ocean and mountains, often in the same view.',
      fr: 'Forêt pluviale, océan et montagnes, souvent dans le même paysage.',
    },
    intro: {
      en: 'British Columbia is mostly mountains, with a coastline that keeps folding back on itself. It rains on the coast, which is why everything is so green. The interior is drier, sunnier and full of orchards.',
      fr: 'La Colombie-Britannique, ce sont surtout des montagnes, avec un littoral qui n’en finit pas de se replier sur lui-même. Il pleut sur la côte, d’où tout ce vert. L’intérieur est plus sec, plus ensoleillé, et couvert de vergers.',
    },
    pitch: {
      bestAt: {
        en: 'Bears, whales, rainforest and a very good city to start in. The coast is best from late spring to early autumn; the mountains do winter properly.',
        fr: 'Les ours, les baleines, la forêt pluviale et une très bonne ville pour commencer. La côte est à son mieux de la fin du printemps au début de l’automne ; les montagnes, elles, savent faire l’hiver.',
      },
      notFor: {
        en: 'Guaranteed sunshine on the coast. Bring a proper raincoat, and budget for floatplanes: the best places tend to be the ones roads don’t reach.',
        fr: 'Le soleil garanti sur la côte. Prévoyez un vrai imperméable, et un budget hydravion : les plus beaux endroits sont souvent ceux où la route ne va pas.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'A floatplane over a green rainforest inlet', fr: 'Un hydravion au-dessus d’un bras de mer bordé de forêt pluviale' },
        subject: 'Floatplane over a rainforest inlet, July',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'Snow-loaded firs above a mountain village', fr: 'Des sapins chargés de neige au-dessus d’un village de montagne' },
        subject: 'Snow-loaded firs above Whistler, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Grizzlies on the salmon rivers of the Great Bear Rainforest, from late August', fr: 'Des grizzlis sur les rivières à saumons de la forêt du Grand Ours, dès la fin août' },
        { en: 'Orcas and humpbacks off Vancouver Island', fr: 'Orques et baleines à bosse au large de l’île de Vancouver' },
        { en: 'Beach days in Tofino. Some of them dry.', fr: 'Des journées de plage à Tofino. Certaines au sec.' },
        { en: 'Wine and warm lake swimming in the Okanagan', fr: 'Du vin et des baignades en lac tiède dans l’Okanagan' },
      ],
      winter: [
        { en: 'Whistler, one of the largest ski areas in North America', fr: 'Whistler, l’un des plus grands domaines skiables d’Amérique du Nord' },
        { en: 'Storm watching in Tofino, November to February', fr: 'Observer les tempêtes à Tofino, de novembre à février' },
        { en: 'Ski runs above Vancouver, 30 minutes from downtown', fr: 'Des pistes au-dessus de Vancouver, à 30 minutes du centre' },
      ],
    },
    distancePreset: ['vancouver', 'haida-gwaii'],
    regionIds: ['vancouver', 'whistler', 'tofino-vancouver-island', 'great-bear-rainforest', 'okanagan', 'haida-gwaii'],
    frReview: 'needs-human-review',
  },
  {
    id: 'alberta',
    slug: 'alberta',
    name: { en: 'Alberta', fr: 'Alberta' },
    area: 'west',
    tagline: {
      en: 'Mountains first. Everything else second.',
      fr: 'Les montagnes d’abord. Le reste ensuite.',
    },
    intro: {
      en: 'Alberta is prairie that runs straight into the Rockies. Banff and Jasper get the attention, and they earn it. Calgary is the usual way in.',
      fr: 'L’Alberta, c’est une prairie qui vient buter contre les Rocheuses. Banff et Jasper attirent tous les regards, et ils le méritent. On arrive en général par Calgary.',
    },
    pitch: {
      bestAt: {
        en: 'Turquoise lakes, mountain driving, wildlife from the car window, and proper winter skiing.',
        fr: 'Les lacs turquoise, les routes de montagne, les animaux vus depuis la voiture, et du vrai ski l’hiver.',
      },
      notFor: {
        en: 'Solitude in July and August. Lake Louise and Moraine Lake are busy, parking is scarce, and Moraine Lake is shuttle-only. September is quieter and just as good.',
        fr: 'La solitude en juillet et août. Lake Louise et le lac Moraine sont très fréquentés, le stationnement est rare, et on n’accède au lac Moraine qu’en navette. Septembre est plus calme, et tout aussi beau.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'A turquoise lake below steep grey peaks', fr: 'Un lac turquoise sous des sommets gris et abrupts' },
        subject: 'Moraine Lake at dawn, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Skaters on a frozen lake below a glacier', fr: 'Des patineurs sur un lac gelé, au pied d’un glacier' },
        subject: 'Skating on frozen Lake Louise, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Icefields Parkway: 232 km of glaciers and no billboards', fr: 'La promenade des Glaciers : 232 km de glaciers et aucun panneau publicitaire' },
        { en: 'Moraine Lake at sunrise, by shuttle', fr: 'Le lac Moraine au lever du soleil, en navette' },
        { en: 'Elk, bighorn sheep and, with luck, a bear at a safe distance', fr: 'Wapitis, mouflons et, avec un peu de chance, un ours à bonne distance' },
        { en: 'Golden larches for about two weeks in late September', fr: 'Les mélèzes dorés, pendant environ deux semaines fin septembre' },
      ],
      winter: [
        { en: 'Skiing at Lake Louise, Sunshine Village and Marmot Basin', fr: 'Le ski à Lake Louise, Sunshine Village et Marmot Basin' },
        { en: 'Skating on frozen Lake Louise', fr: 'Patiner sur le lac Louise gelé' },
        { en: 'Stargazing in Jasper’s Dark Sky Preserve', fr: 'Observer les étoiles dans la réserve de ciel étoilé de Jasper' },
        { en: 'Hot springs in Banff at minus twenty', fr: 'Les sources chaudes de Banff par moins vingt' },
      ],
    },
    distancePreset: ['calgary', 'jasper'],
    regionIds: ['banff-lake-louise', 'jasper', 'icefields-parkway', 'calgary'],
    frReview: 'needs-human-review',
  },
  {
    id: 'yukon',
    slug: 'yukon',
    name: { en: 'Yukon', fr: 'Yukon' },
    area: 'north',
    tagline: {
      en: 'Big land, few people, long light.',
      fr: 'Un grand territoire, peu de monde, une longue lumière.',
    },
    intro: {
      en: 'Yukon has fewer than 50,000 people and a great deal of room. Summer days barely end; winter nights are long and often green. Whitehorse is the hub, and Dawson City still looks a lot like 1898.',
      fr: 'Le Yukon compte moins de 50 000 habitants et énormément d’espace. L’été, les journées ne finissent presque pas ; l’hiver, les nuits sont longues et souvent vertes. Whitehorse sert de base, et Dawson City ressemble encore beaucoup à 1898.',
    },
    pitch: {
      bestAt: {
        en: 'Northern lights from late August to April, midnight sun in June, river paddling, and roads with almost no one on them.',
        fr: 'Les aurores boréales de fin août à avril, le soleil de minuit en juin, le canot sur les rivières, et des routes presque vides.',
      },
      notFor: {
        en: 'Short trips. Distances are long, flights are limited, and winter means minus thirty. That’s rather the point, but pack for it.',
        fr: 'Les séjours courts. Les distances sont longues, les vols limités, et l’hiver, c’est moins trente. C’est un peu le principe, mais prévoyez les vêtements.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'A canoe on a wide river under a late evening sun', fr: 'Un canot sur une large rivière, sous le soleil du soir' },
        subject: 'Canoe on the Yukon River at 11 pm, June',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Green northern lights over a snowy cabin', fr: 'Des aurores vertes au-dessus d’une cabane enneigée' },
        subject: 'Aurora over a cabin outside Whitehorse, February',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Midnight sun around the June solstice', fr: 'Le soleil de minuit autour du solstice de juin' },
        { en: 'Paddling the Yukon River, for a day or two weeks', fr: 'Descendre le fleuve Yukon, pour une journée ou deux semaines' },
        { en: 'Kluane: Canada’s highest mountain and enormous icefields', fr: 'Kluane : la plus haute montagne du Canada et d’immenses champs de glace' },
        { en: 'Dawson City’s boardwalks and gold rush storefronts', fr: 'Les trottoirs de bois et les façades de la ruée vers l’or à Dawson City' },
      ],
      winter: [
        { en: 'Northern lights from a heated cabin', fr: 'Les aurores boréales depuis une cabane chauffée' },
        { en: 'Dog sledding on frozen rivers', fr: 'Le traîneau à chiens sur les rivières gelées' },
        { en: 'Hot springs at minus thirty, with frozen hair', fr: 'Les sources chaudes par moins trente, cheveux gelés compris' },
      ],
    },
    distancePreset: ['whitehorse', 'dawson-city'],
    regionIds: ['whitehorse', 'dawson-city', 'kluane'],
    frReview: 'needs-human-review',
  },
  {
    id: 'northwest-territories',
    slug: 'northwest-territories',
    name: { en: 'Northwest Territories', fr: 'Territoires du Nord-Ouest' },
    area: 'north',
    tagline: {
      en: 'Lakes, northern lights and a great deal of quiet.',
      fr: 'Des lacs, des aurores et beaucoup de silence.',
    },
    intro: {
      en: 'The Northwest Territories are bigger than France and Spain combined, with about 45,000 people. Yellowknife sits under the auroral oval, which is why the lights are so reliable. Nahanni is reachable only by air.',
      fr: 'Les Territoires du Nord-Ouest sont plus grands que la France et l’Espagne réunies, pour environ 45 000 habitants. Yellowknife se trouve sous l’ovale auroral, d’où des aurores si fiables. Nahanni n’est accessible que par avion.',
    },
    pitch: {
      bestAt: {
        en: 'Northern lights, especially late August to September and mid-November to early April. Fly-in fishing, floatplanes and real wilderness.',
        fr: 'Les aurores boréales, surtout de fin août à septembre et de mi-novembre à début avril. La pêche en avion de brousse, les hydravions et la vraie nature sauvage.',
      },
      notFor: {
        en: 'A wide choice of hotels and restaurants. Yellowknife is a small capital, and Nahanni trips are expensive and fill a year ahead.',
        fr: 'Un large choix d’hôtels et de restaurants. Yellowknife est une petite capitale, et les séjours à Nahanni sont chers et complets un an à l’avance.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'A floatplane moored by colourful houseboats on a lake', fr: 'Un hydravion amarré près de maisons flottantes colorées' },
        subject: 'Floatplane and houseboats on Great Slave Lake, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Northern lights over a frozen lake and spruce', fr: 'Des aurores boréales au-dessus d’un lac gelé et d’épinettes' },
        subject: 'Aurora over frozen Great Slave Lake, March',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Floatplanes from Yellowknife’s Old Town', fr: 'Les hydravions de la vieille ville de Yellowknife' },
        { en: 'Virginia Falls in Nahanni, about twice the height of Niagara', fr: 'Les chutes Virginia à Nahanni, environ deux fois la hauteur du Niagara' },
        { en: 'Evening paddles on Great Slave Lake that never quite get dark', fr: 'Des sorties en canot le soir sur le Grand lac des Esclaves, sans jamais vraiment de nuit' },
        { en: 'The aurora comes back in late August', fr: 'Les aurores reviennent fin août' },
      ],
      winter: [
        { en: 'Aurora viewing a short drive from town', fr: 'Les aurores à quelques minutes de route de la ville' },
        { en: 'Driving on ice roads, roughly January to March', fr: 'Rouler sur les routes de glace, environ de janvier à mars' },
        { en: 'Dog sledding on Great Slave Lake', fr: 'Le traîneau à chiens sur le Grand lac des Esclaves' },
      ],
    },
    distancePreset: ['yellowknife', 'fort-simpson'],
    regionIds: ['yellowknife', 'nahanni'],
    frReview: 'needs-human-review',
  },
  {
    id: 'manitoba',
    slug: 'manitoba',
    name: { en: 'Manitoba', fr: 'Manitoba' },
    area: 'north',
    tagline: {
      en: 'Polar bears, belugas, and a good city in between.',
      fr: 'Des ours polaires, des bélugas, et une bonne ville entre les deux.',
    },
    intro: {
      en: 'Most people come to Manitoba for Churchill, on Hudson Bay, which you reach by plane or train. Winnipeg deserves more time than it gets. In between is a lot of lake and forest.',
      fr: 'La plupart des gens viennent au Manitoba pour Churchill, sur la baie d’Hudson, qu’on rejoint en avion ou en train. Winnipeg mérite plus de temps qu’on ne lui en accorde. Entre les deux, beaucoup de lacs et de forêt.',
    },
    pitch: {
      bestAt: {
        en: 'Polar bears in October and November, beluga whales in July and August, and northern lights over Churchill.',
        fr: 'Les ours polaires en octobre et novembre, les bélugas en juillet et août, et les aurores boréales au-dessus de Churchill.',
      },
      notFor: {
        en: 'Spontaneity. Polar bear season is short and Churchill has few rooms, so trips book a year or more ahead.',
        fr: 'L’improvisation. La saison des ours polaires est courte et Churchill compte peu de chambres : on réserve un an à l’avance, parfois plus.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'White beluga whales beside a kayak', fr: 'Des bélugas blancs à côté d’un kayak' },
        subject: 'Belugas beside a kayak in the Churchill River, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A polar bear walking along a snowy shoreline', fr: 'Un ours polaire marchant sur un rivage enneigé' },
        subject: 'Polar bear on the Hudson Bay shore, November',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Kayaking or snorkelling with belugas in the Churchill River', fr: 'Le kayak ou la plongée avec masque parmi les bélugas de la rivière Churchill' },
        { en: 'Tundra wildflowers, and the odd polar bear on the coast', fr: 'Les fleurs de la toundra, et un ours polaire de temps en temps sur la côte' },
        { en: 'Winnipeg’s festivals and the Canadian Museum for Human Rights', fr: 'Les festivals de Winnipeg et le Musée canadien pour les droits de la personne' },
      ],
      winter: [
        { en: 'Polar bears waiting for the sea ice, October to November', fr: 'Les ours polaires qui attendent la banquise, d’octobre à novembre' },
        { en: 'Aurora over Churchill, best in February and March', fr: 'Les aurores au-dessus de Churchill, surtout en février et mars' },
        { en: 'Skating the river trail at The Forks in Winnipeg, when the ice allows', fr: 'Patiner sur le sentier de la rivière à La Fourche, à Winnipeg, quand la glace le permet' },
      ],
    },
    distancePreset: ['winnipeg', 'churchill'],
    regionIds: ['churchill', 'winnipeg'],
    frReview: 'needs-human-review',
  },
  {
    id: 'ontario',
    slug: 'ontario',
    name: { en: 'Ontario', fr: 'Ontario' },
    area: 'east',
    tagline: {
      en: 'Cities, lakes and a lot of granite.',
      fr: 'Des villes, des lacs et beaucoup de granit.',
    },
    intro: {
      en: 'Ontario has Canada’s biggest city, its capital and Niagara Falls. Drive a few hours north and it turns into lakes, rock and pine. There are about 250,000 lakes, give or take.',
      fr: 'L’Ontario abrite la plus grande ville du Canada, sa capitale et les chutes du Niagara. Quelques heures de route vers le nord, et tout devient lacs, roche et pins. On compte environ 250 000 lacs, à quelques-uns près.',
    },
    pitch: {
      bestAt: {
        en: 'Toronto’s food, Niagara, canoe trips in Algonquin, cottage country, and autumn colour from late September to mid-October.',
        fr: 'La cuisine de Toronto, le Niagara, le canot dans le parc Algonquin, la région des chalets, et les couleurs d’automne de fin septembre à mi-octobre.',
      },
      notFor: {
        en: 'Mountains. Ontario doesn’t have the kind you’re picturing. Nor northern lights, unless you go a very long way north.',
        fr: 'Les montagnes. L’Ontario n’a pas celles que vous imaginez. Ni les aurores boréales, à moins de monter très loin vers le nord.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'A red canoe on a still lake edged with pine and granite', fr: 'Un canot rouge sur un lac calme bordé de pins et de granit' },
        subject: 'Red canoe on a still Algonquin lake at dawn',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'Skaters on a long frozen canal in a city', fr: 'Des patineurs sur un long canal gelé en ville' },
        subject: 'Skaters on the Rideau Canal, Ottawa, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Canoeing and loon calls in Algonquin', fr: 'Le canot et le chant des plongeons huards dans le parc Algonquin' },
        { en: 'Lakes, docks and old steamships in Muskoka', fr: 'Les lacs, les pontons et les vieux bateaux à vapeur de Muskoka' },
        { en: 'Niagara Falls by boat, then the wineries nearby', fr: 'Les chutes du Niagara en bateau, puis les vignobles voisins' },
        { en: 'Toronto’s neighbourhoods, one meal at a time', fr: 'Les quartiers de Toronto, un repas à la fois' },
      ],
      winter: [
        { en: 'Skating the Rideau Canal in Ottawa, in the years it freezes well', fr: 'Patiner sur le canal Rideau à Ottawa, les années où il gèle bien' },
        { en: 'Snowshoeing and dog sledding around Algonquin', fr: 'La raquette et le traîneau à chiens autour du parc Algonquin' },
        { en: 'Icewine in Niagara, made from grapes picked frozen', fr: 'Le vin de glace du Niagara, fait de raisins vendangés gelés' },
      ],
    },
    distancePreset: ['niagara-falls', 'ottawa'],
    regionIds: ['toronto', 'niagara', 'muskoka', 'algonquin'],
    frReview: 'needs-human-review',
  },
  {
    id: 'quebec',
    slug: 'quebec',
    name: { en: 'Quebec', fr: 'Québec' },
    area: 'east',
    tagline: {
      en: 'French-speaking, unhurried, and very well fed.',
      fr: 'Francophone, sans hâte, et très bien nourri.',
    },
    intro: {
      en: 'Quebec is French-speaking North America, with its own food, music and pace. Montréal and Québec City are three hours apart and quite different. East of Québec City, the St. Lawrence widens into something close to a sea.',
      fr: 'Le Québec, c’est l’Amérique du Nord en français, avec sa cuisine, sa musique et son rythme. Montréal et Québec sont à trois heures l’une de l’autre, et très différentes. À l’est de Québec, le Saint-Laurent s’élargit jusqu’à ressembler à une mer.',
    },
    pitch: {
      bestAt: {
        en: 'Cities on foot, food, Charlevoix’s hills, whales at Tadoussac, and a winter that people actually enjoy.',
        fr: 'Les villes à pied, la table, les collines de Charlevoix, les baleines à Tadoussac, et un hiver que les gens apprécient vraiment.',
      },
      notFor: {
        en: 'Travellers who want everything in English. Most people switch happily, but a bonjour helps. And winter in Québec City is properly cold.',
        fr: 'Ceux qui s’attendent à retrouver la France. L’accent, les mots et les habitudes sont québécois, et c’est tout l’intérêt. Et l’hiver à Québec est franchement froid.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'Steep old streets with stone houses and flower boxes', fr: 'De vieilles rues en pente, maisons de pierre et jardinières fleuries' },
        subject: 'Old Québec’s steep streets, July evening',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'Snow falling on old stone walls and lit windows', fr: 'De la neige qui tombe sur de vieux remparts et des fenêtres éclairées' },
        subject: 'Snow on the walls of Old Québec, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Whales in the St. Lawrence at Tadoussac, June to October', fr: 'Les baleines du Saint-Laurent à Tadoussac, de juin à octobre' },
        { en: 'Old Québec’s walls and steep streets', fr: 'Les remparts et les rues en pente du Vieux-Québec' },
        { en: 'Montréal’s festivals, terraces and bagels', fr: 'Les festivals, les terrasses et les bagels de Montréal' },
        { en: 'Charlevoix: river views and a great deal of cheese', fr: 'Charlevoix : vue sur le fleuve et beaucoup de fromage' },
      ],
      winter: [
        { en: 'Québec Winter Carnival, late January to mid-February', fr: 'Le Carnaval de Québec, de fin janvier à mi-février' },
        { en: 'Cross-country skiing and snowshoeing in the national parks', fr: 'Le ski de fond et la raquette dans les parcs nationaux' },
        { en: 'Ice-fishing cabins on the frozen Saguenay', fr: 'Les cabanes de pêche blanche sur le Saguenay gelé' },
        { en: 'Montréal’s underground city, for the very cold days', fr: 'La ville souterraine de Montréal, pour les jours de grand froid' },
      ],
    },
    distancePreset: ['montreal', 'tadoussac'],
    regionIds: ['montreal', 'quebec-city', 'charlevoix', 'tadoussac'],
    frReview: 'needs-human-review',
  },
  {
    id: 'atlantic-canada',
    slug: 'atlantic-canada',
    name: { en: 'Atlantic Canada', fr: 'Canada atlantique' },
    area: 'east',
    tagline: {
      en: 'Four provinces, a lot of coastline, and music most nights.',
      fr: 'Quatre provinces, beaucoup de côtes, et de la musique presque tous les soirs.',
    },
    intro: {
      en: 'Atlantic Canada is Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. It’s the part of Canada closest to Europe. St. John’s is nearer to Ireland than to Vancouver.',
      fr: 'Le Canada atlantique regroupe la Nouvelle-Écosse, le Nouveau-Brunswick, l’Île-du-Prince-Édouard et Terre-Neuve-et-Labrador. C’est la partie du Canada la plus proche de l’Europe. St. John’s est plus près de l’Irlande que de Vancouver.',
    },
    pitch: {
      bestAt: {
        en: 'Coastal drives, seafood, icebergs and puffins in early summer, whales in July and August, and autumn colour on the Cabot Trail.',
        fr: 'Les routes côtières, les fruits de mer, les icebergs et les macareux en début d’été, les baleines en juillet et août, et les couleurs d’automne sur la piste Cabot.',
      },
      notFor: {
        en: 'Seeing it all in a week. The ferry to Newfoundland alone takes most of a day, and many inns close from October to May.',
        fr: 'Tout voir en une semaine. Le traversier pour Terre-Neuve prend à lui seul presque une journée, et beaucoup d’auberges ferment d’octobre à mai.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'An iceberg off a rocky coast with brightly painted houses', fr: 'Un iceberg au large d’une côte rocheuse aux maisons colorées' },
        subject: 'Iceberg off a Newfoundland outport, June',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Waves breaking on a snowy coastline beside a lighthouse', fr: 'Des vagues sur une côte enneigée, près d’un phare' },
        subject: 'Winter swell at a Nova Scotia lighthouse',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Icebergs off Newfoundland, usually May and June', fr: 'Les icebergs au large de Terre-Neuve, en général en mai et juin' },
        { en: 'Puffins and humpbacks, June to August', fr: 'Les macareux et les baleines à bosse, de juin à août' },
        { en: 'The highest tides in the world, in the Bay of Fundy', fr: 'Les plus hautes marées du monde, dans la baie de Fundy' },
        { en: 'Lobster suppers and red-sand beaches on PEI', fr: 'Les soupers de homard et les plages de sable rouge de l’Île-du-Prince-Édouard' },
      ],
      winter: [
        { en: 'Honestly, it’s quiet. Many inns and tours close until May.', fr: 'Honnêtement, c’est calme. Beaucoup d’auberges et d’excursions ferment jusqu’en mai.' },
        { en: 'Halifax and St. John’s stay lively, with music most nights', fr: 'Halifax et St. John’s restent animées, avec de la musique presque tous les soirs' },
        { en: 'Winter storms, best watched from indoors', fr: 'Les tempêtes d’hiver, à regarder de préférence depuis l’intérieur' },
      ],
    },
    distancePreset: ['halifax', 'st-johns'],
    regionIds: ['cabot-trail', 'prince-edward-island', 'newfoundland', 'bay-of-fundy'],
    frReview: 'needs-human-review',
  },
  {
    id: 'nunavut',
    slug: 'nunavut',
    name: { en: 'Nunavut', fr: 'Nunavut' },
    area: 'north',
    tagline: {
      en: 'The Arctic, on the Arctic’s terms.',
      fr: 'L’Arctique, selon ses propres règles.',
    },
    intro: {
      en: 'Nunavut is Canada’s largest territory, with about 40,000 people in 25 communities and no roads between them. Most people here are Inuit, and Inuktitut is widely spoken. Everything arrives by plane, or once a year by sealift.',
      fr: 'Le Nunavut est le plus grand territoire du Canada : environ 40 000 habitants, 25 communautés, et aucune route entre elles. La plupart des habitants sont Inuits, et l’inuktitut est très parlé. Tout arrive par avion, ou une fois par an par bateau.',
    },
    pitch: {
      bestAt: {
        en: 'Floe-edge trips in June, narwhals, Arctic light, and Inuit art and culture with local guides.',
        fr: 'Les séjours à la lisière des glaces en juin, les narvals, la lumière arctique, et l’art et la culture inuits avec des guides locaux.',
      },
      notFor: {
        en: 'Tight budgets or fixed plans. Flights are expensive, and the weather decides the itinerary. We build in spare days.',
        fr: 'Les petits budgets ou les plans figés. Les vols sont chers, et c’est la météo qui décide de l’itinéraire. Nous prévoyons des jours de marge.',
      },
    },
    hero: {
      summer: {
        alt: { en: 'The edge of sea ice meeting dark open water under a low sun', fr: 'La lisière de la banquise et l’eau libre, sous un soleil bas' },
        subject: 'Floe edge near Pond Inlet at midnight, June',
        tone: 'snow',
      },
      winter: {
        alt: { en: 'A dog team crossing sea ice in blue twilight', fr: 'Un attelage de chiens sur la banquise, dans un crépuscule bleu' },
        subject: 'Dog team on sea ice in blue twilight, March',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'The floe edge near Pond Inlet, late May to June', fr: 'La lisière des glaces près de Pond Inlet, de fin mai à juin' },
        { en: 'Narwhals in the waters around north Baffin Island', fr: 'Les narvals dans les eaux du nord de l’île de Baffin' },
        { en: 'Daylight around the clock', fr: 'Le jour, à toute heure' },
        { en: 'Prints and carvings from Nunavut’s artists', fr: 'Les estampes et sculptures des artistes du Nunavut' },
      ],
      winter: [
        { en: 'Long nights and northern lights', fr: 'De longues nuits et des aurores boréales' },
        { en: 'Travelling by dog team or snowmobile with Inuit guides', fr: 'Voyager en traîneau à chiens ou en motoneige avec des guides inuits' },
        { en: 'Spring celebrations in Iqaluit in April, when the light comes back', fr: 'Les fêtes du printemps à Iqaluit en avril, quand la lumière revient' },
      ],
    },
    distancePreset: ['iqaluit', 'pond-inlet'],
    regionIds: ['iqaluit', 'pond-inlet'],
    frReview: 'needs-human-review',
  },
];
