const express = require('express')
const router = express.Router()

// Gọi class
const Admin = require('../controllers/C_Admin')
const Html = require('../controllers/C_Html')

router.get('/index', (req, res) => {
    let url = req.originalUrl

    // Sử dụng class
    const use_Admin = new Admin(url)
    const use_Html = new Html(url)

    res.render('index', {
        path: use_Admin.path(),
        navbar: use_Html.navbar(),
        main: use_Html.pcoded_content('table')
    })
})

router.get('/add', (req, res) => {
    let url = req.originalUrl

    // Sử dụng class
    const use_Admin = new Admin(url)
    const use_Html = new Html(url)

    res.render('index', {
        path: use_Admin.path(),
        navbar: use_Html.navbar(),
        main: use_Html.pcoded_content('form')
    })
})

router.get('/edit/:id', (req, res) => {
    let url = req.originalUrl

    // Sử dụng class
    const use_Admin = new Admin(url)
    const use_Html = new Html(url)

    res.render('index', {
        path: use_Admin.path(),
        navbar: use_Html.navbar(),
        main: use_Html.pcoded_content('form')
    })
})

module.exports = router