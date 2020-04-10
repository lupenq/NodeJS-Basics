const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)

  res.write('Hello from NodeJs')
  res.end()
})

server.listen(3001, () => {
  console.log('Server is running...')
})