FROM node:20-bullseye-slim

RUN apt-get update --fix-missing && \
    apt-get install -y --no-install-recommends \
    git ffmpeg imagemagick webp curl ca-certificates && \
    rm -rf /var/lib/apt/lists/*

RUN git config --global url."https://".insteadOf ssh:// && \
    git config --global http.sslVerify false && \
    npm config set strict-ssl false

WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps --ignore-scripts

COPY . .

RUN mkdir -p session

EXPOSE 8000

CMD ["node", "index.js"]
