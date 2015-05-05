$(function(){

  $('.ball').click(function(){
    //TODO If everyone is going to know we've selected this ball, we need to tell the server
    $(this).toggleClass('selected');
  });

  $('#new-ball').click(function(){
    //TODO - instead of directly telling the ball to move, tell the server you've clicked this button
  });

  $('#delete-balls').click(function(){
    //TODO - instead of directly deleting the ball, tell the server you've clicked this button
  });

  $('#color-balls').click(function(){
    //TODO - instead of coloring the ball, tell the sersver you've clicked this button
  });

});
