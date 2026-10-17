import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { testimonials } from '@/data/testimonials';
import { tr } from '@/lib/l10n';
import { Carousel } from '@/components/ui/Carousel';
import { Flag } from '@/components/ui/Flag';
import { SectionHeading } from '@/components/ui/SectionHeading';

/** Reference: testimonial carousel with country flags. All ours are placeholders, and say so. */
export async function TestimonialsCarousel({ locale, title }: { locale: Locale; title?: string }) {
  const t = await getTranslations({ locale, namespace: 'home' });
  const tc = await getTranslations({ locale, namespace: 'common' });
  const regionNames = new Intl.DisplayNames([locale], { type: 'region' });
  return (
    <section className="bg-birch section-y">
      <div className="container-x">
        <SectionHeading title={title ?? t('testimonialsTitle')} />
        <Carousel label={(title ?? t('testimonialsTitle')).replace(/\*/g, '')} className="mt-4" itemClassName="w-[88%] sm:w-[60%] lg:w-[38%]">
          {testimonials.map((q) => (
            <figure key={q.id} className="flex h-full flex-col justify-between bg-birch-50 p-8 md:p-10">
              <blockquote className="font-serif text-xl leading-relaxed text-forest md:text-2xl">“{tr(q.quote, locale)}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-sm text-granite">
                <Flag code={q.country} label={regionNames.of(q.country) ?? q.country} />
                <span>{tr(q.who, locale)}</span>
                {q.placeholder && (
                  <span className="ml-auto rounded-full bg-birch-200 px-2 py-0.5 text-[10px] tracking-wider uppercase">{tc('placeholder')}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
