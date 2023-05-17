FROM node:14.16.1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "dev"]