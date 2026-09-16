#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- a plain Node script, run before any build */
/**
 * Apply pending migrations - on a production deployment only.
 *
 * Every Vercel build used to migrate, previews included, so pushing any branch
 * applied its migrations to whatever database the Preview environment pointed
 * at, which here is production. Now only a production deployment migrates (a
 * push to the production branch), Render still migrates (it only deploys
 * production), and anything else says it skipped.
 *
 * MIGRATE=1 forces it, for a deliberate run from somewhere else.
 */
const { spawnSync } = require('child_process');

const production =
  process.env.MIGRATE === '1' ||
  process.env.VERCEL_ENV === 'production' ||
  Boolean(process.env.RENDER);

if (!production) {
  console.log(
    `[migrate] Skipped: not a production deployment (VERCEL_ENV=${process.env.VERCEL_ENV || 'unset'}).`
  );
  process.exit(0);
}

if (!process.env.DATABASE_URL || !process.env.DIRECT_URL) {
  console.error('[migrate] DATABASE_URL and DIRECT_URL must both be set to migrate.');
  process.exit(1);
}

const result = spawnSync('npx', ['prisma', 'migrate', 'deploy'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
if (result.status !== 0) {
  console.error('[migrate] prisma migrate deploy failed. Refusing to build against a stale schema.');
  process.exit(result.status || 1);
}
