FROM node:alpine

WORKDIR /app

COPY ./package.json ./
COPY ./entrypoint.sh ./

RUN npm i

COPY src/ ./src/
COPY models/ ./models/
COPY config/ ./config/
COPY migrations/ ./migrations/

ENTRYPOINT [ "./entrypoint.sh" ]
