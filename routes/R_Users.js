const express = require('express')
const router = express.Router()

// Gọi class
const Admin = require('../controllers/C_Admin')
const Html = require('../controllers/C_Html')

// Gọi models
const userModel = require('../models/M_Users')

// Gọi bcryptjs
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

router.get('/index', (req, res) => {
    let url = req.originalUrl

    // Sử dụng class
    const use_Admin = new Admin(url)
    const use_Html = new Html(url)

    userModel
        .find({})
        .sort({ _id: -1 })
        .exec((err, data) => {
            if (err) {
                res.send({ kq: 0, results: 'Kết nối Database thất bại' })
            } else {
                var array = [];

                data.forEach(e => {
                    array.push({
                        _id: e._id,
                        name: e.name,
                        username: e.username,
                        email: e.email
                    })
                })

                res.render('index', {
                    path: use_Admin.path(),
                    navbar: use_Html.navbar(),
                    main: use_Html.pcoded_content('table', array)
                })
            }
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

    userModel.find()
        .exec((err, data) => {
            if (err) {
                res.send({ kq: 0, results: 'Kết nối Database thất bại' })
            } else {
                res.render('index', {
                    path: use_Admin.path(),
                    navbar: use_Html.navbar(),
                    main: use_Html.pcoded_content('form')
                })
            }

        })
})

// formData
router.post('/formData', function(req, res) {
    // 1. khai báo
    var name = username = passwd = email = phone = address = ''
    var flag = 1

    // 2. Lấy dữ liệu
    name = req.body.name
    username = req.body.username
    password = req.body.passwd
    email = req.body.email
    phone = req.body.phone
    address = req.body.address

    // 3. kiểm tra dữ liệu
    // 4. tổng kết
    if (flag == 1) {
        // xử lý với database
        userModel
            .find({ $or: [{ username }, { email }, { phone }] })
            .exec((err, data) => {
                if (err) {
                    res.send({ kq: 0, results: 'Kết nối DB thất bại' })
                } else {
                    //console.log(data)
                    // kiểm tra tồn tại
                    if (data == '') {
                        // tạo hash
                        var hash = bcrypt.hashSync(password, salt);

                        const add_obj = {
                            name,
                            username,
                            password: hash,
                            email,
                            phone,
                            address
                        }

                        // chưa có
                        userModel
                            .create(add_obj, (err, data) => {
                                if (err) {
                                    res.send({ kq: 0, results: 'Kết nối DB thất bại' })
                                } else {
                                    res.send({ kq: 1, results: data })
                                }
                            })
                    } else {
                        // đã có
                        res.send({ kq: 0, results: 'Dữ liệu đã tồn tại' })
                    }
                }
            })
    }
})

// Xóa dữ liệu
router.post('/deleteData', function(req, res) {
    // Lấy getID
    var getID = req.body.getID

    if (getID != '') {
        // Xóa trong db
        // userModel
        // .findByIdAndDelete({_id: getID}, (err)=>{
        //     if(err){
        //         res.send({kq:0, results: 'Kết nối DB thất bại'})
        //     }
        //     else{
        //         res.send({kq:1, results: 'Đã xóa'})
        //     }
        // })

        // Cập nhật trash trong db
        userModel
            .updateMany({ _id: getID }, { trash: true }, (err) => {
                if (err) {
                    res.send({ kq: 0, results: 'Kết nối DB thất bại' })
                } else {
                    res.send({ kq: 1, results: 'Đã xóa' })
                }
            })
    } else {
        res.send({ kq: 0, results: 'ID không tồn tại' })
    }
})

module.exports = router