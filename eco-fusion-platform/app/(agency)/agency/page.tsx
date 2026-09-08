import { redirect } from "next/navigation";

/** The agency view opens on the list of customers, which is what it is for. */
export default function AgencyIndexPage() {
    redirect("/agency/sub-accounts");
}
