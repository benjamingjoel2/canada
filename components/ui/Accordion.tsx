'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useId, useState, type ReactNode } from 'react';

export type AccordionItem = { id: string; title: ReactNode; content: ReactNode };

export function Accordion({ items, light = false, className }: { items: AccordionItem[]; light?: boolean; className?: string }) {
  const [open, setOpen] = useState<string | null>(null);
  const base = useId();
  return (
    <div className={clsx('divide-y border-y', light ? 'divide-birch/20 border-birch/20' : 'divide-forest/15 border-forest/15', className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <h3 className="font-sans">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${base}-${item.id}`}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className={clsx(
                  'flex w-full items-start justify-between gap-6 py-5 text-left font-serif text-lg md:text-xl',
                  light ? 'text-birch' : 'text-forest',
                )}
              >
                <span>{item.title}</span>
                <span aria-hidden className={clsx('relative mt-2 h-3 w-3 shrink-0 transition-transform duration-300', isOpen && 'rotate-45')}>
                  <span className="absolute top-1/2 left-0 h-px w-3 bg-current" />
                  <span className="absolute top-0 left-1/2 h-3 w-px bg-current" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`${base}-${item.id}`}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={clsx('max-w-3xl pb-6 leading-relaxed', light ? 'text-birch/80' : 'text-granite')}>{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
