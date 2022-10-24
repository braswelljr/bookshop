import { Request, Response } from 'express'
import { db } from '@/database/database'

/**
 * LogoutController - clear user session
 * @param {Request} req - request object
 * @param {Response} res - response object
 *
 * @returns {void} - response object
 */
const LogoutController = (req: Request, res: Response): void => {
  const { id } = req.body

  // check if user exists
  db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
    if (err) {
      console.error(err.message)
      return res.status(500).json({
        status: 500,
        message: err.message
      })
    }

    // if user does not exist
    if (!row) {
      return res.status(404).json({
        status: 404,
        message: `User not found!`
      }) // not found
    }

    // if user exists
    db.run(
      `UPDATE users SET accessToken = ?, refreshToken = ? WHERE id = ?`,
      ['', '', id],
      err => {
        if (err) {
          console.error(err.message)
          return res.status(500).json({
            status: 500,
            message: err.message
          })
        }
      }
    )

    // return success
    return res.status(200).json({
      status: 200,
      message: `User logged out!`
    }) // ok
  })
}

export default LogoutController
