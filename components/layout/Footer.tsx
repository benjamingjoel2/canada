import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/data/types';
import { site } from '@/config/site';
import { Logo } from '@/components/ui/Logo';
import { Newsletter } from '@/components/sections/Newsletter';

export async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'footer' });
  const n = await getTranslations({ locale, namespace: 'nav' });
  const year = new Date().getFullYear();

  const cols: { title: string; links: [string, string][] }[] = [
    {
      title: t('explore'),
      links: [
        ['/journeys', n('journeys')],
        ['/destinations', n('destinations')],
        ['/experiences', n('experiences')],
        ['/stays', n('stays')],
        ['/wild-calendar', n('wildCalendar')],
      ],
    },
    {
      title: t('learn'),
      links: [
        ['/about', n('howWeWork')],
        ['/indigenous-canada', n('indigenousCanada')],
        ['/stories', n('stories')],
      ],
    },
    {
      title: t('resources'),
      links: [
        ['/faq', n('faq')],
        ['/contact', n('contact')],
        ['/privacy', t('privacy')],
        ['/terms', t('terms')],
        ['/cookies', t('cookies')],
      ],
    },
  ];

  return (
    <footer className="bg-forest-900 text-birch/80">
      <Newsletter locale={locale} />
      <div className="container-x grid gap-12 border-t border-birch/10 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo light />
          <p className="mt-5 max-w-xs font-serif text-lg text-birch/90 italic">{site.tagline[locale]}</p>
        </div>
        {cols.map((c) => (
          <nav key={c.title} aria-label={c.title} className="lg:col-span-2">
            <h2 className="eyebrow font-sans text-lake-200">{c.title}</h2>
            <ul className="mt-4 space-y-1 text-sm">
              {c.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="inline-block py-1 hover:text-birch">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="lg:col-span-3">
          <h2 className="eyebrow font-sans text-lake-200">{t('contact')}</h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <a href={`mailto:${site.contact.email}`} className="inline-block py-1 hover:text-birch">{site.contact.email}</a>
            </li>
            <li>{site.contact.hours[locale]}</li>
          </ul>
          <address className="mt-5 text-sm leading-relaxed not-italic">
            {site.address.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
        </div>
      </div>
      <div className="border-t border-birch/10">
        <div className="container-x space-y-4 py-8 text-xs text-birch/60">
          <p>{t('landAck')}</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>{t('rights', { year })}</p>
            <ul className="flex flex-wrap gap-5">
              <li><Link href="/privacy" className="inline-block py-1 hover:text-birch">{t('privacy')}</Link></li>
              <li><Link href="/terms" className="inline-block py-1 hover:text-birch">{t('terms')}</Link></li>
              <li><Link href="/cookies" className="inline-block py-1 hover:text-birch">{t('cookies')}</Link></li>
              <li><Link href="/accessibility" className="inline-block py-1 hover:text-birch">{t('accessibility')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Giant full-width wordmark to close the page (decorative) */}
      <svg aria-hidden viewBox="0 0 1000 120" className="block h-auto w-full select-none" preserveAspectRatio="xMidYMax meet">
        <text x="500" y="108" textAnchor="middle" fontSize="128" letterSpacing="-5" fill="#f4efe4" fillOpacity="0.07" style={{ fontFamily: 'var(--font-fraunces), serif' }}>
          Canada Travel <tspan fontStyle="italic" fontWeight="300">Co.</tspan>
        </text>
      </svg>
    </footer>
  );
}
