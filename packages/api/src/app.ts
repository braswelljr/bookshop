import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import DatabaseInit from '@/database/database'
import router from '@/routes/routes'

const app = express()

// log requests to the console
app.use(logger('dev'))
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

// enable cors
app.use(cors())

// initialize database
DatabaseInit()

// add router
app.use(router)

// catch 404 and forward to error handler
app.use((req, res) => res.sendStatus(404))

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

export default app
