'use client';

import { forwardRef, useCallback, type ComponentProps } from 'react';
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

const { Link: IntlLink, useRouter } = createNavigation(routing);

type Props = ComponentProps<typeof IntlLink>;

/** next-intl Link that prefetches on hover, focus or touch rather than on viewport entry. */
export const IntentLink = forwardRef<HTMLAnchorElement, Props>(function IntentLink({ prefetch, onMouseEnter, onFocus, onTouchStart, ...props }, ref) {
  const router = useRouter();
  const href = props.href;
  const warm = useCallback(() => {
    if (prefetch === false) return;
    try {
      router.prefetch(href as Parameters<typeof router.prefetch>[0], props.locale ? { locale: props.locale } : undefined);
    } catch {
      /* ignore: external or invalid href */
    }
  }, [router, href, prefetch, props.locale]);
  return (
    <IntlLink
      ref={ref}
      prefetch={false}
      onMouseEnter={(e) => {
        warm();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        warm();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        warm();
        onTouchStart?.(e);
      }}
      {...props}
    />
  );
});
