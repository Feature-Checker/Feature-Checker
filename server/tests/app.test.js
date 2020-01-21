const request = require("supertest");

const app = require("../src/server");

describe('GET /image', () => {
    it('respond with json', async() => {
        const res = await request(app)
            .get('/image')
            .query({
                search: 'facebook/react logo'
            }).set('Accept', 'application/json')

        expect(200)
    });
    // it("should send images url's", async() => {
    //     const res = await request(app)
    //         .get('/image')
    //         .query({
    //             search: 'facebook/react logo'
    //         })
    //     expect(res.body).toContain(Object());
    //     end((err, res) => {
    //         if (err) done(err);
    //         done();
    //     })
    // })
})