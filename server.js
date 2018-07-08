const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const connectHistoryApiFallback = require('connect-history-api-fallback');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// 设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHead' +
        'erFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.use(connectHistoryApiFallback());

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(80, function () {
    console.log('服务器已开启，端口：' + 80);
})

module.exports = app;