# Multi-stage build for SvelteKit (Node adapter)
# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies (only package files first for better caching)
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci --ignore-scripts || npm install --ignore-scripts

# Copy the rest of the source
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only necessary build artifacts and production dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm ci --omit=dev --ignore-scripts || npm install --production --ignore-scripts

COPY --from=build /app/build ./build
COPY --from=build /app/.svelte-kit ./.svelte-kit
COPY --from=build /app/static ./static

# SvelteKit adapter-node listens on PORT env; CapRover sets PORT

EXPOSE 3000

CMD ["node", "build"]
