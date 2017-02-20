function route(handle,pathname,req,res) {
    console.log('正在处理来自'+pathname+'的请求');
    if(typeof handle[pathname]==='function'){
        handle[pathname](req,res);
    } else{
        console.log('服务器未找到该请求');
        response.writeHead(404,{"Content-Type":"text/html"});
        response.write('404 Not Found');
        response.end();
    }
}

module.exports.route = route;

