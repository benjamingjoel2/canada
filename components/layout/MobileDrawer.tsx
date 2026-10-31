'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { Link } from '@/i18n/navigation';
import type { NavModel } from '@/lib/nav';
import { site } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { Italic } from '@/components/ui/Italic';
import { useEnquire } from '@/components/features/enquire/EnquireContext';
import { CurrencySwitch, LocaleSwitch, SeasonSwitch } from './Preferences';

type Level =
  | { kind: 'root' }
  | { kind: 'journeys' }
  | { kind: 'destinations' }
  | { kind: 'province'; index: number }
  | { kind: 'experiences' }
  | { kind: 'group'; index: number }
  | { kind: 'about' };

const row = 'flex w-full items-center justify-between border-b border-forest/10 py-4 text-left font-serif text-2xl text-forest';

function Drill({ label, to, push }: { label: string; to: Level; push: (l: Level) => void }) {
  return (
    <li>
      <button type="button" className={row} onClick={() => push(to)}>
        <span>{label}</span>
        <span aria-hidden className="text-base text-lake-700">→</span>
      </button>
    </li>
  );
}

function Item({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
  return (
    <li>
      <Link href={href} className={row} onClick={onClose}>
        <span>
          <Italic text={label} />
        </span>
      </Link>
    </li>
  );
}

/** Mobile menu: drills down level by level with a Back button, like the reference. */
export function MobileDrawer({ open, onClose, nav }: { open: boolean; onClose: () => void; nav: NavModel }) {
  const t = useTranslations('nav');
  const { openEnquire } = useEnquire();
  const [stack, setStack] = useState<Level[]>([{ kind: 'root' }]);
  const ref = useRef<HTMLDialogElement>(null);
  const level = stack[stack.length - 1];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) {
      setStack([{ kind: 'root' }]);
      el.showModal();
    } else if (!open && el.open) el.close();
  }, [open]);

  const push = (l: Level) => setStack((s) => [...s, l]);
  const pop = () => setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));

  let title = '';
  let list: React.ReactNode = null;
  switch (level.kind) {
    case 'root':
      list = (
        <>
          <Drill push={push} label={t('journeys')} to={{ kind: 'journeys' }} />
          <Drill push={push} label={t('destinations')} to={{ kind: 'destinations' }} />
          <Drill push={push} label={t('experiences')} to={{ kind: 'experiences' }} />
          <Item onClose={onClose} href="/stays" label={t('stays')} />
          <Drill push={push} label={t('about')} to={{ kind: 'about' }} />
          <Item onClose={onClose} href="/stories" label={t('stories')} />
        </>
      );
      break;
    case 'journeys':
      title = t('journeys');
      list = (
        <>
          <Item onClose={onClose} href="/journeys" label={t('browseAllJourneys')} />
          <Item onClose={onClose} href="/journeys?season=summer" label={`☀ ${t('summerJourneys')}`} />
          <Item onClose={onClose} href="/journeys?season=winter" label={`❄ ${t('winterJourneys')}`} />
          <Item onClose={onClose} href="/wild-calendar" label={t('wildCalendar')} />
        </>
      );
      break;
    case 'destinations':
      title = t('destinations');
      list = (
        <>
          {nav.provinces.map((p, i) => (
            <Drill push={push} key={p.slug} label={p.name} to={{ kind: 'province', index: i }} />
          ))}
          <Item onClose={onClose} href="/wild-calendar" label={t('wildCalendar')} />
          <Item onClose={onClose} href="/indigenous-canada" label={t('indigenousCanada')} />
          <Item onClose={onClose} href="/destinations" label={t('allDestinations')} />
        </>
      );
      break;
    case 'province': {
      const p = nav.provinces[level.index];
      title = p.name;
      list = (
        <>
          <Item onClose={onClose} href={`/destinations/${p.slug}`} label={t('explore', { name: p.name })} />
          {p.regions.map((r) => (
            <Item onClose={onClose} key={r.slug} href={`/destinations/${p.slug}/${r.slug}`} label={r.name} />
          ))}
        </>
      );
      break;
    }
    case 'experiences':
      title = t('experiences');
      list = (
        <>
          {nav.experienceGroups.map((g, i) => (
            <Drill push={push} key={g.slug} label={g.title.replace(/\*/g, '')} to={{ kind: 'group', index: i }} />
          ))}
          <Item onClose={onClose} href="/experiences" label={t('allExperiences')} />
        </>
      );
      break;
    case 'group': {
      const g = nav.experienceGroups[level.index];
      title = g.title.replace(/\*/g, '');
      list = (
        <>
          <Item onClose={onClose} href={`/experiences/${g.slug}`} label={g.title} />
          {g.items.map((e) => (
            <Item onClose={onClose} key={e.slug} href={`/experiences/${g.slug}/${e.slug}`} label={e.title} />
          ))}
        </>
      );
      break;
    }
    case 'about':
      title = t('about');
      list = (
        <>
          <Item onClose={onClose} href="/about" label={t('howWeWork')} />
          <Item onClose={onClose} href="/indigenous-canada" label={t('indigenousCanada')} />
          <Item onClose={onClose} href="/faq" label={t('faq')} />
          <Item onClose={onClose} href="/contact" label={t('contact')} />
        </>
      );
      break;
  }

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      aria-label={t('menu')}
      className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-birch-50 p-0 text-ink lg:hidden"
    >
      <div className="flex h-full flex-col">
        <div className="container-x flex h-16 shrink-0 items-center justify-between border-b border-forest/10">
          {stack.length > 1 ? (
            <button type="button" onClick={pop} className="flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-forest uppercase">
              <span aria-hidden>←</span> {t('back')}
            </button>
          ) : (
            <Logo />
          )}
          <button type="button" onClick={onClose} aria-label={t('close')} className="-mr-2 grid h-11 w-11 place-items-center text-forest">
            <svg aria-hidden viewBox="0 0 14 14" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l12 12M13 1L1 13" /></svg>
          </button>
        </div>
        <div className="container-x flex-1 overflow-y-auto py-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stack.length + level.kind}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.2 }}
            >
              {title && <p className="eyebrow pt-2 pb-2 text-lake-700">{title}</p>}
              <ul>{list}</ul>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={clsx('shrink-0 space-y-4 border-t border-forest/10 bg-birch px-4 py-5')}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <SeasonSwitch />
            <LocaleSwitch />
            <CurrencySwitch />
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              openEnquire();
            }}
            className="w-full rounded-full bg-forest py-3.5 text-sm font-medium tracking-wide text-birch"
          >
            {t('enquire')}
          </button>
          <a href={`mailto:${site.contact.email}`} className="block text-center text-sm text-granite">
            {site.contact.email}
          </a>
        </div>
      </div>
    </dialog>
  );
}
