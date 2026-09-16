-- Take the public API roles' privileges away, not just their rows.
--
-- Row-level security with no policies already denies anon and authenticated
-- every row, but both roles still held full privileges on every table, and
-- every new table was granted to them by default - so one migration that
-- forgot ENABLE ROW LEVEL SECURITY would have published that table through
-- Supabase's API, and TRUNCATE is not governed by RLS at all.
--
-- The application connects as postgres and uses neither role. Guarded so the
-- migration also runs on a plain Postgres, where these roles do not exist.

DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'anon')
       AND EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'authenticated') THEN
        REVOKE ALL ON ALL TABLES IN SCHEMA public FROM anon, authenticated;
        REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM anon, authenticated;
        REVOKE ALL ON ALL FUNCTIONS IN SCHEMA public FROM anon, authenticated;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON TABLES FROM anon, authenticated;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON SEQUENCES FROM anon, authenticated;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public REVOKE ALL ON FUNCTIONS FROM anon, authenticated;
    END IF;
END
$$;
