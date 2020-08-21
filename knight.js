let moves = [];

function knightMove(x, y, n) {
  //Return blank if initial position is out of the chess board
  if (x > n || y > n) {
    return moves;
  }
  let firstPossibleMoves = getPossibleMoves(n, [x, y]);
  moves = firstPossibleMoves;
  console.log(" initial====================================");
  console.log(firstPossibleMoves);

  for (let i = 0; i < moves.length; i++) {
    console.log(1, " start====================================");
    console.log(getPossibleMoves(n, firstPossibleMoves[i]));
    //To do Add coordinates from above array to main array only if it's unique
  }
}

function shouldNotInAllMoves(move) {
  let isAvailable = false;
  for (let i = 0; i < moves.length; i++) {
    const position = moves[i];
    console.log(
      moves[i],
      move,
      position[0] === move[0] && position[1] === move[1]
    );
    if (position[0] === move[0] && position[1] === move[1]) {
      isAvailable = true;
      break;
    }
  }
  return !isAvailable;
}

function getPossibleMoves(chessboardLength, position) {
  // Generate all knight moves (even those that go beyond the board).
  const possibleMoves = [
    [position[0] - 1, position[1] - 2],
    [position[0] - 2, position[1] - 1],
    [position[0] + 1, position[1] - 2],
    [position[0] + 2, position[1] - 1],
    [position[0] - 2, position[1] + 1],
    [position[0] - 1, position[1] + 2],
    [position[0] + 1, position[1] + 2],
    [position[0] + 2, position[1] + 1]
  ];

  // Filter out all moves that go beyond the board.
  return possibleMoves.filter(move => {
    const boardSize = chessboardLength;
    return (
      move[0] >= 0 && move[1] >= 0 && move[0] < boardSize && move[1] < boardSize
    );
  });
}
knightMove(2, 3, 8);
