import type { Stay } from './types';

/**
 * Sample stays. Until partner agreements are signed, each stay is named by what
 * and where it is (no business names). Replace with real partner properties, with
 * their permission, before naming them. Slugs are kept stable.
 */
export const stays: Stay[] = [
  {
    id: 'stay-rainforest-lodge',
    slug: 'moss-and-tide-lodge',
    name: { en: "A floating lodge in the Great Bear Rainforest", fr: "Un lodge flottant dans la forêt pluviale du Grand Ours", de: "Eine schwimmende Lodge im Great Bear Rainforest", es: "Un lodge flotante en el Great Bear Rainforest" },
    regionId: 'great-bear-rainforest',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    style: { en: "Floating lodge", fr: "Lodge flottant", de: "Schwimmende Lodge", es: "Lodge flotante" },
    summary: {
      en: 'A floating lodge moored in a sheltered inlet, reached only by floatplane. Bears on the shore, whales in the channel.',
      fr: "Un lodge flottant amarré dans une anse abritée, accessible uniquement en hydravion. Des ours sur la rive, des baleines dans le chenal.", de: "Eine schwimmende Lodge in einem geschützten Meeresarm, nur per Wasserflugzeug erreichbar. Bären am Ufer, Wale im Kanal.", es: "Un lodge flotante amarrado en una ensenada resguardada, al que solo se llega en hidroavión. Osos en la orilla, ballenas en el canal.",
    },
    body: {
      en: "Floating lodges on this coast are small and moored in sheltered inlets, with no road in: you arrive and leave by floatplane. Days are spent with local guides, by boat and on foot, looking for bears on the estuaries and whales in the channels. Expect simple comfort, shared meals and little or no mobile signal.",
      fr: "Sur cette côte, les lodges flottants sont petits et amarrés dans des anses abritées, sans aucune route : on arrive et on repart en hydravion. Les journées se passent avec des guides locaux, en bateau et à pied, à la recherche des ours dans les estuaires et des baleines dans les chenaux. Attendez-vous à un confort simple, à des repas partagés et à peu ou pas de réseau mobile.",
      de: "Schwimmende Lodges an dieser Küste sind klein und liegen in geschützten Meeresarmen, ohne Straßenanbindung: An- und Abreise erfolgen per Wasserflugzeug. Die Tage verbringt man mit einheimischen Guides, per Boot und zu Fuß, auf der Suche nach Bären an den Flussmündungen und Walen in den Kanälen. Rechnen Sie mit einfachem Komfort, gemeinsamen Mahlzeiten und wenig oder keinem Handyempfang.",
      es: "En esta costa, los lodges flotantes son pequeños y están amarrados en ensenadas resguardadas, sin carretera: se llega y se sale en hidroavión. Los días se pasan con guías locales, en barco y a pie, buscando osos en los estuarios y ballenas en los canales. Espere un confort sencillo, comidas compartidas y poca o ninguna cobertura móvil.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Floating lodge in a misty inlet, floatplane at the dock',
        tone: 'forest',
        alt: {
          en: 'A floating lodge in a misty, forested inlet with a floatplane tied to the dock',
          fr: 'Un lodge flottant dans une anse brumeuse et boisée, un hydravion amarré au quai', de: "Eine schwimmende Lodge in einem nebligen, bewaldeten Meeresarm, am Steg ein Wasserflugzeug", es: "Un lodge flotante en una ensenada brumosa y boscosa con un hidroavión amarrado al muelle",
        },
      },
      {
        subject: 'Guests in a small boat watching a bear on the shore',
        tone: 'forest',
        alt: {
          en: 'A small boat of guests watching a grizzly on a grassy shoreline',
          fr: 'Un petit bateau de voyageurs observant un grizzli sur une rive herbeuse', de: "Ein kleines Boot mit Gästen beobachtet einen Grizzly an einem grasbewachsenen Ufer", es: "Un pequeño barco con huéspedes observando a un grizzly en una orilla cubierta de hierba",
        },
      },
    ],
  },
  {
    id: 'stay-tofino-inn',
    slug: 'driftline-inn',
    name: { en: "A cedar inn on the beach near Tofino", fr: "Une auberge en cèdre sur la plage, près de Tofino", de: "Ein Gasthaus aus Zedernholz am Strand bei Tofino", es: "Una posada de cedro en la playa, cerca de Tofino" },
    regionId: 'tofino-vancouver-island',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    style: { en: "Beachfront inn", fr: "Auberge en bord de plage", de: "Gasthaus am Strand", es: "Posada frente a la playa" },
    summary: {
      en: "A cedar inn on a long Pacific beach near Tofino. Whales in summer, storms in winter.",
      fr: "Une auberge en cèdre sur une longue plage du Pacifique près de Tofino. Les baleines l'été, les tempêtes l'hiver.",
      de: "Ein Gasthaus aus Zedernholz an einem langen Pazifikstrand bei Tofino. Wale im Sommer, Stürme im Winter.",
      es: "Una posada de cedro en una larga playa del Pacífico cerca de Tofino. Ballenas en verano, temporales en invierno.",
    },
    body: {
      en: "A small inn on one of the long beaches near Tofino, facing the open Pacific. In summer, whale-watching and boat trips leave from the harbour in town; in winter, people come to watch the storms roll in off the ocean. Tofino's cafés and restaurants are a short drive away.",
      fr: "Une petite auberge sur l'une des longues plages près de Tofino, face au Pacifique. L'été, les sorties d'observation des baleines et les excursions en bateau partent du port de la ville ; l'hiver, on vient regarder les tempêtes arriver de l'océan. Les cafés et restaurants de Tofino sont à quelques minutes en voiture.",
      de: "Ein kleines Gasthaus an einem der langen Strände bei Tofino, mit Blick auf den offenen Pazifik. Im Sommer starten Walbeobachtungen und Bootsausflüge im Hafen des Ortes; im Winter kommen die Gäste, um die Stürme vom Meer heranrollen zu sehen. Die Cafés und Restaurants von Tofino sind eine kurze Autofahrt entfernt.",
      es: "Una pequeña posada en una de las largas playas cerca de Tofino, frente al Pacífico abierto. En verano, el avistamiento de ballenas y las excursiones en barco salen del puerto del pueblo; en invierno, la gente viene a ver los temporales llegar desde el océano. Los cafés y restaurantes de Tofino están a un corto trayecto en coche.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Cedar inn above a wide sandy beach at sunset',
        tone: 'lake',
        alt: {
          en: 'A low cedar building above a wide sandy beach at sunset',
          fr: 'Un bâtiment bas en cèdre au-dessus d’une large plage de sable, au coucher du soleil', de: "Ein flaches Zedernholzgebäude über einem breiten Sandstrand bei Sonnenuntergang", es: "Un edificio bajo de cedro sobre una amplia playa de arena al atardecer",
        },
      },
      {
        subject: 'Winter storm waves seen through a room window',
        tone: 'granite',
        alt: {
          en: 'Large winter waves breaking on rocks, seen through a window with a fire inside',
          fr: 'Grosses vagues d’hiver se brisant sur les rochers, vues à travers une fenêtre, un feu à l’intérieur', de: "Große Winterwellen brechen an Felsen, durch ein Fenster gesehen, drinnen brennt ein Feuer", es: "Grandes olas de invierno rompiendo en las rocas, vistas a través de una ventana con el fuego encendido dentro",
        },
      },
    ],
  },
  {
    id: 'stay-lake-chalet',
    slug: 'larchmere-chalet',
    name: { en: "A timber chalet near Lake Louise", fr: "Un chalet en bois près du lac Louise", de: "Ein Holzchalet in der Nähe des Lake Louise", es: "Un chalet de madera cerca del lago Louise" },
    regionId: 'banff-lake-louise',
    provinceId: 'alberta',
    frReview: 'needs-human-review',
    style: { en: "Mountain chalet", fr: "Chalet de montagne", de: "Berg-Chalet", es: "Chalet de montaña" },
    summary: {
      en: 'A timber chalet near Lake Louise, close enough to walk to the trails and far enough from the car parks.',
      fr: "Un chalet en bois près de Lake Louise, assez proche pour rejoindre les sentiers à pied, et assez loin des parkings.", de: "Ein Holzchalet bei Lake Louise, nah genug, um zu Fuß zu den Wegen zu gehen, und weit genug von den Parkplätzen.", es: "Un chalet de madera cerca de Lake Louise, lo bastante cerca para ir andando a los senderos y lo bastante lejos de los aparcamientos.",
    },
    body: {
      en: "A timber chalet in the Lake Louise area of Banff National Park, chosen for being close to the trails. In summer, an early start gets you onto the paths before the day visitors arrive. In winter, there are cross-country trails nearby and the Lake Louise ski area is a short drive away.",
      fr: "Un chalet en bois dans le secteur du lac Louise, au parc national de Banff, choisi pour sa proximité avec les sentiers. L'été, en partant tôt, on est sur les chemins avant l'arrivée des visiteurs à la journée. L'hiver, des pistes de ski de fond sont toutes proches et le domaine skiable de Lake Louise est à quelques minutes en voiture.",
      de: "Ein Holzchalet in der Gegend um Lake Louise im Banff-Nationalpark, ausgewählt wegen der Nähe zu den Wanderwegen. Wer im Sommer früh aufbricht, ist auf den Wegen, bevor die Tagesbesucher kommen. Im Winter liegen Langlaufloipen in der Nähe, und das Skigebiet Lake Louise ist eine kurze Fahrt entfernt.",
      es: "Un chalet de madera en la zona del lago Louise, en el parque nacional de Banff, elegido por su cercanía a los senderos. En verano, si se sale temprano, se llega a los caminos antes que los visitantes de un día. En invierno hay pistas de esquí de fondo cerca y la estación de esquí de Lake Louise está a un breve trayecto en coche.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Timber chalet among spruce with peaks behind, summer',
        tone: 'forest',
        alt: {
          en: 'A timber chalet among spruce trees with rocky peaks behind in summer',
          fr: 'Un chalet en bois entre les épinettes, des sommets rocheux en arrière-plan, en été', de: "Ein Holzchalet zwischen Fichten vor felsigen Gipfeln im Sommer", es: "Un chalet de madera entre abetos con picos rocosos detrás en verano",
        },
      },
      {
        subject: 'Stone fireplace and armchairs, snow outside the window',
        tone: 'snow',
        alt: {
          en: 'A stone fireplace and armchairs inside, with snow falling outside the window',
          fr: 'Une cheminée en pierre et des fauteuils, la neige tombant derrière la fenêtre', de: "Ein Steinkamin und Sessel drinnen, vor dem Fenster fällt Schnee", es: "Una chimenea de piedra y sillones dentro, con nieve cayendo al otro lado de la ventana",
        },
      },
    ],
  },
  {
    id: 'stay-jasper-cabins',
    slug: 'whitebark-cabins',
    name: { en: "Log cabins on the river outside Jasper", fr: "Des chalets en rondins au bord de la rivière, près de Jasper", de: "Blockhütten am Fluss vor den Toren von Jasper", es: "Cabañas de troncos junto al río, a las afueras de Jasper" },
    regionId: 'jasper',
    provinceId: 'alberta',
    frReview: 'needs-human-review',
    style: { en: "Riverside log cabins", fr: "Chalets en rondins au bord d’une rivière", de: "Blockhütten am Fluss", es: "Cabañas de troncos junto al río" },
    summary: {
      en: "Log cabins on a bend of the river outside Jasper, where elk sometimes wander through.",
      fr: "Des chalets en rondins dans un méandre de la rivière, près de Jasper, où les wapitis passent parfois.",
      de: "Blockhütten an einer Flussbiegung vor Jasper, wo manchmal Wapitis vorbeiziehen.",
      es: "Cabañas de troncos en un recodo del río a las afueras de Jasper, por donde a veces pasan los wapitíes.",
    },
    body: {
      en: "Simple, warm log cabins spaced out among the pines near Jasper, with the town a short drive away. Jasper National Park is a dark-sky preserve, so clear nights are good for stargazing. Elk are common around Jasper, especially in autumn: keep your distance and give them right of way.",
      fr: "Des chalets en rondins simples et chaleureux, espacés entre les pins près de Jasper, à quelques minutes de la ville en voiture. Le parc national de Jasper est une réserve de ciel étoilé : par nuit claire, on observe très bien les étoiles. Les wapitis sont courants autour de Jasper, surtout en automne : gardez vos distances et laissez-leur la priorité.",
      de: "Einfache, warme Blockhütten verstreut zwischen den Kiefern bei Jasper, der Ort ist eine kurze Autofahrt entfernt. Der Jasper-Nationalpark ist ein Sternenschutzgebiet, klare Nächte eignen sich also gut zum Sternegucken. Wapitis sind rund um Jasper häufig, besonders im Herbst: Halten Sie Abstand und lassen Sie ihnen den Vortritt.",
      es: "Cabañas de troncos sencillas y cálidas, repartidas entre los pinos cerca de Jasper, a un corto trayecto en coche del pueblo. El parque nacional de Jasper es una reserva de cielo oscuro, así que las noches despejadas son ideales para mirar las estrellas. Los wapitíes son habituales en Jasper, sobre todo en otoño: mantenga la distancia y déjeles paso.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Log cabins among pines beside a milky river',
        tone: 'forest',
        alt: {
          en: 'Log cabins among pine trees beside a pale blue glacial river',
          fr: 'Chalets en rondins entre les pins, au bord d’une rivière glaciaire bleu pâle', de: "Blockhütten zwischen Kiefern an einem hellblauen Gletscherfluss", es: "Cabañas de troncos entre pinos junto a un río glaciar azul claro",
        },
      },
      {
        subject: 'Elk on snowy grass in front of a cabin porch',
        tone: 'snow',
        alt: {
          en: 'An elk standing on snowy grass in front of a cabin porch',
          fr: 'Un wapiti sur l’herbe enneigée devant la véranda d’un chalet', de: "Ein Wapiti steht auf verschneitem Gras vor der Veranda einer Hütte", es: "Un uapití de pie sobre la hierba nevada frente al porche de una cabaña",
        },
      },
    ],
  },
  {
    id: 'stay-vancouver-hotel',
    slug: 'the-lantern-house',
    name: { en: "A small hotel on the Vancouver harbour", fr: "Un petit hôtel sur le port de Vancouver", de: "Ein kleines Hotel am Hafen von Vancouver", es: "Un pequeño hotel en el puerto de Vancouver" },
    regionId: 'vancouver',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    style: { en: "Harbourside boutique hotel", fr: "Hôtel de charme sur le port", de: "Boutiquehotel am Hafen", es: "Hotel boutique junto al puerto" },
    summary: {
      en: 'A small hotel on the harbour, a short walk from the seawall and the floatplane terminal.',
      fr: "Un petit hôtel sur le port, à quelques pas de la digue et du terminal des hydravions.", de: "Ein kleines Hotel am Hafen, ein kurzer Spaziergang zur Uferpromenade und zum Wasserflugzeug-Terminal.", es: "Un pequeño hotel en el puerto, a un corto paseo del malecón y de la terminal de hidroaviones.",
    },
    body: {
      en: "A small hotel by Vancouver's harbour, looking across the water to the North Shore mountains, with floatplanes coming and going. The seawall around Stanley Park starts close by and is best done by bike. It works as the first night after a long flight and the last night before one.",
      fr: "Un petit hôtel au bord du port de Vancouver, face aux montagnes de la rive nord, avec le va-et-vient des hydravions. La promenade du seawall autour de Stanley Park commence tout près et se fait idéalement à vélo. Parfait pour la première nuit après un long vol et la dernière avant le retour.",
      de: "Ein kleines Hotel am Hafen von Vancouver mit Blick über das Wasser auf die Berge der North Shore, wo Wasserflugzeuge starten und landen. Die Seawall-Promenade um den Stanley Park beginnt ganz in der Nähe und ist am schönsten mit dem Fahrrad. Ideal für die erste Nacht nach einem langen Flug und die letzte vor dem Rückflug.",
      es: "Un pequeño hotel junto al puerto de Vancouver, con vistas sobre el agua a las montañas de North Shore y el ir y venir de los hidroaviones. El paseo del seawall alrededor de Stanley Park empieza muy cerca y se disfruta mejor en bicicleta. Funciona como primera noche tras un vuelo largo y como última antes de otro.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Hotel room window over a harbour with floatplanes',
        tone: 'lake',
        alt: {
          en: 'A hotel room window looking over a harbour with floatplanes and mountains',
          fr: 'La fenêtre d’une chambre donnant sur un port avec des hydravions et des montagnes', de: "Ein Hotelfenster mit Blick über einen Hafen mit Wasserflugzeugen und Bergen", es: "La ventana de una habitación de hotel con vistas a un puerto con hidroaviones y montañas",
        },
      },
      {
        subject: 'Bicycles outside a hotel entrance on a wet street',
        tone: 'granite',
        alt: {
          en: 'Bicycles parked outside a small hotel entrance on a wet city street',
          fr: 'Vélos garés devant l’entrée d’un petit hôtel, dans une rue mouillée', de: "Fahrräder vor dem Eingang eines kleinen Hotels in einer nassen Stadtstraße", es: "Bicicletas aparcadas a la entrada de un pequeño hotel en una calle mojada de la ciudad",
        },
      },
    ],
  },
  {
    id: 'stay-churchill-tundra-lodge',
    slug: 'tundra-line-lodge',
    name: { en: "A fly-in lodge on the Hudson Bay coast", fr: "Un lodge accessible en avion sur la côte de la baie d’Hudson", de: "Eine Lodge an der Küste der Hudson Bay, nur per Flugzeug erreichbar", es: "Un lodge con acceso en avioneta en la costa de la bahía de Hudson" },
    regionId: 'churchill',
    provinceId: 'manitoba',
    frReview: 'needs-human-review',
    style: { en: "Fly-in tundra lodge", fr: "Lodge de toundra accessible en avion", de: "Tundra-Lodge mit Anreise per Flugzeug", es: "Lodge en la tundra con acceso en avioneta" },
    summary: {
      en: 'A fenced lodge on the Hudson Bay coast, where the polar bears come to you. Arrival is by small plane.',
      fr: "Un lodge clôturé sur la côte de la baie d'Hudson, où ce sont les ours polaires qui viennent à vous. On y arrive en petit avion.", de: "Eine eingezäunte Lodge an der Küste der Hudson Bay, wo die Eisbären zu Ihnen kommen. Anreise per Kleinflugzeug.", es: "Un lodge vallado en la costa de la bahía de Hudson, donde los osos polares vienen a usted. Se llega en avioneta.",
    },
    body: {
      en: "A lodge on the Hudson Bay coast inside a secure, fenced compound, reached by small plane. In autumn, polar bears often pass close by, and walks on the tundra only happen with armed, trained guides. In summer, the same coast has belugas, wildflowers and bears resting on the rocks. Flights depend on the weather, so we always plan a spare day either side.",
      fr: "Un lodge sur la côte de la baie d'Hudson, à l'intérieur d'une enceinte clôturée et sécurisée, accessible en petit avion. En automne, les ours polaires passent souvent tout près, et les marches sur la toundra se font uniquement avec des guides armés et formés. L'été, la même côte accueille bélugas, fleurs sauvages et ours au repos sur les rochers. Les vols dépendent de la météo : nous prévoyons toujours une journée de réserve avant et après.",
      de: "Eine Lodge an der Küste der Hudson Bay in einem gesicherten, eingezäunten Gelände, erreichbar mit dem Kleinflugzeug. Im Herbst ziehen Eisbären oft dicht vorbei, und Wanderungen in der Tundra gibt es nur mit bewaffneten, ausgebildeten Guides. Im Sommer gibt es an derselben Küste Belugas, Wildblumen und Bären, die auf den Felsen ruhen. Flüge hängen vom Wetter ab, deshalb planen wir immer einen Reservetag davor und danach ein.",
      es: "Un lodge en la costa de la bahía de Hudson, dentro de un recinto vallado y seguro, al que se llega en avioneta. En otoño, los osos polares pasan a menudo muy cerca, y las caminatas por la tundra solo se hacen con guías armados y formados. En verano, la misma costa tiene belugas, flores silvestres y osos descansando en las rocas. Los vuelos dependen del tiempo, así que siempre planificamos un día de margen antes y después.",
    },
    seasons: ['winter', 'summer'],
    images: [
      {
        subject: 'Lodge compound on flat snowy tundra, polar bear by the fence',
        tone: 'snow',
        alt: {
          en: 'A low lodge on flat snowy tundra with a polar bear walking near the fence',
          fr: 'Un lodge bas sur la toundra enneigée, un ours polaire marchant près de la clôture', de: "Eine flache Lodge auf ebener, verschneiter Tundra, ein Eisbär läuft am Zaun entlang", es: "Un lodge bajo en la tundra llana y nevada con un oso polar caminando cerca de la valla",
        },
      },
      {
        subject: 'Lounge window over Hudson Bay at dusk',
        tone: 'night',
        alt: {
          en: 'A warm lounge with a large window over the frozen edge of Hudson Bay at dusk',
          fr: 'Un salon chaleureux avec une grande fenêtre sur la bordure gelée de la baie d’Hudson, au crépuscule', de: "Eine warme Lounge mit großem Fenster über dem gefrorenen Rand der Hudson Bay in der Dämmerung", es: "Un salón cálido con un gran ventanal sobre el borde helado de la bahía de Hudson al anochecer",
        },
      },
    ],
  },
  {
    id: 'stay-aurora-cabins',
    slug: 'kettle-lake-cabins',
    name: { en: "Lakeside cabins outside Whitehorse", fr: "Des chalets au bord d’un lac, près de Whitehorse", de: "Hütten an einem See vor den Toren von Whitehorse", es: "Cabañas junto a un lago a las afueras de Whitehorse" },
    regionId: 'whitehorse',
    provinceId: 'yukon',
    frReview: 'needs-human-review',
    style: { en: "Wilderness cabins", fr: "Chalets en pleine nature", de: "Wildnishütten", es: "Cabañas en plena naturaleza" },
    summary: {
      en: "Cabins on a quiet lake outside Whitehorse, chosen for dark skies and a short walk to the shore.",
      fr: "Des chalets au bord d'un lac tranquille près de Whitehorse, choisis pour leur ciel noir et la rive toute proche.",
      de: "Hütten an einem ruhigen See vor Whitehorse, ausgewählt wegen des dunklen Himmels und des kurzen Wegs zum Ufer.",
      es: "Cabañas junto a un lago tranquilo a las afueras de Whitehorse, elegidas por su cielo oscuro y la orilla a pocos pasos.",
    },
    body: {
      en: "Wood-heated cabins on a lake outside Whitehorse, away from the town's lights. In winter, the hosts keep watch and wake guests when the aurora comes out. In summer, the same lake is for canoeing in the long northern evenings.",
      fr: "Des chalets chauffés au bois au bord d'un lac près de Whitehorse, loin des lumières de la ville. L'hiver, les hôtes guettent le ciel et réveillent les voyageurs quand l'aurore apparaît. L'été, le même lac se parcourt en canot pendant les longues soirées du Nord.",
      de: "Holzbeheizte Hütten an einem See vor Whitehorse, fern der Lichter der Stadt. Im Winter halten die Gastgeber Ausschau und wecken die Gäste, wenn das Polarlicht erscheint. Im Sommer paddelt man auf demselben See durch die langen Abende des Nordens.",
      es: "Cabañas con calefacción de leña junto a un lago a las afueras de Whitehorse, lejos de las luces de la ciudad. En invierno, los anfitriones vigilan el cielo y despiertan a los huéspedes cuando aparece la aurora. En verano, el mismo lago es para remar en canoa durante las largas tardes del norte.",
    },
    seasons: ['winter', 'summer'],
    images: [
      {
        subject: 'Cabin under green aurora, frozen lake in front',
        tone: 'night',
        alt: {
          en: 'A small cabin under green northern lights with a frozen lake in front',
          fr: 'Un petit chalet sous des aurores boréales vertes, un lac gelé devant', de: "Eine kleine Hütte unter grünen Polarlichtern, davor ein gefrorener See", es: "Una pequeña cabaña bajo una aurora boreal verde con un lago helado delante",
        },
      },
      {
        subject: 'Canoe at a cabin dock under late-evening summer light',
        tone: 'lake',
        alt: {
          en: 'A canoe at a wooden dock in soft late-evening light in summer',
          fr: 'Un canot à un quai en bois, dans la douce lumière d’un soir d’été', de: "Ein Kanu an einem Holzsteg im weichen Licht eines späten Sommerabends", es: "Una canoa en un muelle de madera con la luz suave de una tarde de verano",
        },
      },
    ],
  },
  {
    id: 'stay-yellowknife-lodge',
    slug: 'quartz-bay-lodge',
    name: { en: "A small lodge on Great Slave Lake", fr: "Un petit lodge sur le Grand lac des Esclaves", de: "Eine kleine Lodge am Großen Sklavensee", es: "Un pequeño lodge en el Gran Lago del Esclavo" },
    regionId: 'yellowknife',
    provinceId: 'northwest-territories',
    frReview: 'needs-human-review',
    style: { en: "Fly-in lakeside lodge", fr: "Lodge au bord du lac accessible en avion", de: "Lodge am See mit Anreise per Flugzeug", es: "Lodge junto al lago con acceso en avioneta" },
    summary: {
      en: 'A small lodge on the granite shore of Great Slave Lake, reached by ski-plane in winter and floatplane in summer.',
      fr: "Un petit lodge sur la rive de granit du Grand lac des Esclaves, accessible en avion sur skis l'hiver et en hydravion l'été.", de: "Eine kleine Lodge am Granitufer des Großen Sklavensees, im Winter per Skiflugzeug, im Sommer per Wasserflugzeug erreichbar.", es: "Un pequeño lodge en la orilla de granito del Gran Lago del Esclavo, al que se llega en avioneta con esquís en invierno y en hidroavión en verano.",
    },
    body: {
      en: "A small fly-in lodge on the granite shore of Great Slave Lake, reached from Yellowknife by small plane. The Yellowknife area is one of the best places in North America to see the aurora. In winter, days are for snowshoeing and ice fishing; in summer, for paddling among the islands and fishing for lake trout. At freeze-up and break-up, planes cannot land on the lake, so nobody goes anywhere.",
      fr: "Un petit lodge sur la rive de granit du Grand lac des Esclaves, accessible depuis Yellowknife en petit avion. La région de Yellowknife est l'un des meilleurs endroits d'Amérique du Nord pour voir les aurores boréales. L'hiver, les journées sont pour la raquette et la pêche sur glace ; l'été, pour pagayer entre les îles et pêcher le touladi. À l'englacement et à la débâcle, les avions ne peuvent pas se poser sur le lac : personne ne bouge.",
      de: "Eine kleine Lodge am Granitufer des Großen Sklavensees, von Yellowknife aus mit dem Kleinflugzeug erreichbar. Die Gegend um Yellowknife gehört zu den besten Orten Nordamerikas für Polarlichter. Im Winter sind die Tage zum Schneeschuhwandern und Eisfischen da, im Sommer zum Paddeln zwischen den Inseln und zum Angeln auf Seeforellen. Beim Zufrieren und beim Eisaufbruch können keine Flugzeuge auf dem See landen, dann fährt niemand irgendwohin.",
      es: "Un pequeño lodge en la orilla de granito del Gran Lago del Esclavo, al que se llega desde Yellowknife en avioneta. La zona de Yellowknife es uno de los mejores lugares de Norteamérica para ver la aurora. En invierno, los días son para las raquetas de nieve y la pesca en hielo; en verano, para remar entre las islas y pescar truchas de lago. Durante la congelación y el deshielo, los aviones no pueden aterrizar en el lago, así que nadie va a ninguna parte.",
    },
    seasons: ['winter', 'summer'],
    images: [
      {
        subject: 'Lodge on pink granite above a frozen bay, aurora',
        tone: 'night',
        alt: {
          en: 'A wooden lodge on pink granite above a frozen bay under the aurora',
          fr: 'Un lodge en bois sur du granit rose, au-dessus d’une baie gelée, sous les aurores', de: "Eine Holzlodge auf rosa Granit über einer gefrorenen Bucht unter dem Polarlicht", es: "Un lodge de madera sobre granito rosado frente a una bahía helada bajo la aurora",
        },
      },
      {
        subject: 'Ski-plane on lake ice beside the lodge',
        tone: 'snow',
        alt: {
          en: 'A small ski-plane parked on lake ice beside a lodge',
          fr: 'Un petit avion sur skis posé sur la glace du lac, près du lodge', de: "Ein kleines Skiflugzeug auf dem Seeeis neben einer Lodge", es: "Una pequeña avioneta con esquís aparcada sobre el hielo del lago junto a un lodge",
        },
      },
    ],
  },
  {
    id: 'stay-quebec-auberge',
    slug: 'auberge-de-la-cote-grise',
    name: { en: "A stone-house inn in Old Québec", fr: "Une auberge dans une maison de pierre du Vieux-Québec", de: "Ein Gasthaus in einem Steinhaus in der Altstadt von Québec", es: "Una posada en una casa de piedra del Viejo Quebec" },
    regionId: 'quebec-city',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    style: { en: "Inn in a stone house", fr: "Auberge dans une maison de pierre", de: "Gasthaus in einem Steinhaus", es: "Posada en una casa de piedra" },
    summary: {
      en: "A stone house inside the walls of Old Québec, with thick walls and low beams.",
      fr: "Une maison de pierre dans les murs du Vieux-Québec, aux murs épais et aux poutres basses.",
      de: "Ein Steinhaus innerhalb der Stadtmauern von Alt-Québec, mit dicken Mauern und niedrigen Balken.",
      es: "Una casa de piedra dentro de las murallas del Viejo Quebec, con muros gruesos y vigas bajas.",
    },
    body: {
      en: "A small inn in one of the old stone houses inside the walls of Old Québec, where some buildings are more than two hundred years old. From here you can walk everywhere in the old town, including uphill. In winter, the narrow streets are at their prettiest under snow.",
      fr: "Une petite auberge dans l'une des vieilles maisons de pierre du Vieux-Québec intra-muros, où certains bâtiments ont plus de deux cents ans. D'ici, on va partout à pied dans la vieille ville, montées comprises. L'hiver, les ruelles sont plus belles que jamais sous la neige.",
      de: "Ein kleines Gasthaus in einem der alten Steinhäuser innerhalb der Mauern von Alt-Québec, wo manche Gebäude über zweihundert Jahre alt sind. Von hier aus erreicht man die ganze Altstadt zu Fuß, auch bergauf. Im Winter sind die engen Gassen unter Schnee am schönsten.",
      es: "Una pequeña posada en una de las viejas casas de piedra dentro de las murallas del Viejo Quebec, donde algunos edificios tienen más de doscientos años. Desde aquí se va a pie a cualquier parte del casco antiguo, cuestas incluidas. En invierno, las calles estrechas están más bonitas que nunca bajo la nieve.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Stone inn facade with blue shutters on a narrow street',
        tone: 'birch',
        alt: {
          en: 'A grey stone inn with blue shutters on a narrow street in Old Québec',
          fr: 'Une auberge en pierre grise aux volets bleus dans une rue étroite du Vieux-Québec', de: "Ein graues Steingasthaus mit blauen Fensterläden in einer schmalen Gasse in Alt-Québec", es: "Una posada de piedra gris con contraventanas azules en una calle estrecha del Viejo Quebec",
        },
      },
      {
        subject: 'Bedroom with exposed beams and stone wall, snow outside',
        tone: 'snow',
        alt: {
          en: 'A bedroom with exposed wooden beams and a stone wall, snow on the windowsill',
          fr: 'Une chambre aux poutres apparentes et au mur de pierre, de la neige sur le rebord de la fenêtre', de: "Ein Schlafzimmer mit sichtbaren Holzbalken und Steinwand, Schnee auf dem Fensterbrett", es: "Un dormitorio con vigas de madera vistas y una pared de piedra, con nieve en el alféizar",
        },
      },
    ],
  },
  {
    id: 'stay-charlevoix-manor',
    slug: 'manoir-des-deux-battures',
    name: { en: "An old manor above the St. Lawrence in Charlevoix", fr: "Un vieux manoir au-dessus du Saint-Laurent, dans Charlevoix", de: "Ein alter Landsitz über dem Sankt-Lorenz-Strom in Charlevoix", es: "Una antigua casa señorial sobre el San Lorenzo, en Charlevoix" },
    regionId: 'charlevoix',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    style: { en: "Country manor on the river", fr: "Manoir de campagne au bord du fleuve", de: "Landsitz am Fluss", es: "Casa señorial junto al río" },
    summary: {
      en: 'An old manor high above the St. Lawrence in Charlevoix, with a long table and a longer view.',
      fr: "Un vieux manoir perché au-dessus du Saint-Laurent dans Charlevoix, avec une longue table et une vue plus longue encore.", de: "Ein altes Herrenhaus hoch über dem Sankt-Lorenz-Strom in Charlevoix, mit einer langen Tafel und einer noch weiteren Aussicht.", es: "Una antigua casa señorial en lo alto, sobre el San Lorenzo, en Charlevoix, con una mesa larga y unas vistas aún más largas.",
    },
    body: {
      en: "An old manor house high above the St. Lawrence in Charlevoix, a region known for its farm produce and its cooking. In summer, there are walks down to the shore. In winter, cross-country skiing, snowshoeing and dog-sledding are close by, and the river below fills with ice.",
      fr: "Un vieux manoir perché au-dessus du Saint-Laurent dans Charlevoix, région réputée pour ses produits du terroir et sa cuisine. L'été, des sentiers descendent jusqu'au rivage. L'hiver, ski de fond, raquette et traîneau à chiens sont tout proches, et le fleuve en contrebas se couvre de glace.",
      de: "Ein altes Herrenhaus hoch über dem Sankt-Lorenz-Strom in Charlevoix, einer Region, die für ihre Hofprodukte und ihre Küche bekannt ist. Im Sommer führen Wege hinunter zum Ufer. Im Winter sind Langlauf, Schneeschuhwandern und Hundeschlitten ganz in der Nähe, und der Fluss unten füllt sich mit Eis.",
      es: "Una antigua casa señorial en lo alto, sobre el San Lorenzo, en Charlevoix, una región conocida por sus productos de granja y su cocina. En verano hay caminos que bajan hasta la orilla. En invierno, el esquí de fondo, las raquetas de nieve y el trineo de perros están muy cerca, y el río se llena de hielo.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'White manor on a hill above the St. Lawrence, summer',
        tone: 'birch',
        alt: {
          en: 'A white manor house on a green hillside above the wide St. Lawrence',
          fr: 'Un manoir blanc sur une colline verte au-dessus du large Saint-Laurent', de: "Ein weißes Herrenhaus auf einem grünen Hang über dem breiten Sankt-Lorenz-Strom", es: "Una casa señorial blanca en una ladera verde sobre el ancho San Lorenzo",
        },
      },
      {
        subject: 'Ice floes on the river below snowy fields',
        tone: 'snow',
        alt: {
          en: 'Ice floes on the St. Lawrence below snow-covered fields in winter',
          fr: 'Glaces flottantes sur le Saint-Laurent, sous des champs enneigés, en hiver', de: "Eisschollen auf dem Sankt-Lorenz-Strom unter verschneiten Feldern im Winter", es: "Témpanos de hielo en el San Lorenzo bajo campos nevados en invierno",
        },
      },
    ],
  },
  {
    id: 'stay-montreal-hotel',
    slug: 'hotel-des-pignons',
    name: { en: "A townhouse hotel near Old Montréal", fr: "Un hôtel dans des maisons de ville, près du Vieux-Montréal", de: "Ein Stadthaus-Hotel nahe der Altstadt von Montréal", es: "Un hotel en casas adosadas cerca del Viejo Montreal" },
    regionId: 'montreal',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    style: { en: "Townhouse hotel", fr: "Hôtel dans des maisons de ville", de: "Stadthaus-Hotel", es: "Hotel en casas adosadas" },
    summary: {
      en: 'A row of greystone townhouses turned into a small hotel, close to Old Montréal and the good bakeries.',
      fr: "Une rangée de maisons de ville en pierre grise transformée en petit hôtel, près du Vieux-Montréal et des bonnes boulangeries.", de: "Eine Reihe von Greystone-Stadthäusern, umgebaut zu einem kleinen Hotel, nahe Alt-Montréal und den guten Bäckereien.", es: "Una hilera de casas de piedra gris convertidas en un pequeño hotel, cerca del Viejo Montreal y de las buenas panaderías.",
    },
    body: {
      en: "A small hotel in a row of Montréal greystone townhouses, keeping much of their old character inside. It is an easy walk to the Old Port and a short metro ride to the Plateau. Montréal takes its bagels seriously, and so should you.",
      fr: "Un petit hôtel dans une rangée de maisons de ville montréalaises en pierre grise, qui ont gardé une bonne part de leur cachet d'origine. Le Vieux-Port est à quelques minutes à pied et le Plateau à quelques stations de métro. Montréal prend ses bagels au sérieux, et vous devriez en faire autant.",
      de: "Ein kleines Hotel in einer Reihe Montrealer Greystone-Stadthäuser, die innen viel von ihrem alten Charakter bewahrt haben. Zum Alten Hafen ist es ein kurzer Spaziergang, zum Plateau eine kurze Metrofahrt. Montréal nimmt seine Bagels ernst, und das sollten Sie auch.",
      es: "Un pequeño hotel en una hilera de casas de piedra gris de Montreal, que conservan buena parte de su carácter original. El Puerto Viejo queda a un paseo y el Plateau, a un breve trayecto en metro. Montreal se toma muy en serio sus bagels, y usted también debería.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Greystone townhouse fronts with iron stairs, autumn',
        tone: 'autumn',
        alt: {
          en: 'Greystone townhouses with outdoor iron staircases and autumn trees',
          fr: 'Maisons de ville en pierre grise avec escaliers extérieurs en fer et arbres d’automne', de: "Greystone-Stadthäuser mit eisernen Außentreppen und herbstlichen Bäumen", es: "Casas adosadas de piedra gris con escaleras exteriores de hierro y árboles otoñales",
        },
      },
      {
        subject: 'Quiet hotel bar with cider bottles',
        tone: 'birch',
        alt: {
          en: 'A small, quiet hotel bar with bottles of cider on the shelves',
          fr: 'Un petit bar d’hôtel calme, des bouteilles de cidre sur les étagères', de: "Eine kleine, ruhige Hotelbar mit Cidreflaschen in den Regalen", es: "Un pequeño y tranquilo bar de hotel con botellas de sidra en las estanterías",
        },
      },
    ],
  },
  {
    id: 'stay-newfoundland-inn',
    slug: 'tickle-head-inn',
    name: { en: "A clapboard inn above a Newfoundland harbour", fr: "Une auberge en bardeaux au-dessus d’un port de Terre-Neuve", de: "Ein holzverschaltes Gasthaus über einem Hafen auf Neufundland", es: "Una posada de tablas sobre un puerto de Terranova" },
    regionId: 'newfoundland',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    style: { en: "Clifftop inn", fr: "Auberge en haut de falaise", de: "Gasthaus auf der Klippe", es: "Posada en el acantilado" },
    summary: {
      en: "A clapboard inn above a Newfoundland harbour. In late spring and early summer, icebergs drift past offshore.",
      fr: "Une auberge en bardeaux au-dessus d'un port de Terre-Neuve. À la fin du printemps et au début de l'été, des icebergs dérivent au large.",
      de: "Ein Gasthaus mit Holzschindeln über einem Hafen in Neufundland. Im späten Frühling und Frühsommer treiben Eisberge vor der Küste vorbei.",
      es: "Una posada de tablas sobre un puerto de Terranova. A finales de primavera y principios de verano, los icebergs pasan a la deriva frente a la costa.",
    },
    body: {
      en: "An inn in a restored clapboard house above a Newfoundland harbour, facing the open Atlantic. Icebergs drift down this coast in late spring and early summer, and humpbacks follow in July. Fog can change plans at short notice, and local hosts are good at changing them with you.",
      fr: "Une auberge dans une maison en bardeaux restaurée, au-dessus d'un port de Terre-Neuve, face à l'Atlantique. Les icebergs descendent le long de cette côte à la fin du printemps et au début de l'été, et les baleines à bosse suivent en juillet. Le brouillard peut changer les plans à tout moment, et les hôtes locaux savent les changer avec vous.",
      de: "Ein Gasthaus in einem restaurierten Schindelhaus über einem Hafen in Neufundland, mit Blick auf den offenen Atlantik. Im späten Frühling und Frühsommer treiben Eisberge an dieser Küste entlang, im Juli folgen die Buckelwale. Nebel kann Pläne kurzfristig ändern, und die Gastgeber vor Ort ändern sie geschickt mit Ihnen.",
      es: "Una posada en una casa de tablas restaurada sobre un puerto de Terranova, frente al Atlántico abierto. Los icebergs bajan por esta costa a finales de primavera y principios de verano, y las ballenas jorobadas llegan en julio. La niebla puede cambiar los planes sin aviso, y los anfitriones locales saben cambiarlos con usted.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Red clapboard inn on a cliff, iceberg in the bay',
        tone: 'lake',
        alt: {
          en: 'A red clapboard house on a cliff above a bay with an iceberg offshore',
          fr: 'Une maison rouge en bardeaux sur une falaise, un iceberg au large dans la baie', de: "Ein rotes Schindelhaus auf einer Klippe über einer Bucht, draußen ein Eisberg", es: "Una casa roja de tablones en un acantilado sobre una bahía con un iceberg frente a la costa",
        },
      },
      {
        subject: 'Fog rolling over a small harbour with fishing boats',
        tone: 'granite',
        alt: {
          en: 'Fog drifting over a small harbour with fishing boats and wooden stages',
          fr: 'Le brouillard sur un petit port, avec bateaux de pêche et quais en bois', de: "Nebel zieht über einen kleinen Hafen mit Fischerbooten und hölzernen Anlegern", es: "Niebla sobre un pequeño puerto con barcos de pesca y embarcaderos de madera",
        },
      },
    ],
  },
  {
    id: 'stay-cabot-cottages',
    slug: 'northfield-bluff-cottages',
    name: { en: "Seaside cottages on the Cabot Trail", fr: "Des cottages en bord de mer sur la piste Cabot", de: "Cottages am Meer am Cabot Trail", es: "Casitas junto al mar en el Cabot Trail" },
    regionId: 'cabot-trail',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    style: { en: "Seaside cottages", fr: "Cottages en bord de mer", de: "Cottages am Meer", es: "Casitas junto al mar" },
    summary: {
      en: 'Cottages on a bluff on the Cabot Trail, with the Gulf of St. Lawrence below and a fiddle somewhere nearby.',
      fr: "Des cottages sur un promontoire de la piste Cabot, avec le golfe du Saint-Laurent en contrebas et un violon jamais très loin.", de: "Cottages auf einer Steilküste am Cabot Trail, unten der Sankt-Lorenz-Golf und irgendwo in der Nähe eine Fiedel.", es: "Casitas sobre un promontorio del Cabot Trail, con el golfo de San Lorenzo abajo y un violín sonando en algún lugar cercano.",
    },
    body: {
      en: "Cottages on a grassy bluff along the Cabot Trail, looking down the coast. Pilot whales are often seen offshore in summer, and the Cape Breton Highlands trails are a short drive away. Bring a sweater even in August: the wind off the Gulf does not care what month it is.",
      fr: "Des cottages sur un promontoire herbeux le long de la piste Cabot, avec vue sur la côte. L'été, on aperçoit souvent des globicéphales au large, et les sentiers des hautes terres du Cap-Breton sont à quelques minutes en voiture. Prenez un pull même en août : le vent du golfe se moque bien du mois.",
      de: "Cottages auf einer grasbewachsenen Anhöhe am Cabot Trail mit Blick die Küste entlang. Im Sommer sieht man vor der Küste oft Grindwale, und die Wanderwege der Cape Breton Highlands sind eine kurze Fahrt entfernt. Packen Sie auch im August einen Pullover ein: Dem Wind vom Golf ist der Monat egal.",
      es: "Casitas en un promontorio cubierto de hierba a lo largo del Cabot Trail, con vistas a la costa. En verano se ven a menudo calderones frente a la costa, y los senderos de las tierras altas de Cabo Bretón están a un corto trayecto en coche. Lleve un jersey incluso en agosto: al viento del golfo no le importa el mes.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Shingled cottages on a green bluff above the sea',
        tone: 'forest',
        alt: {
          en: 'Small shingled cottages on a green bluff above a rocky coastline',
          fr: 'Petits cottages en bardeaux sur un promontoire vert au-dessus d’une côte rocheuse', de: "Kleine Schindel-Cottages auf einer grünen Steilküste über felsiger Küste", es: "Pequeñas casitas de tejuelas en un promontorio verde sobre una costa rocosa",
        },
      },
      {
        subject: 'Highland road in October colours',
        tone: 'autumn',
        alt: {
          en: 'A coastal highland road winding through red and orange autumn hills',
          fr: 'Une route côtière serpentant entre des collines rouges et orange en automne', de: "Eine Küstenstraße im Hochland windet sich durch rote und orangefarbene Herbsthügel", es: "Una carretera costera de montaña serpenteando entre colinas rojas y naranjas en otoño",
        },
      },
    ],
  },
  {
    id: 'stay-pei-farmhouse',
    slug: 'red-lane-farmhouse',
    name: { en: "A restored farmhouse on Prince Edward Island", fr: "Une ferme restaurée à l’Île-du-Prince-Édouard", de: "Ein restauriertes Farmhaus auf Prince Edward Island", es: "Una granja restaurada en la Isla del Príncipe Eduardo" },
    regionId: 'prince-edward-island',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    style: { en: "Restored farmhouse", fr: "Ferme restaurée", de: "Restauriertes Farmhaus", es: "Granja restaurada" },
    summary: {
      en: 'A restored farmhouse at the end of a red dirt lane, a short cycle from the beach.',
      fr: "Une ferme restaurée au bout d'un chemin de terre rouge, à quelques coups de pédale de la plage.", de: "Ein restauriertes Farmhaus am Ende eines roten Feldwegs, eine kurze Radtour vom Strand entfernt.", es: "Una granja restaurada al final de un camino de tierra roja, a un corto paseo en bici de la playa.",
    },
    body: {
      en: "A restored farmhouse among Prince Edward Island's potato fields, at the end of a red dirt lane. The Confederation Trail, built on the island's old railway line, makes for easy, quiet cycling. It is calm, green and the slowest place on this trip, on purpose.",
      fr: "Une ferme restaurée au milieu des champs de pommes de terre de l'Île-du-Prince-Édouard, au bout d'un chemin de terre rouge. Le sentier de la Confédération, aménagé sur l'ancienne voie ferrée de l'île, se parcourt facilement et tranquillement à vélo. C'est calme, vert, et l'étape la plus lente du voyage, volontairement.",
      de: "Ein restauriertes Farmhaus zwischen den Kartoffelfeldern von Prince Edward Island, am Ende eines roten Feldwegs. Der Confederation Trail auf der alten Bahntrasse der Insel eignet sich für leichte, ruhige Radtouren. Es ist ruhig, grün und mit Absicht der langsamste Ort dieser Reise.",
      es: "Una granja restaurada entre los campos de patatas de la Isla del Príncipe Eduardo, al final de un camino de tierra roja. El Confederation Trail, construido sobre la antigua vía de tren de la isla, permite pedalear con calma y sin esfuerzo. Es tranquilo, verde y el lugar más lento del viaje, a propósito.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'White farmhouse at the end of a red dirt road, fields',
        tone: 'birch',
        alt: {
          en: 'A white farmhouse at the end of a red dirt road between green fields',
          fr: 'Une ferme blanche au bout d’un chemin de terre rouge, entre des champs verts', de: "Ein weißes Farmhaus am Ende eines roten Feldwegs zwischen grünen Feldern", es: "Una granja blanca al final de un camino de tierra roja entre campos verdes",
        },
      },
      {
        subject: 'Bicycles leaning on a barn door',
        tone: 'autumn',
        alt: {
          en: 'Two bicycles leaning against a weathered red barn door',
          fr: 'Deux vélos appuyés contre la porte rouge et patinée d’une grange', de: "Zwei Fahrräder lehnen an einem verwitterten roten Scheunentor", es: "Dos bicicletas apoyadas en la puerta desgastada de un granero rojo",
        },
      },
    ],
  },
  {
    id: 'stay-muskoka-lodge',
    slug: 'granite-narrows-lodge',
    name: { en: "A lakeside lodge in Muskoka", fr: "Un lodge au bord d’un lac, en Muskoka", de: "Eine Lodge am See in Muskoka", es: "Un lodge junto a un lago en Muskoka" },
    regionId: 'muskoka',
    provinceId: 'ontario',
    frReview: 'needs-human-review',
    style: { en: "Lakeside lodge", fr: "Lodge au bord du lac", de: "Lodge am See", es: "Lodge junto al lago" },
    summary: {
      en: "A lakeside lodge on the granite and pine of Muskoka, a couple of hours' drive north of Toronto.",
      fr: "Un lodge au bord d'un lac, entre granit et pins, dans la région de Muskoka, à environ deux heures de route au nord de Toronto.",
      de: "Eine Lodge am See zwischen Granit und Kiefern in Muskoka, etwa zwei Autostunden nördlich von Toronto.",
      es: "Un lodge junto a un lago, entre granito y pinos, en Muskoka, a un par de horas en coche al norte de Toronto.",
    },
    body: {
      en: "A lodge on the granite and pine shore of a Muskoka lake, with canoes for exploring the water. Loons call across the lake at night, whether you asked them to or not. In autumn, the maples turn and the lake goes still. In winter, there is skating, snowshoeing and a lot of quiet.",
      fr: "Un lodge sur la rive de granit et de pins d'un lac de Muskoka, avec des canots pour explorer le plan d'eau. Les plongeons huards chantent sur le lac la nuit, qu'on le leur demande ou non. En automne, les érables rougissent et le lac devient immobile. L'hiver, on patine, on fait de la raquette et on profite du silence.",
      de: "Eine Lodge am Granit- und Kiefernufer eines Sees in Muskoka, mit Kanus, um das Wasser zu erkunden. Nachts rufen die Eistaucher über den See, ob man sie darum gebeten hat oder nicht. Im Herbst färben sich die Ahornbäume und der See wird still. Im Winter gibt es Eislaufen, Schneeschuhwandern und viel Ruhe.",
      es: "Un lodge en la orilla de granito y pinos de un lago de Muskoka, con canoas para explorar el agua. Por la noche, los colimbos cantan sobre el lago, se lo pida usted o no. En otoño, los arces cambian de color y el lago se queda quieto. En invierno hay patinaje, raquetas de nieve y mucha calma.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Wooden boathouse on granite shore, maples turning',
        tone: 'autumn',
        alt: {
          en: 'A wooden boathouse on a granite shore with maple trees turning red',
          fr: 'Un hangar à bateaux en bois sur une rive de granit, les érables virant au rouge', de: "Ein hölzernes Bootshaus an einem Granitufer mit sich rot färbenden Ahornbäumen", es: "Un cobertizo de barcas de madera en una orilla de granito con arces enrojeciendo",
        },
      },
      {
        subject: 'Skaters on a frozen bay in front of the lodge',
        tone: 'snow',
        alt: {
          en: 'People skating on a frozen bay in front of a lakeside lodge',
          fr: 'Des patineurs sur une baie gelée devant un lodge au bord du lac', de: "Menschen laufen Schlittschuh auf einer gefrorenen Bucht vor einer Lodge am See", es: "Gente patinando en una bahía helada frente a un lodge junto al lago",
        },
      },
    ],
  },
  {
    id: 'stay-okanagan-winery',
    slug: 'benchland-vineyard-suites',
    name: { en: "Vineyard suites above Okanagan Lake", fr: "Des suites dans un vignoble au-dessus du lac Okanagan", de: "Suiten auf einem Weingut über dem Okanagan Lake", es: "Suites en un viñedo sobre el lago Okanagan" },
    regionId: 'okanagan',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    style: { en: "Suites on a working vineyard", fr: "Suites dans un vignoble en activité", de: "Suiten auf einem Weingut", es: "Suites en un viñedo en activo" },
    summary: {
      en: "Suites among the vines above Okanagan Lake, in Canada's warm, dry wine country.",
      fr: "Des suites au milieu des vignes au-dessus du lac Okanagan, dans la région viticole chaude et sèche du Canada.",
      de: "Suiten zwischen den Reben über dem Okanagan Lake, im warmen, trockenen Weinland Kanadas.",
      es: "Suites entre las viñas sobre el lago Okanagan, en la zona vinícola cálida y seca de Canadá.",
    },
    body: {
      en: "The Okanagan is Canada's warm, dry corner, with summer days often above 30 °C. Suites on a working vineyard on the benchland above the lake suit families well, and the lake's beaches are close by. Fruit stands line the roads in July and August.",
      fr: "L'Okanagan est le coin chaud et sec du Canada, avec des journées d'été souvent au-dessus de 30 °C. Des suites dans un vignoble en activité, sur les terrasses au-dessus du lac, conviennent bien aux familles, et les plages du lac sont toutes proches. En juillet et en août, les étals de fruits bordent les routes.",
      de: "Das Okanagan ist Kanadas warme, trockene Ecke, mit Sommertagen oft über 30 °C. Suiten auf einem Weingut auf den Terrassen über dem See passen gut zu Familien, und die Strände am See sind nah. Im Juli und August säumen Obststände die Straßen.",
      es: "El Okanagan es el rincón cálido y seco de Canadá, con días de verano que a menudo superan los 30 °C. Unas suites en un viñedo en activo, en las terrazas sobre el lago, son ideales para familias, y las playas del lago están cerca. En julio y agosto, los puestos de fruta bordean las carreteras.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Vineyard rows above a long blue lake, summer',
        tone: 'lake',
        alt: {
          en: 'Rows of vines on a slope above a long blue lake in summer',
          fr: 'Rangs de vignes sur une pente au-dessus d’un long lac bleu, en été', de: "Rebzeilen an einem Hang über einem langen blauen See im Sommer", es: "Hileras de viñas en una ladera sobre un largo lago azul en verano",
        },
      },
      {
        subject: 'Shaded pool with children and dry hills behind',
        tone: 'birch',
        alt: {
          en: 'A shaded swimming pool with dry golden hills behind',
          fr: 'Une piscine ombragée, des collines sèches et dorées en arrière-plan', de: "Ein schattiger Pool vor trockenen goldenen Hügeln", es: "Una piscina a la sombra con colinas secas y doradas detrás",
        },
      },
    ],
  },
  {
    id: 'stay-whistler-chalet',
    slug: 'alder-ridge-chalet',
    name: { en: "A family chalet near the Whistler lifts", fr: "Un chalet familial près des remontées de Whistler", de: "Ein Familienchalet nahe den Liften von Whistler", es: "Un chalet familiar cerca de los remontes de Whistler" },
    regionId: 'whistler',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    style: { en: "Private chalet", fr: "Chalet privé", de: "Privates Chalet", es: "Chalet privado" },
    summary: {
      en: "A private chalet close to the Whistler lifts, with room for a family.",
      fr: "Un chalet privé près des remontées mécaniques de Whistler, avec de la place pour une famille.",
      de: "Ein privates Chalet nahe den Liften von Whistler, mit Platz für eine Familie.",
      es: "Un chalet privado cerca de los remontes de Whistler, con espacio para una familia.",
    },
    body: {
      en: "A private chalet in Whistler with space for a family or a group of friends, and a kitchen to cook in when you would rather not go out. In winter, the ski lifts are close by. In summer, the gondolas, lakes and bike trails are all close too.",
      fr: "Un chalet privé à Whistler avec de la place pour une famille ou un groupe d'amis, et une cuisine pour les soirs où l'on préfère ne pas sortir. L'hiver, les remontées mécaniques sont tout près. L'été, les télécabines, les lacs et les pistes de vélo le sont aussi.",
      de: "Ein privates Chalet in Whistler mit Platz für eine Familie oder eine Gruppe von Freunden und einer Küche für die Abende, an denen man lieber nicht ausgeht. Im Winter sind die Skilifte nah. Im Sommer sind es die Gondeln, Seen und Radwege ebenso.",
      es: "Un chalet privado en Whistler con espacio para una familia o un grupo de amigos, y una cocina para las noches en que se prefiere no salir. En invierno, los remontes están cerca. En verano, las góndolas, los lagos y los senderos de bicicleta también.",
    },
    seasons: ['summer', 'winter'],
    images: [
      {
        subject: 'Timber chalet in deep snow with hot tub steaming',
        tone: 'snow',
        alt: {
          en: 'A timber chalet in deep snow with steam rising from a hot tub on the deck',
          fr: 'Un chalet en bois dans la neige profonde, de la vapeur s’élevant du bain nordique sur la terrasse', de: "Ein Holzchalet in tiefem Schnee, auf der Terrasse dampft ein Whirlpool", es: "Un chalet de madera en la nieve profunda con vapor saliendo del jacuzzi de la terraza",
        },
      },
      {
        subject: 'Chalet deck in summer with mountain view',
        tone: 'forest',
        alt: {
          en: 'A chalet deck with chairs looking out over green forested mountains in summer',
          fr: 'La terrasse d’un chalet avec des chaises face aux montagnes boisées, en été', de: "Eine Chalet-Terrasse mit Stühlen und Blick auf grüne bewaldete Berge im Sommer", es: "La terraza de un chalet con sillas mirando a montañas verdes y boscosas en verano",
        },
      },
    ],
  },
  {
    id: 'stay-haida-gwaii-lodge',
    slug: 'spruce-shore-lodge',
    name: { en: "A small lodge at the forest edge on Haida Gwaii", fr: "Un petit lodge en lisière de forêt, à Haida Gwaii", de: "Eine kleine Lodge am Waldrand auf Haida Gwaii", es: "Un pequeño lodge al borde del bosque en Haida Gwaii" },
    regionId: 'haida-gwaii',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    style: { en: "Coastal guest lodge", fr: "Lodge côtier", de: "Gäste-Lodge an der Küste", es: "Lodge costero" },
    summary: {
      en: 'A small lodge on the edge of the forest on Haida Gwaii, a long way out in the Pacific and worth every kilometre.',
      fr: "Un petit lodge en lisière de forêt à Haida Gwaii, loin dans le Pacifique, et qui vaut chaque kilomètre.", de: "Eine kleine Lodge am Waldrand auf Haida Gwaii, weit draußen im Pazifik und jeden Kilometer wert.", es: "Un pequeño lodge al borde del bosque en Haida Gwaii, muy lejos en el Pacífico y que merece cada kilómetro.",
    },
    body: {
      en: "A small lodge between the spruce forest and a long beach on Haida Gwaii. These islands are the home of the Haida Nation, and visits to cultural sites are arranged through local Haida partners, on their terms. Days are for beach walks, fishing, or a boat trip south when the weather allows. Getting here takes a flight or a long ferry, and the weather sets the schedule.",
      fr: "Un petit lodge entre la forêt d'épinettes et une longue plage, à Haida Gwaii. Ces îles sont le territoire de la Nation haïda, et les visites des sites culturels s'organisent avec des partenaires haïdas locaux, selon leurs conditions. Les journées sont pour les balades sur la plage, la pêche, ou une sortie en bateau vers le sud quand la météo le permet. On y arrive en avion ou après une longue traversée en traversier, et c'est la météo qui fixe le programme.",
      de: "Eine kleine Lodge zwischen Fichtenwald und einem langen Strand auf Haida Gwaii. Diese Inseln sind die Heimat der Haida Nation, und Besuche kultureller Stätten werden über lokale Haida-Partner organisiert, zu ihren Bedingungen. Die Tage gehören Strandspaziergängen, dem Angeln oder einer Bootsfahrt nach Süden, wenn das Wetter es erlaubt. Man kommt per Flugzeug oder mit einer langen Fährfahrt, und das Wetter bestimmt den Zeitplan.",
      es: "Un pequeño lodge entre el bosque de píceas y una larga playa en Haida Gwaii. Estas islas son el hogar de la Nación Haida, y las visitas a sitios culturales se organizan con socios haida locales, en sus términos. Los días son para pasear por la playa, pescar o hacer una excursión en barco hacia el sur cuando el tiempo lo permite. Se llega en avión o tras un largo trayecto en ferry, y el tiempo marca el programa.",
    },
    seasons: ['summer'],
    images: [
      {
        subject: 'Mossy spruce forest opening onto a grey beach',
        tone: 'forest',
        alt: {
          en: 'A moss-covered spruce forest opening onto a long grey beach',
          fr: 'Une forêt d’épinettes moussues s’ouvrant sur une longue plage grise', de: "Ein moosbewachsener Fichtenwald öffnet sich auf einen langen grauen Strand", es: "Un bosque de abetos cubierto de musgo que se abre a una larga playa gris",
        },
      },
      {
        subject: 'Lodge windows at dusk with rain on the glass',
        tone: 'granite',
        alt: {
          en: 'Warm light in the windows of a small wooden lodge on a rainy evening',
          fr: 'Lumière chaude aux fenêtres d’un petit lodge en bois, un soir de pluie', de: "Warmes Licht in den Fenstern einer kleinen Holzlodge an einem regnerischen Abend", es: "Luz cálida en las ventanas de un pequeño lodge de madera en una tarde lluviosa",
        },
      },
    ],
  },
];
