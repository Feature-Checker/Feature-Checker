FROM node as builder
RUN mkdir -p /app
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.14.2 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY privkey.pem /etc/nginx/privkey.pem
COPY cert.pem /etc/nginx/cert.pem
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
RUN chown nginx.nginx /usr/share/nginx/html/ -R