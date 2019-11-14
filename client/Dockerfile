FROM node:alpine as builder
WORKDIR /app
RUN npm i -g @vue/cli-service
COPY ./package.json ./
RUN npm install --only-prod
COPY . .
RUN npm run build

FROM nginx
EXPOSE 8080
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html 
