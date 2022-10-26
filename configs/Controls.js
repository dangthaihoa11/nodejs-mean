const express = require('express')
const router = express.Router()

// Chuyển hướng về dashboard
router.get('/', (req, res) => {
    res.redirect('/admin/dashboards/index')
})

// Gọi đến các routes
router.use('/admin/dashboards', require('../routes/R_Dashboards'))
router.use('/admin/categories', require('../routes/R_Categories'))
router.use('/admin/products', require('../routes/R_Products'))
router.use('/admin/users', require('../routes/R_Users'))

// Gọi apis
router.use('/api/users', require('../apis/A_Users'))

module.exports = router