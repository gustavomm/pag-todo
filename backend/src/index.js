import { ApolloServer } from 'apollo-server-express';

import express from 'express';

import mongoose from 'mongoose';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import {
    APP_PORT,
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    IS_PRODUCTION
} from './config';

(async () => {
    try {
        const connectionString = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/test?retryWrites=true&w=majority`;
        //console.log(connectionString);
        await mongoose.connect(connectionString, {
            useNewUrlParser: true
        });

        const app = express();
        app.disable('x-powered-by');

        const server = new ApolloServer({
            typeDefs,
            resolvers,
            playground: IS_PRODUCTION ?
                false :
                {
                    settings: {
                        'request.credentials': 'include'
                    }
                },
            context: ({
                req,
                res
            }) => ({
                req,
                res
            })
        });

        server.applyMiddleware({
            app,
            cors: {
                credentials: true,
                origin: 'http://localhost:4000'
            }
        });

        app.listen({
            port: APP_PORT
        }, () => {
            console.log(`pag-todo Server running at http://localhost:${APP_PORT}${server.graphqlPath}`);
        });
    } catch (e) {
        console.error(e);
    }
})();