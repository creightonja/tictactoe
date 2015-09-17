var gameBoard = [9, 9, 9, 9, 9, 9, 9, 9, 9];
var winner = 0;
var turnCount = 1;
// var playerCount = 2;


function takeTurn(playerId, boardNum) {
  if (gameBoard[boardNum] == 9){
    gameBoard[boardNum] = playerId;
  } else {
    return false;
  }
  return gameBoard;
};

function random(){
  return Math.floor((Math.random() * 8) + 0);
}


function findWinner(gameBoard) {
  var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  for (var i = 0; i < 8; i++){
    var checkWinner = gameBoard[winCombos[i][0]] + gameBoard[winCombos[i][1]] + gameBoard[winCombos[i][2]];
    if (checkWinner == 0){  //Player 1 values are 0 so when the three matching values = 0 player 1 wins.
      return winner = "Player 1 Wins!";
    } else if (checkWinner == 3) {  //Player 2 values are 1 so when the three matching values = 3 player 2 wins.
      return winner = "Player 2 Wins!";
    } else if (gameBoard.indexOf(9) == -1){  //Checking to see if any unselected cells still exist.
      return winner = "Tie!";
    } else {
      var winner = 0;
    }
  } return winner;
};

$(document).ready(function(){

  var playerCount = $("#check").click( function() {
    $(this).toggleClass("computer");
  });


  $('.col').click(function(){
    var checker = $("#check").hasClass("computer");
    if (winner != 1){ //Checking for game over
      if (playerCount == true){
        var currentClass = $(this).attr("class");  //Pulling the class out to get the cell
        var cell = parseInt(currentClass[1]);  //removing the character that designates a cell
        var whoTurn = turnCount % 2; //Pulling remainder of player moves
        if (whoTurn == 1){  //turnCount starts at 1 so
          var play = takeTurn(0, cell);
          if (play != false){  // Player One
            $(this).find("span").text("X");
            $(".turn").empty();
            $(".turn").text("Player " + (whoTurn + 1) + "'s turn.");
            turnCount++;
          } else {
            alert("This cell is unavailable");
          }
        } else {
          var play = takeTurn(1, cell);
          if (play != false){
            $(this).find("span").text("O");
            $(".turn").empty();
            $(".turn").text("Player " + (whoTurn + 1) + "'s turn.");
            turnCount++;
          } else {
            alert("This cell is unavailable");
          }
        }
        var endGame = findWinner(gameBoard);
        if (endGame != 0){
          $(".turn").empty();
          $(".turn").text("Game Over, " + endGame);
          $(".showme").show();
          winner = 1;
        }


      } else { //Setting for playing against a computer player
        var currentClass = $(this).attr("class");  //Pulling the class out to get the cell
        var cell = parseInt(currentClass[1]);  //removing the character that designates a cell
        var play = takeTurn(0, cell);
        if (play != false){  // Player One
          $(this).find("span").text("X");
          $(".turn").empty();
          $(".turn").text("Player " + (whoTurn + 1) + "'s turn.");
        } else {
          alert("This cell is unavailable");
        }
        var endGame = findWinner(gameBoard);
        if (endGame != 0){
          $(".turn").empty();
          $(".turn").text("Game Over, " + endGame);
          $(".showme").show();
          winner = 1;
        } else {
          while (compPlay != false){
            var play = random();
            var compPlay = takeTurn(1, play);
          }
          $("c" + play).find("span").text("O");
          if (endGame != 0){
            $(".turn").empty();
            $(".turn").text("Game Over, Computer Wins!");
            $(".showme").show();
            winner = 1;
          }
        }
      }
    } else {
      alert("Game is over, Refresh to play again.");
    }
  });
});
