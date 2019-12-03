const cors = require('cors')
const bodyParser = require('body-parser')

const use = (app) => {
    app.use(cors())
    app.use(bodyParser.json())
}

module.exports = {
    use
}