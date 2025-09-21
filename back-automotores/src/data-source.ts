import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "app_user",
  password: process.env.DB_PASSWORD || "secret_123",
  database: process.env.DB_NAME || "mf-auto",
  synchronize: false, // never use true in prod
  logging: true,
  entities: [__dirname + '/domain/**/*.entity.ts'],
  migrations: [__dirname + '/migrations/*.ts'],
  subscribers: [],
});
