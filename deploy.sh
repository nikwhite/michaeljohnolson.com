#!/bin/bash
npm prune
npm update

bower prune --allow-root
bower update --allow-root

cp -f config/michaeljohnolson.com /etc/nginx/sites-enabled/

grunt

service nginx reload