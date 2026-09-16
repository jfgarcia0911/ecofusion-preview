# Operating EcoFusion

## Health

- `GET /api/health` returns `200 {"status":"ok"}` when the app can reach its database, `503` when it cannot. Point uptime monitoring (e.g. Better Stack, UptimeRobot) at it, every 1–5 minutes.

## Monitoring

- Server errors (pages, route handlers, server actions) are reported by `instrumentation.ts` through `lib/monitoring.ts`: one JSON line per error in the Vercel logs, searchable by `"event"`.
- Set `ALERT_WEBHOOK_URL` to a Slack or Discord incoming webhook to be told as well. The same event is posted at most once every 10 minutes per instance.
- Events worth an alert rule:
  - `stripe.webhook.unconfigured` / `stripe.connect_webhook.unconfigured` — payments are not being applied.
  - `stripe.webhook.failed` / `stripe.connect_webhook.failed` — an event failed; Stripe retries for 3 days.
  - `request.error` — any unhandled server error. The `digest` matches the reference shown to the user.
- Warnings in the log to act on: `UPSTASH_REDIS_REST_URL ... not set` (rate limits are per instance), `Email not sent` (password resets cannot be delivered), `STRIPE_SECRET_KEY is a test key on a production deployment`.

## Deploying

- Pushing to the production branch deploys to production. `scripts/migrate.js` applies pending migrations first, and only for `VERCEL_ENV=production`; preview deployments never migrate.
- Preview deployments should use their own database (Vercel → Settings → Environment Variables → Preview).
- A migration that fails stops the build; the running deployment is unaffected. Fix the migration, or mark it with `npx prisma migrate resolve` once the database has been corrected by hand.
- Migrations that alter busy tables set `lock_timeout` so they fail rather than block traffic.

## Backups and restore

- Supabase takes daily backups on paid plans; Point-in-Time Recovery is an add-on. Check the project's plan under Database → Backups, and turn PITR on before taking real customers.
- Before any risky manual change: Database → Backups → create a backup, or `pg_dump "$DIRECT_URL" > backup.sql`.
- To restore: Supabase dashboard → Database → Backups → Restore (the whole database), or `psql "$DIRECT_URL" < backup.sql` into a fresh database and repoint `DATABASE_URL`/`DIRECT_URL`.
- Deleting a user no longer deletes the business records they entered (`onDelete: SetNull`); deleting a business or agency still deletes its records, so treat those as irreversible.

## Database access

- The app connects as `postgres`. Supabase's `anon` and `authenticated` roles hold no privileges on the `public` schema, and every table has row-level security with no policies. New tables must keep both true.
- The local `.env` must not point at production. Seed scripts refuse a hosted database without `ALLOW_PRODUCTION_WRITE=1`.

## Incidents

- **A paying customer is locked out:** open `/billing` as them (it re-reads Stripe while locked), or check the subscription in Stripe and the `stripe.webhook.*` events. Paid access survives 3 days past the period end while a renewal arrives.
- **A leaked credential:** rotate it at the provider, update Vercel's environment variables, redeploy. For `AUTH_SECRET`, every session ends. For a user's password, resetting it ends that user's sessions within five minutes.
- **Suspicious account activity:** Console → Access Log (EcoFusion and agency actions), Settings → Access Record (a business's own record).
