import clsx from 'clsx';
import type { ComponentProps } from 'react';
import { Link } from '@/i18n/navigation';

type Variant = 'solid' | 'outline' | 'outlineLight' | 'light' | 'ghost';

const styles: Record<Variant, string> = {
  solid: 'bg-forest text-birch hover:bg-forest-700',
  outline: 'border border-current text-forest hover:bg-forest hover:text-birch',
  outlineLight: 'border border-birch/70 text-birch hover:bg-birch hover:text-forest',
  light: 'bg-birch text-forest hover:bg-white',
  ghost: 'text-current underline underline-offset-4 decoration-1 hover:decoration-2 px-0',
};

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 disabled:opacity-50';

export function buttonClass(variant: Variant = 'solid', className?: string) {
  return clsx(base, styles[variant], className);
}

export function Button({ variant = 'solid', className, ...props }: ComponentProps<'button'> & { variant?: Variant }) {
  return <button {...props} className={buttonClass(variant, className)} />;
}

const circle: Record<Variant, string> = {
  solid: 'bg-forest text-birch group-hover:bg-forest-700',
  outline: 'border border-forest/40 text-forest group-hover:border-forest group-hover:bg-forest group-hover:text-birch',
  outlineLight: 'border border-birch/60 text-birch group-hover:bg-birch group-hover:text-forest',
  light: 'bg-birch text-forest group-hover:bg-white',
  ghost: 'text-current',
};

/**
 * Link button. With `arrow`, renders the two-part CTA: a label next to a separate
 * circle holding an arrow that nudges on hover (min. 44px target).
 */
export function ButtonLink({
  variant = 'solid',
  className,
  arrow = false,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean }) {
  if (!arrow) return <Link {...props} className={buttonClass(variant, className)}>{children}</Link>;
  return (
    <Link {...props} className={clsx('group inline-flex items-center gap-1.5', className)}>
      <span className={buttonClass(variant)}>{children}</span>
      <span aria-hidden className={clsx('grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-300', circle[variant])}>
        <Arrow className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 10" className={clsx('h-2.5 w-5', className)} fill="none" stroke="currentColor">
      <path d="M0 5h19M14 1l4 4-4 4" strokeWidth="1.2" />
    </svg>
  );
}
