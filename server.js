'use strict';

import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import app from './app.js';

import cluster from "cluster";
import os from "os";

if(cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`);
    const numCPUS = os.cpus().length;

    for (let i = 0; i < numCPUS - 1; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
} else {
    await start();
}

async function start() {
    const fastify = await app();
    try {
        await fastify.listen({ port: Number(process.env.PORT) });
    } catch(err) {
        fastify.log.error(err);
    }
}

// await start();