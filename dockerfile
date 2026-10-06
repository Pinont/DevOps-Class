FROM node:24

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]