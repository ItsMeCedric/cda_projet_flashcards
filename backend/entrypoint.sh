#!/usr/bin/env sh

echo "Running database migrations!"
npm run migrate

echo "Running database seeds!"
npm run seed

echo "Server starting..."
npm start
