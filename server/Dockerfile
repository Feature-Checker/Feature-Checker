FROM node:lts-alpine
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server
<<<<<<< HEAD
COPY package*.json /usr/src/server
RUN npm install
=======
COPY package*.json /usr/src/server/
RUN npm install
RUN npm install -g nodemon
>>>>>>> 254fab09b16223fa5fc1b3d474c875eea015ea07
COPY . /usr/src/server/
EXPOSE 5000
CMD ["npm", "start"]
