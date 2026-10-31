import type { ComponentType } from 'react';
import type { Img, Locale, ReviewStatus } from '@/data/types';

/** Story slugs, newest first is decided by date below. Add a slug here when adding an MDX file in both locales. */
export const storySlugs = [
  'canada-is-bigger-than-you-think',
  'summer-canada-vs-winter-canada',
  'how-to-actually-see-polar-bears',
  'the-rockies-beyond-banff',
  'ten-days-in-canada',
] as const;

type RawMeta = {
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  tags: string[];
  image: { subject: string; tone: Img['tone']; alt: string };
  frReview?: ReviewStatus;
};

export type StoryMeta = Omit<RawMeta, 'image'> & { slug: string; image: Img; frReview: ReviewStatus };

async function load(locale: Locale, slug: string) {
  const mod = (await import(`@/content/stories/${locale}/${slug}.mdx`)) as { default: ComponentType; meta: RawMeta };
  const meta: StoryMeta = {
    ...mod.meta,
    slug,
    frReview: mod.meta.frReview ?? 'approved',
    image: { subject: mod.meta.image.subject, tone: mod.meta.image.tone, alt: { en: mod.meta.image.alt, fr: mod.meta.image.alt, de: mod.meta.image.alt, es: mod.meta.image.alt } },
  };
  return { Content: mod.default, meta };
}

export async function getStory(locale: Locale, slug: string) {
  if (!(storySlugs as readonly string[]).includes(slug)) return null;
  return load(locale, slug);
}

export async function getStories(locale: Locale): Promise<StoryMeta[]> {
  const all = await Promise.all(storySlugs.map((s) => load(locale, s)));
  return all.map((s) => s.meta).sort((a, b) => b.date.localeCompare(a.date));
}
