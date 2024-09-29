const express = require('express')
const router = express.Router()
const courseController = require('../controller/courseController')

router.use('/',courseController.getAllCourse);

module.exports = router;