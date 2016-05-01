var express = require('express'),
	app = express(),
	config = require('./config.js'),
	http = require('http').Server(app),
	bodyParser = require('body-parser');
	
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.urlencoded({"extended": true}));

// app.get('*', function(req, res){
// 	res.send("<h1> Start Booking hotel Now </h1>");
// });

/* Connect to port mentioned in config.js*/
http.listen(config.PORT, function(err){
	if (err) {
		console.log("There is some error"+err); 
	} else {
		console.log("Connected to the port --->"+config.PORT);
	}
})




