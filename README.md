# 🎮 GamingZone - E-Commerce Microservices Platform

## 📋 Project Vision

GamingZone is a modern, scalable e-commerce platform built with microservices architecture, designed specifically for gaming products. The platform leverages cutting-edge technologies to deliver high performance, reliability, and maintainability.

## 🏗️ Architecture Overview

### Microservices Structure

- **API Gateway** (Port: 42100) - GraphQL unified entry point
- **Auth Service** (Port: 42110) - Authentication, authorization, RBAC
- **Catalog Service** (Port: 42120) - Product management, categories, promotions
- **Inventory Service** (Port: 42130) - Stock management, reservations
- **Order Service** (Port: 42140) - Order processing, cart management
- **Payment Service** (Port: 42150) - Payment processing, Stripe integration
- **Notification Service** (Port: 42160) - Email, WebSocket notifications

### Technology Stack

- **Framework**: NestJS (Node.js)
- **Monorepo**: Nx Workspace
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis
- **Message Broker**: RabbitMQ
- **API**: GraphQL (Gateway) + REST + gRPC
- **Container**: Docker + Kubernetes
- **CI/CD**: Jenkins

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+
- RabbitMQ 3.12+

### Installation

```bash
# Install dependencies
npm install

# Run all services in development
nx run-many --target=serve --all

# Build all services
nx run-many --target=build --all

# Run tests
nx run-many --target=test --all

# Lint all projects
nx run-many --target=lint --all
```

## 📁 Project Structure

```
gamingzone/
├── apps/                    # Microservices applications
│   ├── api-gateway/        # GraphQL Gateway
│   ├── auth-service/       # Authentication & Authorization
│   ├── catalog-service/    # Product Catalog
│   ├── inventory-service/  # Inventory Management
│   ├── order-service/      # Order Processing
│   ├── payment-service/    # Payment Integration
│   └── notification-service/ # Notifications
├── libs/                    # Shared libraries
│   ├── shared/             # Common utilities, DTOs, decorators
│   ├── events/             # Event definitions
│   └── config/             # Shared configurations
├── devops/                  # DevOps configurations
│   ├── docker/             # Docker files
│   ├── kubernetes/         # K8s manifests
│   └── jenkins/            # CI/CD pipelines
└── docs/                    # Documentation
```

## 🔧 Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `staging` - Pre-production testing
- `develop` - Integration branch
- `feature/*` - Feature development
- `bugfix/*` - Bug fixes
- `hotfix/*` - Production hotfixes

### Commit Convention

```
GZ-XXX: Brief description

Detailed explanation of changes
```

## 📊 Key Features

- ✅ Event-driven architecture with RabbitMQ
- ✅ CQRS pattern for scalability
- ✅ Redis caching for performance
- ✅ JWT-based authentication
- ✅ Dynamic RBAC system
- ✅ Real-time notifications via WebSocket
- ✅ Distributed transactions with Saga pattern
- ✅ Comprehensive error handling
- ✅ API rate limiting
- ✅ Request logging and monitoring

## 🧪 Testing

```bash
# Unit tests
nx test <service-name>

# E2E tests
nx e2e <service-name>-e2e

# Test coverage
nx test <service-name> --coverage
```

## 📦 Deployment

```bash
# Build Docker images
docker-compose build

# Start all services
docker-compose up -d

# Deploy to Kubernetes
kubectl apply -f devops/kubernetes/
```

## 📝 License

MIT

## 👥 Team

GamingZone Development Team

---

**Built with ❤️ using NestJS and Nx**
