/**
 * Specialists.
 * PLACEHOLDER PEOPLE — invented names, bios and quotes. Replace with the real
 * team (with their consent and real photos) before launch.
 */
import type { Specialist } from './types';

export const specialists: Specialist[] = [
  {
    id: 'spec-west',
    name: 'Maya Thorsen',
    role: {
      en: 'West Coast & Rockies specialist',
      fr: 'Spécialiste Côte Ouest et Rocheuses',
    },
    focus: {
      en: 'British Columbia and Alberta: bears, rainforest, islands and the mountain parks.',
      fr: 'Colombie-Britannique et Alberta : ours, forêt pluviale, îles et parcs des Rocheuses.',
    },
    areas: ['west'],
    interests: {
      wildlife: 3,
      landscapes: 3,
      'food-cities': 1,
      comfort: 2,
      adventure: 2,
    },
    seasons: ['summer', 'winter'],
    quote: {
      en: "I'll tell you when not to go. That's most of the job.",
      fr: "Je vous dirai quand ne pas partir. C'est l'essentiel du métier.",
    },
    bio: {
      en: "Maya grew up in Squamish and spent six summers guiding kayak trips off northern Vancouver Island. She knows which lodges are worth the floatplane and which roads are longer than they look on a map. She will gently talk you out of doing Banff, Jasper and Tofino in five days.",
      fr: "Maya a grandi à Squamish et a passé six étés à guider des sorties en kayak au nord de l'île de Vancouver. Elle sait quels lodges valent l'hydravion et quelles routes sont plus longues qu'elles n'en ont l'air sur la carte. Elle vous dissuadera, gentiment, de faire Banff, Jasper et Tofino en cinq jours.",
    },
    photo: {
      alt: {
        en: 'Placeholder portrait of Maya, West Coast & Rockies specialist',
        fr: 'Portrait provisoire de Maya, spécialiste Côte Ouest et Rocheuses',
      },
      subject: 'Specialist on a rocky beach, Vancouver Island',
      tone: 'forest',
    },
    languages: ['English', 'French'],
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'spec-north',
    name: 'Daniel Okafor',
    role: {
      en: 'North specialist',
      fr: 'Spécialiste du Grand Nord',
    },
    focus: {
      en: 'Yukon, the Northwest Territories, Churchill and the Arctic: aurora, polar bears, long light and long distances.',
      fr: "Yukon, Territoires du Nord-Ouest, Churchill et l'Arctique : aurores, ours polaires, longues journées et longues distances.",
    },
    areas: ['north'],
    interests: {
      wildlife: 3,
      landscapes: 3,
      'food-cities': 0,
      comfort: 1,
      adventure: 3,
    },
    seasons: ['winter', 'summer'],
    quote: {
      en: "Bring the warm boots. No, warmer than that.",
      fr: "Prenez les bottes chaudes. Non, plus chaudes que ça.",
    },
    bio: {
      en: "Daniel moved to Whitehorse for one winter twelve years ago and is still there. He has stood outside at minus 38 waiting for the aurora more times than he can count, and he plans northern trips with spare days built in for weather. He is honest about what the North costs and why.",
      fr: "Daniel s'est installé à Whitehorse pour un hiver il y a douze ans, et il y est toujours. Il a attendu les aurores dehors par moins 38 plus souvent qu'il ne saurait le dire, et il prévoit toujours des jours de marge pour la météo. Il est franc sur ce que coûte le Nord, et pourquoi.",
    },
    photo: {
      alt: {
        en: 'Placeholder portrait of Daniel, North specialist',
        fr: 'Portrait provisoire de Daniel, spécialiste du Grand Nord',
      },
      subject: 'Specialist in a parka under a night sky, Yukon',
      tone: 'night',
    },
    languages: ['English'],
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'spec-east',
    name: 'Élise Tremblay-Nguyen',
    role: {
      en: 'Québec, Ontario & Atlantic specialist',
      fr: 'Spécialiste Québec, Ontario et Atlantique',
    },
    focus: {
      en: 'Old cities, small inns, autumn colour, whales in the St. Lawrence and the long coast of Atlantic Canada.',
      fr: "Villes anciennes, petites auberges, couleurs d'automne, baleines du Saint-Laurent et la longue côte du Canada atlantique.",
    },
    areas: ['east'],
    interests: {
      wildlife: 2,
      landscapes: 2,
      'food-cities': 3,
      comfort: 3,
      adventure: 1,
    },
    seasons: ['summer', 'winter'],
    quote: {
      en: "Québec rewards slow travel. So does lunch.",
      fr: "Le Québec récompense ceux qui prennent leur temps. Le déjeuner aussi.",
    },
    bio: {
      en: "Élise is from Québec City and has lived in Montréal, Halifax and, briefly, Lyon. She plans eastern trips around good meals, short drives and the right week for the maples. She has opinions about poutine and will share them if asked.",
      fr: "Élise est originaire de Québec et a vécu à Montréal, à Halifax et, brièvement, à Lyon. Elle construit ses voyages dans l'Est autour de bonnes tables, de trajets courts et de la bonne semaine pour les érables. Elle a des avis sur la poutine et les partage volontiers si on le lui demande.",
    },
    photo: {
      alt: {
        en: 'Placeholder portrait of Élise, Québec, Ontario & Atlantic specialist',
        fr: 'Portrait provisoire d’Élise, spécialiste Québec, Ontario et Atlantique',
      },
      subject: 'Specialist on a cobbled street in Old Québec, autumn',
      tone: 'autumn',
    },
    languages: ['French', 'English'],
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 'spec-rail-luxury',
    name: 'Arjun Mehta',
    role: {
      en: 'Rail & quietly luxurious journeys',
      fr: 'Voyages en train et luxe discret',
    },
    focus: {
      en: 'Long-distance rail, remote lodges, floatplanes and private guides, for people who like comfort without fuss.',
      fr: 'Grands trajets en train, lodges isolés, hydravions et guides privés, pour ceux qui aiment le confort sans ostentation.',
    },
    areas: ['all'],
    interests: {
      wildlife: 1,
      landscapes: 3,
      'food-cities': 2,
      comfort: 3,
      adventure: 1,
    },
    seasons: ['summer', 'winter'],
    quote: {
      en: "The train from Toronto to Vancouver takes four nights. That's the point.",
      fr: "Le train de Toronto à Vancouver met quatre nuits. C'est tout l'intérêt.",
    },
    bio: {
      en: "Arjun spent ten years in hotel operations before he started planning journeys. He has ridden every major long-distance rail route in Canada and knows which cabin to book and which to avoid. Luxury, to him, means nobody has to rush and nothing goes wrong.",
      fr: "Arjun a passé dix ans dans l'hôtellerie avant de concevoir des voyages. Il a parcouru toutes les grandes lignes ferroviaires du Canada et sait quelle cabine réserver et laquelle éviter. Pour lui, le luxe, c'est que personne n'ait à se presser et que rien ne coince.",
    },
    photo: {
      alt: {
        en: 'Placeholder portrait of Arjun, rail and luxury specialist',
        fr: 'Portrait provisoire d’Arjun, spécialiste train et luxe discret',
      },
      subject: 'Specialist at a train window, mountains outside',
      tone: 'granite',
    },
    languages: ['English', 'Hindi', 'French'],
    placeholder: true,
    frReview: 'needs-human-review',
  },
];
