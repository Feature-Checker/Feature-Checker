FROM node:lts-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
<<<<<<< HEAD
COPY package*.json /usr/src/app
=======
COPY package*.json /usr/src/app/
>>>>>>> 254fab09b16223fa5fc1b3d474c875eea015ea07
RUN npm install
COPY . /usr/src/app/
EXPOSE 8080
CMD ["npm", "run", "serve"]
