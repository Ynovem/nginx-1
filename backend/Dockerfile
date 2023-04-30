FROM node:lts-alpine

WORKDIR /app/server

COPY package*.json .
RUN npm ci
COPY . .

CMD ["node", "src/app.js"]
