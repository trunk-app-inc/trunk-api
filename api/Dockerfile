FROM node:10

WORKDIR /usr/src

COPY package.json ./

RUN npm install

COPY . /usr/src

EXPOSE 3001

CMD ["npm", "start"]