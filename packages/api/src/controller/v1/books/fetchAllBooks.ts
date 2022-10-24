import { Request, Response, NextFunction } from 'express'
import { db } from '@/database/database'

/**
 * FetchAllBooksController - Fetch all books controller
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void} - Response object
 */
const fetchAllBooksController = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  db.all(`SELECT * FROM books`, [], (err, rows) => {
    if (err) {
      console.error(err.message)
      return res.status(500).json({
        status: 500,
        message: err.message
      })
    }

    return res.status(200).json({
      status: 200,
      message: `Books fetched successfully!`,
      data: rows
    })
  })

  next()
}

export default fetchAllBooksController
