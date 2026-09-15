import { redirect } from "next/navigation";

/** The console opens on the list of agencies, which is what it is for. */
export default function ConsoleIndexPage() {
    redirect("/console/agencies");
}
