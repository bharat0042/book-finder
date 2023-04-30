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

const getBooksByIdSchema = {
    response: {
        200: booksSchema
    }
};

const getBooksSchema = {
    response: {
        200: {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "_id": {
                        "type": "string"
                    },
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
                        "type": "number"
                    },
                    "title": {
                        "type": "string"
                    },
                    "year": {
                        "type": "number"
                    }
                },
                "required": [
                    "_id",
                    "author",
                    "country",
                    "language",
                    "link",
                    "pages",
                    "title",
                    "year"
                ]
            }
        }
    }
}



const booksPostBodySchema = {
    body: booksSchema
};

export {getBooksByIdSchema, booksPostBodySchema, getBooksSchema};