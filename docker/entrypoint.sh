#!/bin/sh

echo "Starting get ready!!!"
yarn sequelize-cli db:migrate --url postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST_DATABASE}:${DB_PORT}/${DB_NAME}