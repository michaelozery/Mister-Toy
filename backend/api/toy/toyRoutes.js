'use strict'
const express = require('express')
const router = express.Router()
const toyController = require('./toyController')

router.get('/', toyController.getToys)
router.get('/:id', toyController.getToy)
router.delete('/:id', toyController.deleteToy)
router.post('/', toyController.addToy)
router.put('/:id', toyController.updateToy)

module.exports = router