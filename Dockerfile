# Fase de build
FROM node:20-alpine AS builder

# Instala dependências do sistema necessárias para alguns pacotes npm
RUN apk add --no-cache python3 g++ make

WORKDIR /app
COPY package*.json ./

# Atualiza npm para a versão mais recente
RUN npm install -g npm@11.5.2

# Instala dependências ignorando conflitos de peer
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Fase de runtime
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
