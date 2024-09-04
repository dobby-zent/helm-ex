ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-alpine
WORKDIR /usr/src/app

COPY package*.json .
RUN npm ci --omit=dev
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD node index.js
