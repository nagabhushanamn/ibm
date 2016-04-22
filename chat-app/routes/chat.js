/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
var app = require('../app');

module.exports = function(rooms) {

	function isSecured(req, resp, next) {
		if (req.isAuthenticated()) {
			next();
		} else {
			resp.redirect('/');
		}
	}

	router.get('/rooms', isSecured, function(req, res, next) {

		res.render('chatrooms', {
			user : req.user
		});

	});

	router.get('/room/:id', isSecured, function(req, resp, next) {

		resp.render('room', {
			room_id : req.params.id,
			user : req.user,
			room_name : findTitle(req.params.id)
		});

	});

	function findTitle(roomNum) {
		var title = '';
		for (var int = 0; int < rooms.length; int++) {
			if (rooms[int].room_number == roomNum) {
				title = rooms[int].room_name;
				break;
			}
		}
		return title;
	}

	return router;

};