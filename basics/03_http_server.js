var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    console.log('Hellooooo')
}).listen(8080);

console.log('Server running on port 8080.');