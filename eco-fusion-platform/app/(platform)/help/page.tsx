import { auth } from '@/auth';
import { isPlatformRole } from '@/lib/roles';
import { agencyStanding } from '@/lib/agency';
import HelpCenter from './help-center';

/**
 * The Help Center, with the section on working above businesses shown only to
 * those who do: an agency's team, and EcoFusion's. Decided here because the
 * articles are a client component and this is where the session is: that
 * section describes views a business's own people do not have.
 */
export default async function HelpPage() {
    const session = await auth();
    const userId = session?.user?.id;
    const above =
        isPlatformRole(session?.user?.role) || Boolean(userId && (await agencyStanding(userId)));
    return <HelpCenter isStaff={above} />;
}
