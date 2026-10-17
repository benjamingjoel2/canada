import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { specialists } from '@/data/specialists';
import { tr } from '@/lib/l10n';
import { Carousel } from '@/components/ui/Carousel';
import { Picture } from '@/components/ui/Picture';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Link } from '@/i18n/navigation';

export async function TeamCarousel({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  return (
    <section className="container-x section-y">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading title={t('teamTitle')} />
        <Link href="/about/team" className="link-underline shrink-0 self-start text-sm font-medium text-forest md:self-auto">
          {t('teamCta')}
        </Link>
      </div>
      <Carousel label={t('teamTitle').replace(/\*/g, '')} className="mt-4" itemClassName="w-[72%] sm:w-[44%] lg:w-[24%]">
        {specialists.map((s) => (
          <article key={s.id}>
            <Picture img={s.photo} locale={locale} className="aspect-[4/5] w-full" sizes="(min-width:1024px) 24vw, 70vw" />
            <h3 className="mt-5 text-2xl text-forest">{s.name}</h3>
            <p className="mt-1 text-sm text-lake-700">{tr(s.role, locale)}</p>
            <p className="mt-3 text-sm leading-relaxed text-granite italic">“{tr(s.quote, locale)}”</p>
            {s.placeholder && <p className="mt-3 text-[10px] tracking-wider text-granite uppercase">{tc('placeholder')}</p>}
          </article>
        ))}
      </Carousel>
    </section>
  );
}
