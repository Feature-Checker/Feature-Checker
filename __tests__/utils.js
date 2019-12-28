const request = require('supertest')
const app = require('../server/src/server')
const supertest = request(app);

const createRepository = async (name, icon) => {
    const result = await supertest
        .post('/repositories')
        .send({ name, icon })
    return result
}

module.exports = {
    createRepository
}