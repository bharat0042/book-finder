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

async function updateBook(request, response, collection) {
    let data = request.body;
    await collection.insertOne(data);
    return {status: 200};
}

async function getBooks(request, response, collection) {
    const pageNo = request.query.page;
    const size = request.query.size;
    const numObjectsToSkip = (pageNo - 1) * size;
    return collection.find().skip(Number(numObjectsToSkip)).limit(Number(size)).toArray();
}

export {getBookById, getBooks, saveBook} ;