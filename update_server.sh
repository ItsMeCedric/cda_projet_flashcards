#!/usr/bin/env sh

sudo -u flashmccards bash -c 'source /home/flashmccards/.nvm/nvm.sh && NODE_ENV=production npm --prefix ./frontend run build'
sudo cp -r ./frontend/dist/* /var/www/html
NODE_ENV=production npm --prefix ./backend run migrate && NODE_ENV=production npm --prefix ./backend run seed
sudo systemctl restart flashmccards
