export const {
    /*express config*/
    APP_PORT = 4000,
    NODE_ENV = 'development',

    /* mongodb config */
    DB_HOST = 'clustersp-bqd9t.gcp.mongodb.net',
    DB_USERNAME = 'admin',
    DB_PASSWORD = 'testepag123',
    DB_NAME = 'pag-todo',
    RUN_TESTS = 0
} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';