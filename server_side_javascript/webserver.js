// 웹 서버를 만드는 역할
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 위와 같음
var server = http.createServer(function(req, res){
  res.writeHead('Hello World\n');
});
server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});