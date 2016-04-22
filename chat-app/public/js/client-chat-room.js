/**
 * http://usejsdoc.org/
 */

var socket = io.connect("http://localhost:3000/messages");

socket.on('connect', function() {
	console.log('connected..');
	socket.emit('joinroom',{room_number:room_number,user:userName});
});


socket.on('message-feed',function(data){
	var msg=JSON.parse(data);
	updateMessageFeed(msg.userName, msg.message);
});


$(document).on('keyup','.new-message',function(e){
	if(e.which===13&&$(this).val()!==''){
		socket.emit('new-message',{message:$(this).val(),userName:userName,room_number:room_number})
		updateMessageFeed(userName,$(this).val());
		$(this).val('')
	}
});

function updateMessageFeed(user,message){
	$('<li class=list-group-item><span class=badge>'+user+'</span>  >> '+message+'</li>').prependTo($('.messages'));
}
//
//setInterval(function() {
//	socket.emit('updateList',{room:room_number});
//	console.log('emiting updateList event...');
//}, 15*1000);
//
//
//socket.on('updateUserList',function(data){
//	var users=JSON.parse(data);
//	console.log(users);
//});

