'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

export function NewsletterForm() {
  const t = useTranslations('newsletter');
  const locale = useLocale();
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'done') return <p role="status" className="text-lg text-birch">{t('success')}</p>;

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">{t('email')}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={t('email')}
            className="w-full rounded-full border border-birch/30 bg-transparent px-5 py-3 text-birch placeholder:text-birch/50 focus:border-lake"
          />
        </label>
        {/* Honeypot. TODO: add Cloudflare Turnstile before launch. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
        <button
          type="submit"
          disabled={state === 'sending'}
          className="rounded-full bg-birch px-7 py-3 text-sm font-medium text-forest transition-colors hover:bg-white disabled:opacity-60"
        >
          {t('submit')}
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-[#f2b3ad]">
        {state === 'error' ? t('error') : ''}
      </p>
    </form>
  );
}
