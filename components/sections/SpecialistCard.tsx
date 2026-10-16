import { useTranslations } from 'next-intl';
import type { Locale, Specialist } from '@/data/types';
import { tr } from '@/lib/l10n';
import { Picture } from '@/components/ui/Picture';
import { EnquireButton } from '@/components/features/enquire/EnquireButton';

export function SpecialistCard({ specialist, locale, topic }: { specialist: Specialist; locale: Locale; topic?: string }) {
  const t = useTranslations('match');
  const tc = useTranslations('common');
  const first = specialist.name.split(' ')[0];
  return (
    <div className="grid gap-6 bg-birch p-6 sm:grid-cols-3 md:p-8">
      <Picture img={specialist.photo} locale={locale} className="aspect-[4/5] w-full sm:col-span-1" sizes="240px" showCaption={false} />
      <div className="sm:col-span-2">
        <p className="text-2xl text-forest font-serif">{specialist.name}</p>
        <p className="text-sm text-lake-700">{tr(specialist.role, locale)}</p>
        <p className="mt-4 font-serif text-lg text-forest italic">“{tr(specialist.quote, locale)}”</p>
        <p className="mt-3 text-sm text-granite">{tr(specialist.focus, locale)}</p>
        <p className="mt-2 text-[10px] tracking-wider text-granite uppercase">{tc('placeholder')}</p>
        <EnquireButton className="mt-6" prefill={{ specialistId: specialist.id, topic }}>
          {t('talkTo', { name: first })}
        </EnquireButton>
      </div>
    </div>
  );
}
