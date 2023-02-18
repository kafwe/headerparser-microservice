FROM node:16

WORKDIR /headerparser-microservice

COPY package.json ./
RUN npm install
COPY . .

CMD [ "npm", "start" ]