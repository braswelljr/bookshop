import { Router } from 'express'
import authentication from '@/routes/v1/authentication'
import books from '@/routes/v1/books'

const v1 = Router()

// add version 1 routes
v1.use('/v1', authentication) // authentication
v1.use('/v1', books) // books

export default v1
