import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';

import Square from './Square';




/* BOARD COMPONENT */
const Board = function(props) {

  /* RETURN SQUARE */
  const returnSquare = function(i) {
    return (
      <Square
        value={ props.squares[i] }
        handleClick={ () => props.handleClick(i) }
      />
    );
  };




  /* RENDER BOARD */
  return (
    <div>
      <div className="board-row">
        {returnSquare(0)}
        {returnSquare(1)}
        {returnSquare(2)}
      </div>
      <div className="board-row">
        {returnSquare(3)}
        {returnSquare(4)}
        {returnSquare(5)}
      </div>
      <div className="board-row">
        {returnSquare(6)}
        {returnSquare(7)}
        {returnSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};




export default Board;
