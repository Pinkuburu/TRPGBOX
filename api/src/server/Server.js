const http = require('http');
const url = require('url');
function start(route,handle) {
    function onRequest(req,res) {
        let pathname  = url.parse(req.url).pathname;
        // console.log("接收到了" + pathname+'的请求');
        route(handle,pathname,req,res);
    }
    let port = 8888;
    http.createServer(onRequest).listen(port);
    console.log('服务器已启动，运行在http://localhost:'+port);
}

module.exports.start = start;