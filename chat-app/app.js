var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
require('./auth/passportAuth')();

var routes = require('./routes/index');

var app = express();

var rooms = [];

var chat = require('./routes/chat')(rooms);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({
	secret : 'catscanfly',
	resave : false,
	saveUninitialized : true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/chat', chat);

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get("/auth/facebook/callback", passport.authenticate('facebook', {
	successRedirect : '/chat/rooms/',
	failRedirect : '/'
}));

app.get('/logout', function(req, resp) {
	req.logout();
	resp.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message : err.message,
			error : err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message : err.message,
		error : {}
	});
});

var server = http.createServer(app);
require('./routes/chat-socket')(server, rooms);

module.exports = server;
