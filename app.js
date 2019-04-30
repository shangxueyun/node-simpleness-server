var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../project-directory')));
// 访问单页
app.get('*', function (req, res) {
    var html = fs.readFileSync(path.resolve(__dirname, '../project-directory/index.html'), 'utf-8');
    res.send(html);
});
// var proxy = require('http-proxy-middleware');

// app.use(
//   '/api',
//   proxy({ target: 'https://xxx.cn/', changeOrigin: true })
// );
// 监听
console.log('服务器开启中，请稍后...');
app.listen(8080, function () {
    console.log(`请访问http://127.0.0.1:8080 端口进行 %d 项目预览`);
    console.log(`cmd按Ctrl + c 退出服务`);
    console.log(`或者输入netstat -ano | findstr 8080查看端口是否存在`);
    console.log(`如果存在输入taskkill -PID 请把这段替换为8080跟的进程号：例如127.0.0.1:8080 0.0.0.0 某某 11424 -F`);
    console.log(`11424就是进程号`);
});