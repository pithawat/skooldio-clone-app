const express = require('express')
const router = express.Router()
const CourseController = require('../controller/courseController')

router.use('/:course',CourseController.getCourseDetails)

module.exports = router 