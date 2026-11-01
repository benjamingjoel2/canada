import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/data/types';
import { legal, legalUpdated, type LegalSet } from '@/data/legal';
import { Link } from '@/i18n/navigation';
import { PageHero } from './PageHero';

/** Renders "[text](/path)" inside legal text as locale-aware links. */
function linkify(text: string) {
  return text.split(/(\[[^\]]+\]\(\/[^)]*\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((\/[^)]*)\)$/);
    return m ? (
      <Link key={i} href={m[2].replace(/\/$/, '') || '/'}>
        {m[1]}
      </Link>
    ) : (
      part
    );
  });
}

export function legalDoc(locale: string, doc: keyof LegalSet) {
  return (legal[locale] ?? legal.en)[doc];
}

/** Privacy policy, booking terms or cookie policy, from data/legal.ts. */
export async function LegalPage({ locale, title, doc }: { locale: Locale; title: string; doc: keyof LegalSet }) {
  const t = await getTranslations({ locale, namespace: 'legal' });
  const d = legalDoc(locale, doc);
  return (
    <>
      <PageHero title={title} intro={d.description} locale={locale} />
      <section className="container-x py-12 md:py-16">
        <div className="prose-ctc max-w-2xl">
          <p className="text-sm text-granite">
            {t('updated')}: {legalUpdated[locale] ?? legalUpdated.en}
          </p>
          {d.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((p, i) => (
                <p key={i}>{linkify(p)}</p>
              ))}
              {s.table && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[0.9375rem] leading-normal">
                    <thead>
                      <tr className="border-b border-granite-300">
                        {s.table.head.map((h) => (
                          <th key={h} scope="col" className="py-2 pr-4 align-bottom font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, r) => (
                        <tr key={r} className="border-b border-granite-100 align-top">
                          {row.map((cell, c) =>
                            c === 0 ? (
                              <th key={c} scope="row" className="py-2 pr-4 font-mono text-sm font-normal">
                                {cell}
                              </th>
                            ) : (
                              <td key={c} className="py-2 pr-4">
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

/** Simple body-only page (accessibility statement). */
export async function SimpleLegalPage({ locale, title, body }: { locale: Locale; title: string; body: string }) {
  return (
    <>
      <PageHero title={title} locale={locale} />
      <section className="container-x py-12 md:py-16">
        <div className="prose-ctc max-w-2xl">
          <p>{body}</p>
        </div>
      </section>
    </>
  );
}
