import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { homeImages } from '@/data/media';
import { Italic } from '@/components/ui/Italic';
import { SeasonalPicture } from '@/components/ui/Picture';
import { ButtonLink } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

/** Reference: "dedicated designer" band — image + two value blocks. Ours leads into Specialist match. */
export async function SpecialistBand({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section className="container-x grid gap-12 section-y lg:grid-cols-12 lg:items-center lg:gap-20">
      <Reveal className="lg:col-span-5">
        <SeasonalPicture img={homeImages.specialist} locale={locale} className="aspect-[4/5] w-full" sizes="(min-width:1024px) 40vw, 100vw" />
      </Reveal>
      <div className="lg:col-span-7">
        <h2 className="text-4xl text-forest md:text-5xl">
          <Italic text={t('specialistTitle')} />
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-granite">{t('specialistIntro')}</p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {(['1', '2'] as const).map((n) => (
            <div key={n} className="border-t border-forest/15 pt-6">
              <h3 className="text-2xl text-forest">
                <Italic text={t(`value${n}Title`)} />
              </h3>
              <p className="mt-3 leading-relaxed text-granite">{t(`value${n}Body`)}</p>
            </div>
          ))}
        </div>
        <ButtonLink arrow href="/find-your-specialist" className="mt-12">
          {t('matchCta')}
        </ButtonLink>
      </div>
    </section>
  );
}
