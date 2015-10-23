FROM node:latest
EXPOSE 8080
EXPOSE 80
RUN npm install -g typescript ts-node mocha
RUN mkdir /nodets
WORKDIR /nodets