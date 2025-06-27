FROM node:22.16.0-alpine AS base
WORKDIR /usr/src/wpp-server

# Install build dependencies for Alpine
RUN apk update && \
    apk add --no-cache \
    vips-dev \
    fftw-dev \
    gcc \
    g++ \
    make \
    libc6-compat \
    python3 \
    py3-pip \
    && rm -rf /var/cache/apk/*

ENV NODE_ENV=production PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY package.json ./

RUN yarn install --production --pure-lockfile --ignore-engines && \
    yarn add sharp --ignore-engines && \
    yarn cache clean

FROM base AS build
WORKDIR /usr/src/wpp-server
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
COPY package.json  ./
RUN yarn install --production=false --pure-lockfile --ignore-engines
RUN yarn cache clean
COPY . .
RUN yarn build

FROM base
WORKDIR /usr/src/wpp-server/

# Install Google Chrome for Alpine
RUN apk add --no-cache \
    chromium \
    chromium-chromedriver \
    && rm -rf /var/cache/apk/*

# Create a symlink for chrome binary (Puppeteer compatibility)
RUN ln -sf /usr/bin/chromium-browser /usr/bin/google-chrome

RUN yarn cache clean
COPY . .
COPY --from=build /usr/src/wpp-server/ /usr/src/wpp-server/
EXPOSE 21465
ENTRYPOINT ["node", "dist/server.js"]
