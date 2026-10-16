import type { Region } from './types';

/**
 * Regions within each province. id = slug.
 * bestMonths are 1–12. Seasons shift a little each year; check before quoting dates.
 */
export const regions: Region[] = [
  // ── British Columbia ───────────────────────────────────────────────────────
  {
    id: 'vancouver',
    slug: 'vancouver',
    provinceId: 'british-columbia',
    name: { en: 'Vancouver', fr: 'Vancouver' },
    summary: {
      en: 'A city with mountains at one end of the street and the ocean at the other.',
      fr: 'Une ville avec la montagne au bout d’une rue et l’océan au bout de l’autre.',
    },
    body: {
      en: 'Stanley Park is bigger than New York’s Central Park and mostly forest. Granville Island has the market, and the North Shore mountains are 30 minutes from downtown. The food is very good, especially anything Pacific or Asian. It rains a lot from November to March, which locals mention less than visitors do.',
      fr: 'Le parc Stanley est plus grand que Central Park à New York, et surtout boisé. Granville Island a son marché, et les montagnes de la rive nord sont à 30 minutes du centre. On y mange très bien, surtout tout ce qui vient du Pacifique ou d’Asie. Il pleut beaucoup de novembre à mars, ce dont les habitants parlent moins que les visiteurs.',
    },
    bestMonths: [5, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A seawall path between forest and ocean, with mountains behind', fr: 'Une promenade entre forêt et océan, montagnes en arrière-plan' },
        subject: 'Stanley Park seawall on a clear evening',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'City towers under snow-capped mountains on a grey day', fr: 'Les tours de la ville sous des montagnes enneigées, par temps gris' },
        subject: 'Downtown Vancouver below snowy North Shore peaks',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Cycling the seawall around Stanley Park', fr: 'Le tour du parc Stanley à vélo, le long de la digue' },
        { en: 'Lunch at the Granville Island market', fr: 'Déjeuner au marché de Granville Island' },
        { en: 'A floatplane hop to Victoria or the Gulf Islands', fr: 'Un saut en hydravion vers Victoria ou les îles Gulf' },
      ],
      winter: [
        { en: 'Ski in the morning, sushi in the evening', fr: 'Ski le matin, sushis le soir' },
        { en: 'Museums and galleries for the rainy days, of which there are several', fr: 'Musées et galeries pour les jours de pluie, qui ne manquent pas' },
      ],
    },
    placeId: 'vancouver',
    frReview: 'needs-human-review',
  },
  {
    id: 'whistler',
    slug: 'whistler',
    provinceId: 'british-columbia',
    name: { en: 'Whistler', fr: 'Whistler' },
    summary: {
      en: 'Two big mountains, one car-free village, two hours from Vancouver.',
      fr: 'Deux grandes montagnes, un village piéton, à deux heures de Vancouver.',
    },
    body: {
      en: 'Whistler and Blackcomb are linked by the Peak 2 Peak gondola, which crosses the valley in about 11 minutes. Winter is about skiing and snow, usually from late November to April. In summer the lifts carry hikers and mountain bikers instead. The drive up the Sea-to-Sky Highway is half the point.',
      fr: 'Whistler et Blackcomb sont reliées par la télécabine Peak 2 Peak, qui traverse la vallée en 11 minutes environ. L’hiver, c’est le ski et la neige, en général de fin novembre à avril. L’été, les remontées transportent randonneurs et vététistes. La route Sea-to-Sky fait la moitié du plaisir.',
    },
    bestMonths: [1, 2, 3, 7, 8, 12],
    images: {
      summer: {
        alt: { en: 'Hikers on an alpine ridge above a turquoise lake', fr: 'Des randonneurs sur une crête alpine au-dessus d’un lac turquoise' },
        subject: 'Alpine trail above a glacial lake, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A gondola cabin over a snowy valley', fr: 'Une cabine de télécabine au-dessus d’une vallée enneigée' },
        subject: 'Gondola over a snowy valley, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Alpine hiking straight off the gondola', fr: 'La randonnée alpine dès la sortie de la télécabine' },
        { en: 'Warm lakes for swimming in the valley', fr: 'Des lacs tièdes pour se baigner dans la vallée' },
        { en: 'Heli-hiking on glaciers nearby', fr: 'L’héli-randonnée sur les glaciers voisins' },
      ],
      winter: [
        { en: 'More than 200 marked runs across two mountains', fr: 'Plus de 200 pistes balisées sur deux montagnes' },
        { en: 'Snowshoeing and cross-country skiing in the Callaghan Valley', fr: 'La raquette et le ski de fond dans la vallée Callaghan' },
        { en: 'Heli-skiing, for those with the legs for it', fr: 'L’héliski, pour ceux qui ont les jambes' },
      ],
    },
    placeId: 'whistler',
    frReview: 'needs-human-review',
  },
  {
    id: 'tofino-vancouver-island',
    slug: 'tofino-vancouver-island',
    provinceId: 'british-columbia',
    name: { en: 'Tofino & Vancouver Island', fr: 'Tofino et l’île de Vancouver' },
    summary: {
      en: 'Long beaches, old rainforest and the open Pacific, at the end of a winding road.',
      fr: 'De longues plages, une vieille forêt pluviale et le Pacifique, au bout d’une route sinueuse.',
    },
    body: {
      en: 'Vancouver Island is roughly the size of Belgium, with Victoria at the bottom and Tofino on the wild west coast. Pacific Rim National Park Reserve has the beaches and the boardwalk trails through old cedar. Grey whales pass in spring, and orcas and humpbacks are about in summer. From November to February, people come to watch the storms.',
      fr: 'L’île de Vancouver a à peu près la taille de la Belgique, avec Victoria au sud et Tofino sur la côte ouest, plus sauvage. La réserve de parc national Pacific Rim offre les plages et les sentiers sur pilotis entre les vieux cèdres. Les baleines grises passent au printemps, orques et baleines à bosse sont là en été. De novembre à février, on vient regarder les tempêtes.',
    },
    bestMonths: [4, 5, 6, 7, 8, 9, 11, 12],
    images: {
      summer: {
        alt: { en: 'A wide sandy beach with surfers and forested headlands', fr: 'Une large plage de sable avec des surfeurs et des caps boisés' },
        subject: 'Surfers on Long Beach, early evening',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'Huge waves breaking on dark rocks under a heavy sky', fr: 'De grosses vagues sur des rochers sombres, sous un ciel lourd' },
        subject: 'Winter storm swell near Tofino',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Whale and bear-watching boats out of Tofino', fr: 'Les sorties en bateau pour voir baleines et ours depuis Tofino' },
        { en: 'Surf lessons in cold, friendly water', fr: 'Des cours de surf dans une eau froide mais accueillante' },
        { en: 'Victoria’s harbour and gardens', fr: 'Le port et les jardins de Victoria' },
      ],
      winter: [
        { en: 'Storm watching from a warm room with a big window', fr: 'Regarder les tempêtes depuis une pièce chaude avec une grande fenêtre' },
        { en: 'Empty beaches and rainforest walks in the drizzle', fr: 'Des plages désertes et des balades en forêt sous la bruine' },
      ],
    },
    placeId: 'tofino',
    frReview: 'needs-human-review',
  },
  {
    id: 'great-bear-rainforest',
    slug: 'great-bear-rainforest',
    provinceId: 'british-columbia',
    name: { en: 'Great Bear Rainforest', fr: 'Forêt du Grand Ours' },
    summary: {
      en: 'A coast of fjords and temperate rainforest, with more bears than people.',
      fr: 'Une côte de fjords et de forêt pluviale tempérée, avec plus d’ours que d’habitants.',
    },
    body: {
      en: 'The Great Bear Rainforest runs along BC’s central and north coast, and most of it is reachable only by boat or floatplane. Grizzlies fish the salmon rivers from late August to October. It is also home to the spirit bear, a black bear with a white coat, seen in only a few places. First Nations have lived here for thousands of years, and the best trips are run with them.',
      fr: 'La forêt du Grand Ours longe la côte centrale et nord de la Colombie-Britannique, et l’essentiel n’est accessible qu’en bateau ou en hydravion. Les grizzlis pêchent le saumon dans les rivières de fin août à octobre. C’est aussi le territoire de l’ours esprit, un ours noir à la fourrure blanche, visible en très peu d’endroits. Les Premières Nations vivent ici depuis des milliers d’années, et les meilleurs séjours se font avec elles.',
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A grizzly bear catching salmon in a shallow river', fr: 'Un grizzli attrapant un saumon dans une rivière peu profonde' },
        subject: 'Grizzly on a salmon river, late September',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'Mist hanging over a dark fjord and forest', fr: 'De la brume au-dessus d’un fjord sombre et de la forêt' },
        subject: 'Mist over a quiet fjord, November',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Grizzlies on the salmon rivers, late August to October', fr: 'Les grizzlis sur les rivières à saumons, de fin août à octobre' },
        { en: 'Humpbacks feeding in the channels', fr: 'Les baleines à bosse qui se nourrissent dans les chenaux' },
        { en: 'A chance of a spirit bear, with patience and the right guide', fr: 'Une chance de voir un ours esprit, avec de la patience et le bon guide' },
      ],
      winter: [
        { en: 'Most lodges close from October to May. We’d come back in June.', fr: 'La plupart des lodges ferment d’octobre à mai. Nous reviendrions en juin.' },
      ],
    },
    placeId: 'bella-coola',
    frReview: 'needs-human-review',
  },
  {
    id: 'okanagan',
    slug: 'okanagan',
    provinceId: 'british-columbia',
    name: { en: 'Okanagan', fr: 'Okanagan' },
    summary: {
      en: 'Lakes, orchards and wineries in BC’s warm, dry interior.',
      fr: 'Des lacs, des vergers et des vignobles dans l’intérieur chaud et sec de la Colombie-Britannique.',
    },
    body: {
      en: 'The Okanagan Valley is a long chain of lakes with Kelowna in the middle. Summers are hot and dry, which surprises people who expected BC to be all rain. There are more than 180 wineries, plus fruit stands selling cherries in July and peaches in August. In winter, the ski hills above the valley get light, dry snow.',
      fr: 'La vallée de l’Okanagan est une longue chaîne de lacs, avec Kelowna au milieu. Les étés sont chauds et secs, ce qui surprend ceux qui imaginaient une Colombie-Britannique toujours sous la pluie. On y compte plus de 180 domaines viticoles, et des étals de fruits : cerises en juillet, pêches en août. L’hiver, les stations au-dessus de la vallée reçoivent une neige légère et sèche.',
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Vineyard rows sloping down to a blue lake', fr: 'Des rangs de vigne qui descendent vers un lac bleu' },
        subject: 'Vineyards above Okanagan Lake, September',
        tone: 'autumn',
      },
      winter: {
        alt: { en: 'Frosted trees on a sunny ski slope', fr: 'Des arbres givrés sur une piste ensoleillée' },
        subject: 'Snow-ghost trees on an Okanagan ski hill',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Wine tasting by bike, boat or designated driver', fr: 'La dégustation à vélo, en bateau ou avec un chauffeur' },
        { en: 'Swimming in a lake that is actually warm', fr: 'Se baigner dans un lac vraiment tiède' },
        { en: 'Cycling the old Kettle Valley rail trail', fr: 'Le vélo sur l’ancienne voie ferrée de Kettle Valley' },
      ],
      winter: [
        { en: 'Dry powder at the valley’s ski hills', fr: 'De la poudreuse sèche dans les stations de la vallée' },
        { en: 'Icewine, when the cold arrives in time', fr: 'Le vin de glace, quand le froid arrive à temps' },
      ],
    },
    placeId: 'kelowna',
    frReview: 'needs-human-review',
  },
  {
    id: 'haida-gwaii',
    slug: 'haida-gwaii',
    provinceId: 'british-columbia',
    name: { en: 'Haida Gwaii', fr: 'Haida Gwaii' },
    summary: {
      en: 'An island chain off the north coast, home of the Haida Nation.',
      fr: 'Un archipel au large de la côte nord, territoire de la Nation haïda.',
    },
    body: {
      en: 'Haida Gwaii is around 150 islands, reached by a short flight or a seven-hour ferry from Prince Rupert. The Haida Heritage Centre at Kay Llnagaay is the place to start. In the south, Gwaii Haanas is protected from mountaintop to sea floor, and its old village sites are visited only by boat or floatplane, with an orientation first. It is remote, rainy and unlike anywhere else in Canada.',
      fr: 'Haida Gwaii compte environ 150 îles, accessibles par un vol court ou par sept heures de traversier depuis Prince Rupert. Le centre du patrimoine haïda de Kay Llnagaay est le meilleur point de départ. Au sud, Gwaii Haanas est protégé du sommet des montagnes jusqu’au fond de la mer, et ses anciens villages ne se visitent qu’en bateau ou en hydravion, après une séance d’orientation. C’est isolé, pluvieux, et ne ressemble à aucun autre endroit au Canada.',
    },
    bestMonths: [5, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'Weathered carved poles in long grass at the edge of a forest', fr: 'Des mâts sculptés patinés dans les hautes herbes, en lisière de forêt' },
        subject: 'Weathered poles at an old village site, Gwaii Haanas',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A storm-grey beach with driftwood logs', fr: 'Une plage grise de tempête, couverte de bois flotté' },
        subject: 'Driftwood on a north beach in a winter storm',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Boat or floatplane trips into Gwaii Haanas', fr: 'Les sorties en bateau ou en hydravion vers Gwaii Haanas' },
        { en: 'Haida art, carving and history, explained by Haida guides', fr: 'L’art, la sculpture et l’histoire haïda, racontés par des guides haïdas' },
        { en: 'Long empty beaches on the north shore', fr: 'Les longues plages désertes de la côte nord' },
      ],
      winter: [
        { en: 'Gwaii Haanas trips stop for the season. Come between May and September.', fr: 'Les sorties vers Gwaii Haanas s’arrêtent pour la saison. Venez entre mai et septembre.' },
        { en: 'Big storms and very few visitors, if that appeals', fr: 'De grosses tempêtes et très peu de visiteurs, si ça vous tente' },
      ],
    },
    placeId: 'haida-gwaii',
    frReview: 'needs-human-review',
  },

  // ── Alberta ────────────────────────────────────────────────────────────────
  {
    id: 'banff-lake-louise',
    slug: 'banff-lake-louise',
    provinceId: 'alberta',
    name: { en: 'Banff & Lake Louise', fr: 'Banff et Lake Louise' },
    summary: {
      en: 'Canada’s first national park, and still its most famous.',
      fr: 'Le premier parc national du Canada, et toujours le plus célèbre.',
    },
    body: {
      en: 'Banff National Park was created in 1885, around a hot spring. The town of Banff is small and walkable; Lake Louise is 45 minutes up the valley. Moraine Lake is reached by shuttle or tour bus only, so plan ahead in summer. Late September brings golden larches and fewer people.',
      fr: 'Le parc national Banff a été créé en 1885, autour d’une source chaude. La ville de Banff est petite et se parcourt à pied ; Lake Louise est à 45 minutes en remontant la vallée. On n’accède au lac Moraine qu’en navette ou en autocar, il faut donc s’organiser en été. Fin septembre, les mélèzes deviennent dorés et la foule diminue.',
    },
    bestMonths: [1, 2, 6, 7, 8, 9, 12],
    images: {
      summer: {
        alt: { en: 'A turquoise lake ringed by jagged peaks', fr: 'Un lac turquoise entouré de sommets déchiquetés' },
        subject: 'Moraine Lake at dawn, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A frozen lake with skaters below a glacier', fr: 'Un lac gelé avec des patineurs au pied d’un glacier' },
        subject: 'Skating on Lake Louise, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Moraine Lake at sunrise, on the first shuttle', fr: 'Le lac Moraine au lever du soleil, avec la première navette' },
        { en: 'The hike to the Lake Agnes teahouse', fr: 'La randonnée jusqu’au salon de thé du lac Agnes' },
        { en: 'Larch Valley in late September', fr: 'La vallée des Mélèzes fin septembre' },
      ],
      winter: [
        { en: 'Three ski areas on one lift pass', fr: 'Trois domaines skiables avec un seul forfait' },
        { en: 'Skating on Lake Louise and walking frozen Johnston Canyon', fr: 'Patiner sur le lac Louise et marcher dans le canyon Johnston gelé' },
        { en: 'Banff’s hot springs at minus twenty', fr: 'Les sources chaudes de Banff par moins vingt' },
      ],
    },
    placeId: 'banff',
    frReview: 'needs-human-review',
  },
  {
    id: 'jasper',
    slug: 'jasper',
    provinceId: 'alberta',
    name: { en: 'Jasper', fr: 'Jasper' },
    summary: {
      en: 'The bigger, quieter national park at the north end of the Rockies.',
      fr: 'Le parc national plus grand et plus calme, au nord des Rocheuses.',
    },
    body: {
      en: 'Jasper National Park is larger than Banff and sees fewer visitors. A wildfire in July 2024 burned part of the town and a lot of forest nearby; the town is open and rebuilding, and the burn is part of the landscape now. Maligne Lake, Maligne Canyon and the Columbia Icefield are the classics. It is also a Dark Sky Preserve, so the stars are worth staying up for.',
      fr: 'Le parc national Jasper est plus vaste que Banff et moins fréquenté. Un feu de forêt en juillet 2024 a détruit une partie de la ville et une grande surface de forêt alentour ; la ville est ouverte et se reconstruit, et la zone brûlée fait désormais partie du paysage. Le lac Maligne, le canyon Maligne et le champ de glace Columbia sont les incontournables. C’est aussi une réserve de ciel étoilé : les étoiles valent qu’on veille.',
    },
    bestMonths: [1, 2, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A small wooded island in a long blue lake', fr: 'Un petit îlot boisé sur un long lac bleu' },
        subject: 'Spirit Island on Maligne Lake, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A starry sky over snowy mountains', fr: 'Un ciel étoilé au-dessus de montagnes enneigées' },
        subject: 'Milky Way over the Athabasca valley, February',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'A boat trip on Maligne Lake', fr: 'Une sortie en bateau sur le lac Maligne' },
        { en: 'Elk, caribou and bears, at a respectful distance', fr: 'Wapitis, caribous et ours, à distance respectueuse' },
        { en: 'Walking on the Athabasca Glacier with a guide', fr: 'Marcher sur le glacier Athabasca avec un guide' },
      ],
      winter: [
        { en: 'Ice walks in the frozen Maligne Canyon', fr: 'Les balades dans le canyon Maligne gelé' },
        { en: 'Skiing at Marmot Basin, with short lift lines', fr: 'Le ski à Marmot Basin, sans longues files d’attente' },
        { en: 'Stargazing in one of the largest dark-sky preserves in the world', fr: 'L’observation des étoiles dans l’une des plus grandes réserves de ciel étoilé au monde' },
      ],
    },
    placeId: 'jasper',
    frReview: 'needs-human-review',
  },
  {
    id: 'icefields-parkway',
    slug: 'icefields-parkway',
    provinceId: 'alberta',
    name: { en: 'Icefields Parkway', fr: 'Promenade des Glaciers' },
    summary: {
      en: '232 km of road between Lake Louise and Jasper, with glaciers most of the way.',
      fr: '232 km de route entre Lake Louise et Jasper, avec des glaciers presque tout du long.',
    },
    body: {
      en: 'The Icefields Parkway takes about three and a half hours without stopping, and most people take a full day. Peyto Lake, the Columbia Icefield and Athabasca Falls are the usual stops. There is little phone signal and only one fuel station, at Saskatchewan Crossing, which closes in winter. Winter tires or chains are required from November to April, and the road closes in storms.',
      fr: 'La promenade des Glaciers se parcourt en trois heures et demie sans arrêt, et la plupart des gens y passent la journée. Le lac Peyto, le champ de glace Columbia et les chutes Athabasca sont les arrêts habituels. Le réseau téléphonique est rare et il n’y a qu’une station-service, à Saskatchewan Crossing, fermée l’hiver. Pneus d’hiver ou chaînes obligatoires de novembre à avril, et la route ferme pendant les tempêtes.',
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A wolf-shaped turquoise lake far below a viewpoint', fr: 'Un lac turquoise en forme de loup, loin sous un belvédère' },
        subject: 'Peyto Lake from the viewpoint, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'An empty road through snowy mountains', fr: 'Une route déserte entre des montagnes enneigées' },
        subject: 'Empty parkway between snowy peaks, March',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Peyto Lake, best before 9 am', fr: 'Le lac Peyto, de préférence avant 9 h' },
        { en: 'Standing on the Columbia Icefield', fr: 'Marcher sur le champ de glace Columbia' },
        { en: 'Bighorn sheep on the road. Slow down.', fr: 'Des mouflons sur la route. Ralentissez.' },
      ],
      winter: [
        { en: 'Open, but only for confident winter drivers. Check conditions first.', fr: 'Ouverte, mais réservée aux conducteurs à l’aise sur la neige. Vérifiez l’état des routes avant.' },
        { en: 'Frozen waterfalls and almost no traffic', fr: 'Des cascades gelées et presque aucune circulation' },
      ],
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'calgary',
    slug: 'calgary',
    provinceId: 'alberta',
    name: { en: 'Calgary', fr: 'Calgary' },
    summary: {
      en: 'The gateway to the Rockies, and a good place to spend a night or two.',
      fr: 'La porte d’entrée des Rocheuses, et une bonne étape d’une nuit ou deux.',
    },
    body: {
      en: 'Calgary is 90 minutes from Banff and is where most Rockies trips begin. For ten days in early July, the Stampede takes over the city, cowboy hats and all. The rest of the year it is a relaxed place with good restaurants along the Bow River. Chinook winds can lift a winter day from minus fifteen to plus ten in a few hours.',
      fr: 'Calgary est à 90 minutes de Banff, et c’est de là que partent la plupart des voyages dans les Rocheuses. Pendant dix jours début juillet, le Stampede s’empare de la ville, chapeaux de cow-boy compris. Le reste de l’année, c’est une ville détendue, avec de bonnes tables le long de la rivière Bow. Le chinook peut faire passer une journée d’hiver de moins quinze à plus dix en quelques heures.',
    },
    bestMonths: [7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A city skyline beside a river, with mountains on the horizon', fr: 'Une silhouette de ville au bord d’une rivière, montagnes à l’horizon' },
        subject: 'Calgary from the Bow River, summer evening',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'A bright winter sky with a long arch of cloud', fr: 'Un ciel d’hiver lumineux avec une longue arche de nuages' },
        subject: 'Chinook arch over the prairie, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Calgary Stampede, early July', fr: 'Le Stampede de Calgary, début juillet' },
        { en: 'Floating the Bow River on a hot afternoon', fr: 'Descendre la rivière Bow en bouée par un après-midi chaud' },
      ],
      winter: [
        { en: 'A night in town before heading to the ski hills', fr: 'Une nuit en ville avant de rejoindre les pistes' },
        { en: 'Chinook days, when winter takes a few hours off', fr: 'Les jours de chinook, quand l’hiver fait une pause de quelques heures' },
      ],
    },
    placeId: 'calgary',
    frReview: 'needs-human-review',
  },

  // ── Yukon ──────────────────────────────────────────────────────────────────
  {
    id: 'whitehorse',
    slug: 'whitehorse',
    provinceId: 'yukon',
    name: { en: 'Whitehorse', fr: 'Whitehorse' },
    summary: {
      en: 'Yukon’s capital, on the Yukon River, with aurora a short drive away.',
      fr: 'La capitale du Yukon, au bord du fleuve Yukon, avec des aurores à quelques minutes de route.',
    },
    body: {
      en: 'About three-quarters of Yukon’s people live in Whitehorse, which still feels like a small town. In winter, cabins outside town are ideal for aurora, with dog sledding by day. In summer the sun barely sets, and the river is the main road for paddlers heading north. Flights from Vancouver take about two and a half hours.',
      fr: 'Environ les trois quarts des habitants du Yukon vivent à Whitehorse, qui a pourtant gardé l’allure d’une petite ville. L’hiver, les cabanes hors de la ville sont idéales pour les aurores, avec du traîneau à chiens dans la journée. L’été, le soleil se couche à peine, et le fleuve devient la grande route des canoteurs vers le nord. Le vol depuis Vancouver dure environ deux heures et demie.',
    },
    bestMonths: [2, 3, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A wide green river below clay cliffs', fr: 'Un large fleuve vert sous des falaises d’argile' },
        subject: 'Yukon River below the clay cliffs, July',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A dog team on a snowy trail at dusk', fr: 'Un attelage de chiens sur une piste enneigée, au crépuscule' },
        subject: 'Dog team on a forest trail, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Starting a Yukon River canoe trip', fr: 'Partir en canot sur le fleuve Yukon' },
        { en: 'Midnight sun around the June solstice', fr: 'Le soleil de minuit autour du solstice de juin' },
        { en: 'Hikes at Miles Canyon, right in town', fr: 'Les randonnées au canyon Miles, en pleine ville' },
      ],
      winter: [
        { en: 'Aurora from a cabin outside town, late August to April', fr: 'Les aurores depuis une cabane hors de la ville, de fin août à avril' },
        { en: 'Dog sledding, snowshoeing and ice fishing', fr: 'Le traîneau à chiens, la raquette et la pêche blanche' },
        { en: 'Hot springs just outside town', fr: 'Des sources chaudes juste à la sortie de la ville' },
      ],
    },
    placeId: 'whitehorse',
    frReview: 'needs-human-review',
  },
  {
    id: 'dawson-city',
    slug: 'dawson-city',
    provinceId: 'yukon',
    name: { en: 'Dawson City', fr: 'Dawson City' },
    summary: {
      en: 'A gold rush town that never got around to paving its streets.',
      fr: 'Une ville de la ruée vers l’or qui n’a jamais pris la peine de goudronner ses rues.',
    },
    body: {
      en: 'Around 30,000 people came here during the Klondike Gold Rush of 1896 to 1899; today it’s about 1,500. The streets are still gravel, the sidewalks still wooden, and some people still mine. Parks Canada keeps many of the old buildings as they were. Summer is the season; in winter, much of the town closes.',
      fr: 'Environ 30 000 personnes sont venues ici pendant la ruée vers l’or du Klondike, de 1896 à 1899 ; ils sont aujourd’hui environ 1 500. Les rues sont toujours en gravier, les trottoirs toujours en bois, et certains cherchent encore de l’or. Parcs Canada conserve de nombreux bâtiments d’époque dans leur état d’origine. La saison, c’est l’été ; l’hiver, une bonne partie de la ville ferme.',
    },
    bestMonths: [6, 7, 8],
    images: {
      summer: {
        alt: { en: 'Old false-front wooden buildings on a gravel street', fr: 'De vieux bâtiments en bois à fausse façade, sur une rue en gravier' },
        subject: 'False-front buildings on a gravel street, July',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'A quiet snowy street with old wooden buildings', fr: 'Une rue calme et enneigée bordée de vieux bâtiments en bois' },
        subject: 'Dawson City under snow, December',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Midnight views from the Dome above town', fr: 'La vue de minuit depuis le Dôme au-dessus de la ville' },
        { en: 'Panning for gold, with modest expectations', fr: 'Chercher de l’or à la batée, sans trop d’espoirs' },
        { en: 'The start of the Dempster Highway to the Arctic', fr: 'Le départ de la route Dempster vers l’Arctique' },
      ],
      winter: [
        { en: 'Very quiet. Many businesses close until May.', fr: 'Très calme. Beaucoup de commerces ferment jusqu’en mai.' },
        { en: 'Aurora over the Klondike, if you don’t mind minus forty', fr: 'Les aurores sur le Klondike, si moins quarante ne vous dérange pas' },
      ],
    },
    placeId: 'dawson-city',
    frReview: 'needs-human-review',
  },
  {
    id: 'kluane',
    slug: 'kluane',
    provinceId: 'yukon',
    name: { en: 'Kluane', fr: 'Kluane' },
    summary: {
      en: 'Canada’s highest mountains and the largest icefields outside the poles.',
      fr: 'Les plus hautes montagnes du Canada et les plus grands champs de glace hors des pôles.',
    },
    body: {
      en: 'Kluane National Park and Reserve holds Mount Logan, at 5,959 m the highest peak in Canada. Most of the park is ice and rock that you can only see properly from the air. Flightseeing trips leave from Haines Junction, about 90 minutes from Whitehorse. Down at road level, there’s good hiking, Kluane Lake and a lot of Dall sheep.',
      fr: 'Le parc national et la réserve de parc national Kluane abritent le mont Logan, plus haut sommet du Canada avec 5 959 m. L’essentiel du parc n’est que glace et roche, qu’on ne voit vraiment que depuis les airs. Les survols partent de Haines Junction, à environ 90 minutes de Whitehorse. Au niveau de la route, on trouve de belles randonnées, le lac Kluane et beaucoup de mouflons de Dall.',
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A small plane over a vast field of glaciers', fr: 'Un petit avion au-dessus d’un immense champ de glaciers' },
        subject: 'Flightseeing over the Kluane icefields',
        tone: 'snow',
      },
      winter: {
        alt: { en: 'A frozen lake below snowy peaks in low sun', fr: 'Un lac gelé sous des sommets enneigés, dans un soleil bas' },
        subject: 'Kluane Lake frozen, low winter sun',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A flight over the icefields and Mount Logan', fr: 'Un survol des champs de glace et du mont Logan' },
        { en: 'Hiking to see Dall sheep on Sheep Mountain', fr: 'La randonnée vers la montagne Sheep pour voir les mouflons de Dall' },
        { en: 'Golden aspens in early September', fr: 'Les trembles dorés début septembre' },
      ],
      winter: [
        { en: 'Quiet and very cold. Better as a day trip from Whitehorse.', fr: 'Calme et très froid. Mieux en excursion d’une journée depuis Whitehorse.' },
        { en: 'Cross-country skiing and snowshoeing near Haines Junction', fr: 'Le ski de fond et la raquette près de Haines Junction' },
      ],
    },
    placeId: 'haines-junction',
    frReview: 'needs-human-review',
  },

  // ── Northwest Territories ──────────────────────────────────────────────────
  {
    id: 'yellowknife',
    slug: 'yellowknife',
    provinceId: 'northwest-territories',
    name: { en: 'Yellowknife', fr: 'Yellowknife' },
    summary: {
      en: 'A small northern capital with some of the most reliable aurora in the world.',
      fr: 'Une petite capitale nordique, avec certaines des aurores les plus fiables au monde.',
    },
    body: {
      en: 'Yellowknife sits on Great Slave Lake, the deepest lake in North America. It is under the auroral oval, and the skies are clear often enough that three nights usually means a good show. The Old Town has houseboats, floatplanes and a few good places to eat. Winter nights reach minus forty, so the tour operators lend parkas.',
      fr: 'Yellowknife borde le Grand lac des Esclaves, le plus profond d’Amérique du Nord. La ville se trouve sous l’ovale auroral, et le ciel est assez souvent dégagé pour que trois nuits suffisent en général à voir un beau spectacle. La vieille ville a ses maisons flottantes, ses hydravions et quelques bonnes adresses. Les nuits d’hiver descendent à moins quarante : les organisateurs prêtent des parkas.',
    },
    bestMonths: [1, 2, 3, 8, 9],
    images: {
      summer: {
        alt: { en: 'Colourful houseboats on a calm lake at evening', fr: 'Des maisons flottantes colorées sur un lac calme, le soir' },
        subject: 'Houseboats in Yellowknife Bay, July evening',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Green aurora over a snowy spruce forest', fr: 'Une aurore verte au-dessus d’une forêt d’épinettes enneigée' },
        subject: 'Aurora over spruce near Yellowknife, March',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Aurora over open water, late August and September', fr: 'Les aurores au-dessus de l’eau libre, fin août et septembre' },
        { en: 'Floatplanes to fishing lodges on remote lakes', fr: 'Les hydravions vers des lodges de pêche sur des lacs isolés' },
        { en: 'Paddling Great Slave Lake in the long evenings', fr: 'Pagayer sur le Grand lac des Esclaves pendant les longues soirées' },
      ],
      winter: [
        { en: 'Aurora viewing in heated cabins outside town', fr: 'L’observation des aurores depuis des cabanes chauffées hors de la ville' },
        { en: 'Dog sledding and snowmobiling on the lake', fr: 'Le traîneau à chiens et la motoneige sur le lac' },
        { en: 'The ice road to Dettah, when it’s open', fr: 'La route de glace vers Dettah, quand elle est ouverte' },
      ],
    },
    placeId: 'yellowknife',
    frReview: 'needs-human-review',
  },
  {
    id: 'nahanni',
    slug: 'nahanni',
    provinceId: 'northwest-territories',
    name: { en: 'Nahanni', fr: 'Nahanni' },
    summary: {
      en: 'Deep canyons, a huge waterfall and a river trip people talk about for decades.',
      fr: 'Des canyons profonds, une immense chute, et une descente de rivière dont on parle pendant des décennies.',
    },
    body: {
      en: 'Nahanni National Park Reserve was one of the first places on the UNESCO World Heritage list, in 1978. Virginia Falls drops about 96 m, roughly twice the height of Niagara. There are no roads: you fly in by floatplane, usually from Fort Simpson. You can visit the falls on a day flight, or paddle the South Nahanni for one to three weeks with a guide.',
      fr: 'La réserve de parc national Nahanni a été l’un des premiers sites inscrits au patrimoine mondial de l’UNESCO, en 1978. Les chutes Virginia tombent d’environ 96 m, à peu près deux fois la hauteur du Niagara. Il n’y a aucune route : on arrive en hydravion, généralement depuis Fort Simpson. On peut voir les chutes lors d’un vol à la journée, ou descendre la Nahanni Sud en canot pendant une à trois semaines, avec un guide.',
    },
    bestMonths: [6, 7, 8],
    images: {
      summer: {
        alt: { en: 'A great waterfall split by a rock spire in a canyon', fr: 'Une grande chute séparée par une aiguille rocheuse, dans un canyon' },
        subject: 'Virginia Falls from the portage trail',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A snowy canyon under a pale sky', fr: 'Un canyon enneigé sous un ciel pâle' },
        subject: 'Snowbound canyon walls, Nahanni',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A floatplane day trip to Virginia Falls', fr: 'Une excursion d’une journée en hydravion aux chutes Virginia' },
        { en: 'Guided canoe or raft trips through the canyons', fr: 'Les descentes guidées en canot ou en raft à travers les canyons' },
      ],
      winter: [
        { en: 'Closed to visitors in practice. The season is June to August.', fr: 'Fermé aux visiteurs en pratique. La saison va de juin à août.' },
      ],
    },
    placeId: 'fort-simpson',
    frReview: 'needs-human-review',
  },

  // ── Manitoba ───────────────────────────────────────────────────────────────
  {
    id: 'churchill',
    slug: 'churchill',
    provinceId: 'manitoba',
    name: { en: 'Churchill', fr: 'Churchill' },
    summary: {
      en: 'A small town on Hudson Bay with polar bears in autumn and belugas in summer.',
      fr: 'Une petite ville sur la baie d’Hudson, avec des ours polaires à l’automne et des bélugas l’été.',
    },
    body: {
      en: 'There is no road to Churchill: you fly or take the train from Winnipeg. In October and November, polar bears gather on the coast waiting for the bay to freeze, and you see them from large tundra vehicles. In July and August, thousands of belugas come into the Churchill River. Rooms are few, so both seasons book a year or more ahead.',
      fr: 'Aucune route ne mène à Churchill : on y va en avion ou en train depuis Winnipeg. En octobre et novembre, les ours polaires se rassemblent sur la côte en attendant que la baie gèle, et on les observe depuis de grands véhicules de toundra. En juillet et août, des milliers de bélugas remontent la rivière Churchill. Les chambres sont rares : pour les deux saisons, on réserve un an à l’avance, voire plus.',
    },
    bestMonths: [2, 3, 7, 8, 10, 11],
    images: {
      summer: {
        alt: { en: 'Beluga whales surfacing beside a small boat', fr: 'Des bélugas qui font surface à côté d’un petit bateau' },
        subject: 'Belugas in the Churchill River, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A polar bear on snow-dusted rocks by the sea', fr: 'Un ours polaire sur des rochers poudrés de neige, au bord de la mer' },
        subject: 'Polar bear on the Hudson Bay coast, November',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Belugas by kayak, boat or snorkel, July and August', fr: 'Les bélugas en kayak, en bateau ou avec masque et tuba, en juillet et août' },
        { en: 'Tundra wildflowers and seabirds', fr: 'Les fleurs de la toundra et les oiseaux marins' },
      ],
      winter: [
        { en: 'Polar bears from tundra vehicles, October to mid-November', fr: 'Les ours polaires depuis des véhicules de toundra, d’octobre à mi-novembre' },
        { en: 'Aurora, best in February and March', fr: 'Les aurores, surtout en février et mars' },
        { en: 'Dog sledding through the boreal forest', fr: 'Le traîneau à chiens dans la forêt boréale' },
      ],
    },
    placeId: 'churchill',
    frReview: 'needs-human-review',
  },
  {
    id: 'winnipeg',
    slug: 'winnipeg',
    provinceId: 'manitoba',
    name: { en: 'Winnipeg', fr: 'Winnipeg' },
    summary: {
      en: 'The gateway to Churchill, and better than its reputation.',
      fr: 'La porte d’entrée vers Churchill, et bien mieux que sa réputation.',
    },
    body: {
      en: 'Winnipeg grew up where the Red and Assiniboine rivers meet, at a spot now called The Forks. The Canadian Museum for Human Rights is worth half a day. The Exchange District has old warehouses full of restaurants, and Saint-Boniface has been French-speaking for two centuries. Most Churchill trips spend a night here, and it’s worth making it two.',
      fr: 'Winnipeg s’est développée au confluent des rivières Rouge et Assiniboine, à l’endroit appelé aujourd’hui La Fourche. Le Musée canadien pour les droits de la personne mérite une demi-journée. Le quartier de la Bourse a ses anciens entrepôts remplis de restaurants, et Saint-Boniface parle français depuis deux siècles. La plupart des voyages vers Churchill y font étape une nuit ; deux valent mieux.',
    },
    bestMonths: [2, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A modern museum with a glass tower beside a river', fr: 'Un musée moderne avec une tour de verre au bord d’une rivière' },
        subject: 'The Forks and the human rights museum, June',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'Skaters on a long trail over a frozen river', fr: 'Des patineurs sur une longue piste, sur une rivière gelée' },
        subject: 'Skating the river trail at The Forks, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Canadian Museum for Human Rights', fr: 'Le Musée canadien pour les droits de la personne' },
        { en: 'Patios and galleries in the Exchange District', fr: 'Les terrasses et galeries du quartier de la Bourse' },
      ],
      winter: [
        { en: 'Skating the river trail, when the ice is good', fr: 'Patiner sur la piste de la rivière, quand la glace est bonne' },
        { en: 'Festival du Voyageur in Saint-Boniface, February', fr: 'Le Festival du Voyageur à Saint-Boniface, en février' },
      ],
    },
    placeId: 'winnipeg',
    frReview: 'needs-human-review',
  },

  // ── Ontario ────────────────────────────────────────────────────────────────
  {
    id: 'toronto',
    slug: 'toronto',
    provinceId: 'ontario',
    name: { en: 'Toronto', fr: 'Toronto' },
    summary: {
      en: 'Canada’s biggest city, and one of the most international anywhere.',
      fr: 'La plus grande ville du Canada, et l’une des plus internationales au monde.',
    },
    body: {
      en: 'Close to half of Toronto’s residents were born outside Canada, and you can taste it. Kensington Market, Chinatown and Little Portugal are a walk apart. A short ferry takes you to the Toronto Islands, with beaches and a skyline view. It is also the usual way in for Niagara, Muskoka and Algonquin.',
      fr: 'Près de la moitié des habitants de Toronto sont nés hors du Canada, et ça se goûte. Kensington Market, le quartier chinois et la Petite Portugal sont à quelques minutes à pied les uns des autres. Un court traversier mène aux îles de Toronto, avec leurs plages et la vue sur les tours. C’est aussi le point de départ habituel pour le Niagara, Muskoka et le parc Algonquin.',
    },
    bestMonths: [5, 6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A city skyline across the water from an island beach', fr: 'Les tours de la ville vues depuis la plage d’une île' },
        subject: 'Toronto skyline from the Islands, summer evening',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'An outdoor skating rink lit up among city towers', fr: 'Une patinoire extérieure éclairée entre les tours' },
        subject: 'Skating at a downtown rink, December night',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'The ferry to the Toronto Islands', fr: 'Le traversier vers les îles de Toronto' },
        { en: 'Eating your way through Kensington Market', fr: 'Faire le tour de Kensington Market en goûtant à tout' },
        { en: 'A baseball game on a summer evening', fr: 'Un match de baseball un soir d’été' },
      ],
      winter: [
        { en: 'Theatre, galleries and warm restaurants', fr: 'Théâtre, galeries et restaurants bien chauffés' },
        { en: 'Outdoor skating rinks downtown', fr: 'Les patinoires extérieures du centre-ville' },
      ],
    },
    placeId: 'toronto',
    frReview: 'needs-human-review',
  },
  {
    id: 'niagara',
    slug: 'niagara',
    provinceId: 'ontario',
    name: { en: 'Niagara', fr: 'Niagara' },
    summary: {
      en: 'The falls, yes, and a quiet wine region just past them.',
      fr: 'Les chutes, bien sûr, et une région viticole paisible juste après.',
    },
    body: {
      en: 'Niagara Falls is 90 minutes from Toronto, and the Horseshoe Falls on the Canadian side are the big ones. The boat ride into the spray is worth doing once, with the poncho. The town around the falls is loud and commercial. Twenty minutes north, Niagara-on-the-Lake is the opposite, with wineries, old streets and the Shaw Festival.',
      fr: 'Les chutes du Niagara sont à 90 minutes de Toronto, et les chutes du Fer-à-Cheval, côté canadien, sont les plus impressionnantes. Le bateau qui s’approche dans les embruns vaut d’être fait une fois, avec le poncho. La ville autour des chutes est bruyante et commerciale. Vingt minutes plus au nord, Niagara-on-the-Lake est tout l’inverse : vignobles, vieilles rues et le Shaw Festival.',
    },
    bestMonths: [5, 6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A boat in the mist at the foot of a horseshoe-shaped waterfall', fr: 'Un bateau dans la brume au pied d’une chute en fer à cheval' },
        subject: 'Boat in the spray below Horseshoe Falls',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Ice-covered trees and railings beside a misty waterfall', fr: 'Des arbres et des rambardes couverts de glace près d’une chute brumeuse' },
        subject: 'Frozen spray at the falls, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The boat to the foot of the Horseshoe Falls', fr: 'Le bateau jusqu’au pied des chutes du Fer-à-Cheval' },
        { en: 'Wineries and bike paths around Niagara-on-the-Lake', fr: 'Les vignobles et pistes cyclables autour de Niagara-on-the-Lake' },
      ],
      winter: [
        { en: 'The falls dressed in ice, and far fewer people', fr: 'Les chutes habillées de glace, et beaucoup moins de monde' },
        { en: 'Icewine tastings, from grapes picked frozen', fr: 'Des dégustations de vin de glace, de raisins vendangés gelés' },
      ],
    },
    placeId: 'niagara-falls',
    frReview: 'needs-human-review',
  },
  {
    id: 'muskoka',
    slug: 'muskoka',
    provinceId: 'ontario',
    name: { en: 'Muskoka', fr: 'Muskoka' },
    summary: {
      en: 'Ontario’s cottage country: lakes, docks and pink granite, two hours north of Toronto.',
      fr: 'La région des chalets de l’Ontario : lacs, pontons et granit rose, à deux heures au nord de Toronto.',
    },
    body: {
      en: 'Muskoka is where Toronto goes on summer weekends, and has been for over a century. The lakes are lined with cottages, boathouses and Muskoka chairs, which are the same as Adirondack chairs but don’t say so here. Old steamships still cruise the lakes in summer. The maples turn in late September and early October.',
      fr: 'Muskoka, c’est là où Toronto passe ses week-ends d’été, depuis plus d’un siècle. Les lacs sont bordés de chalets, de hangars à bateaux et de chaises Muskoka, qui ressemblent beaucoup aux chaises Adirondack, mais on évite de le dire ici. De vieux bateaux à vapeur naviguent encore sur les lacs en été. Les érables changent de couleur fin septembre et début octobre.',
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Two wooden chairs on a dock over a calm lake', fr: 'Deux chaises en bois sur un ponton, au-dessus d’un lac calme' },
        subject: 'Muskoka chairs on a dock at dusk',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'An ice trail winding through snowy forest', fr: 'Une piste de glace qui serpente dans une forêt enneigée' },
        subject: 'Forest skating trail, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A steamship cruise on Lake Muskoka', fr: 'Une croisière en bateau à vapeur sur le lac Muskoka' },
        { en: 'Swimming off the dock, then dinner on it', fr: 'Se baigner depuis le ponton, puis y dîner' },
        { en: 'Maple colour in late September and early October', fr: 'Les couleurs des érables fin septembre et début octobre' },
      ],
      winter: [
        { en: 'Skating trails through the forest at Arrowhead Provincial Park', fr: 'Les pistes de patin en forêt du parc provincial Arrowhead' },
        { en: 'Quiet, snowy and mostly closed. A cosy weekend, not a week.', fr: 'Calme, enneigé et en grande partie fermé. Un week-end douillet, pas une semaine.' },
      ],
    },
    placeId: 'huntsville',
    frReview: 'needs-human-review',
  },
  {
    id: 'algonquin',
    slug: 'algonquin',
    provinceId: 'ontario',
    name: { en: 'Algonquin', fr: 'Algonquin' },
    summary: {
      en: 'Canada’s oldest provincial park, and the classic place to learn to canoe.',
      fr: 'Le plus ancien parc provincial du Canada, et l’endroit idéal pour apprendre le canot.',
    },
    body: {
      en: 'Algonquin Park was created in 1893 and covers about 7,600 km² of lakes, rivers and forest. Highway 60 runs through the south, with trails and lookouts along it. Beyond the road, the park is canoe routes and portages, with campsites on the lakes. Moose are often seen near the highway in May and June, which is also black fly season. Bring repellent.',
      fr: 'Le parc Algonquin a été créé en 1893 et couvre environ 7 600 km² de lacs, de rivières et de forêts. La route 60 traverse le sud du parc, avec sentiers et belvédères. Au-delà de la route, ce ne sont que parcours en canot et portages, avec des campements au bord des lacs. On voit souvent des orignaux près de la route en mai et juin, qui est aussi la saison des mouches noires. Prévoyez du répulsif.',
    },
    bestMonths: [2, 6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A canoe on misty water at dawn, with pines on the shore', fr: 'Un canot sur l’eau brumeuse à l’aube, des pins sur la rive' },
        subject: 'Canoe on a misty lake at dawn, August',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'A snowy trail through tall pines', fr: 'Un sentier enneigé entre de grands pins' },
        subject: 'Ski trail through white pine, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A few days by canoe, sleeping on a lakeshore', fr: 'Quelques jours en canot, à dormir au bord d’un lac' },
        { en: 'Loons calling at dusk', fr: 'Le chant des plongeons huards au crépuscule' },
        { en: 'Maples turning red in late September', fr: 'Les érables qui rougissent fin septembre' },
      ],
      winter: [
        { en: 'Cross-country skiing and snowshoeing on park trails', fr: 'Le ski de fond et la raquette sur les sentiers du parc' },
        { en: 'Dog sledding, and the quiet that comes with snow', fr: 'Le traîneau à chiens, et le silence qui vient avec la neige' },
      ],
    },
    placeId: 'algonquin',
    frReview: 'needs-human-review',
  },

  // ── Quebec ─────────────────────────────────────────────────────────────────
  {
    id: 'montreal',
    slug: 'montreal',
    provinceId: 'quebec',
    name: { en: 'Montréal', fr: 'Montréal' },
    summary: {
      en: 'A French-speaking island city of festivals, terraces and very good bagels.',
      fr: 'Une ville-île francophone de festivals, de terrasses et de très bons bagels.',
    },
    body: {
      en: 'Montréal is built around Mount Royal, a hill with a park on top that gives the city its name. Old Montréal has the cobbles; the Plateau and Mile End have the life. Summer is one festival after another, starting with jazz in late June. Winter is cold and snowy, and the city carries on regardless, partly underground.',
      fr: 'Montréal s’est construite autour du mont Royal, une colline coiffée d’un parc qui a donné son nom à la ville. Le Vieux-Montréal a les pavés ; le Plateau et le Mile End ont la vie. L’été, les festivals s’enchaînent, à commencer par le jazz fin juin. L’hiver est froid et enneigé, et la ville continue comme si de rien n’était, en partie sous terre.',
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Crowded café terraces on a leafy street', fr: 'Des terrasses de café animées dans une rue arborée' },
        subject: 'Café terraces on the Plateau, July',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'Spiral outdoor staircases covered in snow', fr: 'Des escaliers extérieurs en colimaçon couverts de neige' },
        subject: 'Snow on spiral staircases, Plateau, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Jazz festival, late June to early July', fr: 'Le festival de jazz, de fin juin à début juillet' },
        { en: 'Jean-Talon Market and a picnic on Mount Royal', fr: 'Le marché Jean-Talon, puis un pique-nique sur le mont Royal' },
        { en: 'Bagels, smoked meat and a long argument about which shop is best', fr: 'Bagels, smoked meat, et un long débat sur la meilleure adresse' },
      ],
      winter: [
        { en: 'Skating in Old Montréal and on Mount Royal', fr: 'Patiner dans le Vieux-Montréal et sur le mont Royal' },
        { en: 'Outdoor winter festivals that refuse to be cancelled by cold', fr: 'Des festivals d’hiver en plein air que le froid n’arrête pas' },
      ],
    },
    placeId: 'montreal',
    frReview: 'needs-human-review',
  },
  {
    id: 'quebec-city',
    slug: 'quebec-city',
    provinceId: 'quebec',
    name: { en: 'Québec City', fr: 'Québec' },
    summary: {
      en: 'A walled old city on a cliff above the St. Lawrence.',
      fr: 'Une vieille ville fortifiée sur une falaise au-dessus du Saint-Laurent.',
    },
    body: {
      en: 'Québec City was founded in 1608, and its old town is a UNESCO World Heritage Site. It is the only city north of Mexico with its walls still standing. The streets are steep, so there’s a funicular between the upper and lower towns. Montmorency Falls, 15 minutes away, is about 30 m higher than Niagara.',
      fr: 'Québec a été fondée en 1608, et son arrondissement historique est inscrit au patrimoine mondial de l’UNESCO. C’est la seule ville au nord du Mexique dont les remparts sont toujours debout. Les rues sont en pente, d’où le funiculaire entre la haute-ville et la basse-ville. La chute Montmorency, à 15 minutes, est environ 30 m plus haute que celles du Niagara.',
    },
    bestMonths: [2, 6, 7, 8, 9, 12],
    images: {
      summer: {
        alt: { en: 'Narrow street of old stone houses with flower boxes', fr: 'Une rue étroite de vieilles maisons de pierre fleuries' },
        subject: 'Petit-Champlain street, summer morning',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'An ice palace lit up at night in a snowy square', fr: 'Un palais de glace illuminé la nuit sur une place enneigée' },
        subject: 'Winter Carnival ice palace at night',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Walking the walls and the Plains of Abraham', fr: 'Le tour des remparts et les plaines d’Abraham' },
        { en: 'Montmorency Falls, by cable car or stairs', fr: 'La chute Montmorency, en téléphérique ou par l’escalier' },
        { en: 'Île d’Orléans for strawberries and cider', fr: 'L’île d’Orléans pour les fraises et le cidre' },
      ],
      winter: [
        { en: 'Winter Carnival, late January to mid-February', fr: 'Le Carnaval de Québec, de fin janvier à mi-février' },
        { en: 'The old town under snow, at Christmas especially', fr: 'Le Vieux-Québec sous la neige, surtout à Noël' },
        { en: 'Ice canoe races across the St. Lawrence', fr: 'Les courses de canot à glace sur le Saint-Laurent' },
      ],
    },
    placeId: 'quebec-city',
    frReview: 'needs-human-review',
  },
  {
    id: 'charlevoix',
    slug: 'charlevoix',
    provinceId: 'quebec',
    name: { en: 'Charlevoix', fr: 'Charlevoix' },
    summary: {
      en: 'Rolling hills, river views and very good cheese, an hour east of Québec City.',
      fr: 'Des collines, la vue sur le fleuve et de très bons fromages, à une heure à l’est de Québec.',
    },
    body: {
      en: 'Charlevoix sits inside the remains of a meteorite crater, which explains the shape of the hills. Baie-Saint-Paul has galleries and a long tradition of painters. Small farms and producers along the Route des Saveurs sell cheese, cider and duck. It’s a UNESCO biosphere reserve, and it feels like one.',
      fr: 'Charlevoix se trouve à l’intérieur des restes d’un cratère de météorite, ce qui explique la forme des collines. Baie-Saint-Paul a ses galeries et une longue tradition de peintres. Le long de la Route des Saveurs, petites fermes et producteurs vendent fromage, cidre et canard. C’est une réserve de biosphère de l’UNESCO, et ça se ressent.',
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Green hills sloping to a wide river and a small village', fr: 'Des collines vertes descendant vers un large fleuve et un petit village' },
        subject: 'Hills above the St. Lawrence near Baie-Saint-Paul',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A ski run above a frozen river', fr: 'Une piste de ski au-dessus d’un fleuve gelé' },
        subject: 'Ski run dropping toward the icy St. Lawrence',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Cheese, cider and bread along the Route des Saveurs', fr: 'Fromage, cidre et pain le long de la Route des Saveurs' },
        { en: 'Galleries in Baie-Saint-Paul', fr: 'Les galeries de Baie-Saint-Paul' },
        { en: 'Cycling Isle-aux-Coudres, a short ferry away', fr: 'Le tour de l’Isle-aux-Coudres à vélo, à un court traversier' },
      ],
      winter: [
        { en: 'Skiing with a view straight down to the river', fr: 'Skier avec vue plongeante sur le fleuve' },
        { en: 'Snowshoeing in the national parks', fr: 'La raquette dans les parcs nationaux' },
      ],
    },
    placeId: 'baie-saint-paul',
    frReview: 'needs-human-review',
  },
  {
    id: 'tadoussac',
    slug: 'tadoussac',
    provinceId: 'quebec',
    name: { en: 'Tadoussac', fr: 'Tadoussac' },
    summary: {
      en: 'Where the Saguenay fjord meets the St. Lawrence, and the whales come to feed.',
      fr: 'Là où le fjord du Saguenay rejoint le Saint-Laurent, et où les baleines viennent se nourrir.',
    },
    body: {
      en: 'Tadoussac is a small village at the mouth of the Saguenay fjord. Cold, deep water rises here and feeds a lot of whales: minke, fin, humpback, sometimes blue whales, and belugas all year. You can watch from boats, sea kayaks or the shore. Whale season runs roughly June to October.',
      fr: 'Tadoussac est un petit village à l’embouchure du fjord du Saguenay. Les eaux froides et profondes remontent ici et nourrissent beaucoup de baleines : petits rorquals, rorquals communs, baleines à bosse, parfois des baleines bleues, et des bélugas toute l’année. On les observe en bateau, en kayak de mer ou depuis la rive. La saison va à peu près de juin à octobre.',
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A whale’s back breaking the surface near a rocky shore', fr: 'Le dos d’une baleine qui crève la surface près d’une côte rocheuse' },
        subject: 'Fin whale surfacing off Tadoussac, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Small ice-fishing cabins on a frozen fjord', fr: 'De petites cabanes de pêche sur un fjord gelé' },
        subject: 'Ice-fishing cabins on the Saguenay, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Whale watching by boat or sea kayak', fr: 'L’observation des baleines en bateau ou en kayak de mer' },
        { en: 'Hiking the cliffs of the Saguenay fjord', fr: 'La randonnée sur les falaises du fjord du Saguenay' },
      ],
      winter: [
        { en: 'Whale season is over and the village is very quiet. Come from June.', fr: 'La saison des baleines est finie et le village très calme. Venez à partir de juin.' },
        { en: 'Ice fishing further up the Saguenay', fr: 'La pêche blanche plus haut sur le Saguenay' },
      ],
    },
    placeId: 'tadoussac',
    frReview: 'needs-human-review',
  },

  // ── Atlantic Canada ────────────────────────────────────────────────────────
  {
    id: 'cabot-trail',
    slug: 'cabot-trail',
    provinceId: 'atlantic-canada',
    name: { en: 'Cabot Trail', fr: 'Piste Cabot' },
    summary: {
      en: 'A coastal loop around Cape Breton Island, with highlands, whales and fiddles.',
      fr: 'Une boucle côtière autour de l’île du Cap-Breton, entre hautes terres, baleines et violons.',
    },
    body: {
      en: 'The Cabot Trail is about 300 km of road around northern Cape Breton, in Nova Scotia. It climbs through Cape Breton Highlands National Park, where the Skyline Trail ends on a headland above the sea. Gaelic and Acadian culture are both strong here, and the music is everywhere. In October, the hills turn red and the Celtic Colours festival fills the island.',
      fr: 'La piste Cabot fait environ 300 km de route autour du nord du Cap-Breton, en Nouvelle-Écosse. Elle grimpe dans le parc national des Hautes-Terres-du-Cap-Breton, où le sentier Skyline se termine sur un cap au-dessus de la mer. Les cultures gaélique et acadienne y sont bien vivantes, et la musique est partout. En octobre, les collines rougissent et le festival Celtic Colours anime toute l’île.',
    },
    bestMonths: [7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A boardwalk along a headland high above the sea', fr: 'Une passerelle sur un cap, haut au-dessus de la mer' },
        subject: 'Skyline Trail headland at sunset',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A snowy coastal road with the sea beyond', fr: 'Une route côtière enneigée, la mer au loin' },
        subject: 'Snow on the highlands above the Gulf',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Skyline Trail at sunset, with pilot whales below', fr: 'Le sentier Skyline au coucher du soleil, avec des globicéphales en contrebas' },
        { en: 'Ceilidhs and fiddle music in small halls', fr: 'Les ceilidhs et le violon dans de petites salles' },
        { en: 'Red and gold hills in early to mid-October', fr: 'Les collines rouges et dorées début et mi-octobre' },
      ],
      winter: [
        { en: 'Most inns and restaurants close. We’d come back in July.', fr: 'La plupart des auberges et restaurants ferment. Nous reviendrions en juillet.' },
      ],
    },
    placeId: 'baddeck',
    frReview: 'needs-human-review',
  },
  {
    id: 'prince-edward-island',
    slug: 'prince-edward-island',
    provinceId: 'atlantic-canada',
    name: { en: 'Prince Edward Island', fr: 'Île-du-Prince-Édouard' },
    summary: {
      en: 'Canada’s smallest province: red cliffs, potato fields and a lot of lobster.',
      fr: 'La plus petite province du Canada : falaises rouges, champs de pommes de terre et beaucoup de homard.',
    },
    body: {
      en: 'Prince Edward Island is linked to the mainland by the 12.9 km Confederation Bridge. The sand and cliffs are red from iron in the soil. Most visitors come for beaches, oysters, lobster suppers and Anne of Green Gables, in roughly that order or the reverse. Charlottetown is small, friendly and easy on foot.',
      fr: 'L’Île-du-Prince-Édouard est reliée au continent par le pont de la Confédération, long de 12,9 km. Le sable et les falaises sont rouges à cause du fer contenu dans le sol. On vient surtout pour les plages, les huîtres, les soupers de homard et Anne… la maison aux pignons verts, à peu près dans cet ordre ou dans l’ordre inverse. Charlottetown est petite, accueillante et se visite à pied.',
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'Red sandstone cliffs above a beach and blue sea', fr: 'Des falaises de grès rouge au-dessus d’une plage et d’une mer bleue' },
        subject: 'Red cliffs on the north shore, July',
        tone: 'autumn',
      },
      winter: {
        alt: { en: 'A snowy field with a lighthouse on the coast', fr: 'Un champ enneigé avec un phare sur la côte' },
        subject: 'Lighthouse in a snowy field, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Lobster suppers and oysters straight from the bay', fr: 'Les soupers de homard et les huîtres tout juste sorties de la baie' },
        { en: 'Warm-water beaches on the north shore', fr: 'Les plages à l’eau tiède de la côte nord' },
        { en: 'Cycling the Confederation Trail across the island', fr: 'Traverser l’île à vélo sur le sentier de la Confédération' },
      ],
      winter: [
        { en: 'Very quiet. Lovely for a weekend, not built for a holiday.', fr: 'Très calme. Charmant pour un week-end, pas fait pour des vacances.' },
      ],
    },
    placeId: 'charlottetown',
    frReview: 'needs-human-review',
  },
  {
    id: 'newfoundland',
    slug: 'newfoundland',
    provinceId: 'atlantic-canada',
    name: { en: 'Newfoundland', fr: 'Terre-Neuve' },
    summary: {
      en: 'Icebergs, puffins, whales and a capital painted in every colour.',
      fr: 'Des icebergs, des macareux, des baleines et une capitale peinte de toutes les couleurs.',
    },
    body: {
      en: 'Newfoundland is a big island with its own time zone, half an hour ahead of the Maritimes. Icebergs drift down from Greenland in May and June, followed by humpbacks and puffins in summer. Gros Morne National Park, on the west coast, has fjords and a mountain of exposed Earth’s mantle. St. John’s has the colourful houses, the pubs, and Cape Spear, the most easterly point in North America.',
      fr: 'Terre-Neuve est une grande île avec son propre fuseau horaire, une demi-heure en avance sur les Maritimes. Les icebergs descendent du Groenland en mai et juin, suivis l’été par les baleines à bosse et les macareux. Le parc national du Gros-Morne, sur la côte ouest, a des fjords et une montagne où le manteau terrestre affleure. St. John’s a ses maisons colorées, ses pubs, et le cap Spear, point le plus à l’est de l’Amérique du Nord.',
    },
    bestMonths: [6, 7, 8],
    images: {
      summer: {
        alt: { en: 'A large iceberg near a rocky shore with small houses', fr: 'Un gros iceberg près d’une côte rocheuse aux petites maisons' },
        subject: 'Iceberg off a fishing village, June',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Snow on rows of brightly painted houses on a hill', fr: 'De la neige sur des rangées de maisons colorées, à flanc de colline' },
        subject: 'Snow on St. John’s row houses',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Icebergs, usually May and June. Usually.', fr: 'Les icebergs, en général en mai et juin. En général.' },
        { en: 'Puffins at close range near Elliston', fr: 'Les macareux de très près, vers Elliston' },
        { en: 'Boat trips into the fjords of Gros Morne', fr: 'Les sorties en bateau dans les fjords du Gros-Morne' },
      ],
      winter: [
        { en: 'St. John’s pubs and music, in any weather', fr: 'Les pubs et la musique de St. John’s, par tous les temps' },
        { en: 'Outside the city, many places close until spring', fr: 'Hors de la ville, beaucoup d’endroits ferment jusqu’au printemps' },
      ],
    },
    placeId: 'st-johns',
    frReview: 'needs-human-review',
  },
  {
    id: 'bay-of-fundy',
    slug: 'bay-of-fundy',
    provinceId: 'atlantic-canada',
    name: { en: 'Bay of Fundy', fr: 'Baie de Fundy' },
    summary: {
      en: 'The highest tides in the world, between New Brunswick and Nova Scotia.',
      fr: 'Les plus hautes marées du monde, entre le Nouveau-Brunswick et la Nouvelle-Écosse.',
    },
    body: {
      en: 'Twice a day, the Bay of Fundy fills and empties with tides that can reach 16 m. At Hopewell Rocks you can walk on the sea floor at low tide and kayak the same spot six hours later. Fundy National Park has coastal trails and covered bridges nearby. Whales feed at the mouth of the bay in summer.',
      fr: 'Deux fois par jour, la baie de Fundy se remplit et se vide avec des marées qui peuvent atteindre 16 m. À Hopewell Rocks, on marche sur le fond de la mer à marée basse, et on fait du kayak au même endroit six heures plus tard. Le parc national Fundy a des sentiers côtiers, avec des ponts couverts tout près. L’été, les baleines se nourrissent à l’entrée de la baie.',
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'Tall sea-carved rock pillars on a muddy shore at low tide', fr: 'De hauts piliers rocheux sculptés par la mer, sur une grève à marée basse' },
        subject: 'Hopewell Rocks at low tide, July',
        tone: 'autumn',
      },
      winter: {
        alt: { en: 'Ice floes stranded on a tidal shore', fr: 'Des blocs de glace échoués sur une grève à marée' },
        subject: 'Tidal ice on the Fundy shore, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Walking the ocean floor at Hopewell Rocks, then kayaking it', fr: 'Marcher sur le fond de la mer à Hopewell Rocks, puis y pagayer' },
        { en: 'Whale watching at the mouth of the bay', fr: 'L’observation des baleines à l’entrée de la baie' },
        { en: 'Coastal trails in Fundy National Park', fr: 'Les sentiers côtiers du parc national Fundy' },
      ],
      winter: [
        { en: 'The tides keep going; most of the tours don’t. Better June to September.', fr: 'Les marées continuent, la plupart des excursions non. Mieux vaut venir de juin à septembre.' },
      ],
    },
    placeId: 'fundy',
    frReview: 'needs-human-review',
  },

  // ── Nunavut ────────────────────────────────────────────────────────────────
  {
    id: 'iqaluit',
    slug: 'iqaluit',
    provinceId: 'nunavut',
    name: { en: 'Iqaluit', fr: 'Iqaluit' },
    summary: {
      en: 'Nunavut’s capital, on Frobisher Bay, three hours’ flight from Ottawa.',
      fr: 'La capitale du Nunavut, sur la baie de Frobisher, à trois heures de vol d’Ottawa.',
    },
    body: {
      en: 'Iqaluit is home to about 7,500 people and is the starting point for most trips in Nunavut. The legislative assembly building, the galleries and the local artists are the best introduction to Inuit culture. Sylvia Grinnell Territorial Park is a short walk out of town, with caribou sometimes on the tundra. In April, the town celebrates the return of the light.',
      fr: 'Iqaluit compte environ 7 500 habitants et sert de point de départ à la plupart des voyages au Nunavut. Le bâtiment de l’Assemblée législative, les galeries et les artistes locaux offrent la meilleure introduction à la culture inuite. Le parc territorial Sylvia Grinnell est à quelques pas de la ville, avec parfois des caribous dans la toundra. En avril, la ville fête le retour de la lumière.',
    },
    bestMonths: [4, 5, 7, 8],
    images: {
      summer: {
        alt: { en: 'Small coloured houses on rocky tundra by a bay', fr: 'De petites maisons colorées sur la toundra rocheuse, au bord d’une baie' },
        subject: 'Iqaluit houses above Frobisher Bay, July',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'Snowmobiles on sea ice under a pink sky', fr: 'Des motoneiges sur la banquise, sous un ciel rose' },
        subject: 'Snowmobiles on Frobisher Bay at dusk, April',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Walking the tundra in Sylvia Grinnell park', fr: 'Marcher dans la toundra du parc Sylvia Grinnell' },
        { en: 'Prints and carvings, ideally bought from the artist', fr: 'Estampes et sculptures, idéalement achetées à l’artiste' },
      ],
      winter: [
        { en: 'Spring festivities in April, as the days lengthen fast', fr: 'Les festivités du printemps en avril, quand les jours s’allongent vite' },
        { en: 'Dog-team and snowmobile trips on the sea ice with Inuit guides', fr: 'Sorties en traîneau à chiens ou en motoneige sur la banquise, avec des guides inuits' },
        { en: 'Midwinter is dark and very cold. We’d come in March or April.', fr: 'Le cœur de l’hiver est sombre et très froid. Nous viendrions en mars ou avril.' },
      ],
    },
    placeId: 'iqaluit',
    frReview: 'needs-human-review',
  },
  {
    id: 'pond-inlet',
    slug: 'pond-inlet',
    provinceId: 'nunavut',
    name: { en: 'Pond Inlet', fr: 'Pond Inlet' },
    summary: {
      en: 'A small Inuit community on north Baffin Island, facing glaciers and narwhals.',
      fr: 'Une petite communauté inuite du nord de l’île de Baffin, face aux glaciers et aux narvals.',
    },
    body: {
      en: 'Pond Inlet, or Mittimatalik, is a community of about 1,500 people looking across Eclipse Sound to the glaciers of Bylot Island and Sirmilik National Park. From late May to June, Inuit guides take small groups to the floe edge, where sea ice meets open water and the wildlife gathers. Narwhals, seals, seabirds and sometimes polar bears are all possible. Weather and ice decide each day, and good trips build in spare ones.',
      fr: 'Pond Inlet, ou Mittimatalik, est une communauté d’environ 1 500 habitants qui fait face, de l’autre côté du détroit d’Eclipse, aux glaciers de l’île Bylot et du parc national Sirmilik. De fin mai à juin, des guides inuits emmènent de petits groupes à la lisière des glaces, là où la banquise rencontre l’eau libre et où se rassemble la faune. Narvals, phoques, oiseaux marins et parfois ours polaires sont au rendez-vous possible. La météo et la glace décident de chaque journée, et les bons séjours prévoient des jours de marge.',
    },
    bestMonths: [5, 6, 7, 8],
    images: {
      summer: {
        alt: { en: 'Camp tents on sea ice with icebergs and mountains behind', fr: 'Des tentes de camp sur la banquise, icebergs et montagnes derrière' },
        subject: 'Floe-edge camp near Bylot Island, June',
        tone: 'snow',
      },
      winter: {
        alt: { en: 'A small Arctic settlement under a dark blue sky', fr: 'Un petit village arctique sous un ciel bleu sombre' },
        subject: 'Pond Inlet in the polar night, December',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Camping at the floe edge, late May to June', fr: 'Camper à la lisière des glaces, de fin mai à juin' },
        { en: 'Narwhals in Eclipse Sound once the ice breaks up', fr: 'Les narvals dans le détroit d’Eclipse après la débâcle' },
        { en: 'Icebergs locked in the sea ice, close enough to walk to', fr: 'Des icebergs pris dans la banquise, assez près pour y aller à pied' },
      ],
      winter: [
        { en: 'The sun doesn’t rise from November to January. Not a visitor season.', fr: 'Le soleil ne se lève pas de novembre à janvier. Pas une saison pour les visiteurs.' },
        { en: 'March and April bring returning light and travel on the ice', fr: 'Mars et avril ramènent la lumière et les déplacements sur la glace' },
      ],
    },
    placeId: 'pond-inlet',
    frReview: 'needs-human-review',
  },
];
