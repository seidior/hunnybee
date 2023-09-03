FROM node:alpine AS build

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

ADD . .
RUN pnpm build -- --mode custom

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
