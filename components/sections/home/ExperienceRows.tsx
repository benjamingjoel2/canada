import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';
import type { Locale } from '@/data/types';
import { experienceGroups, experiencesIn } from '@/lib/content';
import { tr } from '@/lib/l10n';
import { Italic } from '@/components/ui/Italic';
import { Picture } from '@/components/ui/Picture';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Wipe } from '@/components/ui/Reveal';
import { Link } from '@/i18n/navigation';

/** Reference: three alternating image/text rows with a horizontal wipe. */
export async function ExperienceRows({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return (
    <section className="container-x section-y">
      <SectionHeading title={t('experiencesTitle')} intro={t('experiencesIntro')} align="center" />
      <div className="mt-16 space-y-20 md:space-y-28">
        {experienceGroups.map((g, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={g.id} className="grid gap-8 md:grid-cols-12 md:items-center md:gap-14">
              <Wipe from={flip ? 'right' : 'left'} className={clsx('md:col-span-7', flip && 'md:order-2')}>
                <Picture img={g.image} locale={locale} className="aspect-[16/11] w-full" sizes="(min-width:768px) 58vw, 100vw" />
              </Wipe>
              <div className="md:col-span-5">
                <p className="eyebrow text-lake-700">0{i + 1}</p>
                <h3 className="mt-3 text-4xl text-forest md:text-5xl">
                  <Italic text={tr(g.title, locale)} />
                </h3>
                <p className="mt-5 leading-relaxed text-granite">{tr(g.intro, locale)}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {experiencesIn(g.id).map((e) => (
                    <li key={e.id}>
                      <Link
                        href={`/experiences/${g.slug}/${e.slug}`}
                        className="inline-block rounded-full border border-forest/20 px-3 py-1 text-sm text-forest transition-colors hover:border-forest hover:bg-forest hover:text-birch"
                      >
                        {tr(e.title, locale).replace(/\*/g, '')}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ButtonLink arrow href={`/experiences/${g.slug}`} variant="outline" className="mt-8">
                  {tc('exploreMore')}
                </ButtonLink>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
