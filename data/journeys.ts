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
    title: { en: 'Rockies to the *Pacific*', fr: 'Des Rocheuses au *Pacifique*', de: "Von den Rockies an den *Pazifik*", es: "De las Rocosas al *Pacífico*" },
    days: 15,
    seasons: ['summer'],
    fromPerPersonCAD: 21000,
    summary: {
      en: 'Glacier lakes, the Icefields Parkway, two days of mountains by train, then the open Pacific at Tofino. The west, in the order it was built.',
      fr: "Lacs glaciaires, la promenade des Glaciers, deux jours de montagnes en train, puis le Pacifique à Tofino. L'Ouest, dans l'ordre où il s'est construit.", de: "Gletscherseen, der Icefields Parkway, zwei Tage Berge im Zug, dann der offene Pazifik bei Tofino. Der Westen, in der Reihenfolge, in der er erschlossen wurde.", es: "Lagos glaciares, la Icefields Parkway, dos días de montañas en tren y después el Pacífico abierto en Tofino. El oeste, en el orden en que se construyó.",
    },
    intro: {
      en: 'This is the one most people picture when they picture Canada, and it holds up. You start in the Rockies, drive the Icefields Parkway slowly, and let the train carry you down to the coast. The last few days are on the west coast of Vancouver Island, where the road simply stops at the ocean. It runs from June to late September; the train it relies on does not run in winter.',
      fr: "C'est le voyage que la plupart des gens imaginent quand ils pensent au Canada, et il tient ses promesses. Vous commencez dans les Rocheuses, vous prenez votre temps sur la promenade des Glaciers, puis le train vous descend jusqu'à la côte. Les derniers jours se passent sur la côte ouest de l'île de Vancouver, là où la route s'arrête tout simplement face à l'océan. Il se fait de juin à fin septembre ; le train sur lequel il repose ne circule pas l'hiver.", de: "Das ist die Reise, an die die meisten denken, wenn sie an Kanada denken, und sie hält, was sie verspricht. Sie beginnen in den Rockies, fahren gemächlich den Icefields Parkway und lassen sich vom Zug an die Küste bringen. Die letzten Tage verbringen Sie an der Westküste von Vancouver Island, wo die Straße einfach am Meer endet. Die Reise ist von Juni bis Ende September möglich; der Zug, auf dem sie aufbaut, fährt im Winter nicht.", es: "Es el viaje que casi todo el mundo imagina cuando piensa en Canadá, y está a la altura. Empieza en las Rocosas, recorre sin prisa la Icefields Parkway y deja que el tren le lleve hasta la costa. Los últimos días son en la costa oeste de la isla de Vancouver, donde la carretera simplemente termina en el océano. Se hace de junio a finales de septiembre; el tren en el que se apoya no circula en invierno.",
    },
    honestNote: {
      en: 'Banff and Lake Louise are busy in July and August, and parking at the famous lakes is now limited or shuttle-only. We book the shuttles and plan early starts. If you want the same mountains in winter, we can build a different trip around skiing and frozen lakes, but it will not include the train.',
      fr: "Banff et Lake Louise sont très fréquentés en juillet et en août, et le stationnement aux lacs les plus connus est désormais limité ou réservé aux navettes. Nous réservons les navettes et prévoyons des départs matinaux. Si vous voulez ces mêmes montagnes en hiver, nous pouvons construire un autre voyage autour du ski et des lacs gelés, mais sans le train.", de: "Banff und Lake Louise sind im Juli und August voll, und an den berühmten Seen ist das Parken inzwischen begrenzt oder nur per Shuttle möglich. Wir buchen die Shuttles und planen frühe Starts. Wenn Sie dieselben Berge im Winter erleben möchten, bauen wir eine andere Reise rund um Skifahren und gefrorene Seen, dann allerdings ohne Zug.", es: "Banff y Lake Louise están llenos en julio y agosto, y aparcar en los lagos famosos ya es limitado o solo posible en lanzadera. Reservamos las lanzaderas y planificamos salidas temprano. Si quiere las mismas montañas en invierno, podemos montar otro viaje en torno al esquí y los lagos helados, pero sin el tren.",
    },
    route: ['calgary', 'banff', 'lake-louise', 'jasper', 'vancouver', 'tofino'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'banff',
        title: { en: 'Calgary to Banff', fr: 'De Calgary à Banff', de: "Von Calgary nach Banff", es: "De Calgary a Banff" },
        body: {
          en: 'Land in Calgary and drive 90 minutes west until the prairie runs into a wall of rock. Settle into Banff with nothing planned for the first evening. A short walk up Tunnel Mountain is the right amount of effort for jet lag.',
          fr: "Atterrissage à Calgary, puis 90 minutes de route vers l'ouest, jusqu'à ce que la prairie bute contre un mur de roche. Installation à Banff, sans rien de prévu le premier soir. Une courte marche sur le mont Tunnel, c'est l'effort qui convient au décalage horaire.", de: "Landung in Calgary, dann 90 Minuten nach Westen, bis die Prärie an eine Felswand stößt. In Banff kommen Sie an, ohne für den ersten Abend etwas geplant zu haben. Ein kurzer Spaziergang auf den Tunnel Mountain ist genau die richtige Anstrengung gegen den Jetlag.", es: "Aterrice en Calgary y conduzca 90 minutos hacia el oeste hasta que la pradera choca con un muro de roca. Instálese en Banff sin nada previsto para la primera tarde. Un paseo corto por Tunnel Mountain es el esfuerzo justo para el jet lag.",
        },
      },
      {
        days: 'Days 3–5',
        placeId: 'lake-louise',
        title: { en: 'Lake Louise and the high trails', fr: 'Lake Louise et les sentiers d’altitude', de: "Lake Louise und die hohen Wege", es: "Lake Louise y los senderos de altura" },
        body: {
          en: 'A private guide takes you up to the teahouse trails above Lake Louise before the tour buses wake up. One day is for Moraine Lake by shuttle at dawn, another for a quieter valley your guide picks on the morning. Evenings are yours, and they are long: in July it is light until nearly 10 pm.',
          fr: "Un guide privé vous emmène sur les sentiers des maisons de thé au-dessus de Lake Louise avant le réveil des autocars. Une journée est réservée au lac Moraine en navette à l'aube, une autre à une vallée plus calme que votre guide choisit le matin même. Les soirées sont à vous, et elles sont longues : en juillet, il fait jour jusqu'à près de 22 h.", de: "Ein privater Guide führt Sie zu den Teehaus-Wegen über Lake Louise, bevor die Reisebusse erwachen. Ein Tag gehört dem Moraine Lake, per Shuttle im Morgengrauen, ein anderer einem ruhigeren Tal, das Ihr Guide am Morgen auswählt. Die Abende gehören Ihnen, und sie sind lang: Im Juli ist es fast bis 22 Uhr hell.", es: "Un guía privado le sube a los senderos de las casas de té sobre Lake Louise antes de que despierten los autobuses turísticos. Un día es para el lago Moraine, en lanzadera al amanecer; otro, para un valle más tranquilo que su guía elige esa misma mañana. Las tardes son suyas, y son largas: en julio hay luz hasta casi las diez de la noche.",
        },
      },
      {
        days: 'Day 6',
        title: { en: 'The Icefields Parkway', fr: 'La promenade des Glaciers', de: "Der Icefields Parkway", es: "La Icefields Parkway" },
        body: {
          en: 'Two hundred and thirty kilometres of road between Lake Louise and Jasper, and almost nothing on it but glaciers, lakes and the occasional bighorn sheep. It takes four hours without stopping; we suggest eight. There is no phone signal for most of it, which is part of the point.',
          fr: "Deux cent trente kilomètres de route entre Lake Louise et Jasper, avec presque rien d'autre que des glaciers, des lacs et, parfois, un mouflon. Comptez quatre heures sans arrêt ; nous en conseillons huit. Il n'y a pas de réseau sur la plus grande partie du trajet, et c'est un peu l'idée.", de: "Zweihundertdreißig Kilometer Straße zwischen Lake Louise und Jasper, und darauf fast nichts außer Gletschern, Seen und gelegentlich einem Dickhornschaf. Ohne Halt dauert es vier Stunden; wir empfehlen acht. Auf dem größten Teil gibt es keinen Handyempfang, und genau darum geht es auch.", es: "Doscientos treinta kilómetros de carretera entre Lake Louise y Jasper, sin casi nada más que glaciares, lagos y algún que otro carnero de las Rocosas. Sin paradas son cuatro horas; nosotros proponemos ocho. En la mayor parte no hay cobertura, y en parte de eso se trata.",
        },
      },
      {
        days: 'Days 7–8',
        placeId: 'jasper',
        title: { en: 'Jasper', fr: 'Jasper', de: "Jasper", es: "Jasper" },
        body: {
          en: 'Jasper is quieter and wilder than Banff, with more elk in the streets than you would expect. Paddle Maligne Lake early, or walk the canyon. At night it is a dark-sky preserve, so look up.',
          fr: "Jasper est plus calme et plus sauvage que Banff, avec plus de wapitis dans les rues qu'on ne l'imagine. Pagayez tôt sur le lac Maligne, ou marchez le long du canyon. La nuit, c'est une réserve de ciel étoilé : levez les yeux.", de: "Jasper ist ruhiger und wilder als Banff, mit mehr Wapitis in den Straßen, als man erwarten würde. Paddeln Sie früh auf dem Maligne Lake oder wandern Sie durch den Canyon. Nachts ist es ein Dark-Sky-Schutzgebiet, also schauen Sie nach oben.", es: "Jasper es más tranquilo y salvaje que Banff, con más uapitíes por las calles de lo que cabría esperar. Reme temprano en el lago Maligne o recorra el cañón a pie. De noche es una reserva de cielo oscuro, así que mire hacia arriba.",
        },
      },
      {
        days: 'Days 9–10',
        title: { en: 'By train to the coast', fr: 'En train jusqu’à la côte', de: "Mit dem Zug an die Küste", es: "En tren hasta la costa" },
        body: {
          en: 'Two daylight days on the rails from Jasper to Vancouver, with a night in a hotel halfway so you miss none of the scenery. The mountains give way to canyons, then to the Fraser Valley. You will read less than you planned.',
          fr: "Deux journées de train, de Jasper à Vancouver, avec une nuit à l'hôtel à mi-chemin pour ne rien manquer du paysage. Les montagnes laissent place aux canyons, puis à la vallée du Fraser. Vous lirez moins que prévu.", de: "Zwei Tage bei Tageslicht auf der Schiene von Jasper nach Vancouver, mit einer Hotelnacht auf halber Strecke, damit Sie nichts von der Landschaft verpassen. Die Berge weichen Canyons, dann dem Fraser Valley. Sie werden weniger lesen als geplant.", es: "Dos días de luz sobre raíles de Jasper a Vancouver, con una noche de hotel a mitad de camino para no perderse nada del paisaje. Las montañas dan paso a cañones y después al valle del Fraser. Leerá menos de lo que tenía pensado.",
        },
      },
      {
        days: 'Days 11–12',
        placeId: 'vancouver',
        title: { en: 'Vancouver', fr: 'Vancouver', de: "Vancouver", es: "Vancouver" },
        body: {
          en: 'Cycle the seawall around Stanley Park, eat your way through the markets, and take a seaplane or helicopter up the coast if the weather is clear. Vancouver does city and wilderness within 20 minutes of each other.',
          fr: "Faites le tour du parc Stanley à vélo le long de la digue, goûtez à tout dans les marchés, et prenez un hydravion ou un hélicoptère le long de la côte si le temps est dégagé. À Vancouver, la ville et la nature sauvage sont à vingt minutes l'une de l'autre.", de: "Radeln Sie auf der Uferpromenade rund um den Stanley Park, essen Sie sich durch die Märkte und fliegen Sie bei klarem Wetter mit Wasserflugzeug oder Hubschrauber die Küste hinauf. In Vancouver liegen Stadt und Wildnis 20 Minuten auseinander.", es: "Recorra en bici el malecón alrededor de Stanley Park, pruebe de todo en los mercados y suba por la costa en hidroavión o helicóptero si el día está despejado. En Vancouver, ciudad y naturaleza salvaje están a 20 minutos una de otra.",
        },
      },
      {
        days: 'Days 13–15',
        placeId: 'tofino',
        title: { en: 'Tofino and the open Pacific', fr: 'Tofino et le Pacifique', de: "Tofino und der offene Pazifik", es: "Tofino y el Pacífico abierto" },
        body: {
          en: 'A short flight takes you to the end of the road on Vancouver Island. Go out by boat for grey and humpback whales, walk the long beaches, and let the fog do what it likes. You fly home via Vancouver on the last day.',
          fr: "Un vol court vous dépose au bout de la route, sur l'île de Vancouver. Sortez en bateau voir les baleines grises et les baleines à bosse, marchez sur les longues plages, et laissez le brouillard faire ce qu'il veut. Retour via Vancouver le dernier jour.", de: "Ein kurzer Flug bringt Sie ans Ende der Straße auf Vancouver Island. Fahren Sie mit dem Boot zu Grau- und Buckelwalen, laufen Sie die langen Strände entlang und lassen Sie den Nebel machen, was er will. Am letzten Tag fliegen Sie über Vancouver nach Hause.", es: "Un vuelo corto le lleva al final de la carretera en la isla de Vancouver. Salga en barco a ver ballenas grises y jorobadas, recorra las largas playas y deje que la niebla haga lo que quiera. El último día vuela de vuelta a casa vía Vancouver.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'Two days by train from Jasper to Vancouver, with a hotel night halfway', fr: 'Deux jours de train de Jasper à Vancouver, avec une nuit d’hôtel à mi-parcours', de: "Zwei Tage mit dem Zug von Jasper nach Vancouver, mit Hotelnacht auf halber Strecke", es: "Dos días en tren de Jasper a Vancouver, con una noche de hotel a mitad de camino" },
      { en: 'Private guided days in Lake Louise and Jasper', fr: 'Journées avec guide privé à Lake Louise et à Jasper', de: "Private geführte Tage in Lake Louise und Jasper", es: "Jornadas privadas con guía en Lake Louise y Jasper" },
      { en: 'Park passes and lake shuttle bookings', fr: 'Laissez-passer des parcs et réservations des navettes vers les lacs', de: "Parkpässe und Shuttle-Buchungen zu den Seen", es: "Pases de los parques y reservas de lanzaderas a los lagos" },
      { en: 'Whale-watching by small boat from Tofino', fr: 'Observation des baleines en petit bateau depuis Tofino', de: "Walbeobachtung im kleinen Boot ab Tofino", es: "Avistamiento de ballenas en barco pequeño desde Tofino" },
      { en: 'Flight from Vancouver to Tofino', fr: 'Vol de Vancouver à Tofino', de: "Flug von Vancouver nach Tofino", es: "Vuelo de Vancouver a Tofino" },
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
    images: {
      summer: {
        subject: 'Turquoise glacier lake below a ring of peaks, July morning',
        tone: 'lake',
        alt: {
          en: 'A turquoise glacier lake below steep mountains on a clear summer morning',
          fr: 'Un lac glaciaire turquoise au pied de montagnes escarpées, par un matin d’été clair', de: "Ein türkisfarbener Gletschersee unter steilen Bergen an einem klaren Sommermorgen", es: "Un lago glaciar turquesa bajo montañas escarpadas en una mañana despejada de verano",
        },
      },
      winter: {
        subject: 'Frozen lake and snow-loaded spruce below the same peaks',
        tone: 'snow',
        alt: {
          en: 'The same mountain lake frozen and covered in snow, with spruce trees heavy with snow',
          fr: 'Le même lac de montagne gelé et enneigé, bordé d’épinettes chargées de neige', de: "Derselbe Bergsee, gefroren und verschneit, mit schneebeladenen Fichten", es: "El mismo lago de montaña helado y cubierto de nieve, con abetos cargados de nieve",
        },
      },
    },
  },

  // ── 2 ─────────────────────────────────────────────────────────────────────
  {
    id: 'bears-whales-rainforest',
    slug: 'bears-whales-rainforest',
    frReview: 'needs-human-review',
    title: { en: 'Bears, Whales & *Rainforest*', fr: 'Ours, baleines et *forêt pluviale*', de: "Bären, Wale und *Regenwald*", es: "Osos, ballenas y *selva templada*" },
    days: 12,
    seasons: ['summer'],
    fromPerPersonCAD: 24000,
    summary: {
      en: 'Whales off Tofino, grizzlies on the rivers of the central coast, and a few nights in a floating lodge you can only reach by floatplane.',
      fr: "Les baleines au large de Tofino, les grizzlis sur les rivières de la côte centrale, et quelques nuits dans un lodge flottant accessible uniquement en hydravion.", de: "Wale vor Tofino, Grizzlys an den Flüssen der mittleren Küste und einige Nächte in einer schwimmenden Lodge, die nur per Wasserflugzeug erreichbar ist.", es: "Ballenas frente a Tofino, grizzlis en los ríos de la costa central y unas noches en un lodge flotante al que solo se llega en hidroavión.",
    },
    intro: {
      en: "British Columbia's coast is temperate rainforest: cedar and spruce down to the waterline, rivers full of salmon, and the animals that follow them. This trip starts with whales off Vancouver Island, then heads north to the Bella Coola valley and the Great Bear Rainforest for bears. It is built around late August to early October, when the salmon run and the bears come down to meet them. Pack a proper rain jacket. It is called a rainforest for a reason.",
      fr: "La côte de la Colombie-Britannique est une forêt pluviale tempérée : cèdres et épinettes jusqu'au bord de l'eau, rivières pleines de saumons, et les animaux qui les suivent. Le voyage commence par les baleines au large de l'île de Vancouver, puis remonte vers la vallée de Bella Coola et la forêt du Grand Ours pour les ours. Il est pensé pour la période de fin août à début octobre, quand les saumons remontent et que les ours descendent à leur rencontre. Prenez une vraie veste de pluie. Ce n'est pas pour rien qu'on parle de forêt pluviale.", de: "Die Küste von British Columbia ist gemäßigter Regenwald: Zedern und Fichten bis an die Wasserlinie, Flüsse voller Lachse und die Tiere, die ihnen folgen. Diese Reise beginnt mit Walen vor Vancouver Island und führt dann nach Norden ins Bella Coola Valley und in den Great Bear Rainforest zu den Bären. Sie ist auf Ende August bis Anfang Oktober ausgelegt, wenn die Lachse ziehen und die Bären ihnen entgegenkommen. Packen Sie eine richtige Regenjacke ein. Es heißt nicht ohne Grund Regenwald.", es: "La costa de Columbia Británica es selva templada lluviosa: cedros y abetos hasta la orilla, ríos llenos de salmones y los animales que los siguen. Este viaje empieza con ballenas frente a la isla de Vancouver y sube después hacia el norte, al valle de Bella Coola y al Great Bear Rainforest, en busca de osos. Está pensado para finales de agosto a principios de octubre, cuando remontan los salmones y los osos bajan a su encuentro. Lleve un buen chubasquero. Por algo la llaman selva lluviosa.",
    },
    honestNote: {
      en: 'Bears follow the salmon, not our itinerary. Late August to early October is the best bet, but a river can be quiet for a day. Floatplanes do not fly in fog, so we leave slack before your flight home. The lodges have very few rooms and book up a year or more ahead.',
      fr: "Les ours suivent les saumons, pas notre itinéraire. La période de fin août à début octobre est la plus sûre, mais une rivière peut rester calme une journée. Les hydravions ne volent pas dans le brouillard : nous gardons donc de la marge avant votre vol retour. Les lodges ont très peu de chambres et se remplissent un an ou plus à l'avance.", de: "Bären folgen den Lachsen, nicht unserem Reiseplan. Ende August bis Anfang Oktober ist die beste Wahl, doch ein Fluss kann auch mal einen Tag lang ruhig sein. Wasserflugzeuge fliegen nicht bei Nebel, deshalb lassen wir vor Ihrem Heimflug Spielraum. Die Lodges haben sehr wenige Zimmer und sind ein Jahr oder länger im Voraus ausgebucht.", es: "Los osos siguen al salmón, no a nuestro itinerario. De finales de agosto a principios de octubre es la mejor apuesta, pero un río puede estar tranquilo un día entero. Los hidroaviones no vuelan con niebla, así que dejamos margen antes de su vuelo de regreso. Los lodges tienen muy pocas habitaciones y se reservan con un año o más de antelación.",
    },
    route: ['vancouver', 'tofino', 'bella-coola'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'vancouver',
        title: { en: 'Vancouver', fr: 'Vancouver', de: "Vancouver", es: "Vancouver" },
        body: {
          en: 'Arrive and recover by the water. A walk in Stanley Park gives you a first look at big cedars without leaving the city. Dinner is seafood, because it would be strange not to.',
          fr: "Arrivée et récupération au bord de l'eau. Une promenade dans le parc Stanley offre un premier aperçu des grands cèdres sans quitter la ville. Le dîner est aux fruits de mer, car il serait étrange de faire autrement.", de: "Ankommen und am Wasser erholen. Ein Spaziergang im Stanley Park zeigt Ihnen die ersten großen Zedern, ohne die Stadt zu verlassen. Zum Abendessen gibt es Meeresfrüchte, alles andere wäre seltsam.", es: "Llegue y recupérese junto al agua. Un paseo por Stanley Park le da una primera visión de los grandes cedros sin salir de la ciudad. La cena es marisco y pescado, porque lo raro sería otra cosa.",
        },
      },
      {
        days: 'Days 3–5',
        placeId: 'tofino',
        title: { en: 'Tofino: whales and beaches', fr: 'Tofino : baleines et plages', de: "Tofino: Wale und Strände", es: "Tofino: ballenas y playas" },
        body: {
          en: 'Fly to Tofino and spend three days on the open coast. Small boats go out for humpback and grey whales, and at low tide black bears turn over rocks on the shoreline looking for crabs. A boat trip to a natural hot spring is a fair way to spend a wet afternoon.',
          fr: "Vol vers Tofino et trois jours sur la côte du large. De petits bateaux partent à la rencontre des baleines à bosse et des baleines grises, et à marée basse, les ours noirs retournent les pierres du rivage à la recherche de crabes. Une sortie en bateau jusqu'à une source chaude naturelle est une bonne façon d'occuper un après-midi pluvieux.", de: "Flug nach Tofino und drei Tage an der offenen Küste. Kleine Boote fahren hinaus zu Buckel- und Grauwalen, und bei Ebbe drehen Schwarzbären am Ufer Steine um, auf der Suche nach Krebsen. Eine Bootsfahrt zu einer natürlichen heißen Quelle ist eine gute Art, einen nassen Nachmittag zu verbringen.", es: "Vuelo a Tofino y tres días en la costa abierta. Pequeñas embarcaciones salen a ver ballenas jorobadas y grises, y con la marea baja los osos negros levantan piedras en la orilla buscando cangrejos. Una excursión en barco a una fuente termal natural es una buena forma de pasar una tarde de lluvia.",
        },
      },
      {
        days: 'Days 6–8',
        placeId: 'bella-coola',
        title: { en: 'The Bella Coola valley', fr: 'La vallée de Bella Coola', de: "Das Bella Coola Valley", es: "El valle de Bella Coola" },
        body: {
          en: 'A short flight north takes you to a valley that feels a long way from anywhere, because it is. Local guides take you out on the rivers by drift boat to watch grizzlies fishing for salmon. You stay quiet, keep your distance, and let them get on with it.',
          fr: "Un vol court vers le nord vous mène dans une vallée qui semble très loin de tout, parce qu'elle l'est. Des guides locaux vous emmènent sur les rivières en barque pour observer les grizzlis qui pêchent le saumon. On reste silencieux, on garde ses distances et on les laisse faire.", de: "Ein kurzer Flug nach Norden bringt Sie in ein Tal, das sich weit weg von allem anfühlt, weil es das ist. Einheimische Guides fahren mit Ihnen im Driftboot auf die Flüsse, um Grizzlys beim Lachsfang zu beobachten. Sie bleiben still, halten Abstand und lassen sie machen.", es: "Un vuelo corto hacia el norte le lleva a un valle que parece estar lejos de todo, porque lo está. Guías locales le llevan por los ríos en barca de deriva para ver a los grizzlis pescando salmón. Usted guarda silencio, mantiene la distancia y les deja a lo suyo.",
        },
      },
      {
        days: 'Days 9–11',
        title: { en: 'A floating lodge in the Great Bear Rainforest', fr: 'Un lodge flottant dans la forêt du Grand Ours', de: "Eine schwimmende Lodge im Great Bear Rainforest", es: "Un lodge flotante en el Great Bear Rainforest" },
        body: {
          en: 'A floatplane drops you at a lodge moored in a quiet inlet. Days are spent by boat and on foot with guides who know these estuaries well: bears on the sedge flats, eagles, sea lions, perhaps humpbacks bubble-feeding in the channel. There is a small chance of a white-coated spirit bear, which we will not promise you.',
          fr: "Un hydravion vous dépose dans un lodge amarré au fond d'une anse tranquille. Les journées se passent en bateau et à pied avec des guides qui connaissent bien ces estuaires : ours dans les prairies de carex, pygargues, otaries, peut-être des baleines à bosse en chasse au filet de bulles dans le chenal. Il y a une petite chance de voir un ours esprit au pelage blanc, mais nous ne vous la promettrons pas.", de: "Ein Wasserflugzeug setzt Sie an einer Lodge ab, die in einem stillen Meeresarm vertäut ist. Die Tage verbringen Sie im Boot und zu Fuß mit Guides, die diese Mündungsgebiete gut kennen: Bären auf den Seggenwiesen, Adler, Seelöwen, vielleicht Buckelwale bei der Blasennetzjagd im Kanal. Es gibt eine kleine Chance auf einen weißen Geisterbären, die wir Ihnen nicht versprechen.", es: "Un hidroavión le deja en un lodge amarrado en una ensenada tranquila. Los días transcurren en barco y a pie con guías que conocen bien estos estuarios: osos en las praderas de juncias, águilas, leones marinos y quizá ballenas jorobadas pescando con redes de burbujas en el canal. Hay una pequeña posibilidad de ver un oso espíritu de pelaje blanco, que no le vamos a prometer.",
        },
      },
      {
        days: 'Day 12',
        title: { en: 'Out by floatplane', fr: 'Retour en hydravion', de: "Zurück per Wasserflugzeug", es: "Salida en hidroavión" },
        body: {
          en: 'Fly back south along the coast to Vancouver for your flight home. If the fog has other ideas, this is the day we planned slack for. It is a beautiful flight when it goes, so get the window seat.',
          fr: "Vol vers le sud le long de la côte jusqu'à Vancouver pour votre vol retour. Si le brouillard en décide autrement, c'est pour ce jour-là que nous avons prévu de la marge. C'est un vol magnifique quand il part : prenez le hublot.", de: "Rückflug entlang der Küste nach Süden bis Vancouver zu Ihrem Heimflug. Hat der Nebel andere Pläne, ist das der Tag, für den wir Puffer eingeplant haben. Wenn er stattfindet, ist es ein wunderschöner Flug, also nehmen Sie den Fensterplatz.", es: "Vuelo de vuelta hacia el sur por la costa hasta Vancouver para tomar su vuelo a casa. Si la niebla tiene otros planes, para eso dejamos este día de margen. Cuando se vuela, es un trayecto precioso, así que pida ventanilla.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'All floatplane and coastal flights', fr: 'Tous les vols en hydravion et les vols côtiers', de: "Alle Wasserflugzeug- und Küstenflüge", es: "Todos los vuelos en hidroavión y por la costa" },
      { en: 'Guided bear viewing in the Bella Coola valley', fr: 'Observation des ours guidée dans la vallée de Bella Coola', de: "Geführte Bärenbeobachtung im Bella Coola Valley", es: "Observación de osos con guía en el valle de Bella Coola" },
      { en: 'Three nights full board at a floating lodge, with guiding', fr: 'Trois nuits en pension complète dans un lodge flottant, guidage compris', de: "Drei Nächte mit Vollpension in einer schwimmenden Lodge, mit Guides", es: "Tres noches con pensión completa en un lodge flotante, con guías" },
      { en: 'Whale-watching by small boat from Tofino', fr: 'Observation des baleines en petit bateau depuis Tofino', de: "Walbeobachtung im kleinen Boot ab Tofino", es: "Avistamiento de ballenas en barco pequeño desde Tofino" },
      { en: 'A rain jacket that actually works, on loan', fr: 'Une veste de pluie qui fonctionne vraiment, prêtée', de: "Eine Regenjacke, die wirklich funktioniert, als Leihgabe", es: "Un chubasquero que funciona de verdad, en préstamo" },
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
    images: {
      summer: {
        subject: 'Grizzly on a salmon river, late September',
        tone: 'forest',
        alt: {
          en: 'A grizzly bear standing in a shallow river among rainforest trees, fishing for salmon',
          fr: 'Un grizzli debout dans une rivière peu profonde, entre les arbres de la forêt pluviale, en train de pêcher le saumon', de: "Ein Grizzly steht in einem flachen Fluss zwischen Regenwaldbäumen und fängt Lachse", es: "Un oso grizzly de pie en un río poco profundo entre árboles de la selva lluviosa, pescando salmón",
        },
      },
      winter: {
        subject: 'Mist over a rainforest inlet in winter rain',
        tone: 'forest',
        alt: {
          en: 'Low cloud and rain over a quiet inlet lined with dark cedar and spruce in winter',
          fr: 'Nuages bas et pluie sur une anse tranquille bordée de cèdres et d’épinettes sombres, en hiver', de: "Tiefe Wolken und Regen über einem stillen Meeresarm, gesäumt von dunklen Zedern und Fichten im Winter", es: "Nubes bajas y lluvia sobre una ensenada tranquila bordeada de cedros y abetos oscuros en invierno",
        },
      },
    },
  },

  // ── 3 ─────────────────────────────────────────────────────────────────────
  {
    id: 'polar-bear-season',
    slug: 'polar-bear-season',
    frReview: 'needs-human-review',
    title: { en: '*Polar Bear* Season', fr: 'La saison des *ours polaires*', de: "*Eisbär*-Saison", es: "Temporada de *osos polares*" },
    days: 8,
    seasons: ['winter'],
    fromPerPersonCAD: 19200,
    summary: {
      en: 'Churchill in October and November, when the bears wait on the shore for Hudson Bay to freeze. Polar bear season is about six weeks long. We will tell you which six.',
      fr: "Churchill en octobre et en novembre, quand les ours attendent sur le rivage que la baie d'Hudson gèle. La saison dure environ six semaines. Nous vous dirons lesquelles.", de: "Churchill im Oktober und November, wenn die Bären an der Küste warten, bis die Hudson Bay zufriert. Die Eisbärsaison dauert etwa sechs Wochen. Wir sagen Ihnen, welche sechs.", es: "Churchill en octubre y noviembre, cuando los osos esperan en la orilla a que se congele la bahía de Hudson. La temporada de osos polares dura unas seis semanas. Le diremos cuáles.",
    },
    intro: {
      en: 'Every autumn, polar bears gather along the coast near Churchill, Manitoba, waiting for the sea ice to form so they can go back out to hunt seals. For a few weeks it is one of the most reliable places on earth to see them. You reach Churchill by air or by a two-day train; there is no road. You spend your days on the tundra in heated, high-sided vehicles, which is the safe and respectful way to do this.',
      fr: "Chaque automne, les ours polaires se rassemblent sur la côte près de Churchill, au Manitoba, en attendant que la banquise se forme pour repartir chasser le phoque. Pendant quelques semaines, c'est l'un des endroits les plus fiables au monde pour les voir. On rejoint Churchill en avion ou par un train de deux jours ; il n'y a pas de route. Vos journées se passent sur la toundra, dans des véhicules chauffés et surélevés, ce qui est la façon sûre et respectueuse de le faire.", de: "Jeden Herbst sammeln sich Eisbären an der Küste bei Churchill in Manitoba und warten, bis sich Meereis bildet, damit sie wieder hinaus auf Robbenjagd gehen können. Für einige Wochen ist dies einer der verlässlichsten Orte der Welt, um sie zu sehen. Churchill erreichen Sie per Flugzeug oder mit einem zweitägigen Zug; eine Straße gibt es nicht. Ihre Tage verbringen Sie in der Tundra in beheizten, hochwandigen Fahrzeugen, der sichere und respektvolle Weg, dies zu erleben.", es: "Cada otoño, los osos polares se reúnen en la costa cerca de Churchill, en Manitoba, esperando a que se forme la banquisa para volver a cazar focas. Durante unas semanas es uno de los lugares más fiables del planeta para verlos. A Churchill se llega en avión o en un tren de dos días; no hay carretera. Los días se pasan en la tundra en vehículos altos con calefacción, la forma segura y respetuosa de hacerlo.",
    },
    honestNote: {
      en: 'Weather on Hudson Bay can ground flights for a day, sometimes two. That is why the trip starts and ends with spare time in Winnipeg, and why we do not book tight onward connections. Bears are very likely in season, not guaranteed. It is cold, windy and dark early. Rooms in Churchill are few and the best weeks sell out more than a year ahead.',
      fr: "Sur la baie d'Hudson, la météo peut clouer les avions au sol un jour, parfois deux. C'est pourquoi le voyage commence et se termine avec du temps libre à Winnipeg, et pourquoi nous ne réservons pas de correspondances serrées. En saison, les ours sont très probables, pas garantis. Il fait froid, il y a du vent et la nuit tombe tôt. Les chambres à Churchill sont rares et les meilleures semaines se vendent plus d'un an à l'avance.", de: "Das Wetter an der Hudson Bay kann Flüge einen Tag lang festhalten, manchmal zwei. Deshalb beginnt und endet die Reise mit Reservezeit in Winnipeg, und deshalb buchen wir keine knappen Anschlüsse. In der Saison sind Bären sehr wahrscheinlich, aber nicht garantiert. Es ist kalt, windig und früh dunkel. Zimmer in Churchill sind rar, und die besten Wochen sind mehr als ein Jahr im Voraus ausverkauft.", es: "El tiempo en la bahía de Hudson puede dejar los vuelos en tierra un día, a veces dos. Por eso el viaje empieza y termina con tiempo de margen en Winnipeg, y por eso no reservamos conexiones ajustadas. En temporada es muy probable ver osos, pero no está garantizado. Hace frío, viento y oscurece pronto. Hay pocas habitaciones en Churchill y las mejores semanas se agotan con más de un año de antelación.",
    },
    route: ['winnipeg', 'churchill'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'winnipeg',
        title: { en: 'Winnipeg, on purpose', fr: 'Winnipeg, volontairement', de: "Winnipeg, ganz bewusst", es: "Winnipeg, a propósito" },
        body: {
          en: 'Arrive in Winnipeg and take a day here before flying north. It is a buffer against delays, but it is also a good city: the river junction at The Forks, a serious human rights museum, and better food than its reputation. We fit your cold-weather gear on the second evening.',
          fr: "Arrivée à Winnipeg et une journée sur place avant de partir vers le nord. C'est une marge contre les retards, mais c'est aussi une ville agréable : la confluence des rivières à La Fourche, un musée des droits de la personne qui mérite le détour, et une cuisine meilleure que sa réputation. Nous ajustons votre équipement grand froid le deuxième soir.", de: "Ankunft in Winnipeg und ein Tag hier, bevor es nach Norden geht. Er ist ein Puffer gegen Verspätungen, aber Winnipeg ist auch eine gute Stadt: der Flusszusammenfluss bei The Forks, ein bedeutendes Menschenrechtsmuseum und besseres Essen, als ihr Ruf vermuten lässt. Am zweiten Abend passen wir Ihre Kälteausrüstung an.", es: "Llegue a Winnipeg y quédese un día antes de volar al norte. Sirve de margen ante retrasos, pero además es una buena ciudad: la confluencia de ríos de The Forks, un museo de derechos humanos de primer nivel y mejor comida de lo que dice su fama. La segunda tarde le probamos el equipo para el frío.",
        },
      },
      {
        days: 'Day 3',
        placeId: 'churchill',
        title: { en: 'North to Churchill', fr: 'Cap au nord, vers Churchill', de: "Nach Norden, nach Churchill", es: "Al norte, a Churchill" },
        body: {
          en: 'A flight of a little over two hours takes you from city to subarctic. The trees thin out and then stop. In the afternoon your guide drives you around town and explains the rules, which are taken seriously: bears do walk through Churchill.',
          fr: "Un vol d'un peu plus de deux heures vous fait passer de la ville au subarctique. Les arbres se raréfient puis disparaissent. L'après-midi, votre guide vous fait faire le tour de la ville et vous explique les règles, qui sont prises très au sérieux : des ours traversent bel et bien Churchill.", de: "Ein Flug von gut zwei Stunden bringt Sie aus der Stadt in die Subarktis. Die Bäume werden lichter und hören dann ganz auf. Am Nachmittag fährt Ihr Guide Sie durch den Ort und erklärt die Regeln, die ernst genommen werden: Bären laufen tatsächlich durch Churchill.", es: "Un vuelo de algo más de dos horas le lleva de la ciudad al subártico. Los árboles se van espaciando y luego desaparecen. Por la tarde, su guía le da una vuelta por el pueblo y le explica las normas, que se toman en serio: los osos sí pasean por Churchill.",
        },
      },
      {
        days: 'Days 4–5',
        title: { en: 'Two full days on the tundra', fr: 'Deux journées complètes sur la toundra', de: "Zwei volle Tage in der Tundra", es: "Dos días completos en la tundra" },
        body: {
          en: 'Long days out on the coast in tundra vehicles, with lunch on board and a heated cabin. Bears sleep in the willows, spar on the ice edge, and sometimes come over to inspect the tyres. Arctic foxes and ptarmigan are a quiet bonus.',
          fr: "De longues journées sur la côte à bord de véhicules de toundra, avec déjeuner à bord et cabine chauffée. Les ours dorment dans les saules, se mesurent au bord de la glace, et viennent parfois inspecter les pneus. Renards arctiques et lagopèdes sont un bonus discret.", de: "Lange Tage an der Küste in Tundra-Fahrzeugen, mit Mittagessen an Bord und beheizter Kabine. Bären schlafen in den Weiden, rangeln an der Eiskante und kommen manchmal herüber, um die Reifen zu begutachten. Polarfüchse und Schneehühner sind eine stille Zugabe.", es: "Largas jornadas en la costa en vehículos de tundra, con almuerzo a bordo y cabina con calefacción. Los osos duermen entre los sauces, pelean al borde del hielo y a veces se acercan a inspeccionar las ruedas. Zorros árticos y lagópodos son un regalo discreto.",
        },
      },
      {
        days: 'Day 6',
        title: { en: 'Dogs, town and the bay', fr: 'Chiens, village et baie', de: "Hunde, Ort und Bucht", es: "Perros, pueblo y bahía" },
        body: {
          en: 'A morning with a dog-sled team on the trails outside town, if there is enough snow, and an afternoon learning about the people who have lived on this coast for a very long time. On a clear night there is a fair chance of northern lights. It is not why you came, but you will not mind.',
          fr: "Une matinée avec un attelage de chiens sur les pistes autour du village, s'il y a assez de neige, et un après-midi pour découvrir les peuples qui vivent sur cette côte depuis très longtemps. Par nuit claire, il y a de bonnes chances de voir des aurores boréales. Ce n'est pas pour cela que vous êtes venu, mais vous ne direz pas non.", de: "Ein Vormittag mit einem Hundeschlittengespann auf den Wegen außerhalb des Ortes, wenn genug Schnee liegt, und ein Nachmittag über die Menschen, die seit sehr langer Zeit an dieser Küste leben. In einer klaren Nacht stehen die Chancen auf Polarlichter gut. Deswegen sind Sie nicht gekommen, aber es wird Sie nicht stören.", es: "Una mañana con un tiro de perros en los senderos a las afueras del pueblo, si hay nieve suficiente, y una tarde para conocer a los pueblos que llevan muchísimo tiempo viviendo en esta costa. En una noche despejada hay bastantes posibilidades de ver la aurora. No es a lo que vino, pero no le importará.",
        },
      },
      {
        days: 'Day 7',
        placeId: 'winnipeg',
        title: { en: 'Back south', fr: 'Retour vers le sud', de: "Zurück nach Süden", es: "De vuelta al sur" },
        body: {
          en: 'Fly back to Winnipeg, weather allowing. A warm hotel and a long dinner. If the flight is delayed, your specialist is already rearranging things.',
          fr: "Vol de retour vers Winnipeg, si la météo le permet. Un hôtel chaud et un long dîner. Si le vol est retardé, votre spécialiste est déjà en train de tout réorganiser.", de: "Rückflug nach Winnipeg, wenn das Wetter es zulässt. Ein warmes Hotel und ein langes Abendessen. Verspätet sich der Flug, organisiert Ihr Spezialist bereits um.", es: "Vuelo de regreso a Winnipeg, si el tiempo lo permite. Un hotel cálido y una cena larga. Si el vuelo se retrasa, su especialista ya está reorganizándolo todo.",
        },
      },
      {
        days: 'Day 8',
        title: { en: 'Home, or a spare day', fr: 'Retour, ou journée de réserve', de: "Heimreise oder Reservetag", es: "A casa, o un día de margen" },
        body: {
          en: 'You fly home today. If Hudson Bay held you up, this is the day that absorbs it. Either way, you leave with more bear photographs than anyone will want to see.',
          fr: "Vol retour aujourd'hui. Si la baie d'Hudson vous a retenus, c'est cette journée qui absorbe le retard. Dans tous les cas, vous repartez avec plus de photos d'ours que quiconque ne voudra en voir.", de: "Heute fliegen Sie nach Hause. Hat die Hudson Bay Sie aufgehalten, fängt dieser Tag das auf. So oder so reisen Sie mit mehr Bärenfotos ab, als irgendjemand sehen möchte.", es: "Hoy vuela a casa. Si la bahía de Hudson le retuvo, este día lo absorbe. En cualquier caso, se irá con más fotos de osos de las que nadie querrá ver.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'Return flights between Winnipeg and Churchill', fr: 'Vols aller-retour entre Winnipeg et Churchill', de: "Hin- und Rückflüge zwischen Winnipeg und Churchill", es: "Vuelos de ida y vuelta entre Winnipeg y Churchill" },
      { en: 'Two full days in a tundra vehicle with a naturalist guide', fr: 'Deux journées complètes en véhicule de toundra avec un guide naturaliste', de: "Zwei volle Tage im Tundra-Fahrzeug mit Naturführer", es: "Dos días completos en vehículo de tundra con un guía naturalista" },
      { en: 'Loaned parka, boots and mitts rated well below freezing', fr: 'Parka, bottes et moufles grand froid prêtées', de: "Leih-Parka, Stiefel und Fäustlinge für Temperaturen weit unter null", es: "Parka, botas y manoplas en préstamo, preparados para temperaturas muy bajo cero" },
      { en: 'A dog-sledding morning, snow permitting', fr: 'Une matinée en traîneau à chiens, si l’enneigement le permet', de: "Ein Vormittag mit dem Hundeschlitten, wenn der Schnee es erlaubt", es: "Una mañana en trineo de perros, si la nieve lo permite" },
      { en: 'Spare days in Winnipeg built in for weather', fr: 'Journées de réserve à Winnipeg prévues pour la météo', de: "Wetter-Reservetage in Winnipeg eingeplant", es: "Días de margen en Winnipeg previstos por el tiempo" },
    ],
    experienceIds: ['polar-bears', 'northern-lights', 'remote-lodges', 'private-guides'],
    stayIds: ['stay-churchill-tundra-lodge'],
    eventIds: ['polar-bears-churchill'],
    regionIds: ['winnipeg', 'churchill'],
    provinceIds: ['manitoba'],
    images: {
      summer: {
        subject: 'Polar bear resting on rocks by Hudson Bay, July',
        tone: 'granite',
        alt: {
          en: 'A polar bear lying on pink granite rocks beside the grey water of Hudson Bay in summer',
          fr: 'Un ours polaire couché sur des rochers de granit rose au bord des eaux grises de la baie d’Hudson, en été', de: "Ein Eisbär liegt im Sommer auf rosa Granitfelsen am grauen Wasser der Hudson Bay", es: "Un oso polar tumbado sobre rocas de granito rosado junto al agua gris de la bahía de Hudson en verano",
        },
      },
      winter: {
        subject: 'Polar bear walking across snowy tundra, November',
        tone: 'snow',
        alt: {
          en: 'A polar bear walking across flat snowy tundra under a pale November sky',
          fr: 'Un ours polaire marchant sur la toundra enneigée sous un ciel pâle de novembre', de: "Ein Eisbär läuft unter blassem Novemberhimmel über flache, verschneite Tundra", es: "Un oso polar caminando por la tundra llana y nevada bajo un pálido cielo de noviembre",
        },
      },
    },
  },

  // ── 4 ─────────────────────────────────────────────────────────────────────
  {
    id: 'yukon-under-the-aurora',
    slug: 'yukon-under-the-aurora',
    frReview: 'needs-human-review',
    title: { en: 'Yukon Under the *Aurora*', fr: 'Le Yukon sous les *aurores*', de: "Yukon unter dem *Polarlicht*", es: "El Yukón bajo la *aurora*" },
    days: 9,
    seasons: ['winter'],
    isNew: true,
    fromPerPersonCAD: 13500,
    summary: {
      en: 'Five nights in cabins outside Whitehorse with dark skies, dogs, snowshoes and a woodstove. Yes, you can see the northern lights. No, not from Toronto.',
      fr: "Cinq nuits en chalets près de Whitehorse, avec un ciel noir, des chiens, des raquettes et un poêle à bois. Oui, on peut voir les aurores boréales. Non, pas depuis Toronto.", de: "Fünf Nächte in Hütten außerhalb von Whitehorse, mit dunklem Himmel, Hunden, Schneeschuhen und Holzofen. Ja, Sie können Polarlichter sehen. Nein, nicht von Toronto aus.", es: "Cinco noches en cabañas a las afueras de Whitehorse, con cielos oscuros, perros, raquetas y estufa de leña. Sí, puede ver la aurora boreal. No, desde Toronto no.",
    },
    intro: {
      en: 'The Yukon sits right under the auroral oval, has very little light pollution and, in winter, very long nights. We put you in cabins away from town so you can watch from the doorstep rather than a car park. Days are for dog-sledding, snowshoeing and a trip out to Kluane, where the mountains are bigger than anything in the south. Aurora is also visible from late August, and we can plan an autumn version, but this trip is built for the deep-winter nights.',
      fr: "Le Yukon se trouve juste sous l'ovale auroral, avec très peu de pollution lumineuse et, l'hiver, des nuits très longues. Nous vous installons dans des chalets loin de la ville pour que vous puissiez regarder depuis le pas de la porte plutôt que depuis un parking. Les journées sont consacrées au traîneau à chiens, à la raquette et à une excursion vers Kluane, où les montagnes dépassent tout ce que l'on trouve plus au sud. Les aurores sont aussi visibles dès la fin août et nous pouvons préparer une version automnale, mais ce voyage est pensé pour les longues nuits du cœur de l'hiver.", de: "Der Yukon liegt direkt unter dem Polarlichtoval, hat kaum Lichtverschmutzung und im Winter sehr lange Nächte. Wir bringen Sie in Hütten abseits der Stadt unter, damit Sie von der Türschwelle aus schauen können statt von einem Parkplatz. Die Tage gehören dem Hundeschlitten, den Schneeschuhen und einem Ausflug nach Kluane, wo die Berge größer sind als alles im Süden. Polarlichter sind ab Ende August sichtbar, und wir können eine Herbstvariante planen, doch diese Reise ist für die tiefen Winternächte gemacht.", es: "El Yukón está justo bajo el óvalo auroral, apenas tiene contaminación lumínica y, en invierno, las noches son muy largas. Le alojamos en cabañas lejos del pueblo para que mire desde la puerta y no desde un aparcamiento. Los días son para el trineo de perros, las raquetas y una excursión a Kluane, donde las montañas son más grandes que cualquiera del sur. La aurora también se ve desde finales de agosto, y podemos planificar una versión de otoño, pero este viaje está pensado para las noches de pleno invierno.",
    },
    honestNote: {
      en: 'Clouds exist. The aurora is reliable here, but no one can promise a clear sky on a given night, which is why we plan at least five nights in the dark. It can be minus 30 °C or colder. We lend you proper gear and keep a warm cabin a few steps away.',
      fr: "Les nuages existent. Les aurores sont fréquentes ici, mais personne ne peut promettre un ciel dégagé un soir donné : c'est pourquoi nous prévoyons au moins cinq nuits dans l'obscurité. Il peut faire moins 30 °C, voire plus froid. Nous vous prêtons un vrai équipement et gardons un chalet chaud à quelques pas.", de: "Wolken gibt es. Das Polarlicht ist hier verlässlich, doch niemand kann für eine bestimmte Nacht klaren Himmel versprechen, deshalb planen wir mindestens fünf Nächte im Dunkeln. Es kann minus 30 °C oder kälter werden. Wir leihen Ihnen richtige Ausrüstung und halten eine warme Hütte wenige Schritte entfernt bereit.", es: "Las nubes existen. Aquí la aurora es fiable, pero nadie puede prometer un cielo despejado una noche concreta, por eso planificamos al menos cinco noches a oscuras. Puede hacer 30 °C bajo cero o menos. Le prestamos un buen equipo y tiene una cabaña caliente a pocos pasos.",
    },
    route: ['whitehorse', 'haines-junction'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'whitehorse',
        title: { en: 'Whitehorse', fr: 'Whitehorse', de: "Whitehorse", es: "Whitehorse" },
        body: {
          en: 'Fly in via Vancouver or Calgary and spend a night in town. We fit your parka, boots and mitts the next morning, then walk the frozen riverfront. It is a small capital with good coffee and a frontier sense of humour.',
          fr: "Arrivée via Vancouver ou Calgary et une nuit en ville. Nous ajustons votre parka, vos bottes et vos moufles le lendemain matin, puis balade le long de la rivière gelée. C'est une petite capitale avec du bon café et un humour de pionnier.", de: "Anreise über Vancouver oder Calgary und eine Nacht in der Stadt. Am nächsten Morgen passen wir Parka, Stiefel und Fäustlinge an, dann geht es an das gefrorene Flussufer. Eine kleine Hauptstadt mit gutem Kaffee und einem Humor wie an der Grenze zur Wildnis.", es: "Llegue vía Vancouver o Calgary y pase una noche en la ciudad. A la mañana siguiente le probamos la parka, las botas y las manoplas, y después paseamos por la orilla helada del río. Es una capital pequeña con buen café y un humor de frontera.",
        },
      },
      {
        days: 'Days 3–5',
        title: { en: 'Cabins and the night sky', fr: 'Chalets et ciel nocturne', de: "Hütten und Nachthimmel", es: "Cabañas y cielo nocturno" },
        body: {
          en: 'Move out to wood-heated cabins on a lake about half an hour from town. Your host wakes you if the lights come out, so you can sleep without guilt. By day, try a dog-sled team or snowshoe into the spruce.',
          fr: "Installation dans des chalets chauffés au bois, au bord d'un lac, à une demi-heure de la ville. Votre hôte vous réveille si les aurores apparaissent : vous pouvez dormir sans remords. Le jour, essayez le traîneau à chiens ou partez en raquettes dans les épinettes.", de: "Umzug in holzbeheizte Hütten an einem See, etwa eine halbe Stunde von der Stadt. Ihr Gastgeber weckt Sie, wenn die Lichter erscheinen, Sie können also ohne schlechtes Gewissen schlafen. Tagsüber probieren Sie ein Hundegespann aus oder wandern mit Schneeschuhen in den Fichtenwald.", es: "Traslado a cabañas con calefacción de leña junto a un lago, a una media hora de la ciudad. Su anfitrión le despierta si sale la aurora, así que puede dormir sin remordimientos. De día, pruebe un tiro de perros o adéntrese con raquetas en el bosque de abetos.",
        },
      },
      {
        days: 'Days 6–7',
        placeId: 'haines-junction',
        title: { en: 'Kluane in winter', fr: 'Kluane en hiver', de: "Kluane im Winter", es: "Kluane en invierno" },
        body: {
          en: 'A day trip west to Haines Junction and the edge of Kluane, home to the highest mountains in Canada. The light is low and golden all day in midwinter. Back at the cabins by dark, which arrives early.',
          fr: "Une journée vers l'ouest jusqu'à Haines Junction et l'entrée de Kluane, où se trouvent les plus hautes montagnes du Canada. En plein hiver, la lumière reste basse et dorée toute la journée. Retour aux chalets à la nuit tombée, qui arrive tôt.", de: "Ein Tagesausflug nach Westen nach Haines Junction und an den Rand von Kluane, Heimat der höchsten Berge Kanadas. Im Hochwinter steht das Licht den ganzen Tag tief und golden. Zurück an den Hütten bei Dunkelheit, die früh kommt.", es: "Excursión de un día hacia el oeste, a Haines Junction y al borde de Kluane, donde están las montañas más altas de Canadá. En pleno invierno la luz es baja y dorada todo el día. Vuelta a las cabañas al caer la noche, que llega pronto.",
        },
      },
      {
        days: 'Day 8',
        title: { en: 'Hot springs and a last night out', fr: 'Sources chaudes et une dernière nuit dehors', de: "Heiße Quellen und eine letzte Nacht draußen", es: "Aguas termales y una última noche fuera" },
        body: {
          en: 'An afternoon in outdoor hot pools near Whitehorse, where your hair freezes while the rest of you does not. One last night of watching the sky. If the aurora has been shy, this is your fifth chance.',
          fr: "Un après-midi dans des bassins d'eau chaude en plein air près de Whitehorse, où vos cheveux gèlent pendant que le reste de vous se réchauffe. Une dernière nuit à guetter le ciel. Si les aurores ont été timides, c'est votre cinquième chance.", de: "Ein Nachmittag in heißen Außenbecken bei Whitehorse, wo Ihnen die Haare gefrieren, der Rest aber nicht. Eine letzte Nacht unter dem Himmel. War das Polarlicht bisher scheu, ist das Ihre fünfte Chance.", es: "Una tarde en piscinas termales al aire libre cerca de Whitehorse, donde se le congela el pelo y el resto no. Una última noche mirando el cielo. Si la aurora ha sido tímida, esta es su quinta oportunidad.",
        },
      },
      {
        days: 'Day 9',
        placeId: 'whitehorse',
        title: { en: 'Home', fr: 'Retour', de: "Heimreise", es: "Regreso" },
        body: {
          en: 'Fly south from Whitehorse. Most flights connect through Vancouver. You will be tired, and slightly smug.',
          fr: "Vol vers le sud depuis Whitehorse, le plus souvent via Vancouver. Vous serez fatigué, et un peu fier de vous.", de: "Flug von Whitehorse nach Süden. Die meisten Verbindungen gehen über Vancouver. Sie werden müde sein und ein wenig selbstzufrieden.", es: "Vuelo hacia el sur desde Whitehorse. La mayoría de vuelos conectan en Vancouver. Estará cansado y un poco orgulloso de sí mismo.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'Five nights in lakeside cabins chosen for dark skies', fr: 'Cinq nuits en chalets au bord d’un lac, choisis pour leur ciel noir', de: "Fünf Nächte in Hütten am See, ausgewählt für dunklen Himmel", es: "Cinco noches en cabañas junto al lago, elegidas por sus cielos oscuros" },
      { en: 'Aurora wake-up calls from your host', fr: 'Réveil par votre hôte en cas d’aurores', de: "Polarlicht-Weckruf durch Ihren Gastgeber", es: "Aviso de aurora de su anfitrión, aunque esté durmiendo" },
      { en: 'Loaned winter parka, boots and mitts', fr: 'Parka, bottes et moufles d’hiver prêtées', de: "Leih-Winterparka, Stiefel und Fäustlinge", es: "Parka de invierno, botas y manoplas en préstamo" },
      { en: 'A day with a dog-sled team', fr: 'Une journée avec un attelage de chiens', de: "Ein Tag mit einem Hundeschlittengespann", es: "Un día con un tiro de perros" },
      { en: 'Private guided day to Kluane', fr: 'Journée avec guide privé à Kluane', de: "Privat geführter Tag nach Kluane", es: "Día privado con guía a Kluane" },
    ],
    experienceIds: ['northern-lights', 'winter-cabins', 'private-guides'],
    stayIds: ['stay-aurora-cabins'],
    eventIds: ['aurora-yukon'],
    regionIds: ['whitehorse', 'kluane'],
    provinceIds: ['yukon'],
    images: {
      summer: {
        subject: 'Kluane peaks above a green valley, late August evening',
        tone: 'forest',
        alt: {
          en: 'Snow-capped mountains above a green boreal valley in the Yukon in late summer',
          fr: 'Montagnes enneigées au-dessus d’une vallée boréale verte au Yukon, à la fin de l’été', de: "Schneebedeckte Berge über einem grünen borealen Tal im Yukon im Spätsommer", es: "Montañas nevadas sobre un valle boreal verde en el Yukón a finales de verano",
        },
      },
      winter: {
        subject: 'Green aurora over a snowy cabin and spruce',
        tone: 'night',
        alt: {
          en: 'Green northern lights over a small snow-covered cabin among spruce trees',
          fr: 'Aurores boréales vertes au-dessus d’un petit chalet enneigé entouré d’épinettes', de: "Grüne Polarlichter über einer kleinen verschneiten Hütte zwischen Fichten", es: "Aurora boreal verde sobre una pequeña cabaña nevada entre abetos",
        },
      },
    },
  },

  // ── 5 ─────────────────────────────────────────────────────────────────────
  {
    id: 'quebec-slowly',
    slug: 'quebec-slowly',
    frReview: 'needs-human-review',
    title: { en: 'Québec, *Slowly*', fr: 'Le Québec, *lentement*', de: "Québec, *in Ruhe*", es: "Quebec, *sin prisa*" },
    days: 10,
    seasons: ['summer', 'winter'],
    fromPerPersonCAD: 12500,
    summary: {
      en: 'Montréal, Québec City and the Charlevoix coast at walking pace, with whales at Tadoussac in summer and snow, sleds and long lunches in winter.',
      fr: "Montréal, Québec et la côte de Charlevoix au rythme de la marche, avec les baleines de Tadoussac en été, et la neige, les traîneaux et les longs déjeuners en hiver.", de: "Montréal, Québec City und die Küste von Charlevoix im Schritttempo, mit Walen bei Tadoussac im Sommer und Schnee, Schlitten und langen Mittagessen im Winter.", es: "Montreal, Quebec y la costa de Charlevoix a paso tranquilo, con ballenas en Tadoussac en verano y nieve, trineos y almuerzos largos en invierno.",
    },
    intro: {
      en: 'This is a trip for people who like to arrive somewhere and stay put for a bit. You take the train from Montréal to Québec City, then follow the St. Lawrence downriver into Charlevoix, where the hills drop straight into the water. In summer it ends at Tadoussac, where whales feed at the mouth of the Saguenay fjord. In winter we swap the whales for more time in Charlevoix: cross-country skiing, dog-sledding and a cabin by the river.',
      fr: "Ce voyage s'adresse à ceux qui aiment arriver quelque part et y rester un peu. Vous prenez le train de Montréal à Québec, puis vous suivez le Saint-Laurent jusqu'à Charlevoix, où les collines plongent directement dans le fleuve. En été, il se termine à Tadoussac, où les baleines se nourrissent à l'embouchure du fjord du Saguenay. En hiver, nous remplaçons les baleines par plus de temps dans Charlevoix : ski de fond, traîneau à chiens et un chalet au bord du fleuve.", de: "Diese Reise ist für Menschen, die gern irgendwo ankommen und eine Weile bleiben. Sie fahren mit dem Zug von Montréal nach Québec City und folgen dann dem Sankt-Lorenz-Strom flussabwärts nach Charlevoix, wo die Hügel direkt ins Wasser abfallen. Im Sommer endet sie in Tadoussac, wo Wale an der Mündung des Saguenay-Fjords fressen. Im Winter tauschen wir die Wale gegen mehr Zeit in Charlevoix: Langlauf, Hundeschlitten und eine Hütte am Fluss.", es: "Es un viaje para quienes disfrutan llegando a un sitio y quedándose un tiempo. Se toma el tren de Montreal a Quebec y luego se sigue el San Lorenzo río abajo hasta Charlevoix, donde las colinas caen directamente al agua. En verano termina en Tadoussac, donde las ballenas se alimentan en la desembocadura del fiordo del Saguenay. En invierno cambiamos las ballenas por más tiempo en Charlevoix: esquí de fondo, trineos de perros y una cabaña junto al río.",
    },
    honestNote: {
      en: 'Whale-watching boats at Tadoussac run from roughly June to October, so the winter version does not include it. Winter in Québec is properly cold, and that is rather the point. The train between Montréal and Québec City is comfortable, not fast.',
      fr: "Les excursions aux baleines à Tadoussac ont lieu à peu près de juin à octobre : la version hivernale ne les inclut donc pas. L'hiver au Québec est vraiment froid, et c'est un peu tout l'intérêt. Le train entre Montréal et Québec est confortable, pas rapide.", de: "Walbeobachtungsboote fahren in Tadoussac etwa von Juni bis Oktober, die Wintervariante enthält das also nicht. Der Winter in Québec ist richtig kalt, und genau darum geht es. Der Zug zwischen Montréal und Québec City ist bequem, aber nicht schnell.", es: "Los barcos de avistamiento de ballenas de Tadoussac salen más o menos de junio a octubre, así que la versión de invierno no lo incluye. El invierno en Quebec es frío de verdad, y de eso se trata. El tren entre Montreal y Quebec es cómodo, no rápido.",
    },
    route: ['montreal', 'quebec-city', 'baie-saint-paul', 'tadoussac'],
    itinerary: [
      {
        days: 'Days 1–3',
        placeId: 'montreal',
        title: { en: 'Montréal', fr: 'Montréal', de: "Montréal", es: "Montreal" },
        body: {
          en: 'Three days in a city that eats late and argues happily about bagels. Walk the Plateau and Mile End, climb Mont Royal, and spend a morning in the Jean-Talon market. In winter, the underground city and the outdoor rinks are both worth your time.',
          fr: "Trois jours dans une ville qui dîne tard et débat volontiers de bagels. Promenez-vous sur le Plateau et dans le Mile End, montez sur le mont Royal et passez une matinée au marché Jean-Talon. En hiver, la ville souterraine comme les patinoires extérieures valent le détour.", de: "Drei Tage in einer Stadt, die spät isst und vergnügt über Bagels streitet. Spazieren Sie durch Plateau und Mile End, steigen Sie auf den Mont Royal und verbringen Sie einen Vormittag auf dem Marché Jean-Talon. Im Winter lohnen sich die unterirdische Stadt und die Eisbahnen unter freiem Himmel.", es: "Tres días en una ciudad que cena tarde y discute alegremente sobre bagels. Pasee por el Plateau y Mile End, suba al Mont Royal y pase una mañana en el mercado Jean-Talon. En invierno, la ciudad subterránea y las pistas de patinaje al aire libre merecen la pena.",
        },
      },
      {
        days: 'Days 4–6',
        placeId: 'quebec-city',
        title: { en: 'Québec City', fr: 'Québec', de: "Québec City", es: "Quebec" },
        body: {
          en: 'A three-hour train ride east, then the only walled city north of Mexico. A private guide walks you through four centuries in a morning; the afternoons are for getting lost on purpose. In February, the Winter Carnival takes over the town, and the dates move each year.',
          fr: "Trois heures de train vers l'est, puis la seule ville fortifiée au nord du Mexique. Un guide privé vous fait traverser quatre siècles en une matinée ; les après-midi servent à se perdre volontairement. En février, le Carnaval d'hiver s'empare de la ville, et ses dates changent chaque année.", de: "Drei Stunden mit dem Zug nach Osten, dann die einzige ummauerte Stadt nördlich von Mexiko. Ein privater Guide führt Sie an einem Vormittag durch vier Jahrhunderte; die Nachmittage sind dazu da, sich absichtlich zu verlaufen. Im Februar übernimmt der Winterkarneval die Stadt, die Termine ändern sich jedes Jahr.", es: "Tres horas de tren hacia el este y llega a la única ciudad amurallada al norte de México. Un guía privado le pasea por cuatro siglos en una mañana; las tardes son para perderse a propósito. En febrero, el Carnaval de Invierno se adueña de la ciudad, y las fechas cambian cada año.",
        },
      },
      {
        days: 'Days 7–8',
        placeId: 'baie-saint-paul',
        title: { en: 'Charlevoix', fr: 'Charlevoix', de: "Charlevoix", es: "Charlevoix" },
        body: {
          en: 'An hour downriver to Baie-Saint-Paul, a village of painters and cheesemakers. Eat well, walk the hills above the river, and visit a farm or two. In winter, this is where you go dog-sledding and cross-country skiing.',
          fr: "Une heure en aval jusqu'à Baie-Saint-Paul, village de peintres et de fromagers. On mange bien, on marche sur les hauteurs du fleuve et on visite une ferme ou deux. En hiver, c'est ici que l'on fait du traîneau à chiens et du ski de fond.", de: "Eine Stunde flussabwärts nach Baie-Saint-Paul, einem Dorf der Maler und Käser. Gut essen, auf die Hügel über dem Fluss wandern und einen Hof oder zwei besuchen. Im Winter geht man hier Hundeschlitten fahren und langlaufen.", es: "Una hora río abajo hasta Baie-Saint-Paul, un pueblo de pintores y queseros. Coma bien, camine por las colinas sobre el río y visite una o dos granjas. En invierno, aquí es donde se hace trineo de perros y esquí de fondo.",
        },
      },
      {
        days: 'Day 9',
        placeId: 'tadoussac',
        title: { en: 'Tadoussac (summer) or the river cabin (winter)', fr: 'Tadoussac (été) ou le chalet au bord du fleuve (hiver)', de: "Tadoussac (Sommer) oder die Hütte am Fluss (Winter)", es: "Tadoussac (verano) o la cabaña junto al río (invierno)" },
        body: {
          en: 'In summer, cross the Saguenay by the free ferry and go out in a Zodiac or a larger boat for minke, fin and sometimes blue whales, plus the resident belugas. In winter, we keep you in Charlevoix for a night in a cabin above the frozen river instead. Both involve looking at the St. Lawrence for longer than you expected.',
          fr: "En été, traversée du Saguenay par le traversier gratuit, puis sortie en zodiac ou en bateau plus grand pour voir les petits rorquals, les rorquals communs et parfois le rorqual bleu, ainsi que les bélugas résidents. En hiver, nous vous gardons plutôt à Charlevoix pour une nuit dans un chalet au-dessus du fleuve gelé. Dans les deux cas, vous regarderez le Saint-Laurent plus longtemps que prévu.", de: "Im Sommer überqueren Sie den Saguenay mit der kostenlosen Fähre und fahren im Zodiac oder einem größeren Boot hinaus zu Zwerg-, Finn- und manchmal Blauwalen sowie den ansässigen Belugas. Im Winter bleiben Sie stattdessen in Charlevoix, für eine Nacht in einer Hütte über dem gefrorenen Fluss. Beides heißt, länger auf den Sankt-Lorenz-Strom zu schauen als erwartet.", es: "En verano, cruce el Saguenay en el ferry gratuito y salga en zódiac o en un barco más grande a ver rorcuales aliblancos, rorcuales comunes y a veces ballenas azules, además de las belugas residentes. En invierno, le dejamos en Charlevoix para pasar una noche en una cabaña sobre el río helado. En ambos casos acabará mirando el San Lorenzo más tiempo del que esperaba.",
        },
      },
      {
        days: 'Day 10',
        placeId: 'quebec-city',
        title: { en: 'Back to Québec City and home', fr: 'Retour à Québec, puis départ', de: "Zurück nach Québec City und nach Hause", es: "Vuelta a Quebec y a casa" },
        body: {
          en: 'A scenic drive back along the river to Québec City airport, about three hours from Tadoussac or one from Charlevoix. Flights home usually connect through Montréal or Toronto. Bring room in your bag for maple and cheese.',
          fr: "Retour par la route panoramique le long du fleuve jusqu'à l'aéroport de Québec, à environ trois heures de Tadoussac ou une heure de Charlevoix. Les vols retour passent généralement par Montréal ou Toronto. Gardez de la place dans vos bagages pour l'érable et le fromage.", de: "Eine schöne Fahrt am Fluss entlang zurück zum Flughafen Québec City, etwa drei Stunden ab Tadoussac oder eine ab Charlevoix. Heimflüge gehen meist über Montréal oder Toronto. Lassen Sie im Koffer Platz für Ahornsirup und Käse.", es: "Un bonito trayecto de vuelta junto al río hasta el aeropuerto de Quebec, unas tres horas desde Tadoussac o una desde Charlevoix. Los vuelos de regreso suelen conectar en Montreal o Toronto. Deje sitio en la maleta para el arce y el queso.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'First-class train from Montréal to Québec City', fr: 'Train en première classe de Montréal à Québec', de: "Zug in der ersten Klasse von Montréal nach Québec City", es: "Tren en primera clase de Montreal a Quebec" },
      { en: 'Private guided walk in Old Québec', fr: 'Visite guidée privée du Vieux-Québec', de: "Private Führung durch Alt-Québec", es: "Paseo privado con guía por el Viejo Quebec" },
      { en: 'Private driver along the Charlevoix coast', fr: 'Chauffeur privé le long de la côte de Charlevoix', de: "Privater Fahrer entlang der Küste von Charlevoix", es: "Conductor privado por la costa de Charlevoix" },
      { en: 'Summer: whale-watching from Tadoussac', fr: 'Été : observation des baleines depuis Tadoussac', de: "Sommer: Walbeobachtung ab Tadoussac", es: "Verano: avistamiento de ballenas desde Tadoussac" },
      { en: 'Winter: dog-sledding and a riverside cabin night', fr: 'Hiver : traîneau à chiens et une nuit en chalet au bord du fleuve', de: "Winter: Hundeschlitten und eine Nacht in der Hütte am Fluss", es: "Invierno: trineo de perros y una noche en una cabaña junto al río" },
    ],
    experienceIds: ['quebec-old-cities', 'whales', 'winter-cabins', 'private-guides'],
    stayIds: ['stay-montreal-hotel', 'stay-quebec-auberge', 'stay-charlevoix-manor'],
    eventIds: ['whales-tadoussac', 'fall-colours'],
    regionIds: ['montreal', 'quebec-city', 'charlevoix', 'tadoussac'],
    provinceIds: ['quebec'],
    images: {
      summer: {
        subject: 'Charlevoix hills dropping into the St. Lawrence, July',
        tone: 'birch',
        alt: {
          en: 'Green hills and a small village above the wide St. Lawrence River in summer',
          fr: 'Collines vertes et petit village au-dessus du large fleuve Saint-Laurent, en été', de: "Grüne Hügel und ein kleines Dorf über dem breiten Sankt-Lorenz-Strom im Sommer", es: "Colinas verdes y un pequeño pueblo sobre el ancho río San Lorenzo en verano",
        },
      },
      winter: {
        subject: 'Snowy street in Old Québec at dusk, warm windows',
        tone: 'snow',
        alt: {
          en: 'A narrow snow-covered street in Old Québec at dusk with lit windows',
          fr: 'Une rue étroite et enneigée du Vieux-Québec au crépuscule, aux fenêtres éclairées', de: "Eine schmale verschneite Gasse in Alt-Québec in der Dämmerung mit erleuchteten Fenstern", es: "Una calle estrecha y nevada del Viejo Quebec al anochecer, con las ventanas iluminadas",
        },
      },
    },
  },

  // ── 6 ─────────────────────────────────────────────────────────────────────
  {
    id: 'the-atlantic-edge',
    slug: 'the-atlantic-edge',
    frReview: 'needs-human-review',
    title: { en: 'The *Atlantic* Edge', fr: 'Au bord de l’*Atlantique*', de: "Am *Atlantik*", es: "El borde *atlántico*" },
    days: 14,
    seasons: ['summer'],
    fromPerPersonCAD: 18200,
    summary: {
      en: 'Cape Breton, Prince Edward Island and Newfoundland: cliffs, fiords, lobster, icebergs in early summer and whales most of it.',
      fr: "Le Cap-Breton, l'Île-du-Prince-Édouard et Terre-Neuve : falaises, fjords, homard, icebergs en début d'été et baleines presque tout le reste du temps.", de: "Cape Breton, Prince Edward Island und Neufundland: Klippen, Fjorde, Hummer, Eisberge im Frühsommer und Wale fast die ganze Zeit.", es: "Cabo Bretón, la Isla del Príncipe Eduardo y Terranova: acantilados, fiordos, langosta, icebergs a principios de verano y ballenas casi todo el tiempo.",
    },
    intro: {
      en: 'Atlantic Canada is where the country faces Europe, and it has the weather and the conversation to prove it. You drive the Cabot Trail, take the ferry to Prince Edward Island, then fly to Newfoundland for Gros Morne and the long road east to St. John’s. People here will talk to you. Leave time for that.',
      fr: "Le Canada atlantique, c'est là où le pays regarde vers l'Europe, et la météo comme la conversation le confirment. Vous parcourez la piste Cabot, prenez le traversier pour l'Île-du-Prince-Édouard, puis vous volez vers Terre-Neuve pour le Gros-Morne et la longue route vers l'est jusqu'à St. John's. Ici, les gens vous parleront. Prévoyez du temps pour ça.", de: "Im atlantischen Kanada blickt das Land nach Europa, und Wetter und Gespräche beweisen es. Sie fahren den Cabot Trail, nehmen die Fähre nach Prince Edward Island und fliegen dann nach Neufundland, zum Gros Morne und auf der langen Straße nach Osten bis St. John’s. Die Menschen hier sprechen Sie an. Nehmen Sie sich Zeit dafür.", es: "El Canadá atlántico es donde el país mira a Europa, y el tiempo y la conversación lo demuestran. Recorrerá el Cabot Trail, tomará el ferry a la Isla del Príncipe Eduardo y luego volará a Terranova para ver Gros Morne y hacer la larga carretera hacia el este hasta St. John’s. Aquí la gente le hablará. Deje tiempo para ello.",
    },
    honestNote: {
      en: 'You cannot have the peak of everything at once. Icebergs are best from late May to June, whales from June to August, puffins from May to August, and the Cabot Trail colours in early October. Tell us what matters most and we will set the dates. Fog is common on the coast, and so is changing the plan because of it.',
      fr: "On ne peut pas tout avoir au meilleur moment en même temps. Les icebergs sont à leur apogée de fin mai à juin, les baleines de juin à août, les macareux de mai à août, et les couleurs de la piste Cabot début octobre. Dites-nous ce qui compte le plus et nous fixerons les dates. Le brouillard est fréquent sur la côte, tout comme les changements de programme qu'il impose.", de: "Man kann nicht von allem gleichzeitig den Höhepunkt haben. Eisberge sind von Ende Mai bis Juni am besten, Wale von Juni bis August, Papageitaucher von Mai bis August und die Farben am Cabot Trail Anfang Oktober. Sagen Sie uns, was Ihnen am wichtigsten ist, und wir legen die Termine fest. Nebel ist an der Küste häufig, und ebenso, deswegen den Plan zu ändern.", es: "No se puede tener lo mejor de todo a la vez. Los icebergs están en su mejor momento de finales de mayo a junio, las ballenas de junio a agosto, los frailecillos de mayo a agosto y los colores del Cabot Trail a principios de octubre. Díganos qué le importa más y fijaremos las fechas. La niebla es frecuente en la costa, y cambiar de plan por ella también.",
    },
    route: ['halifax', 'baddeck', 'charlottetown', 'gros-morne', 'st-johns'],
    itinerary: [
      {
        days: 'Days 1–2',
        placeId: 'halifax',
        title: { en: 'Halifax', fr: 'Halifax', de: "Halifax", es: "Halifax" },
        body: {
          en: 'A harbour city with a long naval history and a short walk between every good place. Eat seafood on the waterfront and take a morning drive to the granite coast at Peggy’s Cove before the coaches arrive.',
          fr: "Une ville portuaire à la longue histoire navale, où tous les bons endroits sont à deux pas. Fruits de mer sur le front de mer, puis une matinée sur la côte de granit de Peggy's Cove avant l'arrivée des autocars.", de: "Eine Hafenstadt mit langer Marinegeschichte und kurzen Wegen zwischen allen guten Adressen. Essen Sie Meeresfrüchte an der Uferpromenade und fahren Sie morgens an die Granitküste von Peggy’s Cove, bevor die Reisebusse kommen.", es: "Una ciudad portuaria con una larga historia naval y todos sus buenos rincones a un corto paseo. Coma marisco en el paseo marítimo y salga por la mañana hacia la costa de granito de Peggy’s Cove antes de que lleguen los autocares.",
        },
      },
      {
        days: 'Days 3–5',
        placeId: 'baddeck',
        title: { en: 'The Cabot Trail', fr: 'La piste Cabot', de: "Der Cabot Trail", es: "El Cabot Trail" },
        body: {
          en: 'Drive north to Cape Breton and base yourself in a cottage for three nights. The Cabot Trail is a 300-kilometre loop of highland plateau and sea cliffs; do it over two days, not one. Listen for fiddle music in the evenings, which is not hard.',
          fr: "Route vers le nord jusqu'au Cap-Breton, et trois nuits dans un cottage. La piste Cabot est une boucle de 300 kilomètres entre plateau des Hautes-Terres et falaises marines ; faites-la en deux jours, pas un. Le soir, tendez l'oreille pour le violon traditionnel, ce qui n'est pas difficile.", de: "Fahrt nach Norden nach Cape Breton und drei Nächte in einem Cottage. Der Cabot Trail ist eine 300 Kilometer lange Rundstrecke über Hochplateau und Meeresklippen; fahren Sie ihn an zwei Tagen, nicht an einem. Hören Sie abends auf Fiedelmusik, was nicht schwer ist.", es: "Conduzca hacia el norte hasta Cabo Bretón e instálese tres noches en una casita. El Cabot Trail es un circuito de 300 kilómetros entre meseta y acantilados; hágalo en dos días, no en uno. Por la tarde, busque música de violín, que no cuesta encontrar.",
        },
      },
      {
        days: 'Days 6–8',
        placeId: 'charlottetown',
        title: { en: 'Prince Edward Island', fr: 'Île-du-Prince-Édouard', de: "Prince Edward Island", es: "Isla del Príncipe Eduardo" },
        body: {
          en: 'A ferry across the Northumberland Strait to an island of red soil, potato fields and very good oysters. Stay in a farmhouse, cycle a quiet stretch of the old rail trail, and eat lobster with people who know how to crack it. The ferry runs roughly May to December.',
          fr: "Un traversier sur le détroit de Northumberland vers une île de terre rouge, de champs de pommes de terre et d'excellentes huîtres. Séjour dans une ferme, vélo sur une portion tranquille de l'ancienne voie ferrée, et homard en compagnie de gens qui savent le décortiquer. Le traversier circule à peu près de mai à décembre.", de: "Eine Fähre über die Northumberland Strait auf eine Insel aus roter Erde, Kartoffelfeldern und sehr guten Austern. Wohnen Sie in einem Farmhaus, radeln Sie ein ruhiges Stück des alten Bahntrassenwegs und essen Sie Hummer mit Menschen, die wissen, wie man ihn knackt. Die Fähre fährt etwa von Mai bis Dezember.", es: "Un ferry cruza el estrecho de Northumberland hasta una isla de tierra roja, campos de patatas y ostras excelentes. Alójese en una granja, recorra en bici un tramo tranquilo de la antigua vía verde y coma langosta con gente que sabe abrirla. El ferry funciona más o menos de mayo a diciembre.",
        },
      },
      {
        days: 'Days 9–10',
        placeId: 'gros-morne',
        title: { en: 'Gros Morne', fr: 'Le Gros-Morne', de: "Gros Morne", es: "Gros Morne" },
        body: {
          en: 'Fly to Deer Lake, usually via Halifax, and drive into Gros Morne. Take the boat into Western Brook Pond, a landlocked fiord with cliffs on both sides, and walk on the Tablelands, where the earth’s mantle sits at the surface. It looks like another planet and feels like a very good hike.',
          fr: "Vol vers Deer Lake, généralement via Halifax, puis route vers le Gros-Morne. Prenez le bateau sur l'étang Western Brook, un fjord enclavé entre deux murs de falaises, et marchez sur les Tablelands, où le manteau terrestre affleure à la surface. On dirait une autre planète, et c'est une très belle randonnée.", de: "Flug nach Deer Lake, meist über Halifax, und Fahrt in den Gros Morne. Fahren Sie mit dem Boot in den Western Brook Pond, einen vom Meer abgeschnittenen Fjord mit Klippen auf beiden Seiten, und wandern Sie über die Tablelands, wo der Erdmantel an der Oberfläche liegt. Es sieht aus wie ein anderer Planet und fühlt sich an wie eine sehr gute Wanderung.", es: "Vuelo a Deer Lake, normalmente vía Halifax, y en coche hasta Gros Morne. Entre en barco en Western Brook Pond, un fiordo cerrado con acantilados a ambos lados, y camine por las Tablelands, donde el manto terrestre aflora a la superficie. Parece otro planeta y se siente como una caminata excelente.",
        },
      },
      {
        days: 'Days 11–12',
        title: { en: 'Across the island, by way of iceberg alley', fr: 'À travers l’île, par l’allée des icebergs', de: "Quer über die Insel, durch die Eisberg-Allee", es: "A través de la isla, por el callejón de los icebergs" },
        body: {
          en: 'The drive to St. John’s is long, so we break it with a night on the north-east coast near Twillingate. In early summer, icebergs from Greenland drift past the headlands. Later in the season, whales take their place.',
          fr: "La route vers St. John's est longue : nous la coupons par une nuit sur la côte nord-est, près de Twillingate. En début d'été, des icebergs venus du Groenland défilent devant les caps. Plus tard dans la saison, les baleines prennent le relais.", de: "Die Fahrt nach St. John’s ist lang, deshalb unterbrechen wir sie mit einer Nacht an der Nordostküste bei Twillingate. Im Frühsommer treiben Eisberge aus Grönland an den Landspitzen vorbei. Später in der Saison nehmen Wale ihren Platz ein.", es: "El trayecto hasta St. John’s es largo, así que lo partimos con una noche en la costa nordeste, cerca de Twillingate. A principios de verano, icebergs de Groenlandia pasan a la deriva frente a los cabos. Más adelante, las ballenas ocupan su lugar.",
        },
      },
      {
        days: 'Days 13–14',
        placeId: 'st-johns',
        title: { en: 'St. John’s', fr: 'St. John’s', de: "St. John’s", es: "St. John’s" },
        body: {
          en: 'Coloured houses on steep streets, Signal Hill above the harbour, and Cape Spear, the most easterly point in North America. A boat out of Witless Bay takes you to puffins and, with luck, humpbacks. You fly home from here, a bit closer to Europe than when you started.',
          fr: "Maisons colorées dans des rues en pente, Signal Hill au-dessus du port, et le cap Spear, point le plus à l'est de l'Amérique du Nord. Un bateau au départ de Witless Bay vous emmène voir les macareux et, avec de la chance, les baleines à bosse. Vous repartez d'ici, un peu plus près de l'Europe qu'au départ.", de: "Bunte Häuser an steilen Straßen, Signal Hill über dem Hafen und Cape Spear, der östlichste Punkt Nordamerikas. Ein Boot ab Witless Bay bringt Sie zu Papageitauchern und mit etwas Glück zu Buckelwalen. Von hier fliegen Sie nach Hause, ein wenig näher an Europa als zu Beginn.", es: "Casas de colores en calles empinadas, Signal Hill sobre el puerto y Cape Spear, el punto más oriental de Norteamérica. Un barco desde Witless Bay le lleva a ver frailecillos y, con suerte, ballenas jorobadas. Desde aquí vuela a casa, un poco más cerca de Europa que al principio.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'Car hire with a route planned around the weather', fr: 'Location de voiture et itinéraire pensé en fonction de la météo', de: "Mietwagen mit einer ans Wetter angepassten Route", es: "Coche de alquiler con una ruta planificada según el tiempo" },
      { en: 'Ferry to Prince Edward Island and flight to Newfoundland', fr: 'Traversier vers l’Île-du-Prince-Édouard et vol vers Terre-Neuve', de: "Fähre nach Prince Edward Island und Flug nach Neufundland", es: "Ferry a la Isla del Príncipe Eduardo y vuelo a Terranova" },
      { en: 'Boat trip on Western Brook Pond', fr: 'Excursion en bateau sur l’étang Western Brook', de: "Bootsfahrt auf dem Western Brook Pond", es: "Excursión en barco por Western Brook Pond" },
      { en: 'Puffin and whale boat trip from Witless Bay', fr: 'Sortie en bateau aux macareux et aux baleines depuis Witless Bay', de: "Bootsfahrt zu Papageitauchern und Walen ab Witless Bay", es: "Salida en barco a ver frailecillos y ballenas desde Witless Bay" },
      { en: 'A private guide for a day in Gros Morne', fr: 'Un guide privé pour une journée au Gros-Morne', de: "Ein privater Guide für einen Tag im Gros Morne", es: "Un guía privado para un día en Gros Morne" },
    ],
    experienceIds: ['whales', 'private-guides'],
    stayIds: ['stay-cabot-cottages', 'stay-pei-farmhouse', 'stay-newfoundland-inn'],
    eventIds: ['icebergs-newfoundland', 'humpbacks-newfoundland', 'puffins-newfoundland', 'fall-colours'],
    regionIds: ['cabot-trail', 'prince-edward-island', 'newfoundland'],
    provinceIds: ['atlantic-canada'],
    images: {
      summer: {
        subject: 'Iceberg off a Newfoundland headland, June',
        tone: 'lake',
        alt: {
          en: 'A white iceberg floating off a rocky Newfoundland headland in early summer',
          fr: 'Un iceberg blanc dérivant au large d’un cap rocheux de Terre-Neuve, en début d’été', de: "Ein weißer Eisberg vor einer felsigen Landspitze Neufundlands im Frühsommer", es: "Un iceberg blanco frente a un cabo rocoso de Terranova a principios de verano",
        },
      },
      winter: {
        subject: 'Coloured houses of St. John’s under snow',
        tone: 'snow',
        alt: {
          en: 'Brightly painted row houses on a steep street in St. John’s covered in snow',
          fr: 'Maisons en rangée aux couleurs vives dans une rue en pente de St. John’s, sous la neige', de: "Bunt gestrichene Reihenhäuser an einer verschneiten steilen Straße in St. John’s", es: "Casas adosadas de colores vivos en una calle empinada de St. John’s cubierta de nieve",
        },
      },
    },
  },

  // ── 7 ─────────────────────────────────────────────────────────────────────
  {
    id: 'coast-to-coast',
    slug: 'coast-to-coast',
    frReview: 'needs-human-review',
    title: { en: 'Canada *Coast to Coast*', fr: 'Le Canada *d’un océan à l’autre*', de: "Kanada *von Küste zu Küste*", es: "Canadá *de costa a costa*" },
    days: 21,
    seasons: ['summer'],
    fromPerPersonCAD: 35700,
    summary: {
      en: 'Pacific to Atlantic in three weeks: Victoria, the Rockies by train, Toronto, Montréal, Québec City and Halifax. A big trip, honestly described.',
      fr: "Du Pacifique à l'Atlantique en trois semaines : Victoria, les Rocheuses en train, Toronto, Montréal, Québec et Halifax. Un grand voyage, décrit honnêtement.", de: "Vom Pazifik zum Atlantik in drei Wochen: Victoria, die Rockies mit dem Zug, Toronto, Montréal, Québec City und Halifax. Eine große Reise, ehrlich beschrieben.", es: "Del Pacífico al Atlántico en tres semanas: Victoria, las Rocosas en tren, Toronto, Montreal, Quebec y Halifax. Un gran viaje, contado con honestidad.",
    },
    intro: {
      en: 'Some people want to see the whole country once, end to end, and this is how we do it without wearing you out. You start by the Pacific on Vancouver Island and finish by the Atlantic in Halifax, crossing four time zones. The long middle is done by train where the scenery earns it and by air where it does not. You will see a lot. You will also spend real time getting between places, and we would rather tell you now.',
      fr: "Certains veulent voir tout le pays une fois, d'un bout à l'autre, et voici comment nous le faisons sans vous épuiser. Vous commencez au bord du Pacifique sur l'île de Vancouver et terminez au bord de l'Atlantique à Halifax, en traversant quatre fuseaux horaires. Le long milieu se fait en train là où le paysage le mérite, et en avion là où il ne le mérite pas. Vous verrez beaucoup. Vous passerez aussi un vrai temps à vous déplacer, et nous préférons vous le dire maintenant.", de: "Manche möchten das ganze Land einmal von einem Ende zum anderen sehen, und so machen wir das, ohne Sie zu erschöpfen. Sie beginnen am Pazifik auf Vancouver Island und enden am Atlantik in Halifax, über vier Zeitzonen hinweg. Die lange Mitte legen Sie mit dem Zug zurück, wo die Landschaft es verdient, und per Flugzeug, wo nicht. Sie werden viel sehen. Sie werden auch echte Zeit zwischen den Orten verbringen, und das sagen wir Ihnen lieber jetzt.", es: "Hay quien quiere ver el país entero una vez, de punta a punta, y así es como lo hacemos sin agotarle. Empieza junto al Pacífico, en la isla de Vancouver, y termina junto al Atlántico, en Halifax, cruzando cuatro husos horarios. El largo tramo central se hace en tren donde el paisaje lo merece y en avión donde no. Verá muchísimo. También pasará bastante tiempo yendo de un sitio a otro, y preferimos decírselo ahora.",
    },
    honestNote: {
      en: 'Vancouver to Halifax is further than London to Cairo. This trip has three flights (a floatplane, Calgary to Toronto, and Québec City to Halifax), two daylight days on the train, a four-hour mountain drive and two shorter train rides in the east. That adds up to roughly 40 hours in transit. Four of the 21 days are mostly travel, and two more are half travel. You also lose four hours to the clocks heading east. If you would rather unpack than pack, pick one coast and come back for the other.',
      fr: "De Vancouver à Halifax, la distance est plus grande que de Paris à Moscou, ou de Londres au Caire. Ce voyage compte trois vols (un hydravion, Calgary–Toronto et Québec–Halifax), deux journées entières de train, quatre heures de route de montagne et deux trajets en train plus courts à l'est. Au total, environ 40 heures de transport. Quatre des 21 jours sont surtout des jours de trajet, et deux autres le sont à moitié. Vous perdez aussi quatre heures en allant vers l'est. Si vous préférez défaire vos valises plutôt que les refaire, choisissez une côte et revenez pour l'autre.", de: "Von Vancouver nach Halifax ist es weiter als von London nach Kairo. Diese Reise umfasst drei Flüge (ein Wasserflugzeug, Calgary–Toronto und Québec City–Halifax), zwei Tage im Zug bei Tageslicht, eine vierstündige Bergfahrt und zwei kürzere Zugfahrten im Osten. Zusammen sind das rund 40 Stunden unterwegs. Vier der 21 Tage sind überwiegend Reisetage, zwei weitere zur Hälfte. Nach Osten verlieren Sie außerdem vier Stunden durch die Zeitumstellung. Wenn Sie lieber auspacken als packen, wählen Sie eine Küste und kommen Sie für die andere wieder.", es: "De Vancouver a Halifax hay más distancia que de Londres a El Cairo. Este viaje incluye tres vuelos (un hidroavión, Calgary–Toronto y Quebec–Halifax), dos días de tren con luz, cuatro horas de carretera de montaña y dos trayectos de tren más cortos en el este. En total, unas 40 horas de traslados. Cuatro de los 21 días son sobre todo de viaje y otros dos, de medio día. Además, hacia el este pierde cuatro horas con los cambios de hora. Si prefiere deshacer la maleta a hacerla, elija una costa y vuelva otro año por la otra.",
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
        title: { en: 'Victoria, by the Pacific', fr: 'Victoria, au bord du Pacifique', de: "Victoria, am Pazifik", es: "Victoria, junto al Pacífico" },
        body: {
          en: 'Start slowly in Victoria, at the southern tip of Vancouver Island. Gardens, a walkable harbour, and a boat out for orcas in the Salish Sea. Three nights here give your body time to work out which continent it is on.',
          fr: "Début en douceur à Victoria, à la pointe sud de l'île de Vancouver. Jardins, port à parcourir à pied et sortie en bateau pour les orques dans la mer des Salish. Trois nuits ici laissent à votre corps le temps de comprendre sur quel continent il se trouve.", de: "Ein ruhiger Start in Victoria an der Südspitze von Vancouver Island. Gärten, ein Hafen zum Flanieren und eine Bootsfahrt zu den Orcas in der Salish Sea. Drei Nächte hier geben Ihrem Körper Zeit herauszufinden, auf welchem Kontinent er ist.", es: "Empiece despacio en Victoria, en el extremo sur de la isla de Vancouver. Jardines, un puerto para pasear y una salida en barco a ver orcas en el mar de los Salish. Tres noches aquí le dan al cuerpo tiempo para averiguar en qué continente está.",
        },
      },
      {
        days: 'Days 4–5',
        placeId: 'vancouver',
        title: { en: 'Floatplane to Vancouver', fr: 'En hydravion jusqu’à Vancouver', de: "Mit dem Wasserflugzeug nach Vancouver", es: "En hidroavión a Vancouver" },
        body: {
          en: 'A 35-minute floatplane flight lands you in Vancouver harbour, which is the best way to arrive in any city. Two days for the seawall, the markets and the mountains on the north shore. Get an early night before the train.',
          fr: "Un vol de 35 minutes en hydravion vous dépose dans le port de Vancouver, la meilleure façon d'arriver dans une ville. Deux jours pour la digue, les marchés et les montagnes de la rive nord. Couchez-vous tôt avant le train.", de: "Ein 35-minütiger Flug mit dem Wasserflugzeug landet im Hafen von Vancouver, die schönste Art, in einer Stadt anzukommen. Zwei Tage für die Uferpromenade, die Märkte und die Berge an der North Shore. Gehen Sie vor dem Zug früh schlafen.", es: "Un vuelo de 35 minutos en hidroavión le deja en el puerto de Vancouver, la mejor manera de llegar a cualquier ciudad. Dos días para el malecón, los mercados y las montañas de la North Shore. Acuéstese pronto antes del tren.",
        },
      },
      {
        days: 'Days 6–7',
        title: { en: 'Two days on the train', fr: 'Deux jours de train', de: "Zwei Tage im Zug", es: "Dos días en tren" },
        body: {
          en: 'Two daylight days by rail from Vancouver to Jasper, with a hotel night on the way. Coastal forest, then dry canyons, then the Rockies rising up. These are travel days, but they are the kind people book trips for.',
          fr: "Deux journées de train de Vancouver à Jasper, avec une nuit à l'hôtel en chemin. Forêt côtière, puis canyons arides, puis les Rocheuses qui se dressent. Ce sont des jours de trajet, mais de ceux pour lesquels on réserve un voyage.", de: "Zwei Tage bei Tageslicht auf der Schiene von Vancouver nach Jasper, mit einer Hotelnacht unterwegs. Küstenwald, dann trockene Canyons, dann steigen die Rockies auf. Es sind Reisetage, aber von der Sorte, für die man Reisen bucht.", es: "Dos días de luz en tren de Vancouver a Jasper, con una noche de hotel por el camino. Bosque costero, luego cañones secos y después las Rocosas alzándose. Son días de viaje, pero de los que la gente reserva a propósito.",
        },
      },
      {
        days: 'Days 8–12',
        placeId: 'lake-louise',
        title: { en: 'Jasper, the Parkway and Lake Louise', fr: 'Jasper, la promenade et Lake Louise', de: "Jasper, der Parkway und Lake Louise", es: "Jasper, la Parkway y Lake Louise" },
        body: {
          en: 'Two nights in Jasper, then a full day down the Icefields Parkway with as many stops as you like. Finish with three nights between Lake Louise and Banff. This is the longest stay of the trip, on purpose.',
          fr: "Deux nuits à Jasper, puis une journée entière sur la promenade des Glaciers, avec autant d'arrêts que vous voulez. Puis trois nuits entre Lake Louise et Banff. C'est le séjour le plus long du voyage, et c'est voulu.", de: "Zwei Nächte in Jasper, dann ein ganzer Tag auf dem Icefields Parkway mit so vielen Stopps, wie Sie möchten. Zum Abschluss drei Nächte zwischen Lake Louise und Banff. Das ist mit Absicht der längste Aufenthalt der Reise.", es: "Dos noches en Jasper y luego un día entero por la Icefields Parkway con tantas paradas como quiera. Para terminar, tres noches entre Lake Louise y Banff. Es la estancia más larga del viaje, a propósito.",
        },
      },
      {
        days: 'Days 13–15',
        placeId: 'toronto',
        title: { en: 'Fly east to Toronto', fr: 'Vol vers l’est, jusqu’à Toronto', de: "Flug nach Osten, nach Toronto", es: "Vuelo al este, a Toronto" },
        body: {
          en: 'Drive to Calgary and fly four hours to Toronto, losing two hours on the way. Day 13 is a travel day and that is fine. Then two days in Canada’s biggest city, with an optional day trip to Niagara Falls.',
          fr: "Route jusqu'à Calgary et quatre heures de vol jusqu'à Toronto, en perdant deux heures au passage. Le jour 13 est un jour de trajet, et c'est très bien ainsi. Puis deux jours dans la plus grande ville du Canada, avec une excursion facultative aux chutes du Niagara.", de: "Fahrt nach Calgary und vier Stunden Flug nach Toronto, unterwegs verlieren Sie zwei Stunden. Tag 13 ist ein Reisetag, und das ist in Ordnung. Dann zwei Tage in Kanadas größter Stadt, mit optionalem Tagesausflug zu den Niagarafällen.", es: "Traslado a Calgary y cuatro horas de vuelo a Toronto, perdiendo dos horas por el camino. El día 13 es de viaje, y no pasa nada. Después, dos días en la mayor ciudad de Canadá, con excursión opcional a las cataratas del Niágara.",
        },
      },
      {
        days: 'Days 16–18',
        placeId: 'montreal',
        title: { en: 'Montréal and Québec City', fr: 'Montréal et Québec', de: "Montréal und Québec City", es: "Montreal y Quebec" },
        body: {
          en: 'A five-hour train to Montréal, then a day and a half of bagels and neighbourhoods. On day 18 another train takes you to Québec City for an evening inside the walls. The language changes, and so does the pace.',
          fr: "Cinq heures de train jusqu'à Montréal, puis une journée et demie de bagels et de quartiers. Le jour 18, un autre train vous emmène à Québec pour une soirée à l'intérieur des remparts. La langue change, et le rythme aussi.", de: "Fünf Stunden mit dem Zug nach Montréal, dann anderthalb Tage Bagels und Stadtviertel. An Tag 18 bringt Sie ein weiterer Zug nach Québec City, für einen Abend innerhalb der Mauern. Die Sprache wechselt und das Tempo auch.", es: "Cinco horas de tren hasta Montreal y luego día y medio de bagels y barrios. El día 18, otro tren le lleva a Quebec para pasar una tarde dentro de las murallas. Cambia el idioma, y también el ritmo.",
        },
      },
      {
        days: 'Days 19–21',
        placeId: 'halifax',
        title: { en: 'Halifax, by the Atlantic', fr: 'Halifax, au bord de l’Atlantique', de: "Halifax, am Atlantik", es: "Halifax, junto al Atlántico" },
        body: {
          en: 'A morning in Québec City, then a flight of three to four hours door to door to Halifax, usually via Montréal. Two last days on the Atlantic: the harbour, the granite coast at Peggy’s Cove and a lot of lobster. You have now crossed the country, and earned the long flight home.',
          fr: "Une matinée à Québec, puis trois à quatre heures de porte à porte jusqu'à Halifax, généralement via Montréal. Deux derniers jours au bord de l'Atlantique : le port, la côte de granit de Peggy's Cove et beaucoup de homard. Vous avez traversé le pays, et mérité le long vol du retour.", de: "Ein Vormittag in Québec City, dann von Tür zu Tür drei bis vier Stunden Flug nach Halifax, meist über Montréal. Zwei letzte Tage am Atlantik: der Hafen, die Granitküste bei Peggy’s Cove und sehr viel Hummer. Sie haben das Land nun durchquert und sich den langen Heimflug verdient.", es: "Una mañana en Quebec y luego un vuelo de tres a cuatro horas puerta a puerta hasta Halifax, normalmente vía Montreal. Dos últimos días en el Atlántico: el puerto, la costa de granito de Peggy’s Cove y mucha langosta. Ya ha cruzado el país y se ha ganado el largo vuelo a casa.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, plus a 24-hour contact on the road', fr: 'Votre propre spécialiste, et un contact joignable 24 h sur 24 pendant le voyage', de: "Ihr eigener Spezialist plus ein Kontakt rund um die Uhr unterwegs", es: "Su propio especialista, más un contacto disponible las 24 horas durante el viaje" },
      { en: 'Two days by train from Vancouver to Jasper, with a hotel night', fr: 'Deux jours de train de Vancouver à Jasper, avec une nuit d’hôtel', de: "Zwei Tage mit dem Zug von Vancouver nach Jasper, mit Hotelnacht", es: "Dos días en tren de Vancouver a Jasper, con una noche de hotel" },
      { en: 'First-class trains from Toronto to Montréal and Québec City', fr: 'Trains en première classe de Toronto à Montréal et à Québec', de: "Züge in der ersten Klasse von Toronto nach Montréal und Québec City", es: "Trenes en primera clase de Toronto a Montreal y Quebec" },
      { en: 'Floatplane from Victoria to Vancouver and both domestic flights', fr: 'Hydravion de Victoria à Vancouver et les deux vols intérieurs', de: "Wasserflugzeug von Victoria nach Vancouver und beide Inlandsflüge", es: "Hidroavión de Victoria a Vancouver y los dos vuelos nacionales" },
      { en: 'Private transfers at every change of city', fr: 'Transferts privés à chaque changement de ville', de: "Private Transfers bei jedem Ortswechsel", es: "Traslados privados en cada cambio de ciudad" },
      { en: 'Private guided days in the Rockies and Québec City', fr: 'Journées avec guide privé dans les Rocheuses et à Québec', de: "Privat geführte Tage in den Rockies und in Québec City", es: "Jornadas privadas con guía en las Rocosas y en Quebec" },
      { en: 'Luggage sent ahead where possible, so you carry a day bag', fr: 'Bagages envoyés à l’avance quand c’est possible : vous ne portez qu’un sac de jour', de: "Gepäck wird, wo möglich, vorausgeschickt, Sie tragen nur einen Tagesrucksack", es: "Equipaje enviado por delante cuando es posible, para que solo lleve una mochila de día" },
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
    images: {
      summer: {
        subject: 'Train curving along a river below the Rockies, summer',
        tone: 'forest',
        alt: {
          en: 'A passenger train curving beside a river through forest below the Rocky Mountains in summer',
          fr: 'Un train de voyageurs longeant une rivière à travers la forêt, au pied des Rocheuses, en été', de: "Ein Personenzug in einer Kurve am Fluss durch Wald unter den Rocky Mountains im Sommer", es: "Un tren de pasajeros tomando una curva junto a un río entre bosques bajo las Rocosas en verano",
        },
      },
      winter: {
        subject: 'Train crossing a snowy mountain valley',
        tone: 'snow',
        alt: {
          en: 'A passenger train crossing a snow-covered mountain valley under a grey winter sky',
          fr: 'Un train de voyageurs traversant une vallée de montagne enneigée sous un ciel d’hiver gris', de: "Ein Personenzug durchquert unter grauem Winterhimmel ein verschneites Bergtal", es: "Un tren de pasajeros cruzando un valle de montaña nevado bajo un cielo gris de invierno",
        },
      },
    },
  },

  // ── 8 ─────────────────────────────────────────────────────────────────────
  {
    id: 'family-summer-west',
    slug: 'family-summer-west',
    frReview: 'needs-human-review',
    title: { en: 'A *Family* Summer in the West', fr: 'Un été en *famille* dans l’Ouest', de: "Ein *Familien*sommer im Westen", es: "Un verano *en familia* en el oeste" },
    days: 12,
    seasons: ['summer'],
    isNew: true,
    fromPerPersonCAD: 14400,
    summary: {
      en: 'Vancouver, Whistler, the warm lakes of the Okanagan and the Rockies, paced for children and the adults who travel with them.',
      fr: "Vancouver, Whistler, les lacs chauds de l'Okanagan et les Rocheuses, au rythme des enfants et des adultes qui voyagent avec eux.", de: "Vancouver, Whistler, die warmen Seen des Okanagan und die Rockies, im Tempo von Kindern und den Erwachsenen, die mit ihnen reisen.", es: "Vancouver, Whistler, los lagos templados del Okanagan y las Rocosas, al ritmo de los niños y de los adultos que viajan con ellos.",
    },
    intro: {
      en: 'This trip is built around one rule: nobody sits in a car for more than half a day. You start by the sea in Vancouver, go up to Whistler for gondolas and lakes, spend three lazy days swimming and eating fruit in the Okanagan, then fly to the Rockies. Every stop has something for a seven-year-old and something for a teenager who would rather be elsewhere. The adults get good dinners.',
      fr: "Ce voyage repose sur une règle : personne ne passe plus d'une demi-journée en voiture. Vous commencez au bord de la mer à Vancouver, montez à Whistler pour les télécabines et les lacs, passez trois jours tranquilles à nager et à manger des fruits dans l'Okanagan, puis prenez l'avion pour les Rocheuses. Chaque étape a de quoi occuper un enfant de sept ans et un adolescent qui préférerait être ailleurs. Les adultes ont droit à de bons dîners.", de: "Diese Reise folgt einer Regel: Niemand sitzt länger als einen halben Tag im Auto. Sie beginnen am Meer in Vancouver, fahren hinauf nach Whistler zu Gondeln und Seen, verbringen drei faule Tage mit Baden und Obstessen im Okanagan und fliegen dann in die Rockies. Jeder Halt hat etwas für Siebenjährige und etwas für Teenager, die lieber woanders wären. Die Erwachsenen bekommen gute Abendessen.", es: "Este viaje se basa en una regla: nadie pasa más de medio día en el coche. Empieza junto al mar en Vancouver, sube a Whistler para góndolas y lagos, pasa tres días perezosos nadando y comiendo fruta en el Okanagan y después vuela a las Rocosas. Cada parada tiene algo para un niño de siete años y algo para un adolescente que preferiría estar en otra parte. Los adultos cenan bien.",
    },
    honestNote: {
      en: 'The drive from Whistler to the Okanagan takes about five hours. It is a good-looking road, but if your children rate car journeys the way most children do, we can fly you instead. Moraine Lake is closed to private cars and Lake Louise parking is limited; we book the shuttles. The rules change, so we check them every year. Prices shown are per adult; children cost less.',
      fr: "La route de Whistler à l'Okanagan prend environ cinq heures. Elle est belle, mais si vos enfants jugent les trajets en voiture comme la plupart des enfants, nous pouvons vous faire prendre l'avion. Le lac Moraine est fermé aux voitures particulières et le stationnement à Lake Louise est limité ; nous réservons les navettes. Les règles changent, nous les vérifions chaque année. Les prix indiqués sont par adulte ; les enfants paient moins.", de: "Die Fahrt von Whistler ins Okanagan dauert etwa fünf Stunden. Die Strecke ist schön, doch wenn Ihre Kinder Autofahrten so bewerten wie die meisten Kinder, können wir Sie stattdessen fliegen lassen. Der Moraine Lake ist für Privatautos gesperrt und das Parken am Lake Louise begrenzt; wir buchen die Shuttles. Die Regeln ändern sich, deshalb prüfen wir sie jedes Jahr. Angegebene Preise gelten pro Erwachsenem; Kinder kosten weniger.", es: "El trayecto de Whistler al Okanagan dura unas cinco horas. La carretera es bonita, pero si sus hijos valoran los viajes en coche como la mayoría de los niños, podemos hacerles volar. El lago Moraine está cerrado a los coches particulares y el aparcamiento de Lake Louise es limitado; reservamos las lanzaderas. Las normas cambian, así que las revisamos cada año. Los precios indicados son por adulto; los niños pagan menos.",
    },
    route: ['vancouver', 'whistler', 'kelowna', 'banff', 'lake-louise', 'calgary'],
    itinerary: [
      {
        days: 'Days 1–3',
        placeId: 'vancouver',
        title: { en: 'Vancouver: bikes, beaches and boats', fr: 'Vancouver : vélos, plages et bateaux', de: "Vancouver: Räder, Strände und Boote", es: "Vancouver: bicis, playas y barcos" },
        body: {
          en: 'Cycle the seawall around Stanley Park, swim at a city beach, and spend a morning at the Granville Island market, where the children choose lunch. One afternoon goes on a whale-watching boat. Jet lag is easier when there is sand.',
          fr: "Tour du parc Stanley à vélo par la digue, baignade sur une plage de la ville, et une matinée au marché de Granville Island, où les enfants choisissent le déjeuner. Un après-midi en bateau pour observer les baleines. Le décalage horaire passe mieux quand il y a du sable.", de: "Radeln Sie auf der Uferpromenade rund um den Stanley Park, baden Sie an einem Stadtstrand und verbringen Sie einen Vormittag auf dem Markt von Granville Island, wo die Kinder das Mittagessen aussuchen. Ein Nachmittag gehört einem Walbeobachtungsboot. Mit Sand ist der Jetlag leichter.", es: "Recorra en bici el malecón alrededor de Stanley Park, báñese en una playa urbana y pase una mañana en el mercado de Granville Island, donde los niños eligen el almuerzo. Una tarde es para salir en barco a ver ballenas. El jet lag se lleva mejor con arena.",
        },
      },
      {
        days: 'Days 4–5',
        placeId: 'whistler',
        title: { en: 'Whistler in summer', fr: 'Whistler en été', de: "Whistler im Sommer", es: "Whistler en verano" },
        body: {
          en: 'Two hours up the Sea-to-Sky highway to a ski town that is just as busy in July. Ride the gondola between two mountains, paddle on a warm lake, and try the beginner mountain-bike trails if anyone is brave. Older children can do a zipline course.',
          fr: "Deux heures par la route Sea-to-Sky jusqu'à une station de ski tout aussi animée en juillet. Télécabine entre deux sommets, pagaie sur un lac tiède, et pistes de vélo de montagne pour débutants si quelqu'un se sent courageux. Les plus grands peuvent faire un parcours de tyrolienne.", de: "Zwei Stunden auf dem Sea-to-Sky Highway hinauf in einen Skiort, der im Juli genauso belebt ist. Fahren Sie mit der Gondel zwischen zwei Bergen, paddeln Sie auf einem warmen See und probieren Sie die Mountainbike-Strecken für Anfänger, wenn jemand mutig ist. Ältere Kinder können einen Zipline-Parcours machen.", es: "Dos horas por la Sea-to-Sky Highway hasta una estación de esquí igual de animada en julio. Suba en la góndola que une dos montañas, reme en un lago templado y pruebe los senderos de bici de montaña para principiantes si alguien se atreve. Los niños mayores pueden hacer un circuito de tirolinas.",
        },
      },
      {
        days: 'Days 6–8',
        placeId: 'kelowna',
        title: { en: 'The Okanagan', fr: 'L’Okanagan', de: "Das Okanagan", es: "El Okanagan" },
        body: {
          en: 'Drive or fly to Kelowna and the warm, dry Okanagan valley, where the lakes are actually pleasant to swim in. Pick cherries or peaches depending on the month, rent a boat, and do very little. The adults can visit a winery while a sitter keeps the children busy at the beach.',
          fr: "Route ou vol jusqu'à Kelowna et la vallée chaude et sèche de l'Okanagan, où les lacs sont vraiment agréables pour se baigner. Cueillez des cerises ou des pêches selon le mois, louez un bateau, et ne faites pas grand-chose. Les adultes peuvent visiter un vignoble pendant qu'une gardienne occupe les enfants à la plage.", de: "Fahrt oder Flug nach Kelowna in das warme, trockene Okanagan-Tal, wo man in den Seen tatsächlich gern schwimmt. Pflücken Sie je nach Monat Kirschen oder Pfirsiche, mieten Sie ein Boot und tun Sie sehr wenig. Die Erwachsenen können ein Weingut besuchen, während ein Babysitter die Kinder am Strand beschäftigt.", es: "En coche o en avión a Kelowna y al valle cálido y seco del Okanagan, donde bañarse en los lagos es un placer. Recoja cerezas o melocotones según el mes, alquile un barco y haga muy poco. Los adultos pueden visitar una bodega mientras una canguro entretiene a los niños en la playa.",
        },
      },
      {
        days: 'Day 9',
        placeId: 'banff',
        title: { en: 'Fly to the Rockies', fr: 'Vol vers les Rocheuses', de: "Flug in die Rockies", es: "Vuelo a las Rocosas" },
        body: {
          en: 'A one-hour flight from Kelowna to Calgary, then 90 minutes west to Banff. Arrive in time for a swim in the hot pools and an early night. Tomorrow starts early, for good reasons.',
          fr: "Un vol d'une heure de Kelowna à Calgary, puis 90 minutes vers l'ouest jusqu'à Banff. Arrivée à temps pour une baignade dans les bassins d'eau chaude et un coucher tôt. Demain, on se lève tôt, pour de bonnes raisons.", de: "Ein einstündiger Flug von Kelowna nach Calgary, dann 90 Minuten nach Westen bis Banff. Ankunft rechtzeitig für ein Bad in den heißen Quellen und frühes Schlafengehen. Morgen geht es früh los, aus gutem Grund.", es: "Un vuelo de una hora de Kelowna a Calgary y luego 90 minutos hacia el oeste hasta Banff. Llegada a tiempo para un baño en las piscinas termales y acostarse pronto. Mañana se madruga, y por buenas razones.",
        },
      },
      {
        days: 'Days 10–11',
        placeId: 'lake-louise',
        title: { en: 'Banff and Lake Louise', fr: 'Banff et Lake Louise', de: "Banff und Lake Louise", es: "Banff y Lake Louise" },
        body: {
          en: 'A family guide takes you on short walks with big rewards: a canyon with catwalks, a lake you can canoe across, and a gondola to a ridge with marmots. Guides here are good at spotting elk and bears from a safe distance and explaining why that distance matters. Shuttles to Moraine Lake are booked in advance.',
          fr: "Un guide spécialiste des familles vous emmène sur de courtes balades qui valent largement l'effort : un canyon équipé de passerelles, un lac à traverser en canot, et une télécabine jusqu'à une crête peuplée de marmottes. Les guides d'ici repèrent bien les wapitis et les ours à bonne distance, et expliquent pourquoi cette distance compte. Les navettes vers le lac Moraine sont réservées à l'avance.", de: "Ein Familienguide nimmt Sie mit auf kurze Wanderungen mit großer Belohnung: ein Canyon mit Stegen, ein See, den man im Kanu überqueren kann, und eine Gondel zu einem Grat mit Murmeltieren. Die Guides hier entdecken Wapitis und Bären aus sicherer Entfernung und erklären, warum dieser Abstand wichtig ist. Die Shuttles zum Moraine Lake sind im Voraus gebucht.", es: "Un guía para familias les lleva por paseos cortos con grandes recompensas: un cañón con pasarelas, un lago que se cruza en canoa y una góndola hasta una cresta con marmotas. Los guías de aquí saben localizar uapitíes y osos a una distancia segura y explicar por qué esa distancia importa. Las lanzaderas al lago Moraine se reservan con antelación.",
        },
      },
      {
        days: 'Day 12',
        placeId: 'calgary',
        title: { en: 'Home from Calgary', fr: 'Retour depuis Calgary', de: "Heimreise ab Calgary", es: "Regreso desde Calgary" },
        body: {
          en: 'A 90-minute drive back to Calgary airport. If the flight is in the evening, there is time for one last lake. Expect at least one child to say it was the best holiday ever, and another to deny it.',
          fr: "Une heure et demie de route jusqu'à l'aéroport de Calgary. Si le vol est en soirée, il reste du temps pour un dernier lac. Attendez-vous à ce qu'un enfant dise que c'étaient les meilleures vacances de sa vie, et qu'un autre le nie.", de: "90 Minuten Fahrt zurück zum Flughafen Calgary. Geht der Flug am Abend, bleibt Zeit für einen letzten See. Rechnen Sie damit, dass mindestens ein Kind sagt, es sei der beste Urlaub aller Zeiten gewesen, und ein anderes es abstreitet.", es: "90 minutos en coche de vuelta al aeropuerto de Calgary. Si el vuelo es por la tarde, hay tiempo para un último lago. Cuente con que al menos un niño diga que han sido las mejores vacaciones de su vida, y otro lo niegue.",
        },
      },
    ],
    includes: [
      { en: 'Your own specialist, before and during the trip', fr: 'Votre propre spécialiste, avant et pendant le voyage', de: "Ihr eigener Spezialist, vor und während der Reise", es: "Su propio especialista, antes y durante el viaje" },
      { en: 'Family rooms or connecting rooms at every stay', fr: 'Chambres familiales ou communicantes à chaque étape', de: "Familienzimmer oder Verbindungszimmer in jeder Unterkunft", es: "Habitaciones familiares o comunicadas en cada alojamiento" },
      { en: 'A family guide for two days in the Rockies', fr: 'Un guide spécialiste des familles pendant deux jours dans les Rocheuses', de: "Ein Familienguide für zwei Tage in den Rockies", es: "Un guía para familias durante dos días en las Rocosas" },
      { en: 'Whale-watching boat from Vancouver', fr: 'Sortie aux baleines en bateau depuis Vancouver', de: "Walbeobachtungsboot ab Vancouver", es: "Barco de avistamiento de ballenas desde Vancouver" },
      { en: 'Flight from Kelowna to Calgary', fr: 'Vol de Kelowna à Calgary', de: "Flug von Kelowna nach Calgary", es: "Vuelo de Kelowna a Calgary" },
      { en: 'Child seats, park passes and lake shuttle bookings', fr: 'Sièges enfants, laissez-passer des parcs et réservations des navettes', de: "Kindersitze, Parkpässe und Shuttle-Buchungen zu den Seen", es: "Sillas infantiles, pases de los parques y reservas de lanzaderas a los lagos" },
    ],
    experienceIds: ['the-rockies', 'vancouver-and-the-islands', 'whales', 'private-guides'],
    stayIds: ['stay-vancouver-hotel', 'stay-whistler-chalet', 'stay-okanagan-winery', 'stay-lake-chalet'],
    eventIds: ['wildflowers-rockies', 'orcas-vancouver-island'],
    regionIds: ['vancouver', 'whistler', 'okanagan', 'banff-lake-louise', 'calgary'],
    provinceIds: ['british-columbia', 'alberta'],
    images: {
      summer: {
        subject: 'Family in a red canoe on a mountain lake, July',
        tone: 'lake',
        alt: {
          en: 'A family paddling a red canoe on a calm turquoise mountain lake in summer',
          fr: 'Une famille pagayant dans un canot rouge sur un lac de montagne turquoise et calme, en été', de: "Eine Familie paddelt im Sommer in einem roten Kanu auf einem ruhigen türkisfarbenen Bergsee", es: "Una familia remando en una canoa roja en un lago de montaña turquesa y tranquilo en verano",
        },
      },
      winter: {
        subject: 'Children skating on a frozen mountain lake',
        tone: 'snow',
        alt: {
          en: 'Children skating on a frozen lake below snowy mountains',
          fr: 'Des enfants patinant sur un lac gelé au pied de montagnes enneigées', de: "Kinder laufen Schlittschuh auf einem gefrorenen See unter verschneiten Bergen", es: "Niños patinando en un lago helado bajo montañas nevadas",
        },
      },
    },
  },
];
