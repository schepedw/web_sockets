var createBall = function(){
  BallFactory.create();
};

var clickBall = function(ball_id){
  $("#"+ball_id).toggleClass('selected');
}

var deleteSelected = function(){
  $('.selected').remove();
}

var colorSelected = function(){
  $('.selected').css('background-color', randomColor());
}
