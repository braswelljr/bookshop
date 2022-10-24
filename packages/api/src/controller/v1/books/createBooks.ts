import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { db } from '@/database/database'

/**
 * CreateBooksController - Create books controller
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void} - Response object
 */
const CreateBooksControllers = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // get books as array from request body
  const { books, token, userId } = req.body

  // verify user token from request body
  db.get(`SELECT * FROM users WHERE token = ?`, [userId], (err, row) => {
    if (err) {
      console.error(err.message)
      return res.status(500).json({
        status: 500,
        message: err.message
      })
    }

    // if user is not found
    if (!row) {
      return res.status(401).json({
        status: 401,
        message: `Unauthorized  user!`
      })
    } else if (row.token !== token) {
      return res.status(401).json({
        status: 401,
        message: `Unauthorized user!`
      })
    }

    // create books
    books.forEach((book: any) => {
      // generate book id
      const id = uuidv4()
      // insert book into database
      const createdAt = new Date().toISOString()
      const updatedAt = new Date().toISOString()

      // insert book into database
      db.run(
        `INSERT INTO books (id, title, author, categories, price, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          id,
          book.title,
          book.author,
          book.categories,
          book.price,
          book.description,
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
    })

    return res.status(201).json({
      status: 201,
      message: `Books created successfully!`
    })
  })

  next()
}

export default CreateBooksControllers
