FROM node:15.2-alpine3.12


COPY . /home/node/app
WORKDIR /home/node/app

RUN yarn
RUN yarn build

RUN chown -R node:node /home/node/app/*
USER node

CMD ["/bin/sh", "-c", "yarn start"]
