import { Router } from 'express'
import authentication from '@/routes/v1/authentication'

const v1 = Router()

// add version 1 routes
v1.use('/v1', authentication) // authentication

export default v1
