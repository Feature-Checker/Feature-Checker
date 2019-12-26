const express = require('express')
const router = express.Router()
const Controller = require('../controllers/repo-image')

router.route('/').get(Controller.fetchImage);
router.route("/").post(Controller.saveImage);

module.exports = router