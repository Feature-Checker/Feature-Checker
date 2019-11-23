const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect('mongodb://admin:admin123@ds245018.mlab.com:45018/featurechecker')
        .then(() => console.log('DB connected'))
        .catch(e => console.log(e))
}

module.exports = {
    connect
}