const express = require('express')
const repositoryRoute = require('./routes/repository')
const db = require('./services/db')
const middleware = require('./services/middleware')

// const cron = require('node-cron')
// const mail = require('./services/mail')
// const testTemplate = require('./services/mailTemplates/test')

const app = express()
middleware.use(app)
db.connect();

/*
cron.schedule("* * * * *", () => {
    console.log("Running Cron Job");
    //mail.send(testTemplate)
});
*/

app.use('/repositories', repositoryRoute)

app.listen(5000, err => {
    console.log('listening on port 5000')
})