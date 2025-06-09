FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/web/package*.json ./apps/web/

# Install dependencies
RUN npm install
RUN cd apps/web && npm ci

# Copy source code
COPY . .

# Build the application
RUN cd apps/web && npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["sh", "-c", "cd apps/web && npm start"]