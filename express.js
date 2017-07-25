var express = require('express');
var server = express();
var port = 8090;

server.use(express.static(__dirname));

server.listen(port, function() {
	console.log('Server listening on http://localhost:%d/', port);
});

