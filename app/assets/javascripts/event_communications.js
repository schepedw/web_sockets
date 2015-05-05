// TODO handle all of the events that come from the server here
var dispatcher;
$(function(){
  dispatcher = establishConnection();
});

var establishConnection = function(){
  dispatcher = new WebSocketRails('localhost:3000/websocket');
  dispatcher.on_open = function(data) {
    console.log('Connection has been established: ', data);
  }
  dispatcher.bind('ball.click', clickBall);
  return dispatcher;
}

var clickBall = function(message){
  $('#' + message.ball_id).toggleClass('selected');
}
