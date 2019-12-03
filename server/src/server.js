const express = require('express')
const repositoryRoute = require('./routes/repository')
const db = require('./services/db')
const middleware = require('./services/middleware')

const port = 4000;

const app = express()
middleware.use(app)
db.connect()

app.use('/repositories', repositoryRoute)
app.listen(port, () => console.log(`Listening on port ${port}`));