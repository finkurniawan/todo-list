FROM node:16.19-alpine3.16

RUN mkdir app
WORKDIR /app

COPY . .
RUN yarn
CMD yarn sequelize-cli db:migrate
CMD yarn run start
EXPOSE 3000/tcp


ENV NODE_ENV=development
ENV DB_HOST_DATABASE=postgresql-backend
ENV DB_PORT=5432
ENV DB_PASSWORD=root
ENV DB_NAME=todo-list
ENV PORT=8002
ENV JWT_SECRET_KEY=skafjklasfklsasdajf
ENV DB_USER=postgres
