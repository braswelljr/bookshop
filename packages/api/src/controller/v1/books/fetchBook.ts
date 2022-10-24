import { Request, Response, NextFunction } from 'express'
import { db } from '@/database/database'

/**
 * FetchBookController - Fetch book controller
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void} - Response object
 */
const fetchBookController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // get book id from request params
  const { id } = req.params

  // fetch book from database
  db.get(`SELECT * FROM books WHERE id = ?`, [id], (err, row) => {
    if (err) {
      console.error(err.message)
      return res.status(500).json({
        status: 500,
        message: err.message
      })
    }

    // if book is not found
    if (!row) {
      return res.status(404).json({
        status: 404,
        message: `Book not found!`
      })
    }

    return res.status(200).json({
      status: 200,
      message: `Book fetched successfully!`,
      data: row
    })
  })

  next()
}

export default fetchBookController
