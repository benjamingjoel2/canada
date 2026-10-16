import { ratesFromCAD, type Currency } from '@/config/currency';

export function convertFromCAD(amountCAD: number, currency: Currency) {
  const raw = amountCAD * ratesFromCAD[currency];
  return currency === 'CAD' ? raw : Math.round(raw / 50) * 50;
}

export function formatMoney(amountCAD: number, currency: Currency, locale: string) {
  const value = convertFromCAD(amountCAD, currency);
  const fmt = new Intl.NumberFormat(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol',
  }).format(value);
  // Make CAD vs USD unambiguous.
  if (currency === 'CAD') return locale === 'fr' ? `${fmt} CA` : `CA${fmt}`;
  if (currency === 'USD') return locale === 'fr' ? `${fmt} US` : `US${fmt}`;
  if (currency === 'AUD') return locale === 'fr' ? `${fmt} AU` : `A${fmt}`;
  return fmt;
}
