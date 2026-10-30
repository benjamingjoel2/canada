import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';
import { IntentLink } from './IntentLink';

const nav = createNavigation(routing);

/**
 * Same as next-intl's Link, but pages are prefetched on intent (hover, focus, touch)
 * instead of as soon as a link scrolls into view: on a phone the viewport prefetches
 * competed with the first images for bandwidth. See i18n/IntentLink.tsx.
 */
export const Link = IntentLink;
export const { redirect, usePathname, useRouter, getPathname } = nav;
export const BaseLink = nav.Link;
