# /app /usr /lib
FROM node:21-alpine3.18

# cd app
WORKDIR /app

# COPY source dest  #Dest /app
COPY app.js package.json ./

# Install package
RUN npm install

# add test
COPY . .

# Run test
RUN npm run test

# Deleting files innecessary from production
RUN rm -rf tests && rm -rf node_modules

# Only install of production
RUN npm install --prod

# Comand run the image
CMD [ "node","app.js" ]