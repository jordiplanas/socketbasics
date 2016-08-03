var  socket=io();
socket.on('connect',function(){
	console.log('connected to browser');

});

socket.on('message', function(message){

	console.log(message.text);
});