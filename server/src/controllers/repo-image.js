const imageSearch = require("image-search-google");

const fetchImage = async(req, res) => {
    try {
        console.log(req.query)
        console.log(req.params)
        console.log(process.env)
        const searchPhrase = `${req.query.search} logo`
        const { API_KEY, CSE_ID } = process.env;
        const client = new imageSearch(CSE_ID, API_KEY);
        const options = { page: 1 };
        const searchResult = await client.search(searchPhrase, options)
        res.json(searchResult)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    fetchImage
}
