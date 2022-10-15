import { Request, Response } from 'express'
import { db } from '@/database/database'
import { createToken } from '@/utils/tokens'
import { verifyPassword } from '@/utils/hashPassword'

/**
 * Login - add user session
 * @param {Request} req - request object
 * @param {Response} res - response object
 *
 * @returns {void} - response object
 */
const Login = (req: Request, res: Response): void => {
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
    verifyPassword(password, hashedPassword)
      .then(value => {
        // if password is invalid
        if (!value) {
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
        const accessToken = createToken(user, {
          expiresIn: '1d'
        })
        const refreshToken = createToken(user, {
          expiresIn: '7d'
        })

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
      .catch(err => {
        console.error(err.message)
        return res.status(500).json({
          status: 500,
          message: err.message
        })
      })
  })
}

export default Login
