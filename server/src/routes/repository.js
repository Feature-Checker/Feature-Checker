const express = require('express')
const router = express.Router()
const Controller = require('../controllers/repository');

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './icons');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage
});



router.route('/')
    .post(upload.single("repository"), Controller.createNew)
    .get(Controller.getAll)

router.route('/:repository_id')
    .get(Controller.getOne)
    .put(Controller.updateOne)
    .delete(Controller.deleteOne)

module.exports = router