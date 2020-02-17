FROM node:12-alpine

WORKDIR /home/backend

EXPOSE 3001

COPY ./yarn.lock .
COPY ./package.json .
COPY ./.sequelizerc .

# dockerize https://github.com/jwilder/dockerize
ENV DOCKERIZE_VERSION v0.5.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN yarn install && \
    yarn cache clean --force

COPY . .

RUN chmod +x ./start.sh

# dockerize Wait for other services to be available using TCP, HTTP(S), unix before starting the main process.
CMD dockerize -wait tcp://db:3306 -timeout 2m ./start.sh