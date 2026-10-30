'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import type { Locale } from '@/data/types';
import type { NavModel } from '@/lib/nav';
import { site } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { Italic } from '@/components/ui/Italic';
import { Picture } from '@/components/ui/Picture';
import { buttonClass } from '@/components/ui/Button';
import { useEnquire } from '@/components/features/enquire/EnquireContext';
import { CurrencySwitch, LocaleSwitch, SeasonSwitch } from './Preferences';
import { MobileDrawer } from './MobileDrawer';

type PanelId = 'journeys' | 'destinations' | 'experiences' | 'about';

export function Header({ nav }: { nav: NavModel }) {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const { openEnquire } = useEnquire();
  const [panel, setPanel] = useState<PanelId | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const headerRef = useRef<HTMLElement>(null);
  const panelId = useId();

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setPanel(null);
    setDrawer(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPanel(null);
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setPanel(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [panel]);

  const hoverOpen = useCallback((id: PanelId) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setPanel(id), 120);
  }, []);
  const hoverClose = useCallback(() => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setPanel(null), 220);
  }, []);

  const trigger = (id: PanelId, label: string) => (
    <button
      type="button"
      aria-expanded={panel === id}
      aria-controls={`${panelId}-${id}`}
      onClick={() => setPanel(panel === id ? null : id)}
      onMouseEnter={() => hoverOpen(id)}
      onMouseLeave={hoverClose}
      className={clsx(
        'relative py-2 text-[0.78rem] font-medium tracking-[0.12em] whitespace-nowrap uppercase transition-colors',
        panel === id ? 'text-lake-700' : 'text-forest hover:text-lake-700',
      )}
    >
      {label}
      <span
        aria-hidden
        className={clsx('absolute -bottom-0.5 left-0 h-px bg-lake transition-all duration-300', panel === id ? 'w-full' : 'w-0')}
      />
    </button>
  );

  const plainLink = (href: string, label: string) => (
    <Link
      href={href}
      className="py-2 text-[0.78rem] font-medium tracking-[0.12em] whitespace-nowrap text-forest uppercase transition-colors hover:text-lake-700"
    >
      {label}
    </Link>
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="hidden bg-forest text-birch/85 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.contact.email}`} className="hover:text-birch">
              {site.contact.email}
            </a>
            <span className="text-birch/60">{site.contact.hours[locale]}</span>
          </div>
          <div className="flex items-center gap-5">
            <CurrencySwitch light />
            <LocaleSwitch light />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={clsx(
          'relative border-b bg-birch-50/95 backdrop-blur transition-shadow',
          scrolled || panel ? 'border-forest/10 shadow-[0_8px_30px_-20px_rgba(17,35,27,0.35)]' : 'border-transparent',
        )}
      >
        <nav aria-label={t('mainNav')} className="container-x grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 lg:h-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          {/* Left */}
          <div className="flex items-center gap-7">
            <button
              type="button"
              className="-ml-2 grid h-11 w-11 place-items-center text-forest lg:hidden"
              aria-label={t('menu')}
              aria-expanded={drawer}
              onClick={() => setDrawer(true)}
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7h18M3 12h18M3 17h12" />
              </svg>
            </button>
            <div className="hidden items-center gap-6 lg:flex">
              {trigger('journeys', t('journeys'))}
              {trigger('destinations', t('destinations'))}
              {trigger('experiences', t('experiences'))}
            </div>
          </div>

          {/* Logo */}
          <Link href="/" aria-label={t('home')} className="justify-self-start lg:justify-self-center">
            <Logo />
          </Link>

          {/* Right */}
          <div className="flex items-center justify-end gap-5">
            <div className="hidden items-center gap-6 2xl:flex">
              {plainLink('/stays', t('stays'))}
              {trigger('about', t('about'))}
              {plainLink('/stories', t('stories'))}
            </div>
            <div className="hidden lg:block 2xl:hidden">{trigger('about', t('about'))}</div>
            <div className="hidden md:block">
              <SeasonSwitch compact />
            </div>
            <div className="hidden sm:block">
              <button type="button" onClick={() => openEnquire()} aria-haspopup="dialog" className={buttonClass('solid', 'px-5 py-2.5 whitespace-nowrap')}>
                {t('enquire')}
              </button>
            </div>
            <button
              type="button"
              onClick={() => openEnquire()}
              aria-haspopup="dialog"
              className="py-2 text-xs font-medium tracking-[0.08em] whitespace-nowrap text-forest uppercase underline underline-offset-4 sm:hidden"
            >
              {t('enquire')}
            </button>
          </div>
        </nav>

        {/* Mega panels */}
        <AnimatePresence>
          {panel && (
            <motion.div
              key={panel}
              id={`${panelId}-${panel}`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => clearTimeout(hoverTimer.current)}
              onMouseLeave={hoverClose}
              className="absolute inset-x-0 top-full hidden border-t border-forest/10 bg-birch-50 shadow-[0_30px_60px_-30px_rgba(17,35,27,0.45)] lg:block"
            >
              <div className="container-x py-10">
                {panel === 'destinations' && <DestinationsPanel nav={nav} locale={locale} />}
                {panel === 'journeys' && <JourneysPanel nav={nav} locale={locale} />}
                {panel === 'experiences' && <ExperiencesPanel nav={nav} />}
                {panel === 'about' && <AboutPanel />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} nav={nav} />
    </header>
  );
}

function PanelLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={clsx('block py-1.5 text-forest transition-colors hover:text-lake-700', className)}>
      {children}
    </Link>
  );
}

function DestinationsPanel({ nav, locale }: { nav: NavModel; locale: Locale }) {
  const t = useTranslations('nav');
  const [active, setActive] = useState(0);
  const p = nav.provinces[active];
  if (!p) return null;
  return (
    <div className="grid grid-cols-12 gap-10">
      <ul className="col-span-4 border-r border-forest/10 pr-8">
        {nav.provinces.map((prov, i) => (
          <li key={prov.slug}>
            <Link
              href={`/destinations/${prov.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-describedby={i === active ? 'mega-dest-regions' : undefined}
              className={clsx(
                'flex items-center justify-between py-1.5 font-serif text-xl transition-colors',
                i === active ? 'text-lake-700' : 'text-forest hover:text-lake-700',
              )}
            >
              {prov.name}
              <span aria-hidden className={clsx('text-sm transition-opacity', i === active ? 'opacity-100' : 'opacity-0')}>→</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="col-span-4" id="mega-dest-regions">
        <p className="eyebrow mb-4 text-granite">{t('regionsIn', { name: p.name })}</p>
        <ul className="space-y-0.5">
          {p.regions.map((r) => (
            <li key={r.slug}>
              <PanelLink href={`/destinations/${p.slug}/${r.slug}`}>{r.name}</PanelLink>
            </li>
          ))}
        </ul>
        <Link href={`/destinations/${p.slug}`} className="link-underline mt-5 inline-block text-sm font-medium text-lake-700">
          {t('explore', { name: p.name })}
        </Link>
        <div className="mt-8 flex flex-col gap-1 border-t border-forest/10 pt-5 text-sm">
          <PanelLink href="/wild-calendar">{t('wildCalendar')}</PanelLink>
          <PanelLink href="/indigenous-canada">{t('indigenousCanada')}</PanelLink>
          <PanelLink href="/destinations">{t('allDestinations')}</PanelLink>
        </div>
      </div>
      <Link href={`/destinations/${p.slug}`} className="group col-span-4 block">
        <Picture img={p.image} locale={locale} className="aspect-[4/3] w-full" sizes="30vw" />
        <p className="mt-4 font-serif text-2xl text-forest">{p.name}</p>
        <p className="mt-1 text-sm text-granite">{p.tagline}</p>
      </Link>
    </div>
  );
}

function JourneysPanel({ nav, locale }: { nav: NavModel; locale: Locale }) {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const summer = nav.featuredJourneys.filter((j) => j.seasons.includes('summer')).slice(0, 2);
  const winter = nav.featuredJourneys.filter((j) => j.seasons.includes('winter')).slice(0, 2);
  const card = (j: NavModel['featuredJourneys'][number], cls: string) => (
    <Link key={`${cls}-${j.slug}`} href={`/journeys/${j.slug}`} className={clsx('group col-span-4 block', cls)}>
      <Picture img={j.image} locale={locale} className="aspect-[4/3] w-full" sizes="30vw" />
      <p className="eyebrow mt-4 text-granite">{tc('days', { count: j.days })}</p>
      <p className="mt-1 font-serif text-2xl text-forest group-hover:text-lake-700">
        <Italic text={j.title} />
      </p>
    </Link>
  );
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-4 space-y-1 border-r border-forest/10 pr-8">
        <PanelLink href="/journeys" className="font-serif text-xl">{t('browseAllJourneys')}</PanelLink>
        <PanelLink href="/journeys?season=summer" className="font-serif text-xl">☀ {t('summerJourneys')}</PanelLink>
        <PanelLink href="/journeys?season=winter" className="font-serif text-xl">❄ {t('winterJourneys')}</PanelLink>
        <div className="mt-6 border-t border-forest/10 pt-6">
          <PanelLink href="/wild-calendar" className="font-serif text-xl">{t('wildCalendar')}</PanelLink>
          <p className="text-sm text-granite">{t('wildCalendarBlurb')}</p>
        </div>
      </div>
      {summer.map((j) => card(j, 'summer-only'))}
      {winter.map((j) => card(j, 'winter-only'))}
    </div>
  );
}

function ExperiencesPanel({ nav }: { nav: NavModel }) {
  const t = useTranslations('nav');
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {nav.experienceGroups.map((g) => (
          <div key={g.slug}>
            <Link href={`/experiences/${g.slug}`} className="font-serif text-2xl text-forest hover:text-lake-700">
              <Italic text={g.title} />
            </Link>
            <ul className="mt-4 space-y-0.5 border-t border-forest/10 pt-4">
              {g.items.map((e) => (
                <li key={e.slug}>
                  <PanelLink href={`/experiences/${g.slug}/${e.slug}`}>{e.title.replace(/\*/g, '')}</PanelLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link href="/experiences" className="link-underline mt-8 inline-block text-sm font-medium text-lake-700">
        {t('allExperiences')}
      </Link>
    </div>
  );
}

function AboutPanel() {
  const t = useTranslations('nav');
  const links: [string, string][] = [
    ['/stays', t('stays')],
    ['/stories', t('stories')],
    ['/about', t('howWeWork')],
    ['/indigenous-canada', t('indigenousCanada')],
    ['/faq', t('faq')],
    ['/contact', t('contact')],
  ];
  return (
    <div className="grid grid-cols-12 gap-10">
      <ul className="col-span-4 border-r border-forest/10 pr-8">
        {links.map(([href, label]) => (
          <li key={href}>
            <PanelLink href={href} className="font-serif text-xl">{label}</PanelLink>
          </li>
        ))}
      </ul>
      <div className="col-span-8 flex flex-col justify-center">
        <p className="max-w-xl font-serif text-3xl leading-snug text-forest">
          <Italic text={t('aboutQuote')} />
        </p>
        <Link href="/contact" className="link-underline mt-6 self-start text-sm font-medium text-lake-700">
          {t('contact')}
        </Link>
      </div>
    </div>
  );
}
