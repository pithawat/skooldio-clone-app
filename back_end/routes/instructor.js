const express = require('express')
const router = express.Router()
const instructorController = require('../controller/instructorController')

router.use('/:name',instructorController.getInstructorDetails)

module.exports = router