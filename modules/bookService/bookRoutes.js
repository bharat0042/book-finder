'use strict';

import {getBooksSchema, booksPostBodySchema} from './schema.js'
import {getBookById, saveBook} from './bookDAO.js';
async function bookRoutes(fastifyInstance) {
    const booksCol = fastifyInstance.mongo.db.collection('booksCol');

    const routes = [
        {
            method: 'GET',
            url: '/books/:id',
            schema: getBooksSchema,
            handler: async (request, response) => {
                return await getBookById(request, response, booksCol);
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