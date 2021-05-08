FROM        node:14.16.1-alpine

LABEL       author="Ricardo Sifontes"

ENV         PORT=4000

WORKDIR     /var/www/

COPY        package*.json ./

RUN         npm install

COPY        . ./

EXPOSE      $PORT

ENTRYPOINT  ["npm","start"]