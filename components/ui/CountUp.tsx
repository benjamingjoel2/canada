'use client';

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * Counts up to `value` when it comes into view (and again when the value changes).
 * The digits are written straight to the DOM while animating; screen readers get the
 * final value once.
 */
export function CountUp({ value, locale, className }: { value: number; locale: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const fmt = (n: number) => new Intl.NumberFormat(locale === 'fr' ? 'fr-CA' : 'en-CA').format(n);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce || !inView) {
      el.textContent = fmt(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = fmt(Math.round(v));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- fmt only depends on locale
  }, [value, inView, reduce, locale]);

  return (
    <span className={className}>
      <span ref={ref} aria-hidden>
        {fmt(value)}
      </span>
      <span className="sr-only">{fmt(value)}</span>
    </span>
  );
}
