import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export const tables = schema;

function initDbConnection() {
  if(process.env.NODE_ENV === 'development') {
    const { env } = getRequestContext();

    return env.DB;
  }
  return process.env.DB as unknown as D1Database;
}

export const db = drizzle(initDbConnection(), { schema})