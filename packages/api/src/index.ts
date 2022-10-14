import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

const app = express()
const port = 4000

// logging
app.use(morgan('dev'))

// support application/json type post data
app.use(express.json())
// create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.sendStatus(200).json({})
  }

  next()
})

app.get('/', (req, res) => {
  res.send('Hello from api')
})

// error handler
app.use((req, res) => {
  // set locals, only providing error in development
  const err = new Error('Not Found')
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.sendStatus(500)
  res.render('error')
})

app.listen(port, () => {
  console.log(`api listening at http://localhost:${port}`)
})
