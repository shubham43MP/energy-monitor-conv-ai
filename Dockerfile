# Use Node.js 22
FROM node:22

# Enable and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package manager files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Expose the port your AI service runs on (change if needed)
EXPOSE 3020

# Run the app
CMD ["pnpm", "dev"]
