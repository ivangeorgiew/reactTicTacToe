import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';

import Square from './Square';




/* RETURN SQUARE */
function returnSquare (props, i) {
  return (
    <Square
      value={ props.board[i] }
      handleClick={ () => props.handleClick(i) }
    />
  );
};




/* BOARD COMPONENT */
function Board (props) {
  return (
    <div>
      <div className="board-row">
        {returnSquare(props, 0)}
        {returnSquare(props, 1)}
        {returnSquare(props, 2)}
      </div>
      <div className="board-row">
        {returnSquare(props, 3)}
        {returnSquare(props, 4)}
        {returnSquare(props, 5)}
      </div>
      <div className="board-row">
        {returnSquare(props, 6)}
        {returnSquare(props, 7)}
        {returnSquare(props, 8)}
      </div>
    </div>
  );
};




/* PROP TYPES */
Board.propTypes = {
  board: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
};




export default Board;
