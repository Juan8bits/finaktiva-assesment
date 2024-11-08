# Dockerfile para Frontend
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

COPY package*.json ./

# Instalar las dependencias
RUN npm install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Ejecutar la compilación para producción
RUN npm run build


FROM node:18 AS production

# Establecer el directorio de trabajo
WORKDIR /app

COPY --from=build /app /app


EXPOSE 3000

CMD ["npm", "start"]
