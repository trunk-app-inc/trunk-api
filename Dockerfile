FROM node:11

WORKDIR /usr/src/app

#copy package.json to working dir in container
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ['npm', 'start']

