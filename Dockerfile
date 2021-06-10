FROM node:10.15.0-stretch

RUN npm install --global @vue/cli

WORKDIR /projects