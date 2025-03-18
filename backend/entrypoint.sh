#!/usr/bin/env sh

echo "Running database migrations!"
npx sequelize db:migrate

echo "Running database seeds!"
npx sequelize db:seed:all

echo "Server starting..."
npx tsx src/index.ts
