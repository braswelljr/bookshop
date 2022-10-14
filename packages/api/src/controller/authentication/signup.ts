import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/database/database'
import { createToken, createRefreshToken } from '@/utils/tokens'
import { hashPassword } from '@/utils/hashPassword'

const SignUp = (req: Request, res: Response) => {
  const { email, password, firstname, lastname, username } = req.body

  // check if email is already in use
  db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
    if (err) {
      console.error(err.message)
      return res.status(500).json({
        status: 500,
        message: err.message
      })
    }

    // if email is already in use
    if (row) {
      return res.status(409).json({
        status: 409,
        message: `User already exists!`
      }) // conflict - email already in use
    }

    // create a new user
    const id = uuidv4()
    const createdAt = new Date().toISOString()
    const updatedAt = new Date().toISOString()

    // hash the password
    const hashedPassword = hashPassword(password)

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

    db.run(
      `INSERT INTO users (id, email, password, firstname, lastname, username, accessToken, refreshToken, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        email,
        hashedPassword,
        firstname,
        lastname,
        username,
        accessToken,
        refreshToken,
        createdAt,
        updatedAt
      ],
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

    // sign up successful
    return res.status(200).json({
      status: 200,
      message: `User created successfully!`,
      payload: {
        id,
        accessToken,
        refreshToken
      }
    })
  })
}

export default SignUp
