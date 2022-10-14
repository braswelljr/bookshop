import jwt from 'jsonwebtoken'

export const createToken = (user: any) => {
  // ret
  if (!user) return null

  return jwt.sign(user, process.env.JWT_SECRET as string, {
    expiresIn: '1d'
  })
}

export const verifyToken = (token: string) => {
  // check if token is valid
  if (!token) return null

  return jwt.verify(token, process.env.JWT_SECRET as string)
}

export const createRefreshToken = (user: any) => {
  // return
  if (!user) return null

  return jwt.sign(user, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: '7d'
  })
}
