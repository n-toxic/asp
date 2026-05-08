import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
export * from "./schema/index.js"; 

const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export const pool = new Pool({ 
  connectionString,
  // Vercel/Railway par connection pooling ke liye ye helpful hota hai
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool, { schema });

export * from "./schema.js";
