import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { homeImages } from '@/data/media';
import { Italic } from '@/components/ui/Italic';
import { Picture } from '@/components/ui/Picture';
import { Reveal } from '@/components/ui/Reveal';

/** Reference: intro with italic-emphasis h1, two paragraphs, image collage. */
export async function Intro({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  return (
    <section className="bg-birch">
      <div className="container-x grid gap-12 pt-14 pb-16 md:pt-20 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-24">
        <div className="lg:col-span-6">
          <p className="eyebrow text-lake-700">{t('eyebrow')}</p>
          <h1 className="mt-6 text-[clamp(3rem,6.2vw,6.75rem)] leading-[0.95] tracking-[-0.025em] text-forest">
            <Italic text={t('title')} />
          </h1>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-granite">
            <p>{t('intro1')}</p>
            <p>{t('intro2')}</p>
          </div>
        </div>
        <div className="grid grid-cols-6 grid-rows-6 gap-3 lg:col-span-6 lg:gap-4">
          <Reveal className="col-span-4 row-span-6">
            <Picture img={homeImages.introCollage[0]} locale={locale} className="h-full min-h-72 w-full" sizes="(min-width:1024px) 33vw, 66vw" priority />
          </Reveal>
          <Reveal className="col-span-2 row-span-3" delay={0.1}>
            <Picture img={homeImages.introCollage[1]} locale={locale} className="h-full w-full" sizes="20vw" showCaption={false} />
          </Reveal>
          <Reveal className="col-span-2 row-span-3" delay={0.2}>
            <Picture img={homeImages.introCollage[2]} locale={locale} className="h-full w-full" sizes="20vw" showCaption={false} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
