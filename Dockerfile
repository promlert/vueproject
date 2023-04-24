FROM node:latest

WORKDIR /vueproject
COPY package*.json ./
RUN npm install --production

COPY . .

CMD ["npm", "run", "serve"]