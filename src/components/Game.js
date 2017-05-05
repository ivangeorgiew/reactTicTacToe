import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';

import Board from './Board';
import aiIndex from './aiIndex';



/* CALC WINNER */
function calcWinner (props, board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(const pair of lines) {
    const [a, b, c] = pair;

    if(board[a] && board[a] === board[b]
      && board[b] === board[c]) {

      if(!props.vsComp)
        return (props.startSym===board[a]) ? 'Wins Player 1' : 'Wins Player 2'; 
      return (props.startSym===board[a]) ? 'Wins Human' : 'Wins Computer';
    }
  }

  if(board.indexOf(null) < 0)
    return 'Tie';

  return false;
};




/* CLICK ON A SQUARE */
function squareClick (props, i) {
  const history = props.history.slice(0, props.stepNumber + 1);
  const curr = history[history.length - 1];
  const board = curr.board.slice();

  if(calcWinner(props, board) || board[i])
    return false;

  board[i] = props.xIsNext ? 'X' : 'O';

  return props.render(Object.assign({...props}, {
    history: history.concat([{
      board: board
    }]), 
    stepNumber: history.length,
    xIsNext: !props.xIsNext
  }));
};




/* JUMP TO MOVE */
function jumpTo (props, moveIndex) {
  const xIsNext = (moveIndex === 0) ? props.startSym === 'X' :
    (props.startSym !== 'X' ? moveIndex % 2 !== 0 : moveIndex % 2 === 0);

  return props.render(Object.assign({...props}, {
    stepNumber: moveIndex,
    xIsNext
  }));
};




/* GAME COMPONENT */
function Game (props) {
  const history = props.history.slice();
  const curr = history[props.stepNumber];
  const winner = calcWinner(props, curr.board);

  function newGame () {
    return (
      <a className='ng' href='#' onClick={() => jumpTo(props, 0)}>
        New Game
      </a>
    );
  };

  const status = winner ? winner : (props.vsComp ? newGame() : 
    `Next is: ${props.xIsNext ? 'X' : 'O'}`);

  const moves = !props.vsComp ? history.map(function(move, moveIndex) {
    const text = (moveIndex > 0) ? 
      `Move #${moveIndex}` : 'New Game'; 

    return (
      <li key={moveIndex}>
        <a href='#' onClick={() => jumpTo(props, moveIndex)}>
          {text}
        </a>
      </li>
    );
  }) : winner ? newGame() : false;




  //if vs comp and its his turn
  if(props.vsComp && 
     props.stepNumber % 2 !== 0 && 
     props.stepNumber < 9) 
    return squareClick(props, aiIndex(props, curr.board));




  return (
    <div>
      <a className='home' href='/reactTicTacToe/'>Home</a>
      <div className="game">
        <div className="game-board">
          <Board 
            board={curr.board}
            handleClick={(i) => squareClick.bind(this, props)(i)}
          />
        </div>

        <div className="game-info">
          <div className='status'>{status}</div>
          <ol className='moves' start='0'>{moves}</ol>
        </div>
      </div>
    </div>
  );
};




/* PROP TYPES */
Game.propTypes = {
  history: PropTypes.array.isRequired,
  stepNumber: PropTypes.number.isRequired,
  startSym: PropTypes.string.isRequired,
  xIsNext: PropTypes.bool.isRequired,
  vsComp: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired
};



export { Game, calcWinner };
