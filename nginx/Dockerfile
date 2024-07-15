FROM nginx:latest

# Create the directory for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Generate self-signed SSL certificates
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/ssl/selfsigned.key \
    -out /etc/nginx/ssl/selfsigned.crt \
    -subj "/CN=conceptual.library"

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the ports Nginx is running on
EXPOSE 80
EXPOSE 443

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
