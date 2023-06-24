const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8070

app.use(cors())
app.use(bodyParser.json())

const URL = process.env.MONGODB_URL

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

const roads_routes = require('./routes/roads.js');

//route config like localhost:8070/routesInfo
app.use('/routesInfo', roads_routes)


const delete_routes = require('./routes/deletedata.js');

//route config like localhost:8070/deleteInfo
app.use('/deleteInfo', delete_routes)



  const connection = mongoose.connection
connection.once("open", () => {
  console.log('MongoDB Connection Success!!!')
})

app.listen(PORT, () => {
    console.log(`Server is up and running at port ${PORT}`)
  })