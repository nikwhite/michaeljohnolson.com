server {
	listen 80;
	server_name michaeljohnolson.com www.michaeljohnolson.com;
	access_log /var/log/nginx/michaeljohnolson.log;
	
	location / {
		root /data/www/michaeljohnolson.com/dist;
    }
}