#!/usr/bin/env sh

source /home/flashmccards/.nvm/nvm.sh
sudo -u flashmccards npm --prefix ./frontend run build
sudo cp -r ./frontend/dist/ /var/www/html
sudo systemctl restart flashmccards
