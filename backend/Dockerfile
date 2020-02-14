FROM node:12-alpine

WORKDIR /home/backend

# Installing dependencies
COPY ./yarn.lock .
COPY ./package.json .
COPY ./.sequelizerc .

ENV DOCKERIZE_VERSION v0.5.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN yarn install && \
    yarn cache clean --force

ENV NODE_ENV="development"

COPY . .

# Expose ports 
EXPOSE 3001

# Start the app
CMD dockerize -wait tcp://db:3306 -timeout 1m && npx sequelize db:migrate && npm start