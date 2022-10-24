import { Router } from 'express'
import SignUpController from '@/controller/v1/authentication/signup'
import LoginController from '@/controller/v1/authentication/login'
import LogoutController from '@/controller/v1/authentication/logout'

const authentication = Router()

// authentication routes
// POST /api/v1/signup
authentication.post('/signup', (req, res) => SignUpController(req, res))
// POST /api/v1/login
authentication.post('/login', (req, res) => LoginController(req, res))
// POST /api/v1/logout
authentication.post('/logout', (req, res) => LogoutController(req, res))

export default authentication
