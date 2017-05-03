import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

import Board from './components/Board';




/* RENDER FUNC */
const render = function(Comp, props={}) {
  return ReactDOM.render(
    <Comp {...props}/>,
    document.getElementById('root')
  );
};




/* GAME COMPONENT */
const Game = function(props) {

  /* FIND WINNER */
  const calcWinner = function(squares) {
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
      if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
        return squares[a];
    }
    return false;
  };




  /* CLICK ON A SQUARE */
  const squareClick = function(props) {
    return function(i) { 
      const history = props.state.history.slice(0, props.state.stepNumber + 1);
      const curr = history[history.length - 1];
      const squares = curr.squares.slice();
      if(calcWinner(squares) || squares[i])
        return;

      squares[i] = props.state.xIsNext ? 'X' : 'O';
      return props.render({state: Object.assign(props.state, 
        {
          history: history.concat([{
            squares: squares
          }]), 
          stepNumber: history.length,
          xIsNext: !props.state.xIsNext
        }),
        render: props.render
      });
    };
  };




  /* JUMP TO MOVE */
  const jumpTo = function(moveIndex, props) {
    if(moveIndex !== 0) {
      return props.render({state: Object.assign(props.state, {
          stepNumber: moveIndex,
          xIsNext: (moveIndex % 2) ? false : true
        }),
        render: props.render
      });
    }

    return props.render({state: Object.assign(props.state, {
        stepNumber: moveIndex,
        xIsNext: props.state.startSym === 'X'
      }),
      render: props.render
    });
  };


  

  /* NON-FUNCTIONS INSIDE GAME COMP */
  const history = props.state.history.slice();
  const curr = history[props.state.stepNumber];
  const winner = calcWinner(curr.squares);

  const status = (winner) ? `Winner: ${winner}` : 
    (curr.squares.indexOf(null) < 0) ? 'Tie' :
    `Next player is: ${props.state.xIsNext ? 'X' : 'O'}`;

  const moves = history.map(function(move, moveIndex) {
    const text = (moveIndex > 0) ? `Move #${moveIndex}` : 'NEW GAME'; 
    return (
      <li key={moveIndex}>
        <a href='#' onClick={() => jumpTo(moveIndex, props)}>
          {text}
        </a>
      </li>
    );
  });




  /* RETURN GAME COMPONENT */
  return (
    <div>
      <a className='home' href='/'>Home</a>
      <div className="game">
        <div className="game-board">
          <Board state={{
            squares: curr.squares,
            handleClick: squareClick(props)
          }}/>
        </div>
        <div className="game-info">
          <div className='status'>{status}</div>
          <ol className='moves' start='0'>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  state: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};




/* X OR O */
const ChooseSymbol = function(props) {

  /* CLICK FUNC */
  const handleClick = function(startSym) {
    const xIsNext = startSym === 'X';

    return render(Game, {
      state: {
        history: [{squares: Array(9).fill(null)}],
        stepNumber: 0,
        startSym,
        xIsNext
      },
      render: render.bind(null, Game)
    });
  };



  /* RETURNS CHOOSESYMBOL COMP*/
  return (
    <div className='status'>
      <h3> Choose symbol </h3>
      <button className='square' 
        onClick={() => handleClick('X')}>X</button>
      <button className='square'
        onClick={() => handleClick('O')}>O</button>
    </div>
  );
};




/* INITIAL RENDER */
render(ChooseSymbol);



/* FROM HERE ON ARE OTHER TUTS */

/*
 * import ShoppingList from './components/ShoppingList';
 * render(ShoppingList, {name: 'Mark'});
 */

/*
 * import Parent from './components/Events.js';
 * render(Parent);
 */

/* 
 * import MyInput from './components/MyInput.js';
 * render(MyInput, {
 *   state: {name: 'Marko', email: 'marko@abv.bg', password:''},
 *   render
 * });
 */
