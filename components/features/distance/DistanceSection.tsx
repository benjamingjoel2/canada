import type { Locale } from '@/data/types';
import { provinces } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { DistanceTool } from './DistanceTool';

/** Server wrapper: passes localised province names for grouping the pickers. */
export function DistanceSection({
  locale,
  preset = ['vancouver', 'halifax'],
  title,
  intro,
  dark,
}: {
  locale: Locale;
  preset?: [string, string];
  title?: string;
  intro?: string;
  dark?: boolean;
}) {
  const provinceNames = Object.fromEntries(provinces.map((p) => [p.id, tr(p.name, locale)]));
  return <DistanceTool preset={preset} provinceNames={provinceNames} title={title} intro={intro} dark={dark} />;
}
