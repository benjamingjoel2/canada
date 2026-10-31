import type { Metadata, Viewport } from 'next';
import { Fraunces, IBM_Plex_Mono, Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { site } from '@/config/site';
import { bootScript } from '@/lib/boot-script';
import { buildNav } from '@/lib/nav';
import { asLocale } from '@/lib/l10n';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/layout/Providers';
import { EnquireModal } from '@/components/features/enquire/EnquireModal';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
/** The "data voice": days, prices, coordinates, dates. */
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });

const clientNamespaces = ['nav', 'prefs', 'common', 'distance', 'calendar', 'match', 'enquire', 'itinerary', 'newsletter', 'journey', 'notFound'];

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    metadataBase: new URL(site.url),
    title: { default: t('siteTitle'), template: `%s · ${site.name}` },
    description: t('siteDescription'),
    icons: { icon: '/icon.svg' },
  };
}

export const viewport: Viewport = {
  themeColor: '#1f3a2e',
  width: 'device-width',
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!hasLocale(routing.locales, raw)) notFound();
  setRequestLocale(raw);
  const locale = asLocale(raw);
  const t = await getTranslations({ locale, namespace: 'meta' });
  // Only the namespaces client components use are sent to the browser.
  const all = await getMessages();
  const clientMessages = Object.fromEntries(clientNamespaces.map((n) => [n, all[n]]));

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={clientMessages}>
          <Providers>
            <a
              href="#main"
              className="sr-only z-50 rounded-full bg-forest px-4 py-2 text-birch focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
            >
              {t('skip')}
            </a>
            <Header nav={buildNav(locale)} />
            <main id="main">{children}</main>
            <Footer locale={locale} />
            <EnquireModal />
          </Providers>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: site.name,
              url: `${site.url}/${locale}`,
              email: site.contact.email,
              address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.locality, addressRegion: site.address.region, addressCountry: site.address.country },
              areaServed: { '@type': 'Country', name: 'Canada' },
            }),
          }}
        />
      </body>
    </html>
  );
}
