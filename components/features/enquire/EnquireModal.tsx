'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/data/types';
import { heroFilms } from '@/data/media';
import { Modal } from '@/components/ui/Modal';
import { Picture } from '@/components/ui/Picture';
import { useEnquire } from './EnquireContext';

// The forms (and zod) load the first time a modal opens, not on every page.
const EnquireForm = dynamic(() => import('./EnquireForm').then((m) => m.EnquireForm), { ssr: false });
const ItineraryModal = dynamic(() => import('@/components/features/itinerary/ItineraryModal').then((m) => m.ItineraryModal), { ssr: false });

export function EnquireModal() {
  const t = useTranslations('enquire');
  const locale = useLocale() as Locale;
  const { open, session, prefill, closeEnquire, itineraryJourneyId } = useEnquire();
  // Load the itinerary modal the first time it is asked for, then keep it mounted.
  const [itineraryUsed, setItineraryUsed] = useState(false);
  if (itineraryJourneyId && !itineraryUsed) setItineraryUsed(true);

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
      {itineraryUsed && <ItineraryModal />}
    </>
  );
}
