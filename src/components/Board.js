import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';

import Square from './Square';




/* RENDER SQUARE */
const renderSquare = function(i, props) {
  return (
    <Square
      state={{
        value: props.state.squares[i],
        handleClick: () => props.state.handleClick(i)
      }}
    />
  );
};




/* BOARD COMPONENT */
const Board = function(props) {
  return (
    <div>
      <div className="board-row">
        {renderSquare(0, props)}
        {renderSquare(1, props)}
        {renderSquare(2, props)}
      </div>
      <div className="board-row">
        {renderSquare(3, props)}
        {renderSquare(4, props)}
        {renderSquare(5, props)}
      </div>
      <div className="board-row">
        {renderSquare(6, props)}
        {renderSquare(7, props)}
        {renderSquare(8, props)}
      </div>
    </div>
  );
};

Board.propTypes = {
  state: PropTypes.object.isRequired
};




export default Board;
