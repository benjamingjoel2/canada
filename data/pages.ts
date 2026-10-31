/**
 * Long-form copy for static pages: Indigenous Canada, About, How we work.
 *
 * Indigenous page: partners listed here are PLACEHOLDERS. Replace them only
 * with real partners who have agreed to be named, in words they have approved.
 * Do not add nation-specific claims without checking them with the community.
 */
import type { Img, L, Reviewed } from './types';

export type PageSection = Reviewed & {
  id: string;
  heading: L;
  paragraphs: L[];
  points?: L[];
};

export type PlaceholderPartner = Reviewed & {
  id: string;
  name: L;
  description: L;
  placeholder: true;
};

export type IndigenousPage = Reviewed & {
  title: L;
  intro: L;
  image: Img;
  sections: PageSection[];
  principles: (Reviewed & { id: string; title: L; body: L })[];
  partners: PlaceholderPartner[];
  furtherReading: Reviewed & { heading: L; items: L[] };
};

export type AboutPage = Reviewed & {
  title: L;
  intro: L;
  image: Img;
  sections: PageSection[];
  honesty: Reviewed & { heading: L; points: L[] };
};

export type HowWeWorkStep = Reviewed & {
  id: string;
  step: number;
  title: L;
  body: L;
};

// ── Indigenous Canada ────────────────────────────────────────────────────────

export const indigenousPage: IndigenousPage = {
  title: {
    en: 'Indigenous *Canada*',
    fr: 'Le Canada *autochtone*', de: "Indigenes *Kanada*", es: "El Canadá *indígena*",
  },
  intro: {
    en: "Every journey we plan crosses the lands of First Nations, Inuit and Métis peoples. This page explains how we try to travel well on those lands, and where we still have work to do.",
    fr: "Chaque voyage que nous organisons traverse les terres des Premières Nations, des Inuit et des Métis. Cette page explique comment nous essayons d'y voyager correctement, et ce qu'il nous reste à améliorer.", de: "Jede Reise, die wir planen, führt durch das Land von First Nations, Inuit und Métis. Diese Seite erklärt, wie wir versuchen, auf diesem Land gut zu reisen, und wo wir noch Arbeit vor uns haben.", es: "Cada viaje que planificamos atraviesa tierras de las Primeras Naciones, los inuit y los métis. Esta página explica cómo intentamos viajar bien por esas tierras y en qué nos queda trabajo por hacer.",
  },
  image: {
    alt: {
      en: 'Placeholder image: a coastal forest shoreline at low tide',
      fr: 'Image provisoire : un rivage de forêt côtière à marée basse', de: "Platzhalterbild: eine Küstenwaldlinie bei Ebbe", es: "Imagen provisional: la orilla de un bosque costero con marea baja",
    },
    subject: 'Cedar forest meeting the sea at low tide',
    tone: 'forest',
  },
  sections: [
    {
      id: 'whose-land',
      heading: {
        en: "Whose land you're travelling through",
        fr: 'Sur quelles terres vous voyagez', de: "Wessen Land Sie bereisen", es: "De quién es la tierra que recorre",
      },
      paragraphs: [
        {
          en: "Canada is home to more than 600 First Nations communities, as well as Inuit and Métis peoples, each with their own languages, laws and histories. The rainforest coast, the Rockies, the tundra around Churchill and the streets of Montréal are all part of someone's homeland, and many of those relationships to the land are thousands of years old.",
          fr: "Le Canada compte plus de 600 communautés des Premières Nations, ainsi que les Inuit et les Métis, chacun avec ses langues, ses lois et son histoire. La côte de la forêt pluviale, les Rocheuses, la toundra autour de Churchill et les rues de Montréal font toutes partie du territoire de quelqu'un, et beaucoup de ces liens à la terre remontent à des milliers d'années.", de: "In Kanada leben mehr als 600 First-Nations-Gemeinschaften sowie Inuit und Métis, jede mit eigenen Sprachen, Gesetzen und Geschichten. Die Regenwaldküste, die Rockies, die Tundra um Churchill und die Straßen von Montréal sind alle Teil der Heimat von jemandem, und viele dieser Beziehungen zum Land sind Tausende Jahre alt.", es: "Canadá es el hogar de más de 600 comunidades de las Primeras Naciones, además de los pueblos inuit y métis, cada uno con sus lenguas, leyes e historias. La costa de selva lluviosa, las Rocosas, la tundra de Churchill y las calles de Montreal forman parte de la tierra natal de alguien, y muchas de esas relaciones con la tierra tienen miles de años.",
        },
        {
          en: "On each itinerary we name the nations whose territory you'll be on, checked with local sources. A land acknowledgement is a starting point, not a box to tick. What matters more is what happens next: who guides you, who you buy from, and how you behave as a guest.",
          fr: "Pour chaque itinéraire, nous nommons les nations dont vous traverserez le territoire, après vérification auprès de sources locales. Une reconnaissance territoriale est un point de départ, pas une case à cocher. Ce qui compte davantage, c'est la suite : qui vous guide, à qui vous achetez, et comment vous vous comportez en invité.", de: "In jedem Reiseplan nennen wir die Nationen, auf deren Gebiet Sie sich befinden, abgeglichen mit lokalen Quellen. Eine Landanerkennung ist ein Anfang, kein Kästchen zum Abhaken. Wichtiger ist, was danach kommt: wer Sie führt, bei wem Sie kaufen und wie Sie sich als Gast verhalten.", es: "En cada itinerario nombramos las naciones en cuyo territorio estará, contrastado con fuentes locales. Un reconocimiento territorial es un punto de partida, no una casilla que marcar. Lo que más importa es lo que viene después: quién le guía, a quién compra y cómo se comporta como invitado.",
        },
      ],
      frReview: 'needs-human-review',
    },
    {
      id: 'why-it-matters',
      heading: {
        en: 'Why it matters',
        fr: 'Pourquoi c’est important', de: "Warum es wichtig ist", es: "Por qué importa",
      },
      paragraphs: [
        {
          en: "You learn more from people telling their own stories than from anyone telling them second-hand, including us. A walk with a guide whose family has fished a river for generations is a different walk.",
          fr: "On apprend davantage de personnes qui racontent leur propre histoire que de quiconque la raconte de seconde main, nous compris. Une marche avec un guide dont la famille pêche dans cette rivière depuis des générations n'est pas la même marche.", de: "Sie lernen mehr von Menschen, die ihre eigenen Geschichten erzählen, als von jedem, der sie aus zweiter Hand erzählt, uns eingeschlossen. Eine Wanderung mit einem Guide, dessen Familie seit Generationen an einem Fluss fischt, ist eine andere Wanderung.", es: "Se aprende más de quien cuenta su propia historia que de quien la cuenta de segunda mano, nosotros incluidos. Un paseo con un guía cuya familia lleva generaciones pescando en un río es otro paseo.",
        },
        {
          en: "It also matters where the money goes. When we book Indigenous-owned lodges, guides and businesses, more of what you spend stays in the communities whose land you're visiting.",
          fr: "Il importe aussi de savoir où va l'argent. Quand nous réservons des lodges, des guides et des entreprises appartenant à des Autochtones, une plus grande part de vos dépenses reste dans les communautés dont vous visitez les terres.", de: "Wichtig ist auch, wohin das Geld fließt. Wenn wir Lodges, Guides und Betriebe in indigenem Besitz buchen, bleibt mehr von dem, was Sie ausgeben, in den Gemeinschaften, deren Land Sie besuchen.", es: "También importa adónde va el dinero. Cuando reservamos lodges, guías y negocios de propiedad indígena, más de lo que usted gasta se queda en las comunidades cuyas tierras visita.",
        },
      ],
      frReview: 'needs-human-review',
    },
  ],
  principles: [
    {
      id: 'owned-or-led',
      title: {
        en: 'Indigenous-owned or -led, where possible',
        fr: 'Des entreprises autochtones, ou dirigées par des Autochtones, autant que possible', de: "Wo möglich in indigenem Besitz oder unter indigener Leitung", es: "De propiedad o dirección indígena, siempre que sea posible",
      },
      body: {
        en: "When an Indigenous-owned or -led option exists and is good, we choose it. Where one doesn't exist yet, we say so rather than pretending.",
        fr: "Quand une option autochtone, ou dirigée par des Autochtones, existe et qu'elle est bonne, nous la choisissons. Quand il n'en existe pas encore, nous le disons au lieu de faire semblant.", de: "Wenn es eine gute Option in indigenem Besitz oder unter indigener Leitung gibt, wählen wir sie. Wo es noch keine gibt, sagen wir das, statt so zu tun, als ob.", es: "Cuando existe una buena opción de propiedad o dirección indígena, la elegimos. Donde todavía no existe, lo decimos en lugar de fingir.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'fair-pay',
      title: { en: 'Fair pay', fr: 'Une juste rémunération', de: "Faire Bezahlung", es: "Pago justo" },
      body: {
        en: "We pay partners their asking rate and on time. We don't squeeze guides to make a price look better.",
        fr: "Nous payons nos partenaires au tarif qu'ils demandent, et dans les délais. Nous ne rognons pas sur les guides pour afficher un meilleur prix.", de: "Wir zahlen unseren Partnern ihren geforderten Preis, und zwar pünktlich. Wir drücken keine Guides, damit ein Preis besser aussieht.", es: "Pagamos a nuestros socios la tarifa que piden y a tiempo. No apretamos a los guías para que un precio parezca mejor.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'community-protocols',
      title: { en: 'Guests follow community protocols', fr: 'Les voyageurs respectent les règles des communautés', de: "Gäste folgen den Regeln der Gemeinschaft", es: "Los huéspedes siguen los protocolos de la comunidad" },
      body: {
        en: "Some places, ceremonies and objects are not for photographs. Some are not for visitors at all. Your guide will tell you, and we ask you to listen without arguing the point.",
        fr: "Certains lieux, cérémonies et objets ne se photographient pas. Certains ne sont pas ouverts aux visiteurs. Votre guide vous le dira, et nous vous demandons de l'écouter sans discuter.", de: "Manche Orte, Zeremonien und Gegenstände sind nicht für Fotos gedacht. Manche gar nicht für Besucher. Ihr Guide sagt es Ihnen, und wir bitten Sie, zuzuhören, ohne darüber zu diskutieren.", es: "Algunos lugares, ceremonias y objetos no son para fotografiar. Algunos no son para visitantes en absoluto. Su guía se lo dirá, y le pedimos que escuche sin discutir.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'no-staging',
      title: { en: 'No staged experiences', fr: 'Pas de mise en scène', de: "Keine inszenierten Erlebnisse", es: "Nada de experiencias escenificadas" },
      body: {
        en: "We don't book performances put on for tourists by people who aren't from the community, or anything that treats living cultures as a costume. Modern life is part of the story too.",
        fr: "Nous ne réservons pas de spectacles montés pour les touristes par des personnes extérieures à la communauté, ni rien qui traite des cultures vivantes comme un costume. La vie d'aujourd'hui fait aussi partie de l'histoire.", de: "Wir buchen keine Vorführungen für Touristen von Menschen, die nicht aus der Gemeinschaft stammen, und nichts, was lebendige Kulturen wie ein Kostüm behandelt. Auch das moderne Leben gehört zur Geschichte.", es: "No reservamos espectáculos para turistas a cargo de personas que no son de la comunidad, ni nada que trate las culturas vivas como un disfraz. La vida moderna también forma parte de la historia.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'we-dont-speak-for',
      title: { en: "We don't speak for communities", fr: 'Nous ne parlons pas au nom des communautés', de: "Wir sprechen nicht für Gemeinschaften", es: "No hablamos en nombre de las comunidades" },
      body: {
        en: "We're travel planners, not cultural experts. On this site we keep descriptions short and let partners describe themselves, in their own words.",
        fr: "Nous organisons des voyages, nous ne sommes pas des experts culturels. Sur ce site, nous restons brefs et laissons nos partenaires se présenter eux-mêmes, avec leurs propres mots.", de: "Wir sind Reiseplaner, keine Kulturexperten. Auf dieser Website halten wir Beschreibungen kurz und lassen Partner sich selbst beschreiben, in ihren eigenen Worten.", es: "Somos planificadores de viajes, no expertos culturales. En esta web mantenemos las descripciones breves y dejamos que nuestros socios se describan a sí mismos, con sus propias palabras.",
      },
      frReview: 'needs-human-review',
    },
  ],
  partners: [
    {
      id: 'partner-placeholder-haida-gwaii',
      name: {
        en: 'Placeholder: a Haida-owned guiding company, Haida Gwaii',
        fr: 'Provisoire : une entreprise de guides haïda, Haida Gwaii', de: "Platzhalter: ein Guide-Unternehmen in Haida-Besitz, Haida Gwaii", es: "Provisional: una empresa de guías de propiedad haida, Haida Gwaii",
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.', de: "PLATZHALTER: durch einen echten Partner ersetzen, in dessen eigenen Worten beschrieben und mit dessen Zustimmung.", es: "PROVISIONAL: sustituir por un socio real, descrito con sus propias palabras y con su permiso.",
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
    {
      id: 'partner-placeholder-coast-lodge',
      name: {
        en: 'Placeholder: a First Nation-owned wilderness lodge, Great Bear Rainforest',
        fr: 'Provisoire : un lodge appartenant à une Première Nation, forêt pluviale du Grand Ours', de: "Platzhalter: eine Wildnis-Lodge im Besitz einer First Nation, Great Bear Rainforest", es: "Provisional: un lodge en plena naturaleza propiedad de una Primera Nación, Great Bear Rainforest",
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.', de: "PLATZHALTER: durch einen echten Partner ersetzen, in dessen eigenen Worten beschrieben und mit dessen Zustimmung.", es: "PROVISIONAL: sustituir por un socio real, descrito con sus propias palabras y con su permiso.",
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
    {
      id: 'partner-placeholder-yukon',
      name: {
        en: 'Placeholder: an Indigenous-led cultural centre and guiding service, Yukon',
        fr: 'Provisoire : un centre culturel et service de guides dirigé par des Autochtones, Yukon', de: "Platzhalter: ein indigen geführtes Kulturzentrum mit Guide-Service, Yukon", es: "Provisional: un centro cultural y servicio de guías dirigido por indígenas, Yukón",
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.', de: "PLATZHALTER: durch einen echten Partner ersetzen, in dessen eigenen Worten beschrieben und mit dessen Zustimmung.", es: "PROVISIONAL: sustituir por un socio real, descrito con sus propias palabras y con su permiso.",
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
    {
      id: 'partner-placeholder-nunavut',
      name: {
        en: 'Placeholder: an Inuit-owned outfitter, Nunavut',
        fr: 'Provisoire : un pourvoyeur inuit, Nunavut', de: "Platzhalter: ein Ausrüster in Inuit-Besitz, Nunavut", es: "Provisional: un proveedor de expediciones de propiedad inuit, Nunavut",
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.', de: "PLATZHALTER: durch einen echten Partner ersetzen, in dessen eigenen Worten beschrieben und mit dessen Zustimmung.", es: "PROVISIONAL: sustituir por un socio real, descrito con sus propias palabras y con su permiso.",
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
  ],
  furtherReading: {
    heading: { en: 'Further reading', fr: 'Pour aller plus loin', de: "Weiterführende Lektüre", es: "Para saber más" },
    items: [
      {
        en: 'The Indigenous Tourism Association of Canada lists Indigenous-owned and -operated experiences across the country.',
        fr: "L'Association touristique autochtone du Canada (Indigenous Tourism Association of Canada) répertorie des expériences détenues et gérées par des Autochtones dans tout le pays.", de: "Die Indigenous Tourism Association of Canada listet Angebote in indigenem Besitz und unter indigener Leitung im ganzen Land.", es: "La Indigenous Tourism Association of Canada recoge experiencias de propiedad y gestión indígena en todo el país.",
      },
      {
        en: "Many nations run their own cultural centres and websites. Your specialist will point you to the ones on your route, so you can read their history as they tell it.",
        fr: "De nombreuses nations ont leurs propres centres culturels et sites web. Votre spécialiste vous indiquera ceux qui se trouvent sur votre itinéraire, pour lire leur histoire telle qu'elles la racontent.", de: "Viele Nationen betreiben eigene Kulturzentren und Websites. Ihr Spezialist nennt Ihnen die auf Ihrer Route, damit Sie ihre Geschichte so lesen können, wie sie sie selbst erzählen.", es: "Muchas naciones tienen sus propios centros culturales y webs. Su especialista le indicará los de su ruta, para que pueda leer su historia tal como ellos la cuentan.",
      },
    ],
    frReview: 'needs-human-review',
  },
  frReview: 'needs-human-review',
};

// ── About ────────────────────────────────────────────────────────────────────

export const aboutPage: AboutPage = {
  title: {
    en: 'A small team that *knows* Canada',
    fr: 'Une petite équipe qui *connaît* le Canada', de: "Ein kleines Team, das Kanada *kennt*", es: "Un pequeño equipo que *conoce* Canadá",
  },
  intro: {
    en: "We're a handful of Canada specialists who design private journeys. Canada, made for you.",
    fr: 'Nous sommes une poignée de spécialistes du Canada qui conçoivent des voyages privés. Le Canada, fait pour vous.', de: "Wir sind eine Handvoll Kanada-Spezialisten, die private Reisen gestalten. Kanada, für Sie gemacht.", es: "Somos un puñado de especialistas en Canadá que diseñamos viajes privados. Canadá, hecho para usted.",
  },
  image: {
    alt: {
      en: 'Placeholder image: a lake at first light with a canoe pulled up on the shore',
      fr: 'Image provisoire : un lac au petit matin, un canot tiré sur la rive', de: "Platzhalterbild: ein See im ersten Licht mit einem ans Ufer gezogenen Kanu", es: "Imagen provisional: un lago con la primera luz y una canoa varada en la orilla",
    },
    subject: 'Canoe on a quiet lakeshore at first light',
    tone: 'lake',
  },
  sections: [
    {
      id: 'who-we-are',
      heading: { en: 'Who we are', fr: 'Qui nous sommes', de: "Wer wir sind", es: "Quiénes somos" },
      paragraphs: [
        {
          en: "Each of us has lived, worked or guided in the part of Canada we plan for. Between us we cover the West Coast and the Rockies, the North, Québec, Ontario and the Atlantic, and the long train rides in between.",
          fr: "Chacun d'entre nous a vécu, travaillé ou guidé dans la partie du Canada qu'il organise. À nous tous, nous couvrons la côte Ouest et les Rocheuses, le Grand Nord, le Québec, l'Ontario et l'Atlantique, et les longs trajets en train entre les deux.", de: "Jeder von uns hat in dem Teil Kanadas gelebt, gearbeitet oder geführt, für den er plant. Zusammen decken wir die Westküste und die Rockies, den Norden, Québec, Ontario und den Atlantik ab, und die langen Zugfahrten dazwischen.", es: "Cada uno de nosotros ha vivido, trabajado o guiado en la parte de Canadá que planifica. Entre todos cubrimos la costa oeste y las Rocosas, el norte, Quebec, Ontario y el Atlántico, y los largos trayectos en tren entre medias.",
        },
        {
          en: "You deal with one specialist from first call to last day. They know the lodges, the guides and the roads, and they know which week the bears turn up.",
          fr: "Vous avez affaire à un seul spécialiste, du premier appel au dernier jour. Il connaît les lodges, les guides et les routes, et il sait quelle semaine les ours arrivent.", de: "Sie haben vom ersten Anruf bis zum letzten Tag einen Spezialisten. Er kennt die Lodges, die Guides und die Straßen, und er weiß, in welcher Woche die Bären auftauchen.", es: "Trata con un solo especialista desde la primera llamada hasta el último día. Conoce los lodges, los guías y las carreteras, y sabe en qué semana aparecen los osos.",
        },
      ],
      frReview: 'needs-human-review',
    },
    {
      id: 'why-limited',
      heading: { en: 'Why we take a limited number of trips', fr: 'Pourquoi nous limitons le nombre de voyages', de: "Warum wir nur eine begrenzte Zahl von Reisen annehmen", es: "Por qué aceptamos un número limitado de viajes" },
      paragraphs: [
        {
          en: "Canada's best places are small. A good bear lodge might have a dozen rooms. Polar bear season is about six weeks long. If we took on every enquiry, we'd end up sending people to the wrong place in the wrong week.",
          fr: "Les meilleurs endroits du Canada sont petits. Un bon lodge pour observer les ours compte parfois une douzaine de chambres. La saison des ours polaires dure environ six semaines. Si nous acceptions toutes les demandes, nous finirions par envoyer des gens au mauvais endroit, la mauvaise semaine.", de: "Kanadas beste Orte sind klein. Eine gute Bären-Lodge hat vielleicht ein Dutzend Zimmer. Die Eisbärsaison dauert etwa sechs Wochen. Würden wir jede Anfrage annehmen, schickten wir am Ende Menschen in der falschen Woche an den falschen Ort.", es: "Los mejores lugares de Canadá son pequeños. Un buen lodge de osos puede tener una docena de habitaciones. La temporada de osos polares dura unas seis semanas. Si aceptáramos todas las solicitudes, acabaríamos mandando a gente al lugar equivocado en la semana equivocada.",
        },
        {
          en: "So we plan fewer journeys, and we plan them properly. Sometimes that means telling you to come next year instead.",
          fr: "Alors nous organisons moins de voyages, et nous les organisons bien. Parfois, cela veut dire vous conseiller de venir l'année suivante.", de: "Also planen wir weniger Reisen, und die planen wir richtig. Manchmal heißt das, Ihnen zu raten, nächstes Jahr zu kommen.", es: "Así que planificamos menos viajes, y los planificamos bien. A veces eso significa decirle que venga el año que viene.",
        },
      ],
      frReview: 'needs-human-review',
    },
  ],
  honesty: {
    heading: { en: 'What we promise', fr: 'Ce que nous promettons', de: "Was wir versprechen", es: "Lo que prometemos" },
    points: [
      {
        en: "We'll tell you how far apart things really are.",
        fr: 'Nous vous dirons quelles sont les vraies distances.', de: "Wir sagen Ihnen, wie weit die Dinge wirklich auseinanderliegen.", es: "Le diremos a qué distancia está todo de verdad.",
      },
      {
        en: "We'll tell you when not to go, and what a trip is not.",
        fr: "Nous vous dirons quand ne pas partir, et ce qu'un voyage n'est pas.", de: "Wir sagen Ihnen, wann Sie nicht reisen sollten und was eine Reise nicht ist.", es: "Le diremos cuándo no ir, y lo que un viaje no es.",
      },
      {
        en: "We don't guarantee wildlife or weather. Nobody honest can.",
        fr: "Nous ne garantissons ni les animaux ni la météo. Personne d'honnête ne le peut.", de: "Wir garantieren weder Tiere noch Wetter. Niemand, der ehrlich ist, kann das.", es: "No garantizamos ni la fauna ni el tiempo. Nadie honesto puede hacerlo.",
      },
      {
        en: 'You see the full price before you commit.',
        fr: 'Vous voyez le prix complet avant de vous engager.', de: "Sie sehen den vollständigen Preis, bevor Sie sich festlegen.", es: "Verá el precio completo antes de comprometerse.",
      },
      {
        en: "If something isn't right for you, we'll say so, even if it means you book less.",
        fr: "Si quelque chose ne vous convient pas, nous vous le dirons, même si vous réservez moins.", de: "Wenn etwas nicht zu Ihnen passt, sagen wir es, auch wenn Sie dann weniger buchen.", es: "Si algo no es para usted, se lo diremos, aunque eso signifique que reserve menos.",
      },
    ],
    frReview: 'needs-human-review',
  },
  frReview: 'needs-human-review',
};

// ── How we work ──────────────────────────────────────────────────────────────

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    id: 'tell-us',
    step: 1,
    title: { en: 'Tell us the rough idea', fr: 'Racontez-nous votre idée', de: "Erzählen Sie uns die grobe Idee", es: "Cuéntenos la idea general" },
    body: {
      en: "When, who's coming, and what you'd like to see. Vague is fine. 'Bears, and somewhere quiet' is a perfectly good start.",
      fr: "Quand, avec qui, et ce que vous aimeriez voir. Rester vague, c'est très bien. « Des ours, et un endroit calme » est un excellent début.", de: "Wann, wer mitkommt und was Sie sehen möchten. Vage ist in Ordnung. „Bären und irgendwo, wo es ruhig ist“ ist ein völlig guter Anfang.", es: "Cuándo, quién viaja y qué le gustaría ver. Vago está bien. «Osos, y algún sitio tranquilo» es un comienzo perfecto.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'talk',
    step: 2,
    title: { en: 'Talk to a specialist', fr: 'Parlez à un spécialiste', de: "Sprechen Sie mit einem Spezialisten", es: "Hable con un especialista" },
    body: {
      en: "The person who knows that part of Canada calls you. They'll ask questions, and they'll be honest about distances, seasons and cost.",
      fr: "La personne qui connaît cette partie du Canada vous appelle. Elle vous posera des questions et sera franche sur les distances, les saisons et le prix.", de: "Die Person, die diesen Teil Kanadas kennt, ruft Sie an. Sie stellt Fragen und spricht ehrlich über Entfernungen, Jahreszeiten und Kosten.", es: "Le llama la persona que conoce esa parte de Canadá. Le hará preguntas y será honesta sobre distancias, temporadas y costes.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'draft',
    step: 3,
    title: { en: 'Shape the journey', fr: 'Affinez le voyage', de: "Die Reise gestalten", es: "Dar forma al viaje" },
    body: {
      en: "You get a draft, day by day, with a clear price. Change as much as you like. Most trips take two or three rounds.",
      fr: "Vous recevez une proposition jour par jour, avec un prix clair. Modifiez tout ce que vous voulez. La plupart des voyages se règlent en deux ou trois échanges.", de: "Sie erhalten einen Entwurf, Tag für Tag, mit klarem Preis. Ändern Sie so viel Sie möchten. Die meisten Reisen brauchen zwei oder drei Runden.", es: "Recibe un borrador, día a día, con un precio claro. Cambie todo lo que quiera. La mayoría de los viajes necesitan dos o tres vueltas.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'book',
    step: 4,
    title: { en: 'We book everything', fr: 'Nous réservons tout', de: "Wir buchen alles", es: "Lo reservamos todo" },
    body: {
      en: "Lodges, guides, floatplanes, trains and cars, in the right order, so the small places don't sell out while we wait on the big ones.",
      fr: "Lodges, guides, hydravions, trains et voitures, dans le bon ordre, pour que les petites adresses ne soient pas complètes pendant que nous attendons les grandes.", de: "Lodges, Guides, Wasserflugzeuge, Züge und Autos, in der richtigen Reihenfolge, damit die kleinen Orte nicht ausverkauft sind, während wir auf die großen warten.", es: "Lodges, guías, hidroaviones, trenes y coches, en el orden correcto, para que los lugares pequeños no se agoten mientras esperamos a los grandes.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'travel',
    step: 5,
    title: { en: 'Travel, with us on call', fr: 'Partez, nous restons joignables', de: "Reisen, mit uns in Rufbereitschaft", es: "Viaje, con nosotros siempre localizables" },
    body: {
      en: "If a flight is cancelled or the weather turns, you call us, not a call centre. We'll sort it out.",
      fr: "Si un vol est annulé ou si la météo tourne, c'est nous que vous appelez, pas un centre d'appels. Nous nous en occupons.", de: "Fällt ein Flug aus oder schlägt das Wetter um, rufen Sie uns an, kein Callcenter. Wir regeln das.", es: "Si se cancela un vuelo o cambia el tiempo, nos llama a nosotros, no a un centro de llamadas. Lo resolvemos.",
    },
    frReview: 'needs-human-review',
  },
];
