const express = require('express')
const axios = require('axios')
const router = express.Router()
require('dotenv').config()

router.route('/rebuildprod').get(async (req, res) => {
    if (!process.env.GITHUB_TOKEN) {
        res.send('GITHUB TOKEN not found')
    } else {
        const body = {
            "event_type": "rebuildprod"
        }
        const options = {
            headers: {
                "Accept": "application/vnd.github.everest-preview+json",
                "Authorization": `token ${process.env.GITHUB_TOKEN}`
            }
        }
        await axios.post('https://api.github.com/repos/feature-checker/feature-checker/dispatches', body, options)
        res.send('rebuilding')
    }
});

module.exports = router