const Pool = require('pg').Pool;

const pool = new Pool({
    user: '<your user>', // usually postgres
    password: '<your postgres password>',
    host: 'localhost',
    port: 5432, // default port of postgres is 5432
    database: '<your database>',
});

module.exports = pool;