const server = require('./api/src/server/Server');
const route = require('./api/src/server/Route');
const requestHandlers = require('./api/src/server/HandleRequest');

let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;


server.start(route.route,handle);