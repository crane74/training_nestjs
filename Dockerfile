FROM node:lts-bullseye

WORKDIR /usr/src/app

RUN apt update && apt upgrade -y

# update npm
RUN npm install -g npm && npm install -g @nestjs/cli

# install starship
RUN curl -sS https://starship.rs/install.sh | sh -s -- --yes && \
    echo eval "$(starship init bash)" >> ~/.bashrc