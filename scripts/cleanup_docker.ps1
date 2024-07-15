# To run this script, open a PowerShell terminal and run the following command:
# .\scripts\cleanup_docker.ps1

# Stop all running containers
docker stop $(docker ps -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all unused images
docker image prune -a -f

# Remove all unused networks
docker network prune -f

# Remove all unused volumes
docker volume prune -f

# Remove all unused build cache
docker builder prune -f

Write-Host "Docker cleanup complete."