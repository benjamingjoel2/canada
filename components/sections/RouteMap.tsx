'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import type { Locale, Place } from '@/data/types';
import { tr } from '@/lib/l10n';
import { haversineKm } from '@/lib/geo';
import { useReducedMotionSafe } from '@/lib/useReducedMotionSafe';

/**
 * A schematic of the route: places plotted by longitude/latitude and joined in order.
 * The line draws itself as the map scrolls into view (static for reduced motion),
 * next to a small stats card. Not a real map — a sense of shape and distance.
 */
export function RouteMap({ places, locale, label }: { places: Place[]; locale: Locale; label: string }) {
  const t = useTranslations('journey');
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'center 0.45'] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (places.length < 2) return null;
  const W = 800;
  const H = 380;
  const pad = 56;
  const lngs = places.map((p) => p.lng);
  const lats = places.map((p) => p.lat);
  const [minX, maxX] = [Math.min(...lngs), Math.max(...lngs)];
  const [minY, maxY] = [Math.min(...lats), Math.max(...lats)];
  const spanX = Math.max(maxX - minX, 4);
  const spanY = Math.max(maxY - minY, 2);
  // Longitude degrees shrink with latitude; keep the shape honest.
  const k = Math.cos((((minY + maxY) / 2) * Math.PI) / 180);
  const scale = Math.min((W - pad * 2) / (spanX * k), (H - pad * 2) / spanY);
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const pts = places.map((p) => [W / 2 + (p.lng - cx) * k * scale, H / 2 - (p.lat - cy) * scale] as const);
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  // Greedy label placement: try above, below, right, left of each stop; keep the first
  // spot that clears the other labels and stops.
  type Box = { x1: number; y1: number; x2: number; y2: number };
  const placed: Box[] = pts.map(([x, y]) => ({ x1: x - 8, y1: y - 8, x2: x + 8, y2: y + 8 }));
  const hit = (b: Box) => placed.some((o) => b.x1 < o.x2 && b.x2 > o.x1 && b.y1 < o.y2 && b.y2 > o.y1);
  const labels = pts.map(([x, y], i) => {
    const text = tr(places[i].name, locale);
    const w = text.length * 8.2;
    const tries: { x: number; y: number; anchor: 'start' | 'middle' | 'end' }[] = [
      { x, y: y - 14, anchor: 'middle' },
      { x, y: y + 26, anchor: 'middle' },
      { x: x + 12, y: y + 5, anchor: 'start' },
      { x: x - 12, y: y + 5, anchor: 'end' },
      { x: x + 12, y: y - 14, anchor: 'start' },
      { x: x - 12, y: y + 26, anchor: 'end' },
    ];
    const box = (t: (typeof tries)[number]): Box => {
      const x1 = t.anchor === 'start' ? t.x : t.anchor === 'end' ? t.x - w : t.x - w / 2;
      return { x1, y1: t.y - 14, x2: x1 + w, y2: t.y + 4 };
    };
    const inside = (b: Box) => b.x1 >= 2 && b.x2 <= W - 2 && b.y1 >= 2 && b.y2 <= H - 2;
    const pick = tries.find((t) => inside(box(t)) && !hit(box(t))) ?? tries.find((t) => inside(box(t))) ?? tries[0];
    placed.push(box(pick));
    return { id: places[i].id, text, ...pick };
  });
  const km = Math.round(places.slice(1).reduce((sum, p, i) => sum + haversineKm([places[i].lat, places[i].lng], [p.lat, p.lng]), 0));
  const nf = new Intl.NumberFormat(locale === 'fr' ? 'fr-CA' : 'en-CA');

  return (
    <div ref={ref} className="grid gap-4 lg:grid-cols-12">
      <figure className="bg-birch p-4 md:p-6 lg:col-span-9">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="h-auto w-full">
          <defs>
            <pattern id="route-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="#1f3a2e" strokeOpacity="0.06" />
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#route-grid)" />
          <path d={d} fill="none" stroke="#3fa7a3" strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 6" />
          <motion.path d={d} fill="none" stroke="#1f6f6c" strokeWidth="2.5" strokeLinecap="round" style={{ pathLength: reduce ? 1 : pathLength }} />
          {pts.map(([x, y], i) => (
            <circle key={places[i].id} cx={x} cy={y} r={i === 0 || i === pts.length - 1 ? 7 : 5} fill={i === 0 ? '#b8322a' : '#1f3a2e'} stroke="#f4efe4" strokeWidth="2" />
          ))}
          {labels.map((l) => (
            <text key={l.id} x={l.x} y={l.y} textAnchor={l.anchor} fontSize="15" fill="#18201c" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              {l.text}
            </text>
          ))}
        </svg>
      </figure>
      <dl className="flex flex-col justify-between gap-6 bg-forest p-6 text-birch md:p-8 lg:col-span-3">
        <div>
          <dt className="eyebrow text-lake-200">{t('routeTotal')}</dt>
          <dd className="mt-2 font-serif text-5xl">
            {nf.format(km)} <span className="text-lg">km</span>
          </dd>
        </div>
        <div>
          <dt className="sr-only">{t('specStops')}</dt>
          <dd className="meta text-birch/70">{t('routeStops', { count: places.length })}</dd>
          <dd className="mt-3 text-sm leading-relaxed text-birch/80">{places.map((p) => tr(p.name, locale)).join(' → ')}</dd>
        </div>
      </dl>
    </div>
  );
}
