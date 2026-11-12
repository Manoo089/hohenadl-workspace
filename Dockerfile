FROM node:22-bookworm-slim

ENV NEXT_TELEMETRY_DISABLED=1 \
    TURBO_TELEMETRY_DISABLED=1 \
    CI=true

RUN npm install -g pnpm@12.18.0 && pnpm -v

WORKDIR /app
COPY . .

RUN pnpm install --frozen-lockfile

ARG SITE_URL
ARG SITE_TITLE
ARG SITE_DESCRIPTION
ARG SITE_LOCALE
ENV SITE_URL=$SITE_URL \
    SITE_TITLE=$SITE_TITLE \
    SITE_DESCRIPTION=$SITE_DESCRIPTION \
    SITE_LOCALE=$SITE_LOCALE

RUN pnpm build:portfolio

ENV NODE_ENV=production \
    PORT=3000
EXPOSE 3000

CMD ["pnpm", "--filter", "portfolio", "start"]