FROM node:0.12.7
EXPOSE 8080
EXPOSE 80
RUN npm install -g mocha gulp
RUN mkdir /nodets
WORKDIR /nodets