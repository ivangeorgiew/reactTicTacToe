import React from 'react';
import PropTypes from 'prop-types';
import './../index.css';




/* SQUARE COMPONENT */
const Square = function(props) {
  return (
    <button className="square" onClick={props.state.handleClick}>
      {props.state.value}
    </button>
  );
}

Square.propTypes = {
  state: PropTypes.object.isRequired
};




export default Square;
