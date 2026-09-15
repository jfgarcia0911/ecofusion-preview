"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";

/**
 * The same screens serve two places: an agency's own view (/agency) and
 * EcoFusion's console (/console). Under the console every request asks for the
 * platform scope, so an EcoFusion account that is also supporting an agency
 * still sees EcoFusion's own team, templates and log there (see preferOf in
 * lib/agency).
 */
export function useScopedApi() {
    const pathname = usePathname() ?? "";
    const inConsole = pathname.startsWith("/console");
    const api = useCallback(
        (url: string) => (inConsole ? `${url}${url.includes("?") ? "&" : "?"}scope=platform` : url),
        [inConsole]
    );
    return { inConsole, api };
}
