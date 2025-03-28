const http = require('http');

const serve = async (port, hostname = '127.0.0.1') => {
  const server = http.createServer(async (request, response) => {
    const { url } = request;
    if (url === '/' || url === '/index.html') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end('<h1>Hello, Node.js!</h1>');
    } else if (url === '/health') {
      response.writeHead(200).end(`OK ${Date.now()}`);
    } else {
      console.error(`${url} is 404!`);
      response.writeHead(404);
      response.end();
    }
  });

  server.listen(port);
  console.log('Listening on', hostname, 'port', port);
};

(async () => {
  const port = process.env.PORT || 3000;
  await serve(port);
})();
