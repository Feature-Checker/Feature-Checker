const express = require('express')
const router = express.Router()
const Controller = require('../controllers/search-repo')

router.route('/').get(Controller.search);

module.exports = router
