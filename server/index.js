require('dotenv').config()
const express = require('express')
const massive = require('massive')

// const controller = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env

const app = express()
app.use(express.json())

massive(CONNECTION_STRING) 
  .then(dbInstance => {
    app.set('db', dbInstance)
    console.log(`🐘 Database Connected 🐘`);
    
  })

app.listen(SERVER_PORT, () => {
  console.log(`👨🏻‍🔧 Now listening on port: ${SERVER_PORT}👨🏻‍🔧`)  
})