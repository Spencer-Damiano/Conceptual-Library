# Stage 1: Build and publish the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["backend/backend.csproj", "backend/"]
RUN dotnet restore "backend/backend.csproj"
COPY . .
WORKDIR "/src/backend"
RUN dotnet build "backend.csproj" -c Release -o /app/build
RUN dotnet publish "backend.csproj" -c Release -o /app/publish

# Stage 2: Build a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .

# Install Flyway
RUN apt-get update && apt-get install -y wget unzip
RUN wget -qO- https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/8.5.4/flyway-commandline-8.5.4-linux-x64.tar.gz | tar xvz -C /usr/local
ENV PATH="/usr/local/flyway-8.5.4:/usr/local/flyway-8.5.4/flyway:${PATH}"

# Copy entrypoint.sh to the /app directory
COPY backend/entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]
