const express = require('express')
const repositoryRoute = require('./routes/repository')
const imageRoute = require('./routes/repo-image')
const searchRepoRoute = require('./routes/search-repo')
const plansRoute = require('./routes/plans')
const { connect } = require('./services/db')
const { use } = require('./services/middleware')

const port = 4000;
const app = express()
use(app)
connect()

app.use('/repositories', repositoryRoute)
app.use('/image', imageRoute)
app.use('/searchrepo', searchRepoRoute)
app.use('/plans', plansRoute)

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}
module.exports = app