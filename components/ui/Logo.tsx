import clsx from 'clsx';

/** Text logo placeholder with a small compass-north mark. */
export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={clsx('inline-flex items-center gap-2.5', light ? 'text-birch' : 'text-forest', className)}>
      <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none">
        <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1" />
        <path d="M12 3.5 L14.6 12 L12 10.6 L9.4 12 Z" fill="#b8322a" />
        <path d="M12 20.5 L9.4 12 L12 13.4 L14.6 12 Z" fill="currentColor" opacity="0.45" />
      </svg>
      <span className="font-serif text-xl leading-none tracking-tight whitespace-nowrap md:text-[1.3rem]">
        Canada Travel <em className="font-light">Co.</em>
      </span>
    </span>
  );
}
