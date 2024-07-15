#!/usr/bin/env pwsh

# Stop and remove containers, networks, images, and volumes
docker-compose down

# Build, create, start, and attach to containers
docker-compose up -d --build