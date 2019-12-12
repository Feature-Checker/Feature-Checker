const API_KEY = process.env.API_KEY_GOOGLE;
const CSE_ID = process.env.CSE_ID_GOOGLE;
const imageSearch = require("image-search-google");
const client = new imageSearch(CSE_ID, API_KEY);
const options = {
    page: 1
};

const fetchImage = async(req, res) => {
    try {
        const searchPhrase = `${req.query.search} logo`

        const searchResult = await client.search(searchPhrase, options)
        res.json(searchResult)
    } catch (err) {
        res.send(err)
    }

}

module.exports = {
    fetchImage
}