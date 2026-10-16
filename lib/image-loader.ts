'use client';

/** next/image loader: Unsplash photos are resized by Unsplash's own CDN; other images pass through. */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith('https://images.unsplash.com/')) {
    const url = new URL(src);
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', 'crop');
    url.searchParams.set('w', String(width));
    url.searchParams.set('q', String(quality ?? 70));
    return url.toString();
  }
  return src;
}
