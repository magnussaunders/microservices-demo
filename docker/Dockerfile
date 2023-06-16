FROM node:16-alpine as build
WORKDIR /app
COPY tsconfig*.json ./
COPY package*.json ./
RUN npm i
COPY src/ src/
RUN npm run build

FROM node:16-alpine as serve
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY --from=build /app/dist ./dist/
EXPOSE 5000
CMD ["node", "dist/main.js"]