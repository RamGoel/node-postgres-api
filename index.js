const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const db=require('./db/queries')

app.use(bodyParser.json())

app.get('/', db.getUsers)
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(PORT, ()=>{
    console.log("app is running")
})