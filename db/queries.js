const { response, query } = require("express");

const Pool = require("pg").Pool;
require("dotenv").config();
const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  host: "localhost",
  database: "test",
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

const getUsers = (request, response) => {
  const id = request.query.id;

  let query;

  console.log(query);
  if (id) {
    query = `SELECT first_name, last_name, age, passenger_id, email, country FROM person WHERE passenger_id=${id} ORDER BY passenger_id ASC `;
  } else {
    query = `SELECT first_name, last_name, age, country,email, passenger_id FROM person ORDER BY passenger_id ASC `;
  }
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
const addNewUser = (request, response) => {
  const { fname, lname, age, country, email } = request.body;

  if(!fname || !lname || !age || !country || !email) {
    response.status(400).json({message:"Bad Request"})
    return;
  }
  pool.query(
    `INSERT INTO person (first_name, last_name, age, country, email) VALUES ($1, $2, $3, $4, $5)`,
    [fname, lname, age, country, email],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json({message:"Successfully Added"});
    }
  );
};
const deleteUser=(request, response)=>{
  const {id}=request.query;

  if(!id){
    response.status(400).json({message:"Invalid Request"})
    return;
  }
  pool.query(`DELETE FROM person WHERE passenger_id=${id}`,(error, result)=>{
    if (error) {
      throw error;
    }
    response.status(200).json({message:"Successfully Deleted"});
  
  })
}

const updateUser = (request, response) => {
  const { email, id } = request.body;


  pool.query(
    `UPDATE person SET email=$1 WHERE passenger_id=$2`,
    [email, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json({message:"Successfully Updated Email"});
    }
  );
};


module.exports = {
  getUsers,
  addNewUser,
  deleteUser,
  updateUser
};
