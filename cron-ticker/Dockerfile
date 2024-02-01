# Dependencies development
FROM node:21-alpine3.18 as deps
# cd app
WORKDIR /app
# COPY source dest  #Dest /app
COPY package.json ./
# Install package
RUN npm install

# Build and test
FROM node:21-alpine3.18 as builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run test
# for building production
# RUN npm run build

# Dependencies for production
FROM node:21-alpine3.18 as prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


FROM node:21-alpine3.18 as runner
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
# Comand run the image
CMD [ "node","app.js" ]