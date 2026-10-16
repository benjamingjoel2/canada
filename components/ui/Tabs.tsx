'use client';

import clsx from 'clsx';
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

export type TabItem = { id: string; label: ReactNode; panel: ReactNode };

/** WAI-ARIA tabs: arrow keys move between tabs, Home/End jump. */
export function Tabs({
  items,
  label,
  light = false,
  className,
  listClassName,
  onChange,
}: {
  items: TabItem[];
  label: string;
  light?: boolean;
  className?: string;
  listClassName?: string;
  onChange?: (id: string) => void;
}) {
  const [active, setActive] = useState(0);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    setActive(i);
    refs.current[i]?.focus();
    onChange?.(items[i].id);
  };

  const onKey = (e: KeyboardEvent) => {
    const last = items.length - 1;
    if (e.key === 'ArrowRight') select(active === last ? 0 : active + 1);
    else if (e.key === 'ArrowLeft') select(active === 0 ? last : active - 1);
    else if (e.key === 'Home') select(0);
    else if (e.key === 'End') select(last);
    else return;
    e.preventDefault();
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKey}
        className={clsx('no-scrollbar flex gap-6 overflow-x-auto border-b md:gap-8', light ? 'border-birch/20' : 'border-forest/15', listClassName)}
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`${base}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            className={clsx(
              '-mb-px shrink-0 border-b-2 pb-3 text-left font-serif text-lg whitespace-nowrap transition-colors md:text-xl',
              i === active
                ? light
                  ? 'border-lake text-birch'
                  : 'border-lake text-forest'
                : light
                  ? 'border-transparent text-birch/60 hover:text-birch'
                  : 'border-transparent text-granite hover:text-forest',
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="pt-8 focus-visible:outline-offset-8"
        >
          {item.panel}
        </div>
      ))}
    </div>
  );
}
