import express from 'express'
import SignUp from '@/controller/authentication/signup'
import Login from '@/controller/authentication/login'

// declare a new router to include all the endpoints
const router = express.Router()

router.options('/', (req, res) => res.send('Hello from api'))

// authentication routes
router.post('/api/signup', (req, res) => SignUp(req, res))
router.post('/api/login', (req, res) => Login(req, res))

export default router
