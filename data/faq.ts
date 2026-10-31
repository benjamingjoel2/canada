/**
 * FAQ.
 * Anything with `verify` must be checked against the named source before launch.
 */
import type { Faq } from './types';

export const faqs: Faq[] = [
  // ── How we work ────────────────────────────────────────────────────────────
  {
    id: 'how-we-work',
    category: 'how-we-work',
    q: {
      en: 'How does this actually work?',
      fr: 'Comment ça se passe, concrètement ?', de: "Wie funktioniert das eigentlich?", es: "¿Cómo funciona esto exactamente?",
    },
    a: {
      en: "You tell us roughly when, who's coming and what you'd like to see. One specialist, who knows that part of Canada well, calls you back and asks better questions. They send a draft journey, you change what you like, and when it's right we book everything and stay on call while you travel.",
      fr: "Vous nous dites à peu près quand, avec qui et ce que vous aimeriez voir. Un spécialiste qui connaît bien cette partie du Canada vous rappelle et pose de meilleures questions. Il vous envoie une proposition de voyage, vous modifiez ce que vous voulez, et quand tout est juste, nous réservons l'ensemble et restons joignables pendant votre séjour.", de: "Sie sagen uns ungefähr, wann, wer mitkommt und was Sie sehen möchten. Ein Spezialist, der diesen Teil Kanadas gut kennt, ruft Sie zurück und stellt die besseren Fragen. Er schickt einen Reiseentwurf, Sie ändern, was Sie möchten, und wenn alles passt, buchen wir alles und bleiben während Ihrer Reise erreichbar.", es: "Nos cuenta más o menos cuándo, quién viaja y qué le gustaría ver. Un especialista que conoce bien esa parte de Canadá le llama y le hace mejores preguntas. Le envía un borrador del viaje, usted cambia lo que quiera y, cuando está a su gusto, lo reservamos todo y seguimos a su disposición mientras viaja.",
    },
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'cost-per-day',
    category: 'how-we-work',
    q: {
      en: 'What does a journey cost?',
      fr: 'Combien coûte un voyage ?', de: "Was kostet eine Reise?", es: "¿Cuánto cuesta un viaje?",
    },
    a: {
      en: "Our journeys generally start around CA$1,200 per person per day, not including international flights. Remote lodges, floatplanes and the Arctic cost more, because getting anything there costs more. We'll give you a clear price before you commit to anything.",
      fr: "Nos voyages commencent en général autour de 1 200 $ CA par personne et par jour, hors vols internationaux. Les lodges isolés, les hydravions et l'Arctique coûtent plus cher, parce que tout y coûte plus cher à acheminer. Vous aurez un prix clair avant de vous engager.", de: "Unsere Reisen beginnen in der Regel bei etwa 1.200 CA$ pro Person und Tag, ohne internationale Flüge. Abgelegene Lodges, Wasserflugzeuge und die Arktis kosten mehr, weil dort alles mehr kostet, was hingebracht werden muss. Sie erhalten einen klaren Preis, bevor Sie sich zu irgendetwas verpflichten.", es: "Nuestros viajes suelen empezar en torno a 1.200 CA$ por persona y día, sin incluir los vuelos internacionales. Los lodges remotos, los hidroaviones y el Ártico cuestan más, porque llevar cualquier cosa allí cuesta más. Le daremos un precio claro antes de que se comprometa a nada.",
    },
    verify: 'Matches config/pricing.ts',
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'limited-trips',
    category: 'how-we-work',
    q: {
      en: 'Why do you only take a limited number of trips?',
      fr: 'Pourquoi limitez-vous le nombre de voyages ?', de: "Warum nehmen Sie nur eine begrenzte Zahl von Reisen an?", es: "¿Por qué solo aceptan un número limitado de viajes?",
    },
    a: {
      en: "Because the good lodges, guides and boats in Canada are small, and the best weeks are short. We'd rather plan fewer journeys properly than more of them badly. It also means the person who plans your trip is the one who answers your emails.",
      fr: "Parce qu'au Canada, les bons lodges, guides et bateaux sont petits, et les meilleures semaines sont courtes. Nous préférons organiser moins de voyages, mais bien. Et cela veut dire que la personne qui prépare votre voyage est aussi celle qui répond à vos e-mails.", de: "Weil die guten Lodges, Guides und Boote in Kanada klein sind und die besten Wochen kurz. Wir planen lieber weniger Reisen gründlich als mehr davon schlecht. Außerdem beantwortet so dieselbe Person Ihre E-Mails, die auch Ihre Reise plant.", es: "Porque los buenos lodges, guías y barcos de Canadá son pequeños, y las mejores semanas son pocas. Preferimos planificar menos viajes bien que más viajes mal. Además, así la persona que planifica su viaje es la misma que responde a sus correos.",
    },
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'deposits-cancellations',
    category: 'how-we-work',
    q: {
      en: 'How do deposits and cancellations work?',
      fr: 'Comment fonctionnent les acomptes et les annulations ?', de: "Wie funktionieren Anzahlungen und Stornierungen?", es: "¿Cómo funcionan los depósitos y las cancelaciones?",
    },
    a: {
      en: "In short: a deposit secures the journey, the balance is due before you travel, and some lodges and polar bear trips have stricter rules because they sell out a year ahead. You'll see the exact terms in writing before you pay anything, and our booking terms are on the Booking terms page.",
      fr: "En bref : un acompte confirme le voyage, le solde est dû avant le départ, et certains lodges et séjours ours polaires ont des règles plus strictes car ils sont complets un an à l'avance. Vous recevrez les conditions exactes par écrit avant de payer quoi que ce soit ; nos conditions générales figurent sur la page Conditions de réservation.", de: "Kurz gesagt: Eine Anzahlung sichert die Reise, der Restbetrag ist vor Reiseantritt fällig, und einige Lodges und Eisbärreisen haben strengere Regeln, weil sie ein Jahr im Voraus ausgebucht sind. Die genauen Bedingungen erhalten Sie schriftlich, bevor Sie etwas bezahlen, und unsere Buchungsbedingungen finden Sie auf der Seite Buchungsbedingungen.", es: "En resumen: un depósito asegura el viaje, el resto se paga antes de viajar, y algunos lodges y viajes para ver osos polares tienen normas más estrictas porque se agotan con un año de antelación. Verá las condiciones exactas por escrito antes de pagar nada, y nuestras condiciones de reserva están en la página Condiciones de reserva.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'wildlife-guarantees',
    category: 'how-we-work',
    q: {
      en: 'Do you guarantee wildlife sightings?',
      fr: 'Garantissez-vous les observations d’animaux ?', de: "Garantieren Sie Tiersichtungen?", es: "¿Garantizan ver animales?",
    },
    a: {
      en: "No, and be wary of anyone who does. What we can do is put you in the right place, in the right week, with a guide who knows the animals. That makes the odds very good. It doesn't make them certain.",
      fr: "Non, et méfiez-vous de ceux qui le font. Ce que nous pouvons faire, c'est vous placer au bon endroit, la bonne semaine, avec un guide qui connaît les animaux. Les chances sont alors très bonnes. Elles ne sont pas certaines.", de: "Nein, und seien Sie vorsichtig bei allen, die das tun. Was wir tun können: Sie in der richtigen Woche an den richtigen Ort bringen, mit einem Guide, der die Tiere kennt. Das macht die Chancen sehr gut. Sicher macht es sie nicht.", es: "No, y desconfíe de quien lo haga. Lo que sí podemos hacer es llevarle al lugar adecuado, en la semana adecuada, con un guía que conoce a los animales. Eso hace que las probabilidades sean muy buenas. No las convierte en certeza.",
    },
    frReview: 'needs-human-review',
  },

  // ── Planning ───────────────────────────────────────────────────────────────
  {
    id: 'best-season',
    category: 'planning',
    q: {
      en: 'When is the best time to go?',
      fr: 'Quelle est la meilleure saison pour partir ?', de: "Wann ist die beste Reisezeit?", es: "¿Cuál es la mejor época para ir?",
    },
    a: {
      en: "It depends where. The Rockies and the West Coast are best from late June to September. Bears on the coast peak in September. Churchill's polar bears are October and November. The aurora in the Yukon and Yellowknife runs from late August to April. Québec and Ontario are lovely in late September for the colours, and Newfoundland's icebergs come in May and June. Two countries for the price of one: summer Canada and winter Canada.",
      fr: "Cela dépend de la région. Les Rocheuses et la côte Ouest sont au mieux de fin juin à septembre. Les ours de la côte, c'est surtout en septembre. Les ours polaires de Churchill, en octobre et novembre. Les aurores au Yukon et à Yellowknife, de fin août à avril. Le Québec et l'Ontario sont superbes fin septembre pour les couleurs, et les icebergs de Terre-Neuve arrivent en mai et juin. Deux pays pour le prix d'un : le Canada de l'été et celui de l'hiver.", de: "Das hängt vom Ort ab. Die Rockies und die Westküste sind von Ende Juni bis September am schönsten. Bären an der Küste haben im September Hochsaison. Churchills Eisbären sind im Oktober und November da. Polarlichter im Yukon und in Yellowknife gibt es von Ende August bis April. Québec und Ontario sind Ende September wegen der Farben wunderschön, und Neufundlands Eisberge kommen im Mai und Juni. Zwei Länder zum Preis von einem: Sommer-Kanada und Winter-Kanada.", es: "Depende de dónde. Las Rocosas y la costa oeste están en su mejor momento de finales de junio a septiembre. Los osos de la costa, en septiembre. Los osos polares de Churchill, en octubre y noviembre. La aurora en el Yukón y Yellowknife va de finales de agosto a abril. Quebec y Ontario están preciosos a finales de septiembre por los colores, y los icebergs de Terranova llegan en mayo y junio. Dos países por el precio de uno: el Canadá del verano y el Canadá del invierno.",
    },
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'distances',
    category: 'planning',
    q: {
      en: 'How far apart are things, really?',
      fr: 'Quelles sont les distances, en vrai ?', de: "Wie weit liegt alles wirklich auseinander?", es: "¿A qué distancia está todo, de verdad?",
    },
    a: {
      en: "Further than you think. Vancouver to Halifax is further than London to Cairo. Toronto to Vancouver is a flight of four and a half to five hours, and Banff to Jasper is about three and a half hours by road without stops (you will stop). We usually suggest one or two regions per trip, not five.",
      fr: "Plus grandes que vous ne l'imaginez. Vancouver–Halifax, c'est plus loin que Londres–Le Caire. Toronto–Vancouver, c'est quatre heures et demie à cinq heures de vol, et Banff–Jasper environ trois heures et demie de route sans pause (vous ferez des pauses). Nous conseillons en général une ou deux régions par voyage, pas cinq.", de: "Weiter, als Sie denken. Von Vancouver nach Halifax ist es weiter als von London nach Kairo. Von Toronto nach Vancouver fliegt man viereinhalb bis fünf Stunden, und von Banff nach Jasper fährt man ohne Halt etwa dreieinhalb Stunden (Sie werden anhalten). Wir empfehlen meist ein oder zwei Regionen pro Reise, nicht fünf.", es: "Más lejos de lo que cree. De Vancouver a Halifax hay más distancia que de Londres a El Cairo. De Toronto a Vancouver son entre cuatro horas y media y cinco de vuelo, y de Banff a Jasper unas tres horas y media por carretera sin paradas (y parará). Solemos proponer una o dos regiones por viaje, no cinco.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'getting-around',
    category: 'planning',
    q: {
      en: 'How do we get around?',
      fr: 'Comment se déplace-t-on ?', de: "Wie kommen wir herum?", es: "¿Cómo nos desplazamos?",
    },
    a: {
      en: "A mix, chosen for the trip. Domestic flights cover the big distances. Floatplanes reach coastal lodges that have no road. Rail is slow on purpose and very good for scenery. In the mountains and around Québec you can self-drive, or we arrange a private driver-guide so nobody has to read the map. Churchill has no road in at all: you fly or take the train.",
      fr: "Un mélange, choisi selon le voyage. Les vols intérieurs couvrent les grandes distances. Les hydravions desservent les lodges côtiers sans route. Le train est lent à dessein, et idéal pour les paysages. Dans les Rocheuses et au Québec, vous pouvez conduire vous-même, ou nous prévoyons un chauffeur-guide privé pour que personne n'ait à lire la carte. Churchill n'a aucune route d'accès : on y va en avion ou en train.", de: "Mit einer Mischung, passend zur Reise. Inlandsflüge decken die großen Distanzen ab. Wasserflugzeuge erreichen Küsten-Lodges ohne Straße. Die Bahn ist mit Absicht langsam und landschaftlich hervorragend. In den Bergen und rund um Québec können Sie selbst fahren, oder wir organisieren einen privaten Fahrer-Guide, damit niemand Karten lesen muss. Nach Churchill führt überhaupt keine Straße: Sie fliegen oder nehmen den Zug.", es: "Con una combinación, elegida para cada viaje. Los vuelos nacionales cubren las grandes distancias. Los hidroaviones llegan a lodges costeros sin carretera. El tren es lento a propósito y magnífico para el paisaje. En la montaña y en Quebec puede conducir usted, o le organizamos un conductor-guía privado para que nadie tenga que leer el mapa. A Churchill no llega ninguna carretera: se vuela o se toma el tren.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'kids',
    category: 'planning',
    q: {
      en: 'Do you plan trips with children?',
      fr: 'Organisez-vous des voyages avec des enfants ?', de: "Planen Sie Reisen mit Kindern?", es: "¿Organizan viajes con niños?",
    },
    a: {
      en: "Yes, often. We keep drives short, mix in days with nothing planned, and choose places with space to run around. Some lodges and boat trips have minimum ages, usually for safety, and we'll tell you which before you fall in love with them.",
      fr: "Oui, souvent. Nous gardons des trajets courts, prévoyons des journées sans programme et choisissons des lieux où l'on peut courir. Certains lodges et sorties en bateau ont un âge minimum, souvent pour des raisons de sécurité, et nous vous le dirons avant que vous ne vous y attachiez.", de: "Ja, oft. Wir halten die Fahrten kurz, mischen Tage ohne Programm ein und wählen Orte mit Platz zum Toben. Manche Lodges und Bootsfahrten haben ein Mindestalter, meist aus Sicherheitsgründen, und wir sagen Ihnen welche, bevor Sie sich in sie verlieben.", es: "Sí, a menudo. Hacemos trayectos cortos, intercalamos días sin nada previsto y elegimos lugares con espacio para correr. Algunos lodges y salidas en barco tienen edad mínima, normalmente por seguridad, y le diremos cuáles antes de que se enamore de ellos.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'accessibility',
    category: 'planning',
    q: {
      en: 'Can you plan for limited mobility or other access needs?',
      fr: 'Pouvez-vous tenir compte d’une mobilité réduite ou d’autres besoins ?', de: "Können Sie für eingeschränkte Mobilität oder andere Bedürfnisse planen?", es: "¿Pueden planificar para personas con movilidad reducida u otras necesidades de accesibilidad?",
    },
    a: {
      en: "Tell us what you need and we'll be honest about what works. Cities, rail and many hotels are good. Floatplanes, tundra vehicles and remote lodges vary a lot, and we check the details with each one directly rather than guessing.",
      fr: "Dites-nous ce dont vous avez besoin et nous serons francs sur ce qui est possible. Les villes, le train et beaucoup d'hôtels sont bien adaptés. Les hydravions, les véhicules de toundra et les lodges isolés varient beaucoup, et nous vérifions chaque détail directement auprès d'eux plutôt que de deviner.", de: "Sagen Sie uns, was Sie brauchen, und wir sagen Ihnen ehrlich, was funktioniert. Städte, Bahn und viele Hotels sind gut. Wasserflugzeuge, Tundra-Fahrzeuge und abgelegene Lodges sind sehr unterschiedlich, und wir klären die Details mit jedem direkt, statt zu raten.", es: "Díganos qué necesita y le diremos con sinceridad qué funciona. Las ciudades, el tren y muchos hoteles están bien. Los hidroaviones, los vehículos de tundra y los lodges remotos varían mucho, y comprobamos los detalles directamente con cada uno en lugar de suponer.",
    },
    frReview: 'needs-human-review',
  },

  // ── Practical ──────────────────────────────────────────────────────────────
  {
    id: 'entry-requirements',
    category: 'practical',
    q: {
      en: 'Do I need a visa or an eTA?',
      fr: 'Ai-je besoin d’un visa ou d’une AVE ?', de: "Brauche ich ein Visum oder eine eTA?", es: "¿Necesito visado o eTA?",
    },
    a: {
      en: "Most visa-exempt travellers, including citizens of the UK, France, Belgium, Switzerland and Australia, need an Electronic Travel Authorization (eTA) to fly to or transit through Canada. Travellers from many other countries need a visitor visa instead. US citizens need neither, but do need valid ID such as a passport. These rules change, so please verify against Government of Canada sources (canada.ca) before you book flights.",
      fr: "La plupart des voyageurs dispensés de visa, notamment les citoyens français, belges, suisses, britanniques et australiens, ont besoin d'une autorisation de voyage électronique (AVE) pour se rendre au Canada en avion ou y transiter. Les voyageurs de nombreux autres pays ont besoin d'un visa de visiteur. Les citoyens américains n'ont besoin ni de l'un ni de l'autre, mais doivent présenter une pièce d'identité valide, comme un passeport. Ces règles évoluent : vérifiez auprès des sources officielles du gouvernement du Canada (canada.ca) avant de réserver vos vols.", de: "Die meisten visumfreien Reisenden, darunter Staatsangehörige des Vereinigten Königreichs, Frankreichs, Belgiens, der Schweiz und Australiens, benötigen eine elektronische Reisegenehmigung (eTA), um nach Kanada zu fliegen oder dort umzusteigen. Reisende aus vielen anderen Ländern benötigen stattdessen ein Besuchervisum. US-Bürger brauchen keines von beiden, aber einen gültigen Ausweis wie einen Reisepass. Diese Regeln ändern sich, bitte prüfen Sie sie daher vor der Flugbuchung bei offiziellen Quellen der kanadischen Regierung (canada.ca).", es: "La mayoría de los viajeros exentos de visado, entre ellos los ciudadanos del Reino Unido, Francia, Bélgica, Suiza y Australia, necesitan una Autorización Electrónica de Viaje (eTA) para volar a Canadá o hacer escala allí. Los viajeros de muchos otros países necesitan, en cambio, un visado de visitante. Los ciudadanos estadounidenses no necesitan ninguno de los dos, pero sí un documento válido, como el pasaporte. Estas normas cambian, así que compruébelas en las fuentes oficiales del Gobierno de Canadá (canada.ca) antes de reservar los vuelos.",
    },
    verify: 'Verify against Government of Canada sources (canada.ca) before launch',
    frReview: 'needs-human-review',
  },
  {
    id: 'travel-insurance',
    category: 'practical',
    q: {
      en: 'Do I need travel insurance?',
      fr: 'Faut-il une assurance voyage ?', de: "Brauche ich eine Reiseversicherung?", es: "¿Necesito un seguro de viaje?",
    },
    a: {
      en: "Yes. Healthcare in Canada is excellent but not free for visitors, and medical evacuation from a remote lodge is very expensive. Make sure your policy covers cancellation, medical care and any activities you plan, such as heli-skiing.",
      fr: "Oui. Les soins au Canada sont excellents, mais pas gratuits pour les visiteurs, et une évacuation médicale depuis un lodge isolé coûte très cher. Vérifiez que votre contrat couvre l'annulation, les frais médicaux et les activités prévues, comme l'héliski.", de: "Ja. Die Gesundheitsversorgung in Kanada ist ausgezeichnet, aber für Besucher nicht kostenlos, und eine medizinische Evakuierung aus einer abgelegenen Lodge ist sehr teuer. Achten Sie darauf, dass Ihre Police Stornierung, medizinische Versorgung und alle geplanten Aktivitäten wie Heli-Skiing abdeckt.", es: "Sí. La sanidad en Canadá es excelente, pero no es gratuita para los visitantes, y una evacuación médica desde un lodge remoto es muy cara. Asegúrese de que su póliza cubra la cancelación, la asistencia médica y las actividades que tenga previstas, como el heli-esquí.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'weather-packing',
    category: 'practical',
    q: {
      en: 'What will the weather be like, and what should I pack?',
      fr: 'Quel temps fera-t-il, et que faut-il emporter ?', de: "Wie wird das Wetter, und was soll ich einpacken?", es: "¿Qué tiempo hará y qué debo llevar?",
    },
    a: {
      en: "Layers, always. A Rockies day in July can start near freezing and reach 25°C by lunch. The West Coast is wet, so bring a proper rain jacket. For the aurora or Churchill, nights reach minus 20 to minus 40, and we'll send a kit list or arrange rented cold-weather gear.",
      fr: "Des couches, toujours. Une journée de juillet dans les Rocheuses peut commencer près de zéro et atteindre 25 °C à midi. La côte Ouest est humide : prévoyez une vraie veste de pluie. Pour les aurores ou Churchill, les nuits descendent de moins 20 à moins 40, et nous vous enverrons une liste d'équipement ou organiserons la location de vêtements grand froid.", de: "Immer mehrere Schichten. Ein Tag in den Rockies im Juli kann nahe dem Gefrierpunkt beginnen und mittags 25 °C erreichen. Die Westküste ist nass, nehmen Sie also eine richtige Regenjacke mit. Für Polarlichter oder Churchill erreichen die Nächte minus 20 bis minus 40 Grad; wir schicken Ihnen eine Packliste oder organisieren Kälteausrüstung zur Miete.", es: "Capas, siempre. Un día de julio en las Rocosas puede empezar cerca de cero grados y llegar a 25 °C a mediodía. La costa oeste es húmeda, así que traiga un buen chubasquero. Para la aurora o Churchill, las noches llegan a entre 20 y 40 bajo cero; le enviaremos una lista de equipo o le organizaremos el alquiler de ropa para el frío.",
    },
    frReview: 'needs-human-review',
  },
];
