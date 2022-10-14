import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default function (req: Request, res: Response, next: NextFunction) {
  // Get token from header
  const token = req.header('x-auth-token')

  // Check if not token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string)

    if (req.body.user) {
      req.body.user = decoded
    }

    next()
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}
