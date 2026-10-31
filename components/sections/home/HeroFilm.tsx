import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { heroFilms } from '@/data/media';
import { journeysBySeason } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { Link } from '@/i18n/navigation';
import { Picture, SeasonalPicture, SeasonPreload } from '@/components/ui/Picture';
import { Italic } from '@/components/ui/Italic';
import { SeasonVideo } from './SeasonVideo';

/**
 * Reference: the large video band. Ours swaps film with the season switch, sets one serif
 * statement bottom-left, and runs a thin numbered strip of that season's featured journeys.
 */
export async function HeroFilm({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return (
    <section aria-label={t('heroFilm')} className="relative flex h-[78vh] min-h-[520px] flex-col justify-end overflow-hidden bg-forest-900 md:h-[92vh]">
      <SeasonPreload summer={heroFilms.summer.poster} winter={heroFilms.winter.poster} sizes="100vw" />
      {(['summer', 'winter'] as const).map((s) => (
        <div key={s} className={`${s}-only absolute inset-0`}>
          <Picture img={heroFilms[s].poster} locale={locale} className="h-full w-full" showCaption={false} seasonalHigh />
          {heroFilms[s].video && <SeasonVideo season={s} src={heroFilms[s].video!} pauseLabel={t('pause')} playLabel={t('play')} />}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/10 to-transparent" />
      <div className="container-x relative pb-8 md:pb-10">
        <p className="max-w-3xl font-serif text-[clamp(2.2rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-birch">
          <span className="summer-only">{t('heroSummer')}</span>
          <span className="winter-only">{t('heroWinter')}</span>
        </p>
        {(['summer', 'winter'] as const).map((s) => (
          <nav key={s} aria-label={t('featured')} className={`${s}-only mt-10 border-t border-birch/25 pt-5`}>
            <ol className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 md:mx-0 md:grid md:grid-cols-4 md:px-0">
              {journeysBySeason(s)
                .slice(0, 4)
                .map((j, i) => (
                  <li key={j.id} className="w-64 shrink-0 md:w-auto">
                    <Link href={`/journeys/${j.slug}`} className="group flex items-center gap-4 text-birch">
                      <span className="meta text-birch/60">0{i + 1}</span>
                      <SeasonalPicture img={j.images} locale={locale} className="h-12 w-16 shrink-0" sizes="64px" showCaption={false} />
                      <span className="min-w-0">
                        <span className="block truncate font-serif text-lg leading-tight group-hover:text-lake-200">
                          <Italic text={tr(j.title, locale)} />
                        </span>
                        <span className="meta text-birch/60">{tc('days', { count: j.days })}</span>
                      </span>
                    </Link>
                  </li>
                ))}
            </ol>
          </nav>
        ))}
      </div>
    </section>
  );
}
