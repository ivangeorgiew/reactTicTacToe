import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';

export default Square;




/* SQUARE COMPONENT */
Square.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired
};

function Square(props) {
  return (
    <button className="square" onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
