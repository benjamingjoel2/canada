'use client';

import clsx from 'clsx';
import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Native <dialog> modal: focus is trapped and restored by the browser,
 * Escape closes, the page behind is inert.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  closeLabel,
  className,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  closeLabel: string;
  className?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) {
      el.showModal();
      document.documentElement.style.overflow = 'hidden';
    } else if (!open && el.open) {
      el.close();
    }
    if (!open) document.documentElement.style.overflow = '';
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      className={clsx(
        'm-auto max-h-[100dvh] w-full max-w-none bg-transparent p-0 text-ink backdrop:bg-transparent md:max-h-[92dvh] md:max-w-4xl',
        className,
      )}
    >
      <div className="relative min-h-[100dvh] overflow-y-auto bg-birch-50 md:min-h-0 md:rounded-sm">
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-birch text-forest hover:bg-forest hover:text-birch"
        >
          <svg aria-hidden viewBox="0 0 14 14" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l12 12M13 1L1 13" /></svg>
        </button>
        {children}
      </div>
    </dialog>
  );
}
