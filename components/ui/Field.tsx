import clsx from 'clsx';
import type { ReactNode } from 'react';

export const inputClass =
  'w-full rounded-sm border border-forest/20 bg-white px-4 py-3 text-ink placeholder:text-granite/60 focus:border-lake focus:outline-none focus-visible:outline-2 focus-visible:outline-lake aria-[invalid=true]:border-maple';

export function Field({
  id,
  label,
  required,
  error,
  children,
  className,
  requiredLabel,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
  requiredLabel?: string;
}) {
  return (
    <div className={clsx('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-forest">
        {label}
        {required && (
          <span className="text-maple" aria-hidden>
            {' '}*
          </span>
        )}
        {required && requiredLabel && <span className="sr-only"> ({requiredLabel})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-maple">
          {error}
        </p>
      )}
    </div>
  );
}
