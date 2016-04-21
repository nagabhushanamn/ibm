/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
var passport=require('passport');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});




// define the home page route
router.get("/", function(req, res, next) {
	res.render('index', {
		title : 'chat-app'
	});
});

function securePage(req,resp,next){
    if(req.isAuthenticated()){
        next();
    }else{
        resp.redirect('/');
    }
}


router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/chatrooms',
    failRedirect: '/'
}));


// define the chatrooms route
router.get('/chatrooms',securePage,function(req,resp,next){
    resp.render('chatrooms',{title:'Chat Rooms',user:req.user});
});

router.get('/room/:id',function(req,resp,next){
    resp.render('room',{room_id:req.params.id,user:req.user,room_name:'SomeRoom'});
});



router.get('/logout',function(req,resp){
    req.logout();
    resp.redirect('/');
});

// --------------------------------------------
// router.get('/setcolor', function(req, res, next) {
// req.session.color = 'red';
// res.send('set fav color');
// });

// router.get('/getcolor', function(req, res, next) {
// console.log('fav color : ' + req.session.color);
// res.send('get fav color ' + req.session.color);
// });
// --------------------------------------------

module.exports = router;