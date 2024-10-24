const express = require('express')
const router = express.Router()

//rota do painel admin
router.get('/', (req, res) => {
    res.render('admin/dashboard')
})

module.exports = router