'use client';

import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useMemo, useRef, useState } from 'react';
import { pricing } from '@/config/pricing';
import { countryOptions } from '@/lib/countries';
import { formatMoney } from '@/lib/currency';
import { useCurrency, useSeason } from '@/lib/preferences';
import { enquirySchema, interests } from '@/lib/schemas';
import { Field, inputClass } from '@/components/ui/Field';
import { Italic } from '@/components/ui/Italic';
import { Button } from '@/components/ui/Button';
import type { EnquirePrefill } from './EnquireContext';

type Errors = Partial<Record<string, string>>;

/**
 * Two-step enquiry, as in the reference: first a plain statement of what journeys cost
 * and a required "this fits" confirmation, then the details.
 */
export function EnquireForm({
  idPrefix,
  prefill = {},
  onDone,
  titleId,
}: {
  idPrefix: string;
  prefill?: EnquirePrefill;
  onDone?: () => void;
  titleId?: string;
}) {
  const t = useTranslations('enquire');
  const tm = useTranslations('match');
  const locale = useLocale() as 'en' | 'fr';
  const currency = useCurrency();
  const season = useSeason();
  const [step, setStep] = useState<1 | 2 | 'done'>(1);
  const [fit, setFit] = useState(false);
  const [fitError, setFitError] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  const countries = useMemo(() => countryOptions(locale), [locale]);
  const id = (name: string) => `${idPrefix}-${name}`;

  useEffect(() => {
    // Move focus to the new step for keyboard and screen-reader users.
    if (step !== 1) stepRef.current?.focus();
  }, [step]);

  const price = formatMoney(pricing.fromPerPersonPerDayCAD, currency, locale);
  const prefillNotes = [
    prefill.topic ? t('regarding', { topic: prefill.topic }) : '',
    prefill.notes ?? '',
  ]
    .filter(Boolean)
    .join('\n');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      budgetFit: fit,
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      country: fd.get('country'),
      dates: fd.get('dates'),
      travellers: fd.get('travellers'),
      interests: fd.getAll('interests'),
      contactPref: fd.get('contactPref'),
      notes: fd.get('notes'),
      topic: prefill.topic,
      journeyId: prefill.journeyId,
      specialistId: prefill.specialistId,
      season: prefill.season ?? season ?? undefined,
      locale,
      company: fd.get('company') ?? '',
    };
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        errs[key] = key === 'email' && payload.email ? t('invalidEmail') : t('required');
      }
      setErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(id(first))?.focus();
      return;
    }
    setErrors({});
    setSending(true);
    setFailed(false);
    try {
      const res = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStep('done');
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (step === 'done') {
    return (
      <div ref={stepRef} tabIndex={-1} role="status" className="py-10 text-center outline-none">
        <h2 id={titleId} className="text-4xl text-forest">
          <Italic text={t('successTitle')} />
        </h2>
        <p className="mx-auto mt-4 max-w-md text-granite">{t('successBody')}</p>
        {onDone && (
          <Button className="mt-8" onClick={onDone}>
            {t('close')}
          </Button>
        )}
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? { 'aria-invalid': true as const, 'aria-describedby': `${id(name)}-error` } : {};

  return (
    <div>
      <p className="eyebrow text-lake-700">{t('subtitle')}</p>
      <h2 id={titleId} className="mt-3 text-3xl text-forest md:text-4xl">
        <Italic text={t('title')} />
      </h2>

      {step === 1 && (
        <div className="mt-8">
          <ul className="space-y-4">
            {[t('point1', { price, excludes: pricing.excludes[locale] }), t('point2'), t('point3')].map((p, i) => (
              <li key={i} className="flex gap-4 border-b border-forest/10 pb-4 text-ink">
                <span aria-hidden className="font-serif text-lake-700 italic">0{i + 1}</span>
                <span className={clsx(i === 0 && 'text-lg font-medium text-forest')}>{p}</span>
              </li>
            ))}
          </ul>
          <label htmlFor={id('fit')} className="mt-8 flex cursor-pointer items-start gap-3 rounded-sm border border-forest/20 bg-white p-4">
            <input
              id={id('fit')}
              type="checkbox"
              checked={fit}
              required
              aria-describedby={fitError ? id('fit-error') : undefined}
              onChange={(e) => {
                setFit(e.target.checked);
                setFitError(false);
              }}
              className="mt-0.5 h-5 w-5 shrink-0 accent-forest"
            />
            <span className="text-forest">
              {t('fitLabel')} <span className="text-maple" aria-hidden>*</span>
            </span>
          </label>
          {fitError && (
            <p id={id('fit-error')} role="alert" className="mt-2 text-sm text-maple">
              {t('fitRequired')}
            </p>
          )}
          <Button
            type="button"
            className="mt-8"
            onClick={() => (fit ? setStep(2) : setFitError(true))}
          >
            {t('continue')}
          </Button>
        </div>
      )}

      {step === 2 && (
        <div ref={stepRef} tabIndex={-1} className="outline-none">
          <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5 md:grid-cols-2">
            <Field id={id('name')} label={t('name')} required requiredLabel={t('required')} error={errors.name}>
              <input id={id('name')} name="name" autoComplete="name" className={inputClass} {...err('name')} />
            </Field>
            <Field id={id('email')} label={t('email')} required requiredLabel={t('required')} error={errors.email}>
              <input id={id('email')} name="email" type="email" autoComplete="email" className={inputClass} {...err('email')} />
            </Field>
            <Field id={id('phone')} label={t('phone')}>
              <input id={id('phone')} name="phone" type="tel" autoComplete="tel" className={inputClass} />
            </Field>
            <Field id={id('country')} label={t('country')} required requiredLabel={t('required')} error={errors.country}>
              <select id={id('country')} name="country" autoComplete="country" defaultValue="" className={inputClass} {...err('country')}>
                <option value="" disabled>
                  —
                </option>
                {countries.priority.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
                <option disabled>──────────</option>
                {countries.rest.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.name}
                  </option>
                ))}
              </select>
            </Field>
            <Field id={id('dates')} label={t('dates')}>
              <input id={id('dates')} name="dates" placeholder={t('datesPlaceholder')} className={inputClass} />
            </Field>
            <Field id={id('travellers')} label={t('travellers')}>
              <select id={id('travellers')} name="travellers" defaultValue="2" className={inputClass}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </Field>
            <fieldset className="md:col-span-2">
              <legend className="text-sm font-medium text-forest">{t('interests')}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <label key={i} className="cursor-pointer">
                    <input type="checkbox" name="interests" value={i} defaultChecked={prefill.interests?.includes(i)} className="peer sr-only" />
                    <span className="inline-block rounded-full border border-forest/25 px-4 py-2 text-sm text-forest transition-colors peer-checked:border-forest peer-checked:bg-forest peer-checked:text-birch peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-lake">
                      {tm(i)}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="md:col-span-2">
              <legend className="text-sm font-medium text-forest">
                {t('contactPref')} <span className="text-maple" aria-hidden>*</span>
              </legend>
              <div className="mt-2 flex flex-wrap gap-5">
                {(['email', 'whatsapp', 'phone'] as const).map((c) => (
                  <label key={c} className="flex cursor-pointer items-center gap-2 text-forest">
                    <input type="radio" name="contactPref" value={c} defaultChecked={c === 'email'} className="h-4 w-4 accent-forest" />
                    {t(`contact${c[0].toUpperCase()}${c.slice(1)}` as 'contactEmail')}
                  </label>
                ))}
              </div>
            </fieldset>
            <Field id={id('notes')} label={t('notes')} className="md:col-span-2">
              <textarea
                id={id('notes')}
                name="notes"
                rows={4}
                defaultValue={prefillNotes}
                placeholder={t('notesPlaceholder')}
                className={inputClass}
              />
            </Field>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-granite">{t('privacy')}</p>
              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  {t('back')}
                </Button>
                <Button type="submit" disabled={sending}>
                  {sending ? t('sending') : t('submit')}
                </Button>
              </div>
            </div>
            <p role="alert" className="text-sm text-maple md:col-span-2">
              {failed ? t('error') : ''}
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
