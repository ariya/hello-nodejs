# Hello, Node.js!

A minimal HTTP server listening on `localhost` port `3000`.

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
