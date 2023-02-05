'use strict';

import Fastify from 'fastify';
const fastify = Fastify({ logger: true });

import fastifyEnv from '@fastify/env';
import fastifyMongodb from '@fastify/mongodb';
import fastifyPlugin from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';

import path from 'path';
import fp from 'fastify-plugin';
import { swaggerConfig } from './config/swaggerConfig';

const options = {
    dotenv: {
        path: `${__dirname}/.env.${process.env.NODE_ENV}`,
        debug: true
    }
}

async function connectToDatabases(fastify) {
    fastify.register(fastifyMongodb, {
        url: fastify.config.MONGODB_URL,
        forceClose: true,
        useNewUrlParser: true
    });
}

function transformStringIntoObjectId(str) {
    return new this.mongo.ObjectId(str)
}

async function decorateFastifyInstance(fastify) {
    const db = fastify.mongo.db
    fastify.decorate('transformStringIntoObjectId', transformStringIntoObjectId)
}

export async function app(fastify, opts) {
    fastify
        .register(fastifySwagger, swaggerConfig)
        .register(fastifyPlugin(connectToDatabases)) 
}