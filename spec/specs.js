
describe('findWinner', function () {
  it("Expects X in position 0,1,2 to equal Player 1 Wins", function() {
    expect(findWinner(["X", "X", "X", 0, 0, 0, 0, 0, 0])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 3,4,5 to equal Player 1 Wins", function() {
    expect(findWinner([0, 0, 0, "X", "X", "X", 0, 0, 0])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 7,8,9 to equal Player 1 Wins", function() {
    expect(findWinner([0, 0, 0, 0, 0, 0, "X", "X", "X"])).to.equal("Player 1 Wins!");
  });


  it("Expects X in position 0,3,6 to equal Player 1 Wins", function() {
    expect(findWinner(["X", 0, 0, "X", 0, 0, "X", 0, 0])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 1,4,7 to equal Player 1 Wins", function() {
    expect(findWinner([0, "X", 0, 0, "X", 0, 0, "X", 0])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 2,5,8 to equal Player 1 Wins", function() {
    expect(findWinner([0, 0, "X", 0, 0, "X", 0, 0, "X"])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 0,4,8 to equal Player 1 Wins", function() {
    expect(findWinner(["X", 0, 0, 0, "X", 0, 0, 0, "X"])).to.equal("Player 1 Wins!");
  });

  it("Expects X in position 2,4,6 to equal Player 1 Wins", function() {
    expect(findWinner([0, 0, "X", 0, "X", 0, "X", 0, 0])).to.equal("Player 1 Wins!");
  });

  it("Expects O in position 0,1,2 to equal Player 2 Wins", function() {
    expect(findWinner(["O", "O", "O", 0, 0, 0, 0, 0, 0])).to.equal("Player 2 Wins!");
  });

  it("Expects non-winning combo to equal 0", function() {
    expect(findWinner(["O", "O", 0, 0, 0, 0, 0, 0, 0])).to.equal(0);
  });

});
