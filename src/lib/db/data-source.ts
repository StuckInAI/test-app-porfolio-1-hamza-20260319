import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Project } from './entities/Project';
import { BlogPost } from './entities/BlogPost';
import { ContactMessage } from './entities/ContactMessage';

const databasePath = process.env.DATABASE_URL || './portfolio.db';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: databasePath,
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: [Project, BlogPost, ContactMessage],
  migrations: [],
  subscribers: [],
});

// Initialize the data source
export async function initializeDatabase() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('Database initialized');
  }
}
