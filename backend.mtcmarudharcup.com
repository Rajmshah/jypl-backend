server {
       listen 80;
       server_name backend.mtcmarudharcup.com;
       location / {
               root /home/projects/mtc-backend/dist;
               index index.html index.htm;
               try_files $uri $uri/ /index.html =404;
       }
}