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
        "language",
        "link",
        "pages",
        "title",
        "year"
    ]
};

const getBooksSchema = {
    response: {
        200: booksSchema
    }
};

const booksPostBodySchema = {
    body: booksSchema
};

export {getBooksSchema, booksPostBodySchema};