// TODO handle all of the events that come from the server here
var dispatcher;
$(function(){
  dispatcher = establishConnection();
});

var establishConnection = function(){
  //connect here
  /*
   dispatcher.on_open = function(data) {
     console.log('Connection has been established: ', data);
   }
   */
  return dispatcher;
}
