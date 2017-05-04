import { calcWinner } from './Game';




/* AI INDEX */ 
const aiIndex = function(props, board) {
  const human = props.startSym; 
  const computer = (human === 'X') ? 'O' : 'X';

  if(calcWinner(props, board))
    return false;

  const forCycle = function(i, board, type, bms, index){
    if(i < board.length - 1) {
      if(board[i])
        return null;

      const newBoard = board.slice();

      if(type === 'max')
        newBoard[i] = human;
      else
        newBoard[i] = computer;

      const ms = (type === 'max') ? score(newBoard, 'min')
        : score(newBoard, 'max');

      const eq = (type === 'max') ? ms > bms  : ms < bms;

      return eq ? forCycle(i+1, board, type, ms, i) :
        forCycle(i+1, board, type, bms, index);
    }

    //for win
    if(type === 'best')
      return index;

    //for max and min
    return bms;
  };

  const score = function(board, type) {
    if(calcWinner(props, board) === 'Wins Computer')
      return 10;
    if(calcWinner(props, board) === 'Wins Human')
      return -10;
    if(calcWinner(props, board) === 'Tie')
      return 0;
    
    if(type === 'max')
      return forCycle(0, board, 'max', -100, 0);

    return forcycle(0, board, 'min', 100, 0);
  };

  return forCycle(0, board, 'win', 100, 0);
};




export default aiIndex;
