'use strict';

import {getBooksByIdSchema, booksPostBodySchema, getBooksSchema} from './schema.js'
import {getBookById, getBooks, saveBook} from './bookDAO.js';
async function bookRoutes(fastifyInstance, opts) {
    const booksCol = fastifyInstance.mongo.db.collection('booksCol');

    const routes = [
        {
            method: 'GET',
            url: '/books/:id',
            schema: getBooksByIdSchema,
            handler: async (request, response) => {
                return await getBookById(request, response, booksCol);
            }
        },
        {
            method: 'GET',
            url: '/books',
            schema: getBooksSchema,
            handler: async (request, response) => {
                return await getBooks(request, response, booksCol);
            }
        },
        {
            method: 'POST',
            url: '/book',
            schema: booksPostBodySchema,
            handler: async (request, response) => {
                return await saveBook(request, response, booksCol);
            }
        }
    ]
    for(let route of routes) {
        fastifyInstance.route(route);
    }
}
export default bookRoutes;