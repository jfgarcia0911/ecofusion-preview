import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            role: string;
            /** Organization the session is currently acting within. */
            organizationId?: string;
            /** Role held within that organization: owner | admin | manager | member. */
            orgRole?: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultUser {
        id: string;
        role: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        id?: string;
        role?: string;
        organizationId?: string;
        orgRole?: string;
    }
}
