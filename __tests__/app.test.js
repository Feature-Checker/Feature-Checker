const request = require("supertest");

const app = require("../server/src/server");

describe("/image endpoint", () => {
    it("respond with json", async(done) => {
        const res = await request(app)
            .get("/image")
            .query({
                search: "facebook/react logo"
            })
            .set("Accept", "application/json");

        expect(res.status).toBe(200);
        done();
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
});

describe("/repositories Endpoints", () => {
    it("respond with 200 to GET method", async done => {
        const res = await request(app).get("/repositories");

        expect(res.status).toBe(200);
        done();
    });
    it("respond with 200 to POST method", async done => {
        const res = await request(app).post("/repositories");

        expect(res.status).toBe(200);
        done();
    });


});
describe("/searchrepo Endpoints", () => {
    it("respond with status 200", async done => {
        const res = await request(app).get("/searchrepo");

        expect(res.status).toBe(200);
        // expect(res).toHaveProperty('isValid');
        done();
    });


});