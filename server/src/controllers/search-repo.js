const axios = require("axios");

const search = async(req, res) => {
    try {
        const result = await axios.get(`https://github.com/${req.query.reponame}`)
        if(result.status === 200){
                res.json({ isValid: true });
        } else {
                res.json({ isValid: false });
        }
    } catch (err) {
        res.json({ isValid: false })
    }
}

module.exports = {
    search
}
