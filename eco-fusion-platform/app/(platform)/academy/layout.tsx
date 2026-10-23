import { getOrgContext } from "@/lib/tenancy";
import { AcademyViewerProvider } from "@/lib/contexts/AcademyViewerContext";

// Whether the reader is taking these courses or looking in on them. The
// platform layout has already worked out this request's business, and that
// answer is cached for the request, so asking again here costs no query.
export default async function AcademyLayout({ children }: { children: React.ReactNode }) {
    const ctx = await getOrgContext();
    return (
        <AcademyViewerProvider
            value={{ entered: Boolean(ctx?.entered), businessName: ctx?.business.name ?? null }}
        >
            {children}
        </AcademyViewerProvider>
    );
}
