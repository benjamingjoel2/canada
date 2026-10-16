/**
 * PLACEHOLDER TESTIMONIALS — replace with real, consented reviews before launch.
 * These are invented examples of tone and length only. Do not publish them as genuine.
 */
import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: {
      en: "We wanted Banff, Jasper and Tofino in a week. Maya talked us down to two of them. She was right, and we came home rested.",
      fr: "Nous voulions Banff, Jasper et Tofino en une semaine. Maya nous a convaincus de n'en garder que deux. Elle avait raison, et nous sommes rentrés reposés.",
    },
    who: { en: 'Couple from the UK', fr: 'Couple du Royaume-Uni' },
    country: 'GB',
    journeyId: 'rockies-to-the-pacific',
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 't2',
    quote: {
      en: "The aurora didn't show for two nights. On the third it did, for about forty minutes. They'd built in the extra night for exactly that reason.",
      fr: "Les aurores ne se sont pas montrées pendant deux nuits. La troisième, si, pendant une quarantaine de minutes. Ils avaient prévu la nuit supplémentaire précisément pour ça.",
    },
    who: { en: 'Friends from the US', fr: 'Amis des États-Unis' },
    country: 'US',
    journeyId: 'yukon-under-the-aurora',
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 't3',
    quote: {
      en: "Small inns, short drives, very good lunches. In Tadoussac we saw belugas from the shore before the boat even left.",
      fr: "Petites auberges, trajets courts, très bons déjeuners. À Tadoussac, nous avons vu des bélugas depuis la rive avant même que le bateau parte.",
    },
    who: { en: 'Couple from France', fr: 'Couple de France' },
    country: 'FR',
    journeyId: 'quebec-slowly',
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 't4',
    quote: {
      en: "We asked a lot of questions about the polar bear trip, including the cost. Every answer was straight. The bears were exactly where they said they'd be.",
      fr: "Nous avons posé beaucoup de questions sur le voyage des ours polaires, y compris sur le prix. Chaque réponse était franche. Les ours étaient exactement là où on nous l'avait dit.",
    },
    who: { en: 'Retired couple from Switzerland', fr: 'Couple de retraités de Suisse' },
    country: 'CH',
    journeyId: 'polar-bear-season',
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 't5',
    quote: {
      en: "Two kids, three weeks, no meltdowns longer than a car journey. Nobody had to drive more than three hours in a day, which turned out to be the secret.",
      fr: "Deux enfants, trois semaines, pas une crise plus longue qu'un trajet en voiture. Personne n'a conduit plus de trois heures par jour, et c'était ça le secret.",
    },
    who: { en: 'Family from Belgium', fr: 'Famille de Belgique' },
    country: 'BE',
    journeyId: 'family-summer-west',
    placeholder: true,
    frReview: 'needs-human-review',
  },
  {
    id: 't6',
    quote: {
      en: "From Sydney, Canada is a long way to go for a short trip. They helped us work out what was worth the flight, and what could wait for next time.",
      fr: "Depuis Sydney, le Canada, c'est loin pour un court séjour. Ils nous ont aidés à choisir ce qui valait le voyage, et ce qui pouvait attendre la prochaine fois.",
    },
    who: { en: 'Couple from Australia', fr: "Couple d'Australie" },
    country: 'AU',
    journeyId: 'coast-to-coast',
    placeholder: true,
    frReview: 'needs-human-review',
  },
];
