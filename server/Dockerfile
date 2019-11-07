FROM node:lts-alpine
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
COPY package*.json /usr/src/server
RUN npm install
COPY . /usr/src/server/
EXPOSE 5000
CMD ["npm", "start"]
