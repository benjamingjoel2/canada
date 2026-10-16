/**
 * FAQ.
 * Anything with `verify` must be checked against the named source before launch.
 * Deposit and cancellation terms are PLACEHOLDER until the real booking terms exist.
 */
import type { Faq } from './types';

export const faqs: Faq[] = [
  // ── How we work ────────────────────────────────────────────────────────────
  {
    id: 'how-we-work',
    category: 'how-we-work',
    q: {
      en: 'How does this actually work?',
      fr: 'Comment ça se passe, concrètement ?',
    },
    a: {
      en: "You tell us roughly when, who's coming and what you'd like to see. One specialist, who knows that part of Canada well, calls you back and asks better questions. They send a draft journey, you change what you like, and when it's right we book everything and stay on call while you travel.",
      fr: "Vous nous dites à peu près quand, avec qui et ce que vous aimeriez voir. Un spécialiste qui connaît bien cette partie du Canada vous rappelle et pose de meilleures questions. Il vous envoie une proposition de voyage, vous modifiez ce que vous voulez, et quand tout est juste, nous réservons l'ensemble et restons joignables pendant votre séjour.",
    },
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'cost-per-day',
    category: 'how-we-work',
    q: {
      en: 'What does a journey cost?',
      fr: 'Combien coûte un voyage ?',
    },
    a: {
      en: "Our journeys generally start around CA$1,200 per person per day, not including international flights. Remote lodges, floatplanes and the Arctic cost more, because getting anything there costs more. We'll give you a clear price before you commit to anything.",
      fr: "Nos voyages commencent en général autour de 1 200 $ CA par personne et par jour, hors vols internationaux. Les lodges isolés, les hydravions et l'Arctique coûtent plus cher, parce que tout y coûte plus cher à acheminer. Vous aurez un prix clair avant de vous engager.",
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
      fr: 'Pourquoi limitez-vous le nombre de voyages ?',
    },
    a: {
      en: "Because the good lodges, guides and boats in Canada are small, and the best weeks are short. We'd rather plan fewer journeys properly than more of them badly. It also means the person who plans your trip is the one who answers the phone.",
      fr: "Parce qu'au Canada, les bons lodges, guides et bateaux sont petits, et les meilleures semaines sont courtes. Nous préférons organiser moins de voyages, mais bien. Et cela veut dire que la personne qui prépare votre voyage est aussi celle qui répond au téléphone.",
    },
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'deposits-cancellations',
    category: 'how-we-work',
    q: {
      en: 'How do deposits and cancellations work?',
      fr: 'Comment fonctionnent les acomptes et les annulations ?',
    },
    a: {
      en: "PLACEHOLDER — our booking terms are not final yet. In short: a deposit secures the journey, the balance is due before you travel, and some lodges and polar bear trips have stricter rules because they sell out a year ahead. You'll see the exact terms in writing before you pay anything.",
      fr: "PROVISOIRE — nos conditions de réservation ne sont pas encore définitives. En bref : un acompte confirme le voyage, le solde est dû avant le départ, et certains lodges et séjours ours polaires ont des règles plus strictes car ils sont complets un an à l'avance. Vous recevrez les conditions exactes par écrit avant de payer quoi que ce soit.",
    },
    verify: 'PLACEHOLDER — replace with real booking terms before launch',
    frReview: 'needs-human-review',
  },
  {
    id: 'wildlife-guarantees',
    category: 'how-we-work',
    q: {
      en: 'Do you guarantee wildlife sightings?',
      fr: 'Garantissez-vous les observations d’animaux ?',
    },
    a: {
      en: "No, and be wary of anyone who does. What we can do is put you in the right place, in the right week, with a guide who knows the animals. That makes the odds very good. It doesn't make them certain.",
      fr: "Non, et méfiez-vous de ceux qui le font. Ce que nous pouvons faire, c'est vous placer au bon endroit, la bonne semaine, avec un guide qui connaît les animaux. Les chances sont alors très bonnes. Elles ne sont pas certaines.",
    },
    frReview: 'needs-human-review',
  },

  // ── Planning ───────────────────────────────────────────────────────────────
  {
    id: 'best-season',
    category: 'planning',
    q: {
      en: 'When is the best time to go?',
      fr: 'Quelle est la meilleure saison pour partir ?',
    },
    a: {
      en: "It depends where. The Rockies and the West Coast are best from late June to September. Bears on the coast peak in September. Churchill's polar bears are October and November. The aurora in the Yukon and Yellowknife runs from late August to April. Québec and Ontario are lovely in late September for the colours, and Newfoundland's icebergs come in May and June. Two countries for the price of one: summer Canada and winter Canada.",
      fr: "Cela dépend de la région. Les Rocheuses et la côte Ouest sont au mieux de fin juin à septembre. Les ours de la côte, c'est surtout en septembre. Les ours polaires de Churchill, en octobre et novembre. Les aurores au Yukon et à Yellowknife, de fin août à avril. Le Québec et l'Ontario sont superbes fin septembre pour les couleurs, et les icebergs de Terre-Neuve arrivent en mai et juin. Deux pays pour le prix d'un : le Canada de l'été et celui de l'hiver.",
    },
    onHome: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'distances',
    category: 'planning',
    q: {
      en: 'How far apart are things, really?',
      fr: 'Quelles sont les distances, en vrai ?',
    },
    a: {
      en: "Further than you think. Vancouver to Halifax is further than London to Cairo. Toronto to Vancouver is a flight of four and a half to five hours, and Banff to Jasper is about three and a half hours by road without stops (you will stop). We usually suggest one or two regions per trip, not five.",
      fr: "Plus grandes que vous ne l'imaginez. Vancouver–Halifax, c'est plus loin que Londres–Le Caire. Toronto–Vancouver, c'est quatre heures et demie à cinq heures de vol, et Banff–Jasper environ trois heures et demie de route sans pause (vous ferez des pauses). Nous conseillons en général une ou deux régions par voyage, pas cinq.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'getting-around',
    category: 'planning',
    q: {
      en: 'How do we get around?',
      fr: 'Comment se déplace-t-on ?',
    },
    a: {
      en: "A mix, chosen for the trip. Domestic flights cover the big distances. Floatplanes reach coastal lodges that have no road. Rail is slow on purpose and very good for scenery. In the mountains and around Québec you can self-drive, or we arrange a private driver-guide so nobody has to read the map. Churchill has no road in at all: you fly or take the train.",
      fr: "Un mélange, choisi selon le voyage. Les vols intérieurs couvrent les grandes distances. Les hydravions desservent les lodges côtiers sans route. Le train est lent à dessein, et idéal pour les paysages. Dans les Rocheuses et au Québec, vous pouvez conduire vous-même, ou nous prévoyons un chauffeur-guide privé pour que personne n'ait à lire la carte. Churchill n'a aucune route d'accès : on y va en avion ou en train.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'kids',
    category: 'planning',
    q: {
      en: 'Do you plan trips with children?',
      fr: 'Organisez-vous des voyages avec des enfants ?',
    },
    a: {
      en: "Yes, often. We keep drives short, mix in days with nothing planned, and choose places with space to run around. Some lodges and boat trips have minimum ages, usually for safety, and we'll tell you which before you fall in love with them.",
      fr: "Oui, souvent. Nous gardons des trajets courts, prévoyons des journées sans programme et choisissons des lieux où l'on peut courir. Certains lodges et sorties en bateau ont un âge minimum, souvent pour des raisons de sécurité, et nous vous le dirons avant que vous ne vous y attachiez.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'accessibility',
    category: 'planning',
    q: {
      en: 'Can you plan for limited mobility or other access needs?',
      fr: 'Pouvez-vous tenir compte d’une mobilité réduite ou d’autres besoins ?',
    },
    a: {
      en: "Tell us what you need and we'll be honest about what works. Cities, rail and many hotels are good. Floatplanes, tundra vehicles and remote lodges vary a lot, and we check the details with each one directly rather than guessing.",
      fr: "Dites-nous ce dont vous avez besoin et nous serons francs sur ce qui est possible. Les villes, le train et beaucoup d'hôtels sont bien adaptés. Les hydravions, les véhicules de toundra et les lodges isolés varient beaucoup, et nous vérifions chaque détail directement auprès d'eux plutôt que de deviner.",
    },
    frReview: 'needs-human-review',
  },

  // ── Practical ──────────────────────────────────────────────────────────────
  {
    id: 'entry-requirements',
    category: 'practical',
    q: {
      en: 'Do I need a visa or an eTA?',
      fr: 'Ai-je besoin d’un visa ou d’une AVE ?',
    },
    a: {
      en: "Most visa-exempt travellers, including citizens of the UK, France, Belgium, Switzerland and Australia, need an Electronic Travel Authorization (eTA) to fly to or transit through Canada. Travellers from many other countries need a visitor visa instead. US citizens need neither, but do need valid ID such as a passport. These rules change, so please verify against Government of Canada sources (canada.ca) before you book flights.",
      fr: "La plupart des voyageurs dispensés de visa, notamment les citoyens français, belges, suisses, britanniques et australiens, ont besoin d'une autorisation de voyage électronique (AVE) pour se rendre au Canada en avion ou y transiter. Les voyageurs de nombreux autres pays ont besoin d'un visa de visiteur. Les citoyens américains n'ont besoin ni de l'un ni de l'autre, mais doivent présenter une pièce d'identité valide, comme un passeport. Ces règles évoluent : vérifiez auprès des sources officielles du gouvernement du Canada (canada.ca) avant de réserver vos vols.",
    },
    verify: 'Verify against Government of Canada sources (canada.ca) before launch',
    frReview: 'needs-human-review',
  },
  {
    id: 'travel-insurance',
    category: 'practical',
    q: {
      en: 'Do I need travel insurance?',
      fr: 'Faut-il une assurance voyage ?',
    },
    a: {
      en: "Yes. Healthcare in Canada is excellent but not free for visitors, and medical evacuation from a remote lodge is very expensive. Make sure your policy covers cancellation, medical care and any activities you plan, such as heli-skiing.",
      fr: "Oui. Les soins au Canada sont excellents, mais pas gratuits pour les visiteurs, et une évacuation médicale depuis un lodge isolé coûte très cher. Vérifiez que votre contrat couvre l'annulation, les frais médicaux et les activités prévues, comme l'héliski.",
    },
    frReview: 'needs-human-review',
  },
  {
    id: 'weather-packing',
    category: 'practical',
    q: {
      en: 'What will the weather be like, and what should I pack?',
      fr: 'Quel temps fera-t-il, et que faut-il emporter ?',
    },
    a: {
      en: "Layers, always. A Rockies day in July can start near freezing and reach 25°C by lunch. The West Coast is wet, so bring a proper rain jacket. For the aurora or Churchill, nights reach minus 20 to minus 40, and we'll send a kit list or arrange rented cold-weather gear.",
      fr: "Des couches, toujours. Une journée de juillet dans les Rocheuses peut commencer près de zéro et atteindre 25 °C à midi. La côte Ouest est humide : prévoyez une vraie veste de pluie. Pour les aurores ou Churchill, les nuits descendent de moins 20 à moins 40, et nous vous enverrons une liste d'équipement ou organiserons la location de vêtements grand froid.",
    },
    frReview: 'needs-human-review',
  },
];
