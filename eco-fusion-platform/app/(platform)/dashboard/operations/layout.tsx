import { ZoneProvider } from "@/lib/contexts/ZoneContext";

// The zone list polls the API, and only the operations pages read it. Mounting
// the provider here rather than in the root layout keeps every other page,
// including the public ones, from polling for zones it never shows.
export default function OperationsLayout({ children }: { children: React.ReactNode }) {
    return <ZoneProvider>{children}</ZoneProvider>;
}
