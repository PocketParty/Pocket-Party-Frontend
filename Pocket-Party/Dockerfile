# Usar uma imagem do Node.js como base
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json para o container
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação para o container
COPY . .

# Expor a porta em que o servidor irá rodar
EXPOSE 4200


CMD ["npm", "start", "--", "--host", "0.0.0.0"]
