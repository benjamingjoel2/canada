import type { Img, L } from '@/data/types';
import { photoBySubject, photos, photoRules, toneFallback, type PhotoKey } from '@/data/photos';

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function unsplashUrl(id: string) {
  return `https://images.unsplash.com/photo-${id}`;
}

/**
 * The photo shown for an image slot: the slot's own `src` if it has one, otherwise a
 * stock photo matched from /data/photos.ts (with that photo's own alt text).
 */
export function resolvePhoto(img: Img): { src: string; alt?: L } | null {
  if (img.src) return { src: img.src };
  const subject = img.subject ?? '';
  const picked = photoBySubject[subject];
  if (picked) return { src: unsplashUrl(photos[picked].id), alt: photos[picked].alt };
  let candidates: PhotoKey[] | undefined = photoRules.find(([re]) => re.test(subject))?.[1];
  if (!candidates) candidates = toneFallback[img.tone ?? 'forest'];
  if (!candidates?.length) return null;
  const photo = photos[candidates[hash(subject) % candidates.length]];
  return { src: unsplashUrl(photo.id), alt: photo.alt };
}
