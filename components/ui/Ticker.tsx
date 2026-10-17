import clsx from 'clsx';

/**
 * A slow credentials ticker. Pauses on hover and focus, stops for reduced motion
 * (the list then wraps), and the duplicate copy that makes the loop seamless is hidden from screen readers.
 */
export function Ticker({ items, label, className }: { items: string[]; label: string; className?: string }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="ticker-row flex shrink-0 items-center gap-10 pr-10">
      {items.map((x, i) => (
        <li key={i} className="meta flex items-center gap-10 whitespace-nowrap">
          {x}
          <span aria-hidden className="text-lake">✦</span>
        </li>
      ))}
    </ul>
  );
  return (
    <section aria-label={label} className={clsx('ticker group overflow-hidden', className)} tabIndex={0}>
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
