# EcoFusion Platform

**Integrated farm management and training for aquaponics businesses and the agencies that run them.**

## What it is

A multi-tenant Next.js application with three levels:

| Level | Who | Where |
|---|---|---|
| EcoFusion console | EcoFusion's admin (`platform_admin`) and staff | `app/(console)` |
| Agency | An agency's master account and staff; each agency holds businesses (sub-accounts) | `app/(agency)` |
| Business | A business's owner, supervisors, managers and members | `app/(platform)` |

Access is decided on the server, per request, in `lib/staff.ts` (platform), `lib/agency.ts` (agency) and `lib/tenancy.ts` (business). Every business record carries `organizationId`, and every route scopes by it.

## Getting started

```bash
cp .env.example .env      # fill in the values - see "Configuration"
npm install               # also generates the Prisma client
npm run dev               # http://localhost:3000
```

Use a **local or development database** for `DATABASE_URL`. Seed scripts refuse a hosted database unless `ALLOW_PRODUCTION_WRITE=1` is set.

## Scripts

```bash
npm run dev                # development server
npm run build              # production build
npm run lint               # ESLint
npm run typecheck          # TypeScript
npm test                   # unit tests (Vitest)
npm run db:migrate:status  # which migrations are applied
npm run db:migrate:deploy  # apply pending migrations
npm run create-admin       # create the EcoFusion admin (see scripts/create-admin.ts)
```

New migrations: write them under `prisma/migrations/<timestamp>_<name>/migration.sql` (`npx prisma migrate diff --from-schema-datasource prisma/schema.prisma --to-schema-datamodel prisma/schema.prisma --script` prints the difference). Every new table must `ENABLE ROW LEVEL SECURITY`.

## Configuration

All variables are listed, with explanations, in `.env.example`.

| Variable | Needed for | Without it |
|---|---|---|
| `DATABASE_URL`, `DIRECT_URL` | Everything (pooler and direct connection) | Nothing works |
| `AUTH_SECRET` | Sessions | Sign-in fails in production |
| `ENCRYPTION_KEY` | Storing integration keys | Saving an integration fails |
| `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_PRICE_STARTER/GROWTH/PRO` | Agency plans and course purchases | Billing is hidden; nobody is locked for not paying |
| `STRIPE_WEBHOOK_SECRET` | Applying payments | Paid subscriptions are not applied (alerted) |
| `STRIPE_CONNECT_CLIENT_ID`, `STRIPE_CONNECT_WEBHOOK_SECRET` | Sub-accounts paying their agency | Agencies cannot connect Stripe; sub-accounts are not charged |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | Rate limits shared across instances | Limits are per instance only |
| `RESEND_API_KEY`, `EMAIL_FROM` | Password reset emails | The reset page tells people to ask their owner or support |
| `GEMINI_API_KEY` | AI Assistant and Intelligence | Those features fail |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | "Continue with Google" | Google sign-in is off |
| `GOHIGHLEVEL_WEBHOOK_SECRET` | CRM webhooks | CRM webhooks are refused in production |
| `ALERT_WEBHOOK_URL` | Being told about errors (Slack/Discord webhook) | Errors are only in the logs |
| `NEXT_PUBLIC_APP_URL` | Links in emails and Stripe return URLs | Falls back to the Vercel URL |

## Deployment

Vercel (`vercel.json`): functions run in `hnd1`, next to the Supabase database in Tokyo. The build runs `scripts/migrate.js`, which applies migrations **only on production deployments**. See `docs/OPERATIONS.md` for health checks, monitoring, backups and incident steps.

## Technology

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Prisma 6 on Supabase Postgres · Auth.js v5 · Stripe (Checkout, Connect) · Upstash Redis · Resend · Google Gemini · Recharts · Vitest

## Ownership & License

**Copyright (c) 2024-2026 LLAYD LLC. All rights reserved.**

- **Owner:** LLAYD LLC
- **Author:** Bradford Phillips
- **License:** MIT License

See [LICENSE](../LICENSE) and [COPYRIGHT](../COPYRIGHT) in the project root for full details.

## Contact

- **GitHub:** [@twinn129](https://github.com/twinn129)
- **Email:** support@llayd.com
