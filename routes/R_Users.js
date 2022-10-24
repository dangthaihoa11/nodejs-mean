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

// formData
router.post('/formData', function(req, res) {
    // 1. khai báo
    var name = username = passwd = email = phone = address = '';
    var error = '',
        flag = 1;

    // 2. Lấy dữ liệu
    name = req.body.name
    username = req.body.username
    passwd = req.body.passwd
    email = req.body.email
    phone = req.body.phone
    address = req.body.address

    // // 3. kiểm tra dữ liệu
    if (name == '') {
        flag = 0;
        error += 'Vui lòng nhập tên/';
    }
    if (username == '') {
        flag = 0;
        error += 'Vui lòng nhập tên đăng nhập/';
    }

    if (passwd == '') {
        flag = 0;
        error += 'Vui lòng nhập mật khẩu/';
    }

    if (phone == '') {
        flag = 0;
        error += 'Vui lòng nhập số điện thoại/';
    }

    if (address == '') {
        flag = 0;
        error += 'Vui lòng nhập địa chỉ/';
    }

    if (email == '') {
        flag = 0;
        error += 'Vui lòng nhập email/';
    }


    // 4. tổng kết
    if (flag == 1) {
        // xử lý với database
        res.send({ kq: 1, result: 'Dữ liệu chính xác' })
    } else {
        res.send({ kq: 0, result: error })
    }

    // res.send({ name, username, passwd, email, phone, address })
})

module.exports = router