'use strict';

let booksSchema = {
    "type": "object",
    "properties": {
        "author": {
            "type": "string"
        },
        "country": {
            "type": "string"
        },
        "genre": {
            "type": "array"
        },
        "isbn": {
            "type": "string"
        },
        "language": {
            "type": "string"
        },
        "link": {
            "type": "string"
        },
        "pages": {
            "type": "integer"
        },
        "title": {
            "type": "string"
        },
        "year": {
            "type": "integer"
        }
    },
    "required": [
        "author",
        "country",
        "genre",
        "isbn",
        "language",
        "link",
        "pages",
        "title",
        "year"
    ]
};

const getBooksByIdSchema = {
    response: {
        200: booksSchema
    }
};

const getBooksSchema = {
    response: {
        200: {
            "type": "array",
            "items": booksSchema
        }
    }
}



const booksPostBodySchema = {
    body: booksSchema
};

export {getBooksByIdSchema, booksPostBodySchema, getBooksSchema};