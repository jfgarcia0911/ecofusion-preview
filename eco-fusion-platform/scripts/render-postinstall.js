#!/usr/bin/env node
/**
 * Runs automatically after `npm install`.
 *
 * On Render this is the belt-and-suspenders schema sync: it runs whether the
 * service reads render.yaml (Blueprint) or a build command typed into the
 * dashboard, because every possible build command installs dependencies first.
 * Locally it only regenerates the Prisma client, which is a no-op if current.
 */
const { spawnSync } = require('child_process')

const onRender = Boolean(process.env.RENDER)

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

if (!onRender) {
  process.exit(0)
}

if (!process.env.DATABASE_URL || !process.env.DIRECT_URL) {
  console.warn(
    '\n[postinstall] Running on Render but DATABASE_URL and/or DIRECT_URL are ' +
      'unset, so migrations were SKIPPED. Set both in the Render dashboard ' +
      '(Environment tab) — the app cannot serve requests without them.\n'
  )
  process.exit(0)
}

console.log('[postinstall] Render build detected — applying pending migrations.')
prisma(['migrate', 'deploy'], { fatal: true })
