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
    style: { en: 'Floating lodge, 9 rooms', fr: 'Lodge flottant, 9 chambres', de: "Schwimmende Lodge, 9 Zimmer", es: "Lodge flotante, 9 habitaciones" },
    summary: {
      en: 'A floating lodge moored in a sheltered inlet, reached only by floatplane. Bears on the shore, whales in the channel.',
      fr: "Un lodge flottant amarré dans une anse abritée, accessible uniquement en hydravion. Des ours sur la rive, des baleines dans le chenal.", de: "Eine schwimmende Lodge in einem geschützten Meeresarm, nur per Wasserflugzeug erreichbar. Bären am Ufer, Wale im Kanal.", es: "Un lodge flotante amarrado en una ensenada resguardada, al que solo se llega en hidroavión. Osos en la orilla, ballenas en el canal.",
    },
    body: {
      en: 'Nine cedar-panelled rooms on a floating platform, with a dining room that looks straight down the inlet. Guides take small groups out by boat each morning to the estuaries where grizzlies feed. Meals are mostly seafood and very good. There is no road, no mobile signal and, most evenings, no reason to miss either.',
      fr: "Neuf chambres lambrissées de cèdre sur une plateforme flottante, avec une salle à manger qui donne directement sur l'anse. Chaque matin, des guides emmènent de petits groupes en bateau vers les estuaires où se nourrissent les grizzlis. Les repas, surtout de la mer, sont excellents. Pas de route, pas de réseau mobile et, la plupart des soirs, aucune raison de regretter l'un ou l'autre.", de: "Neun mit Zedernholz verkleidete Zimmer auf einer schwimmenden Plattform und ein Speisesaal mit Blick den ganzen Meeresarm hinunter. Jeden Morgen bringen Guides kleine Gruppen per Boot zu den Flussmündungen, an denen Grizzlys fressen. Es gibt vor allem Meeresfrüchte, und zwar sehr gute. Keine Straße, kein Handyempfang und an den meisten Abenden kein Grund, eines von beiden zu vermissen.", es: "Nueve habitaciones revestidas de cedro sobre una plataforma flotante, con un comedor que mira directamente a lo largo de la ensenada. Cada mañana, los guías llevan a pequeños grupos en barco a los estuarios donde se alimentan los grizzlis. La comida es sobre todo marisco y pescado, y muy buena. No hay carretera ni cobertura móvil y, casi todas las noches, ninguna razón para echar de menos ninguna de las dos.",
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
    name: 'Driftline Inn',
    regionId: 'tofino-vancouver-island',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Beachfront inn, 16 rooms', fr: 'Auberge en bord de plage, 16 chambres', de: "Gasthaus am Strand, 16 Zimmer", es: "Posada frente a la playa, 16 habitaciones" },
    summary: {
      en: 'A cedar inn on a long Pacific beach near Tofino. Whales in summer, storms in winter, both best seen from the window seat.',
      fr: "Une auberge en cèdre sur une longue plage du Pacifique près de Tofino. Les baleines l'été, les tempêtes l'hiver, les deux vues idéalement depuis la banquette de la fenêtre.", de: "Ein Gasthaus aus Zedernholz an einem langen Pazifikstrand bei Tofino. Wale im Sommer, Stürme im Winter, beides am schönsten vom Fensterplatz aus.", es: "Una posada de cedro en una larga playa del Pacífico cerca de Tofino. Ballenas en verano, temporales en invierno, y ambos se ven mejor desde el banco junto a la ventana.",
    },
    body: {
      en: 'Sixteen rooms, every one facing the ocean, with fireplaces and deep baths. In summer, the inn arranges whale-watching and boat trips to hot springs. In winter, guests come for the storms, and the staff hand out rain gear at the door. The restaurant is small and the chef forages more than you would expect.',
      fr: "Seize chambres, toutes face à l'océan, avec cheminée et baignoire profonde. L'été, l'auberge organise l'observation des baleines et des sorties en bateau vers les sources chaudes. L'hiver, on vient pour les tempêtes, et le personnel distribue des vêtements de pluie à la porte. Le restaurant est petit et le chef cueille plus qu'on ne l'imagine.", de: "Sechzehn Zimmer, alle mit Blick aufs Meer, mit Kamin und tiefen Badewannen. Im Sommer organisiert das Haus Walbeobachtung und Bootsausflüge zu heißen Quellen. Im Winter kommen die Gäste wegen der Stürme, und an der Tür wird Regenkleidung ausgegeben. Das Restaurant ist klein, und der Koch sammelt mehr selbst, als man erwarten würde.", es: "Dieciséis habitaciones, todas frente al océano, con chimenea y bañeras profundas. En verano, la posada organiza avistamiento de ballenas y excursiones en barco a fuentes termales. En invierno, los huéspedes vienen por los temporales, y en la puerta les dan ropa impermeable. El restaurante es pequeño y el chef recolecta en la naturaleza más de lo que uno esperaría.",
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
    name: 'Larchmere Chalet',
    regionId: 'banff-lake-louise',
    provinceId: 'alberta',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Mountain chalet, 12 rooms', fr: 'Chalet de montagne, 12 chambres', de: "Berg-Chalet, 12 Zimmer", es: "Chalet de montaña, 12 habitaciones" },
    summary: {
      en: 'A timber chalet near Lake Louise, close enough to walk to the trails and far enough from the car parks.',
      fr: "Un chalet en bois près de Lake Louise, assez proche pour rejoindre les sentiers à pied, et assez loin des parkings.", de: "Ein Holzchalet bei Lake Louise, nah genug, um zu Fuß zu den Wegen zu gehen, und weit genug von den Parkplätzen.", es: "Un chalet de madera cerca de Lake Louise, lo bastante cerca para ir andando a los senderos y lo bastante lejos de los aparcamientos.",
    },
    body: {
      en: 'Twelve rooms in an old-style timber chalet with a big stone fireplace and a boot room that sees a lot of use. In summer, guests walk straight out to the trails before the day visitors arrive. In winter, it is ski-in distance from cross-country trails and a short drive from the ski hill. Breakfast is serious, because the walking is.',
      fr: "Douze chambres dans un chalet en bois à l'ancienne, avec une grande cheminée en pierre et un vestiaire à chaussures très utilisé. L'été, on part à pied sur les sentiers avant l'arrivée des visiteurs à la journée. L'hiver, les pistes de ski de fond sont à deux pas et la station de ski à quelques minutes en voiture. Le petit-déjeuner est copieux, parce que la marche l'est aussi.", de: "Zwölf Zimmer in einem Holzchalet alter Bauart mit großem Steinkamin und einem Stiefelraum, der viel benutzt wird. Im Sommer gehen die Gäste direkt los, bevor die Tagesbesucher kommen. Im Winter liegen die Langlaufloipen vor der Tür und das Skigebiet eine kurze Fahrt entfernt. Das Frühstück ist ernst gemeint, denn das Wandern ist es auch.", es: "Doce habitaciones en un chalet de madera de estilo antiguo, con una gran chimenea de piedra y un cuarto para las botas que se usa mucho. En verano, los huéspedes salen directamente a los senderos antes de que lleguen los visitantes de un día. En invierno, las pistas de esquí de fondo están a la puerta y la estación de esquí, a un breve trayecto en coche. El desayuno va en serio, porque las caminatas también.",
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
    name: 'Whitebark Cabins',
    regionId: 'jasper',
    provinceId: 'alberta',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Log cabins by a river, 14 cabins', fr: 'Chalets en rondins au bord d’une rivière, 14 chalets', de: "Blockhütten am Fluss, 14 Hütten", es: "Cabañas de troncos junto al río, 14 cabañas" },
    summary: {
      en: 'Log cabins on a bend of the river outside Jasper. Elk on the lawn are not an extra charge.',
      fr: "Des chalets en rondins dans un méandre de la rivière, près de Jasper. Les wapitis sur la pelouse ne sont pas facturés en supplément.", de: "Blockhütten an einer Flussbiegung außerhalb von Jasper. Die Wapitis auf dem Rasen kosten nichts extra.", es: "Cabañas de troncos en un meandro del río a las afueras de Jasper. Los uapitíes del césped no se cobran aparte.",
    },
    body: {
      en: 'Fourteen cabins spaced out among the pines, each with a porch, a woodstove and a small kitchen. Jasper town is ten minutes away, but the nights are dark enough for proper stargazing. Elk wander through in the autumn, and staff will remind you, politely, to keep your distance. It is simple, warm and very comfortable.',
      fr: "Quatorze chalets répartis entre les pins, chacun avec une véranda, un poêle à bois et une petite cuisine. Le village de Jasper est à dix minutes, mais les nuits sont assez noires pour observer vraiment les étoiles. Les wapitis passent à l'automne, et le personnel vous rappellera, poliment, de garder vos distances. C'est simple, chaleureux et très confortable.", de: "Vierzehn Hütten, locker zwischen den Kiefern verteilt, jede mit Veranda, Holzofen und kleiner Küche. Jasper ist zehn Minuten entfernt, doch die Nächte sind dunkel genug für richtiges Sternegucken. Im Herbst ziehen Wapitis hindurch, und das Personal erinnert Sie höflich daran, Abstand zu halten. Einfach, warm und sehr komfortabel.", es: "Catorce cabañas repartidas entre los pinos, cada una con porche, estufa de leña y una pequeña cocina. El pueblo de Jasper está a diez minutos, pero las noches son lo bastante oscuras para mirar las estrellas de verdad. En otoño pasan uapitíes, y el personal le recordará, con educación, que mantenga la distancia. Sencillo, cálido y muy cómodo.",
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
    name: 'The Lantern House',
    regionId: 'vancouver',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Harbourside boutique hotel, 40 rooms', fr: 'Hôtel de charme sur le port, 40 chambres', de: "Boutiquehotel am Hafen, 40 Zimmer", es: "Hotel boutique junto al puerto, 40 habitaciones" },
    summary: {
      en: 'A small hotel on the harbour, a short walk from the seawall and the floatplane terminal.',
      fr: "Un petit hôtel sur le port, à quelques pas de la digue et du terminal des hydravions.", de: "Ein kleines Hotel am Hafen, ein kurzer Spaziergang zur Uferpromenade und zum Wasserflugzeug-Terminal.", es: "Un pequeño hotel en el puerto, a un corto paseo del malecón y de la terminal de hidroaviones.",
    },
    body: {
      en: 'Forty quiet rooms looking over the harbour to the North Shore mountains. The floatplanes take off outside, which is more relaxing than it sounds. Bikes are free for the seawall, and the concierge is very good at restaurant tables. It works as the first night after a long flight and the last night before one.',
      fr: "Quarante chambres calmes donnant sur le port et les montagnes de la rive nord. Les hydravions décollent juste devant, ce qui est plus apaisant qu'il n'y paraît. Les vélos sont gratuits pour la digue, et le concierge excelle à trouver une table au restaurant. C'est l'endroit idéal pour la première nuit après un long vol et la dernière avant le suivant.", de: "Vierzig ruhige Zimmer mit Blick über den Hafen auf die Berge der North Shore. Draußen starten die Wasserflugzeuge, was entspannender ist, als es klingt. Fahrräder für die Uferpromenade sind kostenlos, und der Concierge ist sehr gut darin, Restauranttische zu bekommen. Ideal für die erste Nacht nach einem langen Flug und die letzte davor.", es: "Cuarenta habitaciones tranquilas con vistas al puerto y a las montañas de la North Shore. Los hidroaviones despegan delante, y es más relajante de lo que parece. Las bicicletas para el malecón son gratuitas y el conserje es muy bueno consiguiendo mesa en los restaurantes. Funciona como primera noche tras un vuelo largo y como última antes de otro.",
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
    name: 'Tundra Line Lodge',
    regionId: 'churchill',
    provinceId: 'manitoba',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Fly-in tundra lodge, 10 rooms', fr: 'Lodge de toundra accessible en avion, 10 chambres', de: "Tundra-Lodge mit Anreise per Flugzeug, 10 Zimmer", es: "Lodge en la tundra con acceso en avioneta, 10 habitaciones" },
    summary: {
      en: 'A fenced lodge on the Hudson Bay coast, where the polar bears come to you. Arrival is by small plane.',
      fr: "Un lodge clôturé sur la côte de la baie d'Hudson, où ce sont les ours polaires qui viennent à vous. On y arrive en petit avion.", de: "Eine eingezäunte Lodge an der Küste der Hudson Bay, wo die Eisbären zu Ihnen kommen. Anreise per Kleinflugzeug.", es: "Un lodge vallado en la costa de la bahía de Hudson, donde los osos polares vienen a usted. Se llega en avioneta.",
    },
    body: {
      en: 'Ten rooms inside a secure compound on the coast, with bears regularly walking past the fence. Guided walks on the tundra are led by armed, highly trained guides, and taken very seriously. In summer, the same coast has belugas, wildflowers and bears resting on the rocks. Flights in and out depend on the weather, so the lodge always plans a day either side.',
      fr: "Dix chambres dans un enclos sécurisé sur la côte, avec des ours qui passent régulièrement le long de la clôture. Les marches sur la toundra sont menées par des guides armés et très bien formés, et prises très au sérieux. L'été, la même côte offre bélugas, fleurs sauvages et ours au repos sur les rochers. Les vols aller et retour dépendent de la météo : le lodge prévoit toujours une journée de marge de chaque côté.", de: "Zehn Zimmer in einem gesicherten Gelände an der Küste, an dessen Zaun regelmäßig Bären vorbeilaufen. Geführte Tundrawanderungen leiten bewaffnete, bestens ausgebildete Guides, und sie werden sehr ernst genommen. Im Sommer gibt es an derselben Küste Belugas, Wildblumen und Bären, die auf den Felsen ruhen. Flüge hin und zurück hängen vom Wetter ab, deshalb plant die Lodge immer einen Tag Puffer auf beiden Seiten ein.", es: "Diez habitaciones dentro de un recinto seguro en la costa, con osos pasando a menudo junto a la valla. Las caminatas por la tundra las dirigen guías armados y muy bien formados, y se toman muy en serio. En verano, la misma costa tiene belugas, flores silvestres y osos descansando en las rocas. Los vuelos de ida y vuelta dependen del tiempo, así que el lodge siempre prevé un día de margen antes y después.",
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
    name: 'Kettle Lake Cabins',
    regionId: 'whitehorse',
    provinceId: 'yukon',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Wilderness cabins, 6 cabins', fr: 'Chalets en pleine nature, 6 chalets', de: "Wildnishütten, 6 Hütten", es: "Cabañas en plena naturaleza, 6 cabañas" },
    summary: {
      en: 'Six cabins on a quiet lake outside Whitehorse, chosen for dark skies and a short walk to the shore.',
      fr: "Six chalets au bord d'un lac tranquille près de Whitehorse, choisis pour leur ciel noir et la proximité du rivage.", de: "Sechs Hütten an einem stillen See außerhalb von Whitehorse, ausgewählt wegen des dunklen Himmels und des kurzen Wegs zum Ufer.", es: "Seis cabañas junto a un lago tranquilo a las afueras de Whitehorse, elegidas por sus cielos oscuros y el corto paseo hasta la orilla.",
    },
    body: {
      en: 'Six wood-heated cabins, each with big north-facing windows, a proper bathroom and a very good duvet. The hosts watch the sky and knock on your door when the aurora comes out. In summer, the same lake is for canoeing under the midnight sun. Dinner is in the main lodge, and usually involves a story about a moose.',
      fr: "Six chalets chauffés au bois, chacun avec de grandes fenêtres orientées au nord, une vraie salle de bain et une excellente couette. Les hôtes surveillent le ciel et frappent à votre porte quand les aurores apparaissent. L'été, le même lac se parcourt en canot sous le soleil de minuit. Le dîner est servi dans le bâtiment principal, et comprend généralement une histoire d'orignal.", de: "Sechs holzbeheizte Hütten, jede mit großen Nordfenstern, einem richtigen Bad und einer sehr guten Daunendecke. Die Gastgeber beobachten den Himmel und klopfen an Ihre Tür, wenn das Polarlicht erscheint. Im Sommer paddelt man auf demselben See unter der Mitternachtssonne. Gegessen wird in der Haupt-Lodge, und meist kommt dabei eine Geschichte über einen Elch vor.", es: "Seis cabañas con calefacción de leña, cada una con grandes ventanales orientados al norte, un baño de verdad y un edredón muy bueno. Los anfitriones vigilan el cielo y llaman a su puerta cuando sale la aurora. En verano, el mismo lago es para remar en canoa bajo el sol de medianoche. La cena es en el lodge principal y suele incluir una historia sobre un alce.",
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
    name: 'Quartz Bay Lodge',
    regionId: 'yellowknife',
    provinceId: 'northwest-territories',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Lakeside lodge, 8 rooms', fr: 'Lodge au bord du lac, 8 chambres', de: "Lodge am See, 8 Zimmer", es: "Lodge junto al lago, 8 habitaciones" },
    summary: {
      en: 'A small lodge on the granite shore of Great Slave Lake, reached by ski-plane in winter and floatplane in summer.',
      fr: "Un petit lodge sur la rive de granit du Grand lac des Esclaves, accessible en avion sur skis l'hiver et en hydravion l'été.", de: "Eine kleine Lodge am Granitufer des Großen Sklavensees, im Winter per Skiflugzeug, im Sommer per Wasserflugzeug erreichbar.", es: "Un pequeño lodge en la orilla de granito del Gran Lago del Esclavo, al que se llega en avioneta con esquís en invierno y en hidroavión en verano.",
    },
    body: {
      en: 'Eight rooms and a heated viewing deck, about 30 minutes by small plane from Yellowknife. The skies here are among the clearest in the country for the aurora. In winter, days are for snowshoeing and ice fishing; in summer, for paddling among islands and fishing for lake trout. Getting in and out depends on ice and weather, and twice a year, at freeze-up and break-up, nobody goes anywhere.',
      fr: "Huit chambres et une terrasse d'observation chauffée, à environ 30 minutes de petit avion de Yellowknife. Le ciel y est l'un des plus clairs du pays pour les aurores. L'hiver, les journées se passent en raquettes et à la pêche sur glace ; l'été, à pagayer entre les îles et à pêcher le touladi. L'accès dépend de la glace et de la météo, et deux fois par an, au gel et à la débâcle, personne ne va nulle part.", de: "Acht Zimmer und eine beheizte Aussichtsterrasse, rund 30 Minuten mit dem Kleinflugzeug von Yellowknife. Der Himmel hier gehört zu den klarsten des Landes für Polarlichter. Im Winter gehören die Tage dem Schneeschuhwandern und Eisfischen, im Sommer dem Paddeln zwischen Inseln und dem Fischen auf Seesaiblinge. An- und Abreise hängen von Eis und Wetter ab, und zweimal im Jahr, beim Zufrieren und beim Aufbrechen des Eises, geht niemand irgendwohin.", es: "Ocho habitaciones y una terraza mirador con calefacción, a unos 30 minutos en avioneta de Yellowknife. Aquí los cielos están entre los más despejados del país para ver la aurora. En invierno, los días son para raquetas de nieve y pesca en el hielo; en verano, para remar entre islas y pescar truchas de lago. Entrar y salir depende del hielo y del tiempo, y dos veces al año, cuando el lago se congela y cuando se deshiela, nadie va a ninguna parte.",
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
    name: 'Auberge de la Côte-Grise',
    regionId: 'quebec-city',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Inn in a stone house, 18 rooms', fr: 'Auberge dans une maison de pierre, 18 chambres', de: "Gasthaus in einem Steinhaus, 18 Zimmer", es: "Posada en una casa de piedra, 18 habitaciones" },
    summary: {
      en: 'A stone house inside the walls of Old Québec, with thick walls, low beams and a very good breakfast.',
      fr: "Une maison de pierre à l'intérieur des remparts du Vieux-Québec, avec des murs épais, des poutres basses et un excellent petit-déjeuner.", de: "Ein Steinhaus innerhalb der Mauern von Alt-Québec, mit dicken Wänden, niedrigen Balken und einem sehr guten Frühstück.", es: "Una casa de piedra dentro de las murallas del Viejo Quebec, con muros gruesos, vigas bajas y un desayuno excelente.",
    },
    body: {
      en: 'Eighteen rooms across two joined stone houses, some over two hundred years old. Mind your head on the beams. The location means you can walk everywhere in the old town, including uphill. In winter, there is a fire in the lounge and boots drying by the door.',
      fr: "Dix-huit chambres réparties dans deux maisons de pierre attenantes, dont certaines ont plus de deux cents ans. Attention à votre tête sous les poutres. L'emplacement permet de tout faire à pied dans la vieille ville, y compris les montées. L'hiver, un feu brûle dans le salon et les bottes sèchent près de la porte.", de: "Achtzehn Zimmer in zwei verbundenen Steinhäusern, einige über zweihundert Jahre alt. Vorsicht mit dem Kopf an den Balken. Dank der Lage erreichen Sie in der Altstadt alles zu Fuß, auch bergauf. Im Winter brennt in der Lounge ein Feuer, und an der Tür trocknen die Stiefel.", es: "Dieciocho habitaciones repartidas entre dos casas de piedra unidas, algunas de más de doscientos años. Cuidado con la cabeza en las vigas. La ubicación permite ir a pie a todas partes en el casco antiguo, cuesta arriba incluida. En invierno hay fuego en el salón y botas secándose junto a la puerta.",
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
    name: 'Manoir des Deux-Battures',
    regionId: 'charlevoix',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Country manor on the river, 22 rooms', fr: 'Manoir de campagne au bord du fleuve, 22 chambres', de: "Landsitz am Fluss, 22 Zimmer", es: "Casa señorial junto al río, 22 habitaciones" },
    summary: {
      en: 'An old manor high above the St. Lawrence in Charlevoix, with a long table and a longer view.',
      fr: "Un vieux manoir perché au-dessus du Saint-Laurent dans Charlevoix, avec une longue table et une vue plus longue encore.", de: "Ein altes Herrenhaus hoch über dem Sankt-Lorenz-Strom in Charlevoix, mit einer langen Tafel und einer noch weiteren Aussicht.", es: "Una antigua casa señorial en lo alto, sobre el San Lorenzo, en Charlevoix, con una mesa larga y unas vistas aún más largas.",
    },
    body: {
      en: 'Twenty-two rooms in a white manor house and two cottages in the garden. The kitchen cooks almost entirely from Charlevoix farms, so the menu changes with the week. In summer, there are walking trails down to the shore. In winter, the manor arranges cross-country skiing, snowshoes and dog-sledding, and the river below fills with ice.',
      fr: "Vingt-deux chambres dans un manoir blanc et deux maisonnettes dans le jardin. La cuisine travaille presque exclusivement avec les fermes de Charlevoix, si bien que le menu change chaque semaine. L'été, des sentiers descendent jusqu'au rivage. L'hiver, le manoir organise ski de fond, raquettes et traîneau à chiens, et le fleuve en contrebas se couvre de glace.", de: "Zweiundzwanzig Zimmer in einem weißen Herrenhaus und zwei Cottages im Garten. Die Küche kocht fast ausschließlich mit Produkten von Höfen aus Charlevoix, daher wechselt die Karte jede Woche. Im Sommer führen Wanderwege hinunter zum Ufer. Im Winter organisiert das Haus Langlauf, Schneeschuhe und Hundeschlittenfahrten, und der Fluss unten füllt sich mit Eis.", es: "Veintidós habitaciones en una casa señorial blanca y dos casitas en el jardín. La cocina trabaja casi solo con productos de granjas de Charlevoix, así que el menú cambia cada semana. En verano, hay senderos que bajan hasta la orilla. En invierno, la casa organiza esquí de fondo, raquetas y trineos de perros, y el río, abajo, se llena de hielo.",
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
    name: 'Hôtel des Pignons',
    regionId: 'montreal',
    provinceId: 'quebec',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Townhouse hotel, 30 rooms', fr: 'Hôtel dans des maisons de ville, 30 chambres', de: "Stadthaus-Hotel, 30 Zimmer", es: "Hotel en casas adosadas, 30 habitaciones" },
    summary: {
      en: 'A row of greystone townhouses turned into a small hotel, close to Old Montréal and the good bakeries.',
      fr: "Une rangée de maisons de ville en pierre grise transformée en petit hôtel, près du Vieux-Montréal et des bonnes boulangeries.", de: "Eine Reihe von Greystone-Stadthäusern, umgebaut zu einem kleinen Hotel, nahe Alt-Montréal und den guten Bäckereien.", es: "Una hilera de casas de piedra gris convertidas en un pequeño hotel, cerca del Viejo Montreal y de las buenas panaderías.",
    },
    body: {
      en: 'Thirty rooms behind three connected greystone fronts, with original staircases and modern bathrooms. The bar downstairs is quiet and serves Québec ciders. It is an easy walk to the old port and a short metro ride to the Plateau. The staff will argue with you about bagels if you let them.',
      fr: "Trente chambres derrière trois façades de pierre grise reliées entre elles, avec escaliers d'origine et salles de bain modernes. Le bar du rez-de-chaussée est calme et sert des cidres du Québec. Le Vieux-Port est à quelques minutes à pied et le Plateau à quelques stations de métro. Le personnel débattra de bagels avec vous si vous le laissez faire.", de: "Dreißig Zimmer hinter drei verbundenen Greystone-Fassaden, mit originalen Treppenhäusern und modernen Bädern. Die Bar im Erdgeschoss ist ruhig und schenkt Cidre aus Québec aus. Zum alten Hafen ist es ein leichter Spaziergang, zum Plateau eine kurze Metrofahrt. Das Personal diskutiert gern mit Ihnen über Bagels, wenn Sie es zulassen.", es: "Treinta habitaciones tras tres fachadas de piedra gris comunicadas, con escaleras originales y baños modernos. El bar de la planta baja es tranquilo y sirve sidras de Quebec. El puerto viejo está a un paseo y el Plateau, a un corto trayecto en metro. El personal discutirá con usted sobre bagels si le da pie.",
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
    name: 'Tickle Head Inn',
    regionId: 'newfoundland',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Clifftop inn, 11 rooms', fr: 'Auberge en haut de falaise, 11 chambres', de: "Gasthaus auf der Klippe, 11 Zimmer", es: "Posada en el acantilado, 11 habitaciones" },
    summary: {
      en: 'A clapboard inn above a Newfoundland harbour. In June, you might see icebergs from bed.',
      fr: "Une auberge en bardeaux au-dessus d'un port de Terre-Neuve. En juin, vous verrez peut-être des icebergs depuis votre lit.", de: "Ein Schindelhaus über einem Hafen in Neufundland. Im Juni sehen Sie vielleicht vom Bett aus Eisberge.", es: "Una posada de tablones de madera sobre un puerto de Terranova. En junio quizá vea icebergs desde la cama.",
    },
    body: {
      en: 'Eleven rooms in a restored merchant’s house painted a colour that would look odd anywhere else. The windows face the open Atlantic, where icebergs drift past in early summer and humpbacks follow in July. Dinner is cod, cooked several ways, all good. The owners know everyone, which is useful when the fog comes in and plans change.',
      fr: "Onze chambres dans une maison de marchand restaurée, peinte d'une couleur qui paraîtrait étrange n'importe où ailleurs. Les fenêtres donnent sur l'Atlantique, où les icebergs dérivent en début d'été et où les baleines à bosse leur succèdent en juillet. Le dîner, c'est de la morue, cuisinée de plusieurs façons, toutes bonnes. Les propriétaires connaissent tout le monde, ce qui est utile quand le brouillard arrive et que les plans changent.", de: "Elf Zimmer in einem restaurierten Kaufmannshaus, gestrichen in einer Farbe, die überall sonst seltsam wirken würde. Die Fenster blicken auf den offenen Atlantik, wo im Frühsommer Eisberge vorbeitreiben und im Juli Buckelwale folgen. Zum Abendessen gibt es Kabeljau, auf verschiedene Arten zubereitet, alle gut. Die Besitzer kennen jeden, was nützlich ist, wenn der Nebel kommt und sich Pläne ändern.", es: "Once habitaciones en una casa de comerciante restaurada, pintada de un color que en cualquier otro lugar quedaría raro. Las ventanas dan al Atlántico abierto, donde a principios de verano pasan icebergs a la deriva y en julio llegan las jorobadas. La cena es bacalao, preparado de varias maneras, todas buenas. Los dueños conocen a todo el mundo, algo muy útil cuando entra la niebla y cambian los planes.",
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
    name: 'Northfield Bluff Cottages',
    regionId: 'cabot-trail',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Seaside cottages, 8 cottages', fr: 'Cottages en bord de mer, 8 cottages', de: "Cottages am Meer, 8 Cottages", es: "Casitas junto al mar, 8 casitas" },
    summary: {
      en: 'Cottages on a bluff on the Cabot Trail, with the Gulf of St. Lawrence below and a fiddle somewhere nearby.',
      fr: "Des cottages sur un promontoire de la piste Cabot, avec le golfe du Saint-Laurent en contrebas et un violon jamais très loin.", de: "Cottages auf einer Steilküste am Cabot Trail, unten der Sankt-Lorenz-Golf und irgendwo in der Nähe eine Fiedel.", es: "Casitas sobre un promontorio del Cabot Trail, con el golfo de San Lorenzo abajo y un violín sonando en algún lugar cercano.",
    },
    body: {
      en: 'Eight shingled cottages spread along a grassy bluff, each with a deck, a kitchen and a view down the coast. Pilot whales are often seen offshore in summer. The highlands trails start a short drive away. Bring a sweater even in August: the wind off the Gulf does not care what month it is.',
      fr: "Huit cottages en bardeaux répartis le long d'un promontoire herbeux, chacun avec une terrasse, une cuisine et une vue sur la côte. On aperçoit souvent des globicéphales au large l'été. Les sentiers des Hautes-Terres sont à quelques minutes en voiture. Prenez un pull même en août : le vent du golfe se moque bien du mois.", de: "Acht mit Schindeln verkleidete Cottages auf einer grasbewachsenen Steilküste, jedes mit Terrasse, Küche und Blick die Küste entlang. Im Sommer sieht man vor der Küste oft Grindwale. Die Wanderwege des Hochlands beginnen eine kurze Fahrt entfernt. Nehmen Sie auch im August einen Pullover mit: Der Wind vom Golf kümmert sich nicht um den Monat.", es: "Ocho casitas de tejuelas repartidas por un promontorio de hierba, cada una con terraza, cocina y vistas a lo largo de la costa. En verano se ven a menudo calderones frente a la costa. Los senderos de las tierras altas empiezan a poca distancia en coche. Traiga un jersey incluso en agosto: al viento del golfo no le importa en qué mes estamos.",
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
    name: 'Red Lane Farmhouse',
    regionId: 'prince-edward-island',
    provinceId: 'atlantic-canada',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Restored farmhouse, 6 rooms', fr: 'Ferme restaurée, 6 chambres', de: "Restauriertes Farmhaus, 6 Zimmer", es: "Granja restaurada, 6 habitaciones" },
    summary: {
      en: 'A restored farmhouse at the end of a red dirt lane, a short cycle from the beach.',
      fr: "Une ferme restaurée au bout d'un chemin de terre rouge, à quelques coups de pédale de la plage.", de: "Ein restauriertes Farmhaus am Ende eines roten Feldwegs, eine kurze Radtour vom Strand entfernt.", es: "Una granja restaurada al final de un camino de tierra roja, a un corto paseo en bici de la playa.",
    },
    body: {
      en: 'Six bright rooms in an old farmhouse surrounded by potato fields and a vegetable garden that supplies breakfast. Bicycles are in the barn, and the old rail trail runs past the end of the lane. The hosts can tell you where to find the best oysters that day. It is calm, green and the slowest place on this trip, on purpose.',
      fr: "Six chambres lumineuses dans une ancienne ferme entourée de champs de pommes de terre et d'un potager qui fournit le petit-déjeuner. Les vélos sont dans la grange, et l'ancienne voie ferrée passe au bout du chemin. Les hôtes vous diront où trouver les meilleures huîtres du jour. C'est calme, vert, et l'étape la plus lente du voyage, volontairement.", de: "Sechs helle Zimmer in einem alten Farmhaus, umgeben von Kartoffelfeldern und einem Gemüsegarten, der das Frühstück liefert. Die Fahrräder stehen in der Scheune, und der alte Bahntrassenweg führt am Ende des Feldwegs vorbei. Die Gastgeber sagen Ihnen, wo es an diesem Tag die besten Austern gibt. Ruhig, grün und mit Absicht der langsamste Ort dieser Reise.", es: "Seis habitaciones luminosas en una antigua granja rodeada de campos de patatas y de un huerto que surte el desayuno. Las bicicletas están en el granero y la antigua vía verde pasa al final del camino. Los anfitriones le dirán dónde encontrar las mejores ostras ese día. Tranquilo, verde y, a propósito, el lugar más pausado de este viaje.",
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
    name: 'Granite Narrows Lodge',
    regionId: 'muskoka',
    provinceId: 'ontario',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Lakeside lodge, 24 rooms', fr: 'Lodge au bord du lac, 24 chambres', de: "Lodge am See, 24 Zimmer", es: "Lodge junto al lago, 24 habitaciones" },
    summary: {
      en: 'A lakeside lodge on the granite and pine of Muskoka, about two and a half hours north of Toronto.',
      fr: "Un lodge au bord d'un lac, entre le granit et les pins de Muskoka, à environ deux heures et demie au nord de Toronto.", de: "Eine Lodge am See zwischen Granit und Kiefern in Muskoka, etwa zweieinhalb Stunden nördlich von Toronto.", es: "Un lodge junto al lago entre el granito y los pinos de Muskoka, a unas dos horas y media al norte de Toronto.",
    },
    body: {
      en: 'Twenty-four rooms in a main lodge and cabins along the shore, with canoes and a wooden boat for evening cruises. Loons call across the water at night, whether you asked them to or not. In autumn, the maples turn and the lake goes still. In winter, there is skating on the bay, snowshoeing and a sauna by the ice.',
      fr: "Vingt-quatre chambres réparties entre le bâtiment principal et des chalets au bord de l'eau, avec des canots et un bateau en bois pour les sorties du soir. La nuit, les huards s'appellent sur le lac, que vous l'ayez demandé ou non. À l'automne, les érables changent de couleur et le lac s'immobilise. L'hiver, on patine dans la baie, on fait de la raquette et on profite d'un sauna au bord de la glace.", de: "Vierundzwanzig Zimmer im Haupthaus und in Hütten am Ufer, mit Kanus und einem Holzboot für Abendfahrten. Nachts rufen Seetaucher über das Wasser, ob Sie es bestellt haben oder nicht. Im Herbst färben sich die Ahornbäume, und der See wird still. Im Winter gibt es Eislaufen in der Bucht, Schneeschuhwandern und eine Sauna am Eis.", es: "Veinticuatro habitaciones en el edificio principal y en cabañas a lo largo de la orilla, con canoas y una barca de madera para paseos al atardecer. Por la noche los colimbos cantan sobre el agua, lo haya pedido o no. En otoño, los arces cambian de color y el lago se queda quieto. En invierno se patina en la bahía, se sale con raquetas y hay una sauna junto al hielo.",
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
    name: 'Benchland Vineyard Suites',
    regionId: 'okanagan',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Suites on a working vineyard, 10 suites', fr: 'Suites dans un vignoble en activité, 10 suites', de: "Suiten auf einem Weingut, 10 Suiten", es: "Suites en un viñedo en activo, 10 suites" },
    summary: {
      en: 'Ten suites among the vines above Okanagan Lake, with a pool for the children and a tasting room for everyone else.',
      fr: "Dix suites au milieu des vignes au-dessus du lac Okanagan, avec une piscine pour les enfants et une salle de dégustation pour les autres.", de: "Zehn Suiten zwischen den Reben über dem Okanagan Lake, mit Pool für die Kinder und Verkostungsraum für alle anderen.", es: "Diez suites entre viñedos sobre el lago Okanagan, con piscina para los niños y sala de catas para todos los demás.",
    },
    body: {
      en: 'The Okanagan is Canada’s warm, dry corner, with summer days often above 30 °C. These suites sit on a working vineyard on the benchland above the lake, with family suites and a shaded pool. The beach is a ten-minute drive, and fruit stands line the road in July and August. The wine is good, and the staff are honest about which ones.',
      fr: "L'Okanagan est le coin chaud et sec du Canada, avec des journées d'été qui dépassent souvent 30 °C. Ces suites se trouvent dans un vignoble en activité, sur les terrasses au-dessus du lac, avec des suites familiales et une piscine ombragée. La plage est à dix minutes en voiture, et les étals de fruits bordent la route en juillet et en août. Le vin est bon, et le personnel vous dira honnêtement lesquels.", de: "Das Okanagan ist Kanadas warme, trockene Ecke, mit Sommertagen oft über 30 °C. Diese Suiten liegen auf einem bewirtschafteten Weingut auf der Terrasse über dem See, mit Familiensuiten und einem schattigen Pool. Zum Strand sind es zehn Minuten mit dem Auto, und im Juli und August säumen Obststände die Straße. Der Wein ist gut, und das Team sagt Ihnen ehrlich, welcher.", es: "El Okanagan es el rincón cálido y seco de Canadá, con días de verano que a menudo superan los 30 °C. Estas suites están en un viñedo en activo, en las terrazas sobre el lago, con suites familiares y una piscina a la sombra. La playa está a diez minutos en coche y en julio y agosto la carretera se llena de puestos de fruta. El vino es bueno, y el equipo le dirá con sinceridad cuál.",
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
    name: 'Alder Ridge Chalet',
    regionId: 'whistler',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Private chalet, 5 bedrooms', fr: 'Chalet privé, 5 chambres', de: "Privates Chalet, 5 Schlafzimmer", es: "Chalet privado, 5 dormitorios" },
    summary: {
      en: 'A five-bedroom chalet a short walk from the Whistler lifts, with a hot tub and room for a family.',
      fr: "Un chalet de cinq chambres à quelques pas des remontées de Whistler, avec un bain nordique et de la place pour une famille.", de: "Ein Chalet mit fünf Schlafzimmern, wenige Gehminuten von den Liften in Whistler, mit Whirlpool und Platz für eine Familie.", es: "Un chalet de cinco dormitorios a un corto paseo de los remontes de Whistler, con jacuzzi y sitio para una familia.",
    },
    body: {
      en: 'A private chalet with five bedrooms, a big kitchen and a hot tub on the deck. In winter, you can ski back to within a few metres of the door. In summer, the gondolas, lakes and bike trails are all close, and the chalet comes with a stack of board games for the evenings. A cook can be arranged for some nights, so nobody has to do the washing up.',
      fr: "Un chalet privé de cinq chambres, avec une grande cuisine et un bain nordique sur la terrasse. L'hiver, on revient à skis à quelques mètres de la porte. L'été, les télécabines, les lacs et les pistes de vélo sont tout proches, et le chalet dispose d'une pile de jeux de société pour les soirées. Un cuisinier peut venir certains soirs, pour que personne n'ait à faire la vaisselle.", de: "Ein privates Chalet mit fünf Schlafzimmern, großer Küche und Whirlpool auf der Terrasse. Im Winter fahren Sie mit Skiern bis wenige Meter vor die Tür. Im Sommer sind Gondeln, Seen und Radwege ganz nah, und für die Abende liegt ein Stapel Brettspiele bereit. An einigen Abenden lässt sich ein Koch organisieren, damit niemand abwaschen muss.", es: "Un chalet privado con cinco dormitorios, una gran cocina y jacuzzi en la terraza. En invierno se vuelve esquiando hasta pocos metros de la puerta. En verano, las góndolas, los lagos y las rutas en bici quedan cerca, y el chalet tiene un montón de juegos de mesa para las tardes. Algunas noches se puede contratar a un cocinero, para que nadie tenga que fregar.",
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
    name: 'Spruce Shore Lodge',
    regionId: 'haida-gwaii',
    provinceId: 'british-columbia',
    frReview: 'needs-human-review',
    placeholder: true,
    style: { en: 'Coastal guest lodge, 7 rooms', fr: 'Lodge côtier, 7 chambres', de: "Gäste-Lodge an der Küste, 7 Zimmer", es: "Lodge costero, 7 habitaciones" },
    summary: {
      en: 'A small lodge on the edge of the forest on Haida Gwaii, a long way out in the Pacific and worth every kilometre.',
      fr: "Un petit lodge en lisière de forêt à Haida Gwaii, loin dans le Pacifique, et qui vaut chaque kilomètre.", de: "Eine kleine Lodge am Waldrand auf Haida Gwaii, weit draußen im Pazifik und jeden Kilometer wert.", es: "Un pequeño lodge al borde del bosque en Haida Gwaii, muy lejos en el Pacífico y que merece cada kilómetro.",
    },
    body: {
      en: 'Seven rooms looking over a long beach, backed by moss-covered spruce. Haida Gwaii is the home of the Haida Nation, and the lodge arranges visits to cultural sites through local partners, on their terms. Days are for beach walks, fishing, or a boat trip south when the weather allows. Getting here takes a flight or a long ferry, and the weather sets the schedule.',
      fr: "Sept chambres face à une longue plage, adossées à des épinettes couvertes de mousse. Haida Gwaii est le territoire de la Nation haïda, et le lodge organise des visites de sites culturels avec des partenaires locaux, selon leurs conditions. Les journées se passent en balades sur la plage, à la pêche, ou en sortie en bateau vers le sud quand la météo le permet. On arrive ici en avion ou par un long trajet en traversier, et c'est la météo qui fixe le programme.", de: "Sieben Zimmer mit Blick auf einen langen Strand, dahinter moosbewachsene Fichten. Haida Gwaii ist die Heimat der Haida Nation, und die Lodge organisiert Besuche kultureller Stätten über lokale Partner, zu deren Bedingungen. Die Tage gehören Strandspaziergängen, dem Angeln oder einer Bootsfahrt nach Süden, wenn das Wetter es zulässt. Man kommt mit dem Flugzeug oder einer langen Fährfahrt her, und das Wetter bestimmt den Zeitplan.", es: "Siete habitaciones con vistas a una larga playa, con abetos cubiertos de musgo detrás. Haida Gwaii es el hogar de la Nación Haida, y el lodge organiza visitas a lugares culturales con socios locales, en sus términos. Los días son para pasear por la playa, pescar o hacer una excursión en barco hacia el sur cuando el tiempo lo permite. Se llega en avión o en un largo trayecto en ferry, y el tiempo marca el horario.",
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
