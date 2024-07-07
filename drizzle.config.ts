import type { Config } from 'drizzle-kit';

export default {
  dialect: 'sqlite',
  schema: './database/schema.ts', 
  out: './database/migrations',
  dbCredentials: {
    url: './.wrangler/state/v3/d1/miniflare-D1DatabaseObject/next-starter-db-local.sqlite',
  },
} satisfies Config;