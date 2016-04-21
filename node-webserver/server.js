/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, resp) {

	console.log(req.url);
	var rs;
	if (req.url === "/") {
		resp.writeHead(200, {
			"Content-Type" : "text/html"
		});
		rs = fs.createReadStream("index.html");
		rs.pipe(resp);
	}
	if (req.url === "/css/bootstrap.css") {
		resp.writeHead(200, {
			"Content-Type" : "text/css"
		});
		rs = fs.createReadStream("css/bootstrap.css");
		rs.pipe(resp);
	}

});

server.listen(8080, function() {
	console.log('server started at http://localhost:8080/');
});