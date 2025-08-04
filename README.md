# Hello, Node.js!

A minimal HTTP server listening on `localhost` port `3000`.

[![Test with Nodejs](https://github.com/ariya/hello-nodejs/actions/workflows/test-nodejs.yml/badge.svg)](https://github.com/ariya/hello-nodejs/actions/workflows/test-nodejs.yml)
[![Test with Bun](https://github.com/ariya/hello-nodejs/actions/workflows/test-bun.yml/badge.svg)](https://github.com/ariya/hello-nodejs/actions/workflows/test-bun.yml)
[![Test with Deno](https://github.com/ariya/hello-nodejs/actions/workflows/test-deno.yml/badge.svg)](https://github.com/ariya/hello-nodejs/actions/workflows/test-deno.yml)
[![Test with Podman](https://github.com/ariya/hello-nodejs/actions/workflows/test-podman.yml/badge.svg)](https://github.com/ariya/hello-nodejs/actions/workflows/test-podman.yml)
[![Test with Docker](https://github.com/ariya/hello-nodejs/actions/workflows/test-docker.yml/badge.svg)](https://github.com/ariya/hello-nodejs/actions/workflows/test-docker.yml)

Run with Node.js:
```
node index.js
```

Run with Bun:
```
bun index.js
```

Run with Deno:
```
deno --unstable-detect-cjs --allow-net --allow-env index.js
```

Run with Podman:
```
podman build -t hello-nodejs .
podman run -d -p 3000:3000 hello-nodejs
```

Run with Docker:
```
docker build -t hello-nodejs .
docker run -d -p 3000:3000 hello-nodejs
```
