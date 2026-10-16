'use client';

import type { ReactNode } from 'react';
import { buttonClass } from '@/components/ui/Button';
import { useEnquire, type EnquirePrefill } from './EnquireContext';

export function EnquireButton({
  children,
  prefill,
  variant = 'solid',
  className,
}: {
  children: ReactNode;
  prefill?: EnquirePrefill;
  variant?: 'solid' | 'outline' | 'light' | 'ghost';
  className?: string;
}) {
  const { openEnquire } = useEnquire();
  return (
    <button type="button" className={buttonClass(variant, className)} onClick={() => openEnquire(prefill)} aria-haspopup="dialog">
      {children}
    </button>
  );
}

export function ItineraryButton({ journeyId, title, children, variant = 'outline', className }: { journeyId: string; title: string; children: ReactNode; variant?: 'solid' | 'outline' | 'light' | 'ghost'; className?: string }) {
  const { openItinerary } = useEnquire();
  return (
    <button type="button" className={buttonClass(variant, className)} onClick={() => openItinerary(journeyId, title)} aria-haspopup="dialog">
      {children}
    </button>
  );
}
