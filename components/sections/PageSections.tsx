import type { Locale } from '@/data/types';
import type { PageSection } from '@/data/pages';
import { tr } from '@/lib/l10n';
import { Italic } from '@/components/ui/Italic';

/** Long-form sections from /data/pages.ts: heading left, text right. */
export function PageSections({ sections, locale }: { sections: PageSection[]; locale: Locale }) {
  return (
    <div className="divide-y divide-forest/10">
      {sections.map((s) => (
        <section key={s.id} className="grid gap-6 py-12 md:py-16 lg:grid-cols-12">
          <h2 className="text-3xl text-forest md:text-4xl lg:col-span-4">
            <Italic text={tr(s.heading, locale)} />
          </h2>
          <div className="prose-ctc lg:col-span-7 lg:col-start-6">
            {s.paragraphs.map((p, i) => (
              <p key={i}>{tr(p, locale)}</p>
            ))}
            {s.points && (
              <ul>
                {s.points.map((p, i) => (
                  <li key={i}>{tr(p, locale)}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
