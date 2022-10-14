import sqlite from 'sqlite3'

export const db = new sqlite.Database('database.db', err => {
  err ? console.error(err.message) : console.log('Connected to the database.')
})
