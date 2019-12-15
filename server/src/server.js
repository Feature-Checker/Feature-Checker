const express = require('express')
const repositoryRoute = require('./routes/repository')
const imageRoute = require('./routes/repo-image')
const db = require('./services/db')
const middleware = require('./services/middleware')

const port = 4000;
console.log(process.env)
const app = express()
middleware.use(app)
db.connect()

app.use('/repositories', repositoryRoute)
app.use('/image', imageRoute)
app.listen(port, () => console.log(`Listening on port ${port}`));

