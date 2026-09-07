'use client';

import { useSyncExternalStore } from 'react';

/** Nothing to subscribe to - the value only differs between server and client. */
const subscribe = () => () => {};
const onClient = () => true;
const onServer = () => false;

/**
 * True once hydrated, false during SSR.
 *
 * Portals need a real `document`, so components that render into one have to
 * wait for the client. The usual `useState(false)` + `useEffect(setTrue)` does
 * this too, but React 19's compiler lint rejects setState inside an effect;
 * useSyncExternalStore expresses the same thing as what it actually is, a value
 * that differs between the server and client snapshots.
 */
export function useIsClient(): boolean {
    return useSyncExternalStore(subscribe, onClient, onServer);
}
