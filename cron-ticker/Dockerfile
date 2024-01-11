# /app /usr /lib
FROM node:21-alpine3.18

# cd app
WORKDIR /app

# COPY source dest  #Dest /app
COPY app.js package.json ./

# Install package
RUN npm install

# Comand run the image
CMD [ "node","app.js" ]