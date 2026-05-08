import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema/index.js"; 

const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const pool = new Pool({ 
  connectionString,
  max: 10, // Vercel serverless ke liye 20 bahut zyada hai
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000, // 2s se 5s kiya - Aiven remote hai
  ssl: {
    rejectUnauthorized: false, // Aiven self-signed cert ke liye zaroori
  },
});

export const db = drizzle(pool, { schema });
export * from "./schema/index.js";
