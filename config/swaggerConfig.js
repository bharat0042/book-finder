'use strict';

const swaggerConfig = {
    mode: 'dynamic',
    openapi: {
        info: {
            title: "Book APIs",
            description: "Book APIs",
            version: "1.0.0",
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        }
    }
};

const swaggerUIConfig = {
    routePrefix: '/docs',
    initOAuth: {},
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header
};

export { swaggerConfig, swaggerUIConfig }; 