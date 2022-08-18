FROM node:lts-alpine
COPY . .
ARG DB_HOST_DATABASE
ARG DB_PORT
ARG DB_USER
ARG DB_NAME
ARG DB_PASSWORD
#RUN chmod 755 entrypoint.sh
RUN echo $DB_HOST_DATABASE && \
    yarn
CMD ["yarn", "start"]
EXPOSE 8400
