/**
 * http://usejsdoc.org/
 */

module.exports = function(server, rooms) {

	// --------------------------------------------------------------------------

	var io = require('socket.io')(server);

	io.of('/roomlist').on('connection', function(socket) {

		console.log('connected..');

		socket.emit('roomupdate', JSON.stringify(rooms));

		socket.on('newroom', function(data) {
			console.log('newroom - ' + data);
			rooms.push(data);
			socket.broadcast.emit('roomupdate', JSON.stringify(rooms));
			socket.emit('roomupdate', JSON.stringify(rooms));
		});

	});
	
	io.of('/messages').on('connection', function(socket) {
		
		console.log('connected to chat-room');
		
		socket.on('joinroom',function(data){
			socket.userName=data.user;
			socket.join(data.room_number);
			//updateUserList(data.room_number,true);
		});
		
		socket.on('new-message',function(data){
			console.log('new-message event....');
			socket.broadcast.to(data.room_number).emit("message-feed",JSON.stringify(data));
		});
		
		//		function updateUserList(room,updateAll){
		//			var users=io.of('/messages').clients(room);
		//			var list=[];
		//			for (var int = 0; int < users; int++) {
		//				list.push({userName:users[0].userName});
		//			}
		//			socket.to(room).emit('updateUserList',JSON.stringify(list));
		//			if(updateAll){
		//				socket.broadcast.to(room).emit('updateUserList',JSON.stringify(list));
		//			}
		//		}
		//		
		//		socket.on('updateList',function(data){
		//			updateUserList(data.room);
		//		});
		
		
	});

	// --------------------------------------------------------------------------

};