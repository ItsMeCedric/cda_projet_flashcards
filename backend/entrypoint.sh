#!/usr/bin/env sh

echo "Running database migrations!"
npm migrate

echo "Running database seeds!"
npm seed

echo "Server starting..."
npm start
