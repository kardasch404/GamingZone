# GamingZone

E-commerce platform for gaming products.

## Setup

```bash
npm install
```

## Docker Infrastructure

Start all services:
```bash
docker-compose up -d
```

Stop all services:
```bash
docker-compose down
```

Services:
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`
- RabbitMQ: `localhost:5672` (Management UI: `localhost:15672`)
