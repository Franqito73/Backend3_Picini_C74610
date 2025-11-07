# Imagen base de node
FROM node:alpine

# Directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock 
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto de los archivos del proyecto
COPY ./src .

# Exponemos el puerto para la app
EXPOSE 8080

# Comando que se jecutará al iniciar el contenedor
CMD ["npm", "run", "dev"]
