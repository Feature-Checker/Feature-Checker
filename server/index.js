const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const repositoryRoute = require('./routes/repository')

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://admin:admin123@ds245018.mlab.com:45018/featurechecker')
    .then(() => console.log('DB connected'))
    .catch(e => console.log(e))

app.use('/repositories', repositoryRoute)

app.listen(5000, err => {
    console.log('listening on port 5000')
})