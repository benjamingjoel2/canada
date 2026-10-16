import type { Stay } from './types';

/**
 * PLACEHOLDER stays. Names are invented and do not refer to real properties.
 * Replace with real partner properties (and their permission) before launch.
 */
export const stays: Stay[] = [
  {
    id: 'stay-rainforest-lodge',
    slug: 'moss-and-tide-lodge',
    name: 'Moss & Tide Lodge',
    regionId: 'great-bear-rainforest',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Floating lodge, 9 rooms', fr: 'Lodge flottant, 9 chambres' },
    summary: {
      en: 'A floating lodge moored in a sheltered inlet, reached only by floatplane. Bears on the shore, whales in the channel.',
      fr: "Un lodge flottant amarré dans une anse abritée, accessible uniquement en hydravion. Des ours sur la rive, des baleines dans le chenal.",
    },
    body: {
      en: 'Nine cedar-panelled rooms on a floating platform, with a dining room that looks straight down the inlet. Guides take small groups out by boat each morning to the estuaries where grizzlies feed. Meals are mostly seafood and very good. There is no road, no mobile signal and, most evenings, no reason to miss either.',
      fr: "Neuf chambres lambrissées de cèdre sur une plateforme flottante, avec une salle à manger qui donne directement sur l'anse. Chaque matin, des guides emmènent de petits groupes en bateau vers les estuaires où se nourrissent les grizzlis. Les repas, surtout de la mer, sont excellents. Pas de route, pas de réseau mobile et, la plupart des soirs, aucune raison de regretter l'un ou l'autre.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Floating lodge in a misty inlet, floatplane at the dock',
        tone: 'forest',
        alt: {
          en: 'A floating lodge in a misty, forested inlet with a floatplane tied to the dock',
          fr: 'Un lodge flottant dans une anse brumeuse et boisée, un hydravion amarré au quai',
        },
      },
      {
        subject: 'Guests in a small boat watching a bear on the shore',
        tone: 'forest',
        alt: {
          en: 'A small boat of guests watching a grizzly on a grassy shoreline',
          fr: 'Un petit bateau de voyageurs observant un grizzli sur une rive herbeuse',
        },
      },
    ],
  },
  {
    id: 'stay-tofino-inn',
    slug: 'driftline-inn',
    name: 'Driftline Inn',
    regionId: 'tofino-vancouver-island',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Beachfront inn, 16 rooms', fr: 'Auberge en bord de plage, 16 chambres' },
    summary: {
      en: 'A cedar inn on a long Pacific beach near Tofino. Whales in summer, storms in winter, both best seen from the window seat.',
      fr: "Une auberge en cèdre sur une longue plage du Pacifique près de Tofino. Les baleines l'été, les tempêtes l'hiver, les deux vues idéalement depuis la banquette de la fenêtre.",
    },
    body: {
      en: 'Sixteen rooms, every one facing the ocean, with fireplaces and deep baths. In summer, the inn arranges whale-watching and boat trips to hot springs. In winter, guests come for the storms, and the staff hand out rain gear at the door. The restaurant is small and the chef forages more than you would expect.',
      fr: "Seize chambres, toutes face à l'océan, avec cheminée et baignoire profonde. L'été, l'auberge organise l'observation des baleines et des sorties en bateau vers les sources chaudes. L'hiver, on vient pour les tempêtes, et le personnel distribue des vêtements de pluie à la porte. Le restaurant est petit et le chef cueille plus qu'on ne l'imagine.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Cedar inn above a wide sandy beach at sunset',
        tone: 'lake',
        alt: {
          en: 'A low cedar building above a wide sandy beach at sunset',
          fr: 'Un bâtiment bas en cèdre au-dessus d’une large plage de sable, au coucher du soleil',
        },
      },
      {
        subject: 'Winter storm waves seen through a room window',
        tone: 'granite',
        alt: {
          en: 'Large winter waves breaking on rocks, seen through a window with a fire inside',
          fr: 'Grosses vagues d’hiver se brisant sur les rochers, vues à travers une fenêtre, un feu à l’intérieur',
        },
      },
    ],
  },
  {
    id: 'stay-lake-chalet',
    slug: 'larchmere-chalet',
    name: 'Larchmere Chalet',
    regionId: 'banff-lake-louise',
    provinceId: 'alberta',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Mountain chalet, 12 rooms', fr: 'Chalet de montagne, 12 chambres' },
    summary: {
      en: 'A timber chalet near Lake Louise, close enough to walk to the trails and far enough from the car parks.',
      fr: "Un chalet en bois près de Lake Louise, assez proche pour rejoindre les sentiers à pied, et assez loin des parkings.",
    },
    body: {
      en: 'Twelve rooms in an old-style timber chalet with a big stone fireplace and a boot room that sees a lot of use. In summer, guests walk straight out to the trails before the day visitors arrive. In winter, it is ski-in distance from cross-country trails and a short drive from the ski hill. Breakfast is serious, because the walking is.',
      fr: "Douze chambres dans un chalet en bois à l'ancienne, avec une grande cheminée en pierre et un vestiaire à chaussures très utilisé. L'été, on part à pied sur les sentiers avant l'arrivée des visiteurs à la journée. L'hiver, les pistes de ski de fond sont à deux pas et la station de ski à quelques minutes en voiture. Le petit-déjeuner est copieux, parce que la marche l'est aussi.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Timber chalet among spruce with peaks behind, summer',
        tone: 'forest',
        alt: {
          en: 'A timber chalet among spruce trees with rocky peaks behind in summer',
          fr: 'Un chalet en bois entre les épinettes, des sommets rocheux en arrière-plan, en été',
        },
      },
      {
        subject: 'Stone fireplace and armchairs, snow outside the window',
        tone: 'snow',
        alt: {
          en: 'A stone fireplace and armchairs inside, with snow falling outside the window',
          fr: 'Une cheminée en pierre et des fauteuils, la neige tombant derrière la fenêtre',
        },
      },
    ],
  },
  {
    id: 'stay-jasper-cabins',
    slug: 'whitebark-cabins',
    name: 'Whitebark Cabins',
    regionId: 'jasper',
    provinceId: 'alberta',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Log cabins by a river, 14 cabins', fr: 'Chalets en rondins au bord d’une rivière, 14 chalets' },
    summary: {
      en: 'Log cabins on a bend of the river outside Jasper. Elk on the lawn are not an extra charge.',
      fr: "Des chalets en rondins dans un méandre de la rivière, près de Jasper. Les wapitis sur la pelouse ne sont pas facturés en supplément.",
    },
    body: {
      en: 'Fourteen cabins spaced out among the pines, each with a porch, a woodstove and a small kitchen. Jasper town is ten minutes away, but the nights are dark enough for proper stargazing. Elk wander through in the autumn, and staff will remind you, politely, to keep your distance. It is simple, warm and very comfortable.',
      fr: "Quatorze chalets répartis entre les pins, chacun avec une véranda, un poêle à bois et une petite cuisine. Le village de Jasper est à dix minutes, mais les nuits sont assez noires pour observer vraiment les étoiles. Les wapitis passent à l'automne, et le personnel vous rappellera, poliment, de garder vos distances. C'est simple, chaleureux et très confortable.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Log cabins among pines beside a milky river',
        tone: 'forest',
        alt: {
          en: 'Log cabins among pine trees beside a pale blue glacial river',
          fr: 'Chalets en rondins entre les pins, au bord d’une rivière glaciaire bleu pâle',
        },
      },
      {
        subject: 'Elk on snowy grass in front of a cabin porch',
        tone: 'snow',
        alt: {
          en: 'An elk standing on snowy grass in front of a cabin porch',
          fr: 'Un wapiti sur l’herbe enneigée devant la véranda d’un chalet',
        },
      },
    ],
  },
  {
    id: 'stay-vancouver-hotel',
    slug: 'the-lantern-house',
    name: 'The Lantern House',
    regionId: 'vancouver',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Harbourside boutique hotel, 40 rooms', fr: 'Hôtel de charme sur le port, 40 chambres' },
    summary: {
      en: 'A small hotel on the harbour, a short walk from the seawall and the floatplane terminal.',
      fr: "Un petit hôtel sur le port, à quelques pas de la digue et du terminal des hydravions.",
    },
    body: {
      en: 'Forty quiet rooms looking over the harbour to the North Shore mountains. The floatplanes take off outside, which is more relaxing than it sounds. Bikes are free for the seawall, and the concierge is very good at restaurant tables. It works as the first night after a long flight and the last night before one.',
      fr: "Quarante chambres calmes donnant sur le port et les montagnes de la rive nord. Les hydravions décollent juste devant, ce qui est plus apaisant qu'il n'y paraît. Les vélos sont gratuits pour la digue, et le concierge excelle à trouver une table au restaurant. C'est l'endroit idéal pour la première nuit après un long vol et la dernière avant le suivant.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Hotel room window over a harbour with floatplanes',
        tone: 'lake',
        alt: {
          en: 'A hotel room window looking over a harbour with floatplanes and mountains',
          fr: 'La fenêtre d’une chambre donnant sur un port avec des hydravions et des montagnes',
        },
      },
      {
        subject: 'Bicycles outside a hotel entrance on a wet street',
        tone: 'granite',
        alt: {
          en: 'Bicycles parked outside a small hotel entrance on a wet city street',
          fr: 'Vélos garés devant l’entrée d’un petit hôtel, dans une rue mouillée',
        },
      },
    ],
  },
  {
    id: 'stay-churchill-tundra-lodge',
    slug: 'tundra-line-lodge',
    name: 'Tundra Line Lodge',
    regionId: 'churchill',
    provinceId: 'manitoba',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Fly-in tundra lodge, 10 rooms', fr: 'Lodge de toundra accessible en avion, 10 chambres' },
    summary: {
      en: 'A fenced lodge on the Hudson Bay coast, where the polar bears come to you. Arrival is by small plane.',
      fr: "Un lodge clôturé sur la côte de la baie d'Hudson, où ce sont les ours polaires qui viennent à vous. On y arrive en petit avion.",
    },
    body: {
      en: 'Ten rooms inside a secure compound on the coast, with bears regularly walking past the fence. Guided walks on the tundra are led by armed, highly trained guides, and taken very seriously. In summer, the same coast has belugas, wildflowers and bears resting on the rocks. Flights in and out depend on the weather, so the lodge always plans a day either side.',
      fr: "Dix chambres dans un enclos sécurisé sur la côte, avec des ours qui passent régulièrement le long de la clôture. Les marches sur la toundra sont menées par des guides armés et très bien formés, et prises très au sérieux. L'été, la même côte offre bélugas, fleurs sauvages et ours au repos sur les rochers. Les vols aller et retour dépendent de la météo : le lodge prévoit toujours une journée de marge de chaque côté.",
    },
    seasons: ['winter', 'summer'],
    images: [
      {
        subject: 'Lodge compound on flat snowy tundra, polar bear by the fence',
        tone: 'snow',
        alt: {
          en: 'A low lodge on flat snowy tundra with a polar bear walking near the fence',
          fr: 'Un lodge bas sur la toundra enneigée, un ours polaire marchant près de la clôture',
        },
      },
      {
        subject: 'Lounge window over Hudson Bay at dusk',
        tone: 'night',
        alt: {
          en: 'A warm lounge with a large window over the frozen edge of Hudson Bay at dusk',
          fr: 'Un salon chaleureux avec une grande fenêtre sur la bordure gelée de la baie d’Hudson, au crépuscule',
        },
      },
    ],
  },
  {
    id: 'stay-aurora-cabins',
    slug: 'kettle-lake-cabins',
    name: 'Kettle Lake Cabins',
    regionId: 'whitehorse',
    provinceId: 'yukon',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Wilderness cabins, 6 cabins', fr: 'Chalets en pleine nature, 6 chalets' },
    summary: {
      en: 'Six cabins on a quiet lake outside Whitehorse, chosen for dark skies and a short walk to the shore.',
      fr: "Six chalets au bord d'un lac tranquille près de Whitehorse, choisis pour leur ciel noir et la proximité du rivage.",
    },
    body: {
      en: 'Six wood-heated cabins, each with big north-facing windows, a proper bathroom and a very good duvet. The hosts watch the sky and knock on your door when the aurora comes out. In summer, the same lake is for canoeing under the midnight sun. Dinner is in the main lodge, and usually involves a story about a moose.',
      fr: "Six chalets chauffés au bois, chacun avec de grandes fenêtres orientées au nord, une vraie salle de bain et une excellente couette. Les hôtes surveillent le ciel et frappent à votre porte quand les aurores apparaissent. L'été, le même lac se parcourt en canot sous le soleil de minuit. Le dîner est servi dans le bâtiment principal, et comprend généralement une histoire d'orignal.",
    },
    seasons: ['winter', 'summer'],
    images: [
      {
        subject: 'Cabin under green aurora, frozen lake in front',
        tone: 'night',
        alt: {
          en: 'A small cabin under green northern lights with a frozen lake in front',
          fr: 'Un petit chalet sous des aurores boréales vertes, un lac gelé devant',
        },
      },
      {
        subject: 'Canoe at a cabin dock under late-evening summer light',
        tone: 'lake',
        alt: {
          en: 'A canoe at a wooden dock in soft late-evening light in summer',
          fr: 'Un canot à un quai en bois, dans la douce lumière d’un soir d’été',
        },
      },
    ],
  },
  {
    id: 'stay-yellowknife-lodge',
    slug: 'quartz-bay-lodge',
    name: 'Quartz Bay Lodge',
    regionId: 'yellowknife',
    provinceId: 'northwest-territories',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Lakeside lodge, 8 rooms', fr: 'Lodge au bord du lac, 8 chambres' },
    summary: {
      en: 'A small lodge on the granite shore of Great Slave Lake, reached by ski-plane in winter and floatplane in summer.',
      fr: "Un petit lodge sur la rive de granit du Grand lac des Esclaves, accessible en avion sur skis l'hiver et en hydravion l'été.",
    },
    body: {
      en: 'Eight rooms and a heated viewing deck, about 30 minutes by small plane from Yellowknife. The skies here are among the clearest in the country for the aurora. In winter, days are for snowshoeing and ice fishing; in summer, for paddling among islands and fishing for lake trout. Getting in and out depends on ice and weather, and twice a year, at freeze-up and break-up, nobody goes anywhere.',
      fr: "Huit chambres et une terrasse d'observation chauffée, à environ 30 minutes de petit avion de Yellowknife. Le ciel y est l'un des plus clairs du pays pour les aurores. L'hiver, les journées se passent en raquettes et à la pêche sur glace ; l'été, à pagayer entre les îles et à pêcher le touladi. L'accès dépend de la glace et de la météo, et deux fois par an, au gel et à la débâcle, personne ne va nulle part.",
    },
    seasons: ['winter', 'summer'],
    images: [
      {
        subject: 'Lodge on pink granite above a frozen bay, aurora',
        tone: 'night',
        alt: {
          en: 'A wooden lodge on pink granite above a frozen bay under the aurora',
          fr: 'Un lodge en bois sur du granit rose, au-dessus d’une baie gelée, sous les aurores',
        },
      },
      {
        subject: 'Ski-plane on lake ice beside the lodge',
        tone: 'snow',
        alt: {
          en: 'A small ski-plane parked on lake ice beside a lodge',
          fr: 'Un petit avion sur skis posé sur la glace du lac, près du lodge',
        },
      },
    ],
  },
  {
    id: 'stay-quebec-auberge',
    slug: 'auberge-de-la-cote-grise',
    name: 'Auberge de la Côte-Grise',
    regionId: 'quebec-city',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Inn in a stone house, 18 rooms', fr: 'Auberge dans une maison de pierre, 18 chambres' },
    summary: {
      en: 'A stone house inside the walls of Old Québec, with thick walls, low beams and a very good breakfast.',
      fr: "Une maison de pierre à l'intérieur des remparts du Vieux-Québec, avec des murs épais, des poutres basses et un excellent petit-déjeuner.",
    },
    body: {
      en: 'Eighteen rooms across two joined stone houses, some over two hundred years old. Mind your head on the beams. The location means you can walk everywhere in the old town, including uphill. In winter, there is a fire in the lounge and boots drying by the door.',
      fr: "Dix-huit chambres réparties dans deux maisons de pierre attenantes, dont certaines ont plus de deux cents ans. Attention à votre tête sous les poutres. L'emplacement permet de tout faire à pied dans la vieille ville, y compris les montées. L'hiver, un feu brûle dans le salon et les bottes sèchent près de la porte.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Stone inn facade with blue shutters on a narrow street',
        tone: 'birch',
        alt: {
          en: 'A grey stone inn with blue shutters on a narrow street in Old Québec',
          fr: 'Une auberge en pierre grise aux volets bleus dans une rue étroite du Vieux-Québec',
        },
      },
      {
        subject: 'Bedroom with exposed beams and stone wall, snow outside',
        tone: 'snow',
        alt: {
          en: 'A bedroom with exposed wooden beams and a stone wall, snow on the windowsill',
          fr: 'Une chambre aux poutres apparentes et au mur de pierre, de la neige sur le rebord de la fenêtre',
        },
      },
    ],
  },
  {
    id: 'stay-charlevoix-manor',
    slug: 'manoir-des-deux-battures',
    name: 'Manoir des Deux-Battures',
    regionId: 'charlevoix',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Country manor on the river, 22 rooms', fr: 'Manoir de campagne au bord du fleuve, 22 chambres' },
    summary: {
      en: 'An old manor high above the St. Lawrence in Charlevoix, with a long table and a longer view.',
      fr: "Un vieux manoir perché au-dessus du Saint-Laurent dans Charlevoix, avec une longue table et une vue plus longue encore.",
    },
    body: {
      en: 'Twenty-two rooms in a white manor house and two cottages in the garden. The kitchen cooks almost entirely from Charlevoix farms, so the menu changes with the week. In summer, there are walking trails down to the shore. In winter, the manor arranges cross-country skiing, snowshoes and dog-sledding, and the river below fills with ice.',
      fr: "Vingt-deux chambres dans un manoir blanc et deux maisonnettes dans le jardin. La cuisine travaille presque exclusivement avec les fermes de Charlevoix, si bien que le menu change chaque semaine. L'été, des sentiers descendent jusqu'au rivage. L'hiver, le manoir organise ski de fond, raquettes et traîneau à chiens, et le fleuve en contrebas se couvre de glace.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'White manor on a hill above the St. Lawrence, summer',
        tone: 'birch',
        alt: {
          en: 'A white manor house on a green hillside above the wide St. Lawrence',
          fr: 'Un manoir blanc sur une colline verte au-dessus du large Saint-Laurent',
        },
      },
      {
        subject: 'Ice floes on the river below snowy fields',
        tone: 'snow',
        alt: {
          en: 'Ice floes on the St. Lawrence below snow-covered fields in winter',
          fr: 'Glaces flottantes sur le Saint-Laurent, sous des champs enneigés, en hiver',
        },
      },
    ],
  },
  {
    id: 'stay-montreal-hotel',
    slug: 'hotel-des-pignons',
    name: 'Hôtel des Pignons',
    regionId: 'montreal',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Townhouse hotel, 30 rooms', fr: 'Hôtel dans des maisons de ville, 30 chambres' },
    summary: {
      en: 'A row of greystone townhouses turned into a small hotel, close to Old Montréal and the good bakeries.',
      fr: "Une rangée de maisons de ville en pierre grise transformée en petit hôtel, près du Vieux-Montréal et des bonnes boulangeries.",
    },
    body: {
      en: 'Thirty rooms behind three connected greystone fronts, with original staircases and modern bathrooms. The bar downstairs is quiet and serves Québec ciders. It is an easy walk to the old port and a short metro ride to the Plateau. The staff will argue with you about bagels if you let them.',
      fr: "Trente chambres derrière trois façades de pierre grise reliées entre elles, avec escaliers d'origine et salles de bain modernes. Le bar du rez-de-chaussée est calme et sert des cidres du Québec. Le Vieux-Port est à quelques minutes à pied et le Plateau à quelques stations de métro. Le personnel débattra de bagels avec vous si vous le laissez faire.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Greystone townhouse fronts with iron stairs, autumn',
        tone: 'autumn',
        alt: {
          en: 'Greystone townhouses with outdoor iron staircases and autumn trees',
          fr: 'Maisons de ville en pierre grise avec escaliers extérieurs en fer et arbres d’automne',
        },
      },
      {
        subject: 'Quiet hotel bar with cider bottles',
        tone: 'birch',
        alt: {
          en: 'A small, quiet hotel bar with bottles of cider on the shelves',
          fr: 'Un petit bar d’hôtel calme, des bouteilles de cidre sur les étagères',
        },
      },
    ],
  },
  {
    id: 'stay-newfoundland-inn',
    slug: 'tickle-head-inn',
    name: 'Tickle Head Inn',
    regionId: 'newfoundland',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Clifftop inn, 11 rooms', fr: 'Auberge en haut de falaise, 11 chambres' },
    summary: {
      en: 'A clapboard inn above a Newfoundland harbour. In June, you might see icebergs from bed.',
      fr: "Une auberge en bardeaux au-dessus d'un port de Terre-Neuve. En juin, vous verrez peut-être des icebergs depuis votre lit.",
    },
    body: {
      en: 'Eleven rooms in a restored merchant’s house painted a colour that would look odd anywhere else. The windows face the open Atlantic, where icebergs drift past in early summer and humpbacks follow in July. Dinner is cod, cooked several ways, all good. The owners know everyone, which is useful when the fog comes in and plans change.',
      fr: "Onze chambres dans une maison de marchand restaurée, peinte d'une couleur qui paraîtrait étrange n'importe où ailleurs. Les fenêtres donnent sur l'Atlantique, où les icebergs dérivent en début d'été et où les baleines à bosse leur succèdent en juillet. Le dîner, c'est de la morue, cuisinée de plusieurs façons, toutes bonnes. Les propriétaires connaissent tout le monde, ce qui est utile quand le brouillard arrive et que les plans changent.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Red clapboard inn on a cliff, iceberg in the bay',
        tone: 'lake',
        alt: {
          en: 'A red clapboard house on a cliff above a bay with an iceberg offshore',
          fr: 'Une maison rouge en bardeaux sur une falaise, un iceberg au large dans la baie',
        },
      },
      {
        subject: 'Fog rolling over a small harbour with fishing boats',
        tone: 'granite',
        alt: {
          en: 'Fog drifting over a small harbour with fishing boats and wooden stages',
          fr: 'Le brouillard sur un petit port, avec bateaux de pêche et quais en bois',
        },
      },
    ],
  },
  {
    id: 'stay-cabot-cottages',
    slug: 'northfield-bluff-cottages',
    name: 'Northfield Bluff Cottages',
    regionId: 'cabot-trail',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Seaside cottages, 8 cottages', fr: 'Cottages en bord de mer, 8 cottages' },
    summary: {
      en: 'Cottages on a bluff on the Cabot Trail, with the Gulf of St. Lawrence below and a fiddle somewhere nearby.',
      fr: "Des cottages sur un promontoire de la piste Cabot, avec le golfe du Saint-Laurent en contrebas et un violon jamais très loin.",
    },
    body: {
      en: 'Eight shingled cottages spread along a grassy bluff, each with a deck, a kitchen and a view down the coast. Pilot whales are often seen offshore in summer. The highlands trails start a short drive away. Bring a sweater even in August: the wind off the Gulf does not care what month it is.',
      fr: "Huit cottages en bardeaux répartis le long d'un promontoire herbeux, chacun avec une terrasse, une cuisine et une vue sur la côte. On aperçoit souvent des globicéphales au large l'été. Les sentiers des Hautes-Terres sont à quelques minutes en voiture. Prenez un pull même en août : le vent du golfe se moque bien du mois.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Shingled cottages on a green bluff above the sea',
        tone: 'forest',
        alt: {
          en: 'Small shingled cottages on a green bluff above a rocky coastline',
          fr: 'Petits cottages en bardeaux sur un promontoire vert au-dessus d’une côte rocheuse',
        },
      },
      {
        subject: 'Highland road in October colours',
        tone: 'autumn',
        alt: {
          en: 'A coastal highland road winding through red and orange autumn hills',
          fr: 'Une route côtière serpentant entre des collines rouges et orange en automne',
        },
      },
    ],
  },
  {
    id: 'stay-pei-farmhouse',
    slug: 'red-lane-farmhouse',
    name: 'Red Lane Farmhouse',
    regionId: 'prince-edward-island',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Restored farmhouse, 6 rooms', fr: 'Ferme restaurée, 6 chambres' },
    summary: {
      en: 'A restored farmhouse at the end of a red dirt lane, a short cycle from the beach.',
      fr: "Une ferme restaurée au bout d'un chemin de terre rouge, à quelques coups de pédale de la plage.",
    },
    body: {
      en: 'Six bright rooms in an old farmhouse surrounded by potato fields and a vegetable garden that supplies breakfast. Bicycles are in the barn, and the old rail trail runs past the end of the lane. The hosts can tell you where to find the best oysters that day. It is calm, green and the slowest place on this trip, on purpose.',
      fr: "Six chambres lumineuses dans une ancienne ferme entourée de champs de pommes de terre et d'un potager qui fournit le petit-déjeuner. Les vélos sont dans la grange, et l'ancienne voie ferrée passe au bout du chemin. Les hôtes vous diront où trouver les meilleures huîtres du jour. C'est calme, vert, et l'étape la plus lente du voyage, volontairement.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'White farmhouse at the end of a red dirt road, fields',
        tone: 'birch',
        alt: {
          en: 'A white farmhouse at the end of a red dirt road between green fields',
          fr: 'Une ferme blanche au bout d’un chemin de terre rouge, entre des champs verts',
        },
      },
      {
        subject: 'Bicycles leaning on a barn door',
        tone: 'autumn',
        alt: {
          en: 'Two bicycles leaning against a weathered red barn door',
          fr: 'Deux vélos appuyés contre la porte rouge et patinée d’une grange',
        },
      },
    ],
  },
  {
    id: 'stay-muskoka-lodge',
    slug: 'granite-narrows-lodge',
    name: 'Granite Narrows Lodge',
    regionId: 'muskoka',
    provinceId: 'ontario',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Lakeside lodge, 24 rooms', fr: 'Lodge au bord du lac, 24 chambres' },
    summary: {
      en: 'A lakeside lodge on the granite and pine of Muskoka, about two and a half hours north of Toronto.',
      fr: "Un lodge au bord d'un lac, entre le granit et les pins de Muskoka, à environ deux heures et demie au nord de Toronto.",
    },
    body: {
      en: 'Twenty-four rooms in a main lodge and cabins along the shore, with canoes and a wooden boat for evening cruises. Loons call across the water at night, whether you asked them to or not. In autumn, the maples turn and the lake goes still. In winter, there is skating on the bay, snowshoeing and a sauna by the ice.',
      fr: "Vingt-quatre chambres réparties entre le bâtiment principal et des chalets au bord de l'eau, avec des canots et un bateau en bois pour les sorties du soir. La nuit, les huards s'appellent sur le lac, que vous l'ayez demandé ou non. À l'automne, les érables changent de couleur et le lac s'immobilise. L'hiver, on patine dans la baie, on fait de la raquette et on profite d'un sauna au bord de la glace.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Wooden boathouse on granite shore, maples turning',
        tone: 'autumn',
        alt: {
          en: 'A wooden boathouse on a granite shore with maple trees turning red',
          fr: 'Un hangar à bateaux en bois sur une rive de granit, les érables virant au rouge',
        },
      },
      {
        subject: 'Skaters on a frozen bay in front of the lodge',
        tone: 'snow',
        alt: {
          en: 'People skating on a frozen bay in front of a lakeside lodge',
          fr: 'Des patineurs sur une baie gelée devant un lodge au bord du lac',
        },
      },
    ],
  },
  {
    id: 'stay-okanagan-winery',
    slug: 'benchland-vineyard-suites',
    name: 'Benchland Vineyard Suites',
    regionId: 'okanagan',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Suites on a working vineyard, 10 suites', fr: 'Suites dans un vignoble en activité, 10 suites' },
    summary: {
      en: 'Ten suites among the vines above Okanagan Lake, with a pool for the children and a tasting room for everyone else.',
      fr: "Dix suites au milieu des vignes au-dessus du lac Okanagan, avec une piscine pour les enfants et une salle de dégustation pour les autres.",
    },
    body: {
      en: 'The Okanagan is Canada’s warm, dry corner, with summer days often above 30 °C. These suites sit on a working vineyard on the benchland above the lake, with family suites and a shaded pool. The beach is a ten-minute drive, and fruit stands line the road in July and August. The wine is good, and the staff are honest about which ones.',
      fr: "L'Okanagan est le coin chaud et sec du Canada, avec des journées d'été qui dépassent souvent 30 °C. Ces suites se trouvent dans un vignoble en activité, sur les terrasses au-dessus du lac, avec des suites familiales et une piscine ombragée. La plage est à dix minutes en voiture, et les étals de fruits bordent la route en juillet et en août. Le vin est bon, et le personnel vous dira honnêtement lesquels.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Vineyard rows above a long blue lake, summer',
        tone: 'lake',
        alt: {
          en: 'Rows of vines on a slope above a long blue lake in summer',
          fr: 'Rangs de vignes sur une pente au-dessus d’un long lac bleu, en été',
        },
      },
      {
        subject: 'Shaded pool with children and dry hills behind',
        tone: 'birch',
        alt: {
          en: 'A shaded swimming pool with dry golden hills behind',
          fr: 'Une piscine ombragée, des collines sèches et dorées en arrière-plan',
        },
      },
    ],
  },
  {
    id: 'stay-whistler-chalet',
    slug: 'alder-ridge-chalet',
    name: 'Alder Ridge Chalet',
    regionId: 'whistler',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Private chalet, 5 bedrooms', fr: 'Chalet privé, 5 chambres' },
    summary: {
      en: 'A five-bedroom chalet a short walk from the Whistler lifts, with a hot tub and room for a family.',
      fr: "Un chalet de cinq chambres à quelques pas des remontées de Whistler, avec un bain nordique et de la place pour une famille.",
    },
    body: {
      en: 'A private chalet with five bedrooms, a big kitchen and a hot tub on the deck. In winter, you can ski back to within a few metres of the door. In summer, the gondolas, lakes and bike trails are all close, and the chalet comes with a stack of board games for the evenings. A cook can be arranged for some nights, so nobody has to do the washing up.',
      fr: "Un chalet privé de cinq chambres, avec une grande cuisine et un bain nordique sur la terrasse. L'hiver, on revient à skis à quelques mètres de la porte. L'été, les télécabines, les lacs et les pistes de vélo sont tout proches, et le chalet dispose d'une pile de jeux de société pour les soirées. Un cuisinier peut venir certains soirs, pour que personne n'ait à faire la vaisselle.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Timber chalet in deep snow with hot tub steaming',
        tone: 'snow',
        alt: {
          en: 'A timber chalet in deep snow with steam rising from a hot tub on the deck',
          fr: 'Un chalet en bois dans la neige profonde, de la vapeur s’élevant du bain nordique sur la terrasse',
        },
      },
      {
        subject: 'Chalet deck in summer with mountain view',
        tone: 'forest',
        alt: {
          en: 'A chalet deck with chairs looking out over green forested mountains in summer',
          fr: 'La terrasse d’un chalet avec des chaises face aux montagnes boisées, en été',
        },
      },
    ],
  },
  {
    id: 'stay-haida-gwaii-lodge',
    slug: 'spruce-shore-lodge',
    name: 'Spruce Shore Lodge',
    regionId: 'haida-gwaii',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Coastal guest lodge, 7 rooms', fr: 'Lodge côtier, 7 chambres' },
    summary: {
      en: 'A small lodge on the edge of the forest on Haida Gwaii, a long way out in the Pacific and worth every kilometre.',
      fr: "Un petit lodge en lisière de forêt à Haida Gwaii, loin dans le Pacifique, et qui vaut chaque kilomètre.",
    },
    body: {
      en: 'Seven rooms looking over a long beach, backed by moss-covered spruce. Haida Gwaii is the home of the Haida Nation, and the lodge arranges visits to cultural sites through local partners, on their terms. Days are for beach walks, fishing, or a boat trip south when the weather allows. Getting here takes a flight or a long ferry, and the weather sets the schedule.',
      fr: "Sept chambres face à une longue plage, adossées à des épinettes couvertes de mousse. Haida Gwaii est le territoire de la Nation haïda, et le lodge organise des visites de sites culturels avec des partenaires locaux, selon leurs conditions. Les journées se passent en balades sur la plage, à la pêche, ou en sortie en bateau vers le sud quand la météo le permet. On arrive ici en avion ou par un long trajet en traversier, et c'est la météo qui fixe le programme.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Mossy spruce forest opening onto a grey beach',
        tone: 'forest',
        alt: {
          en: 'A moss-covered spruce forest opening onto a long grey beach',
          fr: 'Une forêt d’épinettes moussues s’ouvrant sur une longue plage grise',
        },
      },
      {
        subject: 'Lodge windows at dusk with rain on the glass',
        tone: 'granite',
        alt: {
          en: 'Warm light in the windows of a small wooden lodge on a rainy evening',
          fr: 'Lumière chaude aux fenêtres d’un petit lodge en bois, un soir de pluie',
        },
      },
    ],
  },
];
