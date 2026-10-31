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
      alt: { en: 'A canoe crossing a turquoise mountain lake at first light', fr: 'Un canot traverse un lac de montagne turquoise à l’aube', de: "Ein Kanu überquert im ersten Licht einen türkisfarbenen Bergsee", es: "Una canoa cruzando un lago de montaña turquesa con la primera luz" },
    },
  },
  winter: {
    poster: {
      subject: 'Film: northern lights over a snow-covered cabin, Yukon',
      tone: 'night',
      alt: { en: 'Green northern lights over a snow-covered cabin', fr: 'Aurores boréales vertes au-dessus d’un chalet enneigé', de: "Grüne Polarlichter über einer verschneiten Hütte", es: "Aurora boreal verde sobre una cabaña nevada" },
    },
  },
};

export const homeImages = {
  introCollage: [
    { subject: 'Floatplane on a still inlet', tone: 'lake', alt: { en: 'A floatplane on a still inlet', fr: 'Un hydravion sur un bras de mer calme', de: "Ein Wasserflugzeug auf einem stillen Meeresarm", es: "Un hidroavión en una ensenada en calma" } },
    { subject: 'Old Québec street in snow', tone: 'snow', alt: { en: 'A street in Old Québec under snow', fr: 'Une rue du Vieux-Québec sous la neige', de: "Eine Straße in Alt-Québec unter Schnee", es: "Una calle del Viejo Quebec bajo la nieve" } },
    { subject: 'Grizzly on a salmon river', tone: 'forest', alt: { en: 'A grizzly bear standing in a salmon river', fr: 'Un grizzly dans une rivière à saumons', de: "Ein Grizzly steht in einem Lachsfluss", es: "Un oso grizzly de pie en un río salmonero" } },
  ] satisfies Img[],
  specialist: {
    summer: { subject: 'A guide pointing out a trail above Lake O’Hara', tone: 'forest', alt: { en: 'A guide pointing out a trail above a mountain lake', fr: 'Un guide montre un sentier au-dessus d’un lac de montagne', de: "Ein Guide zeigt einen Weg über einem Bergsee", es: "Un guía señalando un sendero sobre un lago de montaña" } },
    winter: { subject: 'A guide with snowshoes at the edge of a frozen lake', tone: 'snow', alt: { en: 'A guide with snowshoes beside a frozen lake', fr: 'Un guide en raquettes au bord d’un lac gelé', de: "Ein Guide mit Schneeschuhen an einem gefrorenen See", es: "Un guía con raquetas de nieve junto a un lago helado" } },
  } satisfies Record<Season, Img>,
};

/** The French alt text in this file is a draft too. */
export const mediaFrReview = { id: 'media-alt-text', frReview: 'needs-human-review' as const };
