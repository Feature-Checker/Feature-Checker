FROM node:lts-alpine
RUN mkdir -p /server
WORKDIR /server
COPY package*.json /server/
RUN npm install
COPY . /server/
EXPOSE 5000
RUN ls -la
CMD ["npm", "start"]
