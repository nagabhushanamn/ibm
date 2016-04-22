/**
 * http://usejsdoc.org/
 */

var socket = io.connect("http://localhost:3000/roomlist");

socket.on('connect', function() {
	console.log('connected..');
});


$(function(){
	$('#create').click(function(){
		var newRoom=$('.new-room').val();
		if(newRoom!=''){
			var number=parseInt(Math.random()*100000)
			socket.emit('newroom',{room_name:newRoom,room_number:number});
			$('.new-room').val('');
		}
	});
})


socket.on('roomupdate', function(data) {
	var rooms = JSON.parse(data);
	$('.room-list').html('');
	rooms.forEach(function(room) {
		var str = '<li class="list-group-item"><a href=/chat/room/' + room.room_number + '>' + room.room_name+ '</a></li>';
		$('.room-list').prepend(str);
	});
});