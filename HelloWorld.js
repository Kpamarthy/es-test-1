// Import the built-in 'http' module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'}); // Set the response header
  res.end('Hello, world!'); // Send the response body
});

// Listen on port 3000 for incoming requests
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
