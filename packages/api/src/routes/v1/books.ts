import { Router } from 'express'
import FetchAllBooks from '@/controller/v1/books/fetchAllBooks'
import FetchBook from '@/controller/v1/books/fetchBook'
import CreateBooks from '@/controller/v1/books/createBooks'

const books = Router()

// books routes
// GET /api/v1/books/all
books.get('/book/all', (req, res, next) => FetchAllBooks(req, res, next)) // fetch all books
// GET /api/v1/books/:id
books.get('/book/:id', (req, res, next) => FetchBook(req, res, next)) // fetch a book
// POST /api/v1/create
books.post('/books/create', (req, res, next) => CreateBooks(req, res, next)) // add a book

export default books
