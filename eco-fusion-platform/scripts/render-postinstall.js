#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- a plain Node script, run before any build */
/**
 * Runs automatically after `npm install`: regenerates the Prisma client.
 *
 * It used to migrate as well, whenever VERCEL or RENDER was set - which meant
 * any install on a preview build, or any `npm install` on a machine with those
 * variables, changed the database. Migrating is now the build's job, and only
 * on production: see scripts/migrate.js, called from vercel.json and
 * render.yaml.
 */
const { spawnSync } = require('child_process');

const result = spawnSync('npx', ['prisma', 'generate'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
});
if (result.status !== 0) {
  console.warn('[postinstall] prisma generate failed (non-fatal); the build generates again.');
}
