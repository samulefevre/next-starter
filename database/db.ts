import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export const tables = schema;

function initDbConnection(): D1Database {
  if(process.env.NODE_ENV === 'development') {
    const { env } = getRequestContext();

    return env.DB;
  }

  if (!process.env.DB) {
    throw new Error('DB environment variable is not set');
  }
  return process.env.DB as unknown as D1Database;
}

export function getDb() {
  return drizzle(initDbConnection(), { schema });
}

export const db = getDb();