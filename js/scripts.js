var gameBoard = [9, 9, 9, 9, 9, 9, 9, 9, 9];
var winner = 0;
var turnCount = 1;
var players = 0;
var play;



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
      return winner = "Player 1 Wins!";
    } else if (checkWinner == 3) {
      return winner = "Player 2 Wins!";
    } else if (gameBoard.indexOf(9) == -1){
      return winner = "Tie!";
    } else {
      var winner = 0;
    }
  } return winner;
};

function findMove(gameBoard) {
  var winCombos = [[3,4,5], [1,4,7], [0,4,8], [2,4,6], [0,1,2], [6,7,8], [0,3,6], [2,5,8]];
  var theSums = [];
  var thePlays = [];
  for (var i = 0; i < 8; i++){
    var checkBoard = gameBoard[winCombos[i][0]] + gameBoard[winCombos[i][1]] + gameBoard[winCombos[i][2]];
    var options = [gameBoard[winCombos[i][0]], gameBoard[winCombos[i][1]], gameBoard[winCombos[i][2]]];
    var theIndex = options.indexOf(9);
    var thePlay = winCombos[i][theIndex];
    thePlays.push(thePlay);
    theSums.push(checkBoard);
  }
  debugger;
  var win = theSums.indexOf(11);
  var blockPlayer2 = theSums.indexOf(9);
  var match = theSums.indexOf(19);
  var blockPlayer1 = theSums.indexOf(18);
  //debugger;
  if (gameBoard[4] == 9){
    takeTurn(1, 4);
    return 4;
  } else if (win != -1){ //Finds if computer has 2 matching spots with an empty spot
    takeTurn(1, thePlays[win]);
    return thePlays[win];
  } else if (blockPlayer2 != -1){ //Finds if player has 2 matching spots with an empty spot
    takeTurn(1, thePlays[blockPlayer2]);
    return thePlays[blockPlayer2];
  } else if (match != -1){ //Finds if computer has 1 spot with 2 empty spots.
    takeTurn(1, thePlays[match]);
    return thePlays[match];
  } else if (blockPlayer1 != -1){ //Finds if player has 1 spot with 2 empty spots.  Blocks player.
    takeTurn(1, thePlays[blockPlayer1]);
    return thePlays[blockPlayer1];
  }
};

$(document).ready(function(){

  //For on player hard game.
  $(".col").click(function(){
    if (players == 0){
      if (winner != 1){
        var currentClass = $(this).attr("class");  //Pulling the class out to get the cell
        var cell = parseInt(currentClass[1]);  //removing the character that designates a cell
        var play = takeTurn(0, cell);
        if (play != false){  // Player One
          $(this).text("X");
        } else {
            return alert("This cell is unavailable");
        }
        var endGame = findWinner(gameBoard);
        if (endGame != 0){
          $(".turn").empty();
          $(".turn").text("Game Over, " + endGame);
          $(".showme").show();
          return winner = 1;
        } else {
          var play = findMove(gameBoard);
          $(".c" + play).text("O");
          var endGame = findWinner(gameBoard);
          if (endGame != 0){
            $(".turn").empty();
            $(".turn").text("Game Over, Computer Wins!");
            $(".showme").show();
            winner = 1;
          }
        }
      } else {
        //show refresh button, game over
      }

    }
  });

  //For one player game easy mode.
  $(".col").click(function(){
    if (players == 1){
      if (winner != 1){
        var currentClass = $(this).attr("class");  //Pulling the class out to get the cell
        var cell = parseInt(currentClass[1]);  //removing the character that designates a cell
        var play = takeTurn(0, cell);
        if (play != false){  // Player One
          $(this).text("X");
        } else {
            return alert("This cell is unavailable");
        }
        var endGame = findWinner(gameBoard);
        if (endGame != 0){
          $(".turn").empty();
          $(".turn").text("Game Over, " + endGame);
          $(".showme").show();
          return winner = 1;
        } else {
          var compPlay = false;
          while (compPlay == false){
            play = Math.floor((Math.random() * 8) + 0)
            compPlay = takeTurn(1, play);
          }
          $(".c" + play).text("O");
          var endGame = findWinner(gameBoard);
          if (endGame != 0){
            $(".turn").empty();
            $(".turn").text("Game Over, Computer Wins!");
            $(".showme").show();
            winner = 1;
          }
        }
      } else {
        //show refresh button, game over
      }

    }
  });

  //For two player game.
  $('.col').click(function(){
    if (players == 2){
      if (winner != 1){ //Checking for game over
        var currentClass = $(this).attr("class");  //Pulling the class out to get the cell
        var cell = parseInt(currentClass[1]);  //removing the character that designates a cell
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
          $(".turn").empty();
          $(".turn").text("Game Over, " + endGame);
          winner = 1;
        }
      } else {
        alert("Game is over, Refresh to play again.");
      }
    }
  });


});
