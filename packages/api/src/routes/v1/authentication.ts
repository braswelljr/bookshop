import { Router } from 'express'
import SignUp from '@/controller/v1/authentication/signup'
import Login from '@/controller/v1/authentication/login'
import Logout from '@/controller/v1/authentication/logout'

const authentication = Router()

// authentication routes
// POST /api/v1/signup
authentication.post('/signup', (req, res) => SignUp(req, res))
// POST /api/v1/login
authentication.post('/login', (req, res) => Login(req, res))
// POST /api/v1/logout
authentication.post('/logout', (req, res) => Logout(req, res))

export default authentication
