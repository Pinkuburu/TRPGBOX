const querystring = require("querystring"),
    fs = require('fs'),
    path = require('path');


function start(req, res) {
    // console.log("Request handler 'start' was called.");

    fs.readFile(path.resolve(__dirname, '../../../web/src/index.html'), (err,data) => {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(data);
        res.end();
    })


}

module.exports.start = start;