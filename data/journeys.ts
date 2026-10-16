import type { Journey } from './types';

/**
 * Signature journeys. Prices are placeholder guide prices (CAD per person,
 * two sharing) and must be confirmed before launch.
 */
export const journeys: Journey[] = [
  // ── 1 ─────────────────────────────────────────────────────────────────────
  {
    id: 'rockies-to-the-pacific',
    slug: 'rockies-to-the-pacific',
    frReview: 'needs-human-review',
    title: { en: 'Rockies to the *Pacific*', fr: 'Des Rocheuses au *Pacifique*' },
    days: 15,
    seasons: ['summer'],
    fromPerPersonCAD: 21000,
    summary: {
      en: 'Glacier lakes, the Icefields Parkway, two days of mountains by train, then the open Pacific at Tofino. The west, in the order it was built.',
      fr: "Lacs glaciaires, la promenade des Glaciers, deux jours de montagnes en train, puis le Pacifique à Tofino. L'Ouest, dans l'ordre où il s'est construit.",
    },
    intro: {
      en: 'This is the one most people picture when they picture Canada, and it holds up. You start in the Rockies, drive the Icefields Parkway slowly, and let the train carry you down to the coast. The last few days are on the west coast of Vancouver Island, where the road simply stops at the ocean. It runs from June to late September; the train it relies on does not run in winter.',
      fr: "C'est le voyage que la plupart des gens imaginent quand ils pensent au Canada, et il tient ses promesses. Vous commencez dans les Rocheuses, vous prenez votre temps sur la promenade des Glaciers, puis le train vous descend jusqu'à la côte. Les derniers jours se passent sur la côte ouest de l'île de Vancouver, là où la route s'arrête tout simplement face à l'océan. Il se fait de juin à fin septembre ; le train sur lequel il repose ne circule pas l'hiver.",
    },
    honestNote: {
      en: 'Banff and Lake Louise are busy in July and August, and parking at the famous lakes is now limited or shuttle-only. We book the shuttles and plan early starts. If you want the same mountains in winter, we can build a different trip around skiing and frozen lakes, but it will not include the train.',
      fr: "Banff et Lake Louise sont très fréquentés en juillet et en août, et le stationnement aux lacs les plus connus est désormais limité ou réservé aux navettes. Nous réservons les navettes et prévoyons des départs matinaux. Si vous voulez ces mêmes montagnes en hiver, nous pouvons construire un autre voyage autour du ski et des lacs gelés, mais sans le train.",
    },
    route: ['calgary', 'banff', 'lake-louise', 'jasper', 'vancouver', 'tofino'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'banff',
        title: { en: 'Calgary to Banff', fr: 'De Calgary à Banff' },
        body: {
          en: 'Land in Calgary and drive 90 minutes west until the prairie runs into a wall of rock. Settle into Banff with nothing planned for the first evening. A short walk up Tunnel Mountain is the right amount of effort for jet lag.',
          fr: "Atterrissage à Calgary, puis 90 minutes de route vers l'ouest, jusqu'à ce que la prairie bute contre un mur de roche. Installation à Banff, sans rien de prévu le premier soir. Une courte marche sur le mont Tunnel, c'est l'effort qui convient au décalage horaire.",
        },
      },
      {
        days: 'Days 3–5',
        placeId: 'lake-louise',
        title: { en: 'Lake Louise and the high trails', fr: 'Lake Louise et les sentiers d’altitude' },
        body: {
          en: 'A private guide takes you up to the teahouse trails above Lake Louise before the tour buses wake up. One day is for Moraine Lake by shuttle at dawn, another for a quieter valley your guide picks on the morning. Evenings are yours, and they are long: in July it is light until nearly 10 pm.',
          fr: "Un guide privé vous emmène sur les sentiers des maisons de thé au-dessus de Lake Louise avant le réveil des autocars. Une journée est réservée au lac Moraine en navette à l'aube, une autre à une vallée plus calme que votre guide choisit le matin même. Les soirées sont à vous, et elles sont longues : en juillet, il fait jour jusqu'à près de 22 h.",
        },
      },
      {
        days: 'Day 6',
        title: { en: 'The Icefields Parkway', fr: 'La promenade des Glaciers' },
        body: {
          en: 'Two hundred and thirty kilometres of road between Lake Louise and Jasper, and almost nothing on it but glaciers, lakes and the occasional bighorn sheep. It takes four hours without stopping; we suggest eight. There is no phone signal for most of it, which is part of the point.',
          fr: "Deux cent trente kilomètres de route entre Lake Louise et Jasper, avec presque rien d'autre que des glaciers, des lacs et, parfois, un mouflon. Comptez quatre heures sans arrêt ; nous en conseillons huit. Il n'y a pas de réseau sur la plus grande partie du trajet, et c'est un peu l'idée.",
        },
      },
      {
        days: 'Days 7–8',
        placeId: 'jasper',
        title: { en: 'Jasper', fr: 'Jasper' },
        body: {
          en: 'Jasper is quieter and wilder than Banff, with more elk in the streets than you would expect. Paddle Maligne Lake early, or walk the canyon. At night it is a dark-sky preserve, so look up.',
          fr: "Jasper est plus calme et plus sauvage que Banff, avec plus de wapitis dans les rues qu'on ne l'imagine. Pagayez tôt sur le lac Maligne, ou marchez le long du canyon. La nuit, c'est une réserve de ciel étoilé : levez les yeux.",
        },
      },
      {
        days: 'Days 9–10',
        title: { en: 'By train to the coast', fr: 'En train jusqu’à la côte' },
        body: {
          en: 'Two daylight days on the rails from Jasper to Vancouver, with a night in a hotel halfway so you miss none of the scenery. The mountains give way to canyons, then to the Fraser Valley. You will read less than you planned.',
          fr: "Deux journées de train, de Jasper à Vancouver, avec une nuit à l'hôtel à mi-chemin pour ne rien manquer du paysage. Les montagnes laissent place aux canyons, puis à la vallée du Fraser. Vous lirez moins que prévu.",
        },
      },
      {
        days: 'Days 11–12',
        placeId: 'vancouver',
        title: { en: 'Vancouver', fr: 'Vancouver' },
        body: {
          en: 'Cycle the seawall around Stanley Park, eat your way through the markets, and take a seaplane or helicopter up the coast if the weather is clear. Vancouver does city and wilderness within 20 minutes of each other.',
          fr: "Faites le tour du parc Stanley à vélo le long de la digue, goûtez à tout dans les marchés, et prenez un hydravion ou un hélicoptère le long de la côte si le temps est dégagé. À Vancouver, la ville et la nature sauvage sont à vingt minutes l'une de l'autre.",
        },
      },
      {
        days: 'Days 13–15',
        placeId: 'tofino',
        title: { en: 'Tofino and the open Pacific', fr: 'Tofino et le Pacifique' },
        body: {
          en: 'A short flight takes you to the end of the road on Vancouver Island. Go out by boat for grey and humpback whales, walk the long beaches, and let the fog do what it likes. You fly home via Vancouver on the last day.',
          fr: "Un vol court vous dépose au bout de la route, sur l'île de Vancouver. Sortez en bateau voir les baleines grises et les baleines à bosse, marchez sur les longues plages, et laissez le brouillard faire ce qu'il veut. Retour via Vancouver le dernier jour.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'Two days by train from Jasper to Vancouver, with a hotel night halfway', fr: 'Deux jours de train de Jasper à Vancouver, avec une nuit d’hôtel à mi-parcours' },
      { en: 'Private guided days in Lake Louise and Jasper', fr: 'Journées avec guide privé à Lake Louise et à Jasper' },
      { en: 'Park passes and lake shuttle bookings', fr: 'Laissez-passer des parcs et réservations des navettes vers les lacs' },
      { en: 'Whale-watching by small boat from Tofino', fr: 'Observation des baleines en petit bateau depuis Tofino' },
      { en: 'Flight from Vancouver to Tofino', fr: 'Vol de Vancouver à Tofino' },
    ],
    experienceIds: [
      'the-rockies',
      'coast-to-coast-by-rail',
      'vancouver-and-the-islands',
      'whales',
      'heli-hiking',
      'floatplanes-and-helicopters',
      'private-guides',
    ],
    stayIds: ['stay-lake-chalet', 'stay-jasper-cabins', 'stay-vancouver-hotel', 'stay-tofino-inn'],
    eventIds: ['wildflowers-rockies', 'golden-larches', 'orcas-vancouver-island'],
    regionIds: [
      'calgary',
      'banff-lake-louise',
      'icefields-parkway',
      'jasper',
      'vancouver',
      'tofino-vancouver-island',
    ],
    provinceIds: ['alberta', 'british-columbia'],
    specialistId: 'spec-west',
    images: {
      summer: {
        subject: 'Turquoise glacier lake below a ring of peaks, July morning',
        tone: 'lake',
        alt: {
          en: 'A turquoise glacier lake below steep mountains on a clear summer morning',
          fr: 'Un lac glaciaire turquoise au pied de montagnes escarpées, par un matin d’été clair',
        },
      },
      winter: {
        subject: 'Frozen lake and snow-loaded spruce below the same peaks',
        tone: 'snow',
        alt: {
          en: 'The same mountain lake frozen and covered in snow, with spruce trees heavy with snow',
          fr: 'Le même lac de montagne gelé et enneigé, bordé d’épinettes chargées de neige',
        },
      },
    },
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: 'bears-whales-rainforest',
    slug: 'bears-whales-rainforest',
    frReview: 'needs-human-review',
    title: { en: 'Bears, Whales & *Rainforest*', fr: 'Ours, baleines et *forêt pluviale*' },
    days: 12,
    seasons: ['summer'],
    fromPerPersonCAD: 24000,
    summary: {
      en: 'Whales off Tofino, grizzlies on the rivers of the central coast, and a few nights in a floating lodge you can only reach by floatplane.',
      fr: "Les baleines au large de Tofino, les grizzlis sur les rivières de la côte centrale, et quelques nuits dans un lodge flottant accessible uniquement en hydravion.",
    },
    intro: {
      en: "British Columbia's coast is temperate rainforest: cedar and spruce down to the waterline, rivers full of salmon, and the animals that follow them. This trip starts with whales off Vancouver Island, then heads north to the Bella Coola valley and the Great Bear Rainforest for bears. It is built around late August to early October, when the salmon run and the bears come down to meet them. Pack a proper rain jacket. It is called a rainforest for a reason.",
      fr: "La côte de la Colombie-Britannique est une forêt pluviale tempérée : cèdres et épinettes jusqu'au bord de l'eau, rivières pleines de saumons, et les animaux qui les suivent. Le voyage commence par les baleines au large de l'île de Vancouver, puis remonte vers la vallée de Bella Coola et la forêt du Grand Ours pour les ours. Il est pensé pour la période de fin août à début octobre, quand les saumons remontent et que les ours descendent à leur rencontre. Prenez une vraie veste de pluie. Ce n'est pas pour rien qu'on parle de forêt pluviale.",
    },
    honestNote: {
      en: 'Bears follow the salmon, not our itinerary. Late August to early October is the best bet, but a river can be quiet for a day. Floatplanes do not fly in fog, so we leave slack before your flight home. The lodges have very few rooms and book up a year or more ahead.',
      fr: "Les ours suivent les saumons, pas notre itinéraire. La période de fin août à début octobre est la plus sûre, mais une rivière peut rester calme une journée. Les hydravions ne volent pas dans le brouillard : nous gardons donc de la marge avant votre vol retour. Les lodges ont très peu de chambres et se remplissent un an ou plus à l'avance.",
    },
    route: ['vancouver', 'tofino', 'bella-coola'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'vancouver',
        title: { en: 'Vancouver', fr: 'Vancouver' },
        body: {
          en: 'Arrive and recover by the water. A walk in Stanley Park gives you a first look at big cedars without leaving the city. Dinner is seafood, because it would be strange not to.',
          fr: "Arrivée et récupération au bord de l'eau. Une promenade dans le parc Stanley offre un premier aperçu des grands cèdres sans quitter la ville. Le dîner est aux fruits de mer, car il serait étrange de faire autrement.",
        },
      },
      {
        days: 'Days 3–5',
        placeId: 'tofino',
        title: { en: 'Tofino: whales and beaches', fr: 'Tofino : baleines et plages' },
        body: {
          en: 'Fly to Tofino and spend three days on the open coast. Small boats go out for humpback and grey whales, and at low tide black bears turn over rocks on the shoreline looking for crabs. A boat trip to a natural hot spring is a fair way to spend a wet afternoon.',
          fr: "Vol vers Tofino et trois jours sur la côte du large. De petits bateaux partent à la rencontre des baleines à bosse et des baleines grises, et à marée basse, les ours noirs retournent les pierres du rivage à la recherche de crabes. Une sortie en bateau jusqu'à une source chaude naturelle est une bonne façon d'occuper un après-midi pluvieux.",
        },
      },
      {
        days: 'Days 6–8',
        placeId: 'bella-coola',
        title: { en: 'The Bella Coola valley', fr: 'La vallée de Bella Coola' },
        body: {
          en: 'A short flight north takes you to a valley that feels a long way from anywhere, because it is. Local guides take you out on the rivers by drift boat to watch grizzlies fishing for salmon. You stay quiet, keep your distance, and let them get on with it.',
          fr: "Un vol court vers le nord vous mène dans une vallée qui semble très loin de tout, parce qu'elle l'est. Des guides locaux vous emmènent sur les rivières en barque pour observer les grizzlis qui pêchent le saumon. On reste silencieux, on garde ses distances et on les laisse faire.",
        },
      },
      {
        days: 'Days 9–11',
        title: { en: 'A floating lodge in the Great Bear Rainforest', fr: 'Un lodge flottant dans la forêt du Grand Ours' },
        body: {
          en: 'A floatplane drops you at a lodge moored in a quiet inlet. Days are spent by boat and on foot with guides who know these estuaries well: bears on the sedge flats, eagles, sea lions, perhaps humpbacks bubble-feeding in the channel. There is a small chance of a white-coated spirit bear, which we will not promise you.',
          fr: "Un hydravion vous dépose dans un lodge amarré au fond d'une anse tranquille. Les journées se passent en bateau et à pied avec des guides qui connaissent bien ces estuaires : ours dans les prairies de carex, pygargues, otaries, peut-être des baleines à bosse en chasse au filet de bulles dans le chenal. Il y a une petite chance de voir un ours esprit au pelage blanc, mais nous ne vous la promettrons pas.",
        },
      },
      {
        days: 'Day 12',
        title: { en: 'Out by floatplane', fr: 'Retour en hydravion' },
        body: {
          en: 'Fly back south along the coast to Vancouver for your flight home. If the fog has other ideas, this is the day we planned slack for. It is a beautiful flight when it goes, so get the window seat.',
          fr: "Vol vers le sud le long de la côte jusqu'à Vancouver pour votre vol retour. Si le brouillard en décide autrement, c'est pour ce jour-là que nous avons prévu de la marge. C'est un vol magnifique quand il part : prenez le hublot.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'All floatplane and coastal flights', fr: 'Tous les vols en hydravion et les vols côtiers' },
      { en: 'Guided bear viewing in the Bella Coola valley', fr: 'Observation des ours guidée dans la vallée de Bella Coola' },
      { en: 'Three nights full board at a floating lodge, with guiding', fr: 'Trois nuits en pension complète dans un lodge flottant, guidage compris' },
      { en: 'Whale-watching by small boat from Tofino', fr: 'Observation des baleines en petit bateau depuis Tofino' },
      { en: 'A rain jacket that actually works, on loan', fr: 'Une veste de pluie qui fonctionne vraiment, prêtée' },
    ],
    experienceIds: [
      'bears',
      'whales',
      'remote-lodges',
      'floatplanes-and-helicopters',
      'vancouver-and-the-islands',
      'private-guides',
    ],
    stayIds: ['stay-vancouver-hotel', 'stay-tofino-inn', 'stay-rainforest-lodge'],
    eventIds: ['grizzlies-salmon', 'orcas-vancouver-island'],
    regionIds: ['vancouver', 'tofino-vancouver-island', 'great-bear-rainforest'],
    provinceIds: ['british-columbia'],
    specialistId: 'spec-west',
    images: {
      summer: {
        subject: 'Grizzly on a salmon river, late September',
        tone: 'forest',
        alt: {
          en: 'A grizzly bear standing in a shallow river among rainforest trees, fishing for salmon',
          fr: 'Un grizzli debout dans une rivière peu profonde, entre les arbres de la forêt pluviale, en train de pêcher le saumon',
        },
      },
      winter: {
        subject: 'Mist over a rainforest inlet in winter rain',
        tone: 'forest',
        alt: {
          en: 'Low cloud and rain over a quiet inlet lined with dark cedar and spruce in winter',
          fr: 'Nuages bas et pluie sur une anse tranquille bordée de cèdres et d’épinettes sombres, en hiver',
        },
      },
    },
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: 'polar-bear-season',
    slug: 'polar-bear-season',
    frReview: 'needs-human-review',
    title: { en: '*Polar Bear* Season', fr: 'La saison des *ours polaires*' },
    days: 8,
    seasons: ['winter'],
    fromPerPersonCAD: 19200,
    summary: {
      en: 'Churchill in October and November, when the bears wait on the shore for Hudson Bay to freeze. Polar bear season is about six weeks long. We will tell you which six.',
      fr: "Churchill en octobre et en novembre, quand les ours attendent sur le rivage que la baie d'Hudson gèle. La saison dure environ six semaines. Nous vous dirons lesquelles.",
    },
    intro: {
      en: 'Every autumn, polar bears gather along the coast near Churchill, Manitoba, waiting for the sea ice to form so they can go back out to hunt seals. For a few weeks it is one of the most reliable places on earth to see them. You reach Churchill by air or by a two-day train; there is no road. You spend your days on the tundra in heated, high-sided vehicles, which is the safe and respectful way to do this.',
      fr: "Chaque automne, les ours polaires se rassemblent sur la côte près de Churchill, au Manitoba, en attendant que la banquise se forme pour repartir chasser le phoque. Pendant quelques semaines, c'est l'un des endroits les plus fiables au monde pour les voir. On rejoint Churchill en avion ou par un train de deux jours ; il n'y a pas de route. Vos journées se passent sur la toundra, dans des véhicules chauffés et surélevés, ce qui est la façon sûre et respectueuse de le faire.",
    },
    honestNote: {
      en: 'Weather on Hudson Bay can ground flights for a day, sometimes two. That is why the trip starts and ends with spare time in Winnipeg, and why we do not book tight onward connections. Bears are very likely in season, not guaranteed. It is cold, windy and dark early. Rooms in Churchill are few and the best weeks sell out more than a year ahead.',
      fr: "Sur la baie d'Hudson, la météo peut clouer les avions au sol un jour, parfois deux. C'est pourquoi le voyage commence et se termine avec du temps libre à Winnipeg, et pourquoi nous ne réservons pas de correspondances serrées. En saison, les ours sont très probables, pas garantis. Il fait froid, il y a du vent et la nuit tombe tôt. Les chambres à Churchill sont rares et les meilleures semaines se vendent plus d'un an à l'avance.",
    },
    route: ['winnipeg', 'churchill'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'winnipeg',
        title: { en: 'Winnipeg, on purpose', fr: 'Winnipeg, volontairement' },
        body: {
          en: 'Arrive in Winnipeg and take a day here before flying north. It is a buffer against delays, but it is also a good city: the river junction at The Forks, a serious human rights museum, and better food than its reputation. We fit your cold-weather gear on the second evening.',
          fr: "Arrivée à Winnipeg et une journée sur place avant de partir vers le nord. C'est une marge contre les retards, mais c'est aussi une ville agréable : la confluence des rivières à La Fourche, un musée des droits de la personne qui mérite le détour, et une cuisine meilleure que sa réputation. Nous ajustons votre équipement grand froid le deuxième soir.",
        },
      },
      {
        days: 'Day 3',
        placeId: 'churchill',
        title: { en: 'North to Churchill', fr: 'Cap au nord, vers Churchill' },
        body: {
          en: 'A flight of a little over two hours takes you from city to subarctic. The trees thin out and then stop. In the afternoon your guide drives you around town and explains the rules, which are taken seriously: bears do walk through Churchill.',
          fr: "Un vol d'un peu plus de deux heures vous fait passer de la ville au subarctique. Les arbres se raréfient puis disparaissent. L'après-midi, votre guide vous fait faire le tour de la ville et vous explique les règles, qui sont prises très au sérieux : des ours traversent bel et bien Churchill.",
        },
      },
      {
        days: 'Days 4–5',
        title: { en: 'Two full days on the tundra', fr: 'Deux journées complètes sur la toundra' },
        body: {
          en: 'Long days out on the coast in tundra vehicles, with lunch on board and a heated cabin. Bears sleep in the willows, spar on the ice edge, and sometimes come over to inspect the tyres. Arctic foxes and ptarmigan are a quiet bonus.',
          fr: "De longues journées sur la côte à bord de véhicules de toundra, avec déjeuner à bord et cabine chauffée. Les ours dorment dans les saules, se mesurent au bord de la glace, et viennent parfois inspecter les pneus. Renards arctiques et lagopèdes sont un bonus discret.",
        },
      },
      {
        days: 'Day 6',
        title: { en: 'Dogs, town and the bay', fr: 'Chiens, village et baie' },
        body: {
          en: 'A morning with a dog-sled team on the trails outside town, if there is enough snow, and an afternoon learning about the people who have lived on this coast for a very long time. On a clear night there is a fair chance of northern lights. It is not why you came, but you will not mind.',
          fr: "Une matinée avec un attelage de chiens sur les pistes autour du village, s'il y a assez de neige, et un après-midi pour découvrir les peuples qui vivent sur cette côte depuis très longtemps. Par nuit claire, il y a de bonnes chances de voir des aurores boréales. Ce n'est pas pour cela que vous êtes venu, mais vous ne direz pas non.",
        },
      },
      {
        days: 'Day 7',
        placeId: 'winnipeg',
        title: { en: 'Back south', fr: 'Retour vers le sud' },
        body: {
          en: 'Fly back to Winnipeg, weather allowing. A warm hotel and a long dinner. If the flight is delayed, your specialist is already rearranging things.',
          fr: "Vol de retour vers Winnipeg, si la météo le permet. Un hôtel chaud et un long dîner. Si le vol est retardé, votre spécialiste est déjà en train de tout réorganiser.",
        },
      },
      {
        days: 'Day 8',
        title: { en: 'Home, or a spare day', fr: 'Retour, ou journée de réserve' },
        body: {
          en: 'You fly home today. If Hudson Bay held you up, this is the day that absorbs it. Either way, you leave with more bear photographs than anyone will want to see.',
          fr: "Vol retour aujourd'hui. Si la baie d'Hudson vous a retenus, c'est cette journée qui absorbe le retard. Dans tous les cas, vous repartez avec plus de photos d'ours que quiconque ne voudra en voir.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'Return flights between Winnipeg and Churchill', fr: 'Vols aller-retour entre Winnipeg et Churchill' },
      { en: 'Two full days in a tundra vehicle with a naturalist guide', fr: 'Deux journées complètes en véhicule de toundra avec un guide naturaliste' },
      { en: 'Loaned parka, boots and mitts rated well below freezing', fr: 'Parka, bottes et moufles grand froid prêtées' },
      { en: 'A dog-sledding morning, snow permitting', fr: 'Une matinée en traîneau à chiens, si l’enneigement le permet' },
      { en: 'Spare days in Winnipeg built in for weather', fr: 'Journées de réserve à Winnipeg prévues pour la météo' },
    ],
    experienceIds: ['polar-bears', 'northern-lights', 'remote-lodges', 'private-guides'],
    stayIds: ['stay-churchill-tundra-lodge'],
    eventIds: ['polar-bears-churchill'],
    regionIds: ['winnipeg', 'churchill'],
    provinceIds: ['manitoba'],
    specialistId: 'spec-north',
    images: {
      summer: {
        subject: 'Polar bear resting on rocks by Hudson Bay, July',
        tone: 'granite',
        alt: {
          en: 'A polar bear lying on pink granite rocks beside the grey water of Hudson Bay in summer',
          fr: 'Un ours polaire couché sur des rochers de granit rose au bord des eaux grises de la baie d’Hudson, en été',
        },
      },
      winter: {
        subject: 'Polar bear walking across snowy tundra, November',
        tone: 'snow',
        alt: {
          en: 'A polar bear walking across flat snowy tundra under a pale November sky',
          fr: 'Un ours polaire marchant sur la toundra enneigée sous un ciel pâle de novembre',
        },
      },
    },
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: 'yukon-under-the-aurora',
    slug: 'yukon-under-the-aurora',
    frReview: 'needs-human-review',
    title: { en: 'Yukon Under the *Aurora*', fr: 'Le Yukon sous les *aurores*' },
    days: 9,
    seasons: ['winter'],
    isNew: true,
    fromPerPersonCAD: 13500,
    summary: {
      en: 'Five nights in cabins outside Whitehorse with dark skies, dogs, snowshoes and a woodstove. Yes, you can see the northern lights. No, not from Toronto.',
      fr: "Cinq nuits en chalets près de Whitehorse, avec un ciel noir, des chiens, des raquettes et un poêle à bois. Oui, on peut voir les aurores boréales. Non, pas depuis Toronto.",
    },
    intro: {
      en: 'The Yukon sits right under the auroral oval, has very little light pollution and, in winter, very long nights. We put you in cabins away from town so you can watch from the doorstep rather than a car park. Days are for dog-sledding, snowshoeing and a trip out to Kluane, where the mountains are bigger than anything in the south. Aurora is also visible from late August, and we can plan an autumn version, but this trip is built for the deep-winter nights.',
      fr: "Le Yukon se trouve juste sous l'ovale auroral, avec très peu de pollution lumineuse et, l'hiver, des nuits très longues. Nous vous installons dans des chalets loin de la ville pour que vous puissiez regarder depuis le pas de la porte plutôt que depuis un parking. Les journées sont consacrées au traîneau à chiens, à la raquette et à une excursion vers Kluane, où les montagnes dépassent tout ce que l'on trouve plus au sud. Les aurores sont aussi visibles dès la fin août et nous pouvons préparer une version automnale, mais ce voyage est pensé pour les longues nuits du cœur de l'hiver.",
    },
    honestNote: {
      en: 'Clouds exist. The aurora is reliable here, but no one can promise a clear sky on a given night, which is why we plan at least five nights in the dark. It can be minus 30 °C or colder. We lend you proper gear and keep a warm cabin a few steps away.',
      fr: "Les nuages existent. Les aurores sont fréquentes ici, mais personne ne peut promettre un ciel dégagé un soir donné : c'est pourquoi nous prévoyons au moins cinq nuits dans l'obscurité. Il peut faire moins 30 °C, voire plus froid. Nous vous prêtons un vrai équipement et gardons un chalet chaud à quelques pas.",
    },
    route: ['whitehorse', 'haines-junction'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'whitehorse',
        title: { en: 'Whitehorse', fr: 'Whitehorse' },
        body: {
          en: 'Fly in via Vancouver or Calgary and spend a night in town. We fit your parka, boots and mitts the next morning, then walk the frozen riverfront. It is a small capital with good coffee and a frontier sense of humour.',
          fr: "Arrivée via Vancouver ou Calgary et une nuit en ville. Nous ajustons votre parka, vos bottes et vos moufles le lendemain matin, puis balade le long de la rivière gelée. C'est une petite capitale avec du bon café et un humour de pionnier.",
        },
      },
      {
        days: 'Days 3–5',
        title: { en: 'Cabins and the night sky', fr: 'Chalets et ciel nocturne' },
        body: {
          en: 'Move out to wood-heated cabins on a lake about half an hour from town. Your host wakes you if the lights come out, so you can sleep without guilt. By day, try a dog-sled team or snowshoe into the spruce.',
          fr: "Installation dans des chalets chauffés au bois, au bord d'un lac, à une demi-heure de la ville. Votre hôte vous réveille si les aurores apparaissent : vous pouvez dormir sans remords. Le jour, essayez le traîneau à chiens ou partez en raquettes dans les épinettes.",
        },
      },
      {
        days: 'Days 6–7',
        placeId: 'haines-junction',
        title: { en: 'Kluane in winter', fr: 'Kluane en hiver' },
        body: {
          en: 'A day trip west to Haines Junction and the edge of Kluane, home to the highest mountains in Canada. The light is low and golden all day in midwinter. Back at the cabins by dark, which arrives early.',
          fr: "Une journée vers l'ouest jusqu'à Haines Junction et l'entrée de Kluane, où se trouvent les plus hautes montagnes du Canada. En plein hiver, la lumière reste basse et dorée toute la journée. Retour aux chalets à la nuit tombée, qui arrive tôt.",
        },
      },
      {
        days: 'Day 8',
        title: { en: 'Hot springs and a last night out', fr: 'Sources chaudes et une dernière nuit dehors' },
        body: {
          en: 'An afternoon in outdoor hot pools near Whitehorse, where your hair freezes while the rest of you does not. One last night of watching the sky. If the aurora has been shy, this is your fifth chance.',
          fr: "Un après-midi dans des bassins d'eau chaude en plein air près de Whitehorse, où vos cheveux gèlent pendant que le reste de vous se réchauffe. Une dernière nuit à guetter le ciel. Si les aurores ont été timides, c'est votre cinquième chance.",
        },
      },
      {
        days: 'Day 9',
        placeId: 'whitehorse',
        title: { en: 'Home', fr: 'Retour' },
        body: {
          en: 'Fly south from Whitehorse. Most flights connect through Vancouver. You will be tired, and slightly smug.',
          fr: "Vol vers le sud depuis Whitehorse, le plus souvent via Vancouver. Vous serez fatigué, et un peu fier de vous.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'Five nights in lakeside cabins chosen for dark skies', fr: 'Cinq nuits en chalets au bord d’un lac, choisis pour leur ciel noir' },
      { en: 'Aurora wake-up calls from your host', fr: 'Réveil par votre hôte en cas d’aurores' },
      { en: 'Loaned winter parka, boots and mitts', fr: 'Parka, bottes et moufles d’hiver prêtées' },
      { en: 'A day with a dog-sled team', fr: 'Une journée avec un attelage de chiens' },
      { en: 'Private guided day to Kluane', fr: 'Journée avec guide privé à Kluane' },
    ],
    experienceIds: ['northern-lights', 'winter-cabins', 'private-guides'],
    stayIds: ['stay-aurora-cabins'],
    eventIds: ['aurora-yukon'],
    regionIds: ['whitehorse', 'kluane'],
    provinceIds: ['yukon'],
    specialistId: 'spec-north',
    images: {
      summer: {
        subject: 'Kluane peaks above a green valley, late August evening',
        tone: 'forest',
        alt: {
          en: 'Snow-capped mountains above a green boreal valley in the Yukon in late summer',
          fr: 'Montagnes enneigées au-dessus d’une vallée boréale verte au Yukon, à la fin de l’été',
        },
      },
      winter: {
        subject: 'Green aurora over a snowy cabin and spruce',
        tone: 'night',
        alt: {
          en: 'Green northern lights over a small snow-covered cabin among spruce trees',
          fr: 'Aurores boréales vertes au-dessus d’un petit chalet enneigé entouré d’épinettes',
        },
      },
    },
  },

  // ── 5 ─────────────────────────────────────────────────────────────────────
  {
    id: 'quebec-slowly',
    slug: 'quebec-slowly',
    frReview: 'needs-human-review',
    title: { en: 'Québec, *Slowly*', fr: 'Le Québec, *lentement*' },
    days: 10,
    seasons: ['summer', 'winter'],
    fromPerPersonCAD: 12500,
    summary: {
      en: 'Montréal, Québec City and the Charlevoix coast at walking pace, with whales at Tadoussac in summer and snow, sleds and long lunches in winter.',
      fr: "Montréal, Québec et la côte de Charlevoix au rythme de la marche, avec les baleines de Tadoussac en été, et la neige, les traîneaux et les longs déjeuners en hiver.",
    },
    intro: {
      en: 'This is a trip for people who like to arrive somewhere and stay put for a bit. You take the train from Montréal to Québec City, then follow the St. Lawrence downriver into Charlevoix, where the hills drop straight into the water. In summer it ends at Tadoussac, where whales feed at the mouth of the Saguenay fjord. In winter we swap the whales for more time in Charlevoix: cross-country skiing, dog-sledding and a cabin by the river.',
      fr: "Ce voyage s'adresse à ceux qui aiment arriver quelque part et y rester un peu. Vous prenez le train de Montréal à Québec, puis vous suivez le Saint-Laurent jusqu'à Charlevoix, où les collines plongent directement dans le fleuve. En été, il se termine à Tadoussac, où les baleines se nourrissent à l'embouchure du fjord du Saguenay. En hiver, nous remplaçons les baleines par plus de temps dans Charlevoix : ski de fond, traîneau à chiens et un chalet au bord du fleuve.",
    },
    honestNote: {
      en: 'Whale-watching boats at Tadoussac run from roughly June to October, so the winter version does not include it. Winter in Québec is properly cold, and that is rather the point. The train between Montréal and Québec City is comfortable, not fast.',
      fr: "Les excursions aux baleines à Tadoussac ont lieu à peu près de juin à octobre : la version hivernale ne les inclut donc pas. L'hiver au Québec est vraiment froid, et c'est un peu tout l'intérêt. Le train entre Montréal et Québec est confortable, pas rapide.",
    },
    route: ['montreal', 'quebec-city', 'baie-saint-paul', 'tadoussac'],
    itinerary: [
      {
        days: 'Days 1–3',
        placeId: 'montreal',
        title: { en: 'Montréal', fr: 'Montréal' },
        body: {
          en: 'Three days in a city that eats late and argues happily about bagels. Walk the Plateau and Mile End, climb Mont Royal, and spend a morning in the Jean-Talon market. In winter, the underground city and the outdoor rinks are both worth your time.',
          fr: "Trois jours dans une ville qui dîne tard et débat volontiers de bagels. Promenez-vous sur le Plateau et dans le Mile End, montez sur le mont Royal et passez une matinée au marché Jean-Talon. En hiver, la ville souterraine comme les patinoires extérieures valent le détour.",
        },
      },
      {
        days: 'Days 4–6',
        placeId: 'quebec-city',
        title: { en: 'Québec City', fr: 'Québec' },
        body: {
          en: 'A three-hour train ride east, then the only walled city north of Mexico. A private guide walks you through four centuries in a morning; the afternoons are for getting lost on purpose. In February, the Winter Carnival takes over the town, and the dates move each year.',
          fr: "Trois heures de train vers l'est, puis la seule ville fortifiée au nord du Mexique. Un guide privé vous fait traverser quatre siècles en une matinée ; les après-midi servent à se perdre volontairement. En février, le Carnaval d'hiver s'empare de la ville, et ses dates changent chaque année.",
        },
      },
      {
        days: 'Days 7–8',
        placeId: 'baie-saint-paul',
        title: { en: 'Charlevoix', fr: 'Charlevoix' },
        body: {
          en: 'An hour downriver to Baie-Saint-Paul, a village of painters and cheesemakers. Eat well, walk the hills above the river, and visit a farm or two. In winter, this is where you go dog-sledding and cross-country skiing.',
          fr: "Une heure en aval jusqu'à Baie-Saint-Paul, village de peintres et de fromagers. On mange bien, on marche sur les hauteurs du fleuve et on visite une ferme ou deux. En hiver, c'est ici que l'on fait du traîneau à chiens et du ski de fond.",
        },
      },
      {
        days: 'Day 9',
        placeId: 'tadoussac',
        title: { en: 'Tadoussac (summer) or the river cabin (winter)', fr: 'Tadoussac (été) ou le chalet au bord du fleuve (hiver)' },
        body: {
          en: 'In summer, cross the Saguenay by the free ferry and go out in a Zodiac or a larger boat for minke, fin and sometimes blue whales, plus the resident belugas. In winter, we keep you in Charlevoix for a night in a cabin above the frozen river instead. Both involve looking at the St. Lawrence for longer than you expected.',
          fr: "En été, traversée du Saguenay par le traversier gratuit, puis sortie en zodiac ou en bateau plus grand pour voir les petits rorquals, les rorquals communs et parfois le rorqual bleu, ainsi que les bélugas résidents. En hiver, nous vous gardons plutôt à Charlevoix pour une nuit dans un chalet au-dessus du fleuve gelé. Dans les deux cas, vous regarderez le Saint-Laurent plus longtemps que prévu.",
        },
      },
      {
        days: 'Day 10',
        placeId: 'quebec-city',
        title: { en: 'Back to Québec City and home', fr: 'Retour à Québec, puis départ' },
        body: {
          en: 'A scenic drive back along the river to Québec City airport, about three hours from Tadoussac or one from Charlevoix. Flights home usually connect through Montréal or Toronto. Bring room in your bag for maple and cheese.',
          fr: "Retour par la route panoramique le long du fleuve jusqu'à l'aéroport de Québec, à environ trois heures de Tadoussac ou une heure de Charlevoix. Les vols retour passent généralement par Montréal ou Toronto. Gardez de la place dans vos bagages pour l'érable et le fromage.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'First-class train from Montréal to Québec City', fr: 'Train en première classe de Montréal à Québec' },
      { en: 'Private guided walk in Old Québec', fr: 'Visite guidée privée du Vieux-Québec' },
      { en: 'Private driver along the Charlevoix coast', fr: 'Chauffeur privé le long de la côte de Charlevoix' },
      { en: 'Summer: whale-watching from Tadoussac', fr: 'Été : observation des baleines depuis Tadoussac' },
      { en: 'Winter: dog-sledding and a riverside cabin night', fr: 'Hiver : traîneau à chiens et une nuit en chalet au bord du fleuve' },
    ],
    experienceIds: ['quebec-old-cities', 'whales', 'winter-cabins', 'private-guides'],
    stayIds: ['stay-montreal-hotel', 'stay-quebec-auberge', 'stay-charlevoix-manor'],
    eventIds: ['whales-tadoussac', 'fall-colours'],
    regionIds: ['montreal', 'quebec-city', 'charlevoix', 'tadoussac'],
    provinceIds: ['quebec'],
    specialistId: 'spec-east',
    images: {
      summer: {
        subject: 'Charlevoix hills dropping into the St. Lawrence, July',
        tone: 'birch',
        alt: {
          en: 'Green hills and a small village above the wide St. Lawrence River in summer',
          fr: 'Collines vertes et petit village au-dessus du large fleuve Saint-Laurent, en été',
        },
      },
      winter: {
        subject: 'Snowy street in Old Québec at dusk, warm windows',
        tone: 'snow',
        alt: {
          en: 'A narrow snow-covered street in Old Québec at dusk with lit windows',
          fr: 'Une rue étroite et enneigée du Vieux-Québec au crépuscule, aux fenêtres éclairées',
        },
      },
    },
  },

  // ── 6 ─────────────────────────────────────────────────────────────────────
  {
    id: 'the-atlantic-edge',
    slug: 'the-atlantic-edge',
    frReview: 'needs-human-review',
    title: { en: 'The *Atlantic* Edge', fr: 'Au bord de l’*Atlantique*' },
    days: 14,
    seasons: ['summer'],
    fromPerPersonCAD: 18200,
    summary: {
      en: 'Cape Breton, Prince Edward Island and Newfoundland: cliffs, fiords, lobster, icebergs in early summer and whales most of it.',
      fr: "Le Cap-Breton, l'Île-du-Prince-Édouard et Terre-Neuve : falaises, fjords, homard, icebergs en début d'été et baleines presque tout le reste du temps.",
    },
    intro: {
      en: 'Atlantic Canada is where the country faces Europe, and it has the weather and the conversation to prove it. You drive the Cabot Trail, take the ferry to Prince Edward Island, then fly to Newfoundland for Gros Morne and the long road east to St. John’s. People here will talk to you. Leave time for that.',
      fr: "Le Canada atlantique, c'est là où le pays regarde vers l'Europe, et la météo comme la conversation le confirment. Vous parcourez la piste Cabot, prenez le traversier pour l'Île-du-Prince-Édouard, puis vous volez vers Terre-Neuve pour le Gros-Morne et la longue route vers l'est jusqu'à St. John's. Ici, les gens vous parleront. Prévoyez du temps pour ça.",
    },
    honestNote: {
      en: 'You cannot have the peak of everything at once. Icebergs are best from late May to June, whales from June to August, puffins from May to August, and the Cabot Trail colours in early October. Tell us what matters most and we will set the dates. Fog is common on the coast, and so is changing the plan because of it.',
      fr: "On ne peut pas tout avoir au meilleur moment en même temps. Les icebergs sont à leur apogée de fin mai à juin, les baleines de juin à août, les macareux de mai à août, et les couleurs de la piste Cabot début octobre. Dites-nous ce qui compte le plus et nous fixerons les dates. Le brouillard est fréquent sur la côte, tout comme les changements de programme qu'il impose.",
    },
    route: ['halifax', 'baddeck', 'charlottetown', 'gros-morne', 'st-johns'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'halifax',
        title: { en: 'Halifax', fr: 'Halifax' },
        body: {
          en: 'A harbour city with a long naval history and a short walk between every good place. Eat seafood on the waterfront and take a morning drive to the granite coast at Peggy’s Cove before the coaches arrive.',
          fr: "Une ville portuaire à la longue histoire navale, où tous les bons endroits sont à deux pas. Fruits de mer sur le front de mer, puis une matinée sur la côte de granit de Peggy's Cove avant l'arrivée des autocars.",
        },
      },
      {
        days: 'Days 3–5',
        placeId: 'baddeck',
        title: { en: 'The Cabot Trail', fr: 'La piste Cabot' },
        body: {
          en: 'Drive north to Cape Breton and base yourself in a cottage for three nights. The Cabot Trail is a 300-kilometre loop of highland plateau and sea cliffs; do it over two days, not one. Listen for fiddle music in the evenings, which is not hard.',
          fr: "Route vers le nord jusqu'au Cap-Breton, et trois nuits dans un cottage. La piste Cabot est une boucle de 300 kilomètres entre plateau des Hautes-Terres et falaises marines ; faites-la en deux jours, pas un. Le soir, tendez l'oreille pour le violon traditionnel, ce qui n'est pas difficile.",
        },
      },
      {
        days: 'Days 6–8',
        placeId: 'charlottetown',
        title: { en: 'Prince Edward Island', fr: 'Île-du-Prince-Édouard' },
        body: {
          en: 'A ferry across the Northumberland Strait to an island of red soil, potato fields and very good oysters. Stay in a farmhouse, cycle a quiet stretch of the old rail trail, and eat lobster with people who know how to crack it. The ferry runs roughly May to December.',
          fr: "Un traversier sur le détroit de Northumberland vers une île de terre rouge, de champs de pommes de terre et d'excellentes huîtres. Séjour dans une ferme, vélo sur une portion tranquille de l'ancienne voie ferrée, et homard en compagnie de gens qui savent le décortiquer. Le traversier circule à peu près de mai à décembre.",
        },
      },
      {
        days: 'Days 9–10',
        placeId: 'gros-morne',
        title: { en: 'Gros Morne', fr: 'Le Gros-Morne' },
        body: {
          en: 'Fly to Deer Lake, usually via Halifax, and drive into Gros Morne. Take the boat into Western Brook Pond, a landlocked fiord with cliffs on both sides, and walk on the Tablelands, where the earth’s mantle sits at the surface. It looks like another planet and feels like a very good hike.',
          fr: "Vol vers Deer Lake, généralement via Halifax, puis route vers le Gros-Morne. Prenez le bateau sur l'étang Western Brook, un fjord enclavé entre deux murs de falaises, et marchez sur les Tablelands, où le manteau terrestre affleure à la surface. On dirait une autre planète, et c'est une très belle randonnée.",
        },
      },
      {
        days: 'Days 11–12',
        title: { en: 'Across the island, by way of iceberg alley', fr: 'À travers l’île, par l’allée des icebergs' },
        body: {
          en: 'The drive to St. John’s is long, so we break it with a night on the north-east coast near Twillingate. In early summer, icebergs from Greenland drift past the headlands. Later in the season, whales take their place.',
          fr: "La route vers St. John's est longue : nous la coupons par une nuit sur la côte nord-est, près de Twillingate. En début d'été, des icebergs venus du Groenland défilent devant les caps. Plus tard dans la saison, les baleines prennent le relais.",
        },
      },
      {
        days: 'Days 13–14',
        placeId: 'st-johns',
        title: { en: 'St. John’s', fr: 'St. John’s' },
        body: {
          en: 'Coloured houses on steep streets, Signal Hill above the harbour, and Cape Spear, the most easterly point in North America. A boat out of Witless Bay takes you to puffins and, with luck, humpbacks. You fly home from here, a bit closer to Europe than when you started.',
          fr: "Maisons colorées dans des rues en pente, Signal Hill au-dessus du port, et le cap Spear, point le plus à l'est de l'Amérique du Nord. Un bateau au départ de Witless Bay vous emmène voir les macareux et, avec de la chance, les baleines à bosse. Vous repartez d'ici, un peu plus près de l'Europe qu'au départ.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'Car hire with a route planned around the weather', fr: 'Location de voiture et itinéraire pensé en fonction de la météo' },
      { en: 'Ferry to Prince Edward Island and flight to Newfoundland', fr: 'Traversier vers l’Île-du-Prince-Édouard et vol vers Terre-Neuve' },
      { en: 'Boat trip on Western Brook Pond', fr: 'Excursion en bateau sur l’étang Western Brook' },
      { en: 'Puffin and whale boat trip from Witless Bay', fr: 'Sortie en bateau aux macareux et aux baleines depuis Witless Bay' },
      { en: 'A private guide for a day in Gros Morne', fr: 'Un guide privé pour une journée au Gros-Morne' },
    ],
    experienceIds: ['whales', 'private-guides'],
    stayIds: ['stay-cabot-cottages', 'stay-pei-farmhouse', 'stay-newfoundland-inn'],
    eventIds: ['icebergs-newfoundland', 'humpbacks-newfoundland', 'puffins-newfoundland', 'fall-colours'],
    regionIds: ['cabot-trail', 'prince-edward-island', 'newfoundland'],
    provinceIds: ['atlantic-canada'],
    specialistId: 'spec-east',
    images: {
      summer: {
        subject: 'Iceberg off a Newfoundland headland, June',
        tone: 'lake',
        alt: {
          en: 'A white iceberg floating off a rocky Newfoundland headland in early summer',
          fr: 'Un iceberg blanc dérivant au large d’un cap rocheux de Terre-Neuve, en début d’été',
        },
      },
      winter: {
        subject: 'Coloured houses of St. John’s under snow',
        tone: 'snow',
        alt: {
          en: 'Brightly painted row houses on a steep street in St. John’s covered in snow',
          fr: 'Maisons en rangée aux couleurs vives dans une rue en pente de St. John’s, sous la neige',
        },
      },
    },
  },

  // ── 7 ─────────────────────────────────────────────────────────────────────
  {
    id: 'coast-to-coast',
    slug: 'coast-to-coast',
    frReview: 'needs-human-review',
    title: { en: 'Canada *Coast to Coast*', fr: 'Le Canada *d’un océan à l’autre*' },
    days: 21,
    seasons: ['summer'],
    fromPerPersonCAD: 35700,
    summary: {
      en: 'Pacific to Atlantic in three weeks: Victoria, the Rockies by train, Toronto, Montréal, Québec City and Halifax. A big trip, honestly described.',
      fr: "Du Pacifique à l'Atlantique en trois semaines : Victoria, les Rocheuses en train, Toronto, Montréal, Québec et Halifax. Un grand voyage, décrit honnêtement.",
    },
    intro: {
      en: 'Some people want to see the whole country once, end to end, and this is how we do it without wearing you out. You start by the Pacific on Vancouver Island and finish by the Atlantic in Halifax, crossing four time zones. The long middle is done by train where the scenery earns it and by air where it does not. You will see a lot. You will also spend real time getting between places, and we would rather tell you now.',
      fr: "Certains veulent voir tout le pays une fois, d'un bout à l'autre, et voici comment nous le faisons sans vous épuiser. Vous commencez au bord du Pacifique sur l'île de Vancouver et terminez au bord de l'Atlantique à Halifax, en traversant quatre fuseaux horaires. Le long milieu se fait en train là où le paysage le mérite, et en avion là où il ne le mérite pas. Vous verrez beaucoup. Vous passerez aussi un vrai temps à vous déplacer, et nous préférons vous le dire maintenant.",
    },
    honestNote: {
      en: 'Vancouver to Halifax is further than London to Cairo. This trip has three flights (a floatplane, Calgary to Toronto, and Québec City to Halifax), two daylight days on the train, a four-hour mountain drive and two shorter train rides in the east. That adds up to roughly 40 hours in transit. Four of the 21 days are mostly travel, and two more are half travel. You also lose four hours to the clocks heading east. If you would rather unpack than pack, pick one coast and come back for the other.',
      fr: "De Vancouver à Halifax, la distance est plus grande que de Paris à Moscou, ou de Londres au Caire. Ce voyage compte trois vols (un hydravion, Calgary–Toronto et Québec–Halifax), deux journées entières de train, quatre heures de route de montagne et deux trajets en train plus courts à l'est. Au total, environ 40 heures de transport. Quatre des 21 jours sont surtout des jours de trajet, et deux autres le sont à moitié. Vous perdez aussi quatre heures en allant vers l'est. Si vous préférez défaire vos valises plutôt que les refaire, choisissez une côte et revenez pour l'autre.",
    },
    route: [
      'victoria',
      'vancouver',
      'jasper',
      'lake-louise',
      'banff',
      'calgary',
      'toronto',
      'montreal',
      'quebec-city',
      'halifax',
    ],
    itinerary: [
      {
        days: 'Days 1–3',
        placeId: 'victoria',
        title: { en: 'Victoria, by the Pacific', fr: 'Victoria, au bord du Pacifique' },
        body: {
          en: 'Start slowly in Victoria, at the southern tip of Vancouver Island. Gardens, a walkable harbour, and a boat out for orcas in the Salish Sea. Three nights here give your body time to work out which continent it is on.',
          fr: "Début en douceur à Victoria, à la pointe sud de l'île de Vancouver. Jardins, port à parcourir à pied et sortie en bateau pour les orques dans la mer des Salish. Trois nuits ici laissent à votre corps le temps de comprendre sur quel continent il se trouve.",
        },
      },
      {
        days: 'Days 4–5',
        placeId: 'vancouver',
        title: { en: 'Floatplane to Vancouver', fr: 'En hydravion jusqu’à Vancouver' },
        body: {
          en: 'A 35-minute floatplane flight lands you in Vancouver harbour, which is the best way to arrive in any city. Two days for the seawall, the markets and the mountains on the north shore. Get an early night before the train.',
          fr: "Un vol de 35 minutes en hydravion vous dépose dans le port de Vancouver, la meilleure façon d'arriver dans une ville. Deux jours pour la digue, les marchés et les montagnes de la rive nord. Couchez-vous tôt avant le train.",
        },
      },
      {
        days: 'Days 6–7',
        title: { en: 'Two days on the train', fr: 'Deux jours de train' },
        body: {
          en: 'Two daylight days by rail from Vancouver to Jasper, with a hotel night on the way. Coastal forest, then dry canyons, then the Rockies rising up. These are travel days, but they are the kind people book trips for.',
          fr: "Deux journées de train de Vancouver à Jasper, avec une nuit à l'hôtel en chemin. Forêt côtière, puis canyons arides, puis les Rocheuses qui se dressent. Ce sont des jours de trajet, mais de ceux pour lesquels on réserve un voyage.",
        },
      },
      {
        days: 'Days 8–12',
        placeId: 'lake-louise',
        title: { en: 'Jasper, the Parkway and Lake Louise', fr: 'Jasper, la promenade et Lake Louise' },
        body: {
          en: 'Two nights in Jasper, then a full day down the Icefields Parkway with as many stops as you like. Finish with three nights between Lake Louise and Banff. This is the longest stay of the trip, on purpose.',
          fr: "Deux nuits à Jasper, puis une journée entière sur la promenade des Glaciers, avec autant d'arrêts que vous voulez. Puis trois nuits entre Lake Louise et Banff. C'est le séjour le plus long du voyage, et c'est voulu.",
        },
      },
      {
        days: 'Days 13–15',
        placeId: 'toronto',
        title: { en: 'Fly east to Toronto', fr: 'Vol vers l’est, jusqu’à Toronto' },
        body: {
          en: 'Drive to Calgary and fly four hours to Toronto, losing two hours on the way. Day 13 is a travel day and that is fine. Then two days in Canada’s biggest city, with an optional day trip to Niagara Falls.',
          fr: "Route jusqu'à Calgary et quatre heures de vol jusqu'à Toronto, en perdant deux heures au passage. Le jour 13 est un jour de trajet, et c'est très bien ainsi. Puis deux jours dans la plus grande ville du Canada, avec une excursion facultative aux chutes du Niagara.",
        },
      },
      {
        days: 'Days 16–18',
        placeId: 'montreal',
        title: { en: 'Montréal and Québec City', fr: 'Montréal et Québec' },
        body: {
          en: 'A five-hour train to Montréal, then a day and a half of bagels and neighbourhoods. On day 18 another train takes you to Québec City for an evening inside the walls. The language changes, and so does the pace.',
          fr: "Cinq heures de train jusqu'à Montréal, puis une journée et demie de bagels et de quartiers. Le jour 18, un autre train vous emmène à Québec pour une soirée à l'intérieur des remparts. La langue change, et le rythme aussi.",
        },
      },
      {
        days: 'Days 19–21',
        placeId: 'halifax',
        title: { en: 'Halifax, by the Atlantic', fr: 'Halifax, au bord de l’Atlantique' },
        body: {
          en: 'A morning in Québec City, then a flight of three to four hours door to door to Halifax, usually via Montréal. Two last days on the Atlantic: the harbour, the granite coast at Peggy’s Cove and a lot of lobster. You have now crossed the country, and earned the long flight home.',
          fr: "Une matinée à Québec, puis trois à quatre heures de porte à porte jusqu'à Halifax, généralement via Montréal. Deux derniers jours au bord de l'Atlantique : le port, la côte de granit de Peggy's Cove et beaucoup de homard. Vous avez traversé le pays, et mérité le long vol du retour.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, plus a 24-hour contact on the road', fr: 'Votre propre spécialiste, et un contact joignable 24 h sur 24 pendant le voyage' },
      { en: 'Two days by train from Vancouver to Jasper, with a hotel night', fr: 'Deux jours de train de Vancouver à Jasper, avec une nuit d’hôtel' },
      { en: 'First-class trains from Toronto to Montréal and Québec City', fr: 'Trains en première classe de Toronto à Montréal et à Québec' },
      { en: 'Floatplane from Victoria to Vancouver and both domestic flights', fr: 'Hydravion de Victoria à Vancouver et les deux vols intérieurs' },
      { en: 'Private transfers at every change of city', fr: 'Transferts privés à chaque changement de ville' },
      { en: 'Private guided days in the Rockies and Québec City', fr: 'Journées avec guide privé dans les Rocheuses et à Québec' },
      { en: 'Luggage sent ahead where possible, so you carry a day bag', fr: 'Bagages envoyés à l’avance quand c’est possible : vous ne portez qu’un sac de jour' },
    ],
    experienceIds: [
      'coast-to-coast-by-rail',
      'the-rockies',
      'vancouver-and-the-islands',
      'quebec-old-cities',
      'floatplanes-and-helicopters',
      'private-guides',
    ],
    stayIds: [
      'stay-vancouver-hotel',
      'stay-jasper-cabins',
      'stay-lake-chalet',
      'stay-montreal-hotel',
      'stay-quebec-auberge',
    ],
    eventIds: ['orcas-vancouver-island', 'wildflowers-rockies'],
    regionIds: [
      'tofino-vancouver-island',
      'vancouver',
      'jasper',
      'icefields-parkway',
      'banff-lake-louise',
      'calgary',
      'toronto',
      'niagara',
      'montreal',
      'quebec-city',
    ],
    provinceIds: ['british-columbia', 'alberta', 'ontario', 'quebec', 'atlantic-canada'],
    specialistId: 'spec-rail-luxury',
    images: {
      summer: {
        subject: 'Train curving along a river below the Rockies, summer',
        tone: 'forest',
        alt: {
          en: 'A passenger train curving beside a river through forest below the Rocky Mountains in summer',
          fr: 'Un train de voyageurs longeant une rivière à travers la forêt, au pied des Rocheuses, en été',
        },
      },
      winter: {
        subject: 'Train crossing a snowy mountain valley',
        tone: 'snow',
        alt: {
          en: 'A passenger train crossing a snow-covered mountain valley under a grey winter sky',
          fr: 'Un train de voyageurs traversant une vallée de montagne enneigée sous un ciel d’hiver gris',
        },
      },
    },
  },

  // ── 8 ─────────────────────────────────────────────────────────────────────
  {
    id: 'family-summer-west',
    slug: 'family-summer-west',
    frReview: 'needs-human-review',
    title: { en: 'A *Family* Summer in the West', fr: 'Un été en *famille* dans l’Ouest' },
    days: 12,
    seasons: ['summer'],
    isNew: true,
    fromPerPersonCAD: 14400,
    summary: {
      en: 'Vancouver, Whistler, the warm lakes of the Okanagan and the Rockies, paced for children and the adults who travel with them.',
      fr: "Vancouver, Whistler, les lacs chauds de l'Okanagan et les Rocheuses, au rythme des enfants et des adultes qui voyagent avec eux.",
    },
    intro: {
      en: 'This trip is built around one rule: nobody sits in a car for more than half a day. You start by the sea in Vancouver, go up to Whistler for gondolas and lakes, spend three lazy days swimming and eating fruit in the Okanagan, then fly to the Rockies. Every stop has something for a seven-year-old and something for a teenager who would rather be elsewhere. The adults get good dinners.',
      fr: "Ce voyage repose sur une règle : personne ne passe plus d'une demi-journée en voiture. Vous commencez au bord de la mer à Vancouver, montez à Whistler pour les télécabines et les lacs, passez trois jours tranquilles à nager et à manger des fruits dans l'Okanagan, puis prenez l'avion pour les Rocheuses. Chaque étape a de quoi occuper un enfant de sept ans et un adolescent qui préférerait être ailleurs. Les adultes ont droit à de bons dîners.",
    },
    honestNote: {
      en: 'The drive from Whistler to the Okanagan takes about five hours. It is a good-looking road, but if your children rate car journeys the way most children do, we can fly you instead. Moraine Lake is closed to private cars and Lake Louise parking is limited; we book the shuttles. The rules change, so we check them every year. Prices shown are per adult; children cost less.',
      fr: "La route de Whistler à l'Okanagan prend environ cinq heures. Elle est belle, mais si vos enfants jugent les trajets en voiture comme la plupart des enfants, nous pouvons vous faire prendre l'avion. Le lac Moraine est fermé aux voitures particulières et le stationnement à Lake Louise est limité ; nous réservons les navettes. Les règles changent, nous les vérifions chaque année. Les prix indiqués sont par adulte ; les enfants paient moins.",
    },
    route: ['vancouver', 'whistler', 'kelowna', 'banff', 'lake-louise', 'calgary'],
    itinerary: [
      {
        days: 'Days 1–3',
        placeId: 'vancouver',
        title: { en: 'Vancouver: bikes, beaches and boats', fr: 'Vancouver : vélos, plages et bateaux' },
        body: {
          en: 'Cycle the seawall around Stanley Park, swim at a city beach, and spend a morning at the Granville Island market, where the children choose lunch. One afternoon goes on a whale-watching boat. Jet lag is easier when there is sand.',
          fr: "Tour du parc Stanley à vélo par la digue, baignade sur une plage de la ville, et une matinée au marché de Granville Island, où les enfants choisissent le déjeuner. Un après-midi en bateau pour observer les baleines. Le décalage horaire passe mieux quand il y a du sable.",
        },
      },
      {
        days: 'Days 4–5',
        placeId: 'whistler',
        title: { en: 'Whistler in summer', fr: 'Whistler en été' },
        body: {
          en: 'Two hours up the Sea-to-Sky highway to a ski town that is just as busy in July. Ride the gondola between two mountains, paddle on a warm lake, and try the beginner mountain-bike trails if anyone is brave. Older children can do a zipline course.',
          fr: "Deux heures par la route Sea-to-Sky jusqu'à une station de ski tout aussi animée en juillet. Télécabine entre deux sommets, pagaie sur un lac tiède, et pistes de vélo de montagne pour débutants si quelqu'un se sent courageux. Les plus grands peuvent faire un parcours de tyrolienne.",
        },
      },
      {
        days: 'Days 6–8',
        placeId: 'kelowna',
        title: { en: 'The Okanagan', fr: 'L’Okanagan' },
        body: {
          en: 'Drive or fly to Kelowna and the warm, dry Okanagan valley, where the lakes are actually pleasant to swim in. Pick cherries or peaches depending on the month, rent a boat, and do very little. The adults can visit a winery while a sitter keeps the children busy at the beach.',
          fr: "Route ou vol jusqu'à Kelowna et la vallée chaude et sèche de l'Okanagan, où les lacs sont vraiment agréables pour se baigner. Cueillez des cerises ou des pêches selon le mois, louez un bateau, et ne faites pas grand-chose. Les adultes peuvent visiter un vignoble pendant qu'une gardienne occupe les enfants à la plage.",
        },
      },
      {
        days: 'Day 9',
        placeId: 'banff',
        title: { en: 'Fly to the Rockies', fr: 'Vol vers les Rocheuses' },
        body: {
          en: 'A one-hour flight from Kelowna to Calgary, then 90 minutes west to Banff. Arrive in time for a swim in the hot pools and an early night. Tomorrow starts early, for good reasons.',
          fr: "Un vol d'une heure de Kelowna à Calgary, puis 90 minutes vers l'ouest jusqu'à Banff. Arrivée à temps pour une baignade dans les bassins d'eau chaude et un coucher tôt. Demain, on se lève tôt, pour de bonnes raisons.",
        },
      },
      {
        days: 'Days 10–11',
        placeId: 'lake-louise',
        title: { en: 'Banff and Lake Louise', fr: 'Banff et Lake Louise' },
        body: {
          en: 'A family guide takes you on short walks with big rewards: a canyon with catwalks, a lake you can canoe across, and a gondola to a ridge with marmots. Guides here are good at spotting elk and bears from a safe distance and explaining why that distance matters. Shuttles to Moraine Lake are booked in advance.',
          fr: "Un guide spécialiste des familles vous emmène sur de courtes balades qui valent largement l'effort : un canyon équipé de passerelles, un lac à traverser en canot, et une télécabine jusqu'à une crête peuplée de marmottes. Les guides d'ici repèrent bien les wapitis et les ours à bonne distance, et expliquent pourquoi cette distance compte. Les navettes vers le lac Moraine sont réservées à l'avance.",
        },
      },
      {
        days: 'Day 12',
        placeId: 'calgary',
        title: { en: 'Home from Calgary', fr: 'Retour depuis Calgary' },
        body: {
          en: 'A 90-minute drive back to Calgary airport. If the flight is in the evening, there is time for one last lake. Expect at least one child to say it was the best holiday ever, and another to deny it.',
          fr: "Une heure et demie de route jusqu'à l'aéroport de Calgary. Si le vol est en soirée, il reste du temps pour un dernier lac. Attendez-vous à ce qu'un enfant dise que c'étaient les meilleures vacances de sa vie, et qu'un autre le nie.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage' },
      { en: 'Family rooms or connecting rooms at every stay', fr: 'Chambres familiales ou communicantes à chaque étape' },
      { en: 'A family guide for two days in the Rockies', fr: 'Un guide spécialiste des familles pendant deux jours dans les Rocheuses' },
      { en: 'Whale-watching boat from Vancouver', fr: 'Sortie aux baleines en bateau depuis Vancouver' },
      { en: 'Flight from Kelowna to Calgary', fr: 'Vol de Kelowna à Calgary' },
      { en: 'Child seats, park passes and lake shuttle bookings', fr: 'Sièges enfants, laissez-passer des parcs et réservations des navettes' },
    ],
    experienceIds: ['the-rockies', 'vancouver-and-the-islands', 'whales', 'private-guides'],
    stayIds: ['stay-vancouver-hotel', 'stay-whistler-chalet', 'stay-okanagan-winery', 'stay-lake-chalet'],
    eventIds: ['wildflowers-rockies', 'orcas-vancouver-island'],
    regionIds: ['vancouver', 'whistler', 'okanagan', 'banff-lake-louise', 'calgary'],
    provinceIds: ['british-columbia', 'alberta'],
    specialistId: 'spec-west',
    images: {
      summer: {
        subject: 'Family in a red canoe on a mountain lake, July',
        tone: 'lake',
        alt: {
          en: 'A family paddling a red canoe on a calm turquoise mountain lake in summer',
          fr: 'Une famille pagayant dans un canot rouge sur un lac de montagne turquoise et calme, en été',
        },
      },
      winter: {
        subject: 'Children skating on a frozen mountain lake',
        tone: 'snow',
        alt: {
          en: 'Children skating on a frozen lake below snowy mountains',
          fr: 'Des enfants patinant sur un lac gelé au pied de montagnes enneigées',
        },
      },
    },
  },
];
