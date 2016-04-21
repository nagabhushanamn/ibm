/**
 * http://usejsdoc.org/
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(); // ee

server.on('request', function(req, res) {

	// res.writeHead(200, {
	// 'Content-Type' : 'text/plain'
	// });
	//
	// res.write("HelloWorld");
	// res.end();

	// fs.readFile("Johny.mp4", function(err, data) {
	// res.writeHead(200, {
	// 'Content-Type' : 'video/mp4'
	// });
	// res.write(data);
	// res.end();
	// });

	// by using streams

	// var rs = fs.createReadStream("Johny.mp4");
	//
	// res.writeHead(200, {
	// 'Content-Type' : 'video/mp4'
	// });
	//
	// rs.on('data', function(chunk) {
	// console.log('data- event on rs' + chunk.length);
	// res.write(chunk);
	// });
	// rs.on('end', function() {
	// console.log('end- event');
	// res.end();
	// });

});

server.listen(8080, function() {
	console.log('server started at http://localhost:8080/');
});