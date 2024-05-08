FROM node:20

WORKDIR /app

# Copy package.json and lock files for both server and client
COPY package*.json ./
#COPY server/package*.json ./server/
#COPY client/package*.json ./client/

# Install all dependencies for both server and client
RUN npm install

# Copy server and client source
COPY public ./public/

# Build the client application
RUN npm run build

CMD ["npm", "start"]