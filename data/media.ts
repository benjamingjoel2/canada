import type { Img, Season } from './types';

/**
 * Hero films and homepage imagery. No footage yet: add `video` (an MP4/WebM in /public/media
 * or a CDN URL) and the poster image when it exists. Until then the poster placeholder shows.
 */
export const heroFilms: Record<Season, { video?: string; poster: Img }> = {
  summer: {
    poster: {
      subject: 'Film: canoe crossing a glacier-fed lake at first light, Rockies',
      tone: 'lake',
      alt: { en: 'A canoe crossing a turquoise mountain lake at first light', fr: 'Un canot traverse un lac de montagne turquoise à l’aube' },
    },
  },
  winter: {
    poster: {
      subject: 'Film: northern lights over a snow-covered cabin, Yukon',
      tone: 'night',
      alt: { en: 'Green northern lights over a snow-covered cabin', fr: 'Aurores boréales vertes au-dessus d’un chalet enneigé' },
    },
  },
};

export const homeImages = {
  introCollage: [
    { subject: 'Floatplane on a still inlet', tone: 'lake', alt: { en: 'A floatplane on a still inlet', fr: 'Un hydravion sur un bras de mer calme' } },
    { subject: 'Old Québec street in snow', tone: 'snow', alt: { en: 'A street in Old Québec under snow', fr: 'Une rue du Vieux-Québec sous la neige' } },
    { subject: 'Grizzly on a salmon river', tone: 'forest', alt: { en: 'A grizzly bear standing in a salmon river', fr: 'Un grizzly dans une rivière à saumons' } },
  ] satisfies Img[],
  specialist: {
    summer: { subject: 'A guide pointing out a trail above Lake O’Hara', tone: 'forest', alt: { en: 'A guide pointing out a trail above a mountain lake', fr: 'Un guide montre un sentier au-dessus d’un lac de montagne' } },
    winter: { subject: 'A guide with snowshoes at the edge of a frozen lake', tone: 'snow', alt: { en: 'A guide with snowshoes beside a frozen lake', fr: 'Un guide en raquettes au bord d’un lac gelé' } },
  } satisfies Record<Season, Img>,
};
