/**
 * Created by xrk on 18-1-31.
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const mimeMode = require('./tool');
//设置主机名
const hostName = '127.0.0.1';
//设置端口
const port = 9527;

http.createServer((req,res) => {
    let pathName = req.url;
    if (pathName == '/') {
        pathName = '/index.html';
    }
    const resHeader = {
        'Content-Type': mimeMode.getMime(path.extname(pathName)) + ';charset="utf-8"',
        'connection': 'keep-alive',
        'host': hostName,
        'accept': '*/*'
    };
    if (pathName != './favicon.ico') {
        fs.readFile('../static' + pathName, (err, data) => {
            if (err) {
                res.writeHeader(404, 'no found');
                res.end();
            } else {
                res.writeHeader(200, 'success', resHeader);
                res.write(data);
                res.end();
            }
        });
    }

}).listen(port,hostName,() => {
    console.log(`服务器运行在http://${hostName}:${port}`);
});