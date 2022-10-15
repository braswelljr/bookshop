import { Router } from 'express'
import v1 from '@/routes/v1'

// declare a new router to include all the endpoints
const router = Router()

router.options('/', (req, res) => res.send('Hello from api'))

// add v1 route
router.use('/api', v1)

export default router
