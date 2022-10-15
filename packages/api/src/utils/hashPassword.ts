import { hash, compare } from 'bcrypt'

/**
 * hashPassword - Hashes a password using bcrypt
 * @param {string} password - The password to be hashed
 * @returns {Promise<string>} - The hashed password
 */
export const hashPassword = async (password: string): Promise<string> =>
  await hash(password, 10)

/**
 * verifyPassword - verifies a password using bcrypt
 * @param {string} password - The password to be hashed
 * @param {string} hash - The password hash to be hashed
 * @returns {Promise<boolean>} - The verification result
 */
export const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => await compare(password, hash)
