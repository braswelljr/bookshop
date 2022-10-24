# CREATE BOOKS (API)

Creates a new book in the database. Has a request type of POST and a response type of JSON.

## ENDPOINT

```bash
POST `/api/v1/books/create`
```

## REQUEST BODY

The request body must be a `json` object with the following properties:

| Property | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | The title of the book |
| `authors` | [`string`] | The author of the book |
| `categories` | [`string`] | The category of the book |
| `description` | `string` | The description of the book |
| `createdAt` | `string` | The date the book was created |
| `updatedAt` | `string` | The date the book was last updated |

```json
{
  "id": "hj347tf878gy83ggghhhhsghhfjj533784nf",
  "title": "The Alchemist",
  "author": ["Paulo Coelho"],
  "categories": ["Fiction"],
  "description": "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it has been translated into at least 67 languages as of October 2013. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. Influenced by the gypsy culture and the writings of Antoine de Saint-Exupéry, the novel was first published in 1988 and has since become a modern classic, selling more than 65 million copies worldwide.",
  "createdAt": "2021-05-30T12:00:00.000Z",
  "updatedAt": "2021-05-30T12:00:00.000Z"
}
```

## RESPONSE BODY

Returns a `json` object with a status, message and/or data.

### Success

```json
{
  "status": 201,
  "message": "Book created successfully",
  "data": [
    {
      "id": "hj347tf878gy83ggghhhhsghhfjj533784nf",
      "title": "The Alchemist",
      "authors": ["Paulo Coelho"],
      "category": ["Fiction"],
      "description": "The Alchemist is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it has been translated into at least 67 languages as of October 2013. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. Influenced by the gypsy culture and the writings of Antoine de Saint-Exupéry, the novel was first published in 1988 and has since become a modern classic, selling more than 65 million copies worldwide.",
      "createdAt": "2021-05-30T12:00:00.000Z",
      "updatedAt": "2021-05-30T12:00:00.000Z"
    }
  ]
}
```
