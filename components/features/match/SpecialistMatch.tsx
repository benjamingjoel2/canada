'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import type { Area, Img, Interest, Locale, Season, Specialist } from '@/data/types';
import { bestMatch } from '@/lib/match';
import { getSeason, setSeason } from '@/lib/preferences';
import { Italic } from '@/components/ui/Italic';
import { Picture } from '@/components/ui/Picture';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { useEnquire } from '@/components/features/enquire/EnquireContext';

export type MatchSpecialist = Pick<Specialist, 'id' | 'name' | 'areas' | 'interests' | 'seasons' | 'languages'> & {
  role: string;
  focus: string;
  quote: string;
  photo: Img;
  journeys: { slug: string; title: string; seasons: Season[] }[];
};

const interestList: Interest[] = ['wildlife', 'landscapes', 'food-cities', 'comfort', 'adventure'];

/** Three questions instead of a long planner. The result opens the enquire modal pre-filled. */
export function SpecialistMatch({ specialists }: { specialists: MatchSpecialist[] }) {
  const t = useTranslations('match');
  const tc = useTranslations('common');
  const locale = useLocale() as Locale;
  const { openEnquire } = useEnquire();
  const [step, setStep] = useState(0);
  const [area, setArea] = useState<Area | 'all' | null>(null);
  const [season, setSeasonAnswer] = useState<Season | null>(null);
  const [interests, setInterests] = useState<Interest[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // "When?" starts on the visitor's current season switch.
  useEffect(() => setSeasonAnswer(getSeason()), []);
  useEffect(() => {
    if (step > 0) headingRef.current?.focus();
  }, [step]);

  const result = step === 3 && area && season ? bestMatch(specialists, { area, season, interests }) : null;

  const option = (active: boolean) =>
    clsx(
      'flex w-full flex-col items-start rounded-sm border p-5 text-left transition-colors md:p-6',
      active ? 'border-forest bg-forest text-birch' : 'border-forest/15 bg-white text-forest hover:border-forest',
    );

  const canNext = (step === 0 && area) || (step === 1 && season) || (step === 2 && interests.length > 0);
  const questions = [t('q1'), t('q2'), t('q3')];

  return (
    <div className="mx-auto max-w-4xl">
      {step < 3 && (
        <>
          <div className="flex items-center gap-3" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className={clsx('h-0.5 flex-1 transition-colors', i <= step ? 'bg-forest' : 'bg-forest/15')} />
            ))}
          </div>
          <p className="eyebrow mt-6 text-granite">{t('step', { current: step + 1, total: 3 })}</p>
          <h2 ref={headingRef} tabIndex={-1} className="mt-3 text-3xl text-forest outline-none md:text-5xl">
            {questions[step]}
          </h2>
          {step === 2 && <p className="mt-2 text-granite">{t('q3Hint')}</p>}
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {step === 0 && (
            <div role="radiogroup" aria-label={t('q1')} className="grid gap-3 sm:grid-cols-2">
              {(['west', 'north', 'east', 'all'] as const).map((a) => (
                <button key={a} type="button" role="radio" aria-checked={area === a} className={option(area === a)} onClick={() => setArea(a)}>
                  <span className="font-serif text-2xl">{t(a)}</span>
                  <span className={clsx('mt-1 text-sm', area === a ? 'text-birch/75' : 'text-granite')}>{t(`${a}Hint`)}</span>
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div role="radiogroup" aria-label={t('q2')} className="grid gap-3 sm:grid-cols-2">
              {(['summer', 'winter'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  role="radio"
                  aria-checked={season === s}
                  className={option(season === s)}
                  onClick={() => {
                    setSeasonAnswer(s);
                    setSeason(s); // the answer also switches the site, like the header switch
                  }}
                >
                  <span className="font-serif text-2xl">
                    <span aria-hidden>{s === 'summer' ? '☀ ' : '❄ '}</span>
                    {t(s)}
                  </span>
                  <span className={clsx('mt-1 text-sm', season === s ? 'text-birch/75' : 'text-granite')}>{t(`${s}Hint`)}</span>
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <div role="group" aria-label={t('q3')} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {interestList.map((i) => {
                const on = interests.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={on}
                    className={option(on)}
                    onClick={() =>
                      setInterests((cur) => (on ? cur.filter((x) => x !== i) : cur.length >= 2 ? [cur[1], i] : [...cur, i]))
                    }
                  >
                    <span className="font-serif text-2xl">{t(i)}</span>
                  </button>
                );
              })}
            </div>
          )}
          {step === 3 && result && (
            <div className="grid gap-10 md:grid-cols-5 md:items-start">
              <Picture img={result.photo} locale={locale} className="aspect-[4/5] w-full md:col-span-2" sizes="(min-width:768px) 35vw, 100vw" />
              <div className="md:col-span-3">
                <p className="eyebrow text-lake-700">{t('eyebrow')}</p>
                <h2 ref={headingRef} tabIndex={-1} className="mt-3 text-4xl text-forest outline-none md:text-5xl">
                  <Italic text={t('resultTitle', { name: result.name })} />
                </h2>
                <p className="mt-2 text-lake-700">{result.role}</p>
                <p className="mt-5 text-granite">{t('resultIntro', { name: result.name.split(' ')[0] })}</p>
                <p className="mt-3 text-ink">{result.focus}</p>
                <blockquote className="mt-6 border-l-2 border-lake pl-4 font-serif text-2xl text-forest italic">“{result.quote}”</blockquote>
                <p className="mt-3 text-[10px] tracking-wider text-granite uppercase">{tc('placeholder')}</p>
                {result.journeys.length > 0 && (
                  <>
                    <p className="eyebrow mt-8 text-granite">{t('suggested', { name: result.name.split(' ')[0] })}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {(result.journeys.some((j) => season && j.seasons.includes(season))
                        ? result.journeys.filter((j) => season && j.seasons.includes(season))
                        : result.journeys
                      )
                        .slice(0, 3)
                        .map((j) => (
                          <li key={j.slug}>
                            <Link href={`/journeys/${j.slug}`} className="inline-block rounded-full border border-forest/20 px-3 py-1 text-sm text-forest hover:border-forest">
                              <Italic text={j.title} />
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </>
                )}
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button
                    onClick={() =>
                      openEnquire({
                        specialistId: result.id,
                        area: area ?? undefined,
                        season: season ?? undefined,
                        interests,
                        topic: `${t('eyebrow')}: ${result.name} · ${t(area!)} · ${t(season!)}`,
                      })
                    }
                  >
                    {t('talkTo', { name: result.name.split(' ')[0] })}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setStep(0);
                      setArea(null);
                      setInterests([]);
                    }}
                  >
                    {t('startOver')}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {step < 3 && (
        <div className="mt-10 flex justify-between">
          <Button variant="ghost" className={clsx(step === 0 && 'invisible')} onClick={() => setStep((s) => s - 1)}>
            {t('back')}
          </Button>
          <Button disabled={!canNext} onClick={() => setStep((s) => s + 1)}>
            {step === 2 ? t('seeMatch') : t('next')}
          </Button>
        </div>
      )}
    </div>
  );
}
