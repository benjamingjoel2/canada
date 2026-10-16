/** Prices are stored in CAD. Rates are indicative and updated by hand. Last updated: 2026-10 (PLACEHOLDER). */
export const currencies = ['CAD', 'USD', 'GBP', 'EUR', 'AUD'] as const;
export type Currency = (typeof currencies)[number];

/** 1 CAD = x */
export const ratesFromCAD: Record<Currency, number> = {
  CAD: 1,
  USD: 0.72,
  GBP: 0.54,
  EUR: 0.63,
  AUD: 1.1,
};

export const defaultCurrency: Currency = 'CAD';
