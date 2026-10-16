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
    fr: 'Le Canada *autochtone*',
  },
  intro: {
    en: "Every journey we plan crosses the lands of First Nations, Inuit and Métis peoples. This page explains how we try to travel well on those lands, and where we still have work to do.",
    fr: "Chaque voyage que nous organisons traverse les terres des Premières Nations, des Inuit et des Métis. Cette page explique comment nous essayons d'y voyager correctement, et ce qu'il nous reste à améliorer.",
  },
  image: {
    alt: {
      en: 'Placeholder image: a coastal forest shoreline at low tide',
      fr: 'Image provisoire : un rivage de forêt côtière à marée basse',
    },
    subject: 'Cedar forest meeting the sea at low tide',
    tone: 'forest',
  },
  sections: [
    {
      id: 'whose-land',
      heading: {
        en: "Whose land you're travelling through",
        fr: 'Sur quelles terres vous voyagez',
      },
      paragraphs: [
        {
          en: "Canada is home to more than 600 First Nations communities, as well as Inuit and Métis peoples, each with their own languages, laws and histories. The rainforest coast, the Rockies, the tundra around Churchill and the streets of Montréal are all part of someone's homeland, and many of those relationships to the land are thousands of years old.",
          fr: "Le Canada compte plus de 600 communautés des Premières Nations, ainsi que les Inuit et les Métis, chacun avec ses langues, ses lois et son histoire. La côte de la forêt pluviale, les Rocheuses, la toundra autour de Churchill et les rues de Montréal font toutes partie du territoire de quelqu'un, et beaucoup de ces liens à la terre remontent à des milliers d'années.",
        },
        {
          en: "On each itinerary we name the nations whose territory you'll be on, checked with local sources. A land acknowledgement is a starting point, not a box to tick. What matters more is what happens next: who guides you, who you buy from, and how you behave as a guest.",
          fr: "Pour chaque itinéraire, nous nommons les nations dont vous traverserez le territoire, après vérification auprès de sources locales. Une reconnaissance territoriale est un point de départ, pas une case à cocher. Ce qui compte davantage, c'est la suite : qui vous guide, à qui vous achetez, et comment vous vous comportez en invité.",
        },
      ],
      frReview: 'needs-human-review',
    },
    {
      id: 'why-it-matters',
      heading: {
        en: 'Why it matters',
        fr: 'Pourquoi c’est important',
      },
      paragraphs: [
        {
          en: "You learn more from people telling their own stories than from anyone telling them second-hand, including us. A walk with a guide whose family has fished a river for generations is a different walk.",
          fr: "On apprend davantage de personnes qui racontent leur propre histoire que de quiconque la raconte de seconde main, nous compris. Une marche avec un guide dont la famille pêche dans cette rivière depuis des générations n'est pas la même marche.",
        },
        {
          en: "It also matters where the money goes. When we book Indigenous-owned lodges, guides and businesses, more of what you spend stays in the communities whose land you're visiting.",
          fr: "Il importe aussi de savoir où va l'argent. Quand nous réservons des lodges, des guides et des entreprises appartenant à des Autochtones, une plus grande part de vos dépenses reste dans les communautés dont vous visitez les terres.",
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
        fr: 'Des entreprises autochtones, ou dirigées par des Autochtones, autant que possible',
      },
      body: {
        en: "When an Indigenous-owned or -led option exists and is good, we choose it. Where one doesn't exist yet, we say so rather than pretending.",
        fr: "Quand une option autochtone, ou dirigée par des Autochtones, existe et qu'elle est bonne, nous la choisissons. Quand il n'en existe pas encore, nous le disons au lieu de faire semblant.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'fair-pay',
      title: { en: 'Fair pay', fr: 'Une juste rémunération' },
      body: {
        en: "We pay partners their asking rate and on time. We don't squeeze guides to make a price look better.",
        fr: "Nous payons nos partenaires au tarif qu'ils demandent, et dans les délais. Nous ne rognons pas sur les guides pour afficher un meilleur prix.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'community-protocols',
      title: { en: 'Guests follow community protocols', fr: 'Les voyageurs respectent les règles des communautés' },
      body: {
        en: "Some places, ceremonies and objects are not for photographs. Some are not for visitors at all. Your guide will tell you, and we ask you to listen without arguing the point.",
        fr: "Certains lieux, cérémonies et objets ne se photographient pas. Certains ne sont pas ouverts aux visiteurs. Votre guide vous le dira, et nous vous demandons de l'écouter sans discuter.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'no-staging',
      title: { en: 'No staged experiences', fr: 'Pas de mise en scène' },
      body: {
        en: "We don't book performances put on for tourists by people who aren't from the community, or anything that treats living cultures as a costume. Modern life is part of the story too.",
        fr: "Nous ne réservons pas de spectacles montés pour les touristes par des personnes extérieures à la communauté, ni rien qui traite des cultures vivantes comme un costume. La vie d'aujourd'hui fait aussi partie de l'histoire.",
      },
      frReview: 'needs-human-review',
    },
    {
      id: 'we-dont-speak-for',
      title: { en: "We don't speak for communities", fr: 'Nous ne parlons pas au nom des communautés' },
      body: {
        en: "We're travel planners, not cultural experts. On this site we keep descriptions short and let partners describe themselves, in their own words.",
        fr: "Nous organisons des voyages, nous ne sommes pas des experts culturels. Sur ce site, nous restons brefs et laissons nos partenaires se présenter eux-mêmes, avec leurs propres mots.",
      },
      frReview: 'needs-human-review',
    },
  ],
  partners: [
    {
      id: 'partner-placeholder-haida-gwaii',
      name: {
        en: 'Placeholder: a Haida-owned guiding company, Haida Gwaii',
        fr: 'Provisoire : une entreprise de guides haïda, Haida Gwaii',
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.',
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
    {
      id: 'partner-placeholder-coast-lodge',
      name: {
        en: 'Placeholder: a First Nation-owned wilderness lodge, Great Bear Rainforest',
        fr: 'Provisoire : un lodge appartenant à une Première Nation, forêt pluviale du Grand Ours',
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.',
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
    {
      id: 'partner-placeholder-yukon',
      name: {
        en: 'Placeholder: an Indigenous-led cultural centre and guiding service, Yukon',
        fr: 'Provisoire : un centre culturel et service de guides dirigé par des Autochtones, Yukon',
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.',
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
    {
      id: 'partner-placeholder-nunavut',
      name: {
        en: 'Placeholder: an Inuit-owned outfitter, Nunavut',
        fr: 'Provisoire : un pourvoyeur inuit, Nunavut',
      },
      description: {
        en: 'PLACEHOLDER — replace with a real partner, described in their own words, with their permission.',
        fr: 'PROVISOIRE — à remplacer par un vrai partenaire, présenté avec ses propres mots et avec son accord.',
      },
      placeholder: true,
      frReview: 'needs-human-review',
    },
  ],
  furtherReading: {
    heading: { en: 'Further reading', fr: 'Pour aller plus loin' },
    items: [
      {
        en: 'The Indigenous Tourism Association of Canada lists Indigenous-owned and -operated experiences across the country.',
        fr: "L'Association touristique autochtone du Canada (Indigenous Tourism Association of Canada) répertorie des expériences détenues et gérées par des Autochtones dans tout le pays.",
      },
      {
        en: "Many nations run their own cultural centres and websites. Your specialist will point you to the ones on your route, so you can read their history as they tell it.",
        fr: "De nombreuses nations ont leurs propres centres culturels et sites web. Votre spécialiste vous indiquera ceux qui se trouvent sur votre itinéraire, pour lire leur histoire telle qu'elles la racontent.",
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
    fr: 'Une petite équipe qui *connaît* le Canada',
  },
  intro: {
    en: "We're a handful of Canada specialists who design private journeys. Canada, made for you.",
    fr: 'Nous sommes une poignée de spécialistes du Canada qui conçoivent des voyages privés. Le Canada, fait pour vous.',
  },
  image: {
    alt: {
      en: 'Placeholder image: a lake at first light with a canoe pulled up on the shore',
      fr: 'Image provisoire : un lac au petit matin, un canot tiré sur la rive',
    },
    subject: 'Canoe on a quiet lakeshore at first light',
    tone: 'lake',
  },
  sections: [
    {
      id: 'who-we-are',
      heading: { en: 'Who we are', fr: 'Qui nous sommes' },
      paragraphs: [
        {
          en: "Each of us has lived, worked or guided in the part of Canada we plan for. Between us we cover the West Coast and the Rockies, the North, Québec, Ontario and the Atlantic, and the long train rides in between.",
          fr: "Chacun d'entre nous a vécu, travaillé ou guidé dans la partie du Canada qu'il organise. À nous tous, nous couvrons la côte Ouest et les Rocheuses, le Grand Nord, le Québec, l'Ontario et l'Atlantique, et les longs trajets en train entre les deux.",
        },
        {
          en: "You deal with one specialist from first call to last day. They know the lodges, the guides and the roads, and they know which week the bears turn up.",
          fr: "Vous avez affaire à un seul spécialiste, du premier appel au dernier jour. Il connaît les lodges, les guides et les routes, et il sait quelle semaine les ours arrivent.",
        },
      ],
      frReview: 'needs-human-review',
    },
    {
      id: 'why-limited',
      heading: { en: 'Why we take a limited number of trips', fr: 'Pourquoi nous limitons le nombre de voyages' },
      paragraphs: [
        {
          en: "Canada's best places are small. A good bear lodge might have a dozen rooms. Polar bear season is about six weeks long. If we took on every enquiry, we'd end up sending people to the wrong place in the wrong week.",
          fr: "Les meilleurs endroits du Canada sont petits. Un bon lodge pour observer les ours compte parfois une douzaine de chambres. La saison des ours polaires dure environ six semaines. Si nous acceptions toutes les demandes, nous finirions par envoyer des gens au mauvais endroit, la mauvaise semaine.",
        },
        {
          en: "So we plan fewer journeys, and we plan them properly. Sometimes that means telling you to come next year instead.",
          fr: "Alors nous organisons moins de voyages, et nous les organisons bien. Parfois, cela veut dire vous conseiller de venir l'année suivante.",
        },
      ],
      frReview: 'needs-human-review',
    },
  ],
  honesty: {
    heading: { en: 'What we promise', fr: 'Ce que nous promettons' },
    points: [
      {
        en: "We'll tell you how far apart things really are.",
        fr: 'Nous vous dirons quelles sont les vraies distances.',
      },
      {
        en: "We'll tell you when not to go, and what a trip is not.",
        fr: "Nous vous dirons quand ne pas partir, et ce qu'un voyage n'est pas.",
      },
      {
        en: "We don't guarantee wildlife or weather. Nobody honest can.",
        fr: "Nous ne garantissons ni les animaux ni la météo. Personne d'honnête ne le peut.",
      },
      {
        en: 'You see the full price before you commit.',
        fr: 'Vous voyez le prix complet avant de vous engager.',
      },
      {
        en: "If something isn't right for you, we'll say so, even if it means you book less.",
        fr: "Si quelque chose ne vous convient pas, nous vous le dirons, même si vous réservez moins.",
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
    title: { en: 'Tell us the rough idea', fr: 'Racontez-nous votre idée' },
    body: {
      en: "When, who's coming, and what you'd like to see. Vague is fine. 'Bears, and somewhere quiet' is a perfectly good start.",
      fr: "Quand, avec qui, et ce que vous aimeriez voir. Rester vague, c'est très bien. « Des ours, et un endroit calme » est un excellent début.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'talk',
    step: 2,
    title: { en: 'Talk to a specialist', fr: 'Parlez à un spécialiste' },
    body: {
      en: "The person who knows that part of Canada calls you. They'll ask questions, and they'll be honest about distances, seasons and cost.",
      fr: "La personne qui connaît cette partie du Canada vous appelle. Elle vous posera des questions et sera franche sur les distances, les saisons et le prix.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'draft',
    step: 3,
    title: { en: 'Shape the journey', fr: 'Affinez le voyage' },
    body: {
      en: "You get a draft, day by day, with a clear price. Change as much as you like. Most trips take two or three rounds.",
      fr: "Vous recevez une proposition jour par jour, avec un prix clair. Modifiez tout ce que vous voulez. La plupart des voyages se règlent en deux ou trois échanges.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'book',
    step: 4,
    title: { en: 'We book everything', fr: 'Nous réservons tout' },
    body: {
      en: "Lodges, guides, floatplanes, trains and cars, in the right order, so the small places don't sell out while we wait on the big ones.",
      fr: "Lodges, guides, hydravions, trains et voitures, dans le bon ordre, pour que les petites adresses ne soient pas complètes pendant que nous attendons les grandes.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'travel',
    step: 5,
    title: { en: 'Travel, with us on call', fr: 'Partez, nous restons joignables' },
    body: {
      en: "If a flight is cancelled or the weather turns, you call us, not a call centre. We'll sort it out.",
      fr: "Si un vol est annulé ou si la météo tourne, c'est nous que vous appelez, pas un centre d'appels. Nous nous en occupons.",
    },
    frReview: 'needs-human-review',
  },
];
