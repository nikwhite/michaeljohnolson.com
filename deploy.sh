#!/bin/bash
npm prune
npm update

bower prune
bower update

cp -f config/michaeljohnolson.com /etc/nginx/sites-enabled/

grunt prod 

service nginx reload