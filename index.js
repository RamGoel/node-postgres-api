const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const db=require('./db/queries')

app.use(bodyParser.json())


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/user', db.getUsers)
app.post('/user', db.addNewUser)
app.delete('/user', db.deleteUser)
app.put('/user', db.updateUser)

app.get('/', (request, response) => {
  response.json({ info: 'Welcom to Express + Postgres API' })
})

app.listen(PORT, ()=>{
    console.log("app is running")
})