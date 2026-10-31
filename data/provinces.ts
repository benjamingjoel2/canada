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
    name: { en: 'British Columbia', fr: 'Colombie-Britannique', de: "British Columbia", es: "Columbia Británica" },
    area: 'west',
    tagline: {
      en: 'Rainforest, ocean and mountains, often in the same view.',
      fr: 'Forêt pluviale, océan et montagnes, souvent dans le même paysage.', de: "Regenwald, Ozean und Berge, oft im selben Blick.", es: "Selva, océano y montañas, a menudo en la misma vista.",
    },
    intro: {
      en: 'British Columbia is mostly mountains, with a coastline that keeps folding back on itself. It rains on the coast, which is why everything is so green. The interior is drier, sunnier and full of orchards.',
      fr: 'La Colombie-Britannique, ce sont surtout des montagnes, avec un littoral qui n’en finit pas de se replier sur lui-même. Il pleut sur la côte, d’où tout ce vert. L’intérieur est plus sec, plus ensoleillé, et couvert de vergers.', de: "British Columbia besteht größtenteils aus Bergen, mit einer Küste, die sich immer wieder in sich selbst faltet. An der Küste regnet es, deshalb ist alles so grün. Das Landesinnere ist trockener, sonniger und voller Obstgärten.", es: "Columbia Británica es casi todo montaña, con una costa que no deja de plegarse sobre sí misma. En la costa llueve, y por eso todo es tan verde. El interior es más seco, más soleado y está lleno de huertos.",
    },
    pitch: {
      bestAt: {
        en: 'Bears, whales, rainforest and a very good city to start in. The coast is best from late spring to early autumn; the mountains do winter properly.',
        fr: 'Les ours, les baleines, la forêt pluviale et une très bonne ville pour commencer. La côte est à son mieux de la fin du printemps au début de l’automne ; les montagnes, elles, savent faire l’hiver.', de: "Bären, Wale, Regenwald und eine sehr gute Stadt für den Anfang. Die Küste ist vom späten Frühjahr bis zum Frühherbst am schönsten; die Berge können Winter richtig.", es: "Osos, ballenas, selva y una ciudad estupenda para empezar. La costa está en su mejor momento de finales de primavera a principios de otoño; las montañas saben lo que es un invierno de verdad.",
      },
      notFor: {
        en: 'Guaranteed sunshine on the coast. Bring a proper raincoat, and budget for floatplanes: the best places tend to be the ones roads don’t reach.',
        fr: 'Le soleil garanti sur la côte. Prévoyez un vrai imperméable, et un budget hydravion : les plus beaux endroits sont souvent ceux où la route ne va pas.', de: "Garantierten Sonnenschein an der Küste. Nehmen Sie eine richtige Regenjacke mit und planen Sie Wasserflugzeuge ein: Die besten Orte sind meist jene, die keine Straße erreicht.", es: "Sol garantizado en la costa. Traiga un buen chubasquero y cuente con los hidroaviones en el presupuesto: los mejores lugares suelen ser los que no tienen carretera.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'A floatplane over a green rainforest inlet', fr: 'Un hydravion au-dessus d’un bras de mer bordé de forêt pluviale', de: "Ein Wasserflugzeug über einem grünen Meeresarm im Regenwald", es: "Un hidroavión sobre una ensenada verde de selva lluviosa" },
        subject: 'Floatplane over a rainforest inlet, July',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'Snow-loaded firs above a mountain village', fr: 'Des sapins chargés de neige au-dessus d’un village de montagne', de: "Schneebeladene Tannen über einem Bergdorf", es: "Abetos cargados de nieve sobre un pueblo de montaña" },
        subject: 'Snow-loaded firs above Whistler, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Grizzlies on the salmon rivers of the Great Bear Rainforest, from late August', fr: 'Des grizzlis sur les rivières à saumons de la forêt du Grand Ours, dès la fin août', de: "Grizzlys an den Lachsflüssen des Great Bear Rainforest, ab Ende August", es: "Grizzlis en los ríos del salmón del Great Bear Rainforest, desde finales de agosto" },
        { en: 'Orcas and humpbacks off Vancouver Island', fr: 'Orques et baleines à bosse au large de l’île de Vancouver', de: "Orcas und Buckelwale vor Vancouver Island", es: "Orcas y jorobadas frente a la isla de Vancouver" },
        { en: 'Beach days in Tofino. Some of them dry.', fr: 'Des journées de plage à Tofino. Certaines au sec.', de: "Strandtage in Tofino. Manche davon trocken.", es: "Días de playa en Tofino. Algunos, secos." },
        { en: 'Wine and warm lake swimming in the Okanagan', fr: 'Du vin et des baignades en lac tiède dans l’Okanagan', de: "Wein und warmes Seebaden im Okanagan", es: "Vino y baños en lagos templados en el Okanagan" },
      ],
      winter: [
        { en: 'Whistler, one of the largest ski areas in North America', fr: 'Whistler, l’un des plus grands domaines skiables d’Amérique du Nord', de: "Whistler, eines der größten Skigebiete Nordamerikas", es: "Whistler, una de las mayores estaciones de esquí de Norteamérica" },
        { en: 'Storm watching in Tofino, November to February', fr: 'Observer les tempêtes à Tofino, de novembre à février', de: "Sturmbeobachtung in Tofino, November bis Februar", es: "Observación de temporales en Tofino, de noviembre a febrero" },
        { en: 'Ski runs above Vancouver, 30 minutes from downtown', fr: 'Des pistes au-dessus de Vancouver, à 30 minutes du centre', de: "Skipisten über Vancouver, 30 Minuten vom Zentrum", es: "Pistas de esquí sobre Vancouver, a 30 minutos del centro" },
      ],
    },
    distancePreset: ['vancouver', 'haida-gwaii'],
    regionIds: ['vancouver', 'whistler', 'tofino-vancouver-island', 'great-bear-rainforest', 'okanagan', 'haida-gwaii'],
    frReview: 'needs-human-review',
  },
  {
    id: 'alberta',
    slug: 'alberta',
    name: { en: 'Alberta', fr: 'Alberta', de: "Alberta", es: "Alberta" },
    area: 'west',
    tagline: {
      en: 'Mountains first. Everything else second.',
      fr: 'Les montagnes d’abord. Le reste ensuite.', de: "Zuerst die Berge. Alles andere danach.", es: "Primero las montañas. Todo lo demás, después.",
    },
    intro: {
      en: 'Alberta is prairie that runs straight into the Rockies. Banff and Jasper get the attention, and they earn it. Calgary is the usual way in.',
      fr: 'L’Alberta, c’est une prairie qui vient buter contre les Rocheuses. Banff et Jasper attirent tous les regards, et ils le méritent. On arrive en général par Calgary.', de: "Alberta ist Prärie, die direkt in die Rockies läuft. Banff und Jasper bekommen die Aufmerksamkeit, und sie verdienen sie. Calgary ist der übliche Einstieg.", es: "Alberta es pradera que choca de frente con las Rocosas. Banff y Jasper se llevan la atención, y se la ganan. Calgary es la puerta de entrada habitual.",
    },
    pitch: {
      bestAt: {
        en: 'Turquoise lakes, mountain driving, wildlife from the car window, and proper winter skiing.',
        fr: 'Les lacs turquoise, les routes de montagne, les animaux vus depuis la voiture, et du vrai ski l’hiver.', de: "Türkisfarbene Seen, Fahrten durch die Berge, Wildtiere vom Autofenster aus und richtiges Winterskifahren.", es: "Lagos turquesa, carreteras de montaña, fauna desde la ventanilla del coche y esquí de invierno de verdad.",
      },
      notFor: {
        en: 'Solitude in July and August. Lake Louise and Moraine Lake are busy, parking is scarce, and Moraine Lake is shuttle-only. September is quieter and just as good.',
        fr: 'La solitude en juillet et août. Lake Louise et le lac Moraine sont très fréquentés, le stationnement est rare, et on n’accède au lac Moraine qu’en navette. Septembre est plus calme, et tout aussi beau.', de: "Einsamkeit im Juli und August. Lake Louise und Moraine Lake sind voll, Parkplätze knapp, und zum Moraine Lake geht es nur per Shuttle. Der September ist ruhiger und genauso schön.", es: "Soledad en julio y agosto. Lake Louise y el lago Moraine están llenos, aparcar es difícil y al Moraine solo se llega en lanzadera. Septiembre es más tranquilo e igual de bonito.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'A turquoise lake below steep grey peaks', fr: 'Un lac turquoise sous des sommets gris et abrupts', de: "Ein türkisfarbener See unter steilen grauen Gipfeln", es: "Un lago turquesa bajo escarpados picos grises" },
        subject: 'Moraine Lake at dawn, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Skaters on a frozen lake below a glacier', fr: 'Des patineurs sur un lac gelé, au pied d’un glacier', de: "Eisläufer auf einem gefrorenen See unter einem Gletscher", es: "Patinadores en un lago helado bajo un glaciar" },
        subject: 'Skating on frozen Lake Louise, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Icefields Parkway: 232 km of glaciers and no billboards', fr: 'La promenade des Glaciers : 232 km de glaciers et aucun panneau publicitaire', de: "Der Icefields Parkway: 232 km Gletscher und keine Werbetafeln", es: "La Icefields Parkway: 232 km de glaciares y ni una valla publicitaria" },
        { en: 'Moraine Lake at sunrise, by shuttle', fr: 'Le lac Moraine au lever du soleil, en navette', de: "Moraine Lake bei Sonnenaufgang, per Shuttle", es: "El lago Moraine al amanecer, en lanzadera" },
        { en: 'Elk, bighorn sheep and, with luck, a bear at a safe distance', fr: 'Wapitis, mouflons et, avec un peu de chance, un ours à bonne distance', de: "Wapitis, Dickhornschafe und mit Glück ein Bär in sicherer Entfernung", es: "Uapitíes, carneros de las Rocosas y, con suerte, un oso a distancia segura" },
        { en: 'Golden larches for about two weeks in late September', fr: 'Les mélèzes dorés, pendant environ deux semaines fin septembre', de: "Goldene Lärchen, etwa zwei Wochen Ende September", es: "Alerces dorados durante unas dos semanas a finales de septiembre" },
      ],
      winter: [
        { en: 'Skiing at Lake Louise, Sunshine Village and Marmot Basin', fr: 'Le ski à Lake Louise, Sunshine Village et Marmot Basin', de: "Skifahren in Lake Louise, Sunshine Village und Marmot Basin", es: "Esquí en Lake Louise, Sunshine Village y Marmot Basin" },
        { en: 'Skating on frozen Lake Louise', fr: 'Patiner sur le lac Louise gelé', de: "Eislaufen auf dem gefrorenen Lake Louise", es: "Patinar sobre Lake Louise helado" },
        { en: 'Stargazing in Jasper’s Dark Sky Preserve', fr: 'Observer les étoiles dans la réserve de ciel étoilé de Jasper', de: "Sterne beobachten im Dark-Sky-Schutzgebiet von Jasper", es: "Observar las estrellas en la reserva de cielo oscuro de Jasper" },
        { en: 'Hot springs in Banff at minus twenty', fr: 'Les sources chaudes de Banff par moins vingt', de: "Heiße Quellen in Banff bei minus zwanzig Grad", es: "Aguas termales en Banff a veinte bajo cero" },
      ],
    },
    distancePreset: ['calgary', 'jasper'],
    regionIds: ['banff-lake-louise', 'jasper', 'icefields-parkway', 'calgary'],
    frReview: 'needs-human-review',
  },
  {
    id: 'yukon',
    slug: 'yukon',
    name: { en: 'Yukon', fr: 'Yukon', de: "Yukon", es: "Yukón" },
    area: 'north',
    tagline: {
      en: 'Big land, few people, long light.',
      fr: 'Un grand territoire, peu de monde, une longue lumière.', de: "Weites Land, wenige Menschen, langes Licht.", es: "Tierra inmensa, poca gente, luz larga.",
    },
    intro: {
      en: 'Yukon has fewer than 50,000 people and a great deal of room. Summer days barely end; winter nights are long and often green. Whitehorse is the hub, and Dawson City still looks a lot like 1898.',
      fr: 'Le Yukon compte moins de 50 000 habitants et énormément d’espace. L’été, les journées ne finissent presque pas ; l’hiver, les nuits sont longues et souvent vertes. Whitehorse sert de base, et Dawson City ressemble encore beaucoup à 1898.', de: "Im Yukon leben weniger als 50.000 Menschen auf sehr viel Raum. Sommertage enden kaum; Winternächte sind lang und oft grün. Whitehorse ist das Zentrum, und Dawson City sieht noch immer sehr nach 1898 aus.", es: "El Yukón tiene menos de 50.000 habitantes y muchísimo espacio. Los días de verano apenas terminan; las noches de invierno son largas y a menudo verdes. Whitehorse es el centro, y Dawson City sigue pareciéndose mucho a 1898.",
    },
    pitch: {
      bestAt: {
        en: 'Northern lights from late August to April, midnight sun in June, river paddling, and roads with almost no one on them.',
        fr: 'Les aurores boréales de fin août à avril, le soleil de minuit en juin, le canot sur les rivières, et des routes presque vides.', de: "Polarlichter von Ende August bis April, Mitternachtssonne im Juni, Paddeln auf Flüssen und Straßen, auf denen fast niemand unterwegs ist.", es: "Auroras de finales de agosto a abril, sol de medianoche en junio, ríos para remar y carreteras casi vacías.",
      },
      notFor: {
        en: 'Short trips. Distances are long, flights are limited, and winter means minus thirty. That’s rather the point, but pack for it.',
        fr: 'Les séjours courts. Les distances sont longues, les vols limités, et l’hiver, c’est moins trente. C’est un peu le principe, mais prévoyez les vêtements.', de: "Kurztrips. Die Entfernungen sind groß, Flüge begrenzt, und Winter heißt minus dreißig Grad. Genau darum geht es, aber packen Sie entsprechend.", es: "Viajes cortos. Las distancias son enormes, los vuelos escasos y el invierno significa treinta bajo cero. De eso se trata, pero haga la maleta en consecuencia.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'A canoe on a wide river under a late evening sun', fr: 'Un canot sur une large rivière, sous le soleil du soir', de: "Ein Kanu auf einem breiten Fluss unter später Abendsonne", es: "Una canoa en un ancho río bajo el sol de última hora de la tarde" },
        subject: 'Canoe on the Yukon River at 11 pm, June',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Green northern lights over a snowy cabin', fr: 'Des aurores vertes au-dessus d’une cabane enneigée', de: "Grüne Polarlichter über einer verschneiten Hütte", es: "Aurora boreal verde sobre una cabaña nevada" },
        subject: 'Aurora over a cabin outside Whitehorse, February',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Midnight sun around the June solstice', fr: 'Le soleil de minuit autour du solstice de juin', de: "Mitternachtssonne rund um die Junisonnenwende", es: "Sol de medianoche en torno al solsticio de junio" },
        { en: 'Paddling the Yukon River, for a day or two weeks', fr: 'Descendre le fleuve Yukon, pour une journée ou deux semaines', de: "Paddeln auf dem Yukon River, einen Tag oder zwei Wochen lang", es: "Remar por el río Yukón, durante un día o dos semanas" },
        { en: 'Kluane: Canada’s highest mountain and enormous icefields', fr: 'Kluane : la plus haute montagne du Canada et d’immenses champs de glace', de: "Kluane: Kanadas höchster Berg und gewaltige Eisfelder", es: "Kluane: la montaña más alta de Canadá y enormes campos de hielo" },
        { en: 'Dawson City’s boardwalks and gold rush storefronts', fr: 'Les trottoirs de bois et les façades de la ruée vers l’or à Dawson City', de: "Die Holzstege und Goldrausch-Fassaden von Dawson City", es: "Las aceras de madera y las fachadas de la fiebre del oro de Dawson City" },
      ],
      winter: [
        { en: 'Northern lights from a heated cabin', fr: 'Les aurores boréales depuis une cabane chauffée', de: "Polarlichter aus einer beheizten Hütte", es: "Auroras desde una cabaña con calefacción" },
        { en: 'Dog sledding on frozen rivers', fr: 'Le traîneau à chiens sur les rivières gelées', de: "Hundeschlitten auf gefrorenen Flüssen", es: "Trineos de perros sobre ríos helados" },
        { en: 'Hot springs at minus thirty, with frozen hair', fr: 'Les sources chaudes par moins trente, cheveux gelés compris', de: "Heiße Quellen bei minus dreißig Grad, mit gefrorenen Haaren", es: "Aguas termales a treinta bajo cero, con el pelo congelado" },
      ],
    },
    distancePreset: ['whitehorse', 'dawson-city'],
    regionIds: ['whitehorse', 'dawson-city', 'kluane'],
    frReview: 'needs-human-review',
  },
  {
    id: 'northwest-territories',
    slug: 'northwest-territories',
    name: { en: 'Northwest Territories', fr: 'Territoires du Nord-Ouest', de: "Nordwest-Territorien", es: "Territorios del Noroeste" },
    area: 'north',
    tagline: {
      en: 'Lakes, northern lights and a great deal of quiet.',
      fr: 'Des lacs, des aurores et beaucoup de silence.', de: "Seen, Polarlichter und sehr viel Stille.", es: "Lagos, auroras y muchísima calma.",
    },
    intro: {
      en: 'The Northwest Territories are bigger than France and Spain combined, with about 45,000 people. Yellowknife sits under the auroral oval, which is why the lights are so reliable. Nahanni is reachable only by air.',
      fr: 'Les Territoires du Nord-Ouest sont plus grands que la France et l’Espagne réunies, pour environ 45 000 habitants. Yellowknife se trouve sous l’ovale auroral, d’où des aurores si fiables. Nahanni n’est accessible que par avion.', de: "Die Nordwest-Territorien sind größer als Frankreich und Spanien zusammen, mit rund 45.000 Einwohnern. Yellowknife liegt unter dem Polarlichtoval, deshalb sind die Lichter so verlässlich. Nahanni ist nur aus der Luft erreichbar.", es: "Los Territorios del Noroeste son más grandes que Francia y España juntas, con unos 45.000 habitantes. Yellowknife está bajo el óvalo auroral, y por eso las auroras son tan fiables. Al Nahanni solo se llega por aire.",
    },
    pitch: {
      bestAt: {
        en: 'Northern lights, especially late August to September and mid-November to early April. Fly-in fishing, floatplanes and real wilderness.',
        fr: 'Les aurores boréales, surtout de fin août à septembre et de mi-novembre à début avril. La pêche en avion de brousse, les hydravions et la vraie nature sauvage.', de: "Polarlichter, besonders Ende August bis September und Mitte November bis Anfang April. Angeln mit Anreise per Flugzeug, Wasserflugzeuge und echte Wildnis.", es: "Auroras, sobre todo de finales de agosto a septiembre y de mediados de noviembre a principios de abril. Pesca con acceso en avioneta, hidroaviones y naturaleza salvaje de verdad.",
      },
      notFor: {
        en: 'A wide choice of hotels and restaurants. Yellowknife is a small capital, and Nahanni trips are expensive and fill a year ahead.',
        fr: 'Un large choix d’hôtels et de restaurants. Yellowknife est une petite capitale, et les séjours à Nahanni sont chers et complets un an à l’avance.', de: "Eine große Auswahl an Hotels und Restaurants. Yellowknife ist eine kleine Hauptstadt, und Nahanni-Reisen sind teuer und ein Jahr im Voraus ausgebucht.", es: "Mucha oferta de hoteles y restaurantes. Yellowknife es una capital pequeña, y los viajes al Nahanni son caros y se llenan con un año de antelación.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'A floatplane moored by colourful houseboats on a lake', fr: 'Un hydravion amarré près de maisons flottantes colorées', de: "Ein Wasserflugzeug neben bunten Hausbooten auf einem See", es: "Un hidroavión amarrado junto a casas flotantes de colores en un lago" },
        subject: 'Floatplane and houseboats on Great Slave Lake, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Northern lights over a frozen lake and spruce', fr: 'Des aurores boréales au-dessus d’un lac gelé et d’épinettes', de: "Polarlichter über einem gefrorenen See und Fichten", es: "Aurora boreal sobre un lago helado y abetos" },
        subject: 'Aurora over frozen Great Slave Lake, March',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Floatplanes from Yellowknife’s Old Town', fr: 'Les hydravions de la vieille ville de Yellowknife', de: "Wasserflugzeuge ab der Altstadt von Yellowknife", es: "Hidroaviones desde el casco antiguo de Yellowknife" },
        { en: 'Virginia Falls in Nahanni, about twice the height of Niagara', fr: 'Les chutes Virginia à Nahanni, environ deux fois la hauteur du Niagara', de: "Die Virginia Falls im Nahanni, etwa doppelt so hoch wie die Niagarafälle", es: "Las cataratas Virginia en el Nahanni, casi el doble de altas que el Niágara" },
        { en: 'Evening paddles on Great Slave Lake that never quite get dark', fr: 'Des sorties en canot le soir sur le Grand lac des Esclaves, sans jamais vraiment de nuit', de: "Abendliches Paddeln auf dem Großen Sklavensee, wenn es nie ganz dunkel wird", es: "Paseos en canoa al atardecer por el Gran Lago del Esclavo, sin que llegue a oscurecer" },
        { en: 'The aurora comes back in late August', fr: 'Les aurores reviennent fin août', de: "Das Polarlicht kehrt Ende August zurück", es: "La aurora vuelve a finales de agosto" },
      ],
      winter: [
        { en: 'Aurora viewing a short drive from town', fr: 'Les aurores à quelques minutes de route de la ville', de: "Polarlichtbeobachtung eine kurze Fahrt von der Stadt entfernt", es: "Observación de auroras a poca distancia en coche de la ciudad" },
        { en: 'Driving on ice roads, roughly January to March', fr: 'Rouler sur les routes de glace, environ de janvier à mars', de: "Fahren auf Eisstraßen, etwa Januar bis März", es: "Conducir por carreteras de hielo, más o menos de enero a marzo" },
        { en: 'Dog sledding on Great Slave Lake', fr: 'Le traîneau à chiens sur le Grand lac des Esclaves', de: "Hundeschlitten auf dem Großen Sklavensee", es: "Trineo de perros sobre el Gran Lago del Esclavo" },
      ],
    },
    distancePreset: ['yellowknife', 'fort-simpson'],
    regionIds: ['yellowknife', 'nahanni'],
    frReview: 'needs-human-review',
  },
  {
    id: 'manitoba',
    slug: 'manitoba',
    name: { en: 'Manitoba', fr: 'Manitoba', de: "Manitoba", es: "Manitoba" },
    area: 'north',
    tagline: {
      en: 'Polar bears, belugas, and a good city in between.',
      fr: 'Des ours polaires, des bélugas, et une bonne ville entre les deux.', de: "Eisbären, Belugas und eine gute Stadt dazwischen.", es: "Osos polares, belugas y una buena ciudad entre medias.",
    },
    intro: {
      en: 'Most people come to Manitoba for Churchill, on Hudson Bay, which you reach by plane or train. Winnipeg deserves more time than it gets. In between is a lot of lake and forest.',
      fr: 'La plupart des gens viennent au Manitoba pour Churchill, sur la baie d’Hudson, qu’on rejoint en avion ou en train. Winnipeg mérite plus de temps qu’on ne lui en accorde. Entre les deux, beaucoup de lacs et de forêt.', de: "Die meisten kommen nach Manitoba wegen Churchill an der Hudson Bay, das man per Flugzeug oder Zug erreicht. Winnipeg verdient mehr Zeit, als es bekommt. Dazwischen liegen sehr viel See und Wald.", es: "Casi todo el mundo viene a Manitoba por Churchill, en la bahía de Hudson, al que se llega en avión o en tren. Winnipeg merece más tiempo del que recibe. Entre medias, muchísimo lago y bosque.",
    },
    pitch: {
      bestAt: {
        en: 'Polar bears in October and November, beluga whales in July and August, and northern lights over Churchill.',
        fr: 'Les ours polaires en octobre et novembre, les bélugas en juillet et août, et les aurores boréales au-dessus de Churchill.', de: "Eisbären im Oktober und November, Belugawale im Juli und August und Polarlichter über Churchill.", es: "Osos polares en octubre y noviembre, belugas en julio y agosto y auroras sobre Churchill.",
      },
      notFor: {
        en: 'Spontaneity. Polar bear season is short and Churchill has few rooms, so trips book a year or more ahead.',
        fr: 'L’improvisation. La saison des ours polaires est courte et Churchill compte peu de chambres : on réserve un an à l’avance, parfois plus.', de: "Spontaneität. Die Eisbärsaison ist kurz und Churchill hat wenige Zimmer, Reisen werden also ein Jahr oder länger im Voraus gebucht.", es: "Improvisación. La temporada de osos polares es corta y Churchill tiene pocas habitaciones, así que los viajes se reservan con un año o más de antelación.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'White beluga whales beside a kayak', fr: 'Des bélugas blancs à côté d’un kayak', de: "Weiße Belugawale neben einem Kajak", es: "Belugas blancas junto a un kayak" },
        subject: 'Belugas beside a kayak in the Churchill River, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A polar bear walking along a snowy shoreline', fr: 'Un ours polaire marchant sur un rivage enneigé', de: "Ein Eisbär läuft an einer verschneiten Küste entlang", es: "Un oso polar caminando por una orilla nevada" },
        subject: 'Polar bear on the Hudson Bay shore, November',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Kayaking or snorkelling with belugas in the Churchill River', fr: 'Le kayak ou la plongée avec masque parmi les bélugas de la rivière Churchill', de: "Kajakfahren oder Schnorcheln mit Belugas im Churchill River", es: "Kayak o esnórquel con belugas en el río Churchill" },
        { en: 'Tundra wildflowers, and the odd polar bear on the coast', fr: 'Les fleurs de la toundra, et un ours polaire de temps en temps sur la côte', de: "Tundrablumen und hin und wieder ein Eisbär an der Küste", es: "Flores de la tundra y algún que otro oso polar en la costa" },
        { en: 'Winnipeg’s festivals and the Canadian Museum for Human Rights', fr: 'Les festivals de Winnipeg et le Musée canadien pour les droits de la personne', de: "Winnipegs Festivals und das Canadian Museum for Human Rights", es: "Los festivales de Winnipeg y el Museo Canadiense de los Derechos Humanos" },
      ],
      winter: [
        { en: 'Polar bears waiting for the sea ice, October to November', fr: 'Les ours polaires qui attendent la banquise, d’octobre à novembre', de: "Eisbären, die auf das Meereis warten, Oktober bis November", es: "Osos polares esperando la banquisa, de octubre a noviembre" },
        { en: 'Aurora over Churchill, best in February and March', fr: 'Les aurores au-dessus de Churchill, surtout en février et mars', de: "Polarlichter über Churchill, am besten im Februar und März", es: "Auroras sobre Churchill, mejor en febrero y marzo" },
        { en: 'Skating the river trail at The Forks in Winnipeg, when the ice allows', fr: 'Patiner sur le sentier de la rivière à La Fourche, à Winnipeg, quand la glace le permet', de: "Eislaufen auf dem Flusspfad bei The Forks in Winnipeg, wenn das Eis es erlaubt", es: "Patinar por el sendero del río en The Forks, Winnipeg, cuando el hielo lo permite" },
      ],
    },
    distancePreset: ['winnipeg', 'churchill'],
    regionIds: ['churchill', 'winnipeg'],
    frReview: 'needs-human-review',
  },
  {
    id: 'ontario',
    slug: 'ontario',
    name: { en: 'Ontario', fr: 'Ontario', de: "Ontario", es: "Ontario" },
    area: 'east',
    tagline: {
      en: 'Cities, lakes and a lot of granite.',
      fr: 'Des villes, des lacs et beaucoup de granit.', de: "Städte, Seen und sehr viel Granit.", es: "Ciudades, lagos y mucho granito.",
    },
    intro: {
      en: 'Ontario has Canada’s biggest city, its capital and Niagara Falls. Drive a few hours north and it turns into lakes, rock and pine. There are about 250,000 lakes, give or take.',
      fr: 'L’Ontario abrite la plus grande ville du Canada, sa capitale et les chutes du Niagara. Quelques heures de route vers le nord, et tout devient lacs, roche et pins. On compte environ 250 000 lacs, à quelques-uns près.', de: "Ontario hat Kanadas größte Stadt, seine Hauptstadt und die Niagarafälle. Ein paar Stunden nach Norden, und es wird zu Seen, Fels und Kiefern. Es gibt etwa 250.000 Seen, mehr oder weniger.", es: "Ontario tiene la mayor ciudad de Canadá, su capital y las cataratas del Niágara. Unas horas al norte, se convierte en lagos, roca y pinos. Hay unos 250.000 lagos, arriba o abajo.",
    },
    pitch: {
      bestAt: {
        en: 'Toronto’s food, Niagara, canoe trips in Algonquin, cottage country, and autumn colour from late September to mid-October.',
        fr: 'La cuisine de Toronto, le Niagara, le canot dans le parc Algonquin, la région des chalets, et les couleurs d’automne de fin septembre à mi-octobre.', de: "Torontos Küche, Niagara, Kanutouren im Algonquin, Ferienhausland und Herbstfarben von Ende September bis Mitte Oktober.", es: "La gastronomía de Toronto, el Niágara, rutas en canoa por Algonquin, la tierra de casas de campo y los colores de otoño de finales de septiembre a mediados de octubre.",
      },
      notFor: {
        en: 'Mountains. Ontario doesn’t have the kind you’re picturing. Nor northern lights, unless you go a very long way north.',
        fr: 'Les montagnes. L’Ontario n’a pas celles que vous imaginez. Ni les aurores boréales, à moins de monter très loin vers le nord.', de: "Berge. Ontario hat nicht die Art, an die Sie denken. Auch keine Polarlichter, es sei denn, Sie fahren sehr weit nach Norden.", es: "Montañas. Ontario no tiene las que está imaginando. Ni auroras, a menos que se vaya muy, muy al norte.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'A red canoe on a still lake edged with pine and granite', fr: 'Un canot rouge sur un lac calme bordé de pins et de granit', de: "Ein rotes Kanu auf einem stillen See, gesäumt von Kiefern und Granit", es: "Una canoa roja en un lago en calma bordeado de pinos y granito" },
        subject: 'Red canoe on a still Algonquin lake at dawn',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'Skaters on a long frozen canal in a city', fr: 'Des patineurs sur un long canal gelé en ville', de: "Eisläufer auf einem langen gefrorenen Kanal in einer Stadt", es: "Patinadores en un largo canal helado en una ciudad" },
        subject: 'Skaters on the Rideau Canal, Ottawa, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Canoeing and loon calls in Algonquin', fr: 'Le canot et le chant des plongeons huards dans le parc Algonquin', de: "Kanufahren und Seetaucherrufe im Algonquin", es: "Canoa y cantos de colimbo en Algonquin" },
        { en: 'Lakes, docks and old steamships in Muskoka', fr: 'Les lacs, les pontons et les vieux bateaux à vapeur de Muskoka', de: "Seen, Stege und alte Dampfschiffe in Muskoka", es: "Lagos, embarcaderos y viejos barcos de vapor en Muskoka" },
        { en: 'Niagara Falls by boat, then the wineries nearby', fr: 'Les chutes du Niagara en bateau, puis les vignobles voisins', de: "Die Niagarafälle per Boot, dann die Weingüter in der Nähe", es: "Las cataratas del Niágara en barco y luego las bodegas cercanas" },
        { en: 'Toronto’s neighbourhoods, one meal at a time', fr: 'Les quartiers de Toronto, un repas à la fois', de: "Torontos Viertel, eine Mahlzeit nach der anderen", es: "Los barrios de Toronto, una comida tras otra" },
      ],
      winter: [
        { en: 'Skating the Rideau Canal in Ottawa, in the years it freezes well', fr: 'Patiner sur le canal Rideau à Ottawa, les années où il gèle bien', de: "Eislaufen auf dem Rideau-Kanal in Ottawa, in Jahren, in denen er gut zufriert", es: "Patinar en el canal Rideau de Ottawa, los años en que se congela bien" },
        { en: 'Snowshoeing and dog sledding around Algonquin', fr: 'La raquette et le traîneau à chiens autour du parc Algonquin', de: "Schneeschuhwandern und Hundeschlitten rund um den Algonquin", es: "Raquetas y trineos de perros en los alrededores de Algonquin" },
        { en: 'Icewine in Niagara, made from grapes picked frozen', fr: 'Le vin de glace du Niagara, fait de raisins vendangés gelés', de: "Eiswein in Niagara, aus gefroren gelesenen Trauben", es: "Vino de hielo en el Niágara, de uvas vendimiadas congeladas" },
      ],
    },
    distancePreset: ['niagara-falls', 'ottawa'],
    regionIds: ['toronto', 'niagara', 'muskoka', 'algonquin'],
    frReview: 'needs-human-review',
  },
  {
    id: 'quebec',
    slug: 'quebec',
    name: { en: 'Quebec', fr: 'Québec', de: "Québec", es: "Quebec" },
    area: 'east',
    tagline: {
      en: 'French-speaking, unhurried, and very well fed.',
      fr: 'Francophone, sans hâte, et très bien nourri.', de: "Französischsprachig, gelassen und sehr gut genährt.", es: "Francófono, sin prisas y muy bien alimentado.",
    },
    intro: {
      en: 'Quebec is French-speaking North America, with its own food, music and pace. Montréal and Québec City are three hours apart and quite different. East of Québec City, the St. Lawrence widens into something close to a sea.',
      fr: 'Le Québec, c’est l’Amérique du Nord en français, avec sa cuisine, sa musique et son rythme. Montréal et Québec sont à trois heures l’une de l’autre, et très différentes. À l’est de Québec, le Saint-Laurent s’élargit jusqu’à ressembler à une mer.', de: "Québec ist das französischsprachige Nordamerika, mit eigener Küche, Musik und eigenem Tempo. Montréal und Québec City liegen drei Stunden auseinander und sind recht verschieden. Östlich von Québec City weitet sich der Sankt-Lorenz-Strom zu etwas, das fast ein Meer ist.", es: "Quebec es la Norteamérica francófona, con su propia cocina, su música y su ritmo. Montreal y la ciudad de Quebec están a tres horas y son bastante distintas. Al este de la ciudad de Quebec, el San Lorenzo se ensancha hasta parecer casi un mar.",
    },
    pitch: {
      bestAt: {
        en: 'Cities on foot, food, Charlevoix’s hills, whales at Tadoussac, and a winter that people actually enjoy.',
        fr: 'Les villes à pied, la table, les collines de Charlevoix, les baleines à Tadoussac, et un hiver que les gens apprécient vraiment.', de: "Städte zu Fuß, gutes Essen, die Hügel von Charlevoix, Wale bei Tadoussac und ein Winter, den die Menschen wirklich genießen.", es: "Ciudades a pie, buena comida, las colinas de Charlevoix, ballenas en Tadoussac y un invierno que la gente disfruta de verdad.",
      },
      notFor: {
        en: 'Travellers who want everything in English. Most people switch happily, but a bonjour helps. And winter in Québec City is properly cold.',
        fr: 'Ceux qui s’attendent à retrouver la France. L’accent, les mots et les habitudes sont québécois, et c’est tout l’intérêt. Et l’hiver à Québec est franchement froid.', de: "Reisende, die alles auf Englisch möchten. Die meisten wechseln gern die Sprache, aber ein bonjour hilft. Und der Winter in Québec City ist richtig kalt.", es: "Viajeros que lo quieren todo en inglés. Casi todo el mundo cambia de idioma con gusto, pero un bonjour ayuda. Y el invierno en la ciudad de Quebec es frío de verdad.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'Steep old streets with stone houses and flower boxes', fr: 'De vieilles rues en pente, maisons de pierre et jardinières fleuries', de: "Steile alte Gassen mit Steinhäusern und Blumenkästen", es: "Calles antiguas y empinadas con casas de piedra y jardineras" },
        subject: 'Old Québec’s steep streets, July evening',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'Snow falling on old stone walls and lit windows', fr: 'De la neige qui tombe sur de vieux remparts et des fenêtres éclairées', de: "Schnee fällt auf alte Steinmauern und erleuchtete Fenster", es: "Nieve cayendo sobre viejos muros de piedra y ventanas iluminadas" },
        subject: 'Snow on the walls of Old Québec, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Whales in the St. Lawrence at Tadoussac, June to October', fr: 'Les baleines du Saint-Laurent à Tadoussac, de juin à octobre', de: "Wale im Sankt-Lorenz-Strom bei Tadoussac, Juni bis Oktober", es: "Ballenas en el San Lorenzo, en Tadoussac, de junio a octubre" },
        { en: 'Old Québec’s walls and steep streets', fr: 'Les remparts et les rues en pente du Vieux-Québec', de: "Die Mauern und steilen Gassen von Alt-Québec", es: "Las murallas y las calles empinadas del Viejo Quebec" },
        { en: 'Montréal’s festivals, terraces and bagels', fr: 'Les festivals, les terrasses et les bagels de Montréal', de: "Montréals Festivals, Terrassen und Bagels", es: "Los festivales, las terrazas y los bagels de Montreal" },
        { en: 'Charlevoix: river views and a great deal of cheese', fr: 'Charlevoix : vue sur le fleuve et beaucoup de fromage', de: "Charlevoix: Blick auf den Fluss und sehr viel Käse", es: "Charlevoix: vistas al río y muchísimo queso" },
      ],
      winter: [
        { en: 'Québec Winter Carnival, late January to mid-February', fr: 'Le Carnaval de Québec, de fin janvier à mi-février', de: "Winterkarneval in Québec, Ende Januar bis Mitte Februar", es: "Carnaval de Invierno de Quebec, de finales de enero a mediados de febrero" },
        { en: 'Cross-country skiing and snowshoeing in the national parks', fr: 'Le ski de fond et la raquette dans les parcs nationaux', de: "Langlauf und Schneeschuhwandern in den Nationalparks", es: "Esquí de fondo y raquetas en los parques nacionales" },
        { en: 'Ice-fishing cabins on the frozen Saguenay', fr: 'Les cabanes de pêche blanche sur le Saguenay gelé', de: "Eisfischerhütten auf dem gefrorenen Saguenay", es: "Cabañas de pesca en el hielo sobre el Saguenay helado" },
        { en: 'Montréal’s underground city, for the very cold days', fr: 'La ville souterraine de Montréal, pour les jours de grand froid', de: "Montréals unterirdische Stadt, für die sehr kalten Tage", es: "La ciudad subterránea de Montreal, para los días de mucho frío" },
      ],
    },
    distancePreset: ['montreal', 'tadoussac'],
    regionIds: ['montreal', 'quebec-city', 'charlevoix', 'tadoussac'],
    frReview: 'needs-human-review',
  },
  {
    id: 'atlantic-canada',
    slug: 'atlantic-canada',
    name: { en: 'Atlantic Canada', fr: 'Canada atlantique', de: "Atlantisches Kanada", es: "El Canadá atlántico" },
    area: 'east',
    tagline: {
      en: 'Four provinces, a lot of coastline, and music most nights.',
      fr: 'Quatre provinces, beaucoup de côtes, et de la musique presque tous les soirs.', de: "Vier Provinzen, sehr viel Küste und an den meisten Abenden Musik.", es: "Cuatro provincias, muchísima costa y música casi todas las noches.",
    },
    intro: {
      en: 'Atlantic Canada is Nova Scotia, New Brunswick, Prince Edward Island, and Newfoundland and Labrador. It’s the part of Canada closest to Europe. St. John’s is nearer to Ireland than to Vancouver.',
      fr: 'Le Canada atlantique regroupe la Nouvelle-Écosse, le Nouveau-Brunswick, l’Île-du-Prince-Édouard et Terre-Neuve-et-Labrador. C’est la partie du Canada la plus proche de l’Europe. St. John’s est plus près de l’Irlande que de Vancouver.', de: "Das atlantische Kanada umfasst Nova Scotia, New Brunswick, Prince Edward Island sowie Neufundland und Labrador. Es ist der Teil Kanadas, der Europa am nächsten liegt. St. John’s liegt näher an Irland als an Vancouver.", es: "El Canadá atlántico son Nueva Escocia, Nuevo Brunswick, la Isla del Príncipe Eduardo y Terranova y Labrador. Es la parte de Canadá más cercana a Europa. St. John’s está más cerca de Irlanda que de Vancouver.",
    },
    pitch: {
      bestAt: {
        en: 'Coastal drives, seafood, icebergs and puffins in early summer, whales in July and August, and autumn colour on the Cabot Trail.',
        fr: 'Les routes côtières, les fruits de mer, les icebergs et les macareux en début d’été, les baleines en juillet et août, et les couleurs d’automne sur la piste Cabot.', de: "Küstenstraßen, Meeresfrüchte, Eisberge und Papageitaucher im Frühsommer, Wale im Juli und August und Herbstfarben am Cabot Trail.", es: "Carreteras costeras, marisco, icebergs y frailecillos a principios de verano, ballenas en julio y agosto y colores de otoño en el Cabot Trail.",
      },
      notFor: {
        en: 'Seeing it all in a week. The ferry to Newfoundland alone takes most of a day, and many inns close from October to May.',
        fr: 'Tout voir en une semaine. Le traversier pour Terre-Neuve prend à lui seul presque une journée, et beaucoup d’auberges ferment d’octobre à mai.', de: "Alles in einer Woche zu sehen. Allein die Fähre nach Neufundland dauert fast einen ganzen Tag, und viele Gasthäuser schließen von Oktober bis Mai.", es: "Verlo todo en una semana. Solo el ferry a Terranova lleva casi un día, y muchas posadas cierran de octubre a mayo.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'An iceberg off a rocky coast with brightly painted houses', fr: 'Un iceberg au large d’une côte rocheuse aux maisons colorées', de: "Ein Eisberg vor einer felsigen Küste mit bunt gestrichenen Häusern", es: "Un iceberg frente a una costa rocosa con casas de colores vivos" },
        subject: 'Iceberg off a Newfoundland outport, June',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Waves breaking on a snowy coastline beside a lighthouse', fr: 'Des vagues sur une côte enneigée, près d’un phare', de: "Wellen brechen an einer verschneiten Küste neben einem Leuchtturm", es: "Olas rompiendo en una costa nevada junto a un faro" },
        subject: 'Winter swell at a Nova Scotia lighthouse',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Icebergs off Newfoundland, usually May and June', fr: 'Les icebergs au large de Terre-Neuve, en général en mai et juin', de: "Eisberge vor Neufundland, meist im Mai und Juni", es: "Icebergs frente a Terranova, normalmente en mayo y junio" },
        { en: 'Puffins and humpbacks, June to August', fr: 'Les macareux et les baleines à bosse, de juin à août', de: "Papageitaucher und Buckelwale, Juni bis August", es: "Frailecillos y ballenas jorobadas, de junio a agosto" },
        { en: 'The highest tides in the world, in the Bay of Fundy', fr: 'Les plus hautes marées du monde, dans la baie de Fundy', de: "Die höchsten Gezeiten der Welt, in der Bay of Fundy", es: "Las mareas más altas del mundo, en la bahía de Fundy" },
        { en: 'Lobster suppers and red-sand beaches on PEI', fr: 'Les soupers de homard et les plages de sable rouge de l’Île-du-Prince-Édouard', de: "Hummeressen und rote Sandstrände auf PEI", es: "Cenas de langosta y playas de arena roja en la Isla del Príncipe Eduardo" },
      ],
      winter: [
        { en: 'Honestly, it’s quiet. Many inns and tours close until May.', fr: 'Honnêtement, c’est calme. Beaucoup d’auberges et d’excursions ferment jusqu’en mai.', de: "Ehrlich gesagt ist es ruhig. Viele Gasthäuser und Touren schließen bis Mai.", es: "Sinceramente, está tranquilo. Muchas posadas y excursiones cierran hasta mayo." },
        { en: 'Halifax and St. John’s stay lively, with music most nights', fr: 'Halifax et St. John’s restent animées, avec de la musique presque tous les soirs', de: "Halifax und St. John’s bleiben lebendig, mit Musik an den meisten Abenden", es: "Halifax y St. John’s siguen animadas, con música casi todas las noches" },
        { en: 'Winter storms, best watched from indoors', fr: 'Les tempêtes d’hiver, à regarder de préférence depuis l’intérieur', de: "Winterstürme, am besten von drinnen zu beobachten", es: "Temporales de invierno, mejor vistos desde dentro" },
      ],
    },
    distancePreset: ['halifax', 'st-johns'],
    regionIds: ['cabot-trail', 'prince-edward-island', 'newfoundland', 'bay-of-fundy'],
    frReview: 'needs-human-review',
  },
  {
    id: 'nunavut',
    slug: 'nunavut',
    name: { en: 'Nunavut', fr: 'Nunavut', de: "Nunavut", es: "Nunavut" },
    area: 'north',
    tagline: {
      en: 'The Arctic, on the Arctic’s terms.',
      fr: 'L’Arctique, selon ses propres règles.', de: "Die Arktis, zu den Bedingungen der Arktis.", es: "El Ártico, en los términos del Ártico.",
    },
    intro: {
      en: 'Nunavut is Canada’s largest territory, with about 40,000 people in 25 communities and no roads between them. Most people here are Inuit, and Inuktitut is widely spoken. Everything arrives by plane, or once a year by sealift.',
      fr: 'Le Nunavut est le plus grand territoire du Canada : environ 40 000 habitants, 25 communautés, et aucune route entre elles. La plupart des habitants sont Inuits, et l’inuktitut est très parlé. Tout arrive par avion, ou une fois par an par bateau.', de: "Nunavut ist Kanadas größtes Territorium, mit rund 40.000 Menschen in 25 Gemeinden und ohne Straßen dazwischen. Die meisten Menschen hier sind Inuit, und Inuktitut wird weithin gesprochen. Alles kommt per Flugzeug oder einmal im Jahr per Versorgungsschiff.", es: "Nunavut es el territorio más grande de Canadá, con unas 40.000 personas en 25 comunidades y sin carreteras entre ellas. La mayoría de la población es inuit, y el inuktitut se habla mucho. Todo llega en avión o, una vez al año, por barco.",
    },
    pitch: {
      bestAt: {
        en: 'Floe-edge trips in June, narwhals, Arctic light, and Inuit art and culture with local guides.',
        fr: 'Les séjours à la lisière des glaces en juin, les narvals, la lumière arctique, et l’art et la culture inuits avec des guides locaux.', de: "Reisen zur Eiskante im Juni, Narwale, arktisches Licht und Kunst und Kultur der Inuit mit einheimischen Guides.", es: "Viajes al borde del hielo en junio, narvales, luz ártica y arte y cultura inuit con guías locales.",
      },
      notFor: {
        en: 'Tight budgets or fixed plans. Flights are expensive, and the weather decides the itinerary. We build in spare days.',
        fr: 'Les petits budgets ou les plans figés. Les vols sont chers, et c’est la météo qui décide de l’itinéraire. Nous prévoyons des jours de marge.', de: "Knappe Budgets oder feste Pläne. Flüge sind teuer, und das Wetter bestimmt den Reiseplan. Wir planen Reservetage ein.", es: "Presupuestos ajustados o planes fijos. Los vuelos son caros y el tiempo decide el itinerario. Dejamos días de margen.",
      },
    },
    hero: {
      summer: {
        alt: { en: 'The edge of sea ice meeting dark open water under a low sun', fr: 'La lisière de la banquise et l’eau libre, sous un soleil bas', de: "Der Rand des Meereises trifft unter tiefer Sonne auf dunkles offenes Wasser", es: "El borde de la banquisa junto al agua abierta y oscura bajo un sol bajo" },
        subject: 'Floe edge near Pond Inlet at midnight, June',
        tone: 'snow',
      },
      winter: {
        alt: { en: 'A dog team crossing sea ice in blue twilight', fr: 'Un attelage de chiens sur la banquise, dans un crépuscule bleu', de: "Ein Hundegespann überquert Meereis in blauer Dämmerung", es: "Un tiro de perros cruzando el hielo marino en el crepúsculo azul" },
        subject: 'Dog team on sea ice in blue twilight, March',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'The floe edge near Pond Inlet, late May to June', fr: 'La lisière des glaces près de Pond Inlet, de fin mai à juin', de: "Die Eiskante bei Pond Inlet, Ende Mai bis Juni", es: "El borde del hielo cerca de Pond Inlet, de finales de mayo a junio" },
        { en: 'Narwhals in the waters around north Baffin Island', fr: 'Les narvals dans les eaux du nord de l’île de Baffin', de: "Narwale in den Gewässern um das nördliche Baffin Island", es: "Narvales en las aguas del norte de la isla de Baffin" },
        { en: 'Daylight around the clock', fr: 'Le jour, à toute heure', de: "Tageslicht rund um die Uhr", es: "Luz de día a todas horas" },
        { en: 'Prints and carvings from Nunavut’s artists', fr: 'Les estampes et sculptures des artistes du Nunavut', de: "Drucke und Schnitzereien von Künstlern aus Nunavut", es: "Grabados y tallas de artistas de Nunavut" },
      ],
      winter: [
        { en: 'Long nights and northern lights', fr: 'De longues nuits et des aurores boréales', de: "Lange Nächte und Polarlichter", es: "Noches largas y auroras boreales" },
        { en: 'Travelling by dog team or snowmobile with Inuit guides', fr: 'Voyager en traîneau à chiens ou en motoneige avec des guides inuits', de: "Unterwegs mit Hundegespann oder Schneemobil und Inuit-Guides", es: "Viajar en trineo de perros o moto de nieve con guías inuit" },
        { en: 'Spring celebrations in Iqaluit in April, when the light comes back', fr: 'Les fêtes du printemps à Iqaluit en avril, quand la lumière revient', de: "Frühlingsfeste in Iqaluit im April, wenn das Licht zurückkehrt", es: "Fiestas de primavera en Iqaluit en abril, cuando vuelve la luz" },
      ],
    },
    distancePreset: ['iqaluit', 'pond-inlet'],
    regionIds: ['iqaluit', 'pond-inlet'],
    frReview: 'needs-human-review',
  },
];
