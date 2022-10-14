import { hash, genSalt, compare } from 'bcrypt'

/**
 * hashPassword - Hashes a password using bcrypt
 * @param {string} password - The password to be hashed
 * @returns Promise<string>
 */
export const hashPassword = async (password: string) =>
  await hash(password, await genSalt(10))

/**
 * verifyPassword - verifies a password using bcrypt
 * @param {string} password - The password to be hashed
 * @param {string} hash - The password hash to be hashed
 * @returns Promise<string>
 */
export const verifyPassword = async (password: string, hash: string) =>
  await compare(password, hash)
