const request = require('supertest')
const app = require('../server/src/server')
const supertest = request(app);
const mongoose = require('mongoose')
const utils = require('./utils')

beforeAll(async () => {
    await mongoose.connect('mongodb://admin:admin123@ds035975.mlab.com:35975/devrelease_test', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('DB connected'))
        .catch(e => console.log(e))
})

beforeEach(async () => {
    await utils.createRepository('angular/angular', '')
    await utils.createRepository('facebook/react', '')
})

afterEach(async () => {
    await mongoose.connection.db.dropDatabase()
})


afterAll(async () => {
    await mongoose.connection.close()
})



describe('Repository Endpoints', () => {

    it('should create a new repository', async () => {
        const res = await utils.createRepository('facebook/react', '')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('icon')
    })

    it('should get all repositories', async () => {
        const res = await supertest
            .get('/repositories')

        expect(res.statusCode).toEqual(200)
        expect(res.body.length).toEqual(2)
    })

})
