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
    name: { en: 'Vancouver', fr: 'Vancouver', de: "Vancouver", es: "Vancouver" },
    summary: {
      en: 'A city with mountains at one end of the street and the ocean at the other.',
      fr: 'Une ville avec la montagne au bout d’une rue et l’océan au bout de l’autre.', de: "Eine Stadt mit Bergen am einen Ende der Straße und dem Ozean am anderen.", es: "Una ciudad con montañas al final de una calle y el océano al final de la otra.",
    },
    body: {
      en: 'Stanley Park is bigger than New York’s Central Park and mostly forest. Granville Island has the market, and the North Shore mountains are 30 minutes from downtown. The food is very good, especially anything Pacific or Asian. It rains a lot from November to March, which locals mention less than visitors do.',
      fr: 'Le parc Stanley est plus grand que Central Park à New York, et surtout boisé. Granville Island a son marché, et les montagnes de la rive nord sont à 30 minutes du centre. On y mange très bien, surtout tout ce qui vient du Pacifique ou d’Asie. Il pleut beaucoup de novembre à mars, ce dont les habitants parlent moins que les visiteurs.', de: "Der Stanley Park ist größer als der Central Park in New York und besteht größtenteils aus Wald. Auf Granville Island liegt der Markt, und die Berge der North Shore sind 30 Minuten vom Zentrum entfernt. Das Essen ist sehr gut, vor allem alles Pazifische oder Asiatische. Von November bis März regnet es viel, was Einheimische seltener erwähnen als Besucher.", es: "Stanley Park es más grande que el Central Park de Nueva York y casi todo es bosque. Granville Island tiene el mercado, y las montañas de la North Shore están a 30 minutos del centro. Se come muy bien, sobre todo cocina del Pacífico o asiática. De noviembre a marzo llueve mucho, algo que los locales mencionan menos que los visitantes.",
    },
    bestMonths: [5, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A seawall path between forest and ocean, with mountains behind', fr: 'Une promenade entre forêt et océan, montagnes en arrière-plan', de: "Ein Uferweg zwischen Wald und Ozean, dahinter Berge", es: "Un paseo marítimo entre el bosque y el océano, con montañas detrás" },
        subject: 'Stanley Park seawall on a clear evening',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'City towers under snow-capped mountains on a grey day', fr: 'Les tours de la ville sous des montagnes enneigées, par temps gris', de: "Hochhäuser unter schneebedeckten Bergen an einem grauen Tag", es: "Torres de la ciudad bajo montañas nevadas en un día gris" },
        subject: 'Downtown Vancouver below snowy North Shore peaks',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Cycling the seawall around Stanley Park', fr: 'Le tour du parc Stanley à vélo, le long de la digue', de: "Radtour auf der Uferpromenade rund um den Stanley Park", es: "En bici por el malecón alrededor de Stanley Park" },
        { en: 'Lunch at the Granville Island market', fr: 'Déjeuner au marché de Granville Island', de: "Mittagessen auf dem Markt von Granville Island", es: "Almuerzo en el mercado de Granville Island" },
        { en: 'A floatplane hop to Victoria or the Gulf Islands', fr: 'Un saut en hydravion vers Victoria ou les îles Gulf', de: "Ein kurzer Wasserflugzeug-Hüpfer nach Victoria oder zu den Gulf Islands", es: "Un salto en hidroavión a Victoria o a las islas del Golfo" },
      ],
      winter: [
        { en: 'Ski in the morning, sushi in the evening', fr: 'Ski le matin, sushis le soir', de: "Morgens Ski fahren, abends Sushi", es: "Esquí por la mañana, sushi por la noche" },
        { en: 'Museums and galleries for the rainy days, of which there are several', fr: 'Musées et galeries pour les jours de pluie, qui ne manquent pas', de: "Museen und Galerien für die Regentage, von denen es einige gibt", es: "Museos y galerías para los días de lluvia, que no son pocos" },
      ],
    },
    placeId: 'vancouver',
    frReview: 'needs-human-review',
  },
  {
    id: 'whistler',
    slug: 'whistler',
    provinceId: 'british-columbia',
    name: { en: 'Whistler', fr: 'Whistler', de: "Whistler", es: "Whistler" },
    summary: {
      en: 'Two big mountains, one car-free village, two hours from Vancouver.',
      fr: 'Deux grandes montagnes, un village piéton, à deux heures de Vancouver.', de: "Zwei große Berge, ein autofreies Dorf, zwei Stunden von Vancouver.", es: "Dos grandes montañas, un pueblo sin coches, a dos horas de Vancouver.",
    },
    body: {
      en: 'Whistler and Blackcomb are linked by the Peak 2 Peak gondola, which crosses the valley in about 11 minutes. Winter is about skiing and snow, usually from late November to April. In summer the lifts carry hikers and mountain bikers instead. The drive up the Sea-to-Sky Highway is half the point.',
      fr: 'Whistler et Blackcomb sont reliées par la télécabine Peak 2 Peak, qui traverse la vallée en 11 minutes environ. L’hiver, c’est le ski et la neige, en général de fin novembre à avril. L’été, les remontées transportent randonneurs et vététistes. La route Sea-to-Sky fait la moitié du plaisir.', de: "Whistler und Blackcomb sind durch die Peak-2-Peak-Gondel verbunden, die das Tal in etwa 11 Minuten überquert. Im Winter dreht sich alles um Ski und Schnee, meist von Ende November bis April. Im Sommer bringen die Lifte stattdessen Wanderer und Mountainbiker nach oben. Die Fahrt auf dem Sea-to-Sky Highway ist schon die halbe Reise.", es: "Whistler y Blackcomb están unidos por la góndola Peak 2 Peak, que cruza el valle en unos 11 minutos. El invierno es esquí y nieve, normalmente de finales de noviembre a abril. En verano, los remontes suben a senderistas y ciclistas de montaña. La carretera Sea-to-Sky ya es medio viaje.",
    },
    bestMonths: [1, 2, 3, 7, 8, 12],
    images: {
      summer: {
        alt: { en: 'Hikers on an alpine ridge above a turquoise lake', fr: 'Des randonneurs sur une crête alpine au-dessus d’un lac turquoise', de: "Wanderer auf einem alpinen Grat über einem türkisfarbenen See", es: "Senderistas en una cresta alpina sobre un lago turquesa" },
        subject: 'Alpine trail above a glacial lake, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A gondola cabin over a snowy valley', fr: 'Une cabine de télécabine au-dessus d’une vallée enneigée', de: "Eine Gondelkabine über einem verschneiten Tal", es: "Una cabina de góndola sobre un valle nevado" },
        subject: 'Gondola over a snowy valley, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Alpine hiking straight off the gondola', fr: 'La randonnée alpine dès la sortie de la télécabine', de: "Bergwandern direkt ab der Gondel", es: "Senderismo alpino nada más bajar de la góndola" },
        { en: 'Warm lakes for swimming in the valley', fr: 'Des lacs tièdes pour se baigner dans la vallée', de: "Warme Badeseen im Tal", es: "Lagos templados para bañarse en el valle" },
        { en: 'Heli-hiking on glaciers nearby', fr: 'L’héli-randonnée sur les glaciers voisins', de: "Heli-Hiking auf Gletschern ganz in der Nähe", es: "Heli-senderismo por glaciares cercanos" },
      ],
      winter: [
        { en: 'More than 200 marked runs across two mountains', fr: 'Plus de 200 pistes balisées sur deux montagnes', de: "Mehr als 200 markierte Abfahrten an zwei Bergen", es: "Más de 200 pistas balizadas en dos montañas" },
        { en: 'Snowshoeing and cross-country skiing in the Callaghan Valley', fr: 'La raquette et le ski de fond dans la vallée Callaghan', de: "Schneeschuhwandern und Langlauf im Callaghan Valley", es: "Raquetas de nieve y esquí de fondo en el valle de Callaghan" },
        { en: 'Heli-skiing, for those with the legs for it', fr: 'L’héliski, pour ceux qui ont les jambes', de: "Heli-Skiing, für alle mit den passenden Beinen", es: "Heli-esquí, para quien tenga piernas para ello" },
      ],
    },
    placeId: 'whistler',
    frReview: 'needs-human-review',
  },
  {
    id: 'tofino-vancouver-island',
    slug: 'tofino-vancouver-island',
    provinceId: 'british-columbia',
    name: { en: 'Tofino & Vancouver Island', fr: 'Tofino et l’île de Vancouver', de: "Tofino & Vancouver Island", es: "Tofino y la isla de Vancouver" },
    summary: {
      en: 'Long beaches, old rainforest and the open Pacific, at the end of a winding road.',
      fr: 'De longues plages, une vieille forêt pluviale et le Pacifique, au bout d’une route sinueuse.', de: "Lange Strände, alter Regenwald und der offene Pazifik am Ende einer kurvigen Straße.", es: "Largas playas, selva antigua y el Pacífico abierto al final de una carretera sinuosa.",
    },
    body: {
      en: 'Vancouver Island is roughly the size of Belgium, with Victoria at the bottom and Tofino on the wild west coast. Pacific Rim National Park Reserve has the beaches and the boardwalk trails through old cedar. Grey whales pass in spring, and orcas and humpbacks are about in summer. From November to February, people come to watch the storms.',
      fr: 'L’île de Vancouver a à peu près la taille de la Belgique, avec Victoria au sud et Tofino sur la côte ouest, plus sauvage. La réserve de parc national Pacific Rim offre les plages et les sentiers sur pilotis entre les vieux cèdres. Les baleines grises passent au printemps, orques et baleines à bosse sont là en été. De novembre à février, on vient regarder les tempêtes.', de: "Vancouver Island ist etwa so groß wie Belgien, mit Victoria im Süden und Tofino an der wilden Westküste. Der Pacific Rim National Park Reserve hat die Strände und die Bohlenwege durch alte Zedern. Grauwale ziehen im Frühjahr vorbei, Orcas und Buckelwale sind im Sommer da. Von November bis Februar kommen Menschen, um die Stürme zu beobachten.", es: "La isla de Vancouver tiene más o menos el tamaño de Bélgica, con Victoria en el sur y Tofino en la salvaje costa oeste. La Reserva del Parque Nacional Pacific Rim tiene las playas y las pasarelas entre cedros centenarios. Las ballenas grises pasan en primavera, y en verano hay orcas y jorobadas. De noviembre a febrero, la gente viene a ver los temporales.",
    },
    bestMonths: [4, 5, 6, 7, 8, 9, 11, 12],
    images: {
      summer: {
        alt: { en: 'A wide sandy beach with surfers and forested headlands', fr: 'Une large plage de sable avec des surfeurs et des caps boisés', de: "Ein breiter Sandstrand mit Surfern und bewaldeten Landspitzen", es: "Una amplia playa de arena con surfistas y cabos cubiertos de bosque" },
        subject: 'Surfers on Long Beach, early evening',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'Huge waves breaking on dark rocks under a heavy sky', fr: 'De grosses vagues sur des rochers sombres, sous un ciel lourd', de: "Riesige Wellen brechen unter schwerem Himmel an dunklen Felsen", es: "Olas enormes rompiendo en rocas oscuras bajo un cielo cargado" },
        subject: 'Winter storm swell near Tofino',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Whale and bear-watching boats out of Tofino', fr: 'Les sorties en bateau pour voir baleines et ours depuis Tofino', de: "Wal- und Bärenbeobachtung per Boot ab Tofino", es: "Barcos para ver ballenas y osos desde Tofino" },
        { en: 'Surf lessons in cold, friendly water', fr: 'Des cours de surf dans une eau froide mais accueillante', de: "Surfstunden in kaltem, freundlichem Wasser", es: "Clases de surf en aguas frías y amables" },
        { en: 'Victoria’s harbour and gardens', fr: 'Le port et les jardins de Victoria', de: "Hafen und Gärten von Victoria", es: "El puerto y los jardines de Victoria" },
      ],
      winter: [
        { en: 'Storm watching from a warm room with a big window', fr: 'Regarder les tempêtes depuis une pièce chaude avec une grande fenêtre', de: "Sturmbeobachtung aus einem warmen Zimmer mit großem Fenster", es: "Ver los temporales desde una habitación cálida con un gran ventanal" },
        { en: 'Empty beaches and rainforest walks in the drizzle', fr: 'Des plages désertes et des balades en forêt sous la bruine', de: "Leere Strände und Regenwaldwanderungen im Nieselregen", es: "Playas vacías y paseos por la selva bajo la llovizna" },
      ],
    },
    placeId: 'tofino',
    frReview: 'needs-human-review',
  },
  {
    id: 'great-bear-rainforest',
    slug: 'great-bear-rainforest',
    provinceId: 'british-columbia',
    name: { en: 'Great Bear Rainforest', fr: 'Forêt du Grand Ours', de: "Great Bear Rainforest", es: "Great Bear Rainforest" },
    summary: {
      en: 'A coast of fjords and temperate rainforest, with more bears than people.',
      fr: 'Une côte de fjords et de forêt pluviale tempérée, avec plus d’ours que d’habitants.', de: "Eine Küste aus Fjorden und gemäßigtem Regenwald, mit mehr Bären als Menschen.", es: "Una costa de fiordos y selva templada, con más osos que personas.",
    },
    body: {
      en: 'The Great Bear Rainforest runs along BC’s central and north coast, and most of it is reachable only by boat or floatplane. Grizzlies fish the salmon rivers from late August to October. It is also home to the spirit bear, a black bear with a white coat, seen in only a few places. First Nations have lived here for thousands of years, and the best trips are run with them.',
      fr: 'La forêt du Grand Ours longe la côte centrale et nord de la Colombie-Britannique, et l’essentiel n’est accessible qu’en bateau ou en hydravion. Les grizzlis pêchent le saumon dans les rivières de fin août à octobre. C’est aussi le territoire de l’ours esprit, un ours noir à la fourrure blanche, visible en très peu d’endroits. Les Premières Nations vivent ici depuis des milliers d’années, et les meilleurs séjours se font avec elles.', de: "Der Great Bear Rainforest erstreckt sich entlang der mittleren und nördlichen Küste von BC, und der größte Teil ist nur per Boot oder Wasserflugzeug erreichbar. Von Ende August bis Oktober fischen Grizzlys in den Lachsflüssen. Hier lebt auch der Geisterbär, ein Schwarzbär mit weißem Fell, der nur an wenigen Orten zu sehen ist. First Nations leben hier seit Jahrtausenden, und die besten Reisen werden mit ihnen durchgeführt.", es: "El Great Bear Rainforest se extiende por la costa central y norte de Columbia Británica, y casi todo él solo es accesible en barco o hidroavión. Los grizzlis pescan en los ríos salmoneros de finales de agosto a octubre. También es el hogar del oso espíritu, un oso negro de pelaje blanco que solo se ve en unos pocos lugares. Las Primeras Naciones viven aquí desde hace miles de años, y los mejores viajes se hacen con ellas.",
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A grizzly bear catching salmon in a shallow river', fr: 'Un grizzli attrapant un saumon dans une rivière peu profonde', de: "Ein Grizzly fängt einen Lachs in einem flachen Fluss", es: "Un oso grizzly atrapando un salmón en un río poco profundo" },
        subject: 'Grizzly on a salmon river, late September',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'Mist hanging over a dark fjord and forest', fr: 'De la brume au-dessus d’un fjord sombre et de la forêt', de: "Nebel über einem dunklen Fjord und Wald", es: "Niebla suspendida sobre un fiordo oscuro y el bosque" },
        subject: 'Mist over a quiet fjord, November',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Grizzlies on the salmon rivers, late August to October', fr: 'Les grizzlis sur les rivières à saumons, de fin août à octobre', de: "Grizzlys an den Lachsflüssen, Ende August bis Oktober", es: "Grizzlis en los ríos del salmón, de finales de agosto a octubre" },
        { en: 'Humpbacks feeding in the channels', fr: 'Les baleines à bosse qui se nourrissent dans les chenaux', de: "Buckelwale beim Fressen in den Kanälen", es: "Ballenas jorobadas alimentándose en los canales" },
        { en: 'A chance of a spirit bear, with patience and the right guide', fr: 'Une chance de voir un ours esprit, avec de la patience et le bon guide', de: "Die Chance auf einen Geisterbären, mit Geduld und dem richtigen Guide", es: "La posibilidad de ver un oso espíritu, con paciencia y el guía adecuado" },
      ],
      winter: [
        { en: 'Most lodges close from October to May. We’d come back in June.', fr: 'La plupart des lodges ferment d’octobre à mai. Nous reviendrions en juin.', de: "Die meisten Lodges sind von Oktober bis Mai geschlossen. Wir würden im Juni wiederkommen.", es: "La mayoría de los lodges cierran de octubre a mayo. Nosotros volveríamos en junio." },
      ],
    },
    placeId: 'bella-coola',
    frReview: 'needs-human-review',
  },
  {
    id: 'okanagan',
    slug: 'okanagan',
    provinceId: 'british-columbia',
    name: { en: 'Okanagan', fr: 'Okanagan', de: "Okanagan", es: "Okanagan" },
    summary: {
      en: 'Lakes, orchards and wineries in BC’s warm, dry interior.',
      fr: 'Des lacs, des vergers et des vignobles dans l’intérieur chaud et sec de la Colombie-Britannique.', de: "Seen, Obstgärten und Weingüter im warmen, trockenen Inneren von BC.", es: "Lagos, huertos y bodegas en el interior cálido y seco de Columbia Británica.",
    },
    body: {
      en: 'The Okanagan Valley is a long chain of lakes with Kelowna in the middle. Summers are hot and dry, which surprises people who expected BC to be all rain. There are more than 180 wineries, plus fruit stands selling cherries in July and peaches in August. In winter, the ski hills above the valley get light, dry snow.',
      fr: 'La vallée de l’Okanagan est une longue chaîne de lacs, avec Kelowna au milieu. Les étés sont chauds et secs, ce qui surprend ceux qui imaginaient une Colombie-Britannique toujours sous la pluie. On y compte plus de 180 domaines viticoles, et des étals de fruits : cerises en juillet, pêches en août. L’hiver, les stations au-dessus de la vallée reçoivent une neige légère et sèche.', de: "Das Okanagan Valley ist eine lange Kette von Seen mit Kelowna in der Mitte. Die Sommer sind heiß und trocken, was jene überrascht, die BC nur mit Regen verbinden. Es gibt mehr als 180 Weingüter, dazu Obststände mit Kirschen im Juli und Pfirsichen im August. Im Winter fällt in den Skigebieten über dem Tal leichter, trockener Schnee.", es: "El valle del Okanagan es una larga cadena de lagos con Kelowna en el centro. Los veranos son calurosos y secos, algo que sorprende a quien esperaba que Columbia Británica fuera todo lluvia. Hay más de 180 bodegas, además de puestos de fruta con cerezas en julio y melocotones en agosto. En invierno, las estaciones de esquí sobre el valle reciben nieve ligera y seca.",
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Vineyard rows sloping down to a blue lake', fr: 'Des rangs de vigne qui descendent vers un lac bleu', de: "Rebzeilen, die zu einem blauen See abfallen", es: "Hileras de viñas que bajan hacia un lago azul" },
        subject: 'Vineyards above Okanagan Lake, September',
        tone: 'autumn',
      },
      winter: {
        alt: { en: 'Frosted trees on a sunny ski slope', fr: 'Des arbres givrés sur une piste ensoleillée', de: "Bereifte Bäume an einem sonnigen Skihang", es: "Árboles escarchados en una pista de esquí soleada" },
        subject: 'Snow-ghost trees on an Okanagan ski hill',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Wine tasting by bike, boat or designated driver', fr: 'La dégustation à vélo, en bateau ou avec un chauffeur', de: "Weinprobe per Rad, Boot oder mit Fahrer", es: "Catas de vino en bici, en barco o con conductor" },
        { en: 'Swimming in a lake that is actually warm', fr: 'Se baigner dans un lac vraiment tiède', de: "Baden in einem See, der wirklich warm ist", es: "Bañarse en un lago que está templado de verdad" },
        { en: 'Cycling the old Kettle Valley rail trail', fr: 'Le vélo sur l’ancienne voie ferrée de Kettle Valley', de: "Radtour auf dem alten Kettle Valley Rail Trail", es: "En bici por la antigua vía del Kettle Valley" },
      ],
      winter: [
        { en: 'Dry powder at the valley’s ski hills', fr: 'De la poudreuse sèche dans les stations de la vallée', de: "Trockener Pulverschnee in den Skigebieten des Tals", es: "Nieve polvo seca en las estaciones del valle" },
        { en: 'Icewine, when the cold arrives in time', fr: 'Le vin de glace, quand le froid arrive à temps', de: "Eiswein, wenn die Kälte rechtzeitig kommt", es: "Vino de hielo, cuando el frío llega a tiempo" },
      ],
    },
    placeId: 'kelowna',
    frReview: 'needs-human-review',
  },
  {
    id: 'haida-gwaii',
    slug: 'haida-gwaii',
    provinceId: 'british-columbia',
    name: { en: 'Haida Gwaii', fr: 'Haida Gwaii', de: "Haida Gwaii", es: "Haida Gwaii" },
    summary: {
      en: 'An island chain off the north coast, home of the Haida Nation.',
      fr: 'Un archipel au large de la côte nord, territoire de la Nation haïda.', de: "Eine Inselkette vor der Nordküste, Heimat der Haida Nation.", es: "Un archipiélago frente a la costa norte, hogar de la Nación Haida.",
    },
    body: {
      en: 'Haida Gwaii is around 150 islands, reached by a short flight or a seven-hour ferry from Prince Rupert. The Haida Heritage Centre at Kay Llnagaay is the place to start. In the south, Gwaii Haanas is protected from mountaintop to sea floor, and its old village sites are visited only by boat or floatplane, with an orientation first. It is remote, rainy and unlike anywhere else in Canada.',
      fr: 'Haida Gwaii compte environ 150 îles, accessibles par un vol court ou par sept heures de traversier depuis Prince Rupert. Le centre du patrimoine haïda de Kay Llnagaay est le meilleur point de départ. Au sud, Gwaii Haanas est protégé du sommet des montagnes jusqu’au fond de la mer, et ses anciens villages ne se visitent qu’en bateau ou en hydravion, après une séance d’orientation. C’est isolé, pluvieux, et ne ressemble à aucun autre endroit au Canada.', de: "Haida Gwaii besteht aus rund 150 Inseln, erreichbar mit einem kurzen Flug oder einer siebenstündigen Fähre ab Prince Rupert. Das Haida Heritage Centre in Kay Llnagaay ist der richtige Ausgangspunkt. Im Süden ist Gwaii Haanas vom Berggipfel bis zum Meeresgrund geschützt, und die alten Dorfstätten werden nur per Boot oder Wasserflugzeug besucht, nach einer vorherigen Einführung. Abgelegen, regnerisch und anders als jeder andere Ort in Kanada.", es: "Haida Gwaii son unas 150 islas, a las que se llega en un vuelo corto o en un ferry de siete horas desde Prince Rupert. El Haida Heritage Centre de Kay Llnagaay es el lugar para empezar. En el sur, Gwaii Haanas está protegido desde la cima de las montañas hasta el fondo del mar, y sus antiguos poblados solo se visitan en barco o hidroavión, tras una sesión de orientación. Es remoto, lluvioso y distinto a cualquier otro lugar de Canadá.",
    },
    bestMonths: [5, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'Weathered carved poles in long grass at the edge of a forest', fr: 'Des mâts sculptés patinés dans les hautes herbes, en lisière de forêt', de: "Verwitterte geschnitzte Pfähle im hohen Gras am Waldrand", es: "Postes tallados y desgastados entre la hierba alta al borde del bosque" },
        subject: 'Weathered poles at an old village site, Gwaii Haanas',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A storm-grey beach with driftwood logs', fr: 'Une plage grise de tempête, couverte de bois flotté', de: "Ein sturmgrauer Strand mit Treibholzstämmen", es: "Una playa gris de temporal con troncos a la deriva" },
        subject: 'Driftwood on a north beach in a winter storm',
        tone: 'granite',
      },
    },
    highlights: {
      summer: [
        { en: 'Boat or floatplane trips into Gwaii Haanas', fr: 'Les sorties en bateau ou en hydravion vers Gwaii Haanas', de: "Boots- oder Wasserflugzeugtouren nach Gwaii Haanas", es: "Excursiones en barco o hidroavión a Gwaii Haanas" },
        { en: 'Haida art, carving and history, explained by Haida guides', fr: 'L’art, la sculpture et l’histoire haïda, racontés par des guides haïdas', de: "Haida-Kunst, Schnitzerei und Geschichte, erklärt von Haida-Guides", es: "Arte, tallas e historia haida, explicados por guías haida" },
        { en: 'Long empty beaches on the north shore', fr: 'Les longues plages désertes de la côte nord', de: "Lange, leere Strände an der Nordküste", es: "Largas playas vacías en la costa norte" },
      ],
      winter: [
        { en: 'Gwaii Haanas trips stop for the season. Come between May and September.', fr: 'Les sorties vers Gwaii Haanas s’arrêtent pour la saison. Venez entre mai et septembre.', de: "Die Touren nach Gwaii Haanas pausieren für die Saison. Kommen Sie zwischen Mai und September.", es: "Las excursiones a Gwaii Haanas se suspenden hasta la temporada siguiente. Venga entre mayo y septiembre." },
        { en: 'Big storms and very few visitors, if that appeals', fr: 'De grosses tempêtes et très peu de visiteurs, si ça vous tente', de: "Große Stürme und sehr wenige Besucher, falls Sie das reizt", es: "Grandes temporales y muy pocos visitantes, si eso le atrae" },
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
    name: { en: 'Banff & Lake Louise', fr: 'Banff et Lake Louise', de: "Banff & Lake Louise", es: "Banff y Lake Louise" },
    summary: {
      en: 'Canada’s first national park, and still its most famous.',
      fr: 'Le premier parc national du Canada, et toujours le plus célèbre.', de: "Kanadas erster Nationalpark und noch immer sein berühmtester.", es: "El primer parque nacional de Canadá, y todavía el más famoso.",
    },
    body: {
      en: 'Banff National Park was created in 1885, around a hot spring. The town of Banff is small and walkable; Lake Louise is 45 minutes up the valley. Moraine Lake is reached by shuttle or tour bus only, so plan ahead in summer. Late September brings golden larches and fewer people.',
      fr: 'Le parc national Banff a été créé en 1885, autour d’une source chaude. La ville de Banff est petite et se parcourt à pied ; Lake Louise est à 45 minutes en remontant la vallée. On n’accède au lac Moraine qu’en navette ou en autocar, il faut donc s’organiser en été. Fin septembre, les mélèzes deviennent dorés et la foule diminue.', de: "Der Banff National Park wurde 1885 rund um eine heiße Quelle gegründet. Banff ist klein und gut zu Fuß zu erkunden; Lake Louise liegt 45 Minuten talaufwärts. Den Moraine Lake erreicht man nur per Shuttle oder Reisebus, im Sommer also vorausplanen. Ende September bringt goldene Lärchen und weniger Menschen.", es: "El Parque Nacional de Banff se creó en 1885 en torno a una fuente termal. El pueblo de Banff es pequeño y se recorre a pie; Lake Louise está a 45 minutos valle arriba. Al lago Moraine solo se llega en lanzadera o autobús turístico, así que en verano conviene planificar. A finales de septiembre llegan los alerces dorados y hay menos gente.",
    },
    bestMonths: [1, 2, 6, 7, 8, 9, 12],
    images: {
      summer: {
        alt: { en: 'A turquoise lake ringed by jagged peaks', fr: 'Un lac turquoise entouré de sommets déchiquetés', de: "Ein türkisfarbener See, umringt von zackigen Gipfeln", es: "Un lago turquesa rodeado de picos escarpados" },
        subject: 'Moraine Lake at dawn, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A frozen lake with skaters below a glacier', fr: 'Un lac gelé avec des patineurs au pied d’un glacier', de: "Ein gefrorener See mit Eisläufern unter einem Gletscher", es: "Un lago helado con patinadores bajo un glaciar" },
        subject: 'Skating on Lake Louise, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Moraine Lake at sunrise, on the first shuttle', fr: 'Le lac Moraine au lever du soleil, avec la première navette', de: "Moraine Lake bei Sonnenaufgang, mit dem ersten Shuttle", es: "El lago Moraine al amanecer, en la primera lanzadera" },
        { en: 'The hike to the Lake Agnes teahouse', fr: 'La randonnée jusqu’au salon de thé du lac Agnes', de: "Die Wanderung zum Teehaus am Lake Agnes", es: "La caminata a la casa de té del lago Agnes" },
        { en: 'Larch Valley in late September', fr: 'La vallée des Mélèzes fin septembre', de: "Larch Valley Ende September", es: "Larch Valley a finales de septiembre" },
      ],
      winter: [
        { en: 'Three ski areas on one lift pass', fr: 'Trois domaines skiables avec un seul forfait', de: "Drei Skigebiete mit einem Skipass", es: "Tres estaciones de esquí con un solo forfait" },
        { en: 'Skating on Lake Louise and walking frozen Johnston Canyon', fr: 'Patiner sur le lac Louise et marcher dans le canyon Johnston gelé', de: "Eislaufen auf dem Lake Louise und Wandern im gefrorenen Johnston Canyon", es: "Patinar en Lake Louise y recorrer el cañón Johnston helado" },
        { en: 'Banff’s hot springs at minus twenty', fr: 'Les sources chaudes de Banff par moins vingt', de: "Banffs heiße Quellen bei minus zwanzig Grad", es: "Las aguas termales de Banff a veinte bajo cero" },
      ],
    },
    placeId: 'banff',
    frReview: 'needs-human-review',
  },
  {
    id: 'jasper',
    slug: 'jasper',
    provinceId: 'alberta',
    name: { en: 'Jasper', fr: 'Jasper', de: "Jasper", es: "Jasper" },
    summary: {
      en: 'The bigger, quieter national park at the north end of the Rockies.',
      fr: 'Le parc national plus grand et plus calme, au nord des Rocheuses.', de: "Der größere, ruhigere Nationalpark am Nordende der Rockies.", es: "El parque nacional más grande y tranquilo, en el extremo norte de las Rocosas.",
    },
    body: {
      en: 'Jasper National Park is larger than Banff and sees fewer visitors. A wildfire in July 2024 burned part of the town and a lot of forest nearby; the town is open and rebuilding, and the burn is part of the landscape now. Maligne Lake, Maligne Canyon and the Columbia Icefield are the classics. It is also a Dark Sky Preserve, so the stars are worth staying up for.',
      fr: 'Le parc national Jasper est plus vaste que Banff et moins fréquenté. Un feu de forêt en juillet 2024 a détruit une partie de la ville et une grande surface de forêt alentour ; la ville est ouverte et se reconstruit, et la zone brûlée fait désormais partie du paysage. Le lac Maligne, le canyon Maligne et le champ de glace Columbia sont les incontournables. C’est aussi une réserve de ciel étoilé : les étoiles valent qu’on veille.', de: "Der Jasper National Park ist größer als Banff und hat weniger Besucher. Ein Waldbrand im Juli 2024 zerstörte einen Teil des Ortes und viel Wald in der Umgebung; der Ort ist geöffnet und wird wieder aufgebaut, und die Brandfläche gehört nun zur Landschaft. Maligne Lake, Maligne Canyon und das Columbia Icefield sind die Klassiker. Außerdem ist es ein Dark-Sky-Schutzgebiet, die Sterne lohnen das Aufbleiben.", es: "El Parque Nacional de Jasper es más grande que Banff y recibe menos visitantes. Un incendio forestal en julio de 2024 quemó parte del pueblo y mucho bosque de los alrededores; el pueblo está abierto y en reconstrucción, y la zona quemada ya forma parte del paisaje. El lago Maligne, el cañón Maligne y el campo de hielo Columbia son los clásicos. También es una reserva de cielo oscuro, así que merece la pena trasnochar por las estrellas.",
    },
    bestMonths: [1, 2, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A small wooded island in a long blue lake', fr: 'Un petit îlot boisé sur un long lac bleu', de: "Eine kleine bewaldete Insel in einem langen blauen See", es: "Una pequeña isla boscosa en un largo lago azul" },
        subject: 'Spirit Island on Maligne Lake, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A starry sky over snowy mountains', fr: 'Un ciel étoilé au-dessus de montagnes enneigées', de: "Ein Sternenhimmel über verschneiten Bergen", es: "Un cielo estrellado sobre montañas nevadas" },
        subject: 'Milky Way over the Athabasca valley, February',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'A boat trip on Maligne Lake', fr: 'Une sortie en bateau sur le lac Maligne', de: "Eine Bootsfahrt auf dem Maligne Lake", es: "Una excursión en barco por el lago Maligne" },
        { en: 'Elk, caribou and bears, at a respectful distance', fr: 'Wapitis, caribous et ours, à distance respectueuse', de: "Wapitis, Karibus und Bären, mit respektvollem Abstand", es: "Uapitíes, caribúes y osos, a una distancia respetuosa" },
        { en: 'Walking on the Athabasca Glacier with a guide', fr: 'Marcher sur le glacier Athabasca avec un guide', de: "Mit Guide auf dem Athabasca-Gletscher", es: "Caminar sobre el glaciar Athabasca con un guía" },
      ],
      winter: [
        { en: 'Ice walks in the frozen Maligne Canyon', fr: 'Les balades dans le canyon Maligne gelé', de: "Eiswanderungen im gefrorenen Maligne Canyon", es: "Caminatas sobre el hielo en el cañón Maligne helado" },
        { en: 'Skiing at Marmot Basin, with short lift lines', fr: 'Le ski à Marmot Basin, sans longues files d’attente', de: "Skifahren in Marmot Basin, mit kurzen Liftschlangen", es: "Esquí en Marmot Basin, con colas cortas en los remontes" },
        { en: 'Stargazing in one of the largest dark-sky preserves in the world', fr: 'L’observation des étoiles dans l’une des plus grandes réserves de ciel étoilé au monde', de: "Sterne beobachten in einem der größten Dark-Sky-Schutzgebiete der Welt", es: "Observar las estrellas en una de las mayores reservas de cielo oscuro del mundo" },
      ],
    },
    placeId: 'jasper',
    frReview: 'needs-human-review',
  },
  {
    id: 'icefields-parkway',
    slug: 'icefields-parkway',
    provinceId: 'alberta',
    name: { en: 'Icefields Parkway', fr: 'Promenade des Glaciers', de: "Icefields Parkway", es: "Icefields Parkway" },
    summary: {
      en: '232 km of road between Lake Louise and Jasper, with glaciers most of the way.',
      fr: '232 km de route entre Lake Louise et Jasper, avec des glaciers presque tout du long.', de: "232 km Straße zwischen Lake Louise und Jasper, fast durchgehend mit Gletschern.", es: "232 km de carretera entre Lake Louise y Jasper, con glaciares casi todo el camino.",
    },
    body: {
      en: 'The Icefields Parkway takes about three and a half hours without stopping, and most people take a full day. Peyto Lake, the Columbia Icefield and Athabasca Falls are the usual stops. There is little phone signal and only one fuel station, at Saskatchewan Crossing, which closes in winter. Winter tires or chains are required from November to April, and the road closes in storms.',
      fr: 'La promenade des Glaciers se parcourt en trois heures et demie sans arrêt, et la plupart des gens y passent la journée. Le lac Peyto, le champ de glace Columbia et les chutes Athabasca sont les arrêts habituels. Le réseau téléphonique est rare et il n’y a qu’une station-service, à Saskatchewan Crossing, fermée l’hiver. Pneus d’hiver ou chaînes obligatoires de novembre à avril, et la route ferme pendant les tempêtes.', de: "Der Icefields Parkway dauert ohne Halt etwa dreieinhalb Stunden, die meisten nehmen sich einen ganzen Tag. Peyto Lake, das Columbia Icefield und die Athabasca Falls sind die üblichen Stopps. Handyempfang gibt es kaum und nur eine Tankstelle, bei Saskatchewan Crossing, die im Winter schließt. Von November bis April sind Winterreifen oder Ketten Pflicht, und bei Sturm wird die Straße gesperrt.", es: "La Icefields Parkway lleva unas tres horas y media sin paradas, y casi todo el mundo le dedica un día entero. El lago Peyto, el campo de hielo Columbia y las cataratas Athabasca son las paradas habituales. Apenas hay cobertura y solo una gasolinera, en Saskatchewan Crossing, que cierra en invierno. De noviembre a abril son obligatorios neumáticos de invierno o cadenas, y la carretera se cierra con tormentas.",
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A wolf-shaped turquoise lake far below a viewpoint', fr: 'Un lac turquoise en forme de loup, loin sous un belvédère', de: "Ein wolfsförmiger türkisfarbener See tief unter einem Aussichtspunkt", es: "Un lago turquesa con forma de lobo muy por debajo de un mirador" },
        subject: 'Peyto Lake from the viewpoint, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'An empty road through snowy mountains', fr: 'Une route déserte entre des montagnes enneigées', de: "Eine leere Straße durch verschneite Berge", es: "Una carretera vacía entre montañas nevadas" },
        subject: 'Empty parkway between snowy peaks, March',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Peyto Lake, best before 9 am', fr: 'Le lac Peyto, de préférence avant 9 h', de: "Peyto Lake, am besten vor 9 Uhr", es: "El lago Peyto, mejor antes de las 9" },
        { en: 'Standing on the Columbia Icefield', fr: 'Marcher sur le champ de glace Columbia', de: "Auf dem Columbia Icefield stehen", es: "De pie sobre el campo de hielo Columbia" },
        { en: 'Bighorn sheep on the road. Slow down.', fr: 'Des mouflons sur la route. Ralentissez.', de: "Dickhornschafe auf der Straße. Langsam fahren.", es: "Carneros en la carretera. Reduzca la velocidad." },
      ],
      winter: [
        { en: 'Open, but only for confident winter drivers. Check conditions first.', fr: 'Ouverte, mais réservée aux conducteurs à l’aise sur la neige. Vérifiez l’état des routes avant.', de: "Befahrbar, aber nur für sichere Winterfahrer. Vorher die Bedingungen prüfen.", es: "Abierta, pero solo para conductores con experiencia en invierno. Consulte antes el estado." },
        { en: 'Frozen waterfalls and almost no traffic', fr: 'Des cascades gelées et presque aucune circulation', de: "Gefrorene Wasserfälle und fast kein Verkehr", es: "Cascadas heladas y casi nada de tráfico" },
      ],
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'calgary',
    slug: 'calgary',
    provinceId: 'alberta',
    name: { en: 'Calgary', fr: 'Calgary', de: "Calgary", es: "Calgary" },
    summary: {
      en: 'The gateway to the Rockies, and a good place to spend a night or two.',
      fr: 'La porte d’entrée des Rocheuses, et une bonne étape d’une nuit ou deux.', de: "Das Tor zu den Rockies und ein guter Ort für ein oder zwei Nächte.", es: "La puerta de las Rocosas, y un buen sitio para pasar una o dos noches.",
    },
    body: {
      en: 'Calgary is 90 minutes from Banff and is where most Rockies trips begin. For ten days in early July, the Stampede takes over the city, cowboy hats and all. The rest of the year it is a relaxed place with good restaurants along the Bow River. Chinook winds can lift a winter day from minus fifteen to plus ten in a few hours.',
      fr: 'Calgary est à 90 minutes de Banff, et c’est de là que partent la plupart des voyages dans les Rocheuses. Pendant dix jours début juillet, le Stampede s’empare de la ville, chapeaux de cow-boy compris. Le reste de l’année, c’est une ville détendue, avec de bonnes tables le long de la rivière Bow. Le chinook peut faire passer une journée d’hiver de moins quinze à plus dix en quelques heures.', de: "Calgary liegt 90 Minuten von Banff entfernt, und hier beginnen die meisten Rockies-Reisen. Zehn Tage Anfang Juli übernimmt die Stampede die Stadt, samt Cowboyhüten. Den Rest des Jahres ist es ein entspannter Ort mit guten Restaurants am Bow River. Chinook-Winde können einen Wintertag in wenigen Stunden von minus fünfzehn auf plus zehn Grad heben.", es: "Calgary está a 90 minutos de Banff y es donde empiezan casi todos los viajes a las Rocosas. Durante diez días a principios de julio, la Stampede se adueña de la ciudad, sombreros de vaquero incluidos. El resto del año es un lugar tranquilo con buenos restaurantes junto al río Bow. Los vientos chinook pueden subir un día de invierno de quince bajo cero a diez sobre cero en pocas horas.",
    },
    bestMonths: [7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A city skyline beside a river, with mountains on the horizon', fr: 'Une silhouette de ville au bord d’une rivière, montagnes à l’horizon', de: "Eine Skyline am Fluss, am Horizont Berge", es: "El perfil de una ciudad junto a un río, con montañas en el horizonte" },
        subject: 'Calgary from the Bow River, summer evening',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'A bright winter sky with a long arch of cloud', fr: 'Un ciel d’hiver lumineux avec une longue arche de nuages', de: "Ein heller Winterhimmel mit einem langen Wolkenbogen", es: "Un cielo de invierno luminoso con un largo arco de nubes" },
        subject: 'Chinook arch over the prairie, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Calgary Stampede, early July', fr: 'Le Stampede de Calgary, début juillet', de: "Die Calgary Stampede, Anfang Juli", es: "La Stampede de Calgary, a principios de julio" },
        { en: 'Floating the Bow River on a hot afternoon', fr: 'Descendre la rivière Bow en bouée par un après-midi chaud', de: "Sich an einem heißen Nachmittag auf dem Bow River treiben lassen", es: "Dejarse llevar por el río Bow en una tarde calurosa" },
      ],
      winter: [
        { en: 'A night in town before heading to the ski hills', fr: 'Une nuit en ville avant de rejoindre les pistes', de: "Eine Nacht in der Stadt vor der Fahrt in die Skigebiete", es: "Una noche en la ciudad antes de ir a las pistas" },
        { en: 'Chinook days, when winter takes a few hours off', fr: 'Les jours de chinook, quand l’hiver fait une pause de quelques heures', de: "Chinook-Tage, an denen der Winter ein paar Stunden Pause macht", es: "Días de chinook, cuando el invierno se toma unas horas libres" },
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
    name: { en: 'Whitehorse', fr: 'Whitehorse', de: "Whitehorse", es: "Whitehorse" },
    summary: {
      en: 'Yukon’s capital, on the Yukon River, with aurora a short drive away.',
      fr: 'La capitale du Yukon, au bord du fleuve Yukon, avec des aurores à quelques minutes de route.', de: "Die Hauptstadt des Yukon, am Yukon River, Polarlichter nur eine kurze Fahrt entfernt.", es: "La capital del Yukón, a orillas del río Yukón, con la aurora a poca distancia en coche.",
    },
    body: {
      en: 'About three-quarters of Yukon’s people live in Whitehorse, which still feels like a small town. In winter, cabins outside town are ideal for aurora, with dog sledding by day. In summer the sun barely sets, and the river is the main road for paddlers heading north. Flights from Vancouver take about two and a half hours.',
      fr: 'Environ les trois quarts des habitants du Yukon vivent à Whitehorse, qui a pourtant gardé l’allure d’une petite ville. L’hiver, les cabanes hors de la ville sont idéales pour les aurores, avec du traîneau à chiens dans la journée. L’été, le soleil se couche à peine, et le fleuve devient la grande route des canoteurs vers le nord. Le vol depuis Vancouver dure environ deux heures et demie.', de: "Etwa drei Viertel der Menschen im Yukon leben in Whitehorse, das sich dennoch wie eine Kleinstadt anfühlt. Im Winter sind Hütten außerhalb der Stadt ideal für Polarlichter, tagsüber mit Hundeschlitten. Im Sommer geht die Sonne kaum unter, und der Fluss ist die Hauptstraße für Paddler auf dem Weg nach Norden. Flüge ab Vancouver dauern etwa zweieinhalb Stunden.", es: "Unas tres cuartas partes de la población del Yukón vive en Whitehorse, que aun así parece un pueblo. En invierno, las cabañas a las afueras son ideales para la aurora, con trineos de perros de día. En verano el sol apenas se pone y el río es la carretera principal de los piragüistas que van hacia el norte. Los vuelos desde Vancouver duran unas dos horas y media.",
    },
    bestMonths: [2, 3, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A wide green river below clay cliffs', fr: 'Un large fleuve vert sous des falaises d’argile', de: "Ein breiter grüner Fluss unter Lehmklippen", es: "Un ancho río verde bajo acantilados de arcilla" },
        subject: 'Yukon River below the clay cliffs, July',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A dog team on a snowy trail at dusk', fr: 'Un attelage de chiens sur une piste enneigée, au crépuscule', de: "Ein Hundegespann auf einem verschneiten Weg in der Dämmerung", es: "Un tiro de perros en un sendero nevado al anochecer" },
        subject: 'Dog team on a forest trail, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Starting a Yukon River canoe trip', fr: 'Partir en canot sur le fleuve Yukon', de: "Start einer Kanutour auf dem Yukon River", es: "El inicio de una travesía en canoa por el río Yukón" },
        { en: 'Midnight sun around the June solstice', fr: 'Le soleil de minuit autour du solstice de juin', de: "Mitternachtssonne rund um die Junisonnenwende", es: "Sol de medianoche en torno al solsticio de junio" },
        { en: 'Hikes at Miles Canyon, right in town', fr: 'Les randonnées au canyon Miles, en pleine ville', de: "Wanderungen im Miles Canyon, mitten in der Stadt", es: "Caminatas por el cañón Miles, en la misma ciudad" },
      ],
      winter: [
        { en: 'Aurora from a cabin outside town, late August to April', fr: 'Les aurores depuis une cabane hors de la ville, de fin août à avril', de: "Polarlichter von einer Hütte außerhalb der Stadt, Ende August bis April", es: "Aurora desde una cabaña a las afueras, de finales de agosto a abril" },
        { en: 'Dog sledding, snowshoeing and ice fishing', fr: 'Le traîneau à chiens, la raquette et la pêche blanche', de: "Hundeschlitten, Schneeschuhe und Eisfischen", es: "Trineos de perros, raquetas y pesca en el hielo" },
        { en: 'Hot springs just outside town', fr: 'Des sources chaudes juste à la sortie de la ville', de: "Heiße Quellen direkt vor der Stadt", es: "Aguas termales a las afueras de la ciudad" },
      ],
    },
    placeId: 'whitehorse',
    frReview: 'needs-human-review',
  },
  {
    id: 'dawson-city',
    slug: 'dawson-city',
    provinceId: 'yukon',
    name: { en: 'Dawson City', fr: 'Dawson City', de: "Dawson City", es: "Dawson City" },
    summary: {
      en: 'A gold rush town that never got around to paving its streets.',
      fr: 'Une ville de la ruée vers l’or qui n’a jamais pris la peine de goudronner ses rues.', de: "Eine Goldrauschstadt, die nie dazu gekommen ist, ihre Straßen zu pflastern.", es: "Una ciudad de la fiebre del oro que nunca llegó a asfaltar sus calles.",
    },
    body: {
      en: 'Around 30,000 people came here during the Klondike Gold Rush of 1896 to 1899; today it’s about 1,500. The streets are still gravel, the sidewalks still wooden, and some people still mine. Parks Canada keeps many of the old buildings as they were. Summer is the season; in winter, much of the town closes.',
      fr: 'Environ 30 000 personnes sont venues ici pendant la ruée vers l’or du Klondike, de 1896 à 1899 ; ils sont aujourd’hui environ 1 500. Les rues sont toujours en gravier, les trottoirs toujours en bois, et certains cherchent encore de l’or. Parcs Canada conserve de nombreux bâtiments d’époque dans leur état d’origine. La saison, c’est l’été ; l’hiver, une bonne partie de la ville ferme.', de: "Während des Klondike-Goldrauschs von 1896 bis 1899 kamen rund 30.000 Menschen hierher; heute sind es etwa 1.500. Die Straßen sind noch Schotter, die Gehwege noch aus Holz, und manche schürfen noch immer. Parks Canada erhält viele der alten Gebäude im Originalzustand. Saison ist im Sommer; im Winter schließt ein Großteil des Ortes.", es: "Durante la fiebre del oro del Klondike, de 1896 a 1899, llegaron aquí unas 30.000 personas; hoy viven unas 1.500. Las calles siguen siendo de grava, las aceras de madera, y aún hay quien busca oro. Parks Canada conserva muchos de los edificios antiguos tal como eran. La temporada es el verano; en invierno, buena parte del pueblo cierra.",
    },
    bestMonths: [6, 7, 8],
    images: {
      summer: {
        alt: { en: 'Old false-front wooden buildings on a gravel street', fr: 'De vieux bâtiments en bois à fausse façade, sur une rue en gravier', de: "Alte Holzhäuser mit Scheinfassaden an einer Schotterstraße", es: "Antiguos edificios de madera con fachadas falsas en una calle de grava" },
        subject: 'False-front buildings on a gravel street, July',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'A quiet snowy street with old wooden buildings', fr: 'Une rue calme et enneigée bordée de vieux bâtiments en bois', de: "Eine stille verschneite Straße mit alten Holzhäusern", es: "Una calle tranquila y nevada con viejos edificios de madera" },
        subject: 'Dawson City under snow, December',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Midnight views from the Dome above town', fr: 'La vue de minuit depuis le Dôme au-dessus de la ville', de: "Mitternachtsblick vom Dome über der Stadt", es: "Vistas de medianoche desde el Dome, sobre el pueblo" },
        { en: 'Panning for gold, with modest expectations', fr: 'Chercher de l’or à la batée, sans trop d’espoirs', de: "Goldwaschen, mit bescheidenen Erwartungen", es: "Bateando oro, con expectativas modestas" },
        { en: 'The start of the Dempster Highway to the Arctic', fr: 'Le départ de la route Dempster vers l’Arctique', de: "Der Beginn des Dempster Highway in die Arktis", es: "El inicio de la Dempster Highway hacia el Ártico" },
      ],
      winter: [
        { en: 'Very quiet. Many businesses close until May.', fr: 'Très calme. Beaucoup de commerces ferment jusqu’en mai.', de: "Sehr ruhig. Viele Betriebe schließen bis Mai.", es: "Muy tranquilo. Muchos negocios cierran hasta mayo." },
        { en: 'Aurora over the Klondike, if you don’t mind minus forty', fr: 'Les aurores sur le Klondike, si moins quarante ne vous dérange pas', de: "Polarlichter über dem Klondike, wenn Ihnen minus vierzig nichts ausmachen", es: "Aurora sobre el Klondike, si no le importan los cuarenta bajo cero" },
      ],
    },
    placeId: 'dawson-city',
    frReview: 'needs-human-review',
  },
  {
    id: 'kluane',
    slug: 'kluane',
    provinceId: 'yukon',
    name: { en: 'Kluane', fr: 'Kluane', de: "Kluane", es: "Kluane" },
    summary: {
      en: 'Canada’s highest mountains and the largest icefields outside the poles.',
      fr: 'Les plus hautes montagnes du Canada et les plus grands champs de glace hors des pôles.', de: "Kanadas höchste Berge und die größten Eisfelder außerhalb der Polargebiete.", es: "Las montañas más altas de Canadá y los mayores campos de hielo fuera de los polos.",
    },
    body: {
      en: 'Kluane National Park and Reserve holds Mount Logan, at 5,959 m the highest peak in Canada. Most of the park is ice and rock that you can only see properly from the air. Flightseeing trips leave from Haines Junction, about 90 minutes from Whitehorse. Down at road level, there’s good hiking, Kluane Lake and a lot of Dall sheep.',
      fr: 'Le parc national et la réserve de parc national Kluane abritent le mont Logan, plus haut sommet du Canada avec 5 959 m. L’essentiel du parc n’est que glace et roche, qu’on ne voit vraiment que depuis les airs. Les survols partent de Haines Junction, à environ 90 minutes de Whitehorse. Au niveau de la route, on trouve de belles randonnées, le lac Kluane et beaucoup de mouflons de Dall.', de: "Im Kluane National Park and Reserve steht der Mount Logan, mit 5.959 m der höchste Gipfel Kanadas. Der größte Teil des Parks ist Eis und Fels, den man nur aus der Luft richtig sieht. Rundflüge starten in Haines Junction, etwa 90 Minuten von Whitehorse. Unten auf Straßenhöhe gibt es gute Wanderungen, den Kluane Lake und viele Dall-Schafe.", es: "El Parque y Reserva Nacional de Kluane alberga el monte Logan, de 5.959 m, el pico más alto de Canadá. Casi todo el parque es hielo y roca que solo se ve bien desde el aire. Los vuelos panorámicos salen de Haines Junction, a unos 90 minutos de Whitehorse. A ras de carretera hay buenas caminatas, el lago Kluane y muchos carneros de Dall.",
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A small plane over a vast field of glaciers', fr: 'Un petit avion au-dessus d’un immense champ de glaciers', de: "Ein Kleinflugzeug über einem riesigen Gletscherfeld", es: "Una avioneta sobre un inmenso campo de glaciares" },
        subject: 'Flightseeing over the Kluane icefields',
        tone: 'snow',
      },
      winter: {
        alt: { en: 'A frozen lake below snowy peaks in low sun', fr: 'Un lac gelé sous des sommets enneigés, dans un soleil bas', de: "Ein gefrorener See unter verschneiten Gipfeln in tiefer Sonne", es: "Un lago helado bajo picos nevados con el sol bajo" },
        subject: 'Kluane Lake frozen, low winter sun',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A flight over the icefields and Mount Logan', fr: 'Un survol des champs de glace et du mont Logan', de: "Ein Flug über die Eisfelder und den Mount Logan", es: "Un vuelo sobre los campos de hielo y el monte Logan" },
        { en: 'Hiking to see Dall sheep on Sheep Mountain', fr: 'La randonnée vers la montagne Sheep pour voir les mouflons de Dall', de: "Wanderung zu den Dall-Schafen am Sheep Mountain", es: "Caminata para ver carneros de Dall en Sheep Mountain" },
        { en: 'Golden aspens in early September', fr: 'Les trembles dorés début septembre', de: "Goldene Espen Anfang September", es: "Álamos dorados a principios de septiembre" },
      ],
      winter: [
        { en: 'Quiet and very cold. Better as a day trip from Whitehorse.', fr: 'Calme et très froid. Mieux en excursion d’une journée depuis Whitehorse.', de: "Ruhig und sehr kalt. Besser als Tagesausflug ab Whitehorse.", es: "Tranquilo y muy frío. Mejor como excursión de un día desde Whitehorse." },
        { en: 'Cross-country skiing and snowshoeing near Haines Junction', fr: 'Le ski de fond et la raquette près de Haines Junction', de: "Langlauf und Schneeschuhwandern bei Haines Junction", es: "Esquí de fondo y raquetas cerca de Haines Junction" },
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
    name: { en: 'Yellowknife', fr: 'Yellowknife', de: "Yellowknife", es: "Yellowknife" },
    summary: {
      en: 'A small northern capital with some of the most reliable aurora in the world.',
      fr: 'Une petite capitale nordique, avec certaines des aurores les plus fiables au monde.', de: "Eine kleine Hauptstadt im Norden mit einigen der verlässlichsten Polarlichter der Welt.", es: "Una pequeña capital del norte con algunas de las auroras más fiables del mundo.",
    },
    body: {
      en: 'Yellowknife sits on Great Slave Lake, the deepest lake in North America. It is under the auroral oval, and the skies are clear often enough that three nights usually means a good show. The Old Town has houseboats, floatplanes and a few good places to eat. Winter nights reach minus forty, so the tour operators lend parkas.',
      fr: 'Yellowknife borde le Grand lac des Esclaves, le plus profond d’Amérique du Nord. La ville se trouve sous l’ovale auroral, et le ciel est assez souvent dégagé pour que trois nuits suffisent en général à voir un beau spectacle. La vieille ville a ses maisons flottantes, ses hydravions et quelques bonnes adresses. Les nuits d’hiver descendent à moins quarante : les organisateurs prêtent des parkas.', de: "Yellowknife liegt am Großen Sklavensee, dem tiefsten See Nordamerikas. Es befindet sich unter dem Polarlichtoval, und der Himmel ist so oft klar, dass drei Nächte meist eine gute Show bedeuten. In der Altstadt gibt es Hausboote, Wasserflugzeuge und einige gute Lokale. Winternächte erreichen minus vierzig Grad, deshalb verleihen die Veranstalter Parkas.", es: "Yellowknife está a orillas del Gran Lago del Esclavo, el lago más profundo de Norteamérica. Se encuentra bajo el óvalo auroral, y el cielo está despejado tan a menudo que tres noches suelen bastar para un buen espectáculo. El casco antiguo tiene casas flotantes, hidroaviones y algunos buenos sitios para comer. Las noches de invierno llegan a cuarenta bajo cero, así que los operadores prestan parkas.",
    },
    bestMonths: [1, 2, 3, 8, 9],
    images: {
      summer: {
        alt: { en: 'Colourful houseboats on a calm lake at evening', fr: 'Des maisons flottantes colorées sur un lac calme, le soir', de: "Bunte Hausboote auf einem ruhigen See am Abend", es: "Casas flotantes de colores en un lago en calma al atardecer" },
        subject: 'Houseboats in Yellowknife Bay, July evening',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Green aurora over a snowy spruce forest', fr: 'Une aurore verte au-dessus d’une forêt d’épinettes enneigée', de: "Grüne Polarlichter über verschneitem Fichtenwald", es: "Aurora verde sobre un bosque de abetos nevado" },
        subject: 'Aurora over spruce near Yellowknife, March',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Aurora over open water, late August and September', fr: 'Les aurores au-dessus de l’eau libre, fin août et septembre', de: "Polarlichter über offenem Wasser, Ende August und September", es: "Aurora sobre aguas abiertas, a finales de agosto y en septiembre" },
        { en: 'Floatplanes to fishing lodges on remote lakes', fr: 'Les hydravions vers des lodges de pêche sur des lacs isolés', de: "Wasserflugzeuge zu Angel-Lodges an abgelegenen Seen", es: "Hidroaviones a lodges de pesca en lagos remotos" },
        { en: 'Paddling Great Slave Lake in the long evenings', fr: 'Pagayer sur le Grand lac des Esclaves pendant les longues soirées', de: "Paddeln auf dem Großen Sklavensee an langen Abenden", es: "Remar en el Gran Lago del Esclavo en las largas tardes" },
      ],
      winter: [
        { en: 'Aurora viewing in heated cabins outside town', fr: 'L’observation des aurores depuis des cabanes chauffées hors de la ville', de: "Polarlichtbeobachtung in beheizten Hütten außerhalb der Stadt", es: "Observación de auroras en cabañas con calefacción a las afueras" },
        { en: 'Dog sledding and snowmobiling on the lake', fr: 'Le traîneau à chiens et la motoneige sur le lac', de: "Hundeschlitten und Schneemobil auf dem See", es: "Trineos de perros y motos de nieve sobre el lago" },
        { en: 'The ice road to Dettah, when it’s open', fr: 'La route de glace vers Dettah, quand elle est ouverte', de: "Die Eisstraße nach Dettah, wenn sie offen ist", es: "La carretera de hielo a Dettah, cuando está abierta" },
      ],
    },
    placeId: 'yellowknife',
    frReview: 'needs-human-review',
  },
  {
    id: 'nahanni',
    slug: 'nahanni',
    provinceId: 'northwest-territories',
    name: { en: 'Nahanni', fr: 'Nahanni', de: "Nahanni", es: "Nahanni" },
    summary: {
      en: 'Deep canyons, a huge waterfall and a river trip people talk about for decades.',
      fr: 'Des canyons profonds, une immense chute, et une descente de rivière dont on parle pendant des décennies.', de: "Tiefe Canyons, ein gewaltiger Wasserfall und eine Flussreise, von der man noch Jahrzehnte erzählt.", es: "Cañones profundos, una cascada inmensa y una travesía fluvial de la que se habla durante décadas.",
    },
    body: {
      en: 'Nahanni National Park Reserve was one of the first places on the UNESCO World Heritage list, in 1978. Virginia Falls drops about 96 m, roughly twice the height of Niagara. There are no roads: you fly in by floatplane, usually from Fort Simpson. You can visit the falls on a day flight, or paddle the South Nahanni for one to three weeks with a guide.',
      fr: 'La réserve de parc national Nahanni a été l’un des premiers sites inscrits au patrimoine mondial de l’UNESCO, en 1978. Les chutes Virginia tombent d’environ 96 m, à peu près deux fois la hauteur du Niagara. Il n’y a aucune route : on arrive en hydravion, généralement depuis Fort Simpson. On peut voir les chutes lors d’un vol à la journée, ou descendre la Nahanni Sud en canot pendant une à trois semaines, avec un guide.', de: "Der Nahanni National Park Reserve gehörte 1978 zu den ersten Stätten auf der Welterbeliste der UNESCO. Die Virginia Falls stürzen rund 96 m in die Tiefe, etwa doppelt so hoch wie die Niagarafälle. Straßen gibt es keine: Man fliegt per Wasserflugzeug ein, meist ab Fort Simpson. Die Fälle lassen sich mit einem Tagesflug besuchen, oder Sie paddeln mit Guide ein bis drei Wochen auf dem South Nahanni.", es: "La Reserva del Parque Nacional Nahanni fue, en 1978, uno de los primeros lugares de la lista del Patrimonio Mundial de la UNESCO. Las cataratas Virginia caen unos 96 m, más o menos el doble que el Niágara. No hay carreteras: se llega en hidroavión, normalmente desde Fort Simpson. Puede ver las cataratas en un vuelo de un día o remar por el South Nahanni de una a tres semanas con guía.",
    },
    bestMonths: [6, 7, 8],
    images: {
      summer: {
        alt: { en: 'A great waterfall split by a rock spire in a canyon', fr: 'Une grande chute séparée par une aiguille rocheuse, dans un canyon', de: "Ein großer Wasserfall, geteilt von einer Felsnadel in einem Canyon", es: "Una gran cascada partida por una aguja de roca en un cañón" },
        subject: 'Virginia Falls from the portage trail',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A snowy canyon under a pale sky', fr: 'Un canyon enneigé sous un ciel pâle', de: "Ein verschneiter Canyon unter blassem Himmel", es: "Un cañón nevado bajo un cielo pálido" },
        subject: 'Snowbound canyon walls, Nahanni',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A floatplane day trip to Virginia Falls', fr: 'Une excursion d’une journée en hydravion aux chutes Virginia', de: "Ein Tagesausflug per Wasserflugzeug zu den Virginia Falls", es: "Excursión de un día en hidroavión a las cataratas Virginia" },
        { en: 'Guided canoe or raft trips through the canyons', fr: 'Les descentes guidées en canot ou en raft à travers les canyons', de: "Geführte Kanu- oder Raftingtouren durch die Canyons", es: "Travesías guiadas en canoa o rafting por los cañones" },
      ],
      winter: [
        { en: 'Closed to visitors in practice. The season is June to August.', fr: 'Fermé aux visiteurs en pratique. La saison va de juin à août.', de: "Für Besucher praktisch geschlossen. Die Saison ist Juni bis August.", es: "En la práctica, cerrado a los visitantes. La temporada va de junio a agosto." },
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
    name: { en: 'Churchill', fr: 'Churchill', de: "Churchill", es: "Churchill" },
    summary: {
      en: 'A small town on Hudson Bay with polar bears in autumn and belugas in summer.',
      fr: 'Une petite ville sur la baie d’Hudson, avec des ours polaires à l’automne et des bélugas l’été.', de: "Ein kleiner Ort an der Hudson Bay mit Eisbären im Herbst und Belugas im Sommer.", es: "Un pequeño pueblo en la bahía de Hudson con osos polares en otoño y belugas en verano.",
    },
    body: {
      en: 'There is no road to Churchill: you fly or take the train from Winnipeg. In October and November, polar bears gather on the coast waiting for the bay to freeze, and you see them from large tundra vehicles. In July and August, thousands of belugas come into the Churchill River. Rooms are few, so both seasons book a year or more ahead.',
      fr: 'Aucune route ne mène à Churchill : on y va en avion ou en train depuis Winnipeg. En octobre et novembre, les ours polaires se rassemblent sur la côte en attendant que la baie gèle, et on les observe depuis de grands véhicules de toundra. En juillet et août, des milliers de bélugas remontent la rivière Churchill. Les chambres sont rares : pour les deux saisons, on réserve un an à l’avance, voire plus.', de: "Nach Churchill führt keine Straße: Man fliegt oder nimmt den Zug ab Winnipeg. Im Oktober und November sammeln sich Eisbären an der Küste und warten darauf, dass die Bucht zufriert; Sie sehen sie aus großen Tundra-Fahrzeugen. Im Juli und August kommen Tausende Belugas in den Churchill River. Es gibt nur wenige Zimmer, beide Saisons sind also ein Jahr oder länger im Voraus ausgebucht.", es: "A Churchill no llega ninguna carretera: se vuela o se toma el tren desde Winnipeg. En octubre y noviembre, los osos polares se reúnen en la costa esperando a que se congele la bahía, y se ven desde grandes vehículos de tundra. En julio y agosto, miles de belugas entran en el río Churchill. Hay pocas habitaciones, así que ambas temporadas se reservan con un año o más de antelación.",
    },
    bestMonths: [2, 3, 7, 8, 10, 11],
    images: {
      summer: {
        alt: { en: 'Beluga whales surfacing beside a small boat', fr: 'Des bélugas qui font surface à côté d’un petit bateau', de: "Belugawale tauchen neben einem kleinen Boot auf", es: "Belugas saliendo a la superficie junto a un pequeño barco" },
        subject: 'Belugas in the Churchill River, July',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'A polar bear on snow-dusted rocks by the sea', fr: 'Un ours polaire sur des rochers poudrés de neige, au bord de la mer', de: "Ein Eisbär auf leicht verschneiten Felsen am Meer", es: "Un oso polar sobre rocas espolvoreadas de nieve junto al mar" },
        subject: 'Polar bear on the Hudson Bay coast, November',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Belugas by kayak, boat or snorkel, July and August', fr: 'Les bélugas en kayak, en bateau ou avec masque et tuba, en juillet et août', de: "Belugas per Kajak, Boot oder beim Schnorcheln, Juli und August", es: "Belugas en kayak, en barco o haciendo esnórquel, en julio y agosto" },
        { en: 'Tundra wildflowers and seabirds', fr: 'Les fleurs de la toundra et les oiseaux marins', de: "Tundrablumen und Seevögel", es: "Flores de la tundra y aves marinas" },
      ],
      winter: [
        { en: 'Polar bears from tundra vehicles, October to mid-November', fr: 'Les ours polaires depuis des véhicules de toundra, d’octobre à mi-novembre', de: "Eisbären aus Tundra-Fahrzeugen, Oktober bis Mitte November", es: "Osos polares desde vehículos de tundra, de octubre a mediados de noviembre" },
        { en: 'Aurora, best in February and March', fr: 'Les aurores, surtout en février et mars', de: "Polarlichter, am besten im Februar und März", es: "Auroras, mejor en febrero y marzo" },
        { en: 'Dog sledding through the boreal forest', fr: 'Le traîneau à chiens dans la forêt boréale', de: "Hundeschlitten durch den borealen Wald", es: "Trineo de perros por el bosque boreal" },
      ],
    },
    placeId: 'churchill',
    frReview: 'needs-human-review',
  },
  {
    id: 'winnipeg',
    slug: 'winnipeg',
    provinceId: 'manitoba',
    name: { en: 'Winnipeg', fr: 'Winnipeg', de: "Winnipeg", es: "Winnipeg" },
    summary: {
      en: 'The gateway to Churchill, and better than its reputation.',
      fr: 'La porte d’entrée vers Churchill, et bien mieux que sa réputation.', de: "Das Tor nach Churchill, und besser als sein Ruf.", es: "La puerta de Churchill, y mejor que su fama.",
    },
    body: {
      en: 'Winnipeg grew up where the Red and Assiniboine rivers meet, at a spot now called The Forks. The Canadian Museum for Human Rights is worth half a day. The Exchange District has old warehouses full of restaurants, and Saint-Boniface has been French-speaking for two centuries. Most Churchill trips spend a night here, and it’s worth making it two.',
      fr: 'Winnipeg s’est développée au confluent des rivières Rouge et Assiniboine, à l’endroit appelé aujourd’hui La Fourche. Le Musée canadien pour les droits de la personne mérite une demi-journée. Le quartier de la Bourse a ses anciens entrepôts remplis de restaurants, et Saint-Boniface parle français depuis deux siècles. La plupart des voyages vers Churchill y font étape une nuit ; deux valent mieux.', de: "Winnipeg entstand am Zusammenfluss von Red River und Assiniboine, an einem Ort, der heute The Forks heißt. Das Canadian Museum for Human Rights ist einen halben Tag wert. Im Exchange District sind alte Lagerhäuser voller Restaurants, und Saint-Boniface ist seit zwei Jahrhunderten französischsprachig. Die meisten Churchill-Reisen verbringen hier eine Nacht, und es lohnt sich, zwei daraus zu machen.", es: "Winnipeg creció donde se unen los ríos Red y Assiniboine, en un lugar llamado hoy The Forks. El Museo Canadiense de los Derechos Humanos merece medio día. El Exchange District tiene viejos almacenes llenos de restaurantes, y Saint-Boniface habla francés desde hace dos siglos. La mayoría de los viajes a Churchill pasan aquí una noche, y vale la pena que sean dos.",
    },
    bestMonths: [2, 6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'A modern museum with a glass tower beside a river', fr: 'Un musée moderne avec une tour de verre au bord d’une rivière', de: "Ein modernes Museum mit Glasturm an einem Fluss", es: "Un museo moderno con una torre de cristal junto a un río" },
        subject: 'The Forks and the human rights museum, June',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'Skaters on a long trail over a frozen river', fr: 'Des patineurs sur une longue piste, sur une rivière gelée', de: "Eisläufer auf einem langen Pfad über einen gefrorenen Fluss", es: "Patinadores en un largo sendero sobre un río helado" },
        subject: 'Skating the river trail at The Forks, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Canadian Museum for Human Rights', fr: 'Le Musée canadien pour les droits de la personne', de: "Das Canadian Museum for Human Rights", es: "El Museo Canadiense de los Derechos Humanos" },
        { en: 'Patios and galleries in the Exchange District', fr: 'Les terrasses et galeries du quartier de la Bourse', de: "Terrassen und Galerien im Exchange District", es: "Terrazas y galerías en el Exchange District" },
      ],
      winter: [
        { en: 'Skating the river trail, when the ice is good', fr: 'Patiner sur la piste de la rivière, quand la glace est bonne', de: "Eislaufen auf dem Flusspfad, wenn das Eis gut ist", es: "Patinar por el sendero del río, cuando el hielo está bien" },
        { en: 'Festival du Voyageur in Saint-Boniface, February', fr: 'Le Festival du Voyageur à Saint-Boniface, en février', de: "Festival du Voyageur in Saint-Boniface, Februar", es: "Festival du Voyageur en Saint-Boniface, en febrero" },
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
    name: { en: 'Toronto', fr: 'Toronto', de: "Toronto", es: "Toronto" },
    summary: {
      en: 'Canada’s biggest city, and one of the most international anywhere.',
      fr: 'La plus grande ville du Canada, et l’une des plus internationales au monde.', de: "Kanadas größte Stadt und eine der internationalsten überhaupt.", es: "La mayor ciudad de Canadá, y una de las más internacionales del mundo.",
    },
    body: {
      en: 'Close to half of Toronto’s residents were born outside Canada, and you can taste it. Kensington Market, Chinatown and Little Portugal are a walk apart. A short ferry takes you to the Toronto Islands, with beaches and a skyline view. It is also the usual way in for Niagara, Muskoka and Algonquin.',
      fr: 'Près de la moitié des habitants de Toronto sont nés hors du Canada, et ça se goûte. Kensington Market, le quartier chinois et la Petite Portugal sont à quelques minutes à pied les uns des autres. Un court traversier mène aux îles de Toronto, avec leurs plages et la vue sur les tours. C’est aussi le point de départ habituel pour le Niagara, Muskoka et le parc Algonquin.', de: "Fast die Hälfte der Einwohner Torontos wurde außerhalb Kanadas geboren, und das schmeckt man. Kensington Market, Chinatown und Little Portugal liegen nur einen Spaziergang auseinander. Eine kurze Fähre bringt Sie zu den Toronto Islands mit Stränden und Skyline-Blick. Von hier geht es meist auch nach Niagara, Muskoka und Algonquin.", es: "Casi la mitad de los habitantes de Toronto nació fuera de Canadá, y se nota en el plato. Kensington Market, Chinatown y Little Portugal están a un paseo uno de otro. Un ferry corto le lleva a las islas de Toronto, con playas y vistas al skyline. También es la puerta habitual a Niágara, Muskoka y Algonquin.",
    },
    bestMonths: [5, 6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A city skyline across the water from an island beach', fr: 'Les tours de la ville vues depuis la plage d’une île', de: "Eine Skyline über dem Wasser, gesehen von einem Inselstrand", es: "El perfil de una ciudad al otro lado del agua, visto desde una playa de una isla" },
        subject: 'Toronto skyline from the Islands, summer evening',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'An outdoor skating rink lit up among city towers', fr: 'Une patinoire extérieure éclairée entre les tours', de: "Eine beleuchtete Freiluft-Eisbahn zwischen Hochhäusern", es: "Una pista de patinaje al aire libre iluminada entre torres" },
        subject: 'Skating at a downtown rink, December night',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'The ferry to the Toronto Islands', fr: 'Le traversier vers les îles de Toronto', de: "Die Fähre zu den Toronto Islands", es: "El ferry a las islas de Toronto" },
        { en: 'Eating your way through Kensington Market', fr: 'Faire le tour de Kensington Market en goûtant à tout', de: "Sich durch den Kensington Market essen", es: "Probar de todo en Kensington Market" },
        { en: 'A baseball game on a summer evening', fr: 'Un match de baseball un soir d’été', de: "Ein Baseballspiel an einem Sommerabend", es: "Un partido de béisbol en una tarde de verano" },
      ],
      winter: [
        { en: 'Theatre, galleries and warm restaurants', fr: 'Théâtre, galeries et restaurants bien chauffés', de: "Theater, Galerien und gemütliche Restaurants", es: "Teatro, galerías y restaurantes acogedores" },
        { en: 'Outdoor skating rinks downtown', fr: 'Les patinoires extérieures du centre-ville', de: "Freiluft-Eisbahnen in der Innenstadt", es: "Pistas de patinaje al aire libre en el centro" },
      ],
    },
    placeId: 'toronto',
    frReview: 'needs-human-review',
  },
  {
    id: 'niagara',
    slug: 'niagara',
    provinceId: 'ontario',
    name: { en: 'Niagara', fr: 'Niagara', de: "Niagara", es: "Niágara" },
    summary: {
      en: 'The falls, yes, and a quiet wine region just past them.',
      fr: 'Les chutes, bien sûr, et une région viticole paisible juste après.', de: "Die Fälle, ja, und gleich dahinter eine ruhige Weinregion.", es: "Las cataratas, sí, y justo detrás una tranquila región vinícola.",
    },
    body: {
      en: 'Niagara Falls is 90 minutes from Toronto, and the Horseshoe Falls on the Canadian side are the big ones. The boat ride into the spray is worth doing once, with the poncho. The town around the falls is loud and commercial. Twenty minutes north, Niagara-on-the-Lake is the opposite, with wineries, old streets and the Shaw Festival.',
      fr: 'Les chutes du Niagara sont à 90 minutes de Toronto, et les chutes du Fer-à-Cheval, côté canadien, sont les plus impressionnantes. Le bateau qui s’approche dans les embruns vaut d’être fait une fois, avec le poncho. La ville autour des chutes est bruyante et commerciale. Vingt minutes plus au nord, Niagara-on-the-Lake est tout l’inverse : vignobles, vieilles rues et le Shaw Festival.', de: "Die Niagarafälle liegen 90 Minuten von Toronto entfernt, und die Horseshoe Falls auf der kanadischen Seite sind die großen. Die Bootsfahrt in die Gischt lohnt sich einmal, mit Regenponcho. Der Ort an den Fällen ist laut und kommerziell. Zwanzig Minuten nördlich ist Niagara-on-the-Lake das Gegenteil, mit Weingütern, alten Straßen und dem Shaw Festival.", es: "Las cataratas del Niágara están a 90 minutos de Toronto, y las Horseshoe Falls, en el lado canadiense, son las grandes. Merece la pena subir una vez al barco que entra en la nube de agua, con chubasquero. La ciudad junto a las cataratas es ruidosa y comercial. Veinte minutos al norte, Niagara-on-the-Lake es todo lo contrario, con bodegas, calles antiguas y el Shaw Festival.",
    },
    bestMonths: [5, 6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A boat in the mist at the foot of a horseshoe-shaped waterfall', fr: 'Un bateau dans la brume au pied d’une chute en fer à cheval', de: "Ein Boot im Sprühnebel am Fuß eines hufeisenförmigen Wasserfalls", es: "Un barco entre la bruma al pie de una cascada en forma de herradura" },
        subject: 'Boat in the spray below Horseshoe Falls',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Ice-covered trees and railings beside a misty waterfall', fr: 'Des arbres et des rambardes couverts de glace près d’une chute brumeuse', de: "Vereiste Bäume und Geländer neben einem nebligen Wasserfall", es: "Árboles y barandillas cubiertos de hielo junto a una cascada envuelta en bruma" },
        subject: 'Frozen spray at the falls, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The boat to the foot of the Horseshoe Falls', fr: 'Le bateau jusqu’au pied des chutes du Fer-à-Cheval', de: "Das Boot zum Fuß der Horseshoe Falls", es: "El barco hasta el pie de las Horseshoe Falls" },
        { en: 'Wineries and bike paths around Niagara-on-the-Lake', fr: 'Les vignobles et pistes cyclables autour de Niagara-on-the-Lake', de: "Weingüter und Radwege rund um Niagara-on-the-Lake", es: "Bodegas y carriles bici en torno a Niagara-on-the-Lake" },
      ],
      winter: [
        { en: 'The falls dressed in ice, and far fewer people', fr: 'Les chutes habillées de glace, et beaucoup moins de monde', de: "Die Fälle in Eis gekleidet, und weit weniger Menschen", es: "Las cataratas vestidas de hielo, y mucha menos gente" },
        { en: 'Icewine tastings, from grapes picked frozen', fr: 'Des dégustations de vin de glace, de raisins vendangés gelés', de: "Eisweinproben, aus gefroren gelesenen Trauben", es: "Catas de vino de hielo, de uvas vendimiadas congeladas" },
      ],
    },
    placeId: 'niagara-falls',
    frReview: 'needs-human-review',
  },
  {
    id: 'muskoka',
    slug: 'muskoka',
    provinceId: 'ontario',
    name: { en: 'Muskoka', fr: 'Muskoka', de: "Muskoka", es: "Muskoka" },
    summary: {
      en: 'Ontario’s cottage country: lakes, docks and pink granite, two hours north of Toronto.',
      fr: 'La région des chalets de l’Ontario : lacs, pontons et granit rose, à deux heures au nord de Toronto.', de: "Ontarios Ferienhausland: Seen, Stege und rosa Granit, zwei Stunden nördlich von Toronto.", es: "La tierra de casas de campo de Ontario: lagos, embarcaderos y granito rosado, a dos horas al norte de Toronto.",
    },
    body: {
      en: 'Muskoka is where Toronto goes on summer weekends, and has been for over a century. The lakes are lined with cottages, boathouses and Muskoka chairs, which are the same as Adirondack chairs but don’t say so here. Old steamships still cruise the lakes in summer. The maples turn in late September and early October.',
      fr: 'Muskoka, c’est là où Toronto passe ses week-ends d’été, depuis plus d’un siècle. Les lacs sont bordés de chalets, de hangars à bateaux et de chaises Muskoka, qui ressemblent beaucoup aux chaises Adirondack, mais on évite de le dire ici. De vieux bateaux à vapeur naviguent encore sur les lacs en été. Les érables changent de couleur fin septembre et début octobre.', de: "In Muskoka verbringt Toronto seit über einem Jahrhundert seine Sommerwochenenden. Die Seen sind gesäumt von Ferienhäusern, Bootshäusern und Muskoka-Stühlen, die Adirondack-Stühlen gleichen, was man hier aber nicht sagt. Im Sommer kreuzen noch alte Dampfschiffe über die Seen. Die Ahornbäume färben sich Ende September und Anfang Oktober.", es: "Muskoka es adonde va Toronto los fines de semana de verano, y así desde hace más de un siglo. Los lagos están bordeados de casas, cobertizos para barcas y sillas Muskoka, que son iguales que las Adirondack, aunque aquí no se dice. En verano, viejos barcos de vapor todavía surcan los lagos. Los arces cambian de color a finales de septiembre y principios de octubre.",
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Two wooden chairs on a dock over a calm lake', fr: 'Deux chaises en bois sur un ponton, au-dessus d’un lac calme', de: "Zwei Holzstühle auf einem Steg über einem ruhigen See", es: "Dos sillas de madera en un embarcadero sobre un lago en calma" },
        subject: 'Muskoka chairs on a dock at dusk',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'An ice trail winding through snowy forest', fr: 'Une piste de glace qui serpente dans une forêt enneigée', de: "Ein Eispfad schlängelt sich durch verschneiten Wald", es: "Un sendero de hielo serpenteando por un bosque nevado" },
        subject: 'Forest skating trail, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A steamship cruise on Lake Muskoka', fr: 'Une croisière en bateau à vapeur sur le lac Muskoka', de: "Eine Dampferfahrt auf dem Lake Muskoka", es: "Un paseo en barco de vapor por el lago Muskoka" },
        { en: 'Swimming off the dock, then dinner on it', fr: 'Se baigner depuis le ponton, puis y dîner', de: "Vom Steg aus schwimmen, dann darauf zu Abend essen", es: "Bañarse desde el embarcadero y luego cenar en él" },
        { en: 'Maple colour in late September and early October', fr: 'Les couleurs des érables fin septembre et début octobre', de: "Ahornfarben Ende September und Anfang Oktober", es: "Los colores de los arces a finales de septiembre y principios de octubre" },
      ],
      winter: [
        { en: 'Skating trails through the forest at Arrowhead Provincial Park', fr: 'Les pistes de patin en forêt du parc provincial Arrowhead', de: "Eislaufpfade durch den Wald im Arrowhead Provincial Park", es: "Senderos de patinaje por el bosque en el Parque Provincial Arrowhead" },
        { en: 'Quiet, snowy and mostly closed. A cosy weekend, not a week.', fr: 'Calme, enneigé et en grande partie fermé. Un week-end douillet, pas une semaine.', de: "Ruhig, verschneit und größtenteils geschlossen. Ein gemütliches Wochenende, keine Woche.", es: "Tranquilo, nevado y casi todo cerrado. Un fin de semana acogedor, no una semana." },
      ],
    },
    placeId: 'huntsville',
    frReview: 'needs-human-review',
  },
  {
    id: 'algonquin',
    slug: 'algonquin',
    provinceId: 'ontario',
    name: { en: 'Algonquin', fr: 'Algonquin', de: "Algonquin", es: "Algonquin" },
    summary: {
      en: 'Canada’s oldest provincial park, and the classic place to learn to canoe.',
      fr: 'Le plus ancien parc provincial du Canada, et l’endroit idéal pour apprendre le canot.', de: "Kanadas ältester Provinzpark und der klassische Ort, um Kanufahren zu lernen.", es: "El parque provincial más antiguo de Canadá, y el lugar clásico para aprender a ir en canoa.",
    },
    body: {
      en: 'Algonquin Park was created in 1893 and covers about 7,600 km² of lakes, rivers and forest. Highway 60 runs through the south, with trails and lookouts along it. Beyond the road, the park is canoe routes and portages, with campsites on the lakes. Moose are often seen near the highway in May and June, which is also black fly season. Bring repellent.',
      fr: 'Le parc Algonquin a été créé en 1893 et couvre environ 7 600 km² de lacs, de rivières et de forêts. La route 60 traverse le sud du parc, avec sentiers et belvédères. Au-delà de la route, ce ne sont que parcours en canot et portages, avec des campements au bord des lacs. On voit souvent des orignaux près de la route en mai et juin, qui est aussi la saison des mouches noires. Prévoyez du répulsif.', de: "Der Algonquin Park wurde 1893 gegründet und umfasst rund 7.600 km² Seen, Flüsse und Wald. Der Highway 60 führt durch den Süden, mit Wegen und Aussichtspunkten entlang der Strecke. Abseits der Straße besteht der Park aus Kanurouten und Portagen, mit Zeltplätzen an den Seen. Elche sieht man im Mai und Juni oft nahe dem Highway, und dann ist auch Kriebelmückenzeit. Mückenschutz einpacken.", es: "El parque Algonquin se creó en 1893 y abarca unos 7.600 km² de lagos, ríos y bosque. La Highway 60 lo cruza por el sur, con senderos y miradores a lo largo del camino. Más allá de la carretera, el parque son rutas en canoa y porteos, con zonas de acampada en los lagos. En mayo y junio se ven a menudo alces cerca de la carretera, que es también la temporada de moscas negras. Lleve repelente.",
    },
    bestMonths: [2, 6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A canoe on misty water at dawn, with pines on the shore', fr: 'Un canot sur l’eau brumeuse à l’aube, des pins sur la rive', de: "Ein Kanu auf nebligem Wasser im Morgengrauen, Kiefern am Ufer", es: "Una canoa en el agua brumosa al amanecer, con pinos en la orilla" },
        subject: 'Canoe on a misty lake at dawn, August',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'A snowy trail through tall pines', fr: 'Un sentier enneigé entre de grands pins', de: "Ein verschneiter Weg durch hohe Kiefern", es: "Un sendero nevado entre pinos altos" },
        subject: 'Ski trail through white pine, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'A few days by canoe, sleeping on a lakeshore', fr: 'Quelques jours en canot, à dormir au bord d’un lac', de: "Ein paar Tage im Kanu, mit Übernachtung am Seeufer", es: "Unos días en canoa, durmiendo a orillas de un lago" },
        { en: 'Loons calling at dusk', fr: 'Le chant des plongeons huards au crépuscule', de: "Rufende Seetaucher in der Dämmerung", es: "Colimbos cantando al anochecer" },
        { en: 'Maples turning red in late September', fr: 'Les érables qui rougissent fin septembre', de: "Ahornbäume, die sich Ende September rot färben", es: "Arces enrojeciendo a finales de septiembre" },
      ],
      winter: [
        { en: 'Cross-country skiing and snowshoeing on park trails', fr: 'Le ski de fond et la raquette sur les sentiers du parc', de: "Langlauf und Schneeschuhwandern auf den Wegen des Parks", es: "Esquí de fondo y raquetas por los senderos del parque" },
        { en: 'Dog sledding, and the quiet that comes with snow', fr: 'Le traîneau à chiens, et le silence qui vient avec la neige', de: "Hundeschlitten und die Stille, die der Schnee mitbringt", es: "Trineos de perros, y el silencio que trae la nieve" },
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
    name: { en: 'Montréal', fr: 'Montréal', de: "Montréal", es: "Montreal" },
    summary: {
      en: 'A French-speaking island city of festivals, terraces and very good bagels.',
      fr: 'Une ville-île francophone de festivals, de terrasses et de très bons bagels.', de: "Eine französischsprachige Inselstadt der Festivals, Terrassen und sehr guten Bagels.", es: "Una ciudad isla francófona de festivales, terrazas y bagels excelentes.",
    },
    body: {
      en: 'Montréal is built around Mount Royal, a hill with a park on top that gives the city its name. Old Montréal has the cobbles; the Plateau and Mile End have the life. Summer is one festival after another, starting with jazz in late June. Winter is cold and snowy, and the city carries on regardless, partly underground.',
      fr: 'Montréal s’est construite autour du mont Royal, une colline coiffée d’un parc qui a donné son nom à la ville. Le Vieux-Montréal a les pavés ; le Plateau et le Mile End ont la vie. L’été, les festivals s’enchaînent, à commencer par le jazz fin juin. L’hiver est froid et enneigé, et la ville continue comme si de rien n’était, en partie sous terre.', de: "Montréal ist um den Mont Royal gebaut, einen Hügel mit Park auf dem Gipfel, der der Stadt ihren Namen gibt. Alt-Montréal hat das Kopfsteinpflaster, Plateau und Mile End das Leben. Der Sommer ist ein Festival nach dem anderen, beginnend mit Jazz Ende Juni. Der Winter ist kalt und schneereich, und die Stadt macht trotzdem weiter, zum Teil unter der Erde.", es: "Montreal está construida en torno al Mont Royal, una colina con un parque en la cima que da nombre a la ciudad. El Viejo Montreal tiene los adoquines; el Plateau y Mile End, la vida. El verano es un festival tras otro, empezando por el jazz a finales de junio. El invierno es frío y nevado, y la ciudad sigue adelante igualmente, en parte bajo tierra.",
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Crowded café terraces on a leafy street', fr: 'Des terrasses de café animées dans une rue arborée', de: "Volle Café-Terrassen in einer begrünten Straße", es: "Terrazas de cafés llenas en una calle arbolada" },
        subject: 'Café terraces on the Plateau, July',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'Spiral outdoor staircases covered in snow', fr: 'Des escaliers extérieurs en colimaçon couverts de neige', de: "Gewundene Außentreppen unter Schnee", es: "Escaleras exteriores de caracol cubiertas de nieve" },
        subject: 'Snow on spiral staircases, Plateau, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Jazz festival, late June to early July', fr: 'Le festival de jazz, de fin juin à début juillet', de: "Jazzfestival, Ende Juni bis Anfang Juli", es: "Festival de jazz, de finales de junio a principios de julio" },
        { en: 'Jean-Talon Market and a picnic on Mount Royal', fr: 'Le marché Jean-Talon, puis un pique-nique sur le mont Royal', de: "Marché Jean-Talon und ein Picknick auf dem Mont Royal", es: "El mercado Jean-Talon y un pícnic en el Mont Royal" },
        { en: 'Bagels, smoked meat and a long argument about which shop is best', fr: 'Bagels, smoked meat, et un long débat sur la meilleure adresse', de: "Bagels, Smoked Meat und eine lange Diskussion, welcher Laden der beste ist", es: "Bagels, smoked meat y una larga discusión sobre qué tienda es la mejor" },
      ],
      winter: [
        { en: 'Skating in Old Montréal and on Mount Royal', fr: 'Patiner dans le Vieux-Montréal et sur le mont Royal', de: "Eislaufen in Alt-Montréal und auf dem Mont Royal", es: "Patinar en el Viejo Montreal y en el Mont Royal" },
        { en: 'Outdoor winter festivals that refuse to be cancelled by cold', fr: 'Des festivals d’hiver en plein air que le froid n’arrête pas', de: "Winterfestivals unter freiem Himmel, die sich von der Kälte nicht absagen lassen", es: "Festivales de invierno al aire libre que se niegan a suspenderse por el frío" },
      ],
    },
    placeId: 'montreal',
    frReview: 'needs-human-review',
  },
  {
    id: 'quebec-city',
    slug: 'quebec-city',
    provinceId: 'quebec',
    name: { en: 'Québec City', fr: 'Québec', de: "Québec City", es: "Quebec" },
    summary: {
      en: 'A walled old city on a cliff above the St. Lawrence.',
      fr: 'Une vieille ville fortifiée sur une falaise au-dessus du Saint-Laurent.', de: "Eine ummauerte Altstadt auf einer Klippe über dem Sankt-Lorenz-Strom.", es: "Una ciudad antigua amurallada sobre un acantilado junto al San Lorenzo.",
    },
    body: {
      en: 'Québec City was founded in 1608, and its old town is a UNESCO World Heritage Site. It is the only city north of Mexico with its walls still standing. The streets are steep, so there’s a funicular between the upper and lower towns. Montmorency Falls, 15 minutes away, is about 30 m higher than Niagara.',
      fr: 'Québec a été fondée en 1608, et son arrondissement historique est inscrit au patrimoine mondial de l’UNESCO. C’est la seule ville au nord du Mexique dont les remparts sont toujours debout. Les rues sont en pente, d’où le funiculaire entre la haute-ville et la basse-ville. La chute Montmorency, à 15 minutes, est environ 30 m plus haute que celles du Niagara.', de: "Québec City wurde 1608 gegründet, und seine Altstadt ist UNESCO-Welterbe. Sie ist die einzige Stadt nördlich von Mexiko, deren Mauern noch stehen. Die Straßen sind steil, deshalb verbindet eine Standseilbahn Ober- und Unterstadt. Die Montmorency-Fälle, 15 Minuten entfernt, sind etwa 30 m höher als die Niagarafälle.", es: "Quebec se fundó en 1608 y su casco antiguo es Patrimonio Mundial de la UNESCO. Es la única ciudad al norte de México que conserva sus murallas en pie. Las calles son empinadas, así que un funicular une la ciudad alta y la baja. Las cataratas de Montmorency, a 15 minutos, son unos 30 m más altas que las del Niágara.",
    },
    bestMonths: [2, 6, 7, 8, 9, 12],
    images: {
      summer: {
        alt: { en: 'Narrow street of old stone houses with flower boxes', fr: 'Une rue étroite de vieilles maisons de pierre fleuries', de: "Schmale Gasse mit alten Steinhäusern und Blumenkästen", es: "Calle estrecha de casas antiguas de piedra con jardineras" },
        subject: 'Petit-Champlain street, summer morning',
        tone: 'birch',
      },
      winter: {
        alt: { en: 'An ice palace lit up at night in a snowy square', fr: 'Un palais de glace illuminé la nuit sur une place enneigée', de: "Ein nachts beleuchteter Eispalast auf einem verschneiten Platz", es: "Un palacio de hielo iluminado de noche en una plaza nevada" },
        subject: 'Winter Carnival ice palace at night',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Walking the walls and the Plains of Abraham', fr: 'Le tour des remparts et les plaines d’Abraham', de: "Auf den Mauern und über die Plaines d’Abraham spazieren", es: "Pasear por las murallas y las Llanuras de Abraham" },
        { en: 'Montmorency Falls, by cable car or stairs', fr: 'La chute Montmorency, en téléphérique ou par l’escalier', de: "Montmorency-Fälle, per Seilbahn oder über die Treppen", es: "Las cataratas de Montmorency, en teleférico o por las escaleras" },
        { en: 'Île d’Orléans for strawberries and cider', fr: 'L’île d’Orléans pour les fraises et le cidre', de: "Île d’Orléans für Erdbeeren und Cidre", es: "La Île d’Orléans, por sus fresas y su sidra" },
      ],
      winter: [
        { en: 'Winter Carnival, late January to mid-February', fr: 'Le Carnaval de Québec, de fin janvier à mi-février', de: "Winterkarneval, Ende Januar bis Mitte Februar", es: "Carnaval de Invierno, de finales de enero a mediados de febrero" },
        { en: 'The old town under snow, at Christmas especially', fr: 'Le Vieux-Québec sous la neige, surtout à Noël', de: "Die Altstadt unter Schnee, besonders zu Weihnachten", es: "El casco antiguo bajo la nieve, sobre todo en Navidad" },
        { en: 'Ice canoe races across the St. Lawrence', fr: 'Les courses de canot à glace sur le Saint-Laurent', de: "Eiskanurennen über den Sankt-Lorenz-Strom", es: "Carreras de canoas sobre hielo a través del San Lorenzo" },
      ],
    },
    placeId: 'quebec-city',
    frReview: 'needs-human-review',
  },
  {
    id: 'charlevoix',
    slug: 'charlevoix',
    provinceId: 'quebec',
    name: { en: 'Charlevoix', fr: 'Charlevoix', de: "Charlevoix", es: "Charlevoix" },
    summary: {
      en: 'Rolling hills, river views and very good cheese, an hour east of Québec City.',
      fr: 'Des collines, la vue sur le fleuve et de très bons fromages, à une heure à l’est de Québec.', de: "Sanfte Hügel, Blick auf den Fluss und sehr guter Käse, eine Stunde östlich von Québec City.", es: "Colinas suaves, vistas al río y quesos excelentes, a una hora al este de Quebec.",
    },
    body: {
      en: 'Charlevoix sits inside the remains of a meteorite crater, which explains the shape of the hills. Baie-Saint-Paul has galleries and a long tradition of painters. Small farms and producers along the Route des Saveurs sell cheese, cider and duck. It’s a UNESCO biosphere reserve, and it feels like one.',
      fr: 'Charlevoix se trouve à l’intérieur des restes d’un cratère de météorite, ce qui explique la forme des collines. Baie-Saint-Paul a ses galeries et une longue tradition de peintres. Le long de la Route des Saveurs, petites fermes et producteurs vendent fromage, cidre et canard. C’est une réserve de biosphère de l’UNESCO, et ça se ressent.', de: "Charlevoix liegt in den Resten eines Meteoritenkraters, was die Form der Hügel erklärt. Baie-Saint-Paul hat Galerien und eine lange Tradition der Malerei. Kleine Höfe und Erzeuger entlang der Route des Saveurs verkaufen Käse, Cidre und Ente. Es ist ein UNESCO-Biosphärenreservat, und so fühlt es sich auch an.", es: "Charlevoix se asienta dentro de los restos de un cráter de meteorito, lo que explica la forma de sus colinas. Baie-Saint-Paul tiene galerías y una larga tradición de pintores. Pequeñas granjas y productores a lo largo de la Route des Saveurs venden queso, sidra y pato. Es una reserva de la biosfera de la UNESCO, y se nota.",
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'Green hills sloping to a wide river and a small village', fr: 'Des collines vertes descendant vers un large fleuve et un petit village', de: "Grüne Hügel, die zu einem breiten Fluss und einem kleinen Dorf abfallen", es: "Colinas verdes que bajan hacia un ancho río y un pequeño pueblo" },
        subject: 'Hills above the St. Lawrence near Baie-Saint-Paul',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A ski run above a frozen river', fr: 'Une piste de ski au-dessus d’un fleuve gelé', de: "Eine Skipiste über einem gefrorenen Fluss", es: "Una pista de esquí sobre un río helado" },
        subject: 'Ski run dropping toward the icy St. Lawrence',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Cheese, cider and bread along the Route des Saveurs', fr: 'Fromage, cidre et pain le long de la Route des Saveurs', de: "Käse, Cidre und Brot entlang der Route des Saveurs", es: "Queso, sidra y pan a lo largo de la Route des Saveurs" },
        { en: 'Galleries in Baie-Saint-Paul', fr: 'Les galeries de Baie-Saint-Paul', de: "Galerien in Baie-Saint-Paul", es: "Galerías en Baie-Saint-Paul" },
        { en: 'Cycling Isle-aux-Coudres, a short ferry away', fr: 'Le tour de l’Isle-aux-Coudres à vélo, à un court traversier', de: "Radfahren auf der Isle-aux-Coudres, eine kurze Fährfahrt entfernt", es: "En bici por la Isle-aux-Coudres, a un corto trayecto en ferry" },
      ],
      winter: [
        { en: 'Skiing with a view straight down to the river', fr: 'Skier avec vue plongeante sur le fleuve', de: "Skifahren mit Blick direkt hinunter auf den Fluss", es: "Esquiar con vistas directas al río" },
        { en: 'Snowshoeing in the national parks', fr: 'La raquette dans les parcs nationaux', de: "Schneeschuhwandern in den Nationalparks", es: "Raquetas de nieve en los parques nacionales" },
      ],
    },
    placeId: 'baie-saint-paul',
    frReview: 'needs-human-review',
  },
  {
    id: 'tadoussac',
    slug: 'tadoussac',
    provinceId: 'quebec',
    name: { en: 'Tadoussac', fr: 'Tadoussac', de: "Tadoussac", es: "Tadoussac" },
    summary: {
      en: 'Where the Saguenay fjord meets the St. Lawrence, and the whales come to feed.',
      fr: 'Là où le fjord du Saguenay rejoint le Saint-Laurent, et où les baleines viennent se nourrir.', de: "Wo der Saguenay-Fjord auf den Sankt-Lorenz-Strom trifft und die Wale zum Fressen kommen.", es: "Donde el fiordo del Saguenay se encuentra con el San Lorenzo, y las ballenas vienen a alimentarse.",
    },
    body: {
      en: 'Tadoussac is a small village at the mouth of the Saguenay fjord. Cold, deep water rises here and feeds a lot of whales: minke, fin, humpback, sometimes blue whales, and belugas all year. You can watch from boats, sea kayaks or the shore. Whale season runs roughly June to October.',
      fr: 'Tadoussac est un petit village à l’embouchure du fjord du Saguenay. Les eaux froides et profondes remontent ici et nourrissent beaucoup de baleines : petits rorquals, rorquals communs, baleines à bosse, parfois des baleines bleues, et des bélugas toute l’année. On les observe en bateau, en kayak de mer ou depuis la rive. La saison va à peu près de juin à octobre.', de: "Tadoussac ist ein kleines Dorf an der Mündung des Saguenay-Fjords. Hier steigt kaltes, tiefes Wasser auf und ernährt viele Wale: Zwergwale, Finnwale, Buckelwale, manchmal Blauwale und ganzjährig Belugas. Beobachten können Sie vom Boot, vom Seekajak oder vom Ufer aus. Die Walsaison dauert etwa von Juni bis Oktober.", es: "Tadoussac es un pequeño pueblo en la desembocadura del fiordo del Saguenay. Aquí aflora agua fría y profunda que alimenta a muchas ballenas: rorcuales aliblancos, rorcuales comunes, jorobadas, a veces ballenas azules, y belugas todo el año. Se pueden ver desde barcos, kayaks de mar o la orilla. La temporada de ballenas va más o menos de junio a octubre.",
    },
    bestMonths: [6, 7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A whale’s back breaking the surface near a rocky shore', fr: 'Le dos d’une baleine qui crève la surface près d’une côte rocheuse', de: "Der Rücken eines Wals durchbricht nahe einer felsigen Küste die Wasseroberfläche", es: "El lomo de una ballena asomando junto a una orilla rocosa" },
        subject: 'Fin whale surfacing off Tadoussac, August',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Small ice-fishing cabins on a frozen fjord', fr: 'De petites cabanes de pêche sur un fjord gelé', de: "Kleine Eisfischerhütten auf einem gefrorenen Fjord", es: "Pequeñas cabañas de pesca en el hielo sobre un fiordo helado" },
        subject: 'Ice-fishing cabins on the Saguenay, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Whale watching by boat or sea kayak', fr: 'L’observation des baleines en bateau ou en kayak de mer', de: "Walbeobachtung per Boot oder Seekajak", es: "Avistamiento de ballenas en barco o en kayak de mar" },
        { en: 'Hiking the cliffs of the Saguenay fjord', fr: 'La randonnée sur les falaises du fjord du Saguenay', de: "Wandern auf den Klippen des Saguenay-Fjords", es: "Caminatas por los acantilados del fiordo del Saguenay" },
      ],
      winter: [
        { en: 'Whale season is over and the village is very quiet. Come from June.', fr: 'La saison des baleines est finie et le village très calme. Venez à partir de juin.', de: "Die Walsaison ist vorbei und das Dorf sehr still. Kommen Sie ab Juni.", es: "La temporada de ballenas ha terminado y el pueblo está muy tranquilo. Venga a partir de junio." },
        { en: 'Ice fishing further up the Saguenay', fr: 'La pêche blanche plus haut sur le Saguenay', de: "Eisfischen weiter oben am Saguenay", es: "Pesca en el hielo más arriba en el Saguenay" },
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
    name: { en: 'Cabot Trail', fr: 'Piste Cabot', de: "Cabot Trail", es: "Cabot Trail" },
    summary: {
      en: 'A coastal loop around Cape Breton Island, with highlands, whales and fiddles.',
      fr: 'Une boucle côtière autour de l’île du Cap-Breton, entre hautes terres, baleines et violons.', de: "Eine Küstenrundfahrt um Cape Breton Island, mit Hochland, Walen und Fiedeln.", es: "Un circuito costero alrededor de la isla de Cabo Bretón, con tierras altas, ballenas y violines.",
    },
    body: {
      en: 'The Cabot Trail is about 300 km of road around northern Cape Breton, in Nova Scotia. It climbs through Cape Breton Highlands National Park, where the Skyline Trail ends on a headland above the sea. Gaelic and Acadian culture are both strong here, and the music is everywhere. In October, the hills turn red and the Celtic Colours festival fills the island.',
      fr: 'La piste Cabot fait environ 300 km de route autour du nord du Cap-Breton, en Nouvelle-Écosse. Elle grimpe dans le parc national des Hautes-Terres-du-Cap-Breton, où le sentier Skyline se termine sur un cap au-dessus de la mer. Les cultures gaélique et acadienne y sont bien vivantes, et la musique est partout. En octobre, les collines rougissent et le festival Celtic Colours anime toute l’île.', de: "Der Cabot Trail ist eine rund 300 km lange Straße um den Norden von Cape Breton in Nova Scotia. Er steigt durch den Cape Breton Highlands National Park, wo der Skyline Trail auf einer Landspitze über dem Meer endet. Gälische und akadische Kultur sind hier beide lebendig, und Musik ist überall. Im Oktober färben sich die Hügel rot und das Festival Celtic Colours erfüllt die Insel.", es: "El Cabot Trail son unos 300 km de carretera alrededor del norte de Cabo Bretón, en Nueva Escocia. Sube por el Parque Nacional Cape Breton Highlands, donde el Skyline Trail termina en un cabo sobre el mar. Aquí tienen mucha fuerza tanto la cultura gaélica como la acadiana, y la música está por todas partes. En octubre, las colinas se tiñen de rojo y el festival Celtic Colours llena la isla.",
    },
    bestMonths: [7, 8, 9, 10],
    images: {
      summer: {
        alt: { en: 'A boardwalk along a headland high above the sea', fr: 'Une passerelle sur un cap, haut au-dessus de la mer', de: "Ein Bohlenweg entlang einer Landspitze hoch über dem Meer", es: "Una pasarela a lo largo de un cabo muy por encima del mar" },
        subject: 'Skyline Trail headland at sunset',
        tone: 'forest',
      },
      winter: {
        alt: { en: 'A snowy coastal road with the sea beyond', fr: 'Une route côtière enneigée, la mer au loin', de: "Eine verschneite Küstenstraße mit dem Meer dahinter", es: "Una carretera costera nevada con el mar al fondo" },
        subject: 'Snow on the highlands above the Gulf',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'The Skyline Trail at sunset, with pilot whales below', fr: 'Le sentier Skyline au coucher du soleil, avec des globicéphales en contrebas', de: "Der Skyline Trail bei Sonnenuntergang, unten Grindwale", es: "El Skyline Trail al atardecer, con calderones abajo" },
        { en: 'Ceilidhs and fiddle music in small halls', fr: 'Les ceilidhs et le violon dans de petites salles', de: "Ceilidhs und Fiedelmusik in kleinen Sälen", es: "Ceilidhs y música de violín en pequeños salones" },
        { en: 'Red and gold hills in early to mid-October', fr: 'Les collines rouges et dorées début et mi-octobre', de: "Rote und goldene Hügel Anfang bis Mitte Oktober", es: "Colinas rojas y doradas de principios a mediados de octubre" },
      ],
      winter: [
        { en: 'Most inns and restaurants close. We’d come back in July.', fr: 'La plupart des auberges et restaurants ferment. Nous reviendrions en juillet.', de: "Die meisten Gasthäuser und Restaurants schließen. Wir würden im Juli wiederkommen.", es: "La mayoría de posadas y restaurantes cierran. Nosotros volveríamos en julio." },
      ],
    },
    placeId: 'baddeck',
    frReview: 'needs-human-review',
  },
  {
    id: 'prince-edward-island',
    slug: 'prince-edward-island',
    provinceId: 'atlantic-canada',
    name: { en: 'Prince Edward Island', fr: 'Île-du-Prince-Édouard', de: "Prince Edward Island", es: "Isla del Príncipe Eduardo" },
    summary: {
      en: 'Canada’s smallest province: red cliffs, potato fields and a lot of lobster.',
      fr: 'La plus petite province du Canada : falaises rouges, champs de pommes de terre et beaucoup de homard.', de: "Kanadas kleinste Provinz: rote Klippen, Kartoffelfelder und sehr viel Hummer.", es: "La provincia más pequeña de Canadá: acantilados rojos, campos de patatas y mucha langosta.",
    },
    body: {
      en: 'Prince Edward Island is linked to the mainland by the 12.9 km Confederation Bridge. The sand and cliffs are red from iron in the soil. Most visitors come for beaches, oysters, lobster suppers and Anne of Green Gables, in roughly that order or the reverse. Charlottetown is small, friendly and easy on foot.',
      fr: 'L’Île-du-Prince-Édouard est reliée au continent par le pont de la Confédération, long de 12,9 km. Le sable et les falaises sont rouges à cause du fer contenu dans le sol. On vient surtout pour les plages, les huîtres, les soupers de homard et Anne… la maison aux pignons verts, à peu près dans cet ordre ou dans l’ordre inverse. Charlottetown est petite, accueillante et se visite à pied.', de: "Prince Edward Island ist über die 12,9 km lange Confederation Bridge mit dem Festland verbunden. Sand und Klippen sind rot vom Eisen im Boden. Die meisten Besucher kommen wegen der Strände, Austern, Hummeressen und Anne auf Green Gables, ungefähr in dieser Reihenfolge oder umgekehrt. Charlottetown ist klein, freundlich und gut zu Fuß zu erkunden.", es: "La Isla del Príncipe Eduardo está unida al continente por el puente de la Confederación, de 12,9 km. La arena y los acantilados son rojos por el hierro del suelo. La mayoría viene por las playas, las ostras, las cenas de langosta y Ana de las Tejas Verdes, más o menos en ese orden o al revés. Charlottetown es pequeña, amable y fácil de recorrer a pie.",
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'Red sandstone cliffs above a beach and blue sea', fr: 'Des falaises de grès rouge au-dessus d’une plage et d’une mer bleue', de: "Rote Sandsteinklippen über einem Strand und blauem Meer", es: "Acantilados de arenisca roja sobre una playa y el mar azul" },
        subject: 'Red cliffs on the north shore, July',
        tone: 'autumn',
      },
      winter: {
        alt: { en: 'A snowy field with a lighthouse on the coast', fr: 'Un champ enneigé avec un phare sur la côte', de: "Ein verschneites Feld mit einem Leuchtturm an der Küste", es: "Un campo nevado con un faro en la costa" },
        subject: 'Lighthouse in a snowy field, February',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Lobster suppers and oysters straight from the bay', fr: 'Les soupers de homard et les huîtres tout juste sorties de la baie', de: "Hummeressen und Austern direkt aus der Bucht", es: "Cenas de langosta y ostras recién sacadas de la bahía" },
        { en: 'Warm-water beaches on the north shore', fr: 'Les plages à l’eau tiède de la côte nord', de: "Strände mit warmem Wasser an der Nordküste", es: "Playas de aguas templadas en la costa norte" },
        { en: 'Cycling the Confederation Trail across the island', fr: 'Traverser l’île à vélo sur le sentier de la Confédération', de: "Radfahren auf dem Confederation Trail quer über die Insel", es: "En bici por el Confederation Trail de punta a punta de la isla" },
      ],
      winter: [
        { en: 'Very quiet. Lovely for a weekend, not built for a holiday.', fr: 'Très calme. Charmant pour un week-end, pas fait pour des vacances.', de: "Sehr ruhig. Schön für ein Wochenende, nicht für einen Urlaub gemacht.", es: "Muy tranquilo. Precioso para un fin de semana, no pensado para unas vacaciones." },
      ],
    },
    placeId: 'charlottetown',
    frReview: 'needs-human-review',
  },
  {
    id: 'newfoundland',
    slug: 'newfoundland',
    provinceId: 'atlantic-canada',
    name: { en: 'Newfoundland', fr: 'Terre-Neuve', de: "Neufundland", es: "Terranova" },
    summary: {
      en: 'Icebergs, puffins, whales and a capital painted in every colour.',
      fr: 'Des icebergs, des macareux, des baleines et une capitale peinte de toutes les couleurs.', de: "Eisberge, Papageitaucher, Wale und eine Hauptstadt in allen Farben.", es: "Icebergs, frailecillos, ballenas y una capital pintada de todos los colores.",
    },
    body: {
      en: 'Newfoundland is a big island with its own time zone, half an hour ahead of the Maritimes. Icebergs drift down from Greenland in May and June, followed by humpbacks and puffins in summer. Gros Morne National Park, on the west coast, has fjords and a mountain of exposed Earth’s mantle. St. John’s has the colourful houses, the pubs, and Cape Spear, the most easterly point in North America.',
      fr: 'Terre-Neuve est une grande île avec son propre fuseau horaire, une demi-heure en avance sur les Maritimes. Les icebergs descendent du Groenland en mai et juin, suivis l’été par les baleines à bosse et les macareux. Le parc national du Gros-Morne, sur la côte ouest, a des fjords et une montagne où le manteau terrestre affleure. St. John’s a ses maisons colorées, ses pubs, et le cap Spear, point le plus à l’est de l’Amérique du Nord.', de: "Neufundland ist eine große Insel mit eigener Zeitzone, eine halbe Stunde vor den Seeprovinzen. Im Mai und Juni treiben Eisberge aus Grönland heran, im Sommer folgen Buckelwale und Papageitaucher. Der Gros Morne National Park an der Westküste hat Fjorde und einen Berg aus freigelegtem Erdmantel. St. John’s hat die bunten Häuser, die Pubs und Cape Spear, den östlichsten Punkt Nordamerikas.", es: "Terranova es una gran isla con su propio huso horario, media hora por delante de las Marítimas. En mayo y junio bajan icebergs a la deriva desde Groenlandia, y en verano llegan las ballenas jorobadas y los frailecillos. El Parque Nacional Gros Morne, en la costa oeste, tiene fiordos y una montaña de manto terrestre al descubierto. St. John’s tiene las casas de colores, los pubs y Cape Spear, el punto más oriental de Norteamérica.",
    },
    bestMonths: [6, 7, 8],
    images: {
      summer: {
        alt: { en: 'A large iceberg near a rocky shore with small houses', fr: 'Un gros iceberg près d’une côte rocheuse aux petites maisons', de: "Ein großer Eisberg nahe einer felsigen Küste mit kleinen Häusern", es: "Un gran iceberg cerca de una costa rocosa con casitas" },
        subject: 'Iceberg off a fishing village, June',
        tone: 'lake',
      },
      winter: {
        alt: { en: 'Snow on rows of brightly painted houses on a hill', fr: 'De la neige sur des rangées de maisons colorées, à flanc de colline', de: "Schnee auf Reihen bunt gestrichener Häuser an einem Hang", es: "Nieve sobre hileras de casas de colores vivos en una colina" },
        subject: 'Snow on St. John’s row houses',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Icebergs, usually May and June. Usually.', fr: 'Les icebergs, en général en mai et juin. En général.', de: "Eisberge, meist im Mai und Juni. Meistens.", es: "Icebergs, normalmente en mayo y junio. Normalmente." },
        { en: 'Puffins at close range near Elliston', fr: 'Les macareux de très près, vers Elliston', de: "Papageitaucher aus nächster Nähe bei Elliston", es: "Frailecillos muy de cerca en Elliston" },
        { en: 'Boat trips into the fjords of Gros Morne', fr: 'Les sorties en bateau dans les fjords du Gros-Morne', de: "Bootsfahrten in die Fjorde des Gros Morne", es: "Excursiones en barco por los fiordos de Gros Morne" },
      ],
      winter: [
        { en: 'St. John’s pubs and music, in any weather', fr: 'Les pubs et la musique de St. John’s, par tous les temps', de: "Pubs und Musik in St. John’s, bei jedem Wetter", es: "Pubs y música en St. John’s, haga el tiempo que haga" },
        { en: 'Outside the city, many places close until spring', fr: 'Hors de la ville, beaucoup d’endroits ferment jusqu’au printemps', de: "Außerhalb der Stadt schließen viele Orte bis zum Frühjahr", es: "Fuera de la ciudad, muchos lugares cierran hasta la primavera" },
      ],
    },
    placeId: 'st-johns',
    frReview: 'needs-human-review',
  },
  {
    id: 'bay-of-fundy',
    slug: 'bay-of-fundy',
    provinceId: 'atlantic-canada',
    name: { en: 'Bay of Fundy', fr: 'Baie de Fundy', de: "Bay of Fundy", es: "Bahía de Fundy" },
    summary: {
      en: 'The highest tides in the world, between New Brunswick and Nova Scotia.',
      fr: 'Les plus hautes marées du monde, entre le Nouveau-Brunswick et la Nouvelle-Écosse.', de: "Die höchsten Gezeiten der Welt, zwischen New Brunswick und Nova Scotia.", es: "Las mareas más altas del mundo, entre Nuevo Brunswick y Nueva Escocia.",
    },
    body: {
      en: 'Twice a day, the Bay of Fundy fills and empties with tides that can reach 16 m. At Hopewell Rocks you can walk on the sea floor at low tide and kayak the same spot six hours later. Fundy National Park has coastal trails and covered bridges nearby. Whales feed at the mouth of the bay in summer.',
      fr: 'Deux fois par jour, la baie de Fundy se remplit et se vide avec des marées qui peuvent atteindre 16 m. À Hopewell Rocks, on marche sur le fond de la mer à marée basse, et on fait du kayak au même endroit six heures plus tard. Le parc national Fundy a des sentiers côtiers, avec des ponts couverts tout près. L’été, les baleines se nourrissent à l’entrée de la baie.', de: "Zweimal täglich füllt und leert sich die Bay of Fundy mit Gezeiten von bis zu 16 m. An den Hopewell Rocks laufen Sie bei Ebbe über den Meeresboden und paddeln sechs Stunden später an derselben Stelle im Kajak. Der Fundy National Park hat Küstenwege, und in der Nähe stehen überdachte Brücken. Im Sommer fressen Wale an der Mündung der Bucht.", es: "Dos veces al día, la bahía de Fundy se llena y se vacía con mareas que pueden alcanzar los 16 m. En Hopewell Rocks puede caminar por el fondo del mar con la marea baja y recorrer el mismo lugar en kayak seis horas después. El Parque Nacional Fundy tiene senderos costeros y puentes cubiertos cerca. En verano, las ballenas se alimentan en la boca de la bahía.",
    },
    bestMonths: [6, 7, 8, 9],
    images: {
      summer: {
        alt: { en: 'Tall sea-carved rock pillars on a muddy shore at low tide', fr: 'De hauts piliers rocheux sculptés par la mer, sur une grève à marée basse', de: "Hohe, vom Meer geformte Felssäulen an einem schlammigen Ufer bei Ebbe", es: "Altas columnas de roca esculpidas por el mar en una orilla fangosa con marea baja" },
        subject: 'Hopewell Rocks at low tide, July',
        tone: 'autumn',
      },
      winter: {
        alt: { en: 'Ice floes stranded on a tidal shore', fr: 'Des blocs de glace échoués sur une grève à marée', de: "Gestrandete Eisschollen an einem Gezeitenufer", es: "Témpanos de hielo varados en una orilla de marea" },
        subject: 'Tidal ice on the Fundy shore, January',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Walking the ocean floor at Hopewell Rocks, then kayaking it', fr: 'Marcher sur le fond de la mer à Hopewell Rocks, puis y pagayer', de: "Bei den Hopewell Rocks über den Meeresboden laufen, dann darauf paddeln", es: "Caminar por el fondo del mar en Hopewell Rocks y luego recorrerlo en kayak" },
        { en: 'Whale watching at the mouth of the bay', fr: 'L’observation des baleines à l’entrée de la baie', de: "Walbeobachtung an der Mündung der Bucht", es: "Avistamiento de ballenas en la boca de la bahía" },
        { en: 'Coastal trails in Fundy National Park', fr: 'Les sentiers côtiers du parc national Fundy', de: "Küstenwege im Fundy National Park", es: "Senderos costeros en el Parque Nacional Fundy" },
      ],
      winter: [
        { en: 'The tides keep going; most of the tours don’t. Better June to September.', fr: 'Les marées continuent, la plupart des excursions non. Mieux vaut venir de juin à septembre.', de: "Die Gezeiten gehen weiter, die meisten Touren nicht. Besser Juni bis September.", es: "Las mareas siguen; la mayoría de las excursiones, no. Mejor de junio a septiembre." },
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
    name: { en: 'Iqaluit', fr: 'Iqaluit', de: "Iqaluit", es: "Iqaluit" },
    summary: {
      en: 'Nunavut’s capital, on Frobisher Bay, three hours’ flight from Ottawa.',
      fr: 'La capitale du Nunavut, sur la baie de Frobisher, à trois heures de vol d’Ottawa.', de: "Nunavuts Hauptstadt an der Frobisher Bay, drei Flugstunden von Ottawa.", es: "La capital de Nunavut, en la bahía de Frobisher, a tres horas de vuelo de Ottawa.",
    },
    body: {
      en: 'Iqaluit is home to about 7,500 people and is the starting point for most trips in Nunavut. The legislative assembly building, the galleries and the local artists are the best introduction to Inuit culture. Sylvia Grinnell Territorial Park is a short walk out of town, with caribou sometimes on the tundra. In April, the town celebrates the return of the light.',
      fr: 'Iqaluit compte environ 7 500 habitants et sert de point de départ à la plupart des voyages au Nunavut. Le bâtiment de l’Assemblée législative, les galeries et les artistes locaux offrent la meilleure introduction à la culture inuite. Le parc territorial Sylvia Grinnell est à quelques pas de la ville, avec parfois des caribous dans la toundra. En avril, la ville fête le retour de la lumière.', de: "In Iqaluit leben rund 7.500 Menschen, und hier beginnen die meisten Reisen in Nunavut. Das Parlamentsgebäude, die Galerien und die örtlichen Künstler sind die beste Einführung in die Kultur der Inuit. Der Sylvia Grinnell Territorial Park liegt einen kurzen Spaziergang außerhalb des Ortes, manchmal mit Karibus auf der Tundra. Im April feiert der Ort die Rückkehr des Lichts.", es: "Iqaluit tiene unos 7.500 habitantes y es el punto de partida de casi todos los viajes a Nunavut. El edificio de la asamblea legislativa, las galerías y los artistas locales son la mejor introducción a la cultura inuit. El Parque Territorial Sylvia Grinnell está a un corto paseo del pueblo, a veces con caribúes en la tundra. En abril, el pueblo celebra el regreso de la luz.",
    },
    bestMonths: [4, 5, 7, 8],
    images: {
      summer: {
        alt: { en: 'Small coloured houses on rocky tundra by a bay', fr: 'De petites maisons colorées sur la toundra rocheuse, au bord d’une baie', de: "Kleine bunte Häuser auf felsiger Tundra an einer Bucht", es: "Casitas de colores sobre la tundra rocosa junto a una bahía" },
        subject: 'Iqaluit houses above Frobisher Bay, July',
        tone: 'granite',
      },
      winter: {
        alt: { en: 'Snowmobiles on sea ice under a pink sky', fr: 'Des motoneiges sur la banquise, sous un ciel rose', de: "Schneemobile auf Meereis unter rosa Himmel", es: "Motos de nieve sobre el hielo marino bajo un cielo rosado" },
        subject: 'Snowmobiles on Frobisher Bay at dusk, April',
        tone: 'snow',
      },
    },
    highlights: {
      summer: [
        { en: 'Walking the tundra in Sylvia Grinnell park', fr: 'Marcher dans la toundra du parc Sylvia Grinnell', de: "Tundrawanderung im Sylvia Grinnell Park", es: "Caminar por la tundra en el parque Sylvia Grinnell" },
        { en: 'Prints and carvings, ideally bought from the artist', fr: 'Estampes et sculptures, idéalement achetées à l’artiste', de: "Drucke und Schnitzereien, am besten direkt vom Künstler gekauft", es: "Grabados y tallas, a ser posible comprados al propio artista" },
      ],
      winter: [
        { en: 'Spring festivities in April, as the days lengthen fast', fr: 'Les festivités du printemps en avril, quand les jours s’allongent vite', de: "Frühlingsfeste im April, wenn die Tage schnell länger werden", es: "Fiestas de primavera en abril, cuando los días se alargan deprisa" },
        { en: 'Dog-team and snowmobile trips on the sea ice with Inuit guides', fr: 'Sorties en traîneau à chiens ou en motoneige sur la banquise, avec des guides inuits', de: "Touren mit Hundegespann und Schneemobil auf dem Meereis mit Inuit-Guides", es: "Salidas en trineo de perros y moto de nieve por el hielo marino con guías inuit" },
        { en: 'Midwinter is dark and very cold. We’d come in March or April.', fr: 'Le cœur de l’hiver est sombre et très froid. Nous viendrions en mars ou avril.', de: "Der Hochwinter ist dunkel und sehr kalt. Wir würden im März oder April kommen.", es: "Pleno invierno es oscuro y muy frío. Nosotros vendríamos en marzo o abril." },
      ],
    },
    placeId: 'iqaluit',
    frReview: 'needs-human-review',
  },
  {
    id: 'pond-inlet',
    slug: 'pond-inlet',
    provinceId: 'nunavut',
    name: { en: 'Pond Inlet', fr: 'Pond Inlet', de: "Pond Inlet", es: "Pond Inlet" },
    summary: {
      en: 'A small Inuit community on north Baffin Island, facing glaciers and narwhals.',
      fr: 'Une petite communauté inuite du nord de l’île de Baffin, face aux glaciers et aux narvals.', de: "Eine kleine Inuit-Gemeinde im Norden von Baffin Island, mit Blick auf Gletscher und Narwale.", es: "Una pequeña comunidad inuit en el norte de la isla de Baffin, frente a glaciares y narvales.",
    },
    body: {
      en: 'Pond Inlet, or Mittimatalik, is a community of about 1,500 people looking across Eclipse Sound to the glaciers of Bylot Island and Sirmilik National Park. From late May to June, Inuit guides take small groups to the floe edge, where sea ice meets open water and the wildlife gathers. Narwhals, seals, seabirds and sometimes polar bears are all possible. Weather and ice decide each day, and good trips build in spare ones.',
      fr: 'Pond Inlet, ou Mittimatalik, est une communauté d’environ 1 500 habitants qui fait face, de l’autre côté du détroit d’Eclipse, aux glaciers de l’île Bylot et du parc national Sirmilik. De fin mai à juin, des guides inuits emmènent de petits groupes à la lisière des glaces, là où la banquise rencontre l’eau libre et où se rassemble la faune. Narvals, phoques, oiseaux marins et parfois ours polaires sont au rendez-vous possible. La météo et la glace décident de chaque journée, et les bons séjours prévoient des jours de marge.', de: "Pond Inlet, oder Mittimatalik, ist eine Gemeinde von rund 1.500 Menschen mit Blick über den Eclipse Sound auf die Gletscher von Bylot Island und den Sirmilik National Park. Von Ende Mai bis Juni bringen Inuit-Guides kleine Gruppen an die Eiskante, wo Meereis auf offenes Wasser trifft und sich die Tierwelt versammelt. Narwale, Robben, Seevögel und manchmal Eisbären sind möglich. Wetter und Eis bestimmen jeden Tag, und gute Reisen planen Reservetage ein.", es: "Pond Inlet, o Mittimatalik, es una comunidad de unas 1.500 personas que mira, al otro lado del Eclipse Sound, a los glaciares de la isla Bylot y del Parque Nacional Sirmilik. De finales de mayo a junio, guías inuit llevan a pequeños grupos al borde del hielo, donde la banquisa se encuentra con el agua abierta y se concentra la fauna. Narvales, focas, aves marinas y a veces osos polares son posibles. El tiempo y el hielo deciden cada día, y los buenos viajes dejan días de margen.",
    },
    bestMonths: [5, 6, 7, 8],
    images: {
      summer: {
        alt: { en: 'Camp tents on sea ice with icebergs and mountains behind', fr: 'Des tentes de camp sur la banquise, icebergs et montagnes derrière', de: "Zelte auf Meereis vor Eisbergen und Bergen", es: "Tiendas de campaña sobre el hielo marino con icebergs y montañas detrás" },
        subject: 'Floe-edge camp near Bylot Island, June',
        tone: 'snow',
      },
      winter: {
        alt: { en: 'A small Arctic settlement under a dark blue sky', fr: 'Un petit village arctique sous un ciel bleu sombre', de: "Eine kleine arktische Siedlung unter dunkelblauem Himmel", es: "Un pequeño asentamiento ártico bajo un cielo azul oscuro" },
        subject: 'Pond Inlet in the polar night, December',
        tone: 'night',
      },
    },
    highlights: {
      summer: [
        { en: 'Camping at the floe edge, late May to June', fr: 'Camper à la lisière des glaces, de fin mai à juin', de: "Camping an der Eiskante, Ende Mai bis Juni", es: "Acampada en el borde del hielo, de finales de mayo a junio" },
        { en: 'Narwhals in Eclipse Sound once the ice breaks up', fr: 'Les narvals dans le détroit d’Eclipse après la débâcle', de: "Narwale im Eclipse Sound, sobald das Eis aufbricht", es: "Narvales en el Eclipse Sound en cuanto se rompe el hielo" },
        { en: 'Icebergs locked in the sea ice, close enough to walk to', fr: 'Des icebergs pris dans la banquise, assez près pour y aller à pied', de: "Im Meereis festgefrorene Eisberge, nah genug, um hinzulaufen", es: "Icebergs atrapados en el hielo marino, tan cerca que se puede ir a pie" },
      ],
      winter: [
        { en: 'The sun doesn’t rise from November to January. Not a visitor season.', fr: 'Le soleil ne se lève pas de novembre à janvier. Pas une saison pour les visiteurs.', de: "Von November bis Januar geht die Sonne nicht auf. Keine Reisezeit für Besucher.", es: "De noviembre a enero no sale el sol. No es temporada para visitantes." },
        { en: 'March and April bring returning light and travel on the ice', fr: 'Mars et avril ramènent la lumière et les déplacements sur la glace', de: "März und April bringen das Licht zurück und Reisen auf dem Eis", es: "Marzo y abril traen de vuelta la luz y los viajes sobre el hielo" },
      ],
    },
    placeId: 'pond-inlet',
    frReview: 'needs-human-review',
  },
];
