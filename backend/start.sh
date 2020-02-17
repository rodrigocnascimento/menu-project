#!/bin/sh

# Run all migrations
npx sequelize db:migrate;
# Run all seeds
npx sequelize-cli db:seed:all;
# Star the application
npm start
