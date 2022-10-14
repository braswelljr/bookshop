import { Request, Response } from 'express'
import { db } from '@/database/database'
import { createToken, createRefreshToken } from '@/utils/tokens'
import { verifyPassword } from '@/utils/hashPassword'

/**
 * Login
 * @param req
 * @param res
 */
const Login = (req: Request, res: Response) => {
  const { email, password } = req.body

  // check if email is available
  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
    if (err) {
      console.error(err.message)
      return res.status(500).json({
        status: 500,
        message: err.message
      })
    }

    // if email is not found
    if (!row) {
      return res.status(404).json({
        status: 404,
        message: `User not found!`
      }) // not found
    }

    // if email is found
    const {
      id,
      email,
      password: hashedPassword,
      firstname,
      lastname,
      username
    } = row

    // verify password
    const isPasswordValid = verifyPassword(password, hashedPassword)

    // if password is invalid
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 401,
        message: `Invalid password!`
      }) // unauthorized
    }

    // if password is valid
    const user = {
      id,
      email,
      password: hashedPassword,
      firstname,
      lastname,
      username
    }

    // create tokens
    const accessToken = createToken(user)
    const refreshToken = createRefreshToken(user)

    // update tokens
    db.run(
      `UPDATE users SET accessToken = ?, refreshToken = ? WHERE id = ?`,
      [accessToken, refreshToken, id],
      err => {
        if (err) {
          console.error(err.message)
          return res.status(500).json({
            status: 500,
            message: err.message
          })
        }

        return res.status(200).json({
          status: 200,
          message: `User logged in!`,
          accessToken,
          refreshToken
        })
      }
    )
  })
}

export default Login
