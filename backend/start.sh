#!/bin/sh

# Run all migrations
npx sequelize db:migrate;
# Star the application
npm start
