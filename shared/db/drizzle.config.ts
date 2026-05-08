import { defineConfig } from "drizzle-kit";
import path from "path";

const DB_URL = "postgres://avnadmin:AVNS_AD9kGq6Hy2cuvWnDmcl@toxin-d48965846-abf6.b.aivencloud.com:22607/defaultdb";

export default defineConfig({
  schema: "./src/schema/index.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: DB_URL,
  },
});
