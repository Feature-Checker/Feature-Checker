const imageSearch = require("image-search-google");

const fetchImage = async (req, res) => {
    try {
        console.log(req.query)
        console.log(req.params)
        console.log(process.env)
        const searchPhrase = `${req.query.search} logo`
        const { API_KEY_GOOGLE, CSE_ID_GOOGLE } = process.env;
        const client = new imageSearch(CSE_ID_GOOGLE, API_KEY_GOOGLE);
        const options = { page: 1 };
        const searchResult = await client.search(searchPhrase, options)
        searchResult.map((result, index) => {
            result.id = index + 1
        })
        res.json(searchResult)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    fetchImage
}
