var Hapi = require('hapi');

var Routes = require('./routes.js');

var server = new Hapi.Server('localhost', 8080);

server.route(Routes);

server.start(function (err) {

	console.log('started server on 8080');
});