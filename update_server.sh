#!/usr/bin/env sh

sudo docker compose down
sudo docker compose build
sudo docker compose up -d
