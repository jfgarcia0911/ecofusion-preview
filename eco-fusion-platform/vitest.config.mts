import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
    resolve: {
        alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
    },
    test: {
        include: ['tests/**/*.test.ts'],
        environment: 'node',
        // The pure decisions only: nothing here talks to a database or Stripe.
        env: { DATABASE_URL: 'postgresql://test:test@localhost:5432/test' },
    },
});
