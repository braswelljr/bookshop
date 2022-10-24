# FETCH BOOK BY ID (API)

Fetches a book by its ID from the database. Has a request type of GET and a response type of JSON.

## ENDPOINT

```bash
GET `/api/v1/books/:id`
```

## REQUEST BODY

Has a request body of type `json` with a `id` property.

```json
{
  "id": "hj347tf878gy83ggghhhhsghhfjj" // ID of the book to fetch
}
```

## RESPONSE BODY

Returns a `json` object with a status, message and/or data.

### SUCCESS

```json
{
  "status": 200,
  "message": "Book fetched successfully",
  "data": {
    "id": "hj347tf878gy83ggghhhhsghhfjj533784nf",
    "title": "The Alchemist",
    "authors": ["Paulo Coelho"],
    "category": ["Fiction"],
    "description": "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it has been translated into at least 67 languages as of October 2013. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. Influenced by the gypsy culture and the writings of Antoine de Saint-Exupéry, the novel was first published in 1988 and has since become a modern classic, selling more than 65 million copies worldwide.",
    "createdAt": "2021-05-30T12:00:00.000Z",
    "updatedAt": "2021-05-30T12:00:00.000Z"
  }
}
```

### ERROR

```json
{
  "status": 500,
  "message": "Internal server error"
}
```

#### Book not found

```json
{
  "status": 404,
  "message": "Book not found"
}
```

#### Internal server error

```json
{
  "status": 500,
  "message": "Internal server error"
}
```
