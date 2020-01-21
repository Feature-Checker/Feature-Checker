const request = require("supertest");

let res;
let req;

beforeEach(() => {
    req = {
        query: {}
    };
    res = {
        json: jest.fn(),
        send: jest.fn(),
        status: jest.fn()
    }
})

const {
    fetchImage
} = require('../src/controllers/repo-image');

describe('working fetchImage async function', () => {
    it('should do what I like', () => {
        expect(fetchImage(req, res)).toMatchSnapshot();
    })
})