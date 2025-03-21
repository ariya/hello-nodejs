const http = require('http');

const serve = async (port, hostname = '127.0.0.1') => {
  const server = http.createServer(async (request, response) => {
    const { url } = request;
    if (url === '/' || url === '/index.html') {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end('<h1>Hello, Node.js!</h1>');
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
  await serve(3000);
})();
