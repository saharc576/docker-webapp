FROM node:alpine

WORKDIR /use/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]