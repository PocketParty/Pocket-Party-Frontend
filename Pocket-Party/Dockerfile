# Usar uma imagem do Node.js como base
FROM node:16-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para o container
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação para o container
COPY . .

# Build da aplicação Angular
RUN npm run build

# Expor a porta em que o servidor irá rodar
EXPOSE 3030

# Iniciar o servidor
CMD ["npm", "start"]
