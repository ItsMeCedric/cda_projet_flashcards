# Development env

start dev db:
`docker run --rm -e POSTGRES_DB=flashmccards_dev -e POSTGRES_PASSWORD=12345 -p 5432:5432 postgres:alpine`

start backend:
`npm start`
