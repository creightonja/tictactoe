var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
//var gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];




function takeTurn(playerId, boardNum) {
  if (gameBoard[boardNum] == 0){
    $("." + boardNum).text(playerId);
    gameBoard[boardNum] = playerId;
  } else {
    return false;
  }
};


function findWinner(gameBoard) {
  for (var i = 0; i < 8; i++){
    var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    var checkWinner = gameBoard[winCombos[i][0]] + gameBoard[winCombos[i][1]] + gameBoard[winCombos[i][2]];
    console.log(checkWinner);
    if (checkWinner == "XXX"){
      return "Player 1 Wins!";
    } else if (checkWinner == "OOO") {
      return "Player 2 Wins!";
    } else {
      var winner = 0;
    }
  } return winner;
};

$(document).ready(function(){

  function playGame(){

  };

});
