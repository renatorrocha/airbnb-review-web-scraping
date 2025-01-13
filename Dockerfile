FROM oven/bun:1.0.35

# Instala as dependências necessárias para o Playwright
RUN apt-get update && apt-get install -y \
    wget \
    gnupg \
    libgconf-2-4 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxkbcommon0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libpango-1.0-0 \
    libcairo2 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copia os arquivos de configuração
COPY package.json bun.lockb ./

# Instala as dependências
RUN bun install

# Copia o resto dos arquivos
COPY . .

# Instala os browsers necessários para o Playwright
RUN bunx playwright install chromium

# Expõe a porta 3000 (conforme definido no src/index.ts)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["bun", "run", "dev"] 