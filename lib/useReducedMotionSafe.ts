'use client';

import { useReducedMotion } from 'framer-motion';
import { useSyncExternalStore } from 'react';

const noop = () => () => {};

/**
 * framer-motion's useReducedMotion() returns the real preference on the client's
 * first render but null on the server, so components that branch on it hydrate with
 * a mismatch for reduced-motion visitors (React error #418). This returns false on the
 * server and during hydration, then the real preference.
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  return hydrated ? Boolean(reduce) : false;
}
