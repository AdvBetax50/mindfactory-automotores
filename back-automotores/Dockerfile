FROM node:22-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env ./.env

EXPOSE 3000

CMD ["node", "dist/main.js"]
