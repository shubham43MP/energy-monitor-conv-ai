# 🧠 AI Service

This is the **AI microservice** for the Smart Home Energy Monitoring system. It handles conversational AI logic and runs independently without a database.

---

## 📦 Environment Setup

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Then update the `.env` file with your actual values:

```env
PORT=3013
JWT_SECRET=mysecretkey
OPENAI_API_KEY=your-openai-api-key
```

---

## 🧪 Local Development

Ensure [`pnpm`](https://pnpm.io/installation) is installed globally. Then run:

```bash
pnpm install
pnpm dev
```

This starts the server with `nodemon` using:

```bash
ts-node src/server.ts
```

---

## 🐳 Docker Deployment

### Step 1: Build the Docker Image

```bash
docker build -t ai-service .
```

### Step 2: Run the Container

```bash
docker run -p 3013:3013 --env-file .env ai-service
```

> 🔐 Make sure `.env` is present and correct before running the container.

---

## ✅ Health Check

You can test if the service is running with:

```bash
curl http://localhost:3013/api/health
```

---

## 🔁 Notes

- No Postgres or Prisma is required for this service.
- You do **not** need Docker Compose for this service.
- Exposes port **3013**.
