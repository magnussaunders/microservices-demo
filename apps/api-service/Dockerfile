FROM node:16-alpine as build
WORKDIR /app
RUN npm i -g @nestjs/cli
COPY tsconfig*.json ./
COPY package*.json ./
RUN npm ci
COPY /apps/api-service/src ./src
RUN nest build api-service

FROM node:16-alpine as serve
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY --from=build /app/dist ./dist/
EXPOSE 3000
CMD ["node", "dist/main.js"]