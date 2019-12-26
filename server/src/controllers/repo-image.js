const imageSearch = require("image-search-google");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

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

const saveImage = async(req, res) => {
    const url = req.query.url;
    const name = req.query.name;
    const rootPath = path.dirname(require.main.filename || process.mainModule.filename);
    !fs.existsSync(`${rootPath}/logos`) && fs.mkdirSync(`${rootPath}/logos`);
    const filePath = path.resolve(rootPath, 'logos', `${name}`);
    const writer = fs.createWriteStream(filePath);
    try {
        const icon = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })
        await icon.data.pipe(writer);
        await res.send(icon.data)
    } catch (err) {
        await res.sendStatus(404);
    }
};

module.exports = {
    fetchImage,
    saveImage
}
