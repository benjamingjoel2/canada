import type { Locale, Place } from '@/data/types';
import { tr } from '@/lib/l10n';

/**
 * A simple schematic of the route: places plotted by longitude/latitude, joined in order.
 * Not a real map — a sense of shape and distance.
 */
export function RouteMap({ places, locale, label }: { places: Place[]; locale: Locale; label: string }) {
  if (places.length < 2) return null;
  const W = 800;
  const H = 360;
  const pad = 50;
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
  const pt = (p: Place) => [W / 2 + (p.lng - cx) * k * scale, H / 2 - (p.lat - cy) * scale] as const;
  const pts = places.map(pt);
  const d = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  return (
    <figure className="bg-birch p-4 md:p-6">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="h-auto w-full">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#1f3a2e" strokeOpacity="0.06" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#grid)" />
        <path d={d} fill="none" stroke="#3fa7a3" strokeWidth="2" strokeDasharray="6 6" />
        {pts.map(([x, y], i) => {
          // Put a label below its point when the previous point is close by.
          const crowded = i > 0 && Math.hypot(x - pts[i - 1][0], y - pts[i - 1][1]) < 60;
          return (
          <g key={places[i].id}>
            <circle cx={x} cy={y} r={i === 0 || i === pts.length - 1 ? 7 : 5} fill={i === 0 ? '#b8322a' : '#1f3a2e'} stroke="#f4efe4" strokeWidth="2" />
            <text
              x={x}
              y={crowded ? y + 26 : y - 14}
              textAnchor={x > W - 120 ? 'end' : x < 120 ? 'start' : 'middle'}
              fontSize="15"
              fill="#18201c"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              {tr(places[i].name, locale)}
            </text>
          </g>
          );
        })}
      </svg>
    </figure>
  );
}
