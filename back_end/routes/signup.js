const express =require('express')
const router = express.Router()
const signupController = require('../controller/signupController')

router.use('/',signupController.signUp)

module.exports = router