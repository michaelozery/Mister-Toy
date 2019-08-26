const express = require('express')
const requireAuth = require('../../middlewares/requireAuth')
const {login, signup, logout, checkTime} = require('./authController')
const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', requireAuth, logout)
router.post('/checktime', checkTime)

module.exports = router