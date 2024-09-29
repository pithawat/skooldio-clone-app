const express = require('express')
const router = express.Router()
const courseController = require('../controller/courseController')

router.use('/:course',courseController.getCourseContent)

module.exports = router