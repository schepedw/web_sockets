var BallFactory = {
  ballNumber : 1,
  create : function (){
    ball = $("<div class='ball' id=ball_number_" + this.ballNumber + ">" + this.ballNumber + "</div>");
    this.ballNumber++;
    $('.ball-container').append(ball);
    return ball;
  }
}

var randomColor = function(){
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}
