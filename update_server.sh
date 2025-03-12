#!/usr/bin/env sh

sudo -u flashmccards bash -c 'source /home/flashmccards/.nvm/nvm.sh && npm --prefix ./frontend run build'
sudo cp -r ./frontend/dist/ /var/www/html
sudo systemctl restart flashmccards
