'use client';

import { useLocale } from 'next-intl';
import { formatMoney } from '@/lib/currency';
import { useCurrency } from '@/lib/preferences';

/** Shows a CAD price in the visitor's chosen currency. */
export function Price({ cad, className }: { cad: number; className?: string }) {
  const currency = useCurrency();
  const locale = useLocale();
  return <span className={className}>{formatMoney(cad, currency, locale)}</span>;
}
