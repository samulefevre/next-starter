import { migrate } from 'drizzle-orm/d1/migrator';
import { getDB } from './db';

async function runMigrations() {
  // Apply migrations
  try {
    await migrate(getDB(), { migrationsFolder: 'database/migrations' });
    console.log('Migrations complete');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

runMigrations()