const express = require('express')
const router = express.Router()
const Controller = require('../controllers/repo-image')

router.route('/').get(Controller.fetchImage);

module.exports = router