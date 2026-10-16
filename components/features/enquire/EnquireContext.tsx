'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import type { Interest, Season } from '@/data/types';

export type EnquirePrefill = {
  topic?: string;
  journeyId?: string;
  specialistId?: string;
  area?: string;
  season?: Season;
  interests?: Interest[];
  notes?: string;
};

type Ctx = {
  open: boolean;
  prefill: EnquirePrefill;
  openEnquire: (prefill?: EnquirePrefill) => void;
  closeEnquire: () => void;
  itineraryJourneyId: string | null;
  itineraryTitle: string;
  openItinerary: (journeyId: string, title: string) => void;
  closeItinerary: () => void;
};

const EnquireCtx = createContext<Ctx | null>(null);

export function EnquireProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<EnquirePrefill>({});
  const [itineraryJourneyId, setItineraryJourneyId] = useState<string | null>(null);
  const [itineraryTitle, setItineraryTitle] = useState('');

  const openEnquire = useCallback((p: EnquirePrefill = {}) => {
    setPrefill(p);
    setOpen(true);
  }, []);
  const closeEnquire = useCallback(() => setOpen(false), []);
  const openItinerary = useCallback((id: string, title: string) => {
    setItineraryTitle(title);
    setItineraryJourneyId(id);
  }, []);
  const closeItinerary = useCallback(() => setItineraryJourneyId(null), []);

  return (
    <EnquireCtx.Provider value={{ open, prefill, openEnquire, closeEnquire, itineraryJourneyId, itineraryTitle, openItinerary, closeItinerary }}>
      {children}
    </EnquireCtx.Provider>
  );
}

export function useEnquire() {
  const ctx = useContext(EnquireCtx);
  if (!ctx) throw new Error('useEnquire must be used inside <EnquireProvider>');
  return ctx;
}
