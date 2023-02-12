'use strict';

import {ObjectId} from '@fastify/mongodb';

async function getBookById(request, response, collection) {
    const id = new ObjectId(request.params.id);
    return collection.findOne(id);
}

async function saveBook(request, response, collection) {
    let data = request.body;
    await collection.insertOne(data);
    return {status: 200};
}

export {getBookById, saveBook} ;