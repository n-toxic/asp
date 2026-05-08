FROM node:22-alpine

WORKDIR /app

# Root package.json (workspace config)
COPY package.json ./

# Shared packages
COPY shared/db/package.json ./shared/db/
COPY shared/api-zod/package.json ./shared/api-zod/
COPY shared/api-client/package.json ./shared/api-client/

# Backend
COPY backend/package.json ./backend/

# Install all workspace dependencies
RUN npm install --legacy-peer-deps

# Copy all source files
COPY shared/ ./shared/
COPY backend/ ./backend/

# Build the backend (esbuild bundles everything into dist/index.mjs)
RUN cd backend && node ./build.mjs

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "--enable-source-maps", "./backend/dist/index.mjs"]
