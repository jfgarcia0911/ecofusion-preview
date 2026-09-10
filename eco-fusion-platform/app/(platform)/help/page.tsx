import { auth } from '@/auth';
import { isPlatformRole } from '@/lib/roles';
import HelpCenter from './help-center';

/**
 * The Help Center, with the section for EcoFusion's own people shown only to
 * them. Decided here because the articles are a client component and this is
 * where the session is: the staff section describes a view customers do not
 * have, so it is not sent to them.
 */
export default async function HelpPage() {
    const session = await auth();
    return <HelpCenter isStaff={isPlatformRole(session?.user?.role)} />;
}
