FROM node:9-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . ./

ENTRYPOINT ["yarn", "run"]
CMD ["start"]
