import type { Experience, ExperienceGroupInfo } from './types';

export const experienceGroups: ExperienceGroupInfo[] = [
  {
    id: 'classics',
    slug: 'classics',
    frReview: 'needs-human-review',
    title: { en: 'The *Classics*', fr: 'Les *classiques*', de: "Die *Klassiker*", es: "Los *clásicos*" },
    intro: {
      en: 'The places on the postcards, and they are on the postcards for a reason. We show you how to see them early, slowly, and without the crowd standing in your photograph.',
      fr: "Les lieux des cartes postales, qui y figurent pour de bonnes raisons. Nous vous montrons comment les voir tôt, lentement, et sans la foule au milieu de votre photo.", de: "Die Orte auf den Postkarten, und sie sind nicht ohne Grund dort. Wir zeigen Ihnen, wie Sie sie früh, in Ruhe und ohne Menschenmenge im Bild erleben.", es: "Los lugares de las postales, y están en ellas por algo. Le mostramos cómo verlos temprano, sin prisa y sin una multitud en sus fotos.",
    },
    image: {
      subject: 'Lake Louise from the shore at first light',
      tone: 'lake',
      alt: {
        en: 'A calm turquoise lake below a glacier at first light',
        fr: 'Un lac turquoise et calme au pied d’un glacier, aux premières lueurs', de: "Ein ruhiger türkisfarbener See unter einem Gletscher im ersten Licht", es: "Un lago turquesa en calma bajo un glaciar con la primera luz del día",
      },
    },
  },
  {
    id: 'wild',
    slug: 'wild',
    frReview: 'needs-human-review',
    title: { en: '*Wild* Canada', fr: 'Le Canada *sauvage*', de: "*Wildes* Kanada", es: "El Canadá *salvaje*" },
    intro: {
      en: 'Bears, whales, northern lights and rivers that have never heard of a road. Nature keeps its own calendar, so we plan around it and tell you plainly what is likely and what is luck.',
      fr: "Ours, baleines, aurores boréales et rivières qui n'ont jamais entendu parler d'une route. La nature suit son propre calendrier : nous organisons tout en fonction de lui, et vous disons clairement ce qui est probable et ce qui relève de la chance.", de: "Bären, Wale, Polarlichter und Flüsse, die nie eine Straße gesehen haben. Die Natur folgt ihrem eigenen Kalender, also planen wir danach und sagen Ihnen offen, was wahrscheinlich ist und was Glück.", es: "Osos, ballenas, auroras boreales y ríos que nunca han visto una carretera. La naturaleza sigue su propio calendario, así que planificamos en torno a él y le decimos con franqueza qué es probable y qué es suerte.",
    },
    image: {
      subject: 'Humpback whale tail above grey water',
      tone: 'lake',
      alt: {
        en: 'The tail of a humpback whale lifting out of grey sea water',
        fr: 'La queue d’une baleine à bosse sortant d’une mer grise', de: "Die Fluke eines Buckelwals hebt sich aus grauem Meerwasser", es: "La cola de una ballena jorobada asomando sobre el mar gris",
      },
    },
  },
  {
    id: 'quietly-luxurious',
    slug: 'quietly-luxurious',
    frReview: 'needs-human-review',
    title: { en: 'Quietly *Luxurious*', fr: 'Le luxe, *discrètement*', de: "Leiser *Luxus*", es: "Lujo *discreto*" },
    intro: {
      en: 'In Canada, luxury mostly means space, quiet and someone who knows exactly where to take you. Small lodges, private guides and the odd floatplane, with no gold taps involved.',
      fr: "Au Canada, le luxe, c'est surtout de l'espace, du calme et quelqu'un qui sait exactement où vous emmener. Petits lodges, guides privés et un hydravion de temps en temps, sans robinets dorés.", de: "In Kanada bedeutet Luxus vor allem Raum, Stille und jemanden, der genau weiß, wohin er Sie bringt. Kleine Lodges, private Guides und hin und wieder ein Wasserflugzeug, ganz ohne goldene Wasserhähne.", es: "En Canadá, el lujo es sobre todo espacio, silencio y alguien que sabe exactamente adónde llevarle. Pequeños lodges, guías privados y alguna que otra avioneta, sin grifos de oro.",
    },
    image: {
      subject: 'Floatplane tied to a lodge dock at dusk',
      tone: 'forest',
      alt: {
        en: 'A floatplane moored at a wooden dock in front of a small lodge at dusk',
        fr: 'Un hydravion amarré à un quai en bois devant un petit lodge, au crépuscule', de: "Ein Wasserflugzeug an einem Holzsteg vor einer kleinen Lodge in der Dämmerung", es: "Un hidroavión amarrado a un muelle de madera frente a un pequeño lodge al anochecer",
      },
    },
  },
];

export const experiences: Experience[] = [
  // ── Classics ──────────────────────────────────────────────────────────────
  {
    id: 'the-rockies',
    slug: 'the-rockies',
    group: 'classics',
    frReview: 'needs-human-review',
    title: { en: 'The *Rockies*', fr: 'Les *Rocheuses*', de: "Die *Rocky Mountains*", es: "Las *Rocosas*" },
    summary: {
      en: 'Banff, Lake Louise, Jasper and the road between them. Famous, busy, and still worth it.',
      fr: "Banff, Lake Louise, Jasper et la route qui les relie. Célèbres, fréquentés, et ils en valent toujours la peine.", de: "Banff, Lake Louise, Jasper und die Straße dazwischen. Berühmt, viel besucht und trotzdem jede Reise wert.", es: "Banff, Lake Louise, Jasper y la carretera que los une. Famosos, concurridos y aun así imprescindibles.",
    },
    body: {
      en: 'The Canadian Rockies run along the Alberta and British Columbia border, and the best of them sit inside a chain of national parks. In summer, it is glacier lakes, high trails and wildflowers; in winter, skiing, frozen waterfalls and very quiet roads. The Icefields Parkway between Lake Louise and Jasper is one of the great drives anywhere. July and August are crowded, and the famous lakes now need shuttles or very early starts. We plan both. September is our favourite month, if you can choose.',
      fr: "Les Rocheuses canadiennes longent la frontière entre l'Alberta et la Colombie-Britannique, et leurs plus beaux paysages se trouvent dans une chaîne de parcs nationaux. En été, ce sont des lacs glaciaires, des sentiers d'altitude et des fleurs sauvages ; en hiver, le ski, les cascades gelées et des routes très calmes. La promenade des Glaciers, entre Lake Louise et Jasper, est l'une des plus belles routes au monde. Juillet et août sont bondés, et les lacs les plus connus demandent désormais une navette ou un départ très matinal. Nous organisons les deux. Septembre est notre mois préféré, si vous avez le choix.", de: "Die kanadischen Rocky Mountains ziehen sich entlang der Grenze zwischen Alberta und British Columbia, und ihr schönster Teil liegt in einer Kette von Nationalparks. Im Sommer locken Gletscherseen, hohe Wanderwege und Wildblumen, im Winter Skifahren, gefrorene Wasserfälle und sehr stille Straßen. Der Icefields Parkway zwischen Lake Louise und Jasper gehört zu den großen Panoramastraßen der Welt. Juli und August sind voll, und die berühmten Seen erreicht man inzwischen nur per Shuttle oder sehr früh am Morgen. Wir planen beides. Unser Lieblingsmonat ist der September, falls Sie die Wahl haben.", es: "Las Rocosas canadienses recorren la frontera entre Alberta y Columbia Británica, y lo mejor de ellas está dentro de una cadena de parques nacionales. En verano hay lagos glaciares, senderos de altura y flores silvestres; en invierno, esquí, cascadas heladas y carreteras muy tranquilas. La Icefields Parkway, entre Lake Louise y Jasper, es una de las grandes rutas por carretera del mundo. Julio y agosto están llenos, y a los lagos famosos ya solo se llega en lanzadera o madrugando mucho. Planificamos ambas cosas. Septiembre es nuestro mes favorito, si puede elegir.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Icefields Parkway with glaciers above the road, August',
      tone: 'granite',
      alt: {
        en: 'An empty mountain road running below glaciers and grey peaks in summer',
        fr: 'Une route de montagne déserte sous des glaciers et des sommets gris, en été', de: "Eine leere Bergstraße unter Gletschern und grauen Gipfeln im Sommer", es: "Una carretera de montaña vacía bajo glaciares y picos grises en verano",
      },
    },
    journeyIds: ['rockies-to-the-pacific', 'coast-to-coast', 'family-summer-west'],
    regionIds: ['banff-lake-louise', 'jasper', 'icefields-parkway', 'calgary'],
  },
  {
    id: 'coast-to-coast-by-rail',
    slug: 'coast-to-coast-by-rail',
    group: 'classics',
    frReview: 'needs-human-review',
    title: { en: 'Coast to Coast by *Rail*', fr: 'D’un océan à l’autre, en *train*', de: "Von Küste zu Küste mit der *Bahn*", es: "De costa a costa en *tren*" },
    summary: {
      en: 'Canada was stitched together by railway. Seeing part of it from a train window still makes sense.',
      fr: "Le Canada a été cousu par le chemin de fer. Le voir en partie depuis la fenêtre d'un train a toujours du sens.", de: "Kanada wurde von der Eisenbahn zusammengenäht. Einen Teil davon aus dem Zugfenster zu sehen, ergibt bis heute Sinn.", es: "Canadá se cosió a base de vías de tren. Ver una parte desde la ventanilla sigue teniendo todo el sentido.",
    },
    body: {
      en: 'The best rail stretch for scenery is Vancouver to Jasper or Banff, done in daylight over two days with a hotel night in between. That service runs from spring to autumn. A year-round cross-country train also links Vancouver and Toronto, taking about four days and sleeping on board. In the east, fast-ish trains connect Toronto, Ottawa, Montréal and Québec City. Trains here are scenic and comfortable, not quick, and freight sometimes has right of way. We plan for delays and pair the train with flights where the view is mostly prairie.',
      fr: "Le plus beau tronçon ferroviaire est celui de Vancouver à Jasper ou à Banff, fait de jour sur deux jours avec une nuit à l'hôtel entre les deux. Ce service circule du printemps à l'automne. Un train transcontinental relie aussi Vancouver à Toronto toute l'année, en environ quatre jours, avec nuits à bord. À l'est, des trains assez rapides relient Toronto, Ottawa, Montréal et Québec. Ici, les trains sont beaux et confortables, pas rapides, et les trains de marchandises ont parfois la priorité. Nous prévoyons les retards et associons le train à l'avion là où la vue est surtout faite de prairie.", de: "Die landschaftlich schönste Bahnstrecke führt von Vancouver nach Jasper oder Banff, bei Tageslicht über zwei Tage mit einer Hotelnacht dazwischen. Dieser Zug fährt von Frühling bis Herbst. Ganzjährig verbindet außerdem ein Transkontinentalzug Vancouver und Toronto, in rund vier Tagen mit Übernachtung an Bord. Im Osten verbinden recht flotte Züge Toronto, Ottawa, Montréal und Québec City. Die Züge hier sind malerisch und bequem, aber nicht schnell, und Güterzüge haben manchmal Vorfahrt. Wir planen Verspätungen ein und kombinieren die Bahn mit Flügen, wo draußen vor allem Prärie vorbeizieht.", es: "El tramo ferroviario más bonito es el de Vancouver a Jasper o Banff, de día y en dos jornadas con una noche de hotel entre medias. Ese tren circula de primavera a otoño. Todo el año, un tren transcontinental une además Vancouver y Toronto en unos cuatro días, durmiendo a bordo. En el este, trenes bastante rápidos conectan Toronto, Ottawa, Montreal y Quebec. Aquí los trenes son panorámicos y cómodos, no rápidos, y a veces los mercancías tienen preferencia. Contamos con los retrasos y combinamos el tren con vuelos donde por la ventana se ve sobre todo pradera.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Dome car window with a river canyon outside',
      tone: 'forest',
      alt: {
        en: 'View from a glass-roofed train carriage over a river canyon and forest',
        fr: 'Vue depuis une voiture de train à toit vitré sur un canyon et une forêt', de: "Blick aus einem Panoramawagen mit Glasdach über eine Flussschlucht und Wald", es: "Vista desde un vagón con techo de cristal sobre un cañón fluvial y el bosque",
      },
    },
    journeyIds: ['rockies-to-the-pacific', 'coast-to-coast'],
    regionIds: ['vancouver', 'jasper', 'toronto', 'montreal', 'quebec-city'],
  },
  {
    id: 'vancouver-and-the-islands',
    slug: 'vancouver-and-the-islands',
    group: 'classics',
    frReview: 'needs-human-review',
    title: { en: 'Vancouver and the *Islands*', fr: 'Vancouver et les *îles*', de: "Vancouver und die *Inseln*", es: "Vancouver y las *islas*" },
    summary: {
      en: 'A city between mountains and sea, and the islands you reach by ferry, floatplane or very small boat.',
      fr: "Une ville entre montagnes et mer, et les îles que l'on rejoint en traversier, en hydravion ou en tout petit bateau.", de: "Eine Stadt zwischen Bergen und Meer und die Inseln, die man per Fähre, Wasserflugzeug oder sehr kleinem Boot erreicht.", es: "Una ciudad entre montañas y mar, y las islas a las que se llega en ferry, hidroavión o barco muy pequeño.",
    },
    body: {
      en: 'Vancouver is a good city to start in: easy to land, easy to like, with forest and beaches inside the city limits. From there, floatplanes and ferries reach Victoria, the Gulf Islands and Tofino on the wild west coast of Vancouver Island. Further north, Haida Gwaii is a long way out and worth the effort. Summer is drier and best for boats and whales. Winter is wet and mild, and on the outer coast people come on purpose to watch the storms. It rains. We plan for that rather than pretend otherwise.',
      fr: "Vancouver est une bonne ville pour commencer : facile d'accès, facile à aimer, avec forêt et plages dans les limites de la ville. De là, hydravions et traversiers rejoignent Victoria, les îles Gulf et Tofino, sur la côte ouest et sauvage de l'île de Vancouver. Plus au nord, Haida Gwaii est loin, et vaut l'effort. L'été est plus sec et idéal pour les bateaux et les baleines. L'hiver est humide et doux, et sur la côte du large, on vient exprès pour regarder les tempêtes. Il pleut. Nous en tenons compte plutôt que de faire semblant.", de: "Vancouver ist ein guter Ausgangspunkt: leicht anzufliegen, leicht zu mögen, mit Wald und Stränden mitten in der Stadt. Von hier erreichen Wasserflugzeuge und Fähren Victoria, die Gulf Islands und Tofino an der wilden Westküste von Vancouver Island. Weiter nördlich liegt Haida Gwaii, weit draußen und die Mühe wert. Der Sommer ist trockener und am besten für Bootsfahrten und Wale. Der Winter ist nass und mild, und an der Außenküste kommen Menschen eigens, um die Stürme zu beobachten. Es regnet. Wir planen damit, statt so zu tun, als wäre es anders.", es: "Vancouver es un buen punto de partida: fácil para aterrizar, fácil de querer, con bosque y playas dentro de la ciudad. Desde allí, hidroaviones y ferris llegan a Victoria, las islas del Golfo y Tofino, en la costa oeste salvaje de la isla de Vancouver. Más al norte, Haida Gwaii queda lejos y merece el esfuerzo. El verano es más seco y es la mejor época para barcos y ballenas. El invierno es húmedo y suave, y en la costa exterior hay quien viene a propósito a ver las tormentas. Llueve. Lo tenemos en cuenta en lugar de fingir lo contrario.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Floatplane taking off from Vancouver harbour, mountains behind',
      tone: 'lake',
      alt: {
        en: 'A floatplane taking off from a city harbour with forested mountains behind',
        fr: 'Un hydravion décollant d’un port urbain, avec des montagnes boisées en arrière-plan', de: "Ein Wasserflugzeug startet in einem Stadthafen vor bewaldeten Bergen", es: "Un hidroavión despegando de un puerto urbano con montañas boscosas detrás",
      },
    },
    journeyIds: ['rockies-to-the-pacific', 'bears-whales-rainforest', 'coast-to-coast', 'family-summer-west'],
    regionIds: ['vancouver', 'tofino-vancouver-island', 'haida-gwaii'],
  },
  {
    id: 'quebec-old-cities',
    slug: 'quebec-old-cities',
    group: 'classics',
    frReview: 'needs-human-review',
    title: { en: 'Québec’s *Old* Cities', fr: 'Les vieilles *villes* du Québec', de: "Québecs *alte* Städte", es: "Las ciudades *antiguas* de Quebec" },
    summary: {
      en: 'Montréal and Québec City: French spoken, stone underfoot, and the best food in the country, some would say.',
      fr: "Montréal et Québec : on y parle français, on y marche sur la pierre, et certains diront qu'on y mange le mieux au pays.", de: "Montréal und Québec City: Hier spricht man Französisch, geht über Kopfsteinpflaster und isst, wie manche sagen, am besten im ganzen Land.", es: "Montreal y Quebec: se habla francés, se pisa piedra y, dicen algunos, se come mejor que en ningún otro lugar del país.",
    },
    body: {
      en: 'Montréal is the big, relaxed one, a city of neighbourhoods, markets and late dinners. Québec City is older and smaller, with stone walls, steep streets and a view over the St. Lawrence. They are about three hours apart by train. Both are as good in January as in July, just differently: summer is terraces and festivals, winter is snow, skating and the February carnival. French is the everyday language; English is widely understood, and a bonjour goes a long way.',
      fr: "Montréal, c'est la grande ville décontractée, faite de quartiers, de marchés et de dîners tardifs. Québec est plus ancienne et plus petite, avec ses remparts, ses rues escarpées et sa vue sur le Saint-Laurent. Environ trois heures de train les séparent. Les deux sont aussi agréables en janvier qu'en juillet, mais différemment : l'été, ce sont les terrasses et les festivals ; l'hiver, la neige, le patin et le carnaval de février. Le français est la langue de tous les jours ; l'anglais est largement compris, et un bonjour fait toujours plaisir.", de: "Montréal ist die große, entspannte der beiden, eine Stadt der Viertel, Märkte und späten Abendessen. Québec City ist älter und kleiner, mit Stadtmauern, steilen Gassen und Blick über den Sankt-Lorenz-Strom. Mit dem Zug liegen rund drei Stunden dazwischen. Beide sind im Januar so schön wie im Juli, nur anders: Im Sommer gibt es Terrassen und Festivals, im Winter Schnee, Eislaufen und den Karneval im Februar. Alltagssprache ist Französisch, Englisch wird weithin verstanden, und ein bonjour öffnet viele Türen.", es: "Montreal es la grande y relajada, una ciudad de barrios, mercados y cenas tardías. Quebec es más antigua y pequeña, con murallas, calles empinadas y vistas sobre el río San Lorenzo. Las separan unas tres horas en tren. Las dos son igual de buenas en enero que en julio, solo que de otra manera: en verano, terrazas y festivales; en invierno, nieve, patinaje y el carnaval de febrero. El francés es la lengua de todos los días; el inglés se entiende en casi todas partes, y un bonjour abre muchas puertas.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Stone houses and a steep lane in Old Québec, summer evening',
      tone: 'autumn',
      alt: {
        en: 'Old stone houses with colourful doors along a steep lane in Québec City',
        fr: 'Vieilles maisons de pierre aux portes colorées le long d’une ruelle en pente à Québec', de: "Alte Steinhäuser mit bunten Türen an einer steilen Gasse in Québec City", es: "Casas antiguas de piedra con puertas de colores en una calle empinada de Quebec",
      },
    },
    journeyIds: ['quebec-slowly', 'coast-to-coast'],
    regionIds: ['montreal', 'quebec-city', 'charlevoix'],
  },

  // ── Wild ──────────────────────────────────────────────────────────────────
  {
    id: 'bears',
    slug: 'bears',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: 'Grizzlies and *Black Bears*', fr: 'Grizzlis et *ours noirs*', de: "Grizzlys und *Schwarzbären*", es: "Grizzlis y *osos negros*" },
    summary: {
      en: 'Bears fishing for salmon on the rivers of the British Columbia coast, watched quietly and from a proper distance.',
      fr: "Des ours qui pêchent le saumon sur les rivières de la côte de la Colombie-Britannique, observés en silence et à bonne distance.", de: "Bären beim Lachsfang an den Flüssen der Küste von British Columbia, still und aus gebührendem Abstand beobachtet.", es: "Osos pescando salmón en los ríos de la costa de Columbia Británica, observados en silencio y a una distancia prudente.",
    },
    body: {
      en: 'The best bear viewing in Canada is on the central and northern coast of British Columbia. In late spring, grizzlies graze on the sedge flats of the inlets; from late August to early October, they come down to the rivers to fish for salmon. Black bears are easier to see and turn up on Vancouver Island beaches at low tide. You watch from boats, platforms or the riverbank with licensed local guides. Sightings are very likely in season, but bears are not on a timetable. The lodges are small and book up a year ahead.',
      fr: "Les meilleures observations d'ours au Canada se font sur la côte centrale et nord de la Colombie-Britannique. À la fin du printemps, les grizzlis broutent dans les prairies de carex au fond des anses ; de fin août à début octobre, ils descendent sur les rivières pour pêcher le saumon. Les ours noirs sont plus faciles à voir et apparaissent à marée basse sur les plages de l'île de Vancouver. On observe depuis un bateau, une plateforme ou la berge, avec des guides locaux agréés. En saison, les observations sont très probables, mais les ours n'ont pas d'horaire. Les lodges sont petits et se remplissent un an à l'avance.", de: "Die beste Bärenbeobachtung Kanadas findet an der mittleren und nördlichen Küste von British Columbia statt. Im späten Frühjahr grasen Grizzlys auf den Seggenwiesen der Meeresarme; von Ende August bis Anfang Oktober kommen sie an die Flüsse, um Lachse zu fangen. Schwarzbären sind leichter zu sehen und tauchen bei Ebbe an den Stränden von Vancouver Island auf. Sie beobachten vom Boot, von Plattformen oder vom Flussufer aus, mit lizenzierten einheimischen Guides. In der Saison sind Sichtungen sehr wahrscheinlich, doch Bären halten sich an keinen Fahrplan. Die Lodges sind klein und ein Jahr im Voraus ausgebucht.", es: "La mejor observación de osos de Canadá está en la costa central y norte de Columbia Británica. A finales de primavera, los grizzlis pastan en las praderas de juncias de las ensenadas; de finales de agosto a principios de octubre bajan a los ríos a pescar salmón. Los osos negros son más fáciles de ver y aparecen en las playas de la isla de Vancouver con la marea baja. Se observan desde barcos, plataformas o la orilla del río, con guías locales con licencia. En temporada es muy probable verlos, pero los osos no siguen horarios. Los lodges son pequeños y se llenan con un año de antelación.",
    },
    seasons: ['summer'],
    image: {
      subject: 'Grizzly mother and cub on a sedge meadow, June',
      tone: 'forest',
      alt: {
        en: 'A grizzly bear and her cub walking across a green meadow at the edge of an inlet',
        fr: 'Une femelle grizzli et son petit traversant une prairie verte au bord d’une anse', de: "Eine Grizzlybärin mit Jungem auf einer grünen Wiese am Rand eines Meeresarms", es: "Una osa grizzly y su cría cruzando un prado verde al borde de una ensenada",
      },
    },
    journeyIds: ['bears-whales-rainforest'],
    regionIds: ['great-bear-rainforest', 'tofino-vancouver-island'],
  },
  {
    id: 'whales',
    slug: 'whales',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: '*Whales*, on Both Coasts', fr: 'Les *baleines*, sur les deux côtes', de: "*Wale* an beiden Küsten", es: "*Ballenas* en las dos costas" },
    summary: {
      en: 'Orcas and humpbacks in the Pacific, belugas in the St. Lawrence, humpbacks and icebergs off Newfoundland.',
      fr: "Orques et baleines à bosse dans le Pacifique, bélugas dans le Saint-Laurent, baleines à bosse et icebergs au large de Terre-Neuve.", de: "Orcas und Buckelwale im Pazifik, Belugas im Sankt-Lorenz-Strom, Buckelwale und Eisberge vor Neufundland.", es: "Orcas y jorobadas en el Pacífico, belugas en el San Lorenzo, jorobadas e icebergs frente a Terranova.",
    },
    body: {
      en: 'Canada is one of the few countries where you can see whales in three oceans, though the Arctic one takes some commitment. On the Pacific side, orcas, humpbacks and grey whales feed off Vancouver Island from spring to autumn. At Tadoussac in Québec, minke, fin and the odd blue whale come up the St. Lawrence from about June to October, alongside resident belugas. Newfoundland’s humpbacks peak in July. Belugas gather in the Churchill River in July and August. We pick small operators who keep their distance and turn their engines off.',
      fr: "Le Canada est l'un des rares pays où l'on peut voir des baleines dans trois océans, même si l'Arctique demande un certain engagement. Côté Pacifique, orques, baleines à bosse et baleines grises se nourrissent au large de l'île de Vancouver du printemps à l'automne. À Tadoussac, au Québec, petits rorquals, rorquals communs et parfois le rorqual bleu remontent le Saint-Laurent à peu près de juin à octobre, aux côtés des bélugas résidents. Les baleines à bosse de Terre-Neuve sont à leur apogée en juillet. Les bélugas se rassemblent dans l'estuaire de la rivière Churchill en juillet et en août. Nous choisissons de petits opérateurs qui gardent leurs distances et coupent leurs moteurs.", de: "Kanada ist eines der wenigen Länder, in denen man Wale in drei Ozeanen sehen kann, auch wenn der arktische etwas Einsatz verlangt. Auf der Pazifikseite fressen Orcas, Buckelwale und Grauwale von Frühling bis Herbst vor Vancouver Island. In Tadoussac in Québec ziehen etwa von Juni bis Oktober Zwergwale, Finnwale und gelegentlich ein Blauwal den Sankt-Lorenz-Strom hinauf, neben den dort lebenden Belugas. Die Buckelwale Neufundlands haben im Juli Hochsaison. Im Juli und August sammeln sich Belugas im Churchill River. Wir wählen kleine Anbieter, die Abstand halten und den Motor abstellen.", es: "Canadá es uno de los pocos países donde se pueden ver ballenas en tres océanos, aunque el Ártico exige cierto empeño. En el Pacífico, orcas, jorobadas y ballenas grises se alimentan frente a la isla de Vancouver de primavera a otoño. En Tadoussac, en Quebec, rorcuales aliblancos, rorcuales comunes y alguna ballena azul remontan el San Lorenzo más o menos de junio a octubre, junto a las belugas residentes. Las jorobadas de Terranova alcanzan su punto álgido en julio. Las belugas se reúnen en el río Churchill en julio y agosto. Elegimos pequeños operadores que mantienen la distancia y apagan los motores.",
    },
    seasons: ['summer'],
    image: {
      subject: 'Belugas surfacing in a brown river estuary',
      tone: 'lake',
      alt: {
        en: 'Several white belugas surfacing in calm estuary water',
        fr: 'Plusieurs bélugas blancs faisant surface dans les eaux calmes d’un estuaire', de: "Mehrere weiße Belugas tauchen im ruhigen Wasser einer Flussmündung auf", es: "Varias belugas blancas saliendo a la superficie en las aguas tranquilas de un estuario",
      },
    },
    journeyIds: [
      'rockies-to-the-pacific',
      'bears-whales-rainforest',
      'quebec-slowly',
      'the-atlantic-edge',
      'family-summer-west',
    ],
    regionIds: ['tofino-vancouver-island', 'tadoussac', 'newfoundland', 'churchill'],
  },
  {
    id: 'polar-bears',
    slug: 'polar-bears',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: '*Polar* Bears', fr: 'Les ours *polaires*', de: "*Eis*bären", es: "Osos *polares*" },
    summary: {
      en: 'Churchill, Manitoba, in October and November, when the bears wait on the shore for the sea to freeze.',
      fr: "Churchill, au Manitoba, en octobre et en novembre, quand les ours attendent sur le rivage que la mer gèle.", de: "Churchill in Manitoba, im Oktober und November, wenn die Bären an der Küste warten, bis das Meer zufriert.", es: "Churchill, en Manitoba, en octubre y noviembre, cuando los osos esperan en la orilla a que el mar se congele.",
    },
    body: {
      en: 'Churchill sits on the western shore of Hudson Bay, and every autumn polar bears gather nearby waiting for the ice. The season is roughly mid-October to late November, about six weeks. You see them from tundra vehicles, which are high, heated and safe, or from a few remote lodges on the coast. There is no road; you fly from Winnipeg or take a two-day train. Weather can delay flights, so we always leave spare time. In July and August you can also see bears on the shoreline, along with belugas in the river.',
      fr: "Churchill se trouve sur la rive ouest de la baie d'Hudson, et chaque automne, les ours polaires s'y rassemblent en attendant la glace. La saison va à peu près de la mi-octobre à la fin novembre, soit environ six semaines. On les observe depuis des véhicules de toundra, hauts, chauffés et sûrs, ou depuis quelques lodges isolés sur la côte. Il n'y a pas de route : on prend l'avion depuis Winnipeg ou un train de deux jours. La météo peut retarder les vols, nous prévoyons donc toujours du temps en réserve. En juillet et en août, on peut aussi voir des ours sur le rivage, et des bélugas dans la rivière.", de: "Churchill liegt am Westufer der Hudson Bay, und jeden Herbst versammeln sich hier Eisbären und warten auf das Eis. Die Saison reicht etwa von Mitte Oktober bis Ende November, rund sechs Wochen. Sie sehen die Bären aus Tundra-Fahrzeugen, die hoch, beheizt und sicher sind, oder von einigen abgelegenen Lodges an der Küste. Eine Straße gibt es nicht; man fliegt ab Winnipeg oder nimmt den Zug, zwei Tage lang. Das Wetter kann Flüge verzögern, deshalb planen wir immer Reservezeit ein. Im Juli und August sieht man Bären auch an der Küste, dazu Belugas im Fluss.", es: "Churchill está en la orilla occidental de la bahía de Hudson, y cada otoño los osos polares se reúnen cerca esperando el hielo. La temporada va más o menos de mediados de octubre a finales de noviembre, unas seis semanas. Se ven desde vehículos de tundra, altos, con calefacción y seguros, o desde unos pocos lodges remotos en la costa. No hay carretera: se vuela desde Winnipeg o se toma un tren de dos días. El tiempo puede retrasar los vuelos, así que siempre dejamos margen. En julio y agosto también se ven osos en la costa, junto con belugas en el río.",
    },
    seasons: ['winter'],
    image: {
      subject: 'Two polar bears sparring on snowy shore ice',
      tone: 'snow',
      alt: {
        en: 'Two polar bears standing up and sparring on snow at the edge of Hudson Bay',
        fr: 'Deux ours polaires dressés qui se mesurent sur la neige au bord de la baie d’Hudson', de: "Zwei Eisbären stehen aufrecht und rangeln im Schnee am Rand der Hudson Bay", es: "Dos osos polares de pie peleando en la nieve al borde de la bahía de Hudson",
      },
    },
    journeyIds: ['polar-bear-season'],
    regionIds: ['churchill'],
  },
  {
    id: 'northern-lights',
    slug: 'northern-lights',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: 'The Northern *Lights*', fr: 'Les aurores *boréales*', de: "Die *Polarlichter*", es: "La *aurora* boreal" },
    summary: {
      en: 'Yes, you can see the northern lights. No, not from Toronto. Whitehorse, Yellowknife and Churchill, on long dark nights.',
      fr: "Oui, on peut voir les aurores boréales. Non, pas depuis Toronto. Whitehorse, Yellowknife et Churchill, par de longues nuits noires.", de: "Ja, Sie können Polarlichter sehen. Nein, nicht von Toronto aus. In Whitehorse, Yellowknife und Churchill, in langen dunklen Nächten.", es: "Sí, puede ver la aurora boreal. No, desde Toronto no. En Whitehorse, Yellowknife y Churchill, en noches largas y oscuras.",
    },
    body: {
      en: 'The aurora is strongest under the auroral oval, which runs across the Yukon, the Northwest Territories and northern Manitoba. Yellowknife has some of the clearest, most reliable skies; Whitehorse has the mountains. The season runs from late August to mid-April, as long as the nights are dark. Most of what you do is wait, warmly, so the cabin matters more than the itinerary. Clouds exist, so plan three nights at the very least. Your phone camera will see more colour than your eyes do, which is fine.',
      fr: "Les aurores sont les plus intenses sous l'ovale auroral, qui traverse le Yukon, les Territoires du Nord-Ouest et le nord du Manitoba. Yellowknife a l'un des ciels les plus clairs et les plus fiables ; Whitehorse a les montagnes. La saison va de fin août à mi-avril, tant que les nuits sont noires. L'essentiel consiste à attendre, au chaud : le chalet compte donc plus que l'itinéraire. Les nuages existent, prévoyez au moins trois nuits. L'appareil photo de votre téléphone verra plus de couleurs que vos yeux, et c'est très bien ainsi.", de: "Das Polarlicht ist unter dem Polarlichtoval am stärksten, das sich über Yukon, die Nordwest-Territorien und das nördliche Manitoba zieht. Yellowknife hat einige der klarsten und verlässlichsten Himmel, Whitehorse die Berge. Die Saison reicht von Ende August bis Mitte April, solange die Nächte dunkel sind. Meist warten Sie, und zwar warm, deshalb zählt die Hütte mehr als das Programm. Wolken gibt es, also planen Sie mindestens drei Nächte. Ihre Handykamera sieht mehr Farbe als Ihre Augen, und das ist in Ordnung.", es: "La aurora es más intensa bajo el óvalo auroral, que cruza el Yukón, los Territorios del Noroeste y el norte de Manitoba. Yellowknife tiene algunos de los cielos más despejados y fiables; Whitehorse tiene las montañas. La temporada va de finales de agosto a mediados de abril, mientras las noches sean oscuras. Casi todo consiste en esperar, bien abrigado, así que la cabaña importa más que el itinerario. Las nubes existen, así que cuente con tres noches como mínimo. La cámara del móvil verá más color que sus ojos, y no pasa nada.",
    },
    seasons: ['winter'],
    image: {
      subject: 'Green and violet aurora over a frozen lake',
      tone: 'night',
      alt: {
        en: 'Green and violet northern lights reflected on the snowy surface of a frozen lake',
        fr: 'Aurores boréales vertes et violettes au-dessus d’un lac gelé et enneigé', de: "Grüne und violette Polarlichter spiegeln sich auf einem verschneiten, gefrorenen See", es: "Aurora boreal verde y violeta reflejada sobre la superficie nevada de un lago helado",
      },
    },
    journeyIds: ['polar-bear-season', 'yukon-under-the-aurora'],
    regionIds: ['whitehorse', 'yellowknife', 'churchill'],
  },
  {
    id: 'canoe-country',
    slug: 'canoe-country',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: '*Canoe* Country', fr: 'Le pays du *canot*', de: "*Kanu*land", es: "Tierra de *canoas*" },
    summary: {
      en: 'Lakes joined by portage trails, loons at dusk, and a campfire you lit yourself. Or a lodge, if you prefer.',
      fr: "Des lacs reliés par des sentiers de portage, des huards au crépuscule, et un feu de camp allumé de vos mains. Ou un lodge, si vous préférez.", de: "Seen, verbunden durch Tragepfade, Seetaucher in der Dämmerung und ein Lagerfeuer, das Sie selbst entzündet haben. Oder eine Lodge, wenn Ihnen das lieber ist.", es: "Lagos unidos por senderos de porteo, colimbos al anochecer y una hoguera encendida por usted. O un lodge, si lo prefiere.",
    },
    body: {
      en: 'Canada has more lakes than anywhere else, and the canoe is still the best way to see them. Algonquin Park in Ontario, three hours north of Toronto, has some 2,000 kilometres of paddling routes; Muskoka has the same granite and water with lodges attached. For something serious, the Nahanni in the Northwest Territories is a multi-week river trip through deep canyons. We match you with guides who carry the canoe on the portages. Late May and June bring blackflies. July to September is kinder.',
      fr: "Le Canada compte plus de lacs que n'importe quel autre pays, et le canot reste la meilleure façon de les découvrir. Le parc Algonquin, en Ontario, à trois heures au nord de Toronto, offre quelque 2 000 kilomètres de parcours ; Muskoka a le même granit et la même eau, avec des lodges en plus. Pour quelque chose de sérieux, la Nahanni, dans les Territoires du Nord-Ouest, se descend en plusieurs semaines à travers de profonds canyons. Nous vous associons à des guides qui portent le canot lors des portages. Fin mai et juin amènent les mouches noires. De juillet à septembre, c'est plus clément.", de: "Kanada hat mehr Seen als jedes andere Land, und das Kanu ist noch immer die beste Art, sie zu erleben. Der Algonquin Park in Ontario, drei Stunden nördlich von Toronto, bietet rund 2.000 Kilometer Paddelrouten; Muskoka hat denselben Granit und dasselbe Wasser, mit Lodges dazu. Wer etwas Ernsthaftes sucht: Der Nahanni in den Nordwest-Territorien ist eine mehrwöchige Flussreise durch tiefe Canyons. Wir vermitteln Ihnen Guides, die das Kanu über die Portagen tragen. Ende Mai und im Juni kommen die Kriebelmücken. Juli bis September ist angenehmer.", es: "Canadá tiene más lagos que ningún otro país, y la canoa sigue siendo la mejor forma de verlos. El parque Algonquin, en Ontario, a tres horas al norte de Toronto, tiene unos 2.000 kilómetros de rutas en canoa; Muskoka tiene el mismo granito y la misma agua, con lodges incluidos. Para algo serio, el Nahanni, en los Territorios del Noroeste, es una travesía fluvial de varias semanas por cañones profundos. Le ponemos en manos de guías que cargan la canoa en los porteos. A finales de mayo y en junio llegan las moscas negras. De julio a septiembre es más amable.",
    },
    seasons: ['summer'],
    image: {
      subject: 'Canoe on a still lake with granite shore and pines at dusk',
      tone: 'birch',
      alt: {
        en: 'A canoe resting on a still lake beside a granite shore with pine trees at dusk',
        fr: 'Un canot sur un lac immobile, près d’une rive de granit bordée de pins, au crépuscule', de: "Ein Kanu auf einem stillen See an einem Granitufer mit Kiefern in der Dämmerung", es: "Una canoa en un lago en calma junto a una orilla de granito con pinos al anochecer",
      },
    },
    journeyIds: [],
    regionIds: ['algonquin', 'muskoka', 'nahanni'],
  },
  {
    id: 'heli-hiking',
    slug: 'heli-hiking',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: 'Heli-*Hiking*', fr: 'Randonnée *héliportée*', de: "Heli-*Hiking*", es: "Heli-*senderismo*" },
    summary: {
      en: 'A helicopter drops you on an alpine ridge, you walk, and it picks you up somewhere else. The climb is optional.',
      fr: "Un hélicoptère vous dépose sur une crête alpine, vous marchez, et il vient vous chercher ailleurs. La montée est facultative.", de: "Ein Hubschrauber setzt Sie auf einem alpinen Grat ab, Sie wandern, und er holt Sie woanders wieder ab. Der Aufstieg ist freiwillig.", es: "Un helicóptero le deja en una cresta alpina, usted camina y le recoge en otro lugar. La subida es opcional.",
    },
    body: {
      en: 'Heli-hiking skips the hardest part of mountain walking, the first thousand metres up through the forest. Most of it happens in the ranges of interior British Columbia, west of the Rockies, with day trips also possible from Whistler. A guide leads you across meadows, ridges and the edges of glaciers, at whatever pace your group likes. The season is July to early September, when the snow has melted from the high trails. Helicopters wait for clear weather, so we keep a spare day. National parks do not allow it, which is part of why it feels so quiet.',
      fr: "La randonnée héliportée supprime la partie la plus dure de la marche en montagne : les mille premiers mètres de montée à travers la forêt. Elle se pratique surtout dans les chaînes de l'intérieur de la Colombie-Britannique, à l'ouest des Rocheuses, et des sorties à la journée sont aussi possibles depuis Whistler. Un guide vous mène à travers prairies, crêtes et bords de glaciers, au rythme de votre groupe. La saison va de juillet à début septembre, quand la neige a fondu sur les sentiers d'altitude. Les hélicoptères attendent le beau temps : nous gardons donc une journée en réserve. Les parcs nationaux ne l'autorisent pas, et c'est en partie pour cela que c'est si calme.", de: "Beim Heli-Hiking entfällt der härteste Teil des Bergwanderns, die ersten tausend Höhenmeter durch den Wald. Meist findet es in den Gebirgen im Inneren von British Columbia westlich der Rockies statt; Tagesausflüge sind auch ab Whistler möglich. Ein Guide führt Sie über Wiesen, Grate und Gletscherränder, in dem Tempo, das Ihrer Gruppe gefällt. Die Saison dauert von Juli bis Anfang September, wenn der Schnee von den hohen Wegen geschmolzen ist. Hubschrauber warten auf klares Wetter, deshalb halten wir einen Reservetag frei. In Nationalparks ist es nicht erlaubt, und auch deshalb ist es so still.", es: "El heli-senderismo se salta lo más duro de caminar por la montaña: los primeros mil metros de subida por el bosque. Casi siempre se hace en las cordilleras del interior de Columbia Británica, al oeste de las Rocosas, y también hay excursiones de un día desde Whistler. Un guía le lleva por praderas, crestas y bordes de glaciares, al ritmo que prefiera su grupo. La temporada va de julio a principios de septiembre, cuando la nieve se ha fundido en los senderos altos. Los helicópteros esperan al buen tiempo, así que reservamos un día de margen. En los parques nacionales no está permitido, y en parte por eso se siente tan tranquilo.",
    },
    seasons: ['summer'],
    image: {
      subject: 'Hikers on an alpine ridge, helicopter below, wildflowers',
      tone: 'granite',
      alt: {
        en: 'A small group of hikers on an alpine ridge with wildflowers and a helicopter parked below',
        fr: 'Un petit groupe de randonneurs sur une crête alpine fleurie, un hélicoptère posé en contrebas', de: "Eine kleine Wandergruppe auf einem alpinen Grat mit Wildblumen, unten parkt ein Hubschrauber", es: "Un pequeño grupo de excursionistas en una cresta alpina con flores silvestres y un helicóptero aparcado más abajo",
      },
    },
    journeyIds: ['rockies-to-the-pacific'],
    regionIds: ['whistler'],
  },
  {
    id: 'fishing-lodges',
    slug: 'fishing-lodges',
    group: 'wild',
    frReview: 'needs-human-review',
    title: { en: 'Fishing *Lodges*', fr: 'Lodges de *pêche*', de: "Angel-*Lodges*", es: "Lodges de *pesca*" },
    summary: {
      en: 'Salmon on the Pacific coast, with a guide, a good boat and someone else cleaning the fish.',
      fr: "Le saumon sur la côte Pacifique, avec un guide, un bon bateau et quelqu'un d'autre pour vider le poisson.", de: "Lachs an der Pazifikküste, mit Guide, gutem Boot und jemandem, der den Fisch für Sie ausnimmt.", es: "Salmón en la costa del Pacífico, con guía, un buen barco y alguien que limpia el pescado por usted.",
    },
    body: {
      en: 'The fishing lodges of northern British Columbia and Haida Gwaii are some of the most remote places to stay in the country. You fly in, fish for salmon and halibut with a guide, and come back to a hot shower and dinner. Seasons are short, roughly June to early September, and set by the fish and the regulations, which change. Catch limits apply and many guests release most of what they catch. You do not need to be an expert. Several lodges are happy to take non-fishing partners out whale-watching instead.',
      fr: "Les lodges de pêche du nord de la Colombie-Britannique et de Haida Gwaii comptent parmi les hébergements les plus isolés du pays. On y arrive en avion, on pêche le saumon et le flétan avec un guide, et on rentre pour une douche chaude et un dîner. Les saisons sont courtes, à peu près de juin à début septembre, et dépendent des poissons et de la réglementation, qui change. Des limites de prise s'appliquent et beaucoup de clients relâchent l'essentiel de leurs prises. Pas besoin d'être expert. Plusieurs lodges emmènent volontiers les conjoints non pêcheurs observer les baleines à la place.", de: "Die Angel-Lodges im Norden von British Columbia und auf Haida Gwaii gehören zu den abgelegensten Unterkünften des Landes. Sie fliegen ein, angeln mit Guide auf Lachs und Heilbutt und kehren zu heißer Dusche und Abendessen zurück. Die Saisons sind kurz, etwa Juni bis Anfang September, und richten sich nach den Fischen und den Vorschriften, die sich ändern. Es gelten Fangbegrenzungen, und viele Gäste lassen das meiste wieder frei. Expertenwissen brauchen Sie nicht. Mehrere Lodges nehmen nicht angelnde Partner gern stattdessen zur Walbeobachtung mit.", es: "Los lodges de pesca del norte de Columbia Británica y de Haida Gwaii son de los alojamientos más remotos del país. Se llega en avioneta, se pesca salmón e hipogloso con guía y se vuelve a una ducha caliente y una buena cena. Las temporadas son cortas, más o menos de junio a principios de septiembre, y las marcan los peces y la normativa, que cambia. Hay cupos de captura y muchos huéspedes devuelven al agua casi todo lo que pescan. No hace falta ser un experto. Varios lodges llevan con gusto a los acompañantes que no pescan a ver ballenas.",
    },
    seasons: ['summer'],
    image: {
      subject: 'Small fishing boat in a misty channel, forested islands',
      tone: 'forest',
      alt: {
        en: 'A small fishing boat in a misty channel between forested islands',
        fr: 'Un petit bateau de pêche dans un chenal brumeux, entre des îles boisées', de: "Ein kleines Fischerboot in einem nebligen Kanal zwischen bewaldeten Inseln", es: "Un pequeño barco de pesca en un canal brumoso entre islas boscosas",
      },
    },
    journeyIds: [],
    regionIds: ['haida-gwaii', 'great-bear-rainforest'],
  },

  // ── Quietly luxurious ─────────────────────────────────────────────────────
  {
    id: 'remote-lodges',
    slug: 'remote-lodges',
    group: 'quietly-luxurious',
    frReview: 'needs-human-review',
    title: { en: 'Remote *Lodges*', fr: 'Lodges *isolés*', de: "Abgelegene *Lodges*", es: "Lodges *remotos*" },
    summary: {
      en: 'Places you reach by floatplane or boat, with a handful of rooms, a chef, and nothing else for a long way.',
      fr: "Des lieux accessibles en hydravion ou en bateau, avec une poignée de chambres, un chef, et rien d'autre à des kilomètres.", de: "Orte, die man per Wasserflugzeug oder Boot erreicht, mit einer Handvoll Zimmer, einem Koch und weit und breit sonst nichts.", es: "Lugares a los que se llega en hidroavión o barco, con un puñado de habitaciones, un chef y nada más en muchos kilómetros.",
    },
    body: {
      en: 'Some of the best places to stay in Canada have no road to them. Floating lodges on the British Columbia coast, tundra lodges near Churchill, and old fishing camps turned into something much nicer. Most have between six and twenty rooms, all meals included and guides on staff. Getting there is part of the stay, and occasionally part of the delay. They are expensive for a reason: everything arrives by air or boat. The best ones book a year or more ahead.',
      fr: "Certains des plus beaux hébergements du Canada n'ont aucune route pour y accéder. Lodges flottants sur la côte de la Colombie-Britannique, lodges de toundra près de Churchill, anciens camps de pêche devenus bien plus confortables. La plupart ont entre six et vingt chambres, repas compris, avec des guides sur place. Le trajet fait partie du séjour, et parfois du retard. Ils sont chers pour une raison : tout arrive par avion ou par bateau. Les meilleurs se réservent un an ou plus à l'avance.", de: "Einige der schönsten Unterkünfte Kanadas haben keine Zufahrtsstraße. Schwimmende Lodges an der Küste von British Columbia, Tundra-Lodges bei Churchill und alte Fischercamps, aus denen etwas viel Schöneres geworden ist. Die meisten haben sechs bis zwanzig Zimmer, alle Mahlzeiten inklusive und eigene Guides. Die Anreise ist Teil des Aufenthalts und gelegentlich auch Teil der Verspätung. Sie sind aus gutem Grund teuer: Alles kommt per Flugzeug oder Boot. Die besten sind ein Jahr oder länger im Voraus ausgebucht.", es: "Algunos de los mejores alojamientos de Canadá no tienen carretera. Lodges flotantes en la costa de Columbia Británica, lodges en la tundra cerca de Churchill y antiguos campamentos de pesca convertidos en algo mucho más agradable. La mayoría tiene entre seis y veinte habitaciones, todas las comidas incluidas y guías propios. Llegar forma parte de la estancia y, a veces, también del retraso. Son caros por una razón: todo llega en avión o en barco. Los mejores se reservan con un año o más de antelación.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Lodge lights reflected in a calm inlet at dusk',
      tone: 'forest',
      alt: {
        en: 'A small wooden lodge with lit windows reflected in a calm inlet at dusk',
        fr: 'Un petit lodge en bois aux fenêtres éclairées, reflété dans une anse calme au crépuscule', de: "Eine kleine Holzlodge mit erleuchteten Fenstern spiegelt sich in einem ruhigen Meeresarm in der Dämmerung", es: "Un pequeño lodge de madera con las ventanas iluminadas reflejado en una ensenada en calma al anochecer",
      },
    },
    journeyIds: ['bears-whales-rainforest', 'polar-bear-season'],
    regionIds: ['great-bear-rainforest', 'haida-gwaii', 'churchill', 'muskoka'],
  },
  {
    id: 'floatplanes-and-helicopters',
    slug: 'floatplanes-and-helicopters',
    group: 'quietly-luxurious',
    frReview: 'needs-human-review',
    title: { en: 'Floatplanes and *Helicopters*', fr: 'Hydravions et *hélicoptères*', de: "Wasserflugzeuge und *Hubschrauber*", es: "Hidroaviones y *helicópteros*" },
    summary: {
      en: 'In a country this size, the best view is often from a few hundred metres up. It is also sometimes the only way in.',
      fr: "Dans un pays de cette taille, la plus belle vue se trouve souvent à quelques centaines de mètres d'altitude. C'est aussi parfois le seul moyen d'arriver.", de: "In einem so großen Land hat man die beste Aussicht oft aus ein paar hundert Metern Höhe. Manchmal ist es auch der einzige Weg hinein.", es: "En un país de este tamaño, la mejor vista suele estar a unos cientos de metros de altura. A veces también es la única forma de llegar.",
    },
    body: {
      en: 'Floatplanes are ordinary transport on the British Columbia coast: they leave from Vancouver harbour and land at lodges, islands and inlets with no road. Helicopters take you to glaciers, alpine lakes and heli-hiking ridges. In the North, small planes fly over Kluane’s icefields and out to Virginia Falls in Nahanni. Floatplanes need open water, so they are mostly a summer thing; helicopters and ski-planes fly in winter. All of it depends on weather. We build in time, and we never push a pilot to go.',
      fr: "Sur la côte de la Colombie-Britannique, l'hydravion est un moyen de transport ordinaire : il part du port de Vancouver et se pose devant des lodges, des îles et des anses sans route. Les hélicoptères vous emmènent vers les glaciers, les lacs alpins et les crêtes de randonnée héliportée. Dans le Nord, de petits avions survolent les champs de glace de Kluane et vont jusqu'aux chutes Virginia, dans la Nahanni. Les hydravions ont besoin d'eau libre, ils volent donc surtout l'été ; hélicoptères et avions sur skis volent en hiver. Tout dépend de la météo. Nous prévoyons du temps, et nous ne poussons jamais un pilote à partir.", de: "Wasserflugzeuge sind an der Küste von British Columbia ein ganz normales Verkehrsmittel: Sie starten im Hafen von Vancouver und landen an Lodges, Inseln und Meeresarmen ohne Straße. Hubschrauber bringen Sie zu Gletschern, Bergseen und Heli-Hiking-Graten. Im Norden fliegen kleine Maschinen über die Eisfelder von Kluane und hinaus zu den Virginia Falls im Nahanni. Wasserflugzeuge brauchen offenes Wasser und sind daher vor allem etwas für den Sommer; Hubschrauber und Skiflugzeuge fliegen auch im Winter. Alles hängt vom Wetter ab. Wir planen Zeit ein und drängen nie einen Piloten zum Start.", es: "Los hidroaviones son un transporte corriente en la costa de Columbia Británica: salen del puerto de Vancouver y amerizan junto a lodges, islas y ensenadas sin carretera. Los helicópteros le llevan a glaciares, lagos alpinos y crestas de heli-senderismo. En el norte, avionetas sobrevuelan los campos de hielo de Kluane y llegan hasta las cataratas Virginia, en el Nahanni. Los hidroaviones necesitan aguas abiertas, así que son sobre todo cosa del verano; helicópteros y aviones con esquís vuelan en invierno. Todo depende del tiempo. Dejamos margen y nunca presionamos a un piloto para despegar.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Floatplane over a coastal inlet and forested islands',
      tone: 'lake',
      alt: {
        en: 'A small floatplane flying over a blue inlet and dark forested islands',
        fr: 'Un petit hydravion survolant une anse bleue et des îles couvertes de forêt sombre', de: "Ein kleines Wasserflugzeug über einem blauen Meeresarm und dunklen bewaldeten Inseln", es: "Una pequeña avioneta sobrevolando una ensenada azul e islas oscuras cubiertas de bosque",
      },
    },
    journeyIds: ['rockies-to-the-pacific', 'bears-whales-rainforest', 'coast-to-coast'],
    regionIds: ['vancouver', 'tofino-vancouver-island', 'great-bear-rainforest', 'kluane', 'nahanni'],
  },
  {
    id: 'private-guides',
    slug: 'private-guides',
    group: 'quietly-luxurious',
    frReview: 'needs-human-review',
    title: { en: 'Private *Guides*', fr: 'Guides *privés*', de: "Private *Guides*", es: "Guías *privados*" },
    summary: {
      en: 'Someone local, just for you, who knows which trail is quiet this week and where the bears were yesterday.',
      fr: "Quelqu'un du coin, rien que pour vous, qui sait quel sentier est calme cette semaine et où étaient les ours hier.", de: "Jemand von hier, nur für Sie, der weiß, welcher Weg diese Woche ruhig ist und wo die Bären gestern waren.", es: "Alguien de la zona, solo para usted, que sabe qué sendero está tranquilo esta semana y dónde estaban ayer los osos.",
    },
    body: {
      en: 'A good guide changes a trip more than a good hotel does. Ours are naturalists, historians, mountain guides and the occasional retired fisherman, all chosen because they are good company as well as good at their jobs. They adapt the day to the weather, your knees and your curiosity. In the national parks and on the water, they also hold the permits and the safety training. Indigenous-led tours are arranged with community partners, on their terms. Every journey we design includes at least one guided day.',
      fr: "Un bon guide change davantage un voyage qu'un bon hôtel. Les nôtres sont naturalistes, historiens, guides de montagne, et parfois pêcheurs à la retraite, tous choisis parce qu'ils sont de bonne compagnie autant que compétents. Ils adaptent la journée à la météo, à vos genoux et à votre curiosité. Dans les parcs nationaux et sur l'eau, ils détiennent aussi les permis et la formation à la sécurité. Les visites menées par des Autochtones sont organisées avec des partenaires communautaires, selon leurs conditions. Chaque voyage que nous concevons comprend au moins une journée guidée.", de: "Ein guter Guide verändert eine Reise mehr als ein gutes Hotel. Unsere sind Naturkundler, Historiker, Bergführer und gelegentlich ein pensionierter Fischer, alle ausgewählt, weil sie angenehme Gesellschaft sind und ihr Handwerk verstehen. Sie passen den Tag an das Wetter, Ihre Knie und Ihre Neugier an. In den Nationalparks und auf dem Wasser haben sie zudem die Genehmigungen und die Sicherheitsausbildung. Touren unter indigener Leitung organisieren wir mit Partnern aus den Gemeinschaften, zu deren Bedingungen. Jede Reise, die wir gestalten, enthält mindestens einen Tag mit Guide.", es: "Un buen guía cambia un viaje más que un buen hotel. Los nuestros son naturalistas, historiadores, guías de montaña y algún pescador jubilado, elegidos porque son buena compañía además de buenos en lo suyo. Adaptan el día al tiempo, a sus rodillas y a su curiosidad. En los parques nacionales y en el agua, además, tienen los permisos y la formación en seguridad. Los circuitos dirigidos por indígenas se organizan con socios de las comunidades, en sus términos. Cada viaje que diseñamos incluye al menos un día con guía.",
    },
    seasons: ['summer', 'winter'],
    image: {
      subject: 'Guide pointing out tracks on a forest trail, autumn',
      tone: 'autumn',
      alt: {
        en: 'A guide kneeling on a forest trail pointing out animal tracks to two travellers',
        fr: 'Un guide agenouillé sur un sentier forestier montrant des traces d’animaux à deux voyageurs', de: "Ein Guide kniet auf einem Waldweg und zeigt zwei Reisenden Tierspuren", es: "Un guía arrodillado en un sendero del bosque señalando huellas de animales a dos viajeros",
      },
    },
    journeyIds: [
      'rockies-to-the-pacific',
      'bears-whales-rainforest',
      'polar-bear-season',
      'yukon-under-the-aurora',
      'quebec-slowly',
      'the-atlantic-edge',
      'coast-to-coast',
      'family-summer-west',
    ],
    regionIds: ['banff-lake-louise', 'quebec-city', 'newfoundland', 'whitehorse'],
  },
  {
    id: 'heli-skiing',
    slug: 'heli-skiing',
    group: 'quietly-luxurious',
    frReview: 'needs-human-review',
    title: { en: 'Heli-*Skiing*', fr: 'Héliski', de: "Heli-*Skiing*", es: "Heli-*esquí*" },
    summary: {
      en: 'Deep, untracked powder in the mountains of British Columbia, reached by helicopter instead of a chairlift.',
      fr: "De la poudreuse profonde et vierge dans les montagnes de la Colombie-Britannique, atteinte en hélicoptère plutôt qu'en télésiège.", de: "Tiefer, unberührter Pulverschnee in den Bergen von British Columbia, per Hubschrauber statt Sessellift.", es: "Nieve polvo profunda y virgen en las montañas de Columbia Británica, con helicóptero en lugar de telesilla.",
    },
    body: {
      en: 'British Columbia has more heli-skiing terrain than anywhere else, and Canada more or less invented the sport in the 1960s. Most of it is in the interior ranges, with single days also possible from Whistler. The season runs from December to April, with the deepest snow usually in January and February. You need to be a confident off-piste skier, not an expert, and guides set the terrain to the group. Avalanche safety is taken very seriously, and some days the helicopter does not fly. Lodges hold a few groups at a time and book early.',
      fr: "La Colombie-Britannique possède plus de terrain d'héliski que n'importe quelle autre région, et le Canada a plus ou moins inventé ce sport dans les années 1960. La plupart se pratique dans les chaînes de l'intérieur, avec des sorties à la journée possibles depuis Whistler. La saison va de décembre à avril, avec la neige la plus profonde généralement en janvier et février. Il faut être un skieur hors-piste à l'aise, pas un expert, et les guides adaptent le terrain au groupe. La sécurité avalanche est prise très au sérieux, et certains jours, l'hélicoptère ne vole pas. Les lodges n'accueillent que quelques groupes à la fois et se réservent tôt.", de: "British Columbia hat mehr Heli-Skiing-Gelände als jede andere Region der Welt, und Kanada hat den Sport in den 1960er-Jahren mehr oder weniger erfunden. Meist geht es in die Gebirge im Landesinneren, einzelne Tage sind auch ab Whistler möglich. Die Saison reicht von Dezember bis April, mit dem tiefsten Schnee meist im Januar und Februar. Sie sollten sicher abseits der Piste fahren, müssen aber kein Profi sein; die Guides wählen das Gelände passend zur Gruppe. Lawinensicherheit wird sehr ernst genommen, und an manchen Tagen fliegt der Hubschrauber nicht. Die Lodges nehmen nur wenige Gruppen gleichzeitig auf und sind früh ausgebucht.", es: "Columbia Británica tiene más terreno de heli-esquí que ningún otro lugar, y Canadá más o menos inventó este deporte en los años sesenta. Casi todo está en las cordilleras del interior, con jornadas sueltas también desde Whistler. La temporada va de diciembre a abril, y la nieve más profunda suele caer en enero y febrero. Hay que esquiar fuera de pista con soltura, sin ser un experto, y los guías eligen el terreno según el grupo. La seguridad ante aludes se toma muy en serio, y algunos días el helicóptero no vuela. Los lodges acogen a pocos grupos a la vez y se llenan pronto.",
    },
    seasons: ['winter'],
    image: {
      subject: 'Skier in deep powder below a helicopter on a ridge',
      tone: 'snow',
      alt: {
        en: 'A skier turning through deep powder with a helicopter waiting on the ridge above',
        fr: 'Un skieur dans une poudreuse profonde, un hélicoptère posé sur la crête au-dessus', de: "Ein Skifahrer schwingt durch tiefen Pulverschnee, oben auf dem Grat wartet ein Hubschrauber", es: "Un esquiador girando en nieve polvo profunda con un helicóptero esperando en la cresta",
      },
    },
    journeyIds: [],
    regionIds: ['whistler'],
  },
  {
    id: 'winter-cabins',
    slug: 'winter-cabins',
    group: 'quietly-luxurious',
    frReview: 'needs-human-review',
    title: { en: 'Winter *Cabins*', fr: 'Chalets d’*hiver*', de: "Winter-*Hütten*", es: "Cabañas de *invierno*" },
    summary: {
      en: 'A woodstove, a lot of snow, and the sort of quiet you only get when it is minus 20 outside.',
      fr: "Un poêle à bois, beaucoup de neige, et ce genre de silence que l'on n'a que lorsqu'il fait moins 20 dehors.", de: "Ein Holzofen, sehr viel Schnee und jene Stille, die es nur gibt, wenn es draußen minus 20 Grad hat.", es: "Una estufa de leña, mucha nieve y ese silencio que solo existe cuando fuera hace veinte bajo cero.",
    },
    body: {
      en: 'Two countries for the price of one: summer Canada and winter Canada. Winter is when cabins come into their own, in the Yukon under the aurora, above the frozen St. Lawrence in Charlevoix, or on a lake in Muskoka. Days are for snowshoeing, cross-country skiing, dog-sledding and skating on real ice. Evenings are short on daylight and long on dinner. Our cabins have proper heating and plumbing; the rustic part is optional. Expect cold, dress for it, and you will be surprised how much you like it.',
      fr: "Deux pays pour le prix d'un : le Canada de l'été et celui de l'hiver. C'est en hiver que les chalets prennent tout leur sens, au Yukon sous les aurores, au-dessus du Saint-Laurent gelé dans Charlevoix, ou au bord d'un lac à Muskoka. Les journées se passent en raquettes, en ski de fond, en traîneau à chiens et à patiner sur de la vraie glace. Les soirées manquent de lumière mais pas de dîner. Nos chalets ont un vrai chauffage et une vraie plomberie ; le côté rustique est facultatif. Attendez-vous au froid, habillez-vous en conséquence, et vous serez surpris de l'aimer autant.", de: "Zwei Länder zum Preis von einem: Sommer-Kanada und Winter-Kanada. Im Winter kommen die Hütten zur Geltung, im Yukon unter dem Polarlicht, über dem gefrorenen Sankt-Lorenz-Strom in Charlevoix oder an einem See in Muskoka. Die Tage gehören dem Schneeschuhwandern, Langlauf, Hundeschlittenfahren und Eislaufen auf echtem Eis. Die Abende sind kurz an Tageslicht und lang beim Essen. Unsere Hütten haben richtige Heizung und richtige Bäder; das Rustikale ist freiwillig. Rechnen Sie mit Kälte, ziehen Sie sich entsprechend an, und Sie werden staunen, wie sehr Sie es mögen.", es: "Dos países por el precio de uno: el Canadá del verano y el Canadá del invierno. El invierno es la hora de las cabañas, en el Yukón bajo la aurora, sobre el San Lorenzo helado en Charlevoix o junto a un lago en Muskoka. Los días son para raquetas de nieve, esquí de fondo, trineos de perros y patinar sobre hielo de verdad. Las tardes tienen poca luz y cenas largas. Nuestras cabañas tienen buena calefacción y baños de verdad; lo rústico es opcional. Cuente con el frío, vístase para él y le sorprenderá lo mucho que le gusta.",
    },
    seasons: ['winter'],
    image: {
      subject: 'Log cabin with smoking chimney in deep snow, blue hour',
      tone: 'snow',
      alt: {
        en: 'A log cabin with smoke rising from the chimney, surrounded by deep snow at dusk',
        fr: 'Un chalet en rondins dont la cheminée fume, entouré de neige profonde au crépuscule', de: "Ein Blockhaus mit rauchendem Schornstein in tiefem Schnee in der Dämmerung", es: "Una cabaña de troncos con humo saliendo de la chimenea, rodeada de nieve profunda al anochecer",
      },
    },
    journeyIds: ['yukon-under-the-aurora', 'quebec-slowly'],
    regionIds: ['whitehorse', 'kluane', 'charlevoix', 'muskoka'],
  },
];
