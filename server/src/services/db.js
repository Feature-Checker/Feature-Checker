const mongoose = require('mongoose')

const connect = () => {
    switch (process.env.NODE_ENV) {
        case 'production': dbURL = 'mongodb://admin:admin123@ds245018.mlab.com:45018/featurechecker'; break;
        case 'development': dbURL = 'mongodb://admin:admin123@ds261128.mlab.com:61128/devrelease'; break;
        case 'test': dbURL = 'mongodb://admin:admin123@ds035975.mlab.com:35975/devrelease_test'; break;
    }

    mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('DB connected'))
        .catch(e => console.log(e))
}

module.exports = {
    connect
}