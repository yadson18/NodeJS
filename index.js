var HttpServer = require('./Modules/Server');
var View = require('./Modules/View');

HttpServer.start();

console.log(View.hello());