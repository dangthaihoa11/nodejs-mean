const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

// Cấu hình đường dẫn tĩnh
app.use(express.static('public'))

// Gọi Ejs
app.set('view engine', 'ejs')

// Gọi Control
app.use('/', require('./configs/Controls'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))