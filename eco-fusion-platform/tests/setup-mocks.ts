import { vi } from 'vitest';

// Modules that reach for a session, a request or the database when imported.
// The tests exercise decisions that take their facts as arguments, so these
// only need to exist.
vi.mock('@/auth', () => ({ auth: vi.fn(), signIn: vi.fn(), signOut: vi.fn(), handlers: {} }));
vi.mock('next/headers', () => ({
    headers: vi.fn(async () => new Headers()),
    cookies: vi.fn(async () => ({ get: () => undefined })),
}));
vi.mock('@/lib/prisma', () => ({ prisma: {} }));
