# Stage 1: Build
FROM node:22-alpine AS build

# Required for some Node packages
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the codebase
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Production
FROM node:22-alpine AS production

# Again, ensure required runtime dependencies exist
RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV=production

# Copy built output from previous stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules



EXPOSE 3000


CMD ["npm", "start"]
