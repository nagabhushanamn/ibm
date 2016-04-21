var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require("./config/config");

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/chat');

var passport=require('passport');
var FacebookStrategy=require('passport-facebook').Strategy;


// var routes = require('./routes/index');
// var users = require('./routes/users');
var chat = require('./routes/chat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.engine("html", require("hogan-express"));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : false
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

// ----------------------------------------------------

 var env = process.env.NODE_ENV || 'developement';
//
if (env === 'developement') {
	console.log('in dev mode...' + config.sessionSecret);
	app.use(session({
		secret : config.sessionSecret,
		resave : false,
		saveUninitialized : true
	}));
} else {
	console.log('in prod mode...');

 }

// ----------------------------------------------------



// var userSchema=mongoose.Schema({
// userName:String,
// password:String,
// fullName:String
// });
//
// var Person=mongoose.model('users',userSchema);
//
// var nag=new
// Person({userName:'nag',password:'secret',fullName:'Nagabhushanam'});
//
// nag.save(function(err){
// console.log('user saved');
// });
//



// -------------------------------------------------------


app.use(passport.initialize());
app.use(passport.session());

require('./auth/passportAuth')();

// ---------------------------------------------------------



app.use('/', chat);

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

module.exports = app;
