## Goran

Streaming Service

## Microservices:

- Api Gateway
- Security
- File Service
- Playlist service
- Web Interface

## How to Run locally

1. Start a mongodb database server for Security service

```sh
cd security/database
docker-compose up
```

2. start security service
```sh
cd security/
yarn start
```

3. start file service
```sh
cd file-service/
yarn start
```

4. start playlist service
```sh
cd playlist-service/
yarn start
```

5. start the web interface
```sh
cd ui/
yarn start
```

6. start the gateway service

```sh
cd gateway/
yarn start
```

7. navigate to http://localhost:8080

use `admin` for user and password.
