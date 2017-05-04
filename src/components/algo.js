const aiIndex = function(props, board) {
  const maxPlayer = props.startSym; 
  const minPlayer = (maxPlayer === 'X') ? 'O' : 'X';

  const winner = function(board, player){
    if (
          (board[0] === player && board[1] === player && board[2] === player) ||
          (board[3] === player && board[4] === player && board[5] === player) ||
          (board[6] === player && board[7] === player && board[8] === player) ||
          (board[0] === player && board[3] === player && board[6] === player) ||
          (board[1] === player && board[4] === player && board[7] === player) ||
          (board[2] === player && board[5] === player && board[8] === player) ||
          (board[0] === player && board[4] === player && board[8] === player) ||
          (board[2] === player && board[4] === player && board[6] === player)
          ) {
          return true;
      } else {
          return false;
      }
  }

  const tie = function(board) {
    var moves = board.join('').replace(/null/g, '');
    if (moves.length === 9) {
      return true;
    }
    return false;
  }

  const copyBoard = function(board) {
    return board.slice(0);
  }

  const validMove = function(move, player, board){
    var newBoard = copyBoard(board);
    if(newBoard[move] === null){
      newBoard[move] = player;
      return newBoard;
    } else
      return null;
  }


  const minScore = function(board) {
    if (winner(board, maxPlayer)) {
      return 10;
    } else if (winner(board, minPlayer)) {
      return -10;
    } else if (tie(board)) {
      return 0;
    } else {
      var bestMoveValue = 100;
      for (var i = 0; i < board.length; i++) {
        var newBoard = validMove(i, minPlayer, board);
        if (newBoard) {
          var predictedMoveValue = maxScore(newBoard);
          if (predictedMoveValue < bestMoveValue) {
            bestMoveValue = predictedMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  }

  const maxScore = function(board) {
     if(winner(board, maxPlayer)) {
      return 10;
    } else if(winner(board, minPlayer)) {
      return -10;
    } else if(tie(board)) {
      return 0;
    } else {
      var bestMoveValue = -100;
      for (var i = 0; i < board.length; i++) {
        var newBoard = validMove(i, maxPlayer, board);
        if (newBoard) {
          var predictedMoveValue = minScore(newBoard);
          if (predictedMoveValue > bestMoveValue) {
            bestMoveValue = predictedMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  }

  const findAiMove = function(board) {
    var bestMoveScore = 100;
    let move = null;

    if(winner(board, 'X') || winner(board, 'O' || tie(board))) {
      return null;
    }
    for(var i = 0; i < board.length; i++){
      let newBoard = validMove(i, minPlayer, board);

      if(newBoard) {
        var moveScore = maxScore(newBoard);
        if (moveScore < bestMoveScore) {
          bestMoveScore = moveScore;
          move = i;
        }
      }
    }
    return move;
  }

  return findAiMove(board);
}

export default aiIndex;
