const pg=require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USERNAME,
    host: 'localhost',
    database: 'test',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
  })