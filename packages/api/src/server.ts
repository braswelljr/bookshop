import http from 'http'
import app from '@/app'

const PORT = 5000
const hostname = '127.0.0.1'

const server = http.createServer(app)

server.listen(PORT, hostname, () =>
  console.log(`Server started at http://${hostname}:${PORT}`)
)

server.on('error', (error: any) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'PORT ' + PORT

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})
