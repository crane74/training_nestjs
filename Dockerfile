FROM node:lts-bullseye

WORKDIR /usr/src/app

RUN apt update && apt upgrade -y

# npmのアップデート
RUN npm install -g npm && npm install -g @nestjs/cli