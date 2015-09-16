var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
var gameBoard = [9, 9, 9, 9, 9, 9, 9, 9, 9];
var turnCount = 1;


function takeTurn(playerId, boardNum) {
  if (gameBoard[boardNum] == 9){
    gameBoard[boardNum] = playerId;
  } else {
    return false;
  }
  return gameBoard;
};


function findWinner(gameBoard) {
  var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  for (var i = 0; i < 8; i++){
    var checkWinner = gameBoard[winCombos[i][0]] + gameBoard[winCombos[i][1]] + gameBoard[winCombos[i][2]];
    if (checkWinner == 0){
      return "Player 1 Wins!";
    } else if (checkWinner == 3) {
      return "Player 2 Wins!";
    } else if (gameBoard.indexOf(9) == -1){
      return "Tie!";
    } else {
      var winner = 0;
    }
  } return winner;
};

function playGame(playerId, boardNum){
  var move = takeTurn(playerId, boardNum);
  var endGame = findWinner(gameBoard);
  if (endGame != 0){
    return endGame;
  }
  return move;
};

function checkBox(){

};

$(document).ready(function(){

  $('.col').click(function(){
    var currentClass = $(this).attr("class");
    var cell = parseInt(currentClass[1]);
    var whoTurn = turnCount % 2;
    if (whoTurn == 1){
      var play = takeTurn(0, cell);
      if (play != false){
        $(this).text("X");
        $(".turn").empty();
        $(".turn").text("Player " + (whoTurn + 1) + "'s turn.");
        turnCount++;
      } else {
        alert("This cell is unavailable");
      }
    } else {
      var play = takeTurn(1, cell);
      if (play != false){
        $(this).text("O");
        $(".turn").empty();
        $(".turn").text("Player " + (whoTurn + 1) + "'s turn.");
        turnCount++;
      } else {
        alert("This cell is unavailable");
      }
    }
    var endGame = findWinner(gameBoard);
    if (endGame != 0){
      alert("Game Over, " + endGame);
    }

  });

});
