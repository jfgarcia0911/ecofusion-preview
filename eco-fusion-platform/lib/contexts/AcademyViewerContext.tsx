"use client";
import React, { createContext, useContext } from "react";

/**
 * Who is reading the academy: one of the business's own people, there to take
 * their courses, or somebody who stepped in from above it - EcoFusion's admin
 * or support, or the agency's team - there to see what it carries.
 *
 * The second kind holds no membership in the business, so nothing is ever
 * assigned to them there, and screens written for a learner told them to ask
 * their supervisor and to "start learning". Set by the academy's layout from
 * the request's own context, which the page itself cannot read.
 */
export interface AcademyViewer {
    /** Stepped in from above rather than a member of the business. */
    entered: boolean;
    /** The business whose academy this is. */
    businessName: string | null;
}

const AcademyViewerContext = createContext<AcademyViewer>({ entered: false, businessName: null });

export function AcademyViewerProvider({
    value,
    children,
}: {
    value: AcademyViewer;
    children: React.ReactNode;
}) {
    return <AcademyViewerContext.Provider value={value}>{children}</AcademyViewerContext.Provider>;
}

export function useAcademyViewer(): AcademyViewer {
    return useContext(AcademyViewerContext);
}
