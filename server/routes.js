const express = require('express')
const router = express.Router()
const {getInfo, getList} = require('./actions')
router.get('/info/:id', getInfo)
router.get('/list', getList)
module.exports = router