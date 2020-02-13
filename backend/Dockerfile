FROM node:12-alpine

WORKDIR /home/backend

# Installing dependencies
COPY "./yarn.lock" .
COPY "./package.json" .

RUN yarn install && \
    yarn cache clean --force

COPY . .

# Expose ports 
EXPOSE 3001

# Start the app
CMD npm start