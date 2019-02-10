var express = require('express');

var app = express();

// set template engine

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send('This is express');
});

app.get('/:profile/:id', function(req, res){
	var data = {
		age : 29, job : 'Teacher', hobbies : ['eating', 'fishing', 'reading', 'coding']
	};

	res.render('index', {name: req.params.profile, email : 'atulrulres@gmail.com', data : data});
});



app.listen(3000); // listening to port 3000

