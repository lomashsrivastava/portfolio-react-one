# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Production Stage
FROM node:20-alpine

WORKDIR /app

# Install 'serve' globally to host static files
RUN npm install -g serve

# Copy built assets from build stage
COPY --from=build /app/dist ./dist

# Expose the serving port
EXPOSE 3000

# Start serving the application
# Using -s flag for SPA routing support
CMD ["serve", "-s", "dist", "-l", "3000"]
