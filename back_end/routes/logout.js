const express =require('express')
const router = express.Router()
const logoutController = require('../controller/logoutController')

router.use('/',logoutController.handleLogout)

module.exports = router