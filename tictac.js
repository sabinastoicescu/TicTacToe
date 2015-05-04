

$(document).ready(function(){
  
  function newGame() {
  var turn = 0;
  $("td").html("");
  $("td").on('click',function(){
    if (turn % 2 === 0) {
      $(this).html("x") ;
    } else {
      $(this).html("y") ;
    }
    turn++;
    $(this).off("click");
  
    checkWinner(turn);
  });
  };
  

function gameFinished(message) {

    alert(message);
    newGame();
}

function checkWinner(turn) {

var winCombos = [[$("#1"),$("#2"),$("#3")], [$("#4"),$("#5"),$("#6")], [$("#7"),$("#8"),$("#9")], [$("#1"),$("#4"),$("#7")], [$("#2"),$("#5"),$("#8")], [$("#3"),$("#6"),$("#9")], [$("#1"),$("#5"),9], [$("#3"),$("#5"),$("#7")]]

  for (var i=0;i < winCombos.length;i++){
     var combo = winCombos[i]; 
     var checkY = combo[0].html() == "y" && combo[1].html() == "y" && combo[2].html() == "y";
     var checkX = combo[0].html() == "x" && combo[1].html() == "x" && combo[2].html() == "x";
  
    if (checkX) {
      gameFinished("X, you won!");
      return;
    } else if (checkY) {
      gameFinished("Y, you win!");
      return;
    }
  }

    if (turn == 9) {
      gameFinished("Tie!");
    }

}  
});
