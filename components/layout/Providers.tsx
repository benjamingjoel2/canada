'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';
import { EnquireProvider } from '@/components/features/enquire/EnquireContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <EnquireProvider>{children}</EnquireProvider>
    </MotionConfig>
  );
}
