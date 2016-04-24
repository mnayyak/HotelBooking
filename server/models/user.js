var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt-nodejs'),
	UserSchema = new Schema({
		name: {
			type: String
		},
		username: {
			type: String, 
			required: true, 
			index:{unique: true}
		},
		password: {
			type: String, 
			required: true, 
			select: false
		}
	});


UserSchema.pre('save', function (next) {
	
	var user = this;

	if(!user.isModified('password')) {
		return next();
	}

	bcrypt.hash('password', null, null, function(err, hash){
		if(err) {
			console.log("There is some error in hashing the password");
			return next(err);
		} else {
			console.log("Sucessfull hashing");
			user.password = hash;
			return next();
		}
	});
	
});

module.exports = mongoose.model('User', UserSchema);
