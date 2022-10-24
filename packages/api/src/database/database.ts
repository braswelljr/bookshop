import sqlite from 'sqlite3'

export const db = new sqlite.Database('database.db', err => {
  err ? console.error(err.message) : {}
})

// initialize the database with the following tables: users, books
export default function DatabaseInit() {
  db.serialize(() => {
    // create table for users if it doesn't exist and run on init
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        firstname TEXT NOT NULL,
        lastname TEXT NUll,
        username TEXT NOT NULL UNIQUE,
        profileImage BLOB NULL,
        accessToken TEXT NOT NULL,
        refreshToken TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )`,
      err => (err ? console.error(err.message) : {})
    )

    // create table for books if it doesn't exist and run on init
    db.run(
      `CREATE TABLE IF NOT EXISTS books (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT [] NOT NULL,
        authors TEXT [] NOT NULL,
        price DOUBLE NOT NULL,
        description TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )`,
      err => (err ? console.error(err.message) : {})
    )

    // create table for authors if it doesn't exist and run on init
    db.run(
      `CREATE TABLE IF NOT EXISTS authors (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        dateOfBirth TEXT,
        profileImage BLOB NULL,
        biography TEXT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )`,
      err => (err ? console.error(err.message) : {})
    )

    // create table for orders if it doesn't exist and run on init
    db.run(
      `CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        userId TEXT NOT NULL,
        bookId TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      )`,
      err => (err ? console.error(err.message) : {})
    )
  })
}
