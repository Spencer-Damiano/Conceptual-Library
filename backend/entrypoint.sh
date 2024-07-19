#!/bin/sh

# Apply Flyway migrations
flyway -url=jdbc:postgresql://$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB -schemas=public -user=$POSTGRES_USER -password=$POSTGRES_PASSWORD migrate

# Start the application
dotnet backend.dll
