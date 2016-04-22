/**
 * http://usejsdoc.org/
 */

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/chatdb');

// --------------------------------------

// mongoose User-Model

var User = mongoose.model('User', {
	profileId : String,
	fullName : String,
	profilePic : String
});

// --------------------------------------

module.exports = function() {

	var newUser;
	
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	//		User.findOne(id, function(err, user) {
	//			done(err, user);
	//		});
		done(null,newUser);
	});

	passport.use(new FacebookStrategy({
		clientID : 488578934678645,
		clientSecret : "100bdff4992340a1679a3fa7d7b5066e",
		callbackURL : "http://canchat.herokuapp.com/auth/facebook/callback",
		profileFields : [ "id", "displayName", "photos" ]
	}, function(accessToken, refreshToken, profile, done) {

//		User.findOne({
//			'profileId' : profile.id
//		}, function(err, user) {
//
//			if (user) {
//				done(null, user);
//			} else {

				var rn=Math.random();
				 newUser = new User({
					id:rn,
					profileId : profile.id,
					fullName : profile.displayName,
					profilePic : profile.photos[0].value || ''
				});
				
				done(null,newUser);

//				newUser.save(function(err, user) {
//					done(null, user);
//				});
//			}
//		});

	}));

};