'use strict';

import Fastify from 'fastify';

import fastifyMongodb from '@fastify/mongodb';
import fastifyPlugin from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

import {swaggerConfig, swaggerUIConfig} from './config/swaggerConfig.js';
import bookRoutes from "./modules/bookService/bookRoutes.js";


async function app() {
    const fastify = Fastify({logger: true});

    fastify
        .register(fastifySwagger, swaggerConfig)
        .register(fastifySwaggerUI, swaggerUIConfig)
        .register(fastifyMongodb, {forceClose: true, url: process.env.MONGO_URI})
        .register(fastifyPlugin(bookRoutes, {}));

    return fastify;
}
export default app;