var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('New chunk recieved');
	console.log(chunk);
});











// var server = http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type' : 'text/plain'} ); // response header
// 	res.end('Hi there');	// response end
// });


// server.listen(3000, '127.0.0.1');

// console.log('Listening to port 3000');

