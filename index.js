const server = require('./api/src/server/Server');
const route = require('./api/src/server/Route');
const handle = require('./api/src/server/Handle');


server.start(route.route,handle);