'use client';

import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/data/types';
import { heroFilms } from '@/data/media';
import { Modal } from '@/components/ui/Modal';
import { Picture } from '@/components/ui/Picture';
import { EnquireForm } from './EnquireForm';
import { useEnquire } from './EnquireContext';
import { ItineraryModal } from '@/components/features/itinerary/ItineraryModal';

export function EnquireModal() {
  const t = useTranslations('enquire');
  const locale = useLocale() as Locale;
  const { open, session, prefill, closeEnquire } = useEnquire();

  return (
    <>
      <Modal open={open} onClose={closeEnquire} labelledBy="enquire-title" closeLabel={t('close')}>
        <div className="grid md:grid-cols-5">
          <div className="relative hidden md:col-span-2 md:block">
            <div className="absolute inset-0">
              <Picture img={heroFilms.summer.poster} locale={locale} className="summer-only h-full w-full" showCaption={false} />
              <Picture img={heroFilms.winter.poster} locale={locale} className="winter-only h-full w-full" showCaption={false} />
            </div>
          </div>
          <div className="p-6 pt-16 md:col-span-3 md:p-10">
            {open && <EnquireForm key={session} idPrefix="modal" prefill={prefill} onDone={closeEnquire} titleId="enquire-title" />}
          </div>
        </div>
      </Modal>
      <ItineraryModal />
    </>
  );
}
