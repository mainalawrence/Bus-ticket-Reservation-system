const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: "pass",
    database: "traverous",
    host: "localhost",
    port: 5432
})

module.exports = pool;