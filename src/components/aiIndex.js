import { calcWinner } from './Game';

export default aiIndex;




/* AI INDEX */ 
function aiIndex(props, board) {
  const human = props.startSym; 
  const computer = (human === 'X') ? 'O' : 'X';

  if(calcWinner(props, board))
    return null;

  /* Calculates the score for
   * both the computer and human
   */
  function score (board, type) {
    if(calcWinner(props, board) === 'Wins Human')
      return 10;
    if(calcWinner(props, board) === 'Wins Computer')
      return -10;
    if(calcWinner(props, board) === 'Tie')
      return 0;
    
    if(type === 'max')
      return forCycle(0, board, 'max', -100, null);

    return forCycle(0, board, 'min', 100, null);
  };

  /* A For loop that is needed 
   * for winner determination, 
   * maxScore and minScore
   */
  function forCycle (i, board, type, bms, index){
    if(i < board.length) {
      if(board[i] !== null)
        return forCycle(i+1, board, type, bms, index);

      const newBoard = board.slice();

      if(type === 'max')
        newBoard[i] = human;
      else
        newBoard[i] = computer;

      const ms = (type === 'max') ? score(newBoard, 'min')
        : score(newBoard, 'max');

      const eq = (type === 'max') ? ms > bms : ms < bms;

      return eq ? forCycle(i+1, board, type, ms, i) :
        forCycle(i+1, board, type, bms, index);
    }

    //for win
    if(type === 'win')
      return index;

    //for max and min
    return bms;
  };

  return forCycle(0, board, 'win', 100, null);
};
