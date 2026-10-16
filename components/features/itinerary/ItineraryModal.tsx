'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Italic } from '@/components/ui/Italic';
import { Button } from '@/components/ui/Button';
import { Field, inputClass } from '@/components/ui/Field';
import { countryOptions } from '@/lib/countries';
import { itinerarySchema } from '@/lib/schemas';
import { useEnquire } from '@/components/features/enquire/EnquireContext';

/** Reference: gated itinerary download. Name, email, country → branded PDF, logged as a lead. */
export function ItineraryModal() {
  const t = useTranslations('itinerary');
  const te = useTranslations('enquire');
  const locale = useLocale() as 'en' | 'fr';
  const { itineraryJourneyId, itineraryTitle: title, closeItinerary } = useEnquire();
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [url, setUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('itinerary.pdf');
  const countries = useMemo(() => countryOptions(locale), [locale]);

  const close = () => {
    closeItinerary();
    setState('idle');
    setErrors({});
    if (url) URL.revokeObjectURL(url);
    setUrl(null);
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      journeyId: itineraryJourneyId,
      name: fd.get('name'),
      email: fd.get('email'),
      country: fd.get('country'),
      locale,
      company: fd.get('company') ?? '',
    };
    const parsed = itinerarySchema.safeParse(payload);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = String(i.path[0]) === 'email' && payload.email ? te('invalidEmail') : te('required');
      setErrors(errs);
      document.getElementById(`itin-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setErrors({});
    setState('sending');
    try {
      const res = await fetch('/api/itinerary', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const name = /filename="([^"]+)"/.exec(res.headers.get('content-disposition') ?? '')?.[1] ?? 'itinerary.pdf';
      const href = URL.createObjectURL(blob);
      setUrl(href);
      setFileName(name);
      setState('done');
      const a = document.createElement('a');
      a.href = href;
      a.download = name;
      a.click();
    } catch {
      setState('error');
    }
  }

  const err = (n: string) => (errors[n] ? { 'aria-invalid': true as const, 'aria-describedby': `itin-${n}-error` } : {});

  return (
    <Modal open={itineraryJourneyId !== null} onClose={close} labelledBy="itinerary-title" closeLabel={te('close')} className="md:max-w-xl">
      <div className="p-6 pt-16 md:p-10">
        <h2 id="itinerary-title" className="text-3xl text-forest md:text-4xl">
          <Italic text={t('title')} />
        </h2>
        <p className="mt-3 text-granite">{t('intro', { journey: title.trim() || '—' })}</p>
        {itineraryJourneyId === null ? null : state === 'done' && url ? (
          <div role="status" className="mt-8">
            <p className="text-forest">{t('success')}</p>
            <a href={url} download={fileName} className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 text-sm font-medium text-birch">
              {t('again')}
            </a>
          </div>
        ) : (
          <form noValidate onSubmit={onSubmit} className="mt-8 grid gap-5">
            <Field id="itin-name" label={t('name')} required requiredLabel={te('required')} error={errors.name}>
              <input id="itin-name" name="name" autoComplete="name" className={inputClass} {...err('name')} />
            </Field>
            <Field id="itin-email" label={t('email')} required requiredLabel={te('required')} error={errors.email}>
              <input id="itin-email" name="email" type="email" autoComplete="email" className={inputClass} {...err('email')} />
            </Field>
            <Field id="itin-country" label={t('country')} required requiredLabel={te('required')} error={errors.country}>
              <select id="itin-country" name="country" defaultValue="" autoComplete="country" className={inputClass} {...err('country')}>
                <option value="" disabled>—</option>
                {countries.priority.map((c) => (<option key={c.code} value={c.code}>{c.name}</option>))}
                <option disabled>──────────</option>
                {countries.rest.map((c) => (<option key={c.code} value={c.code}>{c.name}</option>))}
              </select>
            </Field>
            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            <Button type="submit" disabled={state === 'sending'} className="justify-self-start">
              {state === 'sending' ? t('preparing') : t('submit')}
            </Button>
            <p role="alert" className="text-sm text-maple">{state === 'error' ? t('error') : ''}</p>
            <p className="text-xs text-granite">{te('privacy')}</p>
          </form>
        )}
      </div>
    </Modal>
  );
}
