const express = require('express')
const router = express.Router()

const petController = require('../constrollers/petController')

router.get('/add/:nome',petController.store)
router.get('/',petController.index)
router.get('/buscar/:nome',petController.search)

module.exports = router