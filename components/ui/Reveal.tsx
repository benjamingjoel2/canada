'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/** Fades content up as it scrolls into view. Honours reduced-motion via MotionConfig in the layout. */
export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A wipe-in reveal for the alternating image rows (the reference's horizontal wipe).
 * The outer element is observed; a fully clipped element can read as invisible to
 * IntersectionObserver, so the clip lives on the inner one.
 */
export function Wipe({ children, from = 'left', className }: { children: ReactNode; from?: 'left' | 'right'; className?: string }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="shown" viewport={{ once: true, margin: '-80px' }}>
      <motion.div
        variants={{
          hidden: { clipPath: from === 'left' ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)' },
          shown: { clipPath: 'inset(0% 0% 0% 0%)' },
        }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
