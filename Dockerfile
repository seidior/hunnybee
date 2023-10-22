FROM oven/bun:alpine AS build

RUN apk add nodejs

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

ADD . .
RUN bun run build

FROM caddy:latest

ENV LANG=C.UTF-8
EXPOSE 80
HEALTHCHECK CMD curl --fail http://127.0.0.1/ || exit 1

LABEL org.opencontainers.image.source="https://github.com/hunnybee-website/hunnybee-ca"
LABEL org.opencontainers.image.description="hunnybee.ca"
LABEL org.opencontainers.image.licenses=MIT

RUN apk add curl wget bind-tools

COPY ./Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv/www/hunnybee
