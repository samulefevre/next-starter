import { migrate } from 'drizzle-orm/d1/migrator';
import { db} from './db';

async function runMigrations() {
  // Apply migrations
  try {
    await migrate(db, { migrationsFolder: 'database/migrations' });
    console.log('Migrations complete');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

runMigrations()