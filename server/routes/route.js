var User = require('../models/user.js'),
	jsonWebToken = require('jsonwebtoken'),
	config = require('../../config.js'),
	secretKey = config.secretKey;


function createWebToken(user) {

	var token = jsonWebToken.sign(
	{
		id: user._id,
		name: user.name,
		username : user.username,
	}, 
	secretKey,
	{
		expiresInMinute: 1440
	}
	);

	return token;
}

module.exports = function(express){
		var api = express.Router();

		api.post('/signUp', function(req, res){
			console.log("Inside SignUp user");
			var user = new User({
				name: req.body.name,
				username: req.body.username,
				password: req.body.password
			}),
			token = createWebToken(user);

			console.log(token);

			user.save(function(err){
				if(err) {
					console.log("There is error in saving user"+err);
					res.send(err);
					return;
				} else {
					res.json({
						success: true,
						message: "User has been created successfully",
						token: token
					});
				}
			})

		});
		return api;
}