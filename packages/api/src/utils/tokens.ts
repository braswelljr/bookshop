import { JwtPayload, sign, verify, SignOptions } from 'jsonwebtoken'

/**
 * createToken - create token from user details or object
 * @param {any} user - user details to be encoded
 * @param {SignOptions} signOptions - JWT signOptions
 * @returns {string | null}
 */
export const createToken = (
  user: any,
  signOptions: SignOptions = {}
): string | null => {
  // ret
  if (!user) return null

  return sign(user, process.env.JWT_SECRET as string, signOptions)
}

/**
 * verifyToken - verify signed token
 * @param {string} token - jwt token to be decoded
 * @returns {JwtPayload | null | string}
 */
export const verifyToken = (token: string): JwtPayload | null | string => {
  // check if token is valid
  if (!token) return null

  return verify(token, process.env.JWT_SECRET as string)
}
