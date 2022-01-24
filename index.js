const http = require('http');

const server = http.createServer()

server.on('request', (req, res) => {
  setTimeout(() => {
    res.write('Hello World')
    res.end()
  }, 1500);
})

server.listen(8080, () => {
  console.log('server is running')
})
