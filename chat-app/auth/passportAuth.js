/**
 * http://usejsdoc.org/
 */
var mongoose = require('mongoose');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var config = require('../config/config');

module.exports = function() {

	var chatUser = new mongoose.Schema({
		profileId : String,
		fullName : String,
		profilePic : String
	});

	var UserModel = mongoose.model('chatUser', chatUser);

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		UserModel.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use(new FacebookStrategy({
		clientID : config.fb.appID,
		clientSecret : config.fb.appSecret,
		callbackURL : config.fb.callbackURL,
		profileFields : [ 'id', 'displayName', 'photos' ]
	}, function(accessToken, refreshToken, profile, done) {

		UserModel.findOne({
			'profileId' : profile.id
		}, function(err, result) {
			if (result) {
				done(null, result);
			} else {
				// Create a new user in MongoDB
				var newChatUser = new UserModel({
					profileId : profile.id,
					fullName : profile.displayName,
					profilePic : profile.photos[0].value || ''
				});

				newChatUser.save(function(err) {
					done(null, newChatUser);
				});
			}
		});

	}));

};
