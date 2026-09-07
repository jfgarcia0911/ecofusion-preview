#!/usr/bin/env node
/**
 * Runs automatically after `npm install`.
 *
 * On a hosting platform this is the belt-and-suspenders schema sync: it runs
 * whether the service reads a config file (render.yaml / vercel.json) or a
 * build command typed into the dashboard, because every possible build command
 * installs dependencies first. Locally it only regenerates the Prisma client,
 * which is a no-op if current.
 *
 * Vercel additionally runs the migration from vercel.json's buildCommand,
 * because Vercel can restore a cached node_modules and skip this hook.
 * `prisma migrate deploy` is idempotent, so running it twice is harmless.
 */
const { spawnSync } = require('child_process')

const platform = process.env.RENDER
  ? 'Render'
  : process.env.VERCEL
    ? 'Vercel'
    : null

function prisma(args, { fatal }) {
  const result = spawnSync('npx', ['prisma', ...args], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })
  if (result.status === 0) return true
  const label = `prisma ${args.join(' ')}`
  if (fatal) {
    console.error(`\n[postinstall] ${label} failed. Refusing to continue: the ` +
      `app would deploy against a database missing tables its routes need.\n`)
    process.exit(result.status || 1)
  }
  console.warn(`[postinstall] ${label} failed (non-fatal), continuing.`)
  return false
}

prisma(['generate'], { fatal: false })

if (!platform) {
  process.exit(0)
}

if (!process.env.DATABASE_URL || !process.env.DIRECT_URL) {
  console.warn(
    `\n[postinstall] Running on ${platform} but DATABASE_URL and/or DIRECT_URL ` +
      `are unset, so migrations were SKIPPED. Set both in the ${platform} ` +
      `dashboard — the app cannot serve requests without them.\n`
  )
  process.exit(0)
}

console.log(`[postinstall] ${platform} build detected — applying pending migrations.`)
prisma(['migrate', 'deploy'], { fatal: true })
