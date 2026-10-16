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
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 disabled:opacity-50';

export function buttonClass(variant: Variant = 'solid', className?: string) {
  return clsx(base, styles[variant], className);
}

export function Button({ variant = 'solid', className, ...props }: ComponentProps<'button'> & { variant?: Variant }) {
  return <button {...props} className={buttonClass(variant, className)} />;
}

export function ButtonLink({
  variant = 'solid',
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link {...props} className={buttonClass(variant, className)} />;
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 10" className={clsx('h-2.5 w-5', className)} fill="none" stroke="currentColor">
      <path d="M0 5h19M14 1l4 4-4 4" strokeWidth="1.2" />
    </svg>
  );
}
