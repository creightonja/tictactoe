describe('findWinner', function () {
  it("Expects X in position 0,1,2 to equal Player 1 Wins", function() {
    expect(findWinner([0, 0, 0, 9, 9, 9, 9, 9, 9])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 3,4,5 to equal Player 1 Wins", function() {
    expect(findWinner([9, 9, 9, 0, 0, 0, 9, 9, 9])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 7,8,9 to equal Player 1 Wins", function() {
    expect(findWinner([9, 9, 9, 9, 9, 9, 0, 0, 0])).to.equal("Player 1 Wins!");
  });


  it("Expects X in position 0,3,6 to equal Player 1 Wins", function() {
    expect(findWinner([0, 9, 9, 0, 9, 9, 0, 9, 9])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 1,4,7 to equal Player 1 Wins", function() {
    expect(findWinner([9, 0, 9, 9, 0, 9, 9, 0, 9])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 2,5,8 to equal Player 1 Wins", function() {
    expect(findWinner([9, 9, 0, 9, 9, 0, 9, 9, 0])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 0,4,8 to equal Player 1 Wins", function() {
    expect(findWinner([0, 9, 9, 9, 0, 9, 9, 9, 0])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 2,4,6 to equal Player 1 Wins", function() {
    expect(findWinner([9, 9, 0, 9, 0, 9, 0, 9, 9])).to.equal("Player 1 Wins!");
  });

  it("Expects O in position 0,1,2 to equal Player 9 Wins", function() {
    expect(findWinner([1, 1, 1, 9, 9, 9, 9, 9, 9])).to.equal("Player 2 Wins!");
  });

  it("Expects non-winning combo to equal 0", function() {
    expect(findWinner([1, 1, 9, 9, 9, 9, 9, 9, 9])).to.equal(0);
  });
});


describe('takeTurn', function () {
  it("Expects Player 1 marking position 0 to change gameBoard", function() {
    expect(takeTurn(0, 0)).to.eql([0, 9, 9, 9, 9, 9, 9, 9, 9]);
  });

  it("Expects Player 2 marking position 4 to change gameBoard", function() {
    expect(takeTurn(1, 4)).to.eql([0, 9, 9, 9, 1, 9, 9, 9, 9]);
  });

  it("Expects Player 1 marking position 3 to change gameBoard", function() {
    expect(takeTurn(0, 3)).to.eql([0, 9, 9, 0, 1, 9, 9, 9, 9]);
  });

  it("Expects Player 2 marking position 6 to change gameBoard", function() {
    expect(takeTurn(1, 6)).to.eql([0, 9, 9, 0, 1, 9, 1, 9, 9]);
  });

  it("Expects Player 1 marking position 1 to change gameBoard", function() {
    expect(takeTurn(0, 1)).to.eql([0, 0, 9, 0, 1, 9, 1, 9, 9]);
  });

  it("Expects Player 2 marking position 2 to change gameBoard", function() {
    expect(takeTurn(1, 2)).to.eql([0, 0, 1, 0, 1, 9, 1, 9, 9]);
  });

  it("Expects Player 1 marking position 5 to change gameBoard", function() {
    expect(takeTurn(0, 5)).to.eql([0, 0, 1, 0, 1, 0, 1, 9, 9]);
  });

  it("Expects Player 2 marking position 7 to change gameBoard", function() {
    expect(takeTurn(1, 7)).to.eql([0, 0, 1, 0, 1, 0, 1, 1, 9]);
  });

  it("Expects Player 1 marking position 8 to change gameBoard", function() {
    expect(takeTurn(0, 8)).to.eql([0, 0, 1, 0, 1, 0, 1, 1, 0]);
  });

  it("Expects an already marked spot to return false", function() {
    expect(takeTurn(1, 7)).to.eql(false);
  });
});
