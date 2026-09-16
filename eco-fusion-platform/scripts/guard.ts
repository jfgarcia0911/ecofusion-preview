/**
 * Refuse to write demo or seed data to a hosted database by accident.
 *
 * The local .env points at the production database, so `npm run db:seed-dummy`
 * once put ten fake sales into production, and re-running the course seed wiped
 * every learner's lesson progress. Scripts that write call this first; a
 * deliberate run against a hosted database says so with ALLOW_PRODUCTION_WRITE=1.
 */
export function assertSafeTarget(script: string): void {
    let host = '';
    try {
        host = new URL(process.env.DATABASE_URL ?? '').hostname;
    } catch {
        // No usable URL: Prisma will fail on its own, with a clearer message.
    }
    const local = host === 'localhost' || host === '127.0.0.1' || host === '::1' || host.endsWith('.local');
    if (local || process.env.ALLOW_PRODUCTION_WRITE === '1') return;

    console.error(
        `\n${script} will not write to ${host || 'an unknown database'}.\n` +
            'That is a hosted database, and this script is for local data. If you mean it,\n' +
            'run it again with ALLOW_PRODUCTION_WRITE=1.\n'
    );
    process.exit(1);
}
