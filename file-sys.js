var fs = require('fs');

var readMe = fs.readFile('readMe.txt', 'utf8', function(err, data){
	console.log(data);
});

fs.writeFileSync('writeMe.txt', readMe);

console.log(readMe);
console.log('test');
