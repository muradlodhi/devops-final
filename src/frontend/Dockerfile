FROM nginx:alpine
# Copy the static HTML and CSS files to the Nginx public serving folder
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]