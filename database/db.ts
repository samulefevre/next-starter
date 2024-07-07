import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';
import { getRequestContext } from '@cloudflare/next-on-pages'

export const tables = schema;

function initDbConnection() {
  if(process.env.NODE_ENV === 'development') {
    const { env } = getRequestContext();

    return env.DB;
  }
  return process.env.DB as unknown as D1Database;
}

export function getDB() {
  return drizzle(initDbConnection(), { schema});
}