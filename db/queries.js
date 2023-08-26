const Pool = require("pg").Pool;
require('dotenv').config()
const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: "localhost",
  database: "test",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT first_name, last_name, age, country FROM person ORDER BY passenger_id Desc", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
};
