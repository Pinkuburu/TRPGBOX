const requestHandlers = require('./HandleRequest');
let handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;

module.exports = handle;