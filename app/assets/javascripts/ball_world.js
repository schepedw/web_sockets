var BallFactory = {
  ballNumber : 1,
  create : function (){
    ball = $("<div class='ball' id=ball_number_" + this.ballNumber + ">" + this.ballNumber + "</div>");
    this.ballNumber++;
    ball.click(ballClick);
    $('.ball-container').append(ball);
    return ball;
  }
}

var randomColor = function(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var ballClick = function(){
  dispatcher.trigger('ball.click', {ball_id: $(this).attr('id')});
}
