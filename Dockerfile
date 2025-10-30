# Imagen base de Node.js (más ligera que instalar Node en Alpine)
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar la cache de Docker)
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto (si usas un servidor, por ejemplo Express)
EXPOSE 3000

# Comando por defecto al ejecutar el contenedor
CMD ["node", "app.js"]
