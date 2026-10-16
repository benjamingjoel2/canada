import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { heroFilms } from '@/data/media';
import { Picture } from '@/components/ui/Picture';
import { SeasonVideo } from './SeasonVideo';

/** Reference: the large video band. Ours swaps film with the season switch. */
export async function HeroFilm({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section aria-label={t('heroFilm')} className="relative h-[70vh] min-h-[420px] overflow-hidden bg-forest-900 md:h-[88vh]">
      {(['summer', 'winter'] as const).map((s) => (
        <div key={s} className={`${s}-only absolute inset-0`}>
          <Picture img={heroFilms[s].poster} locale={locale} className="h-full w-full" showCaption={false} />
          {heroFilms[s].video && <SeasonVideo season={s} src={heroFilms[s].video!} />}
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/70 via-transparent to-transparent" />
      <div className="container-x absolute inset-x-0 bottom-0 pb-10 md:pb-16">
        <p className="max-w-2xl font-serif text-3xl text-birch md:text-5xl">
          <span className="summer-only">{t('heroSummer')}</span>
          <span className="winter-only">{t('heroWinter')}</span>
        </p>
      </div>
    </section>
  );
}
