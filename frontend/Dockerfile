# ---- Build Stage ----
# Start from the official Node image to build the app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY public ./public
COPY src ./src
COPY index.html .
COPY vite.config.ts .
COPY tsconfig.json .


# Build the Vite site (generates a /dist folder)
RUN npm run build

# ---- Production Stage ----
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built site to nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
