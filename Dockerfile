#Estágio de build
FROM node:16.10 AS builder
WORKDIR /usr/local/app
COPY ./package.json /usr/local/app
COPY ./yarn.lock /usr/local/app
RUN yarn install
#Instala os pacotes após copiar o package.json para otimizar o uso do cache
COPY ./ /usr/local/app
RUN yarn run build

#Estágio exectução
FROM nginx:latest
COPY --from=builder /usr/local/app/dist/climb4life /usr/share/nginx/html
EXPOSE 80