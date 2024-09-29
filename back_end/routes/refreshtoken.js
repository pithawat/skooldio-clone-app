const express = require('express')
const router = express.Router()
const refreshTokenController = require('../controller/refreshTokenController.js')

router.use('/',refreshTokenController.handleRefreshToken)

module.exports = router